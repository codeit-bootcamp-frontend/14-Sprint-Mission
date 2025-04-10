import styled from "styled-components";
import color from "../../utils/color";

export const Tag = styled.div`
  display: flex;
  height: 36px;
  overflow: hidden;
  padding: 6px 12px 6px 16px;
  border-radius: 26px;
  background: ${color("secondary200")};
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: -10px;
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color("secondary800")};
  font-size: 20px;
  font-weight: 700;
`;

export const InputContainer = styled.form`
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 30px auto 200px;
`;

export const InputText = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  padding: 16px 24px;
  border-radius: 12px;
  background: ${color("secondary200")};
  border: none;
  box-sizing: border-box;
`;

export const Textarea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  padding: 16px 24px;
  border-radius: 12px;
  background: ${color("secondary200")};
  border: none;
  box-sizing: border-box;
  resize: none;
`;

export const Label = styled.label`
  color: ${color("secondary800")};
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .warning {
    color: ${color("errorRed")};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
`;
