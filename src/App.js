import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import styled from "styled-components";
import { Header } from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ColorPalette } from "./utils/colors";
import { ProductionHouse } from "./routes/Operations/ProductionHouse";
import { Footer } from "./components/Footer";
import { ProductionItem } from "./routes/Operations/ProductionItem";

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
  transition: margin 0.3s ease-out;
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.main`
  padding: 2rem 7.65rem;
  height: 100%;
  min-height: calc(100vh - 10.23rem);
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
            <Switch>
              <Route
                path="/operations/production-house"
                component={ProductionHouse}
                exact
              />
              <Route
                path="/operations/production-house/item"
                component={ProductionItem}
              />
              <Route
                render={() => <Redirect to="/operations/production-house" />}
              />
            </Switch>
          </PageContent>
          <Footer />
        </ContentArea>
      </Wrapper>
    </Router>
  );
}

export default App;
