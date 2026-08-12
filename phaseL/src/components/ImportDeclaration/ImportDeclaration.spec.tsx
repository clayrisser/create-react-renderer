import { ImportDeclaration } from "./ImportDeclaration";
import { render } from "../..";

describe("<ImportDeclaration />", () => {
  it("imports default export", async () => {
    const code = await render(<ImportDeclaration defaultExport="hello" source="world" />, {
      prettier: false,
    });
    expect(code).toBe("import hello from 'world';");
  });

  it("renders", async () => {
    const code = await render(<ImportDeclaration exports={["one", "two"]} source="world" />, {
      prettier: false,
    });
    expect(code).toBe("import { one, two } from 'world';");
  });
});
