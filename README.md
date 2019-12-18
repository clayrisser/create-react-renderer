# create-react-renderer

> learn to build a custom react renderer

Please ★ this repo if you found it useful ★ ★ ★

DISCLAIMER: These definitions are not official. They are based on my own understanding of react renderers.
They are not intended for understanding how to use react, but rather are for providing the context of
understanding how a react renderer works.

## Built by Silicon Hills LLC

[![index](https://user-images.githubusercontent.com/6234038/71054254-f284ad80-2116-11ea-9013-d68306726854.jpeg)](https://nuevesolutions.com)

Silicon Hills offers premium Node and React develpoment and support services. Get in touch at [nuevesolutions.com](https://nuevesolutions.com).

## Definitions

### Reconciler
The **reconciler** is the bindings to the react reconciliation lifecycle methods. This is NOT the react
lifecycle hooks even though it is closley related to the react lifecycle hooks.

### Virtual DOM
A tree structure that represents the current rendered state. Every branch and leaf on the tree is either a
component or element.

### Node
A **node** is the interface of the renderer that the react renderer is binding to. For example
`window.document` would be the **node** used in a react renderer that binds to the dom.

### Root Node
The **root node** is the node used in the top of the react virtual dom tree.

### Element
You can think of an **element** as a react component that is directly bound to the reconciliation lifecycle methods.
This is NOT the same thing as a react component, although it can be used like a react component.
Because it is directly bound to the react reconciliation lifecycle methods it is more powerful, but also more complex.
**Elements** form the foundation that all react components are built on top of.

`<div>`, `<button>` and `<h1>` are all examples of elements in the react dom renderer.

### Base Element
The **base element** is the element all other elements inherit from.

### Component
An encapsulation of components and/or elements.

### Root Element
The **root element** is the element used in the top of the react virtual dom tree. This element is
not created with JSX but is initialized during the initial render.

### Root
This represents the root of the react virutal dom tree.

## Phases

### [Phase A](/phaseA)
setup the reconciler

### [Phase B](/phaseB)
create some custom elements

### [Phase C](/phaseC)
bind some custom elements to reconciler

### [Phase D](/phaseD)
setup node

### [Phase E](/phaseE)
bind base element lifecycle methods

### [Phase F](/phaseF)
bind critical element lifecycle methods to reconciler lifecycle methods

### [Phase G](/phaseG)
create base elements

### [Phase H](/phaseH)
create text bindings

### [Phase I](/phaseI)
finish reconciler bindings

### [Phase J](/phaseJ)
add default props

### [Phase K](/phaseK)
add options

### [Phase L](/phaseL)
create components
