import addItem from "../../assets/add-item.png";
import xIcon from "../../assets/x-icon.png";

import FormInput from "../Common/FormInput";

const ImageUploader = ({
  previewUrl,
  setPreviewUrl,
  showWarning,
  setShowWarning,
  imageInputRef,
}) => {
  const handleUploadClick = () => {
    imageInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (previewUrl) {
      setShowWarning(true);
    } else if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setShowWarning(false);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = "";
  };
  return (
    <div>
      <div className="font-[700] text-[18px] text-[#1F2937] mt-[24px]">
        상품 이미지
      </div>
      <div className="flex gap-[10px] ">
        <FormInput
          type="file"
          accept="image/*"
          hidden
          ref={imageInputRef}
          onChange={handleFileChange}
        />
        <button
          onClick={handleUploadClick}
          className="w-[168px] h-[168px] bg-[#F3F4F6] flex justify-center items-center rounded-[12px] pc:w-[282px] pc:h-[282px] "
        >
          <img src={addItem} alt="addItem" className="w-[74px] h-[86px]" />
        </button>
        <div className="w-[168px] h-[168px] relative pc:w-[282px] pc:h-[282px] ">
          {previewUrl && (
            <>
              <img
                src={previewUrl}
                alt="미리보기"
                className="w-[168px] h-[168px] object-cover rounded-[12px] pc:w-[282px] pc:h-[282px]"
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
      {showWarning && (
        <div className="text-red-500 text-sm mt-[16px]">
          *이미지 등록은 최대 1개까지 가능합니다.
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
