
import { postProductComment } from 'api';
import Button from 'components/ui/Button';
import { TextAreaBox } from 'components/ui/InputBox';
import React, { useState } from 'react';

function CommentForm({prodId}) {


  const [editValue, setEditValue] = useState();
  const handleClick = async () => {
    try {
      await postProductComment(prodId, editValue);
      console.log(' 댓글 등록 완료');
      // 예: 목록 다시 불러오기 or 상태 업데이트
    } catch (err) {
      console.error(' 등록 실패:', err);
    }
  };
  return (
    <div className='w-full mb-6'>
      <h5 className='text-cool-gray-900 mb-2 font-bold ml-2'>문의하기</h5>
      <TextAreaBox
      placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' 
      value={editValue} onChange={({ target }) => setEditValue(target.value)}  />
      <div className='flex justify-end'>
        <Button variant="roundedSS" heightError='true' disabled={!editValue}  onClick={handleClick} >등록</Button>
      </div>
    </div>
  );
}
export default CommentForm;