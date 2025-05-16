import styles from "./submit-button.module.css";

interface SubmitButtonProps {
  children: string;
}

export default function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button
      className={`${styles["submit-button"]} font-xl font-semibold`}
      type="submit"
    >
      {children}
    </button>
  );
}
