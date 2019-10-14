// Test away
import React from "react";
import Dashboard from "./Dashboard";
import { render } from "@testing-library/react";

describe("<Dashboard />", () => {
  it("Dashboard renders correctly", () => {
    render(<Dashboard />);
  });
  it("Default open unlock", () => {
    const dash = render(<Dashboard />);
    dash.getByText(/open/i);
    dash.getByText(/unlocked/i);
    const lBtn = dash.getByText(/lock gate/i);
    const cBtn = dash.getByText(/close gate/i);
  });
});
