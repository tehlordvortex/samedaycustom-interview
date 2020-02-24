import React from "react";
import styled, { css } from "styled-components";
import { ColorPalette } from "../utils/colors";

export const Button = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  min-width: 11rem;
  padding: 1.2rem 2.3rem;
  background-color: ${ColorPalette.buttonBackground.default};
  color: ${ColorPalette.white};
  border: 1px solid ${ColorPalette.buttonBackground.default};
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.2;
  letter-spacing: 0;
  color: ${ColorPalette.buttonText.default};
  border-radius: 0.5rem;
  cursor: pointer;

  ${props =>
    props.secondary &&
    css`
      border-color: ${ColorPalette.buttonBorder.secondary};
      background-color: ${ColorPalette.white};
      padding: 1rem 1.4rem;
      color: ${ColorPalette.buttonText.secondary};
      border-radius: 0.4rem;
    `}

  ${props =>
    props.transparent &&
    css`
      border: none;
      background-color: ${ColorPalette.buttonBackground.transparent};
      color: ${ColorPalette.buttonText.transparent};
      font-size: 1.5rem;
      line-height: 1.23;
    `}

  ${props =>
    (props.centered || props.secondary) &&
    css`
      text-align: center;
      justify-content: center;
    `}

  &:disabled {
    background-color: ${ColorPalette.gray.disabled};
    border-color: ${ColorPalette.gray.disabled};
    ${props =>
      props.secondary &&
      css`
        color: ${ColorPalette.gray.disabled};
        background-color: ${ColorPalette.buttonBackground.secondary};
      `}
    ${props =>
      props.transparent &&
      css`
        color: ${ColorPalette.gray.disabled};
        background-color: ${ColorPalette.buttonBackground.transparent};
        border-color: ${ColorPalette.buttonBackground.transparent};
      `}
    cursor: not-allowed;
  }
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  svg {
    width: 1.4rem;
    height: auto;
  }
`;
