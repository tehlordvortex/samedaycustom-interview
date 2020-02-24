import React from "react";
import { ColorPalette } from "../utils/colors";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
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

export const ButtonStory = () => <Button>Hello World</Button>;

export const SecondaryButton = () => <Button secondary>Hello World!</Button>;

export const TransparentButton = () => <Button transparent>Hello World</Button>;
