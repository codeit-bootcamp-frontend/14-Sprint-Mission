import { ItemComment, ItemInfo } from "./_components/index";

import styles from "./page.module.css";

const ItemPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const parameters = await params;
  const productId = parameters.productId;

  return (
    <div className={styles.container}>
      <ItemInfo productId={productId} />
      <hr className={styles.divider} />
      <ItemComment productId={productId} />
    </div>
  );
};

export default ItemPage;
