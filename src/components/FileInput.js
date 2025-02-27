import { useEffect, useRef, useState } from "react";
import "./FileInput.css";
import { IoIosAdd } from "react-icons/io";

function FileInput({ value, onChange }) {
  const [preview, setPreview] = useState(value);
  const [error, setError] = useState(null);
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const nextImage = e.target.files[0];

    if (value) {
      setError("*이미지 등록은 최대 1개까지 가능합니다.");
      return;
    }

    setError(null);
    if (!nextImage) return;
    setPreview(nextImage);
    onChange("imgFile", nextImage);
  };

  const handleRemove = () => {
    const inputNode = inputRef.current;
    if (!inputNode) {
      return;
    }
    inputNode.value = "";
    setError(null);
    setPreview(null);
    onChange("imgFile", null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value, error]);

  console.log("error:", error);

  return (
    <div className="file-input-container">
      <label htmlFor="image">상품 이미지</label>
      <div className="add-files-container">
        <input
          id="image"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="add-file-button" onClick={handleClick}>
          <IoIosAdd size={48} />
          이미지 등록
        </button>
        {value && (
          <div className="preview-box">
            <img
              className="preview-image"
              src={preview}
              alt={`${preview.name}`}
            />
            <button
              className="remove-file-button"
              onClick={handleRemove}
            ></button>
          </div>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default FileInput;
