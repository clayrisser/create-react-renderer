import { render } from "../src";

describe("render(<></>)", () => {
  it("drives the reconciler lifecycle and returns the root node", () => {
    expect(render(<></>)).toEqual({ hello: "world" });
  });

  it("returns the same root node on every render", () => {
    expect(render(<></>)).toEqual(render(<></>));
  });
});
