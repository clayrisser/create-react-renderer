import { Code } from "./Code";
import { render } from "../..";

describe("<Code />", () => {
  it("renders", async () => {
    const code = await render(<Code>const hello = 'world'</Code>, {
      prettier: false,
    });
    expect(code).toBe("const hello = 'world';");
  });
});
