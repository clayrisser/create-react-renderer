# Phase I

> finish reconciler bindings

## Steps

### Fill out the rest of the reconciler lifecycle methods

#### getPublicInstance

```ts
getPublicInstance(instance: Instance | TextInstance): PublicInstance {
  return instance;
}
```

#### prepareForCommit

```ts
prepareForCommit(_containerInfo: Container): void {
  // noop
}
```

#### prepareUpdate

```ts
prepareUpdate(
  _instance: Instance,
  _type: Type,
  _oldProps: Props,
  _newProps: Props,
  _rootContainerInstance: Container,
  _hostContext: HostContext
): null | UpdatePayload {
  return true;
}
```

#### resetAfterCommit

```ts
resetAfterCommit(_containerInfo: Container): void {
  // noop
}
```

#### finalizeInitialChildren

```ts
finalizeInitialChildren(
  _parentInstance: Instance,
  _type: Type,
  _props: Props,
  _rootContainerInstance: Container,
  _hostContext: HostContext
): boolean {
  return true;
}
```

#### commitUpdate

```ts
commitUpdate(
  instance: Instance,
  _updatePayload: any,
  _type: string,
  _oldProps: Props,
  newProps: Props
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

#### shouldDeprioritizeSubtree

```ts
shouldDeprioritizeSubtree(): boolean {
  return true;
}
```

#### scheduleDeferredCallback

```ts
scheduleDeferredCallback(
  callback?: () => any,
  _options?: { timeout: number }
): any {
  if (callback) {
    throw new Error(
      'Scheduling a callback twice is excessive. Instead, keep track of ' +
        'whether the callback has already been scheduled.'
    );
  }
}
```

#### cancelDeferredCallback

```ts
cancelDeferredCallback(_callbackID: any): void {
  // noop
}
```

#### setTimeout

```ts
setTimeout(
  handler: (...args: any[]) => void,
  timeout: number
): TimeoutHandle | NoTimeout {
  return setTimeout(handler, timeout);
}
```

#### clearTimeout

```ts
clearTimeout(handle: TimeoutHandle | NoTimeout): void {
  return clearTimeout(handle);
}
```

## Interesting Files

[src/reconciler.ts](src/reconciler.ts)

## Demo

```sh
npm run start
```
