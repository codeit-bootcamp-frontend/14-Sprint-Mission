
import classNames from 'classnames';
import ProductItem from './ProductItem'
import styles from './ProdListAll.module.css';
import Container from '../Container';

function ProdListAll({ ItemsData, pageColumn, screenType }) {
  const ColumnValue = (screenType === 'mobile' ? pageColumn[0] : screenType === 'tablet' ? pageColumn[1] : pageColumn[2]);

  return (
    <>
      <Container>
        <ul className={classNames(styles.prodList, styles[`Column_${ColumnValue}`])}>
          {ItemsData.map((Item) => (
            <ProductItem 
              key={Item.id} 
              images={Item.images} 
              name={Item.name} 
              price={Item.price} 
              favoriteCount={Item.favoriteCount}
            />
          ))}
        </ul>
      </Container>
    </>
  );
}

export default ProdListAll;