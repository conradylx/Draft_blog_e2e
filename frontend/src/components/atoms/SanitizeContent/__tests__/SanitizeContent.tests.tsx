import SanitizeContent from "../SanitizeContent";
import { render, screen } from '../../../../utils/testUtils'

describe("Copyright Component", () => {
  it("should display copyright text", () => {
    render(<SanitizeContent content={'<h1>Test</h1>'}/>);
    const text = screen.getByText(/test/i);
    expect(text).toBeInTheDocument();
  });

  it("should not display html tags", () => {
    const content = '<h1>Html tags displayed?</h1>';
    render(<SanitizeContent content={content}/>)
    const text = screen.queryByText(/<h1>/i);
    expect(text).not.toBeInTheDocument();
  })

  it("should add a width attribute to img tags", () => {
    const content = '<p>Some text <img src="image.jpg"></p>';
    render(<SanitizeContent content={content} />);

    const imgTag = screen.getByAltText("image");
    expect(imgTag).toHaveAttribute("width", "250px");
  });
});
