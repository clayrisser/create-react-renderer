import { Hello, Howdy, render } from "../src";

describe("render(<Hello />)", () => {
  it("appends element nodes to the root node", () => {
    expect(
      render(
        <>
          <Hello />
          <Howdy />
        </>,
      ),
    ).toEqual({
      greetings: [{ hello: "world" }, { howdy: "texas" }],
    });
  });

  it("appends a node for every rendered element", () => {
    const result = render(
      <>
        <Hello />
        <Howdy />
        <Hello />
        <Hello />
      </>,
    );
    expect(result.greetings).toHaveLength(4);
  });
});
