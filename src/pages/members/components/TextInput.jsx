import { useState } from "react";
import { checkValidation } from "../../../utils/members";

export default function TextInput({
  labelText = "이메일",
  id = "email",
  type = "email",
  placeholder = "이메일을 입력해주세요",
  value = "",
  onChange,
}) {
  const [errMsg, setErrMsg] = useState("");

  function onInputChange(e) {
    const newValue = e.target.value;
    onChange(newValue);
    const msg = checkValidation(id, newValue);
    setErrMsg(msg);
  }
  return (
    <div className="input-field display-grid justify-stretch">
      <label htmlFor={id || type} className="text-2lg text-bold">
        {labelText}
      </label>
      <div className="input-wrapper display-flex justify-left radius-12">
        <input
          id={id || type}
          type={type}
          value={value}
          placeholder={placeholder}
          onClick={onInputChange}
          onChange={onInputChange}
        />
      </div>
      {errMsg.length > 0 && <p className="text-error text-md text-semibold">{errMsg}</p>}
    </div>
  );
}
