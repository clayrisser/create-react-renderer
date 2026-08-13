import { InterfaceDeclaration } from "./InterfaceDeclaration";
import { render } from "../..";

describe("<InterfaceDeclaration />", () => {
  it("renders", async () => {
    const code = await render(<InterfaceDeclaration name="Button" extends="Component" />, {
      parserOptions: {
        plugins: ["typescript"],
      },
      prettier: false,
    });
    expect(code).toBe("interface Button extends Component {}");
  });
});
