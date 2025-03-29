import requestor from '../client/requestor'

class CommentService {
  // 틀릴 수도
  postProductComment(productId, body) {
    const requestBody = {
      ...body,
      productId: productId,
    }
    return requestor.post(`/products/${productId}/comments`, requestBody)
  }

  getProductComment(productId, limit, cursor) {
    // 틀릴 수도
    return requestor.get(
      `/products/${productId}/comments?limit=${limit}&cursor=${cursor}`
    )
  }

  postArticleComment(articleId, body) {
    // 틀릴 수도
    const requestBody = {
      ...body,
      articleId: articleId,
    }
    return requestor.post(`/articles/${articleId}/comments`, requestBody)
  }

  getArticleComment(articleId, limit, cursor) {
    return requestor.get(
      `/articles/${articleId}/comments?limit=${limit}&cursor=${cursor}`
    )
  }

  patchComment(commentId) {
    return requestor.patch(`/comments/${commentId}`)
  }

  deleteComment(commentId) {
    return requestor.delete(`/comments/${commentId}`)
  }
}

const commentService = new CommentService()

export default commentService
