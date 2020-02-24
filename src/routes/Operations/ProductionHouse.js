import React, { useState } from "react";
import { TopPanel } from "../../components/TopPanel";
import { ReactComponent as ProductIcon } from "../../icons/product.svg";
import { Button, ButtonIcon } from "../../components/Button";
import { DropdownIcon } from "../../components/Dropdown";
import styled from "styled-components";
import { Search } from "../../components/Search";
import { TabPanel, Tabs, TabPanelActions } from "../../components/Tabs";
import { Table } from "../../components/Tables";
import { defaultTableColumns, defaultTableData } from "../../utils/table";

const ActionButton = styled(Button)`
  margin-right: 1.25rem;
`;

const ActionButtonIcon = styled(ButtonIcon)`
  margin-left: 2.6rem;
`;

const PageContent = styled.div`
  margin-top: 11.4rem;
`;

const tabs = [
  {
    id: "all",
    label: "All Productions",
    badge: {
      count: 192
    }
  },
  {
    id: "awaiting",
    label: "Awaiting Production",
    badge: {
      count: 19
    }
  },
  {
    id: "completed",
    label: "Completed"
  }
];

export const ProductionHouse = () => {
  const [search, setSearch] = useState("");
  const [activeItem, setActiveItem] = useState("all");
  const tableProps = {
    columns: defaultTableColumns,
    data: defaultTableData
  };
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
      <PageContent>
        <TabPanel>
          <Tabs
            items={tabs}
            activeItem={activeItem}
            onChangeActiveItem={setActiveItem}
          />
          <TabPanelActions>
            <Button secondary>Print worksheet</Button>
            <Button transparent>Mark as Complete</Button>
            <Button disabled centered>
              Save
            </Button>
          </TabPanelActions>
        </TabPanel>
        <Table {...tableProps} />
      </PageContent>
    </React.Fragment>
  );
};
