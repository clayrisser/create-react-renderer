import { Smart, render } from "../src";

describe("render(<Smart />)", () => {
  it("renders elements and text children into the file ast", () => {
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

describe("refs", () => {
  it("exposes the element instance (and its node) through refs", () => {
    // getPublicInstance controls what refs receive, which makes ref
    // debugging possible (see the root README debugging tips)
    let refNode: any;
    render(
      <Smart
        code="const hello = 'world'"
        ref={(ref: any) => {
          refNode = ref?.node;
        }}
      />,
    );
    expect(refNode).toBeDefined();
    expect(refNode.type).toBe("VariableDeclaration");
  });
});
