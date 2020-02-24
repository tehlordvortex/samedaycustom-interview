import React from "react";
import styled, { css } from "styled-components";
import { ColorPalette } from "../utils/colors";
import { ReactComponent as DropdownIcon } from "../icons/caret-down.svg";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownItem = styled.button`
  background: transparent;
  border: none;
  text-decoration: none;
  padding: 0.6rem 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${ColorPalette.gray.text};
  cursor: pointer;
  text-align: center;

  ${props =>
    props.divider &&
    css`
      border-bottom: 1px solid ${ColorPalette.gray.divider};
    `}
`;

const DropdownItems = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${ColorPalette.white};
  display: flex;
  flex-direction: column;
  transform: scaleY(0);
  transition: 0.3s ease-out;
  transform-origin: top center;
  border: 1px solid ${ColorPalette.gray.divider};
  padding: 0.5rem 1rem;
  box-shadow: 0px 3px 50px rgba(0, 0, 0, 0.3);

  & > ${DropdownItem} {
    opacity: 0;
    transform: translateY(-0.5rem);
    transition: 0.2s ease-out;
    transition-delay: 0.4s;
  }

  & > ${DropdownItem}:first-of-type {
    transition-delay: 0.3s;
  }

  & > ${DropdownItem}:nth-last-of-type()2 {
    transition-delay: 0.35s;
  }

  ${props =>
    props.open &&
    css`
      transform: scaleY(1);
      & > ${DropdownItem} {
        opacity: 1;
        transform: translateY(0);
      }
    `}
`;

export const Dropdown = ({ trigger, children, open, ...props }) => (
  <DropdownWrapper>
    {trigger}
    <DropdownItems open={open}>{children}</DropdownItems>
  </DropdownWrapper>
);

export { DropdownIcon };
