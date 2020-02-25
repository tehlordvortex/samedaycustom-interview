import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
import { ButtonIcon } from "./Button";
import { DropdownIcon } from "./Dropdown";

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
      margin: 0;
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
  border: none;
  background-color: transparent;

  &:not(:last-of-type) {
    margin-bottom: ${props => (props.expanded ? 0 : "2.4rem")};
  }

  &.active {
    background-color: ${props =>
      props.expanded
        ? ColorPalette.sidebarActiveItem.expanded
        : ColorPalette.sidebarActiveItem.default} !important;
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

  ${props =>
    props.child &&
    css`
      padding-left: 8.2rem;
      font-weight: normal;
      font-size: 1.1rem;
      height: 4rem;
      letter-spacing: 0;
    `}
`;

const SidebarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
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

const SidebarDropdownWrapper = styled.div`
  max-height: ${props =>
    props.open ? "30rem" : props.expanded ? "4.9rem" : "3.9rem"};
  width: ${props => (props.expanded ? "unset" : "3.9rem")};
  overflow: hidden;
  transition: 0.3s ease-out;
  margin-bottom: ${props => (props.expanded ? 0 : "2.4rem")};
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
    children: [
      {
        label: "Orders",
        to: "/operations/orders"
      },
      {
        label: "Production House",
        to: "/operations/production-house"
      },
      {
        label: "Bids",
        to: "/operations/bids"
      },
      {
        label: "Promotions / Discount",
        to: "/operations/promotions"
      },
      {
        label: "Outsourcing",
        to: "/operations/outsourcing"
      }
    ],
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

const SidebarDropdownLink = ({ link, expanded }) => {
  const [open, setOpen] = useState(false);
  const trigger = () => setOpen(!open);
  const { pathname } = useLocation();
  const active = pathname.startsWith(link.to);
  return (
    <SidebarDropdownWrapper open={open} expanded={expanded}>
      <SidebarLink
        as="button"
        expanded={expanded}
        onClick={trigger}
        style={{ marginBottom: 0 }}
        className={active && !open ? "active" : undefined}
      >
        <SidebarIcon expanded={expanded}>
          {link.badge && !expanded && (
            <SidebarBadge icon>{link.badge.count}</SidebarBadge>
          )}
          {link.icon}
        </SidebarIcon>
        {expanded && link.label}
        {link.badge && expanded && (
          <SidebarBadge>{link.badge.count}</SidebarBadge>
        )}
        <ButtonIcon>
          <DropdownIcon />
        </ButtonIcon>
      </SidebarLink>
      {link.children.map(link => (
        <SidebarLink expanded={expanded} child to={link.to}>
          {link.label}
        </SidebarLink>
      ))}
    </SidebarDropdownWrapper>
  );
};

export const Sidebar = ({ onWidthChange = null, ...props }) => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
    if (typeof onWidthChange === "function")
      onWidthChange(!open ? `25.25rem` : `7.15rem`);
  };
  return (
    <SidebarWrapper expanded={open} {...props}>
      <SidebarTrigger onClick={toggleSidebar} expanded={open}>
        <HamburgerIcon />
      </SidebarTrigger>
      <SidebarLinks expanded={open}>
        {links.map(link =>
          link.children ? (
            <SidebarDropdownLink link={link} expanded={open} />
          ) : (
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
          )
        )}
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
