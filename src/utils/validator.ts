import { ValidatorValuetype, ValidatorFieldType } from "@/types/validate";

const MINIMUM_PASSWORD_LENGTH = 8;
const EMAIL_REG_EXP =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const isString = (value: ValidatorValuetype): value is string => {
  return typeof value === "string";
};

const isStringArray = (value: ValidatorValuetype): value is string[] => {
  return Array.isArray(value);
};

const isFile = (value: ValidatorValuetype): value is File => {
  return value !== null && value instanceof File;
};

const allValidators = {
  isEmptyInput: (value: ValidatorValuetype) =>
    value === "" || value === null || value === undefined,

  isEmptyArray: (value: ValidatorValuetype) => {
    if (isStringArray(value)) {
      return value.length === 0;
    }
    return false;
  },

  isWrongEmailFormat: (value: ValidatorValuetype) => {
    if (isString(value)) {
      return !EMAIL_REG_EXP.test(value);
    }
    return true;
  },

  isNotMoreThanEight: (value: ValidatorValuetype) => {
    if (isString(value)) {
      return value.length < MINIMUM_PASSWORD_LENGTH;
    }
    if (isStringArray(value)) {
      return value.length < MINIMUM_PASSWORD_LENGTH;
    }
    if (isFile(value)) {
      return false;
    }
    return true;
  },

  isNotMatch: (value1: ValidatorValuetype, value2?: ValidatorValuetype) => {
    if (value1 === null || value2 === null || value2 === undefined) {
      return true;
    }

    if (isString(value1) && !isString(value2)) return true;
    if (isStringArray(value1) && !isStringArray(value2)) return true;
    if (isFile(value1) && !isFile(value2)) return true;

    if (isString(value1) && isString(value2)) {
      return value1 !== "" && value1 !== value2;
    }

    if (isStringArray(value1) && isStringArray(value2)) {
      if (value1.length !== value2.length) return true;
      return value1.some((item, index) => item !== value2[index]);
    }

    if (isFile(value1) && isFile(value2)) {
      return value1.name !== value2.name;
    }

    return true;
  },
};

class Validator {
  #field: ValidatorFieldType = { target: "", validators: [] };

  constructor(target: string) {
    this.#field = { target, validators: [] };
  }

  setValidator({
    validator,
    errorMessage,
  }: {
    validator: (value: ValidatorValuetype) => boolean;
    errorMessage?: string;
  }) {
    this.#field.validators.push({ validator, errorMessage, connectField: "" });

    return this;
  }

  isEmpty(errorMessage?: string) {
    return this.setValidator({
      validator: allValidators.isEmptyInput,
      errorMessage,
    });
  }

  isEmptyArray(errorMessage?: string) {
    return this.setValidator({
      validator: allValidators.isEmptyArray,
      errorMessage,
    });
  }

  isWrongEmailFormat(errorMessage?: string) {
    return this.setValidator({
      validator: allValidators.isWrongEmailFormat,
      errorMessage,
    });
  }

  isMoreThanEight(errorMessage?: string) {
    return this.setValidator({
      validator: allValidators.isNotMoreThanEight,
      errorMessage,
    });
  }

  isMatch(errorMessage: string, connectField: string) {
    this.#field.validators.push({
      validator: allValidators.isNotMatch,
      errorMessage,
      connectField,
    });

    return this;
  }

  validate(
    value: ValidatorValuetype,
    allValues: Record<string, ValidatorValuetype>
  ) {
    const errors: string[] = [];
    const { validators } = this.#field;

    for (const { validator, errorMessage, connectField } of validators) {
      if (validator(value, allValues[connectField]) === true) {
        if (errorMessage) {
          errors.push(errorMessage);
        }
      }
    }

    return { target: this.#field.target, errors };
  }
}

export { Validator };
