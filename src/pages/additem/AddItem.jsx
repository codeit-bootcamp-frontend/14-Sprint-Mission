import { useState } from "react";

import Navbar from "../../components/layout/Navbar";
import ImageUploader from "../../components/common/imageuploader/ImageUploader";
import InputBox from "../../components/common/inputbox/InputBox";
import TagInput from "../../components/common/taginput/TagInput";

import "./addItem.css";

export default function AddItem() {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleFormValueChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setFormValue({ ...formValue, title: value });
        break;
      case "description":
        setFormValue({ ...formValue, description: value });
        break;
      case "price":
        const rawValue = value.replace(/,/g, "").replace(/\D/g, ""); // 문자 막음 -> 숫자만 가능하게
        const formatted = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3자리마다 쉼표 추가
        setFormValue({ ...formValue, price: formatted });
        break;
      default:
        return;
    }
  };

  const isFormValid = () => {
    return (
      formValue.title.trim() !== "" &&
      formValue.description.trim() !== "" &&
      formValue.price.trim() !== "" &&
      tags.length > 0
    );
  };

  return (
    <>
      <Navbar />
      <form className="additem-container">
        <section className="additem-top-container">
          <h1 className="additem-title">상품 등록하기</h1>
          <button className="submit-button" disabled={!isFormValid()}>
            등록
          </button>
        </section>
        <ImageUploader image={image} setImage={setImage} />
        <InputBox
          title="상품명"
          name="title"
          placeholder="상품명을 입력해주세요"
          value={formValue.title}
          onChange={handleFormValueChange}
        />
        <InputBox
          title="상품 소개"
          name="description"
          placeholder="상품 소개를 입력해주세요"
          value={formValue.description}
          onChange={handleFormValueChange}
          isInput={false}
          height="282px"
        />
        <InputBox
          title="판매가격"
          name="price"
          placeholder="판매 가격을 입력해주세요"
          value={formValue.price}
          onChange={handleFormValueChange}
        />
        <TagInput tags={tags} setTags={setTags} />
      </form>
    </>
  );
}
