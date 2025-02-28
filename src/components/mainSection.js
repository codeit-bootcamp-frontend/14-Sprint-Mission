import classNames from 'classnames';
import styles from './mainSection.module.css';

function MainSection({ className, boxName , children }) {
  return (
    <>
      <section className={classNames(styles[className])}>
        <div className={styles.box_inner}>
          <div className={classNames( styles[boxName])}>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionChildren( props ) {
  return (
    <>
      <img src={props.src} alt={props.alt} />
      <div>
        <span className="font_3">{props.span}</span>
        <h2 className="font_4">{props.h2[0]}<br/>{props.h2[1]}</h2>
        <p className="font_2">{props.p[0]}<br/>{props.p[1]}</p>
      </div>
    </>
  );
}
export default { MainSection, SectionChildren };
