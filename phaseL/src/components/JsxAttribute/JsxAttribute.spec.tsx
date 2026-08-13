import { JsxElement } from "../JsxElement";
import { render } from "../..";

describe("<JsxAttribute />", () => {
  it("renders", async () => {
    const code = await render(<JsxElement name="Hello" attributes={{ hello: "world" }} />, {
      parserOptions: {
        plugins: ["jsx"],
      },
      prettier: false,
    });
    expect(code).toBe('<Hello hello="world" />');
  });
});
