import { Validator } from "../utils/validator";

const title = new Validator("title").isEmpty();
const introduction = new Validator("introduction").isEmpty();
const price = new Validator("price").isEmpty();
const image = new Validator("image");

const addItemSchema = { title, introduction, price, image };

export { addItemSchema };
