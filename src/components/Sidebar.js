import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ColorPalette } from "../utils/colors";
import styled, { css } from "styled-components";
import { ReactComponent as HamburgerIcon } from "../icons/hamburger.svg";
import { ReactComponent as DashboardIcon } from "../icons/dashboard.svg";
import { ReactComponent as ChatIcon } from "../icons/chat.svg";
import { ReactComponent as TimeLeftIcon } from "../icons/time-left.svg";
import { ReactComponent as ShoppingCartIcon } from "../icons/shopping-cart.svg";
import { ReactComponent as SupplyIcon } from "../icons/supply.svg";
import { ReactComponent as FileIcon } from "../icons/file.svg";
import { ReactComponent as SettingsIcon } from "../icons/settings.svg";

const SidebarBadge = styled.span`
  width: 1.3rem;
  height: 1.3rem;
  background-color: ${ColorPalette.badgeBackground.danger};
  color: ${ColorPalette.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
  border-radius: 50%;
  text-align: center;
  font-size: 0.95rem;
  line-height: 1.21;
  letter-spacing: 0;

  ${props =>
    props.icon &&
    css`
      position: absolute;
      top: 0;
      right: 0;
    `}
`;

const SidebarLink = styled(NavLink)`
  cursor: pointer;
  width: 3.9rem;
  height: 3.9rem;
  padding-left: 1rem;
  color: ${ColorPalette.white};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 50%;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.23;
  letter-spacing: 1.5px;
  text-decoration: none;
  /* overflow: hidden; */
  transition: margin 0.2s ease-out;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: ${props => (props.expanded ? 0 : "2.4rem")};
  }

  &.active {
    background-color: ${props =>
      props.expanded
        ? ColorPalette.sidebarActiveItem.expanded
        : ColorPalette.sidebarActiveItem.default};
    color: ${props =>
      props.expanded ? ColorPalette.sidebarText : ColorPalette.white};
  }

  ${props =>
    props.expanded &&
    css`
      border-radius: 0;
      padding: 0 2.6rem;
      width: unset;
      height: 4.9rem;
      justify-content: flex-start;
    `}
`;

const SidebarWrapper = styled.nav`
  height: 100vh;
  width: ${props => (props.expanded ? `25.25rem` : `7.15rem`)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: ${props => (props.expanded ? `flex-start` : `center`)}; */
  padding: 2.65rem 0;
  background-color: ${props =>
    props.expanded
      ? ColorPalette.sidebarBackground.expanded
      : ColorPalette.sidebarBackground.default};
  overflow-x: hidden;
  transition: 0.3s ease-out;
`;

const SidebarLinks = styled.li`
  list-style: none;
  /* margin: auto 0 ${props => (props.bottom ? 0 : "auto")}; */
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.expanded ? "stretch" : "center")};
`;

const SidebarTrigger = styled.button`
  cursor: pointer;
  background: transparent;
  color: ${ColorPalette.white};
  width: 1.75rem;
  height: 1.2rem;
  border: none;
  margin-left: 2.55rem;
`;

const SidebarIcon = styled.span`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 3.8rem;
  flex: 0 0 1.8rem;
  box-sizing: content-box;
  position: relatove;
`;

const links = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    to: "/dashboard"
  },
  {
    label: "Operations",
    to: "/operations",
    icon: <TimeLeftIcon />,
    badge: {
      count: 1
    }
  },
  {
    label: "Records",
    to: "/records",
    icon: <FileIcon />,
    badge: {
      count: 1
    }
  },
  {
    label: "Supply Store",
    to: "/store",
    icon: <ShoppingCartIcon />
  },
  {
    label: "Market Place",
    to: "/market",
    icon: <SupplyIcon />
  },
  {
    label: "Forums",
    to: "/forums",
    icon: <ChatIcon />,
    badge: {
      count: 1
    }
  }
];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(open => !open);
  };
  return (
    <SidebarWrapper expanded={open}>
      <SidebarTrigger onClick={toggleSidebar} expanded={open}>
        <HamburgerIcon />
      </SidebarTrigger>
      <SidebarLinks expanded={open}>
        {links.map(link => (
          <SidebarLink expanded={open} to={link.to}>
            <SidebarIcon expanded={open}>
              {link.badge && !open && (
                <SidebarBadge icon>{link.badge.count}</SidebarBadge>
              )}
              {link.icon}
            </SidebarIcon>
            {open && link.label}
            {link.badge && open && (
              <SidebarBadge>{link.badge.count}</SidebarBadge>
            )}
          </SidebarLink>
        ))}
      </SidebarLinks>
      <SidebarLinks expanded={open} bottom>
        <SidebarLink expanded={open} to={"/settings"}>
          <SidebarIcon expanded={open}>
            <SettingsIcon />
          </SidebarIcon>
          {open && `Settings`}
        </SidebarLink>
      </SidebarLinks>
    </SidebarWrapper>
  );
};
