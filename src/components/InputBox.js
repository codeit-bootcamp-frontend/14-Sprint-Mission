
import styles from './InputBox.module.css';

function InputBox({ label , boxType , placeholder, height , ...rest }) {
  return (
    <label className={styles.label}>
      <span>{label}</span>
        {
          boxType === 'textarea' ? 
          <textarea 
            className={styles.textarea} 
            placeholder={placeholder} 
            style={{ height: 'auto', minHeight: `${height}`}} 
            {...rest} 
          />
          : 
          <input 
            className={styles.input} 
            type={boxType} 
            placeholder={placeholder}  
            {...rest}
          /> 
        }  
    </label>
  )
}

export default InputBox;