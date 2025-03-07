import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { uploadImage } from "../../apis/images";
import { createProduct, updateProduct, INITIAL_PRODUCT_VALUE } from "../../apis/products";
import HeaderNav from "../../components/HeaderNav";
import ImageField from "../../components/ImageField";
import InputField from "../../components/InputField";
import { formatPrice } from "../../utils/products";
import "./additem.scss";
import TagField from "./components/TagField";

export default function AddItem() {
  const navigate = useNavigate();
  const { state: originData } = useLocation();
  const [formData, setFormData] = useState(originData || INITIAL_PRODUCT_VALUE);

  const isBtnDisabled = originData
    ? JSON.stringify(originData) === JSON.stringify(formData)
    : !formData.name || !formData.description || !formData.price || formData.tags.length === 0;

  function onInputChange(name, value) {
    const valueStr = name === "price" ? Number(value.replaceAll(/[^0-9]/g, "")) : value;
    const newValue = { ...formData, [name]: valueStr };
    setFormData(newValue);
  }

  async function handleUpdateItem() {
    const promises = formData.imageFiles
      .map((file) => (typeof file !== "string" ? uploadImage(file) : undefined))
      .filter((el) => el);
    Promise.all(promises).then(async (images) => {
      const result = await updateProduct(originData.id, {
        ...formData,
        images: images.length > 0 ? images : formData.images,
        imageFiles: undefined,
        id: undefined,
      });
      if (result.id) navigate(`/items/${result.id}`);
    });
  }

  async function handleAddItem() {
    const promises = formData.imageFiles.map((file) => uploadImage(file));
    Promise.all(promises).then(async (images) => {
      const result = await createProduct({ ...formData, images, imageFiles: undefined });
      if (result.id) navigate(`/items/${result.id}`);
    });
  }

  return (
    <>
      <title>판다마켓 - 상품 등록</title>
      <HeaderNav />
      <main className="display-grid justify-stretch gap-24" id="add-item">
        {originData ? (
          <div className="header display-flex justify-sides">
            <h1 className="text-xl">상품 수정하기</h1>
            <button className="small-40" disabled={isBtnDisabled} onClick={handleUpdateItem}>
              수정
            </button>
          </div>
        ) : (
          <div className="header display-flex justify-sides">
            <h1 className="text-xl">상품 등록하기</h1>
            <button className="small-40" disabled={isBtnDisabled} onClick={handleAddItem}>
              등록
            </button>
          </div>
        )}
        <div className="container display-grid justify-stretch gap-32">
          <ImageField
            labelText="상품 이미지"
            value={formData.imageFiles || []}
            onChange={(imageFiles) => setFormData({ ...formData, imageFiles })}
            maxLength={1}
          />
          <InputField
            labelText="상품명"
            name="name"
            placeholder="상품명을 입력해주세요"
            value={formData.name}
            onChange={onInputChange}
          />
          <InputField
            labelText="상품소개"
            type="textarea"
            name="description"
            placeholder="상품소개를 입력해주세요"
            value={formData.description}
            onChange={onInputChange}
          />
          <InputField
            labelText="판매가격"
            name="price"
            placeholder="판매 가격을 입력해주세요"
            value={formData.price >= 0 ? formatPrice(formData.price) : ""}
            onChange={onInputChange}
          />
          <TagField
            tagList={formData.tags}
            setTagList={(tags) => setFormData({ ...formData, tags })}
          />
        </div>
      </main>
    </>
  );
}
