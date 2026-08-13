// React 19 removed the global JSX namespace, so custom host elements are
// registered by augmenting React's own JSX namespace (which react/jsx-runtime
// re-exports). Later phases add their intrinsic elements here.
export {};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {}
  }
}
