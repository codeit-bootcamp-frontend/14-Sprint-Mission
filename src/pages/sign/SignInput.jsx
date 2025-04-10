import { useRef, useState } from "react";
import ShowPassword from "./ShowPassword";

function SignInput({
  type,
  name,
  title,
  autoComplete,
  id,
  inputState,
  pw,
  value,
  onChange,
  ...rest
}) {
  const sibling = useRef(null);
  const [showPw, setShowPw] = useState(false);

  return (
    <>
      <label htmlFor={name} style={{ position: "relative" }}>
        {title}
        <div className="input-container">
          <input
            className="sign-form__input"
            autoComplete={autoComplete}
            type={type === "password" ? (showPw ? "text" : "password") : type}
            name={name}
            id={id}
            pw={pw}
            value={value}
            onChange={onChange}
            ref={sibling}
            {...rest}
            {...inputState}
          />
          {type === "password" && <ShowPassword setShowPw={setShowPw} />}
        </div>
      </label>
      {inputState.msg && (
        <span className="sign-form__input__msg" id={`msg-${id}`}>
          {inputState.msg}
        </span>
      )}
    </>
  );
}

export default SignInput;
