import { Component, ReactNode } from "react";
import { Ast, Smart } from "../..";

export interface TypeParamProps {
  children: string;
  params?: ReactNode[];
}

export class TypeParam extends Component<TypeParamProps> {
  renderTypeParams() {
    return (this.props.params ?? []).map((param: ReactNode) => {
      if (typeof param === "string") {
        return <TypeParam key={param}>{param}</TypeParam>;
      }
      return param;
    });
  }

  render() {
    const code = `const c: T<${this.props.children}> = null`;
    return (
      <Smart
        code={code}
        parentBodyPath="typeParameters.params"
        scopePath="declarations.0.id.typeAnnotation.typeAnnotation.typeParameters.params.0"
      >
        {this.props.params?.length ? (
          // modern @babel/parser rejects empty type arguments like T<>, so
          // inject an empty type parameter container for the params to land in
          <Ast
            ast={{ type: "TSTypeParameterInstantiation", params: [] }}
            parentBodyPath="typeParameters"
          />
        ) : null}
        {this.renderTypeParams()}
      </Smart>
    );
  }
}
