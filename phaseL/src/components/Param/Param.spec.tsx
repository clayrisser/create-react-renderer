import { FunctionDeclaration } from "../FunctionDeclaration";
import { Param } from "./Param";
import { render } from "../..";

describe("<Param />", () => {
  it("renders", async () => {
    const code = await render(
      <FunctionDeclaration name="f">
        <Param>p</Param>
      </FunctionDeclaration>,
      { prettier: false },
    );
    expect(code).toBe("function f(p) {}");
  });
});
