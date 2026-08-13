import { render } from "../src";

describe("render(<></>)", () => {
  it("returns a babel file ast as the root node", () => {
    const node = render(<></>) as any;
    expect(node.type).toBe("File");
    expect(node.program.type).toBe("Program");
    expect(node.program.body).toEqual([]);
  });
});
