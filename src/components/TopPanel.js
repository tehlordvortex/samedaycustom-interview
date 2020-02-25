import React from "react";
import styled from "styled-components";
import { ColorPalette } from "../utils/colors";
import { useHistory } from "react-router-dom";
import { ReactComponent as BackIcon } from "../icons/right-arrow.svg";

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

const BackButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
`;

const BackIconWrapper = styled.span`
  background-color: ${ColorPalette.topPanelIcon};
  color: ${ColorPalette.white};
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  svg {
    width: 1.5rem;
    height: auto;
  }
`;

const BackButtonText = styled.span`
  text-align: left;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.23;
  /* font-family: Nunito, sans-serif; */
  letter-spacing: 0.015rem;
  color: ${ColorPalette.gray.text};
`;

const TopPanelDivider = styled.div`
  height: 2rem;
  width: 1px;
  background-color: ${ColorPalette.black};
  margin: 0 1rem;
`;

export const TopPanel = ({
  icon,
  title,
  children,
  showBackButton = false,
  ...props
}) => {
  const { goBack } = useHistory();
  const handleBack = () => {
    goBack();
  };
  return (
    <TopPanelContainer {...props}>
      <TopPanelSection>
        {showBackButton && (
          <React.Fragment>
            <BackButton onClick={handleBack}>
              <BackIconWrapper>
                <BackIcon />
              </BackIconWrapper>
              <BackButtonText>Back</BackButtonText>
            </BackButton>
            <TopPanelDivider />
          </React.Fragment>
        )}
        <TopPanelIcon>{icon}</TopPanelIcon>
        <TopPanelTitle>{title}</TopPanelTitle>
      </TopPanelSection>
      <TopPanelSection>{children}</TopPanelSection>
    </TopPanelContainer>
  );
};
