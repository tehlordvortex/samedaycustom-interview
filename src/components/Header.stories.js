import React from "react";
import { Header } from "./Header";
import { MemoryRouter as Router } from "react-router-dom";

export default {
  title: "Header",
  component: Header,
  decorators: [storyFn => <Router>{storyFn()}</Router>]
};

export const HeaderStory = () => <Header />;
