import React, { useState } from "react";
import { TopPanel } from "../../components/TopPanel";
import { ReactComponent as ProductIcon } from "../../icons/product.svg";
import styled, { css } from "styled-components";
import { ColorPalette } from "../../utils/colors";
import { Card } from "../../components/Card";
import { ReactComponent as ShoppingCartIcon } from "../../icons/shopping-cart.svg";
import {
  Dropdown,
  DropdownItem,
  DropdownIcon
} from "../../components/Dropdown";
import { ButtonIcon, Button } from "../../components/Button";
import { TabPanel, Tabs, TabPanelActions } from "../../components/Tabs";
import { Table } from "../../components/Tables";

const OrderID = styled.h5`
  margin-top: 3.05rem;
  margin-bottom: 1.75rem;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.23;
  color: ${ColorPalette.black};
`;

const Breadcrumbs = styled.h6`
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.35;
  letter-spacing: 0;
  color: ${ColorPalette.topPanelIcon};
  margin-bottom: 2.3rem;
`;

const SummmaryCard = styled(Card)`
  padding: 4.1rem 2.75rem;
  display: flex;
  margin-bottom: 3.75rem;
`;

const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  flex: 1;

  padding-left: 3rem;

  &:first-of-type {
    padding-left: 0;
  }

  &::after {
    position: absolute;
    content: "";
    display: block;
    right: 0;
    height: 3.5rem;
    width: 1px;
    background-color: ${ColorPalette.gray.divider};
  }

  &:last-of-type::after {
    display: none;
  }
`;

const SummaryItemTitle = styled.h5`
  color: ${ColorPalette.deepBlue};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.23;
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const SummaryItemTitleIcon = styled.span`
  margin-right: 1rem;
  svg {
    width: 1.5rem;
    height: auto;
  }
`;

const SummaryItemText = styled.p`
  color: ${ColorPalette.topPanelIcon};
  font-weight: ${props => (props.bold ? "bold" : "500")};
  font-size: 1.5rem;
  line-height: 1.23rem;

  ${props =>
    props.small &&
    css`
      font-size: 1.25rem;
      line-height: 1.2;
    `}
`;

const GrayText = styled.span`
  color: ${ColorPalette.gray.veryLight};
  margin-right: 1rem;
`;

const GreenText = styled.span`
  color: ${ColorPalette.green};
`;

const DropdownTrigger = styled.div`
  font-size: 1.25rem;
  line-height: 1.2;
  color: ${ColorPalette.green};
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: underline;
`;

const Actions = styled(TabPanelActions)`
  & > * {
    margin-right: 2.1rem;
  }
`;

const DeliveryMethod = () => {
  const [method, setMethod] = useState("Pickup Order");
  const [open, setOpen] = useState(false);
  const trigger = () => setOpen(true);
  const close = () => setOpen(false);
  const chooseRush = () => {
    setMethod("Rush Shipping");
    close();
  };
  const choosePickup = () => setMethod("Pickup Order");
  return (
    <SummaryItem>
      <SummaryItemTitle>Delivery Method</SummaryItemTitle>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SummaryItemText small bold>
          {method}
        </SummaryItemText>
        <Dropdown
          open={open}
          trigger={
            <DropdownTrigger role="button" onClick={trigger}>
              Can Edit
              <ButtonIcon style={{ color: ColorPalette.black }}>
                <DropdownIcon />
              </ButtonIcon>
            </DropdownTrigger>
          }
        >
          <DropdownItem onClick={chooseRush}>Rush Shipping</DropdownItem>
          <DropdownItem onClick={choosePickup}>Pickup Order</DropdownItem>
        </Dropdown>
      </div>
    </SummaryItem>
  );
};

const tabs = [
  {
    id: "details",
    label: "Product Details"
  },
  {
    id: "notes",
    label: "History / Notes"
  }
];

const ProductCard = () => {
  const [activeItem, setActiveItem] = useState("details");
  const [mode, setMode] = useState("worksheet");
  const [open, setOpen] = useState(false);
  const trigger = () => setOpen(true);
  const close = () => setOpen(false);
  const switchTo = mode => () => {
    setMode(mode);
    close();
  };
  return (
    <Card soft style={{ paddingTop: "1.9rem", paddingRight: "2rem" }}>
      <TabPanel
        style={{ borderBottom: `1px solid ${ColorPalette.gray.divider}` }}
      >
        <Tabs
          items={tabs}
          activeItem={activeItem}
          onChangeActiveItem={setActiveItem}
        />
        <Actions>
          <Dropdown
            open={open}
            trigger={
              <Button
                transparent
                style={{ color: ColorPalette.green }}
                onClick={trigger}
              >
                {mode === "worksheet" ? "Worksheet" : "Invoice"}
                <ButtonIcon style={{ color: ColorPalette.black }}>
                  <DropdownIcon />
                </ButtonIcon>
              </Button>
            }
          >
            <DropdownItem onClick={switchTo("invoice")}>Invoice</DropdownItem>
            <DropdownItem onClick={switchTo("worksheet")}>
              Worksheet
            </DropdownItem>
          </Dropdown>
          <Button compact centered disabled={mode === "worksheet"}>
            Print
          </Button>
          <Button secondary centered>
            Add Note
          </Button>
          <Button compact>
            Complete Production
            <ButtonIcon>
              <DropdownIcon />
            </ButtonIcon>
          </Button>
        </Actions>
      </TabPanel>
    </Card>
  );
};

export const ProductionItem = () => {
  return (
    <React.Fragment>
      <TopPanel
        icon={<ProductIcon />}
        title="Production House"
        showBackButton
      />
      <OrderID>Order: #ADJ2322434D</OrderID>
      <Breadcrumbs>Account Setup > Delivery Method</Breadcrumbs>
      <SummmaryCard>
        <SummaryItem>
          <SummaryItemTitle>
            <SummaryItemTitleIcon>
              <ShoppingCartIcon />
            </SummaryItemTitleIcon>
            Order Value
          </SummaryItemTitle>
          <SummaryItemText>$40,000</SummaryItemText>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemTitle>Order Date</SummaryItemTitle>
          <SummaryItemText>25 - June - 2017</SummaryItemText>
        </SummaryItem>
        <DeliveryMethod />
        <SummaryItem>
          <SummaryItemTitle>Rush Option</SummaryItemTitle>
          <SummaryItemText small>Rush</SummaryItemText>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemTitle>Status</SummaryItemTitle>
          <SummaryItemText small>Pending</SummaryItemText>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemTitle>Requested By</SummaryItemTitle>
          <SummaryItemText small style={{ marginBottom: "0.9rem" }}>
            25 - June - 2017
          </SummaryItemText>
          <SummaryItemText small>
            <GrayText>Time Left</GrayText>
            <GreenText>10:00:00</GreenText>
          </SummaryItemText>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemTitle>Shipped or Picked Date</SummaryItemTitle>
          <SummaryItemText small>25 - June - 2017</SummaryItemText>
        </SummaryItem>
      </SummmaryCard>
      <ProductCard />
    </React.Fragment>
  );
};
