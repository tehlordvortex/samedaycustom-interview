import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { ColorPalette } from "../utils/colors";
import { ExpandingSearch } from "./ExpandingSearch";
import { ReactComponent as MailIcon } from "../icons/mail.svg";
import { ReactComponent as ShoppingCartIcon } from "../icons/shopping-cart.svg";
import { ReactComponent as ListIcon } from "../icons/list.svg";
import { NavLink } from "react-router-dom";
import { Button, ButtonIcon } from "./Button";
import { DropdownIcon } from "./Dropdown";

const HeaderWrapper = styled.header`
  background-color: ${ColorPalette.white};
  padding: 2.1rem 7.65rem 1.75rem 7.65rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 50px #1877ff1c;
`;

const HeaderBrandImage = styled.img`
  width: 13.85rem;
  height: auto;
`;

const HeaderDivider = styled.div`
  height: 3.25rem;
  width: 1px;
  background-color: ${ColorPalette.gray.divider};
  margin: 0 2rem;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderItem = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${ColorPalette.gray.text};
  text-decoration: none;
`;

const HeaderItemIcon = styled.span`
  width: 2.1rem;
  height: auto;
  position: relative;
`;

const HeaderItemBadge = styled.span`
  position: absolute;
  top: -0.65rem;
  right: -0.65rem;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: ${ColorPalette.badgeBackground.default};
  color: ${ColorPalette.white};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.21;
  letter-spacing: 0;
`;

const HeaderItemText = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.2;
  letter-spacing: -0.0125rem;
  margin-left: 1.4rem;
`;

const HeaderAccountItem = styled(Button)`
  display: flex;
  flex-direction: column;
  padding: 0;
  border: none;
  background: transparent;
  color: ${ColorPalette.pureBlack};
  min-width: unset;
`;
const HeaderAccountImage = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border: 2px solid #196bd8;
  margin-bottom: 0.4rem;
  border-radius: 50%;
`;

const HeaderAccountText = styled.div`
  display: flex;
  align-items: center;
`;

const items = [
  {
    to: "/messages",
    label: "Messages",
    icon: <MailIcon />,
    badge: {
      count: 1
    }
  },
  {
    to: "/store",
    label: "Market Place",
    icon: <ShoppingCartIcon />,
    badge: {
      count: 1
    }
  },
  {
    to: "/notifications",
    label: "Notifications",
    icon: <ListIcon />,
    badge: {
      count: 1
    }
  }
];

export const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <HeaderWrapper>
      <NavLink to="/">
        <HeaderBrandImage src={logo} alt="Sameday Custom" />
      </NavLink>
      <HeaderContent>
        <HeaderDivider />
        <ExpandingSearch value={search} onChange={setSearch} />
        <HeaderDivider />
        {items.map(item => (
          <React.Fragment key={item.label}>
            <HeaderItem to={item.to}>
              <HeaderItemIcon>
                {item.badge && (
                  <HeaderItemBadge>{item.badge.count}</HeaderItemBadge>
                )}
                {item.icon}
              </HeaderItemIcon>
              <HeaderItemText>{item.label}</HeaderItemText>
            </HeaderItem>
            <HeaderDivider />
          </React.Fragment>
        ))}
        <HeaderAccountItem>
          <HeaderAccountImage src="https://randomuser.me/api/portraits/men/97.jpg" />
          <HeaderAccountText>
            Me
            <ButtonIcon style={{ color: "#0B6ED8" }}>
              <DropdownIcon />
            </ButtonIcon>
          </HeaderAccountText>
        </HeaderAccountItem>
      </HeaderContent>
    </HeaderWrapper>
  );
};
