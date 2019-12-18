import React from 'react';
import {
  BlockQuote,
  Cite,
  Layout,
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
import siliconHills from '../../assets/silicon_hills.svg';
import react from '../../assets/react.png';
import nodejs from '../../assets/nodejs.svg';

const Introduction = () => (
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={1} fit lineHeight={1} textColor="secondary">
      Jam Risser
    </Heading>
    <br />
    <Text margin="10px 0 0" textColor="tertiary" fit bold>
      Software Architect at Silicon Hills LLC
    </Text>
    <br />
    <Layout>
      <Image height={180} src={nodejs} />
      <Image height={180} src={siliconHills} />
      <Image height={200} src={react} />
    </Layout>
    <br />
    <p>
      @codejamninja
      <br />
      github.com/codejamninja
    </p>
  </Slide>
);

export default Introduction;
