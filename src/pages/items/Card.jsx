import styled from "styled-components";

const Article = styled.article`
  display: inline-flex;
  background: #fcfcfc;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 220px;
  height: 318px;
`;

const Figure = styled.figure`
  width: 220px;
  height: 220px;
  overflow: hidden;
  border-radius: 16px;

  background: url(${(props) => props.images});
  background-size: cover;
  background-position: center;
`;

function Card({ name, price, favoriteCount, isLoading = true, images }) {
  if (isLoading) {
    return <span>로딩중임</span>;
  } else {
    return (
      <Article>
        <Figure images={images} />
        <section>
          <h2 className="">{name}</h2>
          <div>{price}원</div>
          <div>
            <span> ❤️ </span>
            {favoriteCount}
          </div>
        </section>
      </Article>
    );
  }
}

export default Card;
