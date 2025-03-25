import requestor from '../client/requestor';

class ProductService {
  getProducts({ page = 1, pageSize = 10, keyword = '', orderBy = 'recent' }) {
    return requestor.get(
      `/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}&orderBy=${orderBy}`
    );
  }

  getProduct(id) {
    return requestor.get(`/products/${id}`);
  }

  getComments(productId, limit = 3, cursor = 0) {
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
