import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;

  form {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-item {
    width: 100%;
  }
`;
