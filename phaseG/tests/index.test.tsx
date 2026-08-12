import SmartElement from "../src/elements/Smart";
import { Smart, render } from "../src";

describe("render(<Smart />)", () => {
  it("renders the code into the program body of the file ast", () => {
    const node = render(<Smart code="const hello = 'world'" />) as any;
    expect(node.type).toBe("File");
    expect(node.program.body).toHaveLength(1);
    expect(node.program.body[0].type).toBe("VariableDeclaration");
    expect(node.program.body[0].declarations[0].id.name).toBe("hello");
  });

  it("renders sibling elements as sibling statements", () => {
    const node = render(
      <>
        <Smart code="const hello = 'world'" />
        <Smart code="const howdy = 'texas'" />
      </>,
    ) as any;
    expect(node.program.body).toHaveLength(2);
  });
});

describe("Smart element", () => {
  it("parses code with babel template", () => {
    const smart = new SmartElement({ code: "const a = 1" });
    expect((smart.node as any).type).toBe("VariableDeclaration");
  });
});
