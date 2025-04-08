import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/images/logo.svg";
import LogoTypoOnly from "@/assets/images/logo_typo_only.svg";
import styled from "styled-components";
import Button from "./Button";
import color from "../utils/color";

const GNBContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  position: sticky;
  width: 100%;
  height: 70px;
  padding: 9px 200px;
  border-bottom: 1px solid #dfdfdf;
  background: #fff;

  .container {
    max-width: 1920px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sign-button {
    margin-left: auto;
  }

  .link-container {
    display: flex;
    margin-left: 32px;
    gap: 40px;

    .link {
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 26px;

      &-market {
        color: ${(props) =>
          props.currentPath === "/items"
            ? color("primary100")
            : color("secondary600")};
      }

      &-board {
        color: ${(props) =>
          props.currentPath === "/board"
            ? color("primary100")
            : color("secondary600")};
      }
    }

    @media (max-width: 768px) {
      gap: 8px;
      margin-left: 8px;
    }
  }

  .logo {
    height: 100%;
    display: block;
    picture img {
      height: 100%;
    }
  }
  @media (max-width: 1024px) {
    padding: 9px 24px;
  }
  @media (max-width: 768px) {
    padding: 9px 16px;
    .logo {
      padding: 8px 0;
    }
  }
`;

function GNB() {
  const location = useLocation();

  return (
    <GNBContainer role="navigation" currentPath={location.pathname}>
      <div className="container">
        <Link to="/" className="logo">
          <picture>
            <source srcSet={Logo} media="(min-width:768px)" />
            <img src={LogoTypoOnly} alt="판다마켓 로고" />
          </picture>
        </Link>
        {location.pathname === "/items" && (
          <div className="link-container">
            <Link className="link link-board">자유게시판</Link>
            <Link className="link link-market">중고마켓</Link>
          </div>
        )}
        <Link to="/login" className="sign-button">
          <Button width="128px" height="48px">
            로그인
          </Button>
        </Link>
      </div>
    </GNBContainer>
  );
}

export default GNB;
