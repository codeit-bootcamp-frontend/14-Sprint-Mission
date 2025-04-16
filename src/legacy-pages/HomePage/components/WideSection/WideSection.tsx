import clsx from "clsx";
import { ReactNode } from "react";

import { makeParagraph } from "@/utils/makeFormat";

import styles from "./WideSection.module.css";

type WideSectionProps = {
  title: string[];
  className?: string;
  renderImage?: ReactNode;
  renderButton?: ReactNode;
  upper?: ReactNode;
  lower?: ReactNode;
};

const WideSection = ({
  title,
  className,
  renderImage,
  renderButton,
  upper,
  lower,
}: WideSectionProps) => {
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
