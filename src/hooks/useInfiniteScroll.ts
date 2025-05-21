import { useEffect, RefObject } from 'react'

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
  useEffect(() => {
    if (!hasMore || !observerRef.current || !scrollContainerRef.current) return

    let loading = false

    const callback = async (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !loading) {
        loading = true
        await loadMore()
        setTimeout(() => {
          loading = false
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
