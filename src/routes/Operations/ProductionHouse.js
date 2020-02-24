import React, { useState } from "react";
import { TopPanel } from "../../components/TopPanel";
import { ReactComponent as ProductIcon } from "../../icons/product.svg";
import { Button, ButtonIcon } from "../../components/Button";
import { DropdownIcon } from "../../components/Dropdown";
import styled from "styled-components";
import { Search } from "../../components/Search";

const ActionButton = styled(Button)`
  margin-right: 1.25rem;
`;

const ActionButtonIcon = styled(ButtonIcon)`
  margin-left: 2.6rem;
`;

const PageContent = styled.div`
  margin-top: 11.4rem;
`;

export const ProductionHouse = () => {
  const [search, setSearch] = useState("");
  return (
    <React.Fragment>
      <TopPanel icon={<ProductIcon />} title="Production House">
        <ActionButton type="button">
          Categories
          <ActionButtonIcon>
            <DropdownIcon />
          </ActionButtonIcon>
        </ActionButton>
        <Search value={search} onChange={setSearch} />
      </TopPanel>
      <PageContent></PageContent>
    </React.Fragment>
  );
};
