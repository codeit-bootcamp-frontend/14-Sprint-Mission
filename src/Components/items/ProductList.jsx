import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="mt-[16px] w-[168px] tablet:w-[221px] pc:w-[220px] "
        >
          <ProductCard cardType="All" product={product} />
        </div>
      ))}
    </>
  );
};

export default ProductList;
