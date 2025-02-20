import clsx from "clsx";
import React from "react";

import { makeParagraph } from "../../utils/makeFormat";

import styles from "./WideSection.module.css";

const WideSection = ({
  title,
  className,
  renderImage,
  renderButton,
  upper,
  lower,
}) => {
  return (
    <section
      className={clsx(styles.wide_section, className, {
        [styles.margin_bottom]: upper,
        [styles.lower_section]: lower,
        [styles.margin_top]: lower,
      })}
    >
      <div className={styles.center_content}>
        <div
          className={clsx([
            styles.wide_section_title_content,
            {
              [styles.upper_img_top]: upper,
              [styles.lower_img_top]: lower,
            },
          ])}
        >
          <p
            className={clsx([
              styles.wide_section_title,
              { [styles.remove_br]: upper },
            ])}
          >
            {makeParagraph(title)}
          </p>
          {renderButton}
        </div>
        {renderImage}
      </div>
    </section>
  );
};

export default WideSection;
