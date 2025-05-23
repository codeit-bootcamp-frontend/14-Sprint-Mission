import { useEffect, RefObject, useRef } from 'react'

type UseInfiniteScrollProps = {
  hasMore: boolean
  loadMore: () => void
  observerRef: RefObject<HTMLDivElement | null>
  scrollContainerRef: RefObject<HTMLDivElement | null>
}

export function useInfiniteScroll({
  hasMore,
  loadMore,
  observerRef,
  scrollContainerRef,
}: UseInfiniteScrollProps) {
  const loadingRef = useRef(false)

  useEffect(() => {
    if (!hasMore || !observerRef.current || !scrollContainerRef.current) return

    const callback = async (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !loadingRef.current) {
        loadingRef.current = true
        await loadMore()
        setTimeout(() => {
          loadingRef.current = false
        }, 500)
      }
    }

    const observer = new IntersectionObserver(callback, {
      root: scrollContainerRef.current,
      threshold: 0.9,
    })

    observer.observe(observerRef.current)

    return () => observer.disconnect()
  }, [hasMore, loadMore, observerRef, scrollContainerRef])
}
