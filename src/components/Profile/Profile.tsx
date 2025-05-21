import clsx from "clsx";

import Image from "next/image";
import { dateFormatter } from "@/utils/formatter";

import DefaultProfileIcon from "@/assets/icons/default_profile.svg";

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
      {image ? (
        <Image
          width={24}
          height={24}
          className={clsx(styles.profile_image, {
            [styles.lg_profile_image]: isSizeLg,
            [styles.md_profile_image]: isSizeMd,
          })}
          src={image}
          alt="프로필 이미지"
        />
      ) : (
        <DefaultProfileIcon
          className={clsx(styles.profile_image, {
            [styles.lg_profile_image]: isSizeLg,
            [styles.md_profile_image]: isSizeMd,
          })}
        />
      )}
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
