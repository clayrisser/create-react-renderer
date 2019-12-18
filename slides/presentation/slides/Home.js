import React from 'react';
import {
  BlockQuote,
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

const Home = () => (
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={1} fit lineHeight={1} textColor="secondary">
      Building a Custom
      <br /> React Renderer
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" fit bold>
      github.com/codejamninja/create-react-renderer
    </Text>
  </Slide>
);

export default Home;
