import styled from "styled-components";
import color from "../../utils/color";

export const Container = styled.div`
  margin-top: 140px;
  background: $basic;
  display: flex;
  justify-content: center;
  align-items: center;

  .password-container {
    position: relative;
  }

  .sign {
    &-container {
      width: 640px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;

      .logo {
        height: 132px;
        background-position: 50% 50%;
        display: flex;
        justify-content: center;
      }

      .sign-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;

        &__input {
          box-sizing: border-box;
          width: 100%;
          height: 56px;
          padding: 16px 24px;
          border: none;
          border-radius: 12px;
          background: ${color("secondary200")};
          margin-bottom: 8px;

          &--error {
            outline: none;
            border: 2px solid ${color("errorRed")};
          }

          &::placeholder {
            font: normal 400 16px/26px "Pretendard";
            color: $secondary-400;
          }

          &:focus {
            outline: none;
            border: 2px solid ${color("primary100")};
          }

          &__msg {
            font-size: 14px;
            margin-left: 14px;
            margin-top: -16px;
            color: ${color("errorRed")};
          }
        }

        label {
          color: ${color("secondary800")};
          font: normal 700 18px/26px "Pretendard";
        }
      }

      footer {
        text-align: center;
        font: normal 500 14px/24px "Pretendard";
        color: ${color("secondary800")};
        margin-bottom: 200px;

        a {
          color: ${color("primary100")};
        }
      }
    }
  }

  .social-log-wrap {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 74px;
    padding: 16px 23px;
    border-radius: 8px;
    background: #e6f2ff;
    align-items: center;
    gap: 10px;
    color: ${color("secondary800")};
    font: normal 500 16px/26px "Pretendard";

    &__title {
      flex-grow: 1;
    }
  }

  .icon {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 42px;
    height: 42px;
  }

  @media (max-width: 768px) {
    .sign-container {
      width: 100%;
      max-width: 400px;
      padding: 0 16px;
      gap: 16px;

      .sign-form {
        margin-top: 8px;
      }

      .logo {
        width: 198px;
        height: 66px;
      }
    }
  }
`;
