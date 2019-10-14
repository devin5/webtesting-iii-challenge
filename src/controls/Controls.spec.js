// Test away!
// Test away!
import React from "react";
import Controls from "./Controls";
import { render } from "@testing-library/react";

describe("<Controls />", () => {
  it("Controls renders correctly", () => {
    render(<Controls />);
  });
  it("open and unlocked", () => {
    const controls = render(<Controls closed={false} locked={false} />);
    const closeBtn = controls.getByText(/close gate/i);
    const lockBtn = controls.getByText(/lock gate/i);
    expect(closeBtn.disabled).toBeFalsy();
    expect(lockBtn.disabled).toBeTruthy();
  });
});
