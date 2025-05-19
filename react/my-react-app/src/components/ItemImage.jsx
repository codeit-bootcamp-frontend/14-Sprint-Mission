import React from "react";
import "./ItemImage.css";

function ItemImage({ src, alt, type = "all" }) {
  // type: 'best' 또는 'all'
  return (
    <div className={`item-image-container ${type}-image`}>
      <img src={src} alt={alt} className="item-image" />
    </div>
  );
}

export default ItemImage;
