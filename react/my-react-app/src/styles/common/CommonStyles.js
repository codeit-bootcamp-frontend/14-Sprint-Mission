import styled from "styled-components";

// Common container used across multiple pages
export const PageContainer = styled.div`
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 10px;
`;

// Responsive container with breakpoints for different screen sizes
export const CommonContainer = styled.div`
  width: 100%;
  max-width: 344px; /* 모바일 기본 너비 */
  margin: 0 auto;
  box-sizing: border-box;

  /* 태블릿 화면 */
  @media (min-width: 768px) {
    max-width: 696px;
  }

  /* 데스크톱 화면 */
  @media (min-width: 1280px) {
    max-width: 1200px;
  }
`;

// Common form header used in multiple forms
export const FormHeader = styled(CommonContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

// Common title style used in multiple components
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

// Common divider used in multiple pages
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #dfdfdf;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
`;

// Common error message styling
export const ErrorMessage = styled.div`
  color: #f74747;
  font-size: 14px;
  margin-top: 8px;
`;
