import { Banner } from "@/constants/bannerData";
import styles from "../styles/home-feature.module.css";

export default function HomeFeature({
  image,
  keyword,
  title,
  description,
}: Banner) {
  return (
    <article className={styles["home-feature"]}>
      <img src={image} className={styles["home-feature__image"]} />
      <div className={styles["home-feature__text-wrapper"]}>
        <p className={`${styles["home-feature__keyword"]} font-lg font-bold`}>
          {keyword}
        </p>
        <h2 className={`${styles["home-feature__title"]} font-2xl font-bold`}>
          {title}
        </h2>
        <p
          className={`${styles["home-feature__description"]} font-lg font-medium`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
