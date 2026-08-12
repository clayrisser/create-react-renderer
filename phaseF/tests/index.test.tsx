import { File, render } from "../src";

describe("render(<></>)", () => {
  it("returns a babel file ast as the root node", () => {
    expect((render(<></>) as any).type).toBe("File");
  });
});

describe("render(<File />)", () => {
  it("appends the created element node to the container", () => {
    // the File element does not point its body at the program statements yet
    // (that meta data arrives in phaseG), so the child node lands on the
    // default body.body path of the root node
    const node = render(<File />) as any;
    expect(node.body.body.type).toBe("File");
  });

  it("appends nested children to their parent element first", () => {
    const node = render(
      <File>
        <File />
      </File>,
    ) as any;
    expect(node.body.body.type).toBe("File");
    expect(node.body.body.body.body.type).toBe("File");
  });
});
