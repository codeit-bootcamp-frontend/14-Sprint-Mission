
import styles from './InputBox.module.css';

function InputBox({ label , boxType , placeholder, height }) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
        {
          boxType === 'textarea' ? 
          <textarea className={styles.textarea} placeholder={placeholder} style={{ height: 'auto', minHeight: `${height}`}}></textarea>: 
          boxType === 'imgFile' ?
          <input type='file'></input> :
          <input className={styles.input} type='text' placeholder={placeholder} /> 
        }  
    </label>
  )
}

export default InputBox;