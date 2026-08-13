import { ReturnStatement } from "./ReturnStatement";
import { render, Literal } from "../..";

describe("<ReturnStatement />", () => {
  it("renders", async () => {
    const code = await render(<ReturnStatement>r</ReturnStatement>, {
      prettier: false,
    });
    expect(code).toBe("return 'r';");
  });

  it("renders with react children", async () => {
    const code = await render(
      <ReturnStatement>
        <Literal>{[]}</Literal>
      </ReturnStatement>,
      { prettier: false },
    );
    expect(code).toBe("return [];");
  });
});
