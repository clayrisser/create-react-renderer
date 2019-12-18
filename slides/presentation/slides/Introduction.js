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

const Introduction = () => (
    <Slide transition={['zoom']} bgColor="primary">
      <Heading size={1} fit  lineHeight={1} textColor="secondary">
        Jam Risser
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" fit bold>
        Software Architect at Silicon Hills LLC
      </Text>
    </Slide>
);

export default Introduction;
