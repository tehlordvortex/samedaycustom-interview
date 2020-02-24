import React from "react";
import { ColorPalette } from "../utils/colors";
import { Table } from "./Tables";
import { defaultTableColumns, defaultTableData } from "../utils/table";

export default {
  title: "Table",
  component: Table,
  decorators: [
    storyFn => (
      <div
        style={{
          padding: "2rem",
          backgroundColor: ColorPalette.pageBackground
        }}
      >
        {storyFn()}
      </div>
    )
  ]
};

const tableProps = {
  columns: defaultTableColumns,
  data: defaultTableData
};

export const TableStory = () => <Table {...tableProps} />;
