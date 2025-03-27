import styles from "./ConvenientSigninBox.module.css";

type IconType = {
  href: string;
  src: string;
  alt: string;
};

type ConvenientSigninBoxProps = {
  description: string;
  iconSet: IconType[];
};

const ConvenientSigninBox = ({
  description,
  iconSet,
}: ConvenientSigninBoxProps) => {
  return (
    <div className={styles.box}>
      <span>{description}</span>
      <div className={styles.icon_box}>
        {iconSet.map(({ href, src, alt }) => (
          <a key={href} className={styles.link} href={href}>
            <img src={src} alt={alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConvenientSigninBox;
