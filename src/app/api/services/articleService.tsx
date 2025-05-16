import requestor from '../client/requestor'
import { AxiosResponse } from 'axios'
import { GetArticleType, GetArticleIdType } from '@/app/types/article'

class ArticleService {
  postArticle(body) {
    // 틀릴 수도
    const requestBody = {
      ...body,
    }
    return requestor.post(`/api/proxy/articles`, requestBody)
  }

  getArticle(
    page: number,
    pageSize: number,
    orderBy: string,
    keyword?: string
  ): Promise<AxiosResponse<GetArticleType>> {
    let url = `/api/proxy/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    if (keyword) {
      url += `&keyword=${encodeURIComponent(keyword)}`
    }
    return requestor.get(url)
  }

  getArticleId(articleId: number): Promise<AxiosResponse<GetArticleIdType>> {
    return requestor.get(`p/articles/${articleId}`)
  }

  patchArticleId(articleId, body) {
    // 틀릴수도
    return requestor.patch(`/api/proxy/articles/${articleId}`, {
      data: body,
    })
  }

  deleteArticleId(articleId) {
    return requestor.delete(`/api/proxy/articles/${articleId}`)
  }

  postArticleLike(articleId) {
    return requestor.post(`/api/proxy/articles/${articleId}/like`)
  }

  deleteArticleLike(articleId) {
    return requestor.delete(`/api/proxy/articles/${articleId}/like`)
  }
}

const articleService = new ArticleService()

export default articleService
