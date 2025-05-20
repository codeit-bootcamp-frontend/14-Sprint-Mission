import requestor from '../client/requestor'
import { AxiosResponse } from 'axios'

import { PostCommentType, GetCommentType } from '../../types/comment'

class CommentService {
  // 틀릴 수도
  postProductComment(
    productId: number,
    body: Omit<PostCommentType, 'id' | 'createdAt' | 'updatedAt' | 'writer'>
  ): Promise<AxiosResponse<PostCommentType>> {
    const requestBody = {
      ...body,
      productId: productId,
    }
    return requestor.post(
      `/api/proxy/products/${productId}/comments`,
      requestBody
    )
  }

  getProductComment(
    productId: number,
    limit: number,
    cursor?: number
  ): Promise<AxiosResponse<GetCommentType>> {
    let url = `/api/proxy/products/${productId}/comments?limit=${limit}`

    if (cursor) {
      url += `&cursor=${cursor}`
    }

    return requestor.get(url)
  }

  postArticleComment(articleId, body) {
    // 틀릴 수도
    const requestBody = {
      ...body,
      articleId: articleId,
    }
    return requestor.post(
      `/api/proxy/articles/${articleId}/comments`,
      requestBody
    )
  }

  getArticleComment(articleId: number, limit: number, cursor?: number) {
    return requestor.get(
      `/api/proxy/articles/${articleId}/comments?limit=${limit}&cursor=${cursor}`
    )
  }

  patchComment(commentId, body) {
    return requestor.patch(`/api/proxy/comments/${commentId}`, body)
  }

  deleteComment(commentId) {
    return requestor.delete(`/api/proxy/comments/${commentId}`)
  }
}

const commentService = new CommentService()

export default commentService
