import clsx from "clsx";
import { ReactNode } from "react";

import { makeParagraph } from "../../utils/makeFormat";

import styles from "./MainSection.module.css";

type MainSectionProps = {
  renderImg: ReactNode;
  subtitle: string;
  title: string[];
  description: string[];
  removeRightPadding?: boolean;
  removeLeftPadding?: boolean;
  reverseFlex?: boolean;
  textAlignRight?: boolean;
};

const MainSection = ({
  renderImg,
  subtitle,
  title,
  description,
  removeRightPadding,
  removeLeftPadding,
  reverseFlex,
  textAlignRight,
}: MainSectionProps) => {
  return (
    <section className={styles.home_section}>
      <div
        className={clsx([
          styles.home_section_inner,
          { [styles.reverse_flex]: reverseFlex },
        ])}
      >
        {renderImg}
        <div
          className={clsx([
            styles.home_section_inner_content,
            {
              [styles.reset_left_padding]: removeLeftPadding,
              [styles.reset_right_padding]: removeRightPadding,
              [styles.text_align_right]: textAlignRight,
            },
          ])}
        >
          <span className={styles.subtitle}>{subtitle}</span>
          <p className={styles.title}>{makeParagraph(title)}</p>
          <p className={styles.description}>{makeParagraph(description)}</p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
