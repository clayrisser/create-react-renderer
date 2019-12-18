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
import createTheme from 'spectacle/lib/themes/default';
import Definition from './slides/Definition';
import Home from './slides/Home';
import Introduction from './slides/Introduction';
import Phase from './slides/Phase';
import Spoiler from './slides/Spoiler';
import Tips from './slides/Tips';
import Diagram from './slides/Diagram';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  bangingHeadOnWall: require('../assets/baning-head-on-wall.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#000',
    secondary: '#FFF',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Hurmit Nerd Font Mono',
    secondary: 'Hurmit Nerd Font Mono'
  }
);
const textColor = '#BBB';
theme.print.colors.primary = textColor;
theme.print.colors.secondary = textColor;
theme.print.colors.tertiary = textColor;
theme.print.colors.quaternary = textColor;
theme.screen.components.text.color = textColor;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Home />
        <Introduction />
        <Spoiler />
        <Diagram />
        <Definition title="Virtual DOM">
          a tree structure that represents the current rendered state
        </Definition>
        <Definition title="Reconciliation">
          the process of determining which parts of the virtual dom need to be
          changed by diffing the current virtual dom tree with the new virtual
          dom tree
        </Definition>
        <Definition title="Reconciler">
          the bindings to the react reconciliation lifecycle methods
        </Definition>
        <Definition title="Fiber">
          a virtual stack frame of work for the react reconciler
        </Definition>
        <Definition title="Node (not nodejs)">
          the interface of the renderer that the react renderer is binding to
        </Definition>
        <Definition title="Root Node">
          the node used in the top of the react virtual dom tree
        </Definition>
        <Definition title="Element">
          a react component that is directly bound to the reconciliation
          lifecycle methods
        </Definition>
        <Definition title="Base Element">
          the element all other elements inherit from
        </Definition>
        <Definition title="Component">
          an encapsulation of other components and/or elements
        </Definition>
        <Definition title="Root Element">
          the element used in the top of the react virtual dom tree
        </Definition>
        <Phase title="Phase A">setup the reconciler</Phase>
        <Phase title="Phase B">create some custom elements</Phase>
        <Phase title="Phase C">bind some custom elements to reconciler</Phase>
        <Phase title="Phase D">setup node</Phase>
        <Phase title="Phase E">bind base element lifecycle methods</Phase>
        <Phase title="Phase F">
          bind critical element lifecycle methods to reconciler lifecycle
          methods
        </Phase>
        <Phase title="Phase G">create base elements</Phase>
        <Phase title="Phase H">create text bindings</Phase>
        <Phase title="Phase I">finish reconciler bindings</Phase>
        <Phase title="Phase J">add default props</Phase>
        <Phase title="Phase K">add options</Phase>
        <Phase title="Phase L">create components</Phase>
        <Tips title="Abstraction is your friend">
          Build your renderer in many layers of abstraction.
        </Tips>
        <Tips title="Few elements, lots of components">
          Elements are hard to build and hard to debug. It's best to have a few
          broad and general elements and then build lots of specific components
          on top of the broad elements.
        </Tips>
        <Tips title="Start small, increment in small steps" />
        <Tips title="Use typescript" image={images.bangingHeadOnWall}>
          This can catch lots of unnecessary bugs. TypeScript is head
          protection.
        </Tips>
        <Tips title="Test test test">Write lots of unit tests.</Tips>
        <Tips title="Build a solid foundation" />
        <Introduction />
      </Deck>
    );
  }
}
