import { useParams } from 'react-router-dom';
import './ProductItemPage.css';
import Navbar from '../components/common/Navbar';
import ProductItem from '../components/domain/ProductItem';
import useProduct from '../components/hooks/useProduct';
import CommentList from '../components/domain/message/CommentList';

function ProductItemPage() {
  const { id } = useParams();
  const { product, loading, error, refetch } = useProduct(id);

  return (
    <div>
      <Navbar isLoggedIn={true} />
      {!loading && (
        <main className="ProductPage">
          <ProductItem item={product} />
          <CommentList productId={id} />
        </main>
      )}
    </div>
  );
}

export default ProductItemPage;
