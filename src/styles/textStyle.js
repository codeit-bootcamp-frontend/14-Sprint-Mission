import { css } from "styled-components";

export const textStyle = (size = 16, weight = 400) =>
({ theme }) => {
    const typography = theme?.Typography?.[size] || {
        fontSize: "16px",
        lineHeight: "normal",
        letterSpacing: "0",
    };

    return css`
      font-weight: ${weight};
      font-size: ${typography.fontSize};
      line-height: ${typography.lineHeight};
    `;
};
