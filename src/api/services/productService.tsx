import { Axios, AxiosResponse } from 'axios'
import requestor from '../client/requestor'
import { GetProductIdTypes } from '../../types/product'

class ProductService {
  //틀릴 수도
  postProduct(body: GetProductIdTypes) {
    const requestBody = {
      ...body,
    }
    return requestor.post(`/products`, requestBody)
  }

  getProduct(page: number, pageSize: number, orderBy: string, keyword: string) {
    return requestor.get(
      `/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    )
  }

  getProductId(productId: number): Promise<AxiosResponse<GetProductIdTypes>> {
    return requestor.get(`/products/${productId}`)
  }

  patchProductId(productId, body) {
    // 틀릴수도
    const requestBody = {
      ...body,
      productId: productId,
    }
    return requestor.patch(`/products/${productId}`, requestBody)
  }

  deleteProductId(productId) {
    return requestor.delete(`/products/${productId}`)
  }

  postProductIdFavorite(productId) {
    return requestor.post(`/products/${productId}/favorite`)
  }

  deleteProductIdFavorite(productId) {
    return requestor.delete(`/products/${productId}/favorite`)
  }
}

const productService = new ProductService()

export default productService
