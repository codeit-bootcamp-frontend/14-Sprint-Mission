import Link from "next/link";

import { RouteValues } from "@/constants/route";
import styles from "./RecommendSign.module.css";

type RecommendSignProps = { text: string; to: RouteValues; linkName: string };

const RecommendSign = ({ text, to, linkName }: RecommendSignProps) => {
  return (
    <p className={styles.sign_paragraph}>
      {text} <Link href={to}>{linkName}</Link>
    </p>
  );
};

export default RecommendSign;
