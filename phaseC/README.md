# Phase C

> bind some custom elements to reconciler

## Steps

### Fill out critical reconciler lifecycle methods

#### createInstance

```ts
createInstance(
  type: Type,
  props: Props,
  _rootContainerInstance: Container,
  _hostContext: HostContext
): Instance {
  return createElement(type, props);
}
```

#### appendChildToContainer

```ts
appendChildToContainer(
  container: Container,
  child: Instance | TextInstance
): void {
  container.appendChild(child);
}
```

## Interesting Files

[src/reconciler.ts](src/reconciler.ts)

[src/elements/Wrapper.ts](src/elements/Wrapper.ts)

## Demo

```sh
npm run start
```
