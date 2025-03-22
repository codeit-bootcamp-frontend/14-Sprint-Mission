import { useParams } from 'react-router-dom';
import './ProductItemPage.css';
import { getProductItem } from '../api/api';
import { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import ProductItem from '../components/domain/ProductItem';

function ProductItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const body = await getProductItem(id);
        console.log('body', body);
        setItem(body);
      } catch (error) {
        console.log(error);
      }
    };

    handleLoad();
  }, []);

  return (
    <div>
      <Navbar isLoggedIn={true} />
      <main className="productItem">
        <ProductItem item={item} />
      </main>
    </div>
  );
}

export default ProductItemPage;
