import {
  UseProductProps,
  UseCommentsProps,
  ProductType,
  CommentsResponse,
  ProductResponse,
} from '../../types/types';
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

  getProduct(id: string): Promise<ProductResponse> {
    return requestor.get<ProductType>(`/products/${id}`);
  }

  getComments({
    productId,
    limit = 3,
    cursor = 0,
  }: UseCommentsProps): Promise<CommentsResponse> {
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
