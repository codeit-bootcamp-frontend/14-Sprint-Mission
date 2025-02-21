export default function Card({ imgSrc, isFlexReverse = false, children }) {
  return (
    <div className="card-wrapper flex-center">
      <div className={`card flex-center gap-40 ${isFlexReverse ? "flex-reverse" : ""}`}>
        <img src={imgSrc} alt="랜딩페이지 이미지" />
        <div className="grid gap-12">
          <p className="text-2lg text-primary-100 text-bold">Hot item</p>
          <div className="grid gap-24">{children}</div>
        </div>
      </div>
    </div>
  );
}
