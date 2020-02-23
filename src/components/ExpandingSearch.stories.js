import React from "react";
import { ExpandingSearch } from "./ExpandingSearch";
import { ColorPalette } from "../utils/colors";
import { withState } from "@dump247/storybook-state";

export default {
  title: "Expanding Search",
  component: ExpandingSearch,
  decorators: [
    storyFn => (
      <div style={{ padding: 32, backgroundColor: ColorPalette.white }}>
        {storyFn()}
      </div>
    )
  ]
};

export const ExpandingSearchStory = withState({ value: "" })(({ store }) => (
  <ExpandingSearch
    value={store.value}
    onChange={value => store.set({ value })}
  />
));
