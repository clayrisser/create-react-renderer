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
import diagram from '../../assets/react-renderer-binding-diagram.jpg';

const Diagram = props => (
  <Slide transition={['zoom']} bgColor="primary" align="flex-start">
    <br />
    <Heading
      size={4}
      lineHeight={1}
      textColor="secondary"
    >
      React Renderer Bindings Diagram
    </Heading>
    <br />
    <Markdown style={{ textAlign: 'left' }}>
      {`
      <Form>
        <Button />
        <Input />
      </Form>
`}
    </Markdown>
    <br />
    <Image src={diagram} />
  </Slide>
);

export default Diagram;
