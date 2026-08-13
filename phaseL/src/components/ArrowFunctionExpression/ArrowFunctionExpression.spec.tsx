import { ArrowFunctionExpression } from "./ArrowFunctionExpression";
import { render } from "../..";

describe("<ArrowFunctionExpression />", () => {
  it("renders", async () => {
    const code = await render(<ArrowFunctionExpression />, {
      prettier: false,
    });
    expect(code).toBe("() => {}");
  });
});

describe('<ArrowFunctionExpression returnType="any" />', () => {
  it("renders", async () => {
    const code = await render(<ArrowFunctionExpression returnType="any" />, {
      prettier: false,
      parserOptions: {
        plugins: ["typescript"],
      },
    });
    expect(code).toBe("(): any => {}");
  });
});
