import { useState } from "react";
import IconDelete from "../assets/images/common/ic_X.svg";
import Compressor from "compressorjs";

export default function ImageField({ labelText = "이미지", value = [], onChange, maxLength = 3 }) {
  const [thumbnails, setThumbnails] = useState(value || []);
  const [isError, setIsError] = useState(false);

  function onUploadImage(e) {
    if (thumbnails.length >= maxLength) {
      setIsError(true);
      return;
    }
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        try {
          compressImage(file).then((compressed) => {
            if (compressed.size > 5 * 1024 * 1024) {
              alert("이미지 파일 크기가 너무 큽니다.\n다른 이미지로 시도해주세요.");
              return;
            }
            const compressedFile = new File([compressed], compressed.name, {
              type: file.type,
            });
            onChange([...value, compressedFile]);
          });
        } catch (err) {
          console.log(err);
          alert("이미지 압축에 실패했습니다.");
        }
      } else onChange([...value, file]);
      const objectURL = URL.createObjectURL(file);
      setThumbnails([...thumbnails, objectURL]);
      isError && setIsError(false);
    }
  }
  /**
   * 이미지 압축
   * @param {*} file
   * @returns {Promise<Blob>}
   */
  async function compressImage(file) {
    return await new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: 0.8, // Adjust the desired image quality (0.0 - 1.0)
        maxWidth: 1200, // Adjust the maximum width of the compressed image
        maxHeight: 1200, // Adjust the maximum height of the compressed image
        success(result) {
          resolve(result);
        },
        error(error) {
          reject(error);
        },
      });
    });
  }

  function onDeleteImage(idx) {
    URL.revokeObjectURL(thumbnails[idx]);
    onChange([...value.slice(0, idx), ...value.slice(idx + 1)]);
    setThumbnails([...thumbnails.slice(0, idx), ...thumbnails.slice(idx + 1)]);
    isError && setIsError(false);
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
              <button className="icon-wrapper" onClick={() => onDeleteImage(idx)} id="delete">
                <img src={IconDelete} alt={`${labelText} 삭제 버튼`} id="delete" />
              </button>
            </div>
          ))}
      </div>
      {isError && (
        <span className="text-error">* 이미지 등록은 최대 {maxLength}개까지 가능합니다.</span>
      )}
    </div>
  );
}
