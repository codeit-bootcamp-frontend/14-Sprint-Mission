'use client'

import { useEffect, useState } from 'react'

import productService from '../../lib/api/service/productService'
import { GetProductIdTypes } from '../../types/product'

export const useGetProductId = (productId: number) => {
  const [productsId, setProductsId] = useState<GetProductIdTypes>()

  useEffect(() => {
    const getProductsComments = async () => {
      try {
        const response = await productService.getProductId(productId)

        setProductsId(response.data)
        console.log(productId)
      } catch (error) {
        console.log(error)
      }
    }
    getProductsComments()
  }, [productId])

  return productsId
}
