import { ChangeEvent, FocusEvent, useCallback, useMemo, useState } from "react";

import { Validator } from "@/utils/validator";
import { FormSchema, ValidatorValuetype } from "@/types/validate";

type FormElement = HTMLInputElement | HTMLTextAreaElement;

type DOMEvent = ChangeEvent<FormElement> | FocusEvent<FormElement>;

type EventTargetWithOptionalValue = Omit<
  EventTarget & {
    name: string;
    type: string;
  },
  "value"
>;

type ExtendedEventTarget = EventTargetWithOptionalValue & {
  value: ValidatorValuetype;
};

export type ComprehensiveEvent = DOMEvent | { target: ExtendedEventTarget };

type ComprehensiveEventTarget = ComprehensiveEvent["target"];

type UseFormParams = {
  defaultValue: Record<string, ValidatorValuetype>;
  resolver: Record<string, Validator>;
  mode: "onBlur" | "onChange";
};

const useForm = ({
  mode = "onBlur",
  resolver,
  defaultValue = {},
}: UseFormParams) => {
  const [isDirty, setIsDirty] = useState(false);
  const [formValue, setFormValue] = useState(
    initializeFormState(defaultValue, resolver)
  );

  const getCorrectValue = useCallback((event: ComprehensiveEvent) => {
    const target = event.target;
    const { value } = target;

    if (isFileInput(target)) {
      return target.files?.[0] || null;
    }

    return value;
  }, []);

  const makeInteractionHandler = useCallback(
    (configMode: "onChange" | "onBlur") => (e: ComprehensiveEvent) => {
      const { name, value } = e.target;

      setFormValue((prev) => {
        const prevAllValues = prev.values;
        const validatedError = prev.validators[name].validate(
          value,
          prevAllValues
        );

        return {
          ...prev,
          values: { ...prev.values, [name]: getCorrectValue(e) },
          errors:
            mode === configMode
              ? {
                  ...prev.errors,
                  [name]: validatedError,
                }
              : { ...prev.errors },
        };
      });

      if (!isDirty) {
        setIsDirty(true);
      }
    },
    [mode, getCorrectValue, isDirty]
  );

  const changeHandler = useMemo(
    () => makeInteractionHandler("onChange"),
    [makeInteractionHandler]
  );

  const blurHandler = useMemo(
    () => makeInteractionHandler("onBlur"),
    [makeInteractionHandler]
  );

  const removeError = useCallback((target: string) => {
    setFormValue((prev) => {
      return {
        ...prev,
        errors: {
          ...prev.errors,
          [target]: { target, errors: [] },
        },
      };
    });
  }, []);

  const isValidate = useMemo(() => {
    const isAllValueNotEmpty = Object.values(formValue.values).every(
      (value) => value !== ""
    );

    let errorCount = 0;

    if (isDirty) {
      Object.keys(formValue.validators).forEach((key) => {
        errorCount += formValue.validators[key].validate(
          formValue.values[key],
          formValue.values
        ).errors.length;
      });
    }

    return isAllValueNotEmpty && errorCount === 0;
  }, [isDirty, formValue.values, formValue.validators]);

  return {
    isDirty,
    isValidate,
    formValue,
    changeHandler,
    blurHandler,
    removeError,
  };
};

const initializeFormState = (
  defaultValue: Record<string, ValidatorValuetype>,
  resolver: Record<string, Validator>
) => {
  const initialFormValues: FormSchema = {
    values: {},
    validators: {},
    errors: {},
  };

  Object.keys(defaultValue).forEach((key) => {
    initialFormValues.values = {
      ...initialFormValues.values,
      [key]: defaultValue[key],
    };

    initialFormValues.validators = {
      ...initialFormValues.validators,
      [key]: resolver[key],
    };

    initialFormValues.errors = {
      ...initialFormValues.errors,
      [key]: {
        target: key,
        errors: [],
      },
    };
  });

  return initialFormValues;
};

const isFileInput = (
  target: ComprehensiveEventTarget
): target is HTMLInputElement => {
  return target.type === "file";
};

export default useForm;
