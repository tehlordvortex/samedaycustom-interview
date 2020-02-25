import React from "react";
import {
  TableCellImage,
  TableCellText,
  TableCellBadge,
  BoldTableText,
  CenteredTableCell
} from "../components/Tables";
import shirtImage from "../images/pink_shirt.png";
import { ReactComponent as ClockIcon } from "../icons/clock.svg";
import { ColorPalette } from "./colors";
import styled from "styled-components";
import moment from "moment";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const formatDeliveryDate = date => moment(date).format("DD - MMMM - YYYY");
const formatETA = date => moment(date).fromNow(true);

export const defaultTableColumns = [
  {
    Header: "Order #",
    accessor: "orderNumber"
  },
  {
    Header: "Item #",
    accessor: "itemNumber"
  },
  {
    Header: "Details",
    accessor: "details",
    width: 200,
    Cell: ({ cell: { value } }) => (
      <React.Fragment>
        <TableCellImage src={value.image} />
        <TableCellText>{value.description}</TableCellText>
      </React.Fragment>
    )
  },
  {
    Header: "Colors",
    accessor: "colors",
    Cell: ({ cell: { value } }) => (
      <TableCellBadge color={value.color}>{value.label}</TableCellBadge>
    ),
    width: 65
  },
  {
    Header: "Qty",
    accessor: "quantity",
    Cell: ({ cell: { value } }) => (
      <BoldTableText>
        {value.size} X {value.amount}
      </BoldTableText>
    ),
    width: 65
  },
  {
    Header: "Print Type",
    accessor: "printType",
    Cell: ({ cell: { value } }) => <BoldTableText>{value}</BoldTableText>
  },
  {
    Header: "Delivery Method",
    accessor: "deliveryMethod",
    Cell: ({ cell: { value } }) => (
      <BoldTableText
        style={{
          color: value === "pickup" ? ColorPalette.blue : ColorPalette.red
        }}
      >
        {value === "rush" && (
          <ClockIcon
            width="1.65rem"
            height="1.8rem"
            style={{ marginRight: "1.2rem" }}
          />
        )}
        {value === "pickup" ? "Pickup Order" : "Rush Shipping"}
      </BoldTableText>
    )
  },
  {
    Header: "Delivery Time",
    accessor: "deliveryTime",
    Cell: ({ cell: { value } }) => (
      <Column>
        <span style={{ marginBottom: "0.9rem" }}>
          {formatDeliveryDate(value)}
        </span>
        <span>
          <span
            style={{
              color: ColorPalette.gray.veryLight,
              marginRight: "1.35rem"
            }}
          >
            Time Left
          </span>
          <BoldTableText style={{ color: ColorPalette.green }}>
            {formatETA(value)}
          </BoldTableText>
        </span>
      </Column>
    )
  },
  {
    Header: "Production Status",
    accessor: "status",
    Cell: ({ cell: { value } }) => (
      <CenteredTableCell>
        <BoldTableText style={{ color: ColorPalette.green }}>
          {value.type}
        </BoldTableText>
        <BoldTableText style={{ color: ColorPalette.green }}>
          {value.completed} of {value.total}
        </BoldTableText>
      </CenteredTableCell>
    )
  }
];

export const productPageTableColumns = [
  ...defaultTableColumns.filter(column =>
    ["Item #", "Details", "Print Type", "Colors", "Qty"].includes(column.Header)
  ),
  {
    Header: "Paid",
    accessor: "paid",
    Cell: ({ cell: { value } }) => (value ? "Paid in full" : "Unpaid")
  }
];

export const defaultTableData = [
  {
    orderNumber: "#232JODJSDKN2",
    itemNumber: "#232JODJSDKN2",
    details: {
      image: shirtImage,
      description:
        "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)"
    },
    colors: {
      label: "Royal",
      color: ColorPalette.badgeBackground.light
    },
    quantity: {
      size: "L",
      amount: 4
    },
    printType: "DTG Print",
    deliveryMethod: "rush",
    deliveryTime: new Date(1587764819 * 1000),
    status: {
      type: "Running",
      completed: 2,
      total: 5
    },
    paid: true
  },
  {
    orderNumber: "#232JODJSDKN2",
    itemNumber: "#232JODJSDKN2",
    details: {
      image: shirtImage,
      description:
        "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)"
    },
    colors: {
      label: "Royal",
      color: ColorPalette.badgeBackground.light
    },
    quantity: {
      size: "L",
      amount: 4
    },
    printType: "DTG Print",
    deliveryMethod: "pickup",
    deliveryTime: new Date(1587764819 * 1000),
    status: {
      type: "Running",
      completed: 2,
      total: 5
    },
    paid: true
  }
];

export const productPageTableData = [defaultTableData[0]];
