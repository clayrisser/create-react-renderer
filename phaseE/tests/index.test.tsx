import File from "../src/elements/File";
import { render } from "../src";

describe("BaseElement lifecycle methods", () => {
  it("appendChild pushes the child node into the parent body", () => {
    const parent = new File();
    const child = new File();
    parent.appendChild(child);
    expect(parent.children).toContain(child);
  });

  it("removeChild removes a child appended to an array body", () => {
    const parent = new File();
    // point the parent body at the program statements array so appended
    // child nodes land in (and are removed from) a real array
    parent.meta.bodyPath = "program.body";
    const child = new File();
    parent.appendChild(child);
    expect((parent.node as any).program.body).toHaveLength(1);
    parent.removeChild(child);
    expect(parent.children).not.toContain(child);
    expect((parent.node as any).program.body).toHaveLength(0);
  });

  it("commitUpdate merges new props into the element", () => {
    const element = new File({ hello: "world" });
    element.commitUpdate({ howdy: "texas" });
    expect(element.props).toEqual({ hello: "world", howdy: "texas" });
  });
});

describe("render(<></>)", () => {
  it("still returns a babel file ast as the root node", () => {
    expect((render(<></>) as any).type).toBe("File");
  });
});
