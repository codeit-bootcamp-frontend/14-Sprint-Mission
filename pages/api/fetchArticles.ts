const fetchArticles = async ({
  page = 1,
  pageSize = 10,
  orderBy,
  keyword = "",
}: {
  page?: number;
  pageSize: number;
  orderBy: "recent" | "like";
  keyword?: string;
}) => {
  const query = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
  });
  if (keyword) query.append("keyword", keyword);

  const url = `https://panda-market-api.vercel.app/articles?${query.toString()}`;
  const res = await fetch(url);
  const data: Articles = await res.json();
  console.log("🛰 요청 URL:", url);
  return data;
};

export default fetchArticles;

type Article = {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
};

type Articles = {
  list: Article[];
};
