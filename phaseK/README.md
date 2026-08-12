# Phase K

> add options

## Steps

### Setup types for options

### Setup context to pass around options

This is not required in all react renderers and some react renderers use other
strategies to pass around options

### Generate code from the rendered ast

`renderAst` returns the babel file ast, and `render` generates code from it with
`@babel/generator` and formats it with prettier. Prettier 3 formats asynchronously, which is
why `render` returns a promise.

```ts
const renderedOutput = await render(<Smart code="const hello = 'world'" />, {
  prettier: { singleQuote: true },
});
```

### Add dev tools support

This can be accomplished by adding the following in the render function

```ts
reconciler.injectIntoDevTools({
  bundleType: Number(dev) as BundleType,
  rendererPackageName: "create-react-renderer",
  version: "0.1.0",
});
```

## Interesting Files

[src/elements/BaseElement.ts](src/elements/BaseElement.ts)

[src/context.ts](src/context.ts)

[src/dev.ts](src/dev.ts)

[src/render.ts](src/render.ts)

[src/types.ts](src/types.ts)

## Demo

```sh
pnpm start
```
