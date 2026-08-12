import { ClassDeclaration } from "../ClassDeclaration";
import { ExportDefaultDeclaration } from "./ExportDefaultDeclaration";
import { render } from "../..";

describe("<ExportDefaultDeclaration />", () => {
  it("renders", async () => {
    const code = await render(
      <ExportDefaultDeclaration>
        <ClassDeclaration name="C" />
      </ExportDefaultDeclaration>,
      { prettier: false },
    );
    expect(code).toBe("export default class C {}");
  });
});
