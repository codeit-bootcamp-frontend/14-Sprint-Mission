'use client';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import ConfirmModal from '@/components/ui/ConfirmModal';
import FormField from '@/components/ui/form/FormField';
import ImageFileBox from '@/components/ui/form/ImageFileBox';
import { InputField, TextAreaField } from '@/components/ui/form/InputBox';
import Title from '@/components/ui/Title';
import { ArticleCreateRequest, usePostArticles } from '@/hooks/useArticles';
import { useConfirmModal } from '@/hooks/useModal';
import { validationRules } from '@/utils/validate';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';


const INITIAL_Article: ArticleCreateRequest = {
  image: "",
  content: "",
  title: ""
}
type FormValues = {
  title: string;
  content: string;
  image: string;
};
function PostArticles() {
  const router = useRouter();
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm<FormValues>({
    mode: 'onBlur', 
  });

  const [addArticles, setAddArticles] = useState<ArticleCreateRequest>(INITIAL_Article);

  const { mutate: postArticles} = usePostArticles(openConfirmModal,router);

  const handleFieldBlur = () => {
    const values = getValues(); // 모든 필드 값 가져오기
      setAddArticles((prev) => {
        const updated = { ...prev, ...values };
        return updated;
      });
    };
  
  const onSubmit: SubmitHandler<FormValues> = (data) => {
      setAddArticles((prev) => ({
    ...prev,
    ...addArticles, // form에서 온 title, content 등
  }));
    postArticles(addArticles);
  };

  function handleInputBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>){
    const value = e.target.value;
    setAddArticles((prev) => ({
      ...prev,
      [e.target.id]: value
    }));
  }

  return (
    <Container className="relative mb-[130px]">
      <Title titleTag='h1' text='게시물 쓰기'>
      </Title>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}> 
        <Button 
          type="submit"
          variant="roundedSS" 
          className="!absolute top-0 right-0"
          disabled = { !isValid || !isDirty || !addArticles.content }
        >등록</Button>
        <FormField
          id="title"
          label="*제목"
          type="text"
          placeholder="제목을 입력해주세요"
          error={errors.title?.message}
          {...register('title', {
            ...validationRules.title,
            onBlur: handleFieldBlur, 
          })}
          
        />        
        <TextAreaField id='content' label='내용' height='282px' placeholder='내용를 입력해주세요' onBlur={handleInputBlur} />
        <ImageFileBox<ArticleCreateRequest> setForm={setAddArticles} />
      </form>
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </Container>
  );
}

export default PostArticles;