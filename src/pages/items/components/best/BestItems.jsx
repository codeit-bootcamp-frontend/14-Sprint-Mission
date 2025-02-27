import { getProducts, PAGE_SIZE } from "../../../../apis/products";
import useAsync from "../../../../hooks/useAsync";
import ItemCard from "../ItemCard";
import ItemCardSkeleton from "../ItemCardSkeleton";

export default function BestItems({ viewportSize = "desktop" }) {
  const { loading: bestLoading, value: bestListValue } = useAsync(
    () => getProducts(1, PAGE_SIZE.best[viewportSize], "favorite"),
    [viewportSize]
  );
  return (
    <section id="best-items" className="display-grid justify-stretch gap-16">
      <h2 className="text-xl text-bold">베스트 상품</h2>
      {bestLoading ? (
        <div className="display-grid justify-evenly align-upper direction-column gap-16">
          {new Array(PAGE_SIZE.best[viewportSize]).fill().map((_, idx) => (
            <ItemCardSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <div className="display-grid justify-evenly align-upper direction-column gap-16">
          {bestListValue?.list?.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
}
