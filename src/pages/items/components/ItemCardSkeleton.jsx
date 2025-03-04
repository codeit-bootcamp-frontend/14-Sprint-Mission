export default function ItemCardSkeleton() {
  return (
    <article className="skeleton display-grid justify-stretch gap-16" id="item-card">
      <div className="img-wrapper radius-16">
        <div className="thumbnail surface-secondary-200" />
      </div>
      <div className="skeleton-details display-grid justify-stretch gap-6">
        <div className="surface-secondary-200" />
        <div className="surface-secondary-200" />
        <div className="surface-secondary-200" />
      </div>
    </article>
  );
}
