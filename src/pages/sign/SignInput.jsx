function SignInput({
  placeholder,
  type,
  name,
  title,
  autoComplete,
  id,
  inputState,
  pw,
}) {
  return (
    <>
      <label htmlFor={name}>{title}</label>
      <input
        className="sign-form__input"
        autoComplete={autoComplete}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        {...inputState}
      />
      {inputState.msg && (
        <span className="sign-form__input__msg" id={`msg-${id}`}>
          {inputState.msg}
        </span>
      )}
    </>
  );
}

export default SignInput;
