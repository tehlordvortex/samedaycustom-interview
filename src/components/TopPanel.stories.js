import React from "react";
import { TopPanel } from "./TopPanel";
import { ColorPalette } from "../utils/colors";
import { ReactComponent as ProductIcon } from "../icons/product.svg";

export default {
  title: "TopPanel",
  component: TopPanel,
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

export const TopPanelStory = () => (
  <TopPanel icon={<ProductIcon />} title="Production House"></TopPanel>
);
