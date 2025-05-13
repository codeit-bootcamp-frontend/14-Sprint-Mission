export interface GetProductType {
  products: {
    list: GetProductIdTypes[]
    totalCount: number
  }
}

export interface GetProductIdTypes {
  createdAt: string
  favoriteCount: number
  ownerNickname: string
  ownerId: number
  images: string[]
  tags: string[]
  price: number
  description: string
  name: string
  id: number
  isFavorite?: boolean
}
