import { useState } from "react";

import IcoClose from "@/assets/icons/ico_close.svg";
import IcoPlus from "@/assets/icons/ico_plus.svg";

import * as ParentS from "../style";
import * as CurrentS from "./style";

function FileInput({ title, ...rest }) {
  const [thumbnail, setThumbnail] = useState("");
  const [warning, setWarning] = useState("");

  function handleFileUpload(e) {
    let fileArr = e.target.files;
    let image = window.URL.createObjectURL(fileArr[0]);
    setThumbnail(image);
  }

  function handleOnClick(e) {
    if (thumbnail) {
      e.preventDefault();
      setWarning("*이미지 등록은 최대 1개까지 가능합니다");
    }
  }

  return (
    <ParentS.Label>
      {title}
      <input
        type="file"
        accept=".png, .jpeg, .jpg"
        style={{ display: "none" }}
        onChange={handleFileUpload}
        onClick={handleOnClick}
        {...rest}
      />
      <CurrentS.FileContainer>
        <CurrentS.File>
          <img src={IcoPlus} />
          <span>이미지 등록</span>
        </CurrentS.File>
        {thumbnail && (
          <CurrentS.File
            onClick={(e) => {
              e.preventDefault();
              setThumbnail("");
            }}
          >
            <img className="close" src={IcoClose} alt="" />
            <img className="thumbnail" src={thumbnail} />
          </CurrentS.File>
        )}
      </CurrentS.FileContainer>
      <span className="warning">{warning}</span>
    </ParentS.Label>
  );
}

export default FileInput;
