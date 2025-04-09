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
  return (
    <>
      <label htmlFor={name} style={{ position: "relative" }}>
        {title}

        <input
          className="sign-form__input"
          autoComplete={autoComplete}
          type={type}
          name={name}
          id={id}
          pw={pw}
          value={value}
          onChange={onChange}
          {...rest}
          {...inputState}
        />
        {type === "password" && <ShowPassword />}
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
