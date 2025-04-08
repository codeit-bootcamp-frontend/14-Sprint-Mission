import { Link } from "react-router-dom";
import Logo from "@/assets/images/logo.svg";
import LogoTypoOnly from "@/assets/images/logo_typo_only.svg";
import styled from "styled-components";
import Button from "./Button";

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

  .logo {
    width: 100%;
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
  return (
    <GNBContainer role="navigation">
      <div className="container">
        <Link to="/" className="logo">
          <picture>
            <source srcSet={Logo} media="(min-width:768px)" />
            <img src={LogoTypoOnly} alt="판다마켓 로고" />
          </picture>
        </Link>
        <Link to="/login">
          <Button width="128px" height="48px">
            로그인
          </Button>
        </Link>
      </div>
    </GNBContainer>
  );
}

export default GNB;
