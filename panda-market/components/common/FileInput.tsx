'use client';
import {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import PlusIcon from '@/public/assets/icons/plus-icon.svg';
import Image from 'next/image';

type FileInputValue = string | File | null;

// 기본 HTMLInputElement의 props를 확장하되, value와 onChange를 커스텀합니다
interface FileInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: FileInputValue;
  onChange: (name: string, value: File | null) => void;
}

function FileInput({ value, onChange, ...restProps }: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
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
    <div className="flex flex-col gap-12">
      <label htmlFor="image" className="font-700 text-18">
        이미지
      </label>
      <div className="flex gap-12">
        <input
          id="image"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleChange}
          ref={inputRef}
          style={{ display: 'none' }} // 실제 input은 숨기고 커스텀 버튼으로 대체
          {...restProps}
        />
        <button
          type="button"
          onClick={handleClick}
          className="flex flex-col justify-center items-center w-282 h-282 gap-12 text-gray-400  bg-gray-100 rounded-md hover:bg-gray-200"
        >
          <Image src={PlusIcon} alt="plus" />
          이미지 등록
        </button>
        {preview && (
          <div className="relative ml-4">
            <Image
              className="w-282 h-282 object-contain rounded"
              src={preview}
              alt={value instanceof File ? value.name : '미리보기 이미지'}
              width={282}
              height={282}
            />
            <button
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-26 h-26 flex items-center justify-center"
              onClick={handleRemove}
              type="button"
            >
              ×
            </button>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default FileInput;
