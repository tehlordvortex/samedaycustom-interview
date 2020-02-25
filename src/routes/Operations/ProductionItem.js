import React from "react";
import { TopPanel } from "../../components/TopPanel";
import { ReactComponent as ProductIcon } from "../../icons/product.svg";
import styled from "styled-components";
import { ColorPalette } from "../../utils/colors";

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
    </React.Fragment>
  );
};
