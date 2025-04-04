import { useEffect, useState } from 'react'

import productService from '../api/services/productService'

export const useGetProductId = (productId) => {
  const [productsId, setProductsId] = useState([])

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
