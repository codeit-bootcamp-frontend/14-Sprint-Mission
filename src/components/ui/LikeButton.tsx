'use client';

import Button from "./Button";
import Icon from "./Icon";
import { useState } from "react";
import { useToggleProductFavorite } from "@/hooks/useItems";
import ConfirmModal from "./ConfirmModal";
import { useConfirmModal } from "@/hooks/useModal";

interface LikeButtonProps {
  className?: string;
  childrenClassName?: string;
  onClick?: () => void; 
  [key: string]: any; 
}
function LikeButton({
  productId, 
  className, 
  childrenClassName, 
  favoriteCount, 
  isFavorite, 
  variant="btn-heart_S", 
  width = 16, height = 16 , 
  ...restProps 
} : LikeButtonProps) {
  
  const [isFavorited, setIsFavorited] = useState(isFavorite);
  const [count, setCount ] = useState(favoriteCount);


  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { mutate: toggleFavorite } = useToggleProductFavorite(openConfirmModal);

  const handleClick =  () => {
    toggleFavorite({ productId, isFavorited ,setIsFavorited, setCount});
  };

  return (
    <>
      <Button onClick={handleClick} variant={variant} childrenClassName={childrenClassName}>
        <Icon iconName={isFavorited === false ? 'heartOpen' : 'heartClose'}  width={width} height={height}  alt='Like icon' />
        <span>{count}</span>
      </Button>
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </>
  )

}
export default LikeButton;
