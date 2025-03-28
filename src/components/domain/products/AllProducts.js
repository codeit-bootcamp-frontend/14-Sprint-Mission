import Product from './Product';

function AllProducts({ products }) {
  return (
    <div className="all-products">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
