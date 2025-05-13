import ArticleList from '@/app/boards/ArticleList';
import BestArticleList from '@/app/boards/BestArticleList';
import ButtonSmall from '@/components/common/ButtonSmall';
import Navbar from '@/components/common/Navbar';
import SearchForm from '@/components/common/SearchForm';
import Select from '@/components/common/Select';
import Link from 'next/link';

interface DataProps {
  page: number;
  pageSize: number;
  orderBy: string;
  keyword: string;
}

export interface Article {
  id: number;
  content: string;
  image: string;
  likeCount: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface Writer {
  id: number;
  nickname: string;
  image: string;
}

export async function getData({ page, pageSize, orderBy, keyword }: DataProps) {
  try {
    const query = `articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${query}`
    );

    if (response.ok) {
      const data = await response.json();
      // console.log(data);
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

const labels = [
  { name: '최신순', value: 'recent' },
  { name: '인기순', value: 'like' },
];

async function Boards() {
  const initialData = await getData({
    page: 1,
    pageSize: 10,
    orderBy: 'recent',
    keyword: '',
  });
  const initialArticles = await initialData.list;

  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className="max-w-[1200px] mx-auto my-0 max-[1200px]:mx-[24px]">
        <h2 className="font-bold text-[20px] my-[24px]">베스트 게시글</h2>
        <BestArticleList />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[20px] my-[24px]">게시글</h2>
          <Link href="/addboard">
            <ButtonSmall>글쓰기</ButtonSmall>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SearchForm />
          <Select labels={labels} />
        </div>
        <ArticleList initialArticles={initialArticles} />
      </div>
    </>
  );
}

export default Boards;
