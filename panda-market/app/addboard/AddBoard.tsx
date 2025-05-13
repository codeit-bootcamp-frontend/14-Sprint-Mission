'use client';
import withAuth from '../../components/auth/withAuth';
import Navbar from '@/components/common/Navbar';
import ButtonSmall from '@/components/common/ButtonSmall';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/TextArea';
import FileInput from '@/components/common/FileInput';
import { postArticle } from '@/api/boards';
import { useRouter } from 'next/navigation';

export interface FormDataProps {
  title: string;
  content: string;
  imgFile?: File | null;
}

function AddBoard() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataProps>({
    title: '',
    content: '',
    imgFile: null,
  });
  const [isValidate, setIsValidate] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (name: string, value: File | null) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const submitData = new FormData();
    submitData.append('title', formData.title);
    submitData.append('content', formData.content);

    // 이미지 파일이 있는 경우에만 추가
    if (formData.imgFile) {
      submitData.append('imgFile', formData.imgFile);
    }
    const result = await postArticle(formData);

    if (result.success) {
      console.log('등록 성공');
      router.push(`/board/${result.boardId}`);
    } else {
      console.log('등록 실패');
    }
  };

  useEffect(() => {
    setIsValidate(false);
    const title = formData.title.trim();
    const content = formData.content.trim();
    if (title.length > 0 && content.length > 0) {
      setIsValidate(true);
    }
  }, [formData]);

  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className="max-w-[1200px] mx-auto my-0 max-[1200px]:mx-[24px]">
        <form className="mb-103" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-[20px] my-[24px]">게시글 쓰기</h2>
            <ButtonSmall disabled={!isValidate} type="submit">
              등록
            </ButtonSmall>
          </div>
          <div className="flex flex-col gap-24">
            <Input
              label="제목"
              name="title"
              value={formData.title}
              placeholder="제목을 입력해주세요"
              onChange={handleInputChange}
            />
            <Textarea
              label="내용"
              name="content"
              value={formData.content}
              placeholder="내용을 입력해주세요"
              height="h-[282px]"
              onChange={handleInputChange}
            />
            <FileInput value={formData.imgFile} onChange={handleFileChange} />
          </div>
        </form>
      </div>
    </>
  );
}

export default withAuth(AddBoard);
