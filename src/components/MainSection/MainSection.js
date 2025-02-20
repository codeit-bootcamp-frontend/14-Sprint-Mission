import clsx from "clsx";

import { makeParagraph } from "../../utils/makeFormat";

import styles from "./MainSection.module.css";

const MainSection = ({
  renderImg,
  subtitle,
  title,
  description,
  removeRightPadding,
  removeLeftPadding,
  reverseFlex,
  textAlignRight,
}) => {
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
