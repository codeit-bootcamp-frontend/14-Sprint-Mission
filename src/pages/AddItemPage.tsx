import { ChangeEvent, FormEvent, useState } from 'react';
import FileInput from '../components/common/FileInput';
import Navbar from '../components/common/Navbar';
import Tags from '../components/common/Tags';
import './AddItemPage.css';
import { Product } from '../types/types';

function AddItemPage() {
  const [formData, setFormData] = useState<Product>({
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange = (name: string, value: any) => {
    // any말고는 생각나는게 없네요
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
            <FileInput value={formData.images} onChange={handleInputChange} />
            <label htmlFor="name">상품명</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="상품명을 입력해주세요"
            />
            <label htmlFor="description">상품 소개</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="상품 소개을 입력해주세요"
            />
            <label htmlFor="price">판매가격</label>
            <input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="판매 가격을 입력해주세요"
            />
            <Tags tags={formData.tags} onChange={handleInputChange} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemPage;
