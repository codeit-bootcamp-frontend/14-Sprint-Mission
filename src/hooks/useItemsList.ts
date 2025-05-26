import { useQuery } from '@tanstack/react-query'

import productService from '@/lib/api/service/productService'

interface UseItemsListOptions {
  page: number
  itemsDisplay: number
  orderBy?: string
  keyword?: string
  enabled?: boolean
}

export const useItemsList = ({
  page,
  itemsDisplay,
  orderBy = 'recent',
  keyword,
  enabled = true,
}: UseItemsListOptions) => {
  const productListAll = useQuery({
    queryKey: ['productListAll', page, itemsDisplay, orderBy, keyword],
    queryFn: () =>
      productService
        .getProduct(page, itemsDisplay, orderBy, keyword)
        .then((res) => res?.data ?? { totalCount: 0, list: [] }),
    placeholderData: (prev) => prev,
    enabled,
  })

  return {
    productListAll,
  }
}
