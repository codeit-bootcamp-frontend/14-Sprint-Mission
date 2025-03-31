import { ProductType } from '../../../types/types';
import Product from './Product';

interface BestProductsProps {
  bestProducts: ProductType[];
}

function BestProducts({ bestProducts }: BestProductsProps) {
  return (
    <div className="best-products">
      {bestProducts?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default BestProducts;
