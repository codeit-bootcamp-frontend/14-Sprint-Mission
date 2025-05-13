import React from 'react';
import { useState } from 'react';
import ImageFile from './ImageFile';
import { CreateProductRequest } from '@/hooks/useItems';
import { useUploadImage } from '@/hooks/useUploadImage';
import { useConfirmModal } from '@/hooks/useModal';
import ConfirmModal from '../ConfirmModal';


interface ImageFileBoxProps {
  product: CreateProductRequest;
  setProduct: React.Dispatch<React.SetStateAction<CreateProductRequest>>;
}

function ImageFileBox({ product, setProduct }: ImageFileBoxProps) {
  
  const [preview, setPreview] = useState<(string | null)[]>([]); // 미리보기 이미지 상태
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const [errorCase, setErrorCase] = useState('');
  const MAX_IMAGE_COUNT = 1;

  // console.log('업로드된 이미지:', product.images);
  const { mutate: uploadImage } = useUploadImage(
    (msg) => openConfirmModal(msg),
    (url) => {
      // console.log('업로드 완료 URL:', url);
      setPreview((prev) => [...prev, url]);
    }
  );
  function getFilesValue(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (preview.length >= MAX_IMAGE_COUNT) {
      setErrorCase(`*이미지 등록은 최대 ${MAX_IMAGE_COUNT}개까지 가능합니다.`);
      setTimeout(() => setErrorCase(''), 2000);
      return;
    }

  // 2. 서버 업로드 요청 → 성공 시 URL 저장
  uploadImage(file, {
    onSuccess: (url) => {
      setProduct((prev) => ({
        ...prev,
        images: [...(prev.images || []), url],
      }));
    },
    onError: (msg) => {
      setErrorCase(msg);
      setTimeout(() => setErrorCase(''), 2000);
    },
  });
}

// 미리보기 & URL 동기화 삭제
function handleClickImgDelete(index: number) {
  if (preview.length > 0) setErrorCase('');

  // 삭제 시 preview와 images 모두 index 기준 삭제
  setPreview((prev) => prev.filter((_, i) => i !== index));
  setProduct((prev) => ({
    ...prev,
    images: (prev.images || []).filter((_, i) => i !== index),
  }));
}

  return(
    <>
      <ImageFile 
        label='상품 이미지' 
        text='이미지 등록' 
        images={preview} 
        errorCase={errorCase} 
        onChange={getFilesValue} 
        onClickDelete={handleClickImgDelete}
      />
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </>
  )
}

export default ImageFileBox;