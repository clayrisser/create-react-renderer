import { FunctionDeclaration, Smart, render, renderAst } from "../src";

describe("render(<Smart />)", () => {
  it("renders code without formatting when prettier is disabled", async () => {
    expect(
      await render(
        <>
          <Smart code="const hello = 'world'" />
          {"const howdy = () => 'texas'"}
        </>,
        { prettier: false },
      ),
    ).toBe(`const hello = 'world';
const howdy = () => 'texas';`);
  });
});

describe("render(<FunctionDeclaration />)", () => {
  it("renders components built on top of the elements", async () => {
    expect(
      await render(<FunctionDeclaration name="add" params={["a", "b"]} />, { prettier: false }),
    ).toBe("function add(a, b) {}");
  });
});

describe("renderAst(<Smart />)", () => {
  it("renders a babel file ast", () => {
    const ast = renderAst(<Smart code="const a = 1" />);
    expect(ast.type).toBe("File");
    expect(ast.program.body).toHaveLength(1);
  });
});
