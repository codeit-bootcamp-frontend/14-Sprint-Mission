import { FormField, ImageField } from "../../components";
import TagField from "../../components/TagField/TagField";

import styles from "./AddItemPage.module.css";

const RegisterItemPage = () => {
  return (
    <div className={styles.main_center}>
      <form className={styles.add_item_form}>
        <div className={styles.title_box}>
          <p>상품 등록하기</p>
          <button type="button">등록</button>
        </div>

        <ImageField label="상품 이미지" id="image" name="image" />
        <FormField
          label="상품명"
          id="title"
          name="title"
          placeholder="상품명을 입력해주세요"
          renderElement="input"
        />
        <FormField
          label="상품 소개"
          id="introduction"
          name="introduction"
          placeholder="상품 소개를 입력해주세요"
          renderElement="textarea"
          renderClassName={styles.introduction}
        />
        <FormField
          label="판매가격"
          id="price"
          name="price"
          placeholder="판매 가격을 입력해주세요"
          renderElement="input"
        />
        <TagField
          label="태그"
          id="tag"
          name="tag"
          placeholder="태그를 입력해주세요"
        />
      </form>
    </div>
  );
};

export default RegisterItemPage;
