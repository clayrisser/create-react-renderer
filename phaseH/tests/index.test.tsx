import { Smart, render } from "../src";

describe("render(text)", () => {
  it("renders a text child through the text lifecycle methods", () => {
    const node = render(<>{"const howdy = () => 'texas'"}</>) as any;
    expect(node.program.body).toHaveLength(1);
    expect(node.program.body[0].type).toBe("VariableDeclaration");
    expect(node.program.body[0].declarations[0].id.name).toBe("howdy");
  });

  it("renders elements and text children side by side", () => {
    const node = render(
      <>
        <Smart code="const hello = 'world'" />
        {"const howdy = () => 'texas'"}
      </>,
    ) as any;
    expect(node.program.body.map((statement: any) => statement.type)).toEqual([
      "VariableDeclaration",
      "VariableDeclaration",
    ]);
  });
});
