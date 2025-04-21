import React, { useState } from "react";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import TextFiled from "../../components/Input/TextFiled";
import ImageUploader from "../../components/Input/ImageUploader/ImageUploader";
import TagInput from "../../components/Input/TageInput/TagInput";
import "./AddItem.scss";

function AddItem() {
  const [imageData, setImageData] = useState(null);
  const [values, setValues] = useState({
    productName: "",
    productInfo: "",
    price: "",
    tags: [],
  });
  const isFormValid = Object.values({
    productName: values.productName.trim(),
    productInfo: values.productInfo.trim(),
    price: values.price.trim(),
    tags: values.tags.length ? true : false,
  }).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (eOrValue, name, isDirectValue = false) => {
    const value = isDirectValue ? eOrValue : eOrValue.target.value;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="layout none-color">
      <SubHeader />
      <div className="contents">
        <form onSubmit={handleSubmit} className="form-additem">
          <div className="form-header">
            <h3 className="title">상품 등록하기</h3>
            <button
              type="submit"
              className="el-btn btn-s"
              disabled={!isFormValid}
            >
              등록
            </button>
          </div>
          <ImageUploader value={imageData} onChange={setImageData} />
          <TextFiled
            id="productName"
            name="productName"
            label="상품명"
            type="text"
            placeholder="상품명을 입력해주세요"
            value={values.productName}
            onChange={(e) => handleInputChange(e, "productName")}
          />
          <TextFiled
            id="productInfo"
            name="productInfo"
            label="상품 소개"
            type="textarea"
            placeholder="상품 소개를 입력해주세요"
            value={values.productInfo}
            onChange={(e) => handleInputChange(e, "productInfo")}
          />
          <TextFiled
            id="price"
            name="price"
            label="판매가격"
            type="text"
            placeholder="판매 가격을 입력해주세요"
            value={values.price}
            onChange={(e) => handleInputChange(e, "price")}
          />
          <TagInput
            tags={values.tags}
            onChange={(newTags) => handleInputChange(newTags, "tags", true)}
          />
        </form>
      </div>
    </div>
  );
}

export default AddItem;
