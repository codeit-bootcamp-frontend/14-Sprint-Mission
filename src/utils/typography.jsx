import { css } from "styled-components";

const typography = (variant) => (props) => {
  const typographyStyle = props.theme.typography[variant];

  if (!typographyStyle) {
    console.warn(`"${variant}"가 theme에 존재하지 않습니다`);
    return "";
  }

  return css`
    font-size: ${typographyStyle.fontSize};
    font-weight: ${typographyStyle.fontWeight};
    line-height: ${typographyStyle.lineHeight};
    letter-spacing: ${typographyStyle.letterSpacing};
  `;
};

export default typography;
