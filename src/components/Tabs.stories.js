import React from "react";
import { ColorPalette } from "../utils/colors";
import { withState } from "@dump247/storybook-state";
import { Tabs, TabPanel, TabPanelActions } from "./Tabs";
import { Button } from "./Button";

export default {
  title: "Tabs",
  component: Tabs,
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

export const TabsStory = withState({ activeItem: "all" })(({ store }) => (
  <Tabs
    items={tabs}
    activeItem={store.state.activeItem}
    onChangeActiveItem={activeItem => store.set({ activeItem })}
  />
));

export const TabPanelStory = withState({ activeItem: "all" })(({ store }) => (
  <TabPanel>
    <Tabs
      items={tabs}
      activeItem={store.state.activeItem}
      onChangeActiveItem={activeItem => store.set({ activeItem })}
    />
    <TabPanelActions>
      <Button secondary>Print worksheet</Button>
      <Button transparent>Mark as Complete</Button>
      <Button disabled centered>
        Save
      </Button>
    </TabPanelActions>
  </TabPanel>
));
