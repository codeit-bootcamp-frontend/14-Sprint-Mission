import { ChangeEvent, FormEvent, useState } from 'react';
import FileInput from '../components/common/FileInput';
import Navbar from '../components/common/Navbar';
import TagsInput from '../components/common/TagsInput';
import './AddItemPage.css';
import { ProductType } from '../types/types';

function AddItemPage() {
  const [formData, setFormData] = useState<ProductType>({
    name: '',
    description: '',
    price: 0,
    tags: [],
    images: [],
    createdAt: new Date().toString(),
    favoriteCount: 0,
    ownerId: 1, // 로그인시 받아야 할 값
    ownerNickname: '',
    id: 123, // 나중에 id 변경
  });

  // 폼 입력시 버튼 활성화
  const isEnabled =
    formData.name && formData.description && formData.price && formData.tags[0];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (name: string, value: File | null) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTagsInputChange = (name: string, value: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
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
            <FileInput
              value={formData.images[0]}
              onChange={handleFileInputChange}
            />
            <label htmlFor="name">상품명</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="상품명을 입력해주세요"
            />
            <label htmlFor="description">상품 소개</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="상품 소개을 입력해주세요"
            />
            <label htmlFor="price">판매가격</label>
            <input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="판매 가격을 입력해주세요"
            />
            <TagsInput tags={formData.tags} onChange={handleTagsInputChange} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemPage;
