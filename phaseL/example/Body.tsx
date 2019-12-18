import React, { FC } from 'react';
import { JsxElement } from '../src';

export interface BodyProps {
  hello?: string;
}

const Body: FC<BodyProps> = (props: BodyProps) => (
  <JsxElement name="Hello">{props}</JsxElement>
);
Body.defaultProps = {
  hello: 'world'
};

export default Body;
