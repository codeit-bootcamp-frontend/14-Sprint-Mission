import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './FileInput.css';
import PlusIcon from '../../assets/icons/plus-icon.svg';

interface FileInputProps {
  value: string | File | null;
  onChange: (name: string, value: File | null) => void;
}

function FileInput({ value, onChange }: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | Error | undefined | null>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextImage = e.target.files?.[0];

    if (preview) {
      setError('*이미지 등록은 최대 1개까지 가능합니다.');
      return;
    }

    setError(null);
    if (!nextImage) return;
    setPreview(URL.createObjectURL(nextImage));
    onChange('imgFile', nextImage);
  };

  const handleRemove = () => {
    const inputNode = inputRef.current;
    if (!inputNode) {
      return;
    }
    inputNode.value = '';
    setError(null);
    setPreview(null);
    onChange('imgFile', null);
  };

  useEffect(() => {
    let cleanup = () => {};

    if (typeof value === 'string' && value) {
      setPreview(value);
    } else if (value instanceof File) {
      const nextPreview = URL.createObjectURL(value);
      setPreview(nextPreview);
      cleanup = () => {
        URL.revokeObjectURL(nextPreview);
      };
    } else {
      setPreview(null);
    }

    return cleanup;
  }, [value]);

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
          <img src={PlusIcon} alt="plus" />
          이미지 등록
        </button>
        {preview && (
          <div className="preview-box">
            <img
              className="preview-image"
              src={preview}
              alt={typeof value === 'object' && value ? value.name : ''}
            />
            <button
              className="remove-file-button"
              onClick={handleRemove}
            ></button>
          </div>
        )}
      </div>
      {error && <p className="error-message">{error.toString()}</p>}
    </div>
  );
}

export default FileInput;
