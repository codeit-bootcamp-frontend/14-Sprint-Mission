import React, { useState } from 'react';
import ImageFile from './ImageFile';
import { useUploadImage } from '@/hooks/useUploadImage';
import { useConfirmModal } from '@/hooks/useModal';
import ConfirmModal from '../ConfirmModal';

interface ImageUpdatable {
  images?: string[];
  image?: string;
}

interface ImageFileBoxProps<T extends ImageUpdatable> {
  setForm: React.Dispatch<React.SetStateAction<T>>;
}

function ImageFileBox<T extends ImageUpdatable>({ setForm }: ImageFileBoxProps<T>) {
  const [preview, setPreview] = useState<(string | null)[]>([]);
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const [errorCase, setErrorCase] = useState('');
  const MAX_IMAGE_COUNT = 1;

  const { mutate: uploadImage } = useUploadImage(
    (msg) => openConfirmModal(msg),
    (url) => {
      setPreview((prev) => [...prev, url]);
    }
  );

  const getImageKey = (obj: any): 'images' | 'image' => {
    if ('images' in obj) return 'images';
    if ('image' in obj) return 'image';
    throw new Error('No image key found');
  };

  const getFilesValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (preview.length >= MAX_IMAGE_COUNT) {
      setErrorCase(`*이미지 등록은 최대 ${MAX_IMAGE_COUNT}개까지 가능합니다.`);
      setTimeout(() => setErrorCase(''), 2000);
      return;
    }

    uploadImage(file, {
      onSuccess: (url) => {
        setForm((prev) => {
          const key = getImageKey(prev);

          return {
            ...prev,
            [key]: key === 'images'
              ? [...(prev.images || []), url]
              : url, // image는 string으로 바로 저장
          };
        });
      },
      onError: (msg) => {
        setErrorCase(msg);
        setTimeout(() => setErrorCase(''), 2000);
      },
    });
  };

  const handleClickImgDelete = (index: number) => {
    if (preview.length > 0) setErrorCase('');
    setPreview((prev) => prev.filter((_, i) => i !== index));

    setForm((prev) => {
      const key = getImageKey(prev);

      if (key === 'images') {
        return {
          ...prev,
          images: (prev.images || []).filter((_, i) => i !== index),
        };
      } else {
        return {
          ...prev,
          image: '', // 단일 이미지 삭제는 빈 문자열로 대체
        };
      }
    });
  };

  return (
    <>
      <ImageFile
        label="상품 이미지"
        text="이미지 등록"
        images={preview}
        errorCase={errorCase}
        onChange={getFilesValue}
        onClickDelete={handleClickImgDelete}
      />
      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={closeConfirmModal}
        errorMessage={confirmMessage}
      />
    </>
  );
}

export default ImageFileBox;
