import { useParams } from "react-router-dom";
import { useState } from "react";
import pandaFace from "../../assets/panda-face.png";
import EmptyInquiry from "./EmptyInquiry";
import useInquiries from "../../hooks/useInquiries";
import DropdownMenu from "./DropdownMenu";
import GoBackItmes from "./GoBackItmes";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const InquiryList = () => {
  const { id: productId } = useParams();
  const { inquiries, isLoading, refetch } = useInquiries(productId);
  const [editingId, setEditingId] = useState(null);
  const [editedContext, setEditedContent] = useState("");

  const handleEdit = (id, content) => {
    setEditingId(id);
    setEditedContent(content);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedContent("");
  };

  const handleUpdate = async () => {
    const _res = await fetch(
      `https://panda-market-api.vercel.app/comments/${editingId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: editedContext }),
      }
    );
    refetch();
    setEditingId(null);
    setEditedContent("");
  };

  const handleDelete = async (id) => {
    const res = await fetch(
      `https://panda-market-api.vercel.app/comments/${id}`,
      {
        method: "DELETE",
        // 토큰 없어서 삭제 안됨
      }
    );
    if (!res.ok) throw new Error(`삭제 실패: ${res.status}`);
    refetch();
  };

  if (isLoading) return <p>문의 목록 불러오는 중...</p>;

  if (inquiries.length === 0) return <EmptyInquiry />;

  return (
    <div className="mt-[40px] mx-auto w-[343px] tablet:w-[696px] pc:w-[1200px]">
      <ul>
        {inquiries.map((item) => (
          <li key={item.id}>
            <div className="flex justify-between">
              {editingId === item.id ? (
                <textarea
                  value={editedContext}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="w-full text-[14px] text-[#1F2937] mb-[8px] bg-[#F3F4F6] p-[20px] rounded-[12px]"
                />
              ) : (
                <div className="mb-[24px]">{item.content}</div>
              )}
              <DropdownMenu
                isEditing={editingId === item.id}
                options={[
                  {
                    label: "수정하기",
                    onClick: () => handleEdit(item.id, item.content),
                  },
                  { label: "삭제하기", onClick: () => handleDelete(item.id) },
                ]}
              />
            </div>
            {editingId === item.id && (
              <div className="flex justify-end gap-[8px] mb-[12px]">
                <button
                  onClick={handleCancel}
                  className="px-[12px] py-[4px] border rounded text-[16px] text-[#737373]"
                >
                  취소
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-[12px] py-[4px] w-[106px] h-[42px] bg-[#3692FF] text-[#F3F4F6] rounded-[8px] text-[16px]"
                >
                  수정 완료
                </button>
              </div>
            )}
            <div className="flex gap-[8px]">
              <img
                src={pandaFace}
                alt="panda-face-logo"
                className="w-[32px] h-[32px] items-center"
              />
              <div className="flex flex-col justify-center gap-[4px] ">
                <div className="text-[12px] text-[#4B5563]">
                  {item.writer.nickname}
                </div>
                <div className="mb-[12px] text-[12px] text-[#9CA3AF]">
                  {dayjs(item.updatedAt).fromNow()}
                </div>
              </div>
            </div>
            <div className="border-b mb-[24px]"></div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <GoBackItmes />
      </div>
    </div>
  );
};

export default InquiryList;
