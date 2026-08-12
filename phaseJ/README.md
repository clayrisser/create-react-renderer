# Phase J

> add default props

## Steps

### Create function to calculate default props

- The function should set props to default props when a prop is not passed in
- The function should verify the prop types are correct
- The logic should live in the `BaseElement`

```ts
getProps(props: Props): Props {
  props = { ...props };
  const { defaultProps, propTypes } = this.constructor as IElement;
  Object.keys(defaultProps).forEach((key) => {
    const defaultProp = defaultProps[key];
    if (typeof props[key] === "undefined" || props[key] === null) {
      props[key] = defaultProp;
    }
  });
  PropTypes.checkPropTypes(propTypes, props, "prop", this.constructor.name);
  return props;
}
```

Because elements are plain classes the renderer owns, element default props keep working the
same way they always have. Two react 19 gotchas apply to everything around them though:

- react 19 removed `defaultProps` for **function components**, so components use default
  parameter values instead (see [example/index.tsx](example/index.tsx))
- `PropTypes.node` does not recognize react 19 elements (their `$$typeof` changed), so the
  element prop types use `PropTypes.any` for children

## Interesting Files

[src/elements/BaseElement.ts](src/elements/BaseElement.ts)

## Demo

```sh
pnpm start
```
