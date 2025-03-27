type ProductType = {
  createdAt: string;
  updatedAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
};

type ProductResultType = {
  list: ProductType[];
  totalCount: number;
};

export { ProductType, ProductResultType };
