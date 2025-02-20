import { Link } from "react-router-dom";

import styles from "./RecommendSign.module.css";

const RecommendSign = ({ text, to, linkName }) => {
  return (
    <p className={styles.sign_paragraph}>
      {text} <Link to={to}>{linkName}</Link>
    </p>
  );
};

export default RecommendSign;
