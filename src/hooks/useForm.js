import { useCallback, useMemo, useState } from "react";

const useForm = ({ defaultValue = {}, resolver, mode = "onBlur" }) => {
  const [isDirty, setIsDirty] = useState(false);
  const [formValue, setFormValue] = useState(() => {
    const initialFormValues = {};

    for (const key in defaultValue) {
      initialFormValues.values = {
        ...initialFormValues.values,
        [key]: defaultValue[key],
      };

      initialFormValues.validators = {
        ...initialFormValues.validators,
        [key]: resolver[key],
      };
    }
    initialFormValues.errors = [];

    return initialFormValues;
  });

  const getCorrectValue = (event, prevValues) => {
    const { value, type, name } = event.target;

    if (type === "file") {
      return event.target.files[0];
    }

    if (Array.isArray(prevValues[name])) {
      return [...prevValues[name], value];
    }

    return value;
  };

  const makeInteractionHandler = useCallback(
    (configMode) => (e) => {
      const { name, value } = e.target;

      setFormValue((prev) => {
        const prevAllValues = prev.values;
        const validatedError = prev.validators[name]?.validate(
          value,
          prevAllValues
        );

        return {
          ...prev,
          values: { ...prev.values, [name]: getCorrectValue(e, prevAllValues) },
          errors:
            mode === configMode
              ? {
                  ...prev.errors,
                  [name]: validatedError,
                }
              : { ...prev.errors },
        };
      });

      if (isDirty === false) {
        setIsDirty(true);
      }
    },
    [mode, isDirty]
  );

  const changeHandler = makeInteractionHandler("onChange");
  const blurHandler = makeInteractionHandler("onBlur");

  const removeError = useCallback((target) => {
    setFormValue((prev) => {
      return {
        ...prev,
        errors: {
          ...prev.errors,
          [target]: [],
        },
      };
    });
  }, []);

  const isValidate = useMemo(() => {
    const filtered =
      Object.values(formValue.errors).filter(({ errors }) => errors?.length)
        .length === 0;

    const isAllValueNotEmpty = Object.values(formValue.values).every(
      (value) => value !== ""
    );

    return filtered && isAllValueNotEmpty;
  }, [formValue.errors, formValue.values]);

  return {
    isDirty,
    isValidate,
    formValue,
    changeHandler,
    blurHandler,
    removeError,
  };
};

export default useForm;
