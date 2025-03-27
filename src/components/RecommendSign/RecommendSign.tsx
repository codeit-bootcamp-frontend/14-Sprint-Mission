import { Link } from "react-router-dom";

import styles from "./RecommendSign.module.css";
import { RouteValues } from "@/constants/route";

type RecommendSignProps = { text: string; to: RouteValues; linkName: string };

const RecommendSign = ({ text, to, linkName }: RecommendSignProps) => {
  return (
    <p className={styles.sign_paragraph}>
      {text} <Link to={to}>{linkName}</Link>
    </p>
  );
};

export default RecommendSign;
