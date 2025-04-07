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

export const TitleBar = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 12px;
  /* height: 42px; */
  transition: all 0.05s ease-out;

  span {
    color: var(--Secondary-900, #111827);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }

  label {
    position: relative;

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 16px;
    }

    input {
      border: none;
      height: 42px;
      overflow: hidden;
      padding: 9px 20px 9px 44px;
      border-radius: 12px;
      background: var(--Secondary-100, #f3f4f6);
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      &:hover {
        background: #efefef;
      }
    }
  }

  .select-order {
    display: flex;
    width: 130px;
    height: 42px;
    padding: 0 20px;
    border-radius: 12px;
    border: 1px solid var(--Cool-Gray-200, #e5e7eb);
    background: #fff;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-shrink: 0;
    position: relative;
    cursor: pointer;
    transition: all 0.05s ease-out;

    @media (max-width: 768px) {
      width: 42px;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      background: #f7f7f7;
    }

    span {
      color: var(--Secondary-800, #1f2937);
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      height: 42px;
      line-height: 42px;
      margin: 0;
    }

    ul {
      display: flex;
      width: 130px;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 100%;
      border-radius: 12px;
      border: 1px solid var(--Cool-Gray-200, #e5e7eb);
      background: #fff;
      margin-top: 8px;
      cursor: pointer;
      z-index: 2;
      overflow: hidden;

      li {
        width: 100%;
        height: 42px;
        list-style: none;
        text-align: center;
        line-height: 42px;
        transition: all 0.05s ease-out;

        &:hover {
          background: #f7f7f7;
        }

        &:first-child {
          border-bottom: 1px solid var(--Cool-Gray-200, #e5e7eb);
        }
      }
    }
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

export const Button = styled.button`
  padding: 12px 23px;
  border-radius: 8px;
  background: var(--Primary-100, #3692ff);
  justify-content: center;
  align-items: center;
  border: none;
  color: var(--Cool-Gray-100, #f3f4f6);
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.05s ease-out;

  .link {
    text-decoration: none;
    color: white;
  }

  &:hover {
    background: #1967d6;
  }
`;
