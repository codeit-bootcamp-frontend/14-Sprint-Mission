import ButtonLarge from '@/components/common/ButtonLarge';
import NoCommentImage from '@/public/assets/images/nocomment.png';
import ArrowLeftIcon from '@/public/assets/icons/arrow-left-icon.svg';
import Image from 'next/image';

function NoComment() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-40 mb-200">
      <Image
        className="w-140 h-140"
        src={NoCommentImage}
        alt="no comment"
        width={140}
      />
      <p className="text-center font-400 text-16 text-gray-400 mb-48">
        아직 댓글이 없어요,
        <br /> 지금 댓글을 달아보세요!{' '}
      </p>
      <ButtonLarge to="/boards" imgSrc={ArrowLeftIcon} imgAlt="arrow left">
        목록으로 돌아가기
      </ButtonLarge>
    </div>
  );
}

export default NoComment;
