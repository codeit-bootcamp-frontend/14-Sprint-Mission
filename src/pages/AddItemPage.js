import { useState } from "react";
import FileInput from "../components/FileInput";
import Navbar from "../components/Navbar";
import Tags from "../components/Tags";
import "./AddItemPage.css";

function AddItemPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    tags: [],
  });
  // const [tags, setTags] = useState([]);

  // 폼 입력시 버튼 활성화
  const isEnabled =
    formData.name && formData.description && formData.price && formData.tags[0];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleTagsChange = (newTags) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: newTags,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <div className="add-item-container">
        <div className="add-item-header">
          <h1>상품 등록하기</h1>
          <button className="add-item-button" disabled={!isEnabled}>
            등록
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="product-details">
            <FileInput />
            <label htmlFor="name">상품명</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="상품명을 입력해주세요"
            />
            <label htmlFor="description">상품 소개</label>
            <input
              id="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
              placeholder="상품 소개을 입력해주세요"
            />
            <label htmlFor="price">판매가격</label>
            <input
              id="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="판매 가격을 입력해주세요"
            />
            <Tags tags={formData.tags} onChange={handleTagsChange} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemPage;
