'use client';
import ButtonSmall from '@/components/common/ButtonSmall';
import Textarea from '@/components/common/TextArea';
import { ChangeEvent, useEffect, useState } from 'react';

function Comment() {
  const [value, setValue] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  const handleAddComment = () => {
    console.log(value);
  };

  useEffect(() => {
    setIsDisabled(value.trim() === '');
  }, [value]);

  return (
    <div className="flex flex-col gap-9 ">
      <h3 className="font-600 text-16">댓글달기</h3>
      <Textarea placeholder="댓글을 입력해주세요." onChange={handleChange} />
      <div className="flex justify-end">
        <ButtonSmall onClick={handleAddComment} disabled={isDisabled}>
          등록
        </ButtonSmall>
      </div>
    </div>
  );
}

export default Comment;
