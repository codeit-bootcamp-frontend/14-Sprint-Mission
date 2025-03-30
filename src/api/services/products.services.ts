import { UseProductProps, UseCommentsProps, Product } from '../../types/types';
import requestor from '../client/requestor';

class ProductService {
  getProducts({
    currentPage = 1,
    pageSize = 10,
    keyword = '',
    sortOrder = 'recent',
  }: UseProductProps) {
    const query = `/products?page=${currentPage}&pageSize=${pageSize}&keyword=${keyword}&orderBy=${sortOrder}`;
    return requestor.get(query);
  }

  getProduct(id: string) {
    return requestor.get<Product>(`/products/${id}`);
  }

  getComments({ productId, limit = 3, cursor = 0 }: UseCommentsProps) {
    return requestor.get(`/products/${productId}/comments`, {
      params: {
        limit,
        cursor,
      },
    });
  }
}

const productService = new ProductService();

export default productService;
