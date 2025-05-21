import { ReactNode } from "react";

import styles from "./ConvenientSigninBox.module.css";

type IconType = {
  href: string;
  icon: () => ReactNode;
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
        {iconSet.map(({ href, icon: IconComponent, alt }) => (
          <a key={href} className={styles.link} href={href} aria-label={alt}>
            <IconComponent />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConvenientSigninBox;
