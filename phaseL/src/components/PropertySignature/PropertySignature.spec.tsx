import { PropertySignature } from "./PropertySignature";
import { render } from "../..";

describe("<PropertySignature />", () => {
  it("renders", async () => {
    const code = await render(<PropertySignature name="hello" />, {
      parserOptions: { plugins: ["classProperties", "typescript"] },
      prettier: false,
    });
    expect(code).toBe("hello: any;");
  });
});

describe("<PropertySignature type />", () => {
  it("renders", async () => {
    const code = await render(<PropertySignature name="hello" type="string" />, {
      parserOptions: { plugins: ["classProperties", "typescript"] },
      prettier: false,
    });
    expect(code).toBe("hello: string;");
  });
});
