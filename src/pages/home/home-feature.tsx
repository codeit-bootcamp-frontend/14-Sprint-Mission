interface HomeFeatureProps {
  image: string;
  keyword: string;
  title: string;
  description: string;
}

export default function HomeFeature({
  image,
  keyword,
  title,
  description,
}: HomeFeatureProps) {
  return (
    <article className="home-feature">
      <img src={image} className="home-feature__image" />
      <p className="home-feature__keyword">{keyword}</p>
      <h2 className="home-feature__title">{title}</h2>
      <p className="home-feature__description">{description}</p>
    </article>
  );
}

