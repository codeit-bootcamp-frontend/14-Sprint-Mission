import React from "react";
import FormInput from "../Common/FormInput";

const FormField = ({ label, id, type = "text", placeholder, register }) => {
  return (
    <div className="mb-[24px]">
      <label
        htmlFor={id}
        className="font-[700] text-[18px] text-[#1F2937] block mb-[8px]"
      >
        {label}
      </label>
      <FormInput id={id} type={type} placeholder={placeholder} {...register} />
    </div>
  );
};

export default FormField;
