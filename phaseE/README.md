# Phase E

> bind base element lifecycle methods

## Usage

```sh
npm run start
```

## Steps

### Create meta data

Element meta data is specific configuration passed from elements to the BaseElement
that are used to control the BaseElement's behavior

This is not required in all react renderers and some react renders use other
strategies to manipulate the BaseElement

### Create element lifecycle methods

In a future step we will bind the reconciler to the element lifecycle methods

It's best to put these in the BaseElement because most of the logic will remain
the same across all elements

#### appendChild

#### removeChild

#### commitUpdate

## Interesting Files

[src/elements/BaseElement.ts](src/elements/BaseElement.ts)

## Demo

```sh
npm run start
```
