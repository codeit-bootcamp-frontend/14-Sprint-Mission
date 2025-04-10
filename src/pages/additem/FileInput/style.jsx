import styled from "styled-components";
import color from "@/utils/color";

export const File = styled.div`
  width: 282px;
  height: 282px;

  position: relative;
  border-radius: 12px;
  background: ${color("secondary200")};
  color: ${color("secondary400")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  font-size: 16px;
  font-weight: 400;
  transition: all 0.1s ease-out;

  @media (max-width: 1200px) {
    width: 168px;
    height: 168px;
  }

  .thumbnail {
    width: 100%;
  }

  .close {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  &:hover {
    filter: brightness(0.95);
  }
`;

export const FileContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1200px) {
    gap: 10px;
  }
`;
