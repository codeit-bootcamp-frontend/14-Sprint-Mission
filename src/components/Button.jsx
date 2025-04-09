import styled from "styled-components";
import color from "../utils/color";

const ButtonContainer = styled.button`
  justify-content: center;
  align-items: center;
  border: none;
  background: ${color("primary100")};
  color: ${color("secondary200")};
  font: 500 20px/32px "Pretendard";
  cursor: pointer;
  transition: all 0.05s ease-out;
  text-align: center;
  text-decoration: none;
  border-radius: ${(props) => (props.round ? "40px" : "8px")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  display: block;
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: ${(props) =>
    props.round ? (props.height > "48px" ? "20px" : "18px") : "16px"};

  .link {
    text-decoration: none;
    color: white;
  }

  &:hover {
    background: #1967d6;
  }

  &:active {
    background: ${color("primary300")};
  }

  &[disabled] {
    background: ${color("secondary400")};
    cursor: not-allowed;
  }

  ${(props) =>
    props.outline &&
    `
      background: ${color("secondary10")};
      color: ${color("primary100")};
      border: 1px solid ${color("primary100")};
    `}
`;

function Button({
  children,
  width = "100%",
  height = "42px",
  round = false,
  outline = false,
  ...rest
}) {
  return (
    <ButtonContainer
      {...rest}
      width={width}
      height={height}
      round={round}
      outline={outline}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
