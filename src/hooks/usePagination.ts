import { useEffect, useMemo, useState } from 'react'

interface UsePaginationProps {
  offset?: number | undefined
  limit?: number | undefined
  totalCount?: number | undefined
  pageRange?: number // 보여줄 페이지 버튼 수 (기본값: 5)
  setQuery: (query: { offset: number; limit: number }) => void
}

export const usePagination = ({ offset = 0, limit = 10, totalCount = 0, pageRange = 5, setQuery }: UsePaginationProps) => {
  const currentPage = Math.floor(offset / limit) + 1   // 현재페이지
  const totalPages = Math.ceil(totalCount / limit)  // 총 페이지

  const [pageGroupStart, setPageGroupStart] = useState(1)

  useEffect(() => {
    const newGroupStart = Math.floor((currentPage - 1) / pageRange) * pageRange + 1
    setPageGroupStart(newGroupStart)
  }, [currentPage, pageRange])

  const pageList = useMemo(() => {
    const end = Math.min(pageGroupStart + pageRange - 1, totalPages)
    return Array.from({ length: end - pageGroupStart + 1 }, (_, i) => pageGroupStart + i)
  }, [pageGroupStart, totalPages, pageRange])


  const goToPage = (page: number) => {
    const newOffset = (page - 1) * limit
    setQuery({ offset: newOffset, limit })
  }

  const goToPrev = () => {
    const prevPage = currentPage - pageRange;
    if (prevPage < 1) {
      setQuery({ offset: 0, limit })
    } else {
      const prevOffset = (prevPage - 1) * limit
      setQuery({ offset: prevOffset, limit })
    }
  }


  const goToNext = () => {
    const nextPage = currentPage + pageRange
    if (nextPage > totalPages) {
      const lastOffset = (totalPages - 1) * limit
      setQuery({ offset: lastOffset, limit })
    } else {
      const nextOffset = (nextPage - 1) * limit
      setQuery({ offset: nextOffset, limit })
    }
  }
  return {
    currentPage,
    totalPages,
    pageList,
    goToPage,
    goToNext,
    goToPrev
  }
}
