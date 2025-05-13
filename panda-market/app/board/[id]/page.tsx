import Navbar from '@/components/common/Navbar';
import Image from 'next/image';
import userIcon from '@/public/assets/icons/user-icon.svg';
import formatDate from '@/lib/formatDate';
import heartIcon from '@/public/assets/icons/heart-icon.svg';
import kebabIcon from '@/public/assets/icons/kebab-icon.svg';
import Comment from './Comment';
import CommentList from './CommentList';

export async function getArticle(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${id}`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.error('Request failed with status:', response.status);
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

async function Board({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log('id', id);
  const article = await getArticle(id);

  const formattedDate = formatDate(article.createdAt);

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <div className="max-w-[1200px] mx-auto my-0 max-[1200px]:mx-[24px] mt-32">
        <div className="flex flex-col gap-16 border-b pb-16">
          <div className="flex justify-between items-center">
            <h1 className="font-700 text-20 text-gray-800">{article.title}</h1>
            <Image
              className="cursor-pointer"
              src={kebabIcon}
              alt="setting"
              width={24}
              height={24}
            />
          </div>
          <div className="flex">
            <div className="flex items-center gap-[8px] text-gray-600 font-500 border-r pr-32 max-sm:pr-16">
              <Image src={userIcon} alt="user" width={40} height={40} />
              <span>{article.writer?.nickname}</span>
              <span className="text-gray-400 font-400">{formattedDate}</span>
            </div>
            <div className="min-w-79 h-40 flex items-center justify-center gap-4 ml-32 px-12 py-4 border rounded-[35px] text-16">
              <Image
                className="w-26 h-23"
                src={heartIcon}
                alt="heart"
                width={26}
                height={23}
              />
              <span>{article.likeCount}</span>
            </div>
          </div>
        </div>
        <div className="mt-24 mb-32 font-400 text-18">
          <p>{article.content}</p>
        </div>
        <Comment />
        <CommentList id={id} />
      </div>
    </div>
  );
}

export default Board;
