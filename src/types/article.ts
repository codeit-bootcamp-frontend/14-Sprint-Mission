export interface GetArticleType {
  totalCount: number
  list: GetArticleIdType[]
}

export interface GetArticleIdType {
  updatedAt: string
  createdAt: string
  likeCount: number
  writer: {
    nickname: string
    id: number
  }
  image: string
  content: string
  title: string
  id: number
}
