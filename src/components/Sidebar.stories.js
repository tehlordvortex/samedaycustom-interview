import React from "react";
import { Sidebar } from "./Sidebar";
import { MemoryRouter as Router } from "react-router-dom";

export default {
  title: `Sidebar`,
  component: Sidebar
};

export const SidebarStory = () => (
  <Router initialEntries={["/operations"]} initialIndex={0}>
    <Sidebar />
  </Router>
);
