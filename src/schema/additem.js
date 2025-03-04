import { Validator } from "../utils/validator";

const image = new Validator("image");
const title = new Validator("title").isEmpty();
const introduction = new Validator("introduction").isEmpty();
const price = new Validator("price").isEmpty();
const tags = new Validator("tags");

const addItemSchema = { image, title, introduction, price, tags };

export { addItemSchema };
