import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import Nav from "../Components/Common/Nav";
import TagInput from "../Components/Additem/TagInput";
import ImageUploader from "../Components/Additem/ImageUploader";
import FormHeader from "../Components/Additem/FormHeader";
import FormField from "../Components/Additem/FormField";

const AddItemPage = () => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const imageInputRef = useRef(null);
  const [tags, setTags] = useState([]);
  const { register, handleSubmit, watch } = useForm({ mode: "onChange" });

  const values = watch();

  const allFieldsFilled =
    values.productName && values.description && values.price && tags.length > 0;

  const onSubmit = (data) => {
    console.log({ ...data, image: previewUrl, tags: tags });
  };

  return (
    <div>
      <Nav />
      <div className="mx-[16px]">
        <div className="flex justify-between mt-[24px] tablet:mt-[16px] pc:mt-[24px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col max-w-[1200px] w-full mx-auto"
          >
            <FormHeader
              title="상품 등록하기"
              isSubmitEnabled={allFieldsFilled}
            />

            <ImageUploader
              previewUrl={previewUrl}
              setPreviewUrl={setPreviewUrl}
              showWarning={showWarning}
              setShowWarning={setShowWarning}
              imageInputRef={imageInputRef}
            />

            <div className="flex flex-col  mt-[24px] pc:mt-[32px]">
              <FormField
                label="상품명"
                id="product-name"
                type="text"
                placeholder="상품명을 입력해주세요"
                register={register("productName", { required: true })}
              />
              <FormField
                label="상품 소개"
                id="product-introduce"
                type="text"
                placeholder="상품소개를 입력해주세요"
                register={register("description", { required: true })}
              />
              <FormField
                label="판매 가격"
                id="price"
                placeholder="판매 가격을 입력해주세요"
                register={register("price", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
              <TagInput tags={tags} setTags={setTags} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;
