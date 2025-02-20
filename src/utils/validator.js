const MINIMUM_PASSWORD_LENGTH = 8;
const EMAIL_REG_EXP =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const authValidator = {
  isEmptyInput: (value) => value === "",
  isWrongEmailFormat: (value) => !EMAIL_REG_EXP.test(value),
  isNotMoreThanEight: (value) => value.length < MINIMUM_PASSWORD_LENGTH,
  isNotMatch: (value1, value2) => value1 !== "" && value1 !== value2,
};

class Validator {
  #field = {};

  constructor(target) {
    this.#field = { target, validators: [] };
  }

  setValidator({ validator, errorMessage }) {
    this.#field.validators.push({ validator, errorMessage });

    return this;
  }

  isEmpty(errorMessage) {
    return this.setValidator({
      validator: authValidator.isEmptyInput,
      errorMessage,
    });
  }

  isWrongEmailFormat(errorMessage) {
    return this.setValidator({
      validator: authValidator.isWrongEmailFormat,
      errorMessage,
    });
  }

  isMoreThanEight(errorMessage) {
    return this.setValidator({
      validator: authValidator.isNotMoreThanEight,
      errorMessage,
    });
  }

  isMatch(errorMessage) {
    return this.setValidator({
      validator: authValidator.isMatch,
      errorMessage,
    });
  }

  validate(value) {
    const errors = [];
    const { validators } = this.#field;

    for (const { validator, errorMessage } of validators) {
      if (validator(value) === true) {
        errors.push(errorMessage);
      }
    }

    return { target: this.#field.target, errors };
  }
}

export { Validator };
