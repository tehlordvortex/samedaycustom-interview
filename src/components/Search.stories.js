import React from "react";
import { ColorPalette } from "../utils/colors";
import { Search } from "./Search";
import { withState } from "@dump247/storybook-state";

export default {
  title: "Search",
  component: Search,
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

export const SearchStory = withState({ value: "" })(({ store }) => (
  <Search value={store.state.value} onChange={value => store.set({ value })} />
));
