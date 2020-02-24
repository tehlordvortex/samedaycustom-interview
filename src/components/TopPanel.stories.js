import React from "react";
import { TopPanel } from "./TopPanel";
import { ColorPalette } from "../utils/colors";
import { ReactComponent as ProductIcon } from "../icons/product.svg";
import { MemoryRouter } from "react-router";
import { Search } from "./Search";
import { withState } from "@dump247/storybook-state";

export default {
  title: "TopPanel",
  component: TopPanel,
  decorators: [
    storyFn => (
      <MemoryRouter>
        <div
          style={{
            padding: "2rem",
            backgroundColor: ColorPalette.pageBackground
          }}
        >
          {storyFn()}
        </div>
      </MemoryRouter>
    )
  ]
};

export const TopPanelStory = () => (
  <TopPanel icon={<ProductIcon />} title="Production House"></TopPanel>
);

export const TopPanelWithBackButton = () => (
  <TopPanel
    icon={<ProductIcon />}
    title="Production House"
    showBackButton
  ></TopPanel>
);

export const TopPanelWithActions = withState({ value: "" })(({ store }) => (
  <TopPanel icon={<ProductIcon />} title="Production House">
    <Search
      value={store.state.value}
      onChange={value => store.set({ value })}
    />
  </TopPanel>
));
