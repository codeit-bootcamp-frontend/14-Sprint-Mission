import SERVER_URL from "@/constants/server-url";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
}

export type Products = Product[];

export interface Query {
  page: number;
  pageSize: number;
  orderBy: "recent" | "favorite";
  keyword?: string;
}

export interface ProductsData {
  list: Products;
  totalCount: number;
}

const getProducts = async (query: Query): Promise<ProductsData> => {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    params.append(key, String(value));
  });

  const url = `${SERVER_URL}/products?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `상품 데이터를 불러오는 데 실패했습니다. ${response.status}`
    );
  }
  const data = await response.json();
  return data;
};

export default getProducts;
