# phase1

> setup the reconciler

## Definitions

### Reconciler
The **reconciler** is the bindings to the react reconciliation lifecycle methods. This is NOT the react
lifecycle hooks even though it is closley related to the react lifecycle hooks.

### Node
A **node** is the interface of the renderer that the react renderer is binding to. For example
`window.document` would be the **node** used in a react renderer that binds to the dom.

### Root Node
The **root node** is the node used in the top of the react virtual dom tree.

### Element
You can thing of an **element** as a react component that is directly bound to the reconciliation lifecycle methods.
This is NOT the same thing as a react component, although it can be used like a react component.
Because it is directly bound to the react reconciliation lifecycle methods it is more powerful, but also more complex.
**Elements** form the foundation that all react components are built on top of.

`<div>`, `<button>` and `<h1>` are all examples of elements in the react dom renderer.

### Root Element
The **root element** is the element used in the top of the react virtual dom tree.

### Root
This represents the root of the react virutal dom tree.
