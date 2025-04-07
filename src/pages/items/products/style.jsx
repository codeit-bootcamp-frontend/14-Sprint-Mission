import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0;
  row-gap: 16px;
  justify-content: flex-start;

  .notFound {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 42px;
  margin-bottom: 200px;

  button {
    border-radius: 100px;
    width: 40px;
    height: 40px;
    border: 1px solid var(--Cool-Gray-200, #e5e7eb);
    background: #fff;
    cursor: pointer;
    transition: all 0.05s ease-out;

    &:hover {
      background: #efefef;
    }

    &.number:disabled {
      background: #2f80ed;
      color: white;
    }
  }
`;
