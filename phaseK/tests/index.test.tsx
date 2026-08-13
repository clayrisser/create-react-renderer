import { Smart, render, renderAst } from "../src";

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

  it("formats rendered code with prettier by default", async () => {
    expect(await render(<Smart code="const a={b:1}" />)).toBe("const a = {\n  b: 1,\n};\n");
  });

  it("respects prettier options", async () => {
    expect(
      await render(<Smart code={'const hello = "world"'} />, {
        prettier: { singleQuote: true },
      }),
    ).toBe("const hello = 'world';\n");
  });

  it("parses language plugins from parserOptions", async () => {
    expect(
      await render(<Smart code="const hello: string = 'world'" />, {
        parserOptions: { plugins: ["typescript"] },
        prettier: false,
      }),
    ).toBe("const hello: string = 'world';");
  });
});

describe("renderAst(<Smart />)", () => {
  it("renders a babel file ast", () => {
    const ast = renderAst(<Smart code="const a = 1" />);
    expect(ast.type).toBe("File");
    expect(ast.program.body).toHaveLength(1);
    expect(ast.program.body[0].type).toBe("VariableDeclaration");
  });

  it("renders into an existing ast", () => {
    const existing = renderAst(<Smart code="const first = 1" />);
    const ast = renderAst(<Smart code="const second = 2" />, {}, existing);
    expect(ast.program.body.map((node) => node.type)).toEqual([
      "VariableDeclaration",
      "VariableDeclaration",
    ]);
  });
});
