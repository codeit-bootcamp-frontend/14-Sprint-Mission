import { ERROR_MESSAGE } from "../constants/errorMessage";
import { Validator } from "../utils/validator";

const email = new Validator("email")
  .isEmpty(ERROR_MESSAGE.EMAIL.IS_EMPTY_EMAIL)
  .isWrongEmailFormat(ERROR_MESSAGE.EMAIL.IS_WRONG_EMAIL_FORMAT);

const password = new Validator("password")
  .isEmpty(ERROR_MESSAGE.PASSWORD.IS_EMPTY_PASSWORD)
  .isMoreThanEight(ERROR_MESSAGE.PASSWORD.IS_MORE_THAN_EIGHT_PASSWORD);

const signinSchema = { email, password };

export { signinSchema };
