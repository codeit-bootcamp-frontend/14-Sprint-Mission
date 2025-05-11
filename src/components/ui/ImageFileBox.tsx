import React from 'react';
import { useState } from 'react';
import ImageFile from './ImageFile';
import { ProductSummary } from '@/hooks/useItems';


interface ImageFileBoxProps {
  product: ProductSummary;
  setProduct: React.Dispatch<React.SetStateAction<ProductSummary>>;
}

function ImageFileBox({ product, setProduct }: ImageFileBoxProps) {
  
  const [preview, setPreview] = useState<(string | null)[]>([]); // 미리보기 이미지 상태
  const [errorCase, setErrorCase] = useState('');
  const MAX_IMAGE_COUNT = 1;

  // 파일 추가시 미리보기 출력 
  function getFilesValue(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;
  
    if (file) {
      const fileValue = `image/${file.name}`;
      const reader = new FileReader();
  
      reader.onload = (event) => {
        if (preview.length >= MAX_IMAGE_COUNT ) {
          setErrorCase(`*이미지 등록은 최대 ${MAX_IMAGE_COUNT}개까지 가능합니다.`);
          setTimeout(() => { 
            setErrorCase('');
          }, 2000);
        } else {
          
          const target = event.target as FileReader | null;
          if (target && target.result) {
            setPreview((prevPreview) => [
              ...prevPreview,
              target.result as string | null,
            ]);
          }
  
          setProduct((prevProduct) => ({
            ...prevProduct,
            images: [...(prevProduct.images || []), fileValue],  // 만약 images가 undefined거나 null일 경우를 대비
          }));
        }
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  // 미리보기 이미지 삭제
  function handleClickImgDelete(index: number){
    if(preview.length > 0 ) setErrorCase('');

    const updatedImages = [...product.images || []];
    updatedImages.splice(index, 1); 
  
    const updatedPreview = [...preview];
    updatedPreview.splice(index, 1);
  
    setProduct((prevProduct) => ({
      ...prevProduct,
      images: updatedImages,
    }));
  
    setPreview(updatedPreview); 
  }

  return(
    <ImageFile 
      label='상품 이미지' 
      text='이미지 등록' 
      images={preview} 
      errorCase={errorCase} 
      onChange={getFilesValue} 
      onClickDelete={handleClickImgDelete}
    />
  )
}

export default ImageFileBox;