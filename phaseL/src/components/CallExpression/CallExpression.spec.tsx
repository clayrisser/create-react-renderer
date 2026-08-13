import { CallExpression } from "./CallExpression";
import { render } from "../..";

describe("<CallExpression />", () => {
  it("renders", async () => {
    const code = await render(<CallExpression name="hello" />, { prettier: false });
    expect(code).toBe("hello()");
  });
});
