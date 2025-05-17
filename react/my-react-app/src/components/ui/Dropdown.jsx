import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";

const DropdownContainer = styled.div`
  position: relative;

  ${(props) =>
    props.isMobile
      ? css`
          width: 42px;
          height: 42px;
        `
      : css`
          width: 130px;
          height: 42px;
        `}
`;

const DropdownButton = styled.button`
  height: 42px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #e5e8ec;
  background-color: #ffffff;
  font-size: 14px;
  color: #4e5968;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;

  &:hover {
    border-color: #c9cdd2;
  }

  &:focus {
    outline: none;
    border-color: #3692ff;
  }

  ${(props) =>
    props.isMobile &&
    css`
      padding: 0;
      width: 42px;
      height: 42px;
      justify-content: center;
      border: none;
      background-color: transparent;
    `}
`;

const ArrowDown = styled.span`
  margin-left: 8px;
  font-size: 10px;
  color: #b0b8c1;
`;

const SortIcon = styled.img`
  width: 42px;
  height: 42px;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e5e8ec;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 0;
  list-style: none;

  ${(props) =>
    props.isMobile &&
    css`
      right: auto;
      min-width: 100px;
    `}
`;
