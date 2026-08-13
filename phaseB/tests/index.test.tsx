import createElement from "../src/createElement";
import Hello from "../src/elements/Hello";
import Howdy from "../src/elements/Howdy";
import { Hello as HelloTag, Howdy as HowdyTag, render } from "../src";

describe("createElement(type, props)", () => {
  it("constructs the element registered for the type", () => {
    expect(createElement("Hello", {})).toBeInstanceOf(Hello);
    expect(createElement("Howdy", {})).toBeInstanceOf(Howdy);
  });

  it("throws for unknown element types", () => {
    expect(() => createElement("Nope", {})).toThrow("unknown element of type 'Nope'");
  });
});

describe("elements", () => {
  it("carry their node data", () => {
    expect(new Hello().node).toEqual({ hello: "world" });
    expect(new Howdy().node).toEqual({ howdy: "texas" });
  });
});

describe("render(<Hello />)", () => {
  it("returns the untouched root node because the reconciler is not bound yet", () => {
    expect(
      render(
        <>
          <HelloTag />
          <HowdyTag />
        </>,
      ),
    ).toEqual({ cool: "beans" });
  });
});
