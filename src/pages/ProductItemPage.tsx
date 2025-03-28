import { useNavigate, useParams } from 'react-router-dom';
import './ProductItemPage.css';
import Navbar from '../components/common/Navbar';
import ProductItem from '../components/domain/products/ProductItem';
import useProduct from '../components/hooks/useProduct';
import CommentList from '../components/domain/message/CommentList';
import ButtonMedium from '../components/common/ButtonMedium';
import ReturnIcon from '../assets/icons/return.svg';

function ProductItemPage() {
  const { id } = useParams();
  const { product, loading, error, refetch } = useProduct(id);
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate('/items');
  };

  return (
    <div>
      <Navbar isLoggedIn={true} />
      {!loading && (
        <main className="ProductPage">
          <ProductItem item={product} />
          <CommentList productId={id} />
          <ButtonMedium
            onClick={handleReturnClick}
            imgSrc={ReturnIcon}
            imgAlt={'return'}
          >
            목록으로 돌아가기
          </ButtonMedium>
        </main>
      )}
    </div>
  );
}

export default ProductItemPage;
