import useForm from "../../hooks/useForm";
import { FormField, ImageField, TagField } from "../../components";
import { addItemSchema } from "../../schema/additem";

import styles from "./AddItemPage.module.css";

const RegisterItemPage = () => {
  const { isValidate, changeHandler } = useForm({
    resolver: addItemSchema,
    defaultValue: { title: "", introduction: "", price: "", image: null },
  });

  return (
    <div className={styles.main_center}>
      <form className={styles.add_item_form}>
        <div className={styles.title_box}>
          <p>상품 등록하기</p>
          <button type="button" disabled={!isValidate}>
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
        <FormField
          label="상품명"
          id="title"
          name="title"
          placeholder="상품명을 입력해주세요"
          renderElement="input"
          onChange={changeHandler}
        />
        <FormField
          label="상품 소개"
          id="introduction"
          name="introduction"
          placeholder="상품 소개를 입력해주세요"
          renderElement="textarea"
          onChange={changeHandler}
          renderClassName={styles.introduction}
        />
        <FormField
          label="판매가격"
          id="price"
          name="price"
          placeholder="판매 가격을 입력해주세요"
          renderElement="input"
          onChange={changeHandler}
        />
        <TagField
          label="태그"
          id="tag"
          name="tag"
          placeholder="태그를 입력해주세요"
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default RegisterItemPage;
