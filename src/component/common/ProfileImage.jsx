import "./ProfileImage.css";
import defaultProfileImg from "../../../image/profile.png";

function ProfileImage({ src, alt = "프로필 이미지", className = "" }) {
  return (
    <img
      src={src || defaultProfileImg}
      alt={alt}
      className={`profile-image ${className}`}
    />
  );
}

export default ProfileImage;
