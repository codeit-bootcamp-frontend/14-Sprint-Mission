import useForm from "../../hooks/useForm";
import { InputField, ImageField, TagField } from "../../components";
import { addItemSchema } from "../../schema/additem";

import styles from "./AddItemPage.module.css";

const RegisterItemPage = () => {
  const {
    formValue: { values },
    isValidate,
    changeHandler,
  } = useForm({
    resolver: addItemSchema,
    defaultValue: {
      image: null,
      title: "",
      introduction: "",
      price: "",
      tags: [],
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const preventEnterHandler = (e) => {
    if (e.target.type !== "textarea" && e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.main_center}>
      <form
        className={styles.add_item_form}
        onSubmit={submitHandler}
        onKeyDown={preventEnterHandler}
      >
        <div className={styles.title_box}>
          <p>상품 등록하기</p>
          <button type="submit" disabled={!isValidate}>
            등록
          </button>
        </div>

        <ImageField
          label="상품 이미지"
          id="image"
          name="image"
          onChange={changeHandler}
          errorMessage="*이미지 등록은 최대 1개까지 가능합니다."
        />
        <InputField
          label="상품명"
          id="title"
          name="title"
          type="text"
          placeholder="상품명을 입력해주세요"
          renderElement="input"
          onChange={changeHandler}
        />
        <InputField
          label="상품 소개"
          id="introduction"
          name="introduction"
          placeholder="상품 소개를 입력해주세요"
          renderElement="textarea"
          onChange={changeHandler}
          renderClassName={styles.introduction}
        />
        <InputField
          label="판매가격"
          id="price"
          name="price"
          type="number"
          placeholder="판매 가격을 입력해주세요"
          renderElement="input"
          onChange={changeHandler}
        />
        <TagField
          label="태그"
          id="tags"
          name="tags"
          placeholder="태그를 입력해주세요"
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default RegisterItemPage;
