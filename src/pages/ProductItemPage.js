import { useParams } from 'react-router-dom';
import './ProductItemPage.css';
import Navbar from '../components/common/Navbar';
import ProductItem from '../components/domain/ProductItem';
import TextArea from '../components/common/TextArea';
import Button from '../components/common/Button';
import useProduct from '../components/hooks/useProduct';
import CommentList from '../components/domain/message/CommentList';

function ProductItemPage() {
  const { id } = useParams();
  const { product, loading, error, refetch } = useProduct(id);

  const handleCommentClick = () => {};

  return (
    <div>
      <Navbar isLoggedIn={true} />
      {!loading && (
        <main className="ProductPage">
          <ProductItem item={product} />
          <div className="inquiryContainer">
            <TextArea
              label="문의하기"
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
            <div className="buttonContainer">
              <Button onClick={() => handleCommentClick()}>등록</Button>
            </div>
          </div>
          <CommentList productId={id} />
        </main>
      )}
    </div>
  );
}

export default ProductItemPage;
