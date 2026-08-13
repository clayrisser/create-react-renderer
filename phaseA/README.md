# Phase A

> setup the reconciler

## Steps

### Create reconciler

For now we will just log each of the lifecycle methods

React-reconciler 0.33 requires a bit of plumbing to exist before anything renders, so the
host config also ships real implementations for the update priority methods
(`setCurrentUpdatePriority`, `getCurrentUpdatePriority`, `resolveUpdatePriority`), microtask
scheduling (`scheduleMicrotask`) and the transition context (`HostTransitionContext`,
`NotPendingTransition`). Everything else just logs.

### Create base element

### Create render function

1. initialize root element
2. initialize root fiber `reconciler.createContainer` (react 19 only exposes concurrent
   roots, so pass `ConcurrentRoot` and the error callbacks)
3. reconcile virtual dom `reconciler.updateContainerSync` + `reconciler.flushSyncWork`
   (react-reconciler 0.33 schedules work async by default, so this forces the render to
   finish before the function returns)

## Interesting Files

[src/reconciler.ts](src/reconciler.ts)

[src/render.ts](src/render.ts)

[src/elements/BaseElement.ts](src/elements/BaseElement.ts)

## Demo

```sh
pnpm start
```
