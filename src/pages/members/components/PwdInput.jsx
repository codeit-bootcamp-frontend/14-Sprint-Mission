import { useState } from "react";
import { checkValidation } from "../../../utils/members";

export default function PwdInput({
  labelText = "비밀번호",
  id = "pwd",
  placeholder = "비밀번호를 입력해주세요",
  value = "",
  onChange,
  isValid = false,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  function onInputChange(e) {
    const newValue = e.target.value;
    onChange(newValue);
    const msg = checkValidation(id, newValue);
    setErrMsg(msg);
  }
  return (
    <div className="input-field display-grid justify-stretch">
      <label htmlFor={id} className="text-2lg text-bold">
        {labelText}
      </label>
      <div className="input-wrapper display-flex justify-sides radius-12" id="input-wrapper-pwd">
        <input
          id={id}
          type={isVisible ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onClick={(e) => id === "pwd" && onInputChange(e)}
          onChange={onInputChange}
        />
        <button
          type="button"
          aria-label={`${labelText} 입력 보기`}
          id="visibility"
          className={isVisible ? "checked" : ""}
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
      {!isValid && errMsg.length > 0 && (
        <p className="text-error text-md text-semibold">{errMsg}</p>
      )}
    </div>
  );
}
