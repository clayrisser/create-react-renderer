# Phase B

> create some custom elements

## Steps

### Create element constants

### Create intrinsic element types

### Create elements

Elements should extend the BaseElement

### Create root element from custom element

The root element should be created from a custom element that logically
sits at the top of the tree

For example, the react dom renderer root element might use the `div` element

### Create element factory

## Interesting Files

[src/index.ts](src/index.ts)

[src/render.ts](src/render.ts)

[src/@types/reactAst.d.ts](src/@types/reactAst.d.ts)

[src/elements/Hello.ts](src/elements/Hello.ts)

[src/elements/Howdy.ts](src/elements/Howdy.ts)

[src/elements/Wrapper.ts](src/elements/Wrapper.ts)

[src/elements/index.ts](src/elements/index.ts)

[src/createElement.ts](src/createElement.ts)

## Demo

```sh
npm run start
```
