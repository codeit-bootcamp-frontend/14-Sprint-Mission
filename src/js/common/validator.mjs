const MINIMUM_PASSWORD_LENGTH = 8;
const EMAIL_REG_EXP =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const authValidator = {
  isWrongEmailFormat: (value) => EMAIL_REG_EXP.test(value),
  isEmptyInput: (value) => value !== "",
  isMoreThanEight: (value) => value.length >= MINIMUM_PASSWORD_LENGTH,
  isMatch: (value1, value2) => value1 !== "" && value1 === value2,
};

export { authValidator };
