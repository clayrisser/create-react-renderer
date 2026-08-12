# Phase I

> finish reconciler bindings

## Steps

### Fill out the rest of the reconciler lifecycle methods

Older react-reconciler versions had `prepareUpdate`, `shouldDeprioritizeSubtree`,
`scheduleDeferredCallback`, `cancelDeferredCallback`, `setTimeout` and `clearTimeout`.
All of those were removed. `commitUpdate` receives the old and new props directly, the
deferred callbacks were replaced by the update priority methods (implemented since
[phaseA](../phaseA)) and the timeouts were renamed to `scheduleTimeout` and `cancelTimeout`.

#### getPublicInstance

The public instance is what refs receive, which is what makes ref debugging possible

```ts
getPublicInstance(instance: Instance | TextInstance): PublicInstance {
  return instance;
}
```

#### prepareForCommit

```ts
prepareForCommit(_containerInfo: Container): Record<string, any> | null {
  return null;
}
```

#### resetAfterCommit

```ts
resetAfterCommit(_containerInfo: Container): void {
  // noop
}
```

#### finalizeInitialChildren

Returning true tells react to call `commitMount` for the instance once the tree committed

```ts
finalizeInitialChildren(
  _parentInstance: Instance,
  _type: Type,
  _props: Props,
  _rootContainerInstance: Container,
  _hostContext: HostContext,
): boolean {
  return true;
}
```

#### commitUpdate

`prepareUpdate` no longer exists, so instead of an update payload the old and new props are
passed straight to `commitUpdate`

```ts
commitUpdate(
  instance: Instance,
  _type: Type,
  _oldProps: Props,
  newProps: Props,
  _internalHandle: any,
): void {
  return instance.commitUpdate(newProps);
}
```

#### commitMount

```ts
commitMount(instance: Instance, _type: Type, _newProps: Props): void {
  instance.commitMount();
}
```

#### removeChild

```ts
removeChild(parentInstance: Instance, child: Instance | TextInstance): void {
  parentInstance.removeChild(child);
}
```

#### scheduleTimeout

Renamed from `setTimeout` in older reconciler versions

```ts
scheduleTimeout(handler: (...args: any[]) => void, timeout: number): TimeoutHandle | NoTimeout {
  return setTimeout(handler, timeout);
}
```

#### cancelTimeout

Renamed from `clearTimeout` in older reconciler versions

```ts
cancelTimeout(handle: TimeoutHandle | NoTimeout): void {
  return clearTimeout(handle);
}
```

### Warn about the bindings this renderer skips

Some bindings don't make sense for a renderer that never rerenders or reorders children, so
they warn during development

```ts
insertBefore(
  _parentInstance: Instance,
  _child: Instance | TextInstance,
  _beforeChild: Instance | TextInstance,
): void {
  if (dev) log.warn("'insertBefore' not supported");
}
```

## Interesting Files

[src/reconciler.ts](src/reconciler.ts)

[src/dev.ts](src/dev.ts)

## Demo

```sh
pnpm start
```
