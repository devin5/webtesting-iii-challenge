import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";

describe("<Display />", () => {
  it("renders", () => {
    render(<Display locked={false} closed={false} />);
    render(<Display locked={true} closed={true} />);
  });
  it("open and unlocked", () => {
    const display = render(<Display locked={false} closed={false} />);
    display.getByText(/open/i);
    display.getByText(/unlocked/i);
  });
  it("closed and locked", () => {
    const display = render(<Display locked={true} closed={true} />);
    display.getByText(/closed/i);
    display.getByText(/locked/i);
  });
  it("turns red", () => {
    const display = render(<Display locked={false} closed={false} />);
    const unlock = display.getByText(/unlocked/i);
    const open = display.getByText(/open/i);
    expect(unlock.className).toMatch(/green-led/);
    expect(open.className).toMatch(/green-led/);
  });
  it("turns green", () => {
    const display = render(<Display locked={true} closed={true} />);
    const locked = display.getByText(/locked/i);
    const closed = display.getByText(/closed/i);
    expect(locked.className).toMatch(/red-led/);
    expect(closed.className).toMatch(/red-led/);
  });
});
