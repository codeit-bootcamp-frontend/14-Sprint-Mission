import { useState } from "react";
import { useParams } from "react-router-dom";

const InquirySubmit = () => {
  const { id: productId } = useParams();
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://panda-market-api.vercel.app/products/${productId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      }
    );
    const _data = await res.json();
    setContent("");
  };
  return (
    <div className="mx-auto w-[344px] tablet:gap-[16px] pc:gap-[24px] tablet:w-[696px] pc:w-[1200px]">
      <div className="mb-[16px] tablet:mb-[10px]">문의하기</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[16px] items-end"
      >
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          className="w-[343px] h-[129px] py-[16px] px-[24px] bg-[#F3F4F6] rounded-[12px] tablet:w-[696px] tablet:h-[104px] pc:w-[1200px] pc:h-[64px]"
        ></textarea>
        <button
          type="submit"
          className="w-[74px] h-[42px] py-[8px] px-[23px] bg-[#9CA3AF] text-[#F3F4F6] rounded-[8px]"
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default InquirySubmit;
