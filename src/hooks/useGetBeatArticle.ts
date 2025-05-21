import { useEffect, useState } from 'react'
import articleService from '../lib/api/service/articleService'
import { GetArticleType } from '../types/article'

export function useGetBestArticles(pageSize: number) {
  const [bestArticleList, setBestArticleList] = useState<GetArticleType>()
  useEffect(() => {
    articleService
      .getArticle(1, pageSize, 'like', '')
      .then((response) => {
        const sorted = [...(response.data.list || [])].sort(
          (a, b) => b.likeCount - a.likeCount
        )
        setBestArticleList({
          totalCount: response.data.totalCount,
          list: sorted,
        })
      })
      .catch((error) => {
        console.error('베스트 게시글 불러오기 실패:', error)
      })
  }, [pageSize])
  return bestArticleList
}
