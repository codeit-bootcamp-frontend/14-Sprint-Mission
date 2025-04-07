import styled from "styled-components";

const ButtonContainer = styled.button`
  padding: 12px 23px;
  border-radius: 8px;
  background: var(--Primary-100, #3692ff);
  justify-content: center;
  align-items: center;
  border: none;
  color: var(--Cool-Gray-100, #f3f4f6);
  font-size: 16px;
  font-weight: 500;
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

function Button({ children }) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

export default Button;
