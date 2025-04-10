import { useState } from "react";

import IcoClose from "@/assets/icons/ico_close.svg";
import Button from "@/components/Button";
import FileInput from "./FileInput";

import * as S from "./style";

function Input({
  title,
  width = "100%",
  height = "56px",
  type = "text",
  ...rest
}) {
  return (
    <S.Label>
      {title}
      {type === "text" && (
        <S.InputText width={width} height={height} {...rest} />
      )}
      {type === "textarea" && (
        <S.Textarea width={width} height={height} {...rest} />
      )}
    </S.Label>
  );
}

function AddItem() {
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter" && currentTag.trim() !== "") {
      e.preventDefault();
      setTags((prev) => [...prev, currentTag.trim()]);
      setCurrentTag("");
    }
  }

  return (
    <>
      <S.InputContainer>
        <S.SubmitContainer>
          <span>상품 등록하기</span>
          <Button
            width="74px"
            disabled={!(price && tags.length && name && description)}
          >
            등록
          </Button>
        </S.SubmitContainer>
        <FileInput title="상품 이미지" />
        <Input
          title="상품명"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="상품명을 입력해주세요"
        />
        <Input
          title="상품 소개"
          height="282px"
          placeholder="상품 소개를 입력해주세요"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* useEffect로 e.target.selectionStart = e.target.value.length - 1;
        e.target.selectionEnd = e.target.value.length - 1;로 텍스트 커서 컨트롤하기 */}
        <Input
          title="판매가격"
          value={price.toLocaleString() + "원"}
          onChange={(e) =>
            setPrice(Number(e.target.value.replace(/[^0-9]/g, "")))
          }
          placeholder="판매 가격을 입력해주세요"
        />
        <Input
          title="태그"
          placeholder="태그를 입력해주세요"
          value={currentTag}
          onChange={(e) => setCurrentTag(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <S.TagContainer>
          {tags.map((v, i) => (
            <S.Tag
              onClick={() =>
                setTags((prev) => prev.filter((_, ii) => ii !== i))
              }
            >
              #{v} <img src={IcoClose} alt="" />
            </S.Tag>
          ))}
        </S.TagContainer>
      </S.InputContainer>
    </>
  );
}

export default AddItem;
