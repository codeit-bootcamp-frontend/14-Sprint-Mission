'use client'
import { useEffect, useState } from 'react'
import articleService from '../lib/api/service/articleService'
import { GetArticleType } from '../types/article'

export function useGetArticles(
  page: number,
  orderBy: string,
  searchTerm: string
) {
  const [articleList, setArticleList] = useState<GetArticleType>()
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await articleService.getArticle(
          page,
          5,
          orderBy,
          searchTerm
        )
        const newList = response.data.list || []
        setArticleList((prev) => {
          const combinedList =
            page === 1 ? newList : [...(prev?.list || []), ...newList]
          return {
            totalCount: response.data.totalCount,
            list: combinedList,
          }
        })
        if (newList.length < 5) setHasMore(false)
      } catch (error) {
        console.error('게시글 불러오기 실패:', error)
      }
    }
    fetchArticles()
    return () => {}
  }, [page, orderBy, searchTerm])
  return { articleList, setArticleList, hasMore, setHasMore }
}
