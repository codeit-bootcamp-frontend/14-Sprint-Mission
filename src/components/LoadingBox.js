import styles from './LoadingBox.module.css';
import Container from '../components/Container';


function LoadingBox() {
  return (
    <Container>
      <div className={styles.loadingBox}> 페이지 로딩중입니다. </div>
    </Container> 
  );
}
export default LoadingBox;
