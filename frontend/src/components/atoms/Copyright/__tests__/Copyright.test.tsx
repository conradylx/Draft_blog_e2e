import { render, screen } from "../../../../utils/testUtils";

import Copyright from "../Copyright";

describe("Copyright Component", () => {
  it("should display copyright text", () => {
    render(<Copyright />);
    const copyrightText = screen.getByText(/Copyright ©/i);
    const blogName = screen.getByText(/draft blog/i);
    expect(copyrightText).toBeInTheDocument();
    expect(blogName).toBeInTheDocument();
  });
});
