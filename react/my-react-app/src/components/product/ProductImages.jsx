import React, { useState } from "react";
import {
  ImageContainer,
  MainImage,
  ThumbnailContainer,
  Thumbnail,
} from "../../styles/components/product/ProductImages.styled";

function ProductImages({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // 이미지가 없을 경우 기본 이미지 사용
  const imageList =
    images && images.length > 0 ? images : ["/placeholder-image.jpg"];

  return (
    <div>
      <ImageContainer>
        <MainImage src={imageList[activeIndex]} alt="Product image" />
      </ImageContainer>

      {imageList.length > 1 && (
        <ThumbnailContainer>
          {imageList.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              $active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </ThumbnailContainer>
      )}
    </div>
  );
}

export default ProductImages;
