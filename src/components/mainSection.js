import classNames from 'classnames';
import styles from './mainSection.module.css';

function mainSection({ className, children }) {

  return (
    <section className={styles.section}>
      <div className={styles.box_inner}>
        <div className={styles.box}>
          <img src="images/Img_home_01.png" alt="Hot item" />
          <div className={styles.text_box}>
            <span>Hot item</span>
            <h2>인기 상품을 <br />확인해 보세요</h2>
            <p>가장 HOT한 중고거래 물품을<br />판다 마켓에서 확인해 보세요</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default mainSection;
