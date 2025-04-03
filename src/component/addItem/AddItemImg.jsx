import { uploadImg } from "../../api/api";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import "./AddItemImg.css";
import removeIcon from "../../../image/ic_img_remove.png";

function AddItemImg() {
  const [imgUrl, setImgUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // 상품 이미지 업로드
  const handleImgUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const fileExtension = file.name.split(".").pop();
    const fileName = `${uuidV4()}.${fileExtension}`;
    const newFile = new File([file], fileName, { type: file.type });
    const imageUrl = URL.createObjectURL(newFile);

    setImgUrl(imageUrl);

    event.target.value = "";
  };

  const handleAddImageClick = (event) => {
    if (imgUrl) {
      event.preventDefault();
      setErrorMsg("* 이미지는 최대 1개까지 등록할 수 있습니다.");
    }
  };

  return (
    <>
      <div className="add-item-input-div">상품 이미지</div>
      <div className="add-item-img-container">
        <label
          htmlFor="add-item-img"
          className={`add-item-img-div ${imgUrl ? "error" : ""}`}
          onClick={handleAddImageClick}
        >
          <input
            className="add-item-input-img"
            id="add-item-img"
            name="item-img"
            type="file"
            onChange={handleImgUpload}
          />
          <div className="add-item-img-btn">
            <img src="./image/add_item_img.png"></img>
            <div>이미지 등록</div>
          </div>
        </label>
        {imgUrl && (
          <div className="upload-img-container">
            <img src={imgUrl} alt="업로드된 이미지" className="upload-img" />

            <img
              src={removeIcon}
              alt="이미지 삭제 아이콘"
              className="remove-icon"
              onClick={() => {
                setImgUrl("");
                setErrorMsg("");
              }}
            />
          </div>
        )}
        {errorMsg && <div className="error-message">{errorMsg}</div>}
      </div>
    </>
  );
}

export default AddItemImg;
