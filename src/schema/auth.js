import { ERROR_MESSAGE } from "../constants/errorMessage";
import { Validator } from "../utils/validator";

const email = new Validator("email")
  .isEmpty(ERROR_MESSAGE.EMAIL.IS_EMPTY_EMAIL)
  .isWrongEmailFormat(ERROR_MESSAGE.EMAIL.IS_WRONG_EMAIL_FORMAT);

const password = new Validator("password")
  .isEmpty(ERROR_MESSAGE.PASSWORD.IS_EMPTY_PASSWORD)
  .isMoreThanEight(ERROR_MESSAGE.PASSWORD.IS_MORE_THAN_EIGHT_PASSWORD);

const passwordForSignup = new Validator("password")
  .isEmpty(ERROR_MESSAGE.PASSWORD.IS_EMPTY_PASSWORD)
  .isMoreThanEight(ERROR_MESSAGE.PASSWORD.IS_MORE_THAN_EIGHT_PASSWORD)
  .isMatch(ERROR_MESSAGE.PASSWORD.IS_NOT_MATCH_PASSWORD, "repassword");

const repassword = new Validator("password")
  .isEmpty(ERROR_MESSAGE.PASSWORD.IS_EMPTY_PASSWORD)
  .isMoreThanEight(ERROR_MESSAGE.PASSWORD.IS_MORE_THAN_EIGHT_PASSWORD)
  .isMatch(ERROR_MESSAGE.PASSWORD.IS_NOT_MATCH_PASSWORD, "password");

const nickname = new Validator("nickname").isEmpty(
  ERROR_MESSAGE.NICKNAME.IS_EMPTY_NICKNAME
);

const signinSchema = { email, password };
const signupSchema = {
  email,
  password: passwordForSignup,
  repassword,
  nickname,
};

export { signinSchema, signupSchema };
