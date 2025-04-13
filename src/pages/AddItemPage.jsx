import { useRef } from "react";
import { useState } from "react";

import Nav from "../Components/Common/Nav";
import addItem from "../assets/add-item.png";
import xIcon from "../assets/x-icon.png";

const AddItemPage = () => {
  const [previewUrl, setPreviewUrl] = useState("");
  const imageInputRef = useRef(null);

  const handleUploadClick = () => {
    imageInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = "";
  };
  return (
    <div>
      <Nav />
      <div className="mx-[16px]">
        <div className="flex justify-between mt-[24px] tablet:mt-[16px] pc:mt-[24px]">
          <div className="text-[20px] font-[700] text-[#1F2937]">
            상품 등록하기
          </div>
          <button className="rounded-[8px] w-[74px] h-[42px] bg-[#9CA3AF] text-[#FFFFFF]">
            등록
          </button>
        </div>
        <div>상품 이미지</div>
        <div className="flex gap-[10px] ">
          <input
            type="file"
            accept="image/*"
            ref={imageInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={handleUploadClick}
            className="w-[168px] h-[168px] bg-[#F3F4F6] flex justify-center items-center rounded-[12px] "
          >
            <img src={addItem} alt="addItem" className="w-[74px] h-[86px]" />
          </button>
          <div className="w-[168px] h-[168px] relative ">
            {previewUrl && (
              <>
                <img
                  src={previewUrl}
                  alt="미리보기"
                  className="w-[168px] h-[168px] object-cover rounded-[12px]"
                />
                <img
                  src={xIcon}
                  alt="image delete button"
                  className="w-[22px] h-[24px] absolute top-[12px] right-[12px]"
                  onClick={() => setPreviewUrl("")}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;
