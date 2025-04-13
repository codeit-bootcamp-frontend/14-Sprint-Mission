const FormHeader = ({ title, isSubmitEnabled }) => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="text-[20px] font-[700] text-[#1F2937]">{title}</div>
        <button
          type="submit"
          disabled={!isSubmitEnabled}
          className={`rounded-[8px] w-[74px] h-[42px] text-[#FFFFFF] ${
            isSubmitEnabled ? "bg-[#3692FF]" : "bg-[#9CA3AF] cursor-not-allowed"
          }`}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default FormHeader;
