# Phase F

> bind critical element lifecycle methods to reconciler lifecycle methods

## Steps

### Fill out critical lifecycle methods

The critical lifecycle methods involve creating and appending elements

#### createInstance

Already done in [phaseC](../phaseC)

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

#### appendChild

```ts
appendChild(parentInstance: Instance, child: Instance | TextInstance): void {
  parentInstance.appendChild(child);
}
```

#### appendChildToContainer

Already done in [phaseC](../phaseC)

```ts
appendChildToContainer(
  container: Container,
  child: Instance | TextInstance
): void {
  container.appendChild(child);
}
```

#### appendInitialChild

```ts
appendInitialChild(
  parentInstance: Instance,
  child: Instance | TextInstance
): void {
  log.debug('appendInitialChild');
  parentInstance.appendChild(child);
}
```

## Interesting Files

[src/reconciler.ts](src/reconciler.ts)

## Demo

```sh
npm run start
```
