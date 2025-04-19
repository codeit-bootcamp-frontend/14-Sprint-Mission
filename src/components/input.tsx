import { createContext, useContext, useState } from "react";
import styles from "./input.module.css";
import inputValidate from "@/utils/input-validate";

// type, interface 선언
export type inputType = "email" | "username" | "password";

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
  type: inputType;
  error: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

//input 컴포넌트 들에서 사용할 컨텍스트 생성, 커스텀 훅 생성
const InputContext = createContext<InputContextProps | undefined>(undefined);

const useInputContext = (): InputContextProps => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("Input.Group으로 감싸져야 합니다.");
  }
  return context;
};

//Input요소들을 감싸는 컨테이너 역할을 할 Input.Group컴포넌트 작성
//상태관리, 이벤트 리스너 생성해서 내려줍니다.
function InputGroup({ type, children }: InputProps) {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = inputValidate(type, value);
    console.log(isValid);
    setError(!isValid);
  };

  return (
    <InputContext.Provider
      value={{ value, type, error, handleChange, handleBlur }}
    >
      <div className={styles["input__group"]}>{children}</div>
    </InputContext.Provider>
  );
}

//단순히 라벨 렌더링만 하는 Input.Label 컴포넌트 입니다.
function InputLabel({ label }: InputLabelProps) {
  return (
    <label className={`${styles["input__label"]} font-2lg font-bold`}>
      {label}
    </label>
  );
}

function InputField({ placeholder }: InputFieldProps) {
  const { value, type, error, handleChange, handleBlur } = useInputContext();

  const inputType = type === "username" ? "text" : type;

  return (
    <input
      className={`${styles["input__field"]} ${
        error ? styles["input__field--error"] : ""
      }`}
      type={inputType}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
      onBlur={handleBlur}
    />
  );
}

const Input = {
  Group: InputGroup,
  Label: InputLabel,
  Field: InputField,
};

export default Input;
