import "./ImageUploader.css";

function ImageUploader({
  preview,
  imageError,
  handleImageChange,
  removeImage,
}) {
  return (
    <div className="formGroup">
      <label className="label">상품 이미지</label>
      <div className="imageRow">
        <label className="imageBox">
          <div className="imagePlaceholder">
            <img src="/images/ic_plus.svg" alt="아이콘" className="plusIcon" />
            <span className="imageText">이미지 등록</span>
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>

        {preview && (
          <div className="previewWrapper">
            <img src={preview} alt="미리보기" className="previewImage" />
            <button
              type="button"
              onClick={removeImage}
              className="removeImageButton"
            >
              <img src="/images/ic_X.svg" alt="삭제" />
            </button>
          </div>
        )}
      </div>
      {imageError && <p className="imageError">{imageError}</p>}
    </div>
  );
}

export default ImageUploader;
