import Home from "../page";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<Home />", () => {
  it("should have the Docs link", () => {
    render(<Home/>);
    expect(screen.getByText(/Docs/)).toBeInTheDocument();
  });

  it("should open a new tab and stay in Home when Docs is clicked", () => {
    render(<Home />);

    fireEvent.click(screen.getByText(/Docs/));
    const href = window.location.href;
    
    expect(href).toBe("http://localhost/");
  });
});
