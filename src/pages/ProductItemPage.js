import { useParams } from 'react-router-dom';
import './ProductItemPage.css';
import { getProductItem } from '../api/api';
import { useEffect } from 'react';
import Navbar from '../components/common/Navbar';

function ProductItemPage() {
  const { id } = useParams();

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const body = await getProductItem(id);
        console.log('body', body);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoad();
  }, []);

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <main className="productItem">item {id}</main>
    </div>
  );
}

export default ProductItemPage;
