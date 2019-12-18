import React from 'react';
import {
  BlockQuote,
  Markdown,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

const Definition = props => (
  <Slide transition={['zoom']} bgColor="primary" align="flex-start">
    <br />
    <Heading
      size={4}
      lineHeight={1}
      textColor="secondary"
      style={{ textAlign: 'left' }}
    >
      {props.title}
    </Heading>
    <br />
    <Markdown style={{ textAlign: 'left' }}>{props.children}</Markdown>
  </Slide>
);

export default Definition;
