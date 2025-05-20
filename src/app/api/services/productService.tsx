import requestor from '../client/requestor'
import { AxiosResponse } from 'axios'

import { GetProductIdTypes } from '../../types/product'

class ProductService {
  //틀릴 수도
  postProduct(body: GetProductIdTypes) {
    const requestBody = {
      ...body,
    }
    return requestor.post(`/api/proxy/products`, requestBody)
  }

  getProduct(
    page: number,
    pageSize: number,
    orderBy: string,
    keyword?: string
  ) {
    let url = `/api/proxy/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
    if (keyword) {
      url += `&keyword=${encodeURIComponent(keyword)}`
    }
    return requestor.get(url)
  }

  getProductId(productId: number): Promise<AxiosResponse<GetProductIdTypes>> {
    return requestor.get(`/api/proxy/products/${productId}`)
  }

  patchProductId(productId, body) {
    // 틀릴수도
    const requestBody = {
      ...body,
      productId: productId,
    }
    return requestor.patch(`/api/proxy/products/${productId}`, requestBody)
  }

  deleteProductId(productId) {
    return requestor.delete(`/api/proxy/products/${productId}`)
  }

  postProductIdFavorite(productId) {
    return requestor.post(`/api/proxy/products/${productId}/favorite`)
  }

  deleteProductIdFavorite(productId) {
    return requestor.delete(`/api/proxy/products/${productId}/favorite`)
  }
}

const productService = new ProductService()

export default productService
