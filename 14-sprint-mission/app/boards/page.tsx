import BestArticleItem from '@/components/BestArticleItem';
import Navbar from '@/components/Navbar';
import axios from '@/lib/api/axios';
import { AxiosResponse } from 'axios';

interface DataProps {
  page: number;
  pageSize: number;
  orderBy: string;
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

interface Writer {
  id: number;
  nickname: string;
}

async function getData({ page, pageSize, orderBy }: DataProps) {
  try {
    const query = `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    const response: AxiosResponse = await axios.get(query);

    if (response.status >= 200 && response.status < 300) {
      console.log(response.data);
      return response.data;
    } else {
      console.error('Request failed with status:', response.status);
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

async function Boards() {
  const params = {
    page: 1,
    pageSize: 10,
  };
  const bestData = await getData({
    page: 1,
    pageSize: 3,
    orderBy: 'like',
  });
  const recentData = await getData({ ...params, orderBy: 'recent' });

  const bestArticles: Article[] = bestData?.list || [];
  const recentArticles: Article[] = recentData?.list || [];

  console.log('like', bestArticles);
  console.log('recent', recentArticles);

  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className="w-[1200px] mx-auto my-0">
        <h1>베스트 게시글</h1>
        <div className="flex gap-[24px]">
          {bestArticles.map((article) => (
            <BestArticleItem key={article.id} article={article} />
          ))}
        </div>

        <h2>게시글</h2>
      </div>
    </>
  );
}

export default Boards;
