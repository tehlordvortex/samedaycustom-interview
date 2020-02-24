import React from "react";
import styled, { css } from "styled-components";
import { ColorPalette } from "../utils/colors";

const TabList = styled.nav`
  display: flex;
  align-items: stretch;
  padding-bottom: 1.6rem;
`;

const TabItem = styled.button`
  background: transparent;
  padding: 0.6rem 2.7rem;
  border: none;
  border-right: 1px solid ${ColorPalette.gray.divider};
  position: relative;
  text-align: left;
  font-weight: ${props => (props.active ? "bold" : "500")};
  font-size: 1.5rem;
  line-height: 1.23rem;
  letter-spacing: 0;
  color: ${ColorPalette.tabText.default};
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &:last-of-type {
    border-right: none;
  }

  &::after {
    position: absolute;
    display: block;
    content: "";
    left: 0;
    right: 0;
    top: 3.4rem;
    height: 0.5rem;
    transform: scaleY(0);
    transform-origin: bottom center;
    transition: transform 0.15s ease-out;
    background-color: ${ColorPalette.tabIndicator};
  }

  &:hover::after {
    transform: scaleY(1);
  }

  ${props =>
    props.active &&
    css`
      color: ${ColorPalette.tabText.active};

      &::after {
        transform: scaleY(1);
      }
    `}
`;

const TabItemBadge = styled.span`
  width: 2.1rem;
  height: 2.1rem;
  margin-left: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ColorPalette.badgeBackground.danger};
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.2;
  color: ${ColorPalette.white};

  ${props =>
    props.active &&
    css`
      font-weight: 500;
      color: ${ColorPalette.tabText.activeBadge};
      background-color: transparent;
    `}
`;

export const TabPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TabPanelActions = styled.div`
  display: flex;
  align-items: center;
`;

export const Tabs = ({ items, activeItem, onChangeActiveItem }) => {
  const handleClick = id => {
    if (typeof onChangeActiveItem === "function") onChangeActiveItem(id);
  };
  return (
    <TabList>
      {items.map(item => (
        <TabItem
          key={item.id}
          onClick={() => handleClick(item.id)}
          active={activeItem === item.id}
        >
          {item.label}
          {item.badge && (
            <TabItemBadge active={activeItem === item.id}>
              {item.badge.count}
            </TabItemBadge>
          )}
        </TabItem>
      ))}
    </TabList>
  );
};
