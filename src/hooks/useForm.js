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

  const makeInteractionHandler = useCallback(
    (configMode) => (e) => {
      const { name, value } = e.target;

      setFormValue((prev) => ({
        ...prev,
        values: { ...prev.values, [name]: value },
        errors:
          mode === configMode
            ? {
                ...prev.errors,
                [name]: prev.validators[name].validate(value),
              }
            : { ...prev.errors },
      }));

      setIsDirty(true);
    },
    [mode]
  );

  const changeHandler = makeInteractionHandler("onChange");
  const blurHandler = makeInteractionHandler("onBlur");

  const isValidate = useMemo(() => {
    const filtered =
      Object.values(formValue.errors).filter(({ errors }) => errors.length)
        .length === 0;

    const isAllValueNotEmpty = Object.values(formValue.values).every(
      (value) => value !== ""
    );

    return filtered && isAllValueNotEmpty;
  }, [formValue.errors, formValue.values]);

  return { isDirty, isValidate, formValue, changeHandler, blurHandler };
};

export default useForm;
