
import styles from './Title.module.css';


function TitleTag ({tag ,children, ...rest}) {
  return (
    tag === 'h1' ? <h1 {...rest}>{children}</h1> : 
    tag === 'h2' ? <h2 {...rest}>{children}</h2> :
    tag === 'h3' ? <h3 {...rest}>{children}</h3> :
    tag === 'h4' ? <h4 {...rest}>{children}</h4> :
    tag === 'h5' ? <h5 {...rest}>{children}</h5> :
    <h6 {...rest}>{children}</h6> 
  )
}

function Title ({ titleTag = 'h1', text , children, ...rest }) {
  
 return (
  <div className={styles.title} {...rest} >
    <div className={styles.left}>
      <TitleTag  className={styles.titleTag} tag={titleTag}>{text}</TitleTag>
    </div>
    <div className={styles.right}>
      {children}
    </div>
  </div>
 )
}
export default Title;