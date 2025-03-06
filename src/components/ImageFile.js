
import Icon from './Icon';
import styles from './ImageFile.module.css';

function ImagePreviews({ num, onClickDelete, src }){
  const handleClick = () => onClickDelete(num);
  return (
    <>
      <div className={styles.previewDeleteBtn} onClick={handleClick}><Icon iconName='X' alt='delete product image'/></div>
      <img src={src} alt={`preview image_${num}`}/>
    </>
  )
}
function ImageFile({label, text, images, errorCase, onChange, onClickDelete, ...rest }) {
  
  return (
    <div className={styles.imageFile} onChange={onChange} {...rest}>
      <label className={styles.label}>
        <span>{label}</span>
      </label>
      <div>
        <div className={styles.inputFile}>
          <div className={styles.inputBtn}>
            <input type='file' />
            <div className={styles.fakeBox}>
              <Icon iconName='plus' alt='add product image'/>
              <span>{text}</span>
            </div>
          </div>
          <ul className={styles.previewImg}>
            {images.map((img ,index) => (
              <li key={index}>
                <ImagePreviews num={index} onClickDelete={onClickDelete}  src={img}/>
              </li>
            ))}
          </ul>
        </div> 
        { errorCase === '' ? null : <span className={styles.error}>{errorCase}</span> }
      </div>
    </div>
  )
}

export default ImageFile;