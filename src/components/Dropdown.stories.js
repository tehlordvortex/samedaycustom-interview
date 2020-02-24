import React from "react";
import { ColorPalette } from "../utils/colors";
import { Dropdown, DropdownItem, DropdownIcon } from "./Dropdown";
import { withState } from "@dump247/storybook-state";
import { Button, ButtonIcon } from "./Button";

export default {
  title: "Dropdown",
  component: Dropdown,
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

export const DropdownStory = withState({ open: false })(({ store }) => (
  <Dropdown
    trigger={
      <Button
        type="button"
        onClick={() => store.set({ open: !store.state.open })}
      >
        Categories
        <ButtonIcon right style={{ marginLeft: "2.6rem" }}>
          <DropdownIcon />
        </ButtonIcon>
      </Button>
    }
    open={store.state.open}
  >
    <DropdownItem
      onClick={() => store.set({ open: !store.state.open })}
      divider
    >
      Worksheet
    </DropdownItem>
    <DropdownItem onClick={() => store.set({ open: !store.state.open })}>
      Invoice
    </DropdownItem>
  </Dropdown>
));
