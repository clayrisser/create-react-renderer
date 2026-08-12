import { Literal } from "./Literal";
import { render, Options } from "../..";

const options: Options = {
  parserOptions: {
    plugins: ["jsx"],
  },
  prettier: false,
};

describe("<Literal />", () => {
  it("renders array", async () => {
    const code = await render(<Literal>{[1, 2, 3]}</Literal>, options);
    expect(code).toBe("[1, 2, 3]");
  });

  it("renders object", async () => {
    const code = await render(<Literal>{{ hello: "world" }}</Literal>, options);
    expect(code).toBe('{\n  "hello": "world"\n}');
  });

  it("renders string", async () => {
    const code = await render(<Literal>hello</Literal>, options);
    expect(code).toBe("'hello'");
  });

  it("renders number", async () => {
    const code = await render(<Literal>{88}</Literal>, options);
    expect(code).toBe("88");
  });

  it("renders boolean", async () => {
    const code = await render(<Literal>{true}</Literal>, options);
    expect(code).toBe("true");
  });
});
