import React from "react";
import styled from "styled-components";

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #e53935;
  padding: 20px;
  margin-top: 100px;
`;

function LoadingErrorHandler({ loading, error, children }) {
  if (loading) return <LoadingSpinner>Loading...</LoadingSpinner>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  return children;
}

export default LoadingErrorHandler;
