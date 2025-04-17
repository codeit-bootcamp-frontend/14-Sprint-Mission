import React, { useState } from "react";
import likeIcon from "../../images/ic_like.png";
import mockImg from "../../images/mock_img.png";

function ItemCard({ item }) {
  const [imgSrc, setImgSrc] = useState(item?.images[0] || mockImg);

  const handleImgError = () => {
    setImgSrc(mockImg);
  };

  return (
    <li>
      <div className="item-img">
        <img src={imgSrc} alt={item.name} onError={handleImgError} />
      </div>
      <div className="item-text">
        <div className="name">{item.name}</div>
        <div className="price">{item.price}</div>
        <div className="like">
          <img src={likeIcon} alt="좋아요" />
          <span>{item.favoriteCount}</span>
        </div>
      </div>
    </li>
  );
}

export default ItemCard;
