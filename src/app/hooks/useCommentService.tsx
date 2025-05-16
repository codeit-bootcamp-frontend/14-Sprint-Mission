'use client'

import { useEffect, useState } from 'react'
import { GetCommentType } from '../types/comment'

import commentService from '../../../src/app/api/services/commentService'

export const useGetCommentService = (productId: number, limit = 3) => {
  const [productQuestion, setProductQuestion] = useState<GetCommentType>({
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
