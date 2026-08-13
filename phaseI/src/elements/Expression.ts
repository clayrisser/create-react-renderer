import PropTypes from "prop-types";
import template, { TemplateBuilderOptions, PublicReplacements } from "@babel/template";
import BaseElement from "./BaseElement";
import { Props } from "../types";

export default class Expression extends BaseElement {
  static propTypes = {
    bodyPath: PropTypes.string,
    // PropTypes.node does not recognize react 19 elements, so use any
    children: PropTypes.any,
    code: PropTypes.string.isRequired,
    options: PropTypes.object,
    path: PropTypes.string,
    replacements: PropTypes.object,
  };

  static defaultProps = {
    bodyPath: "",
    children: null,
    options: {},
    path: "",
    replacements: {},
  };

  constructor(props: Props = {}) {
    super(
      template.expression(
        props.code,
        props.options as TemplateBuilderOptions,
      )(props.replacements as PublicReplacements),
      props,
    );
  }
}
