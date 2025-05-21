import styled from "styled-components";
import { PageContainer, CommonContainer, FormHeader, Title, Divider as CommonDivider } from "../common/CommonStyles";

export { PageContainer, FormHeader, Title };

export const ProductDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #e53935;
  padding: 20px;
  margin-top: 100px;
`;

export const Divider = CommonDivider;

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  /* 태블릿 화면 */
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 340px 1fr;
    gap: 32px;
  }

  /* 데스크톱 화면 */
  @media (min-width: 1024px) {
    grid-template-columns: 486px 1fr;
    gap: 48px;
  }
`;
