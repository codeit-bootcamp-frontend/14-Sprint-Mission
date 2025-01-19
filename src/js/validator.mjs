const MINIMUM_PASSWORD_LENGTH = 8;
const EMAIL_REG_EXP =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const AUTH_VALIDATOR = {
  IS_WRONG_EMAIL_FORMAT: (value) => EMAIL_REG_EXP.test(value),
  IS_EMPTY_INPUT: (value) => value !== "",
  IS_MORT_THAN_EIGHT: (value) => value.length >= MINIMUM_PASSWORD_LENGTH,
  IS_MATCH: (value1, value2) => value1 !== "" && value1 === value2,
};

export { AUTH_VALIDATOR };
