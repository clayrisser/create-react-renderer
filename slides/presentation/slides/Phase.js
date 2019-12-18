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

const Phase = props => (
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={3} lineHeight={1} textColor="secondary">
      {props.title}
    </Heading>
    <br />
    <Markdown>{props.children}</Markdown>
  </Slide>
);

export default Phase;
