import styled from "styled-components";
import Button from "../../components/ui/Button";
import { PageContainer, CommonContainer, FormHeader, Title, ErrorMessage as CommonErrorMessage } from "../common/CommonStyles";

export { PageContainer, FormHeader, Title };

export const SubmitButton = styled.button`
  width: 100px;
  margin-left: 16px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #3692FF;
  
  &:disabled {
    background-color: #B0B8C1;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const FormSection = styled(CommonContainer)`
  margin-bottom: 24px;
`;

export const ImageSection = styled(CommonContainer)`
  margin-bottom: 30px;
`;

export const ImageLabel = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
`;

export const ErrorMessage = CommonErrorMessage;
