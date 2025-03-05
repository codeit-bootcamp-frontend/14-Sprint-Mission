import ImageFile from "./ImageFile";
import { useState } from 'react';

function ImageFileBox({product , set}){
  
  const [preview, setPreview] = useState([]); // 미리보기 이미지 상태
  const [errorCase, setErrorCase] = useState('');
  const maxImages = 1;

  // 파일 추가시 미리보기 출력 
  function getFilesValue(e) {
    const file = e.target.files[0];
  
    if (file) {
      const fileValue = `image/${file.name}`;
      const reader = new FileReader();
  
      reader.onload = (event) => {
        if (preview.length >= maxImages ) {
          setErrorCase(`*이미지 등록은 최대 ${maxImages}개까지 가능합니다.`);
          setTimeout(() => { 
            setErrorCase('');
          }, 2000);
        } else {
          
          setPreview((prevPreview) => [
            ...prevPreview,
            event.target.result,
          ]);
  
          set((prevProduct) => ({
            ...prevProduct,
            images: [...prevProduct.images, fileValue],
          }));
        }
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  // 미리보기 이미지 삭제
  function handleClickImgDelete(index){
    if(preview.length > 0 ) setErrorCase('');

    const updatedImages = [...product.images];
    updatedImages.splice(index, 1); 
  
    const updatedPreview = [...preview];
    updatedPreview.splice(index, 1);
  
    set((prevProduct) => ({
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