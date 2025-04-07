import styled from "styled-components";

export const TitleBar = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 12px;
  transition: all 0.05s ease-out;

  .container {
    width: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;

    .top-container {
      display: flex;
      width: 100%;
      align-items: center;
    }

    .bottom-container {
      display: flex;
      gap: 14px;
      width: 100%;
    }
  }

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
      white-space: nowrap;
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
