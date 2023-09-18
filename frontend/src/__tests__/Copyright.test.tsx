import { render, screen } from "@testing-library/react";

import Copyright from "../components/atoms/Copyright";

describe(Copyright, () => {
  it("should display copyright text", () => {
    render(<Copyright />);
    const copyrightText = screen.getByText(/Copyright ©/i);
    const blogName = screen.getByText("Draft Blog");
    expect(copyrightText).toBeInTheDocument();
    expect(blogName).toBeInTheDocument();
  });
});
