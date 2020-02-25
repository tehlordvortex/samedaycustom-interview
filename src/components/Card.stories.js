import React from "react";
import { ColorPalette } from "../utils/colors";
import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
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

export const CardStory = () => <Card style={{ height: "400px" }} />;

export const SoftCardStory = () => <Card style={{ height: "400px" }} soft />;
