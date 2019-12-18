# Phase K

> add options

## Steps

### Setup types for options

### Setup context to pass around options

This is not required in all react renderers and some react renders use other
strategies to pass around options

### Add dev tools support

This can be accomplished by adding the following in the render function

```ts
reconciler.injectIntoDevTools({
  bundleType: Number(dev) as BundleType,
  rendererPackageName: pkg.name,
  version: pkg.version
});
```

## Interesting Files

[src/elements/BaseElement.ts](src/elements/BaseElement.ts)

[src/context.ts](src/context.ts)

[src/dev.ts](src/dev.ts)

[src/render.ts](src/render.ts)

[src/types.ts](src/types.ts)

## Usage

```sh
npm run start
```
