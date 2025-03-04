import { useState } from "react";
import IconDelete from "../assets/images/common/ic_X.svg";

export default function ImageField({ labelText = "이미지", value = [], onChange, maxLength = 3 }) {
  const [thumbnails, setThumbnails] = useState([]);
  const [isError, setIsError] = useState(false);

  function onUploadImage(e) {
    if (thumbnails.length >= maxLength) {
      setIsError(true);
      return;
    }
    if (e.target.files) {
      const file = e.target.files[0];
      onChange([...value, file]);
      const objectURL = URL.createObjectURL(file);
      setThumbnails([...thumbnails, objectURL]);
      isError && setIsError(false);
    }
  }

  function onDeleteImage(idx) {
    URL.revokeObjectURL(thumbnails[idx]);
    onChange([...value.slice(0, idx), ...value.slice(idx + 1)]);
    setThumbnails([...thumbnails.slice(0, idx), ...thumbnails.slice(idx + 1)]);
  }

  return (
    <div className="input-field display-grid justify-left gap-16">
      <label className="text-2lg text-bold" htmlFor="image">
        {labelText}
      </label>
      <div className="input-images-area display-flex justify-left gap-24">
        <div className="input-wrapper surface-secondary-200 radius-12">
          <input
            type="file"
            accept="image/*"
            name="image"
            placeholder={`${labelText} 등록`}
            onChange={onUploadImage}
          />
        </div>
        {thumbnails.length > 0 &&
          thumbnails.map((url, idx) => (
            <div key={idx} className="thumbnail-wrapper radius-12">
              <img src={url} alt={`${labelText} 미리보기`} />
              <button onClick={() => onDeleteImage(idx)} id="delete">
                <img src={IconDelete} alt={`${labelText} 삭제 버튼`} id="delete" />
              </button>
            </div>
          ))}
      </div>
      {isError && (
        <span className="text-error">*이미지 등록은 최대 {maxLength}개까지 가능합니다.</span>
      )}
    </div>
  );
}
