import { FunctionExpression } from "./FunctionExpression";
import { render } from "../..";

describe("<FunctionExpression />", () => {
  it("renders", async () => {
    const code = await render(<FunctionExpression />, {
      prettier: false,
    });
    expect(code).toBe("function () {}");
  });
});

describe('<FunctionExpression returnType="any" />', () => {
  it("renders", async () => {
    const code = await render(<FunctionExpression returnType="any" />, {
      prettier: false,
      parserOptions: {
        plugins: ["typescript"],
      },
    });
    expect(code).toBe("function (): any {}");
  });
});
