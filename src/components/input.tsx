import { createContext, useContext, useState } from "react";
import styles from "./input.module.css";

type inputType = "email" | "username" | "password";

interface InputProps {
  type: inputType;
  children: React.ReactNode;
}

interface InputLabelProps {
  label: string;
}

interface InputFieldProps {
  placeholder: string;
}

interface InputContextProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: inputType;
}

const InputContext = createContext<InputContextProps | undefined>(undefined);

const useInputContext = (): InputContextProps => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("Input.Group으로 감싸져야 합니다.");
  }
  return context;
};

function InputGroup({ type, children }: InputProps) {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputContext.Provider value={{ value, handleChange, type }}>
      <div className={styles["input__group"]}>{children}</div>
    </InputContext.Provider>
  );
}

function InputLabel({ label }: InputLabelProps) {
  return (
    <label className={`${styles["input__label"]} font-2lg font-bold`}>
      {label}
    </label>
  );
}

function InputField({ placeholder }: InputFieldProps) {
  const { value, handleChange, type } = useInputContext();

  const inputType = type === "username" ? "text" : type;

  return (
    <input
      className={styles["input__field"]}
      type={inputType}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  );
}

const Input = {
  Group: InputGroup,
  Label: InputLabel,
  Field: InputField,
};

export default Input;
