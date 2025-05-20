import { useState } from "react";
import "./AddItemPage.css";
import ImageUploader from "../components/ImageUploader/ImageUploader";
import InputGroup from "../components/InputGroup/InputGroup";
import TagInput from "../components/TagInput/TagInput";

const API_URL = process.env.REACT_APP_API_BASE_URL;

function AddItemPage() {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imageError, setImageError] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const isFormValid = name && description && price;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (imageFile) {
      setImageError("이미지 등록은 최대 1개까지 가능합니다.");
      return;
    }
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
      setImageError("");
    }
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, `#${tagInput.trim()}`]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const uploadImageAndGetUrl = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(`${API_URL}/images/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("이미지 업로드 실패");

    const data = await response.json();
    return data.url;
  };

  const handleSubmit = async () => {
    try {
      const imageUrl = imageFile ? await uploadImageAndGetUrl(imageFile) : "";

      const productData = {
        images: imageUrl ? [imageUrl] : [],
        tags: tags.map((tag) => tag.replace(/^#/, "")),
        price: Number(price),
        description,
        name,
      };

      const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) throw new Error("상품 등록 실패");

      alert("상품이 등록되었습니다!");
    } catch (err) {
      console.error(err);
      alert("상품 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <main className="container">
      <div className="header">
        <h1 className="title">상품 등록하기</h1>
        <button
          disabled={!isFormValid}
          onClick={handleSubmit}
          className={`submitButton ${isFormValid ? "active" : "inactive"}`}
        >
          등록
        </button>
      </div>

      <div className="form">
        <ImageUploader
          preview={preview}
          imageError={imageError}
          handleImageChange={handleImageChange}
          removeImage={() => {
            setImageFile(null);
            setPreview(null);
            setImageError("");
          }}
        />

        <InputGroup
          label="상품명"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="상품명을 입력해주세요"
        />

        <InputGroup
          label="상품 소개"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="상품 소개를 입력해주세요"
          isTextarea
        />

        <InputGroup
          label="판매가격"
          value={price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
            setPrice(onlyNumbers);
          }}
          placeholder="판매 가격을 입력해주세요"
        />

        <TagInput
          tags={tags}
          tagInput={tagInput}
          setTagInput={setTagInput}
          onAdd={handleAddTag}
          onRemove={handleRemoveTag}
        />
      </div>
    </main>
  );
}

export default AddItemPage;
