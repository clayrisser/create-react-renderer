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
  Object.keys(defaultProps).forEach(key => {
    const defaultProp = defaultProps[key];
    if (typeof props[key] === 'undefined' || props[key] === null) {
      props[key] = defaultProp;
    }
  });
  PropTypes.checkPropTypes(propTypes, props, 'prop', this.constructor.name);
  return props;
}
```

## Interesting Files

[src/elements/BaseElement.ts](src/elements/BaseElement.ts)

## Demo

```sh
npm run start
```
