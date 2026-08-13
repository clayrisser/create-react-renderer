import { Component, ReactNode } from "react";
import { Ast, Smart, TypeParam } from "../..";

export interface TypeAnnotationProps {
  children: string;
  params?: ReactNode[];
  returnType?: boolean;
}

export class TypeAnnotation extends Component<TypeAnnotationProps> {
  renderTypeParams() {
    return (this.props.params ?? []).map((param: ReactNode) => {
      if (typeof param === "string") {
        return <TypeParam key={param}>{param}</TypeParam>;
      }
      return param;
    });
  }

  render() {
    const code = `const c: ${this.props.children} = null`;
    return (
      <Smart
        code={code}
        parentBodyPath={this.props.returnType ? "returnType" : "typeAnnotation"}
        scopePath="declarations.0.id.typeAnnotation"
      >
        <Smart
          code={code}
          scopePath="declarations.0.id.typeAnnotation.typeAnnotation"
          parentBodyPath="typeAnnotation"
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
      </Smart>
    );
  }
}
