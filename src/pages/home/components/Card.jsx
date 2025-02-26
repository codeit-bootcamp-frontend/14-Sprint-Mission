export default function Card({ imgSrc, isFlexReverse = false, title, children }) {
  return (
    <div className="card-wrapper display-flex justify-center">
      <div
        className={`card display-flex justify-center gap-64 ${
          isFlexReverse ? "direction-row-reverse" : ""
        }`}
      >
        <img src={imgSrc} alt="랜딩페이지 이미지" />
        <div className="display-grid gap-12">
          <p className="text-2lg text-primary-100 text-bold">{title}</p>
          <div className="display-grid gap-24">{children}</div>
        </div>
      </div>
    </div>
  );
}
