import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import styled from "styled-components";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ColorPalette } from "./utils/colors";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const ContentArea = styled.div`
  width: calc(100vw - 7.15rem);
  min-height: 100vh;
  margin-left: ${props => props.sidebarWidth};
  background-color: ${ColorPalette.pageBackground};
  transition: 0.3s ease-out;
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.main`
  padding: 2rem 7.65rem 2rem 13rem;
  height: 100%;
`;

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(`7.15rem`);
  return (
    <Router>
      <Wrapper>
        <Sidebar onWidthChange={setSidebarWidth} />
        <ContentArea sidebarWidth={sidebarWidth}>
          <Header />
          <PageContent>
            <Switch></Switch>
          </PageContent>
        </ContentArea>
      </Wrapper>
    </Router>
  );
}

export default App;
