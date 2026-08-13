import SmartElement from "../src/elements/Smart";
import { Smart, render } from "../src";

describe("element default props", () => {
  it("fills missing props with the element defaultProps", () => {
    const smart = new SmartElement({ code: "const a = 1" });
    expect(smart.props.bodyPath).toBe("body.body");
    expect(smart.props.scopePath).toBe("");
    expect(smart.props.replacements).toEqual({});
  });

  it("keeps props that are explicitly passed in", () => {
    const smart = new SmartElement({ code: "const a = 1", scopePath: "declarations.0" });
    expect(smart.props.scopePath).toBe("declarations.0");
  });
});

interface AppProps {
  hello?: string;
  howdy?: string;
}

// react 19 removed defaultProps for function components, so components use
// default parameter values instead
function App({
  hello = "const hello = 'austin'",
  howdy = "const howdy = () => 'austin'",
}: AppProps) {
  return (
    <>
      {hello}
      {howdy}
    </>
  );
}

describe("render(<App />)", () => {
  it("renders default parameter values when props are missing", () => {
    const node = render(<App />) as any;
    expect(node.program.body[0].declarations[0].id.name).toBe("hello");
    expect(node.program.body[1].declarations[0].id.name).toBe("howdy");
    expect(node.program.body[0].declarations[0].init.value).toBe("austin");
  });

  it("renders passed props over the defaults", () => {
    const node = render(<App hello="const hello = 'world'" />) as any;
    expect(node.program.body[0].declarations[0].init.value).toBe("world");
    expect(node.program.body[1].declarations[0].id.name).toBe("howdy");
  });
});

describe("render(<Smart />)", () => {
  it("still renders elements", () => {
    const node = render(<Smart code="const hello = 'world'" />) as any;
    expect(node.program.body).toHaveLength(1);
  });
});
