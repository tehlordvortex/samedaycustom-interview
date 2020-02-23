import React from "react";
import styled from "styled-components";
import { ColorPalette } from "../utils/colors";

const TopPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopPanelSection = styled.div`
  display: flex;
  align-items: center;
`;

const TopPanelIcon = styled.span`
  width: 53px;
  height: auto;
  color: ${ColorPalette.topPanelIcon};
  margin-right: 1.4rem;
`;

const TopPanelTitle = styled.h1`
  text-align: left;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.225;
  letter-spacing: 0;
  color: ${ColorPalette.black};
`;

export const TopPanel = ({ icon, title, children, ...props }) => (
  <TopPanelContainer {...props}>
    <TopPanelSection>
      <TopPanelIcon>{icon}</TopPanelIcon>
      <TopPanelTitle>{title}</TopPanelTitle>
    </TopPanelSection>
    <TopPanelSection>{children}</TopPanelSection>
  </TopPanelContainer>
);
