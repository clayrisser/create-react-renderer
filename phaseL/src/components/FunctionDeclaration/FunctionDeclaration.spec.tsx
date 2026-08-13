import { FunctionDeclaration } from "./FunctionDeclaration";
import { render } from "../..";

describe("<FunctionDeclaration />", () => {
  it("renders", async () => {
    const code = await render(<FunctionDeclaration name="hello" />, {
      prettier: false,
    });
    expect(code).toBe("function hello() {}");
  });
});

describe('<FunctionDeclaration returnType="string" />', () => {
  it("renders", async () => {
    const code = await render(<FunctionDeclaration name="hello" returnType="string" />, {
      prettier: false,
      parserOptions: {
        plugins: ["typescript"],
      },
    });
    expect(code).toBe("function hello(): string {}");
  });
});
