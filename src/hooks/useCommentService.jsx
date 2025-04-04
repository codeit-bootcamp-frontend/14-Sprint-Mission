import { useEffect, useState } from 'react'

import commentService from '../api/services/commentService'

export const useGetCommentService = (productId, limit = 3) => {
  const [productQuestion, setProductQuestion] = useState({
    list: [],
    nextCursor: null,
  })

  useEffect(() => {
    const getProductsComments = async () => {
      try {
        const response = await commentService.getProductComment(
          productId,
          limit
        )

        setProductQuestion({
          list: response.data.list,
          nextCursor: response.data.nextCursor,
        })
      } catch (error) {
        console.log(error)
      }
    }
    getProductsComments()
  }, [productId, limit])

  return productQuestion
}
