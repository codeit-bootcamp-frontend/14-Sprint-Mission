export interface GetCommentType {
  nextCursor: number | null
  list: PostCommentType[]
}

export interface PostCommentType {
  id: number
  content: string
  createdAt: string
  updatedAt: string
  writer: {
    id: number
    nickname: string
    image: string
  }
}
