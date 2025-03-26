import axios from "axios";

const Base_URL = "https://panda-market-api.vercel.app";

interface Product {
  page: number;
  pageSize: number;
  orderBy: string
  keyword?: string;
}

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  salePrice: number;
  images: string[];
  tags: string[];
  description: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  createdAt: string;
}

interface ProductResponse {
  totalCount: number;
  list: ProductItem[];
}

export async function getProduct({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: Product):Promise<ProductResponse | undefined> {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  try {
    const response = await axios.get<ProductResponse>(`${Base_URL}/products?${query}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error("데이터를 불러오는데 실패했습니다");
    }
    return undefined;
  }
}
