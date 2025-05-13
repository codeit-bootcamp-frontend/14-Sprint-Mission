import Image from 'next/image';
import { Comment } from './CommentList';
import kebabIcon from '@/public/assets/icons/kebab-icon.svg';

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="flex flex-col gap-24 mt-40 bg-gray-50 pb-12 border-b">
      <div className="flex justify-between items-center">
        <p>{comment.content}</p>{' '}
        <Image
          className="cursor-pointer"
          src={kebabIcon}
          alt="option"
          width={24}
          height={24}
        />
      </div>
      <div className="flex items-center gap-8">
        <Image
          className="w-32 h-32 rounded-full"
          src={comment.writer.image}
          alt="user"
          width={32}
          height={32}
        />
        <div className="flex flex-col font-400 text-12">
          <span className="text-gray-600">{comment.writer.nickname}</span>
          <span className="text-gray-400">1 시간 전</span>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
