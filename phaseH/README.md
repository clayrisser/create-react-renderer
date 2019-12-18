# Phase H

> create text bindings

## Usage

## Steps

### Fill out reconciler text lifecycle methods

Text lifecycle methods are called when placing a string directly as a component
child

```tsx
<Hello>
  <World />
  i will trigger a text lifecycle method
</Hello>
```

The reconciler text lifecycle methods explicitly specifies the element to use for text

#### createTextInstance
```ts
createTextInstance(
  text: string,
  _rootContainerInstance: Container,
  _hostContext: HostContext
): TextInstance {
  const label = new Smart({ code: text }, {}); // explicitly specify the element to use for text
  label.commitMount(); // prob should run at a later point
  return label;
}
```

#### resetTextContent
Because my renderer does not rerender I don't need this.

This probably should be implemented in a sideeffect renderer.

```ts
resetTextContent(_instance: Instance): void {
  // noop
}
```

#### commitTextUpdate
Because my renderer does not rerender I don't need this.

This probably should be implemented in a sideeffect renderer.

```ts
commitTextUpdate(
  _textInstance: TextInstance,
  _oldText: string,
  _newText: string
): void {
  throw new Error('commitTextUpdate should not be called');
}
```

#### shouldSetTextContent
This is used to determine if the fiber is a text fiber

```ts
shouldSetTextContent(_type: Type, props: Props): boolean {
  if (typeof props.children === 'string') return true;
  return false;
}
```

## Demo

```sh
npm run start
```
