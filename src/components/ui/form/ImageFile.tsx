
import React from 'react';
import styles from './ImageFile.module.css';
import Icon from '../Icon';
import { FallbackImage } from '@/components/FallbackImage/FallbackImage';

interface ImagePreviewsProps {
  num: number;
  onClickDelete: (num: number) => void;
  src: string ;
}

function ImagePreviews({ num, onClickDelete, src }: ImagePreviewsProps) {
  const handleClick = () => onClickDelete(num);
  console.log('src', src , typeof src);
  return (
    <>
      <div className="relative w-full aspect-[1/1]">
        <div className={styles.previewDeleteBtn} onClick={handleClick}><Icon iconName='X'  width="12" height="12"  alt='delete product image'/></div>
        <FallbackImage src={src} fill alt={`preview image_${num}`}/>
      </div>
    </>
  )
}

interface ImageFile { 
  label: string; 
  text: string; 
  images:(string | null)[]; 
  errorCase: string; 
  onChange: React.ChangeEventHandler;
  onClickDelete: (num: number) => void; 
  [key: string]: any 
}
function ImageFile({label, text, images, errorCase, onChange, onClickDelete, ...rest }:ImageFile) {
  
  return (
    <div className={styles.imageFile} {...rest}>
      <label className={styles.label}>
        <span>{label}</span>
      </label>
      <div>
        <div className={styles.inputFile}>
          <div className={styles.inputBtn}>
            <input type='file' onChange={onChange} />
            <div className={styles.fakeBox}>
              <Icon iconName='plus'  width="48" height="48"  alt='add product image'/>
              <span>{text}</span>
            </div>
          </div>
          <ul className={styles.previewImg}>
            {( images.map((img ,index) => (
              img === null ? null :
              <li key={index}>
                <ImagePreviews num={index} onClickDelete={onClickDelete}  src={img}/>
              </li>
            )))}
          </ul>
        </div> 
        { errorCase === '' ? null : <span className={styles.error}>{errorCase}</span> }
      </div>
    </div>
  )
}

export default ImageFile;