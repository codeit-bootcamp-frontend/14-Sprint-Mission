import requestor from '../client/requestor'

class ArticleService {
  postArticle(body) {
    // 틀릴 수도
    const requestBody = {
      ...body,
    }
    return requestor.post(`/articles`, requestBody)
  }

  getArticle(page, pageSize, orderBy, keyword) {
    return requestor.get(
      `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    )
  }

  getArticleId(articleId) {
    return requestor.get(`p/articles/${articleId}`)
  }

  patchArticleId(articleId, body) {
    // 틀릴수도
    return requestor.patch(`/articles/${articleId}`, {
      data: body,
    })
  }

  deleteArticleId(articleId) {
    return requestor.delete(`/articles/${articleId}`)
  }

  postArticleLike(articleId) {
    return requestor.post(`/articles/${articleId}/like`)
  }

  deleteArticleLike(articleId) {
    return requestor.delete(`/articles/${articleId}/like`)
  }
}

const articleService = new ArticleService()

export default articleService
