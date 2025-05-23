'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
import { useDebounce } from '../../hooks/useDebounce'
import { useGetArticles } from '../../hooks/useGetArticle'

import BoardDetailArrary from './BoardDetailArrary'
import DropDown from '../../components/common/DropDown'
import Button from '../../components/common/Button'

import InquiryEmpty from '../../../public/assets/svg/inquiry_empty.svg'
import Search from '../../../public/assets/svg/search.svg'

import styles from './BoardList.module.scss'

type SelectOption = {
  value: string
  name: string
}

const BoardList = () => {
  const selectList: SelectOption[] = [
    { value: 'recent', name: '최신순' },
    { value: 'like', name: '좋아요순' },
  ]
  const observerRef = useRef<HTMLDivElement | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const [page, setPage] = useState(1)
  const [selectedOption, setSelectedOption] = useState('recent')
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [isMobile, setIsMobile] = useState(false)
  const orderBy = selectedOption === 'recent' ? 'recent' : 'like'
  // 페이지네이션을 위한 상태
  useEffect(() => {
    if (page !== 1) {
      setPage(1)
      setHasMore(true)
    }
  }, [selectedOption, debouncedSearchTerm])

  // 게시글 목록을 가져오는 커스텀 훅
  const { articleList, hasMore, setHasMore } = useGetArticles(
    page,
    orderBy,
    debouncedSearchTerm
  )
  // 페이지네이션을 위한 상태
  const loadMore = async () => {
    if (hasMore) setPage((prev) => prev + 1)
  }
  //무한스크롤
  useInfiniteScroll({
    hasMore,
    loadMore,
    observerRef,
    scrollContainerRef,
  })
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 743)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  if (!articleList) {
    // 데이터가 없을 때 로딩 상태를 보여줄 수 있고, 데이터가 도착하면 다시 렌더링되어 실제 게시글 목록이 보임임
    return null
  }
  return (
    <>
      <div className={styles['board-header']}>
        <div className={styles['best-boards-title']}>게시글</div>
        <Button className={styles['writer-button']} size={42.5} to="/addboard">
          글쓰기
        </Button>
      </div>
      <div className={styles['search-list']}>
        <div className={styles['text-input-icon']}>
          <input
            className={styles['nav-search']}
            placeholder="검색할 상품 입력해주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className={styles['placeholder-icon']}>
            <Image src={Search} alt="검색아이콘" />
          </div>
        </div>
        <DropDown
          left={isMobile ? '-44px' : '0'}
          top={isMobile ? '-22px' : '0'}
          selectList={selectList}
          selected={selectedOption}
          onChange={(value) => setSelectedOption(value)}
        />
      </div>
      <div className={styles['boards-list']} ref={scrollContainerRef}>
        {articleList.list?.length === 0 ? (
          <div className={styles['inquiry-empty-wrapper']}>
            <Image src={InquiryEmpty} alt="관련된 게시글이 없습니다." />
            <div className={styles['inquiry-empty-text']}>문의가 없습니다</div>
          </div>
        ) : (
          <div className={styles['items-question-wrapper']}>
            {articleList.list.map((article) => (
              <BoardDetailArrary key={article.id} article={article} />
            ))}
            {hasMore && <div ref={observerRef} style={{ height: '50px' }} />}
          </div>
        )}
      </div>
    </>
  )
}

export default BoardList
