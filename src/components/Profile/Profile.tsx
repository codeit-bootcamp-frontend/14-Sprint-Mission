import clsx from "clsx";

import { dateFormatter } from "../../utils/formatter";

import DefaultProfileIcon from "../../assets/icons/default_profile.svg";
import styles from "./Profile.module.css";

type ProfileProps = {
  size?: "lg" | "md";
  image?: string;
  nickname: string;
  date: string | Date;
};

const Profile = ({ size = "lg", nickname, image, date }: ProfileProps) => {
  const isSizeLg = size === "lg";
  const isSizeMd = size === "md";

  return (
    <div
      className={clsx([
        styles.profile,
        {
          [styles.lg_profile]: isSizeLg,
          [styles.md_profile]: isSizeMd,
        },
      ])}
    >
      <img
        className={clsx(styles.profile_image, {
          [styles.lg_profile_image]: isSizeLg,
          [styles.md_profile_image]: isSizeMd,
        })}
        src={image || DefaultProfileIcon}
        alt="프로필 이미지"
      />
      <div
        className={clsx(styles.profile_info, {
          [styles.lg_profile_info]: isSizeLg,
          [styles.md_profile_info]: isSizeMd,
        })}
      >
        <p>{nickname}</p>
        <p className={styles.profile_date}>{dateFormatter(new Date(date))}</p>
      </div>
    </div>
  );
};

export default Profile;
