
import classNames from 'classnames';
import ProductItem from './ProductItem'
import styles from './ProdListAll.module.css';
import Container from '../Container';

function ProdListAll({ itemsData, pageColumn }) {

  return (
    <>
      <Container>
        <ul className={classNames(styles.prodList, styles[`Column_${pageColumn}`])}>
          {itemsData.map((item) => (
            <ProductItem 
              key={item.id} 
              images={item.images} 
              name={item.name} 
              price={item.price} 
              favoriteCount={item.favoriteCount}
            />
          ))}
        </ul>
      </Container>
    </>
  );
}

export default ProdListAll;