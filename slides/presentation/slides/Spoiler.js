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
      I thought this was
      <br /> a NodeJS meetup?
    </Heading>
  </Slide>
);

export default Home;
