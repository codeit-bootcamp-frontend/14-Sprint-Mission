import { ProductType } from '../../../types/types';
import Product from './Product';

interface AllProductsProps {
  allProducts: ProductType[];
}

function AllProducts({ allProducts }: AllProductsProps) {
  return (
    <div className="all-products">
      {allProducts?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
