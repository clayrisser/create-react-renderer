import { ClassDeclaration } from "./ClassDeclaration";
import { render } from "../..";

describe("<ClassDeclaration />", () => {
  it("renders", async () => {
    const code = await render(<ClassDeclaration name="Button" superClassName="Component" />, {
      prettier: false,
    });
    expect(code).toBe("class Button extends Component {}");
  });
});
