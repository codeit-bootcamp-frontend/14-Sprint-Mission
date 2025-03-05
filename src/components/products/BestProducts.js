import Product from '../common/Product';

function BestProducts({ bestProducts }) {
  return (
    <div className="best-products">
      {bestProducts?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default BestProducts;
