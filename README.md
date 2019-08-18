# @externs/preact

[![npm version](https://badge.fury.io/js/%40externs%2Fpreact.svg)](https://npmjs.org/package/@externs/preact)

`@externs/preact` is The Externs For Preact. It can be used to import _Preact_ in code, knowing that the `preact` variable will be available in the global scope of the browser. For the developer experience, the code should still use `import { h } from 'preact'`, but use some kind of tool to prepare source code for compiling with Google Closure Compiler, for example, [_Depack_](https://artdecocode.com/depack/).

```sh
yarn add @externs/preact
```

<kbd>📖 [Read Types Documentation](../../wiki)</kbd>

```js
/**
 * @fileoverview
 * @externs
 */

/* typal types/methods.xml */
/** @const */
var preact = {}
/**
 * @extends {Object}
 * @interface
 */
preact.PreactProps = function() {}
/**
 * Sets HTML of the node without escaping the contents.
 * @type {{__html: *}}
 */
preact.PreactProps.prototype.dangerouslySetInnerHTML
/**
 * The reference callback for the node.
 * @type {function(?)}
 */
preact.PreactProps.prototype.ref = function() {}
/**
 * The pragma (rendering) function.
 * @param {string|!Function} nodeName An element name. Ex: `div`, `a`, `span`, etc.
 * @param {PreactProps=} [attributes] Any attributes/props to set on the created element.
 * @param {...preact.VNode|Array<preact.VNode|string|boolean|number|undefined>|string|boolean|number|undefined} args Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 * @return {!preact.VNode}
 */
preact.h = function(nodeName, attributes, ...args) {}
/**
 * The pragma (rendering) function. Alias of `h`.
 * @param {string|!Function} nodeName An element name. Ex: `div`, `a`, `span`, etc.
 * @param {PreactProps=} [attributes] Any attributes/props to set on the created element.
 * @param {...preact.VNode|Array<preact.VNode|string|boolean|number|undefined>|string|boolean|number|undefined} args Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 * @return {!preact.VNode}
 */
preact.createElement = function(nodeName, attributes, ...args) {}
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {!preact.VNode} vnode The virtual DOM element to clone.
 * @param {PreactProps=} [props] Attributes/props to add when cloning.
 * @param {...preact.VNode|Array<preact.VNode|string|boolean|number|undefined>|string|boolean|number|undefined} args Any additional arguments will be used as replacement children.
 * @return {!preact.VNode}
 */
preact.cloneElement = function(vnode, props, ...args) {}
/**
 * Just returns an object...?
 * @return {!Object}
 */
preact.createRef = function() {}
/**
 * Render JSX into a `parent` Element.
 * @param {!preact.VNode} vnode A (JSX) VNode to render.
 * @param {Element} parent DOM element to render into.
 * @param {Element=} [merge] Attempt to re-use an existing DOM tree rooted at `merge`.
 */
preact.render = function(vnode, parent, merge) {}
/**
 * Rerenders all rendered elements.
 */
preact.rerender = function() {}

// Because each option is optional, they are defined with `@type` and 
// not as functions to allow "{type}|undefined".
/* typal types/options.xml */
/**
 * Options for Preact.
 * @record
 */
preact.options
/**
 * @type {boolean|undefined}
 */
preact.options.prototype.syncComponentUpdates
/**
 * @type {(function(function(): void))|undefined}
 */
preact.options.prototype.debounceRendering = function(callback) {}
/**
 * @type {(function(!preact.VNode))|undefined}
 */
preact.options.prototype.vnode = function(vnode) {}
/**
 * @type {(function(!Event): !Event)|undefined}
 */
preact.options.prototype.event = function(event) {}
/**
 * @type {(function(!preact.Component))|undefined}
 */
preact.options.prototype.afterMount = function(component) {}
/**
 * @type {(function(!preact.Component))|undefined}
 */
preact.options.prototype.afterUpdate = function(component) {}
/**
 * @type {(function(!preact.Component))|undefined}
 */
preact.options.prototype.beforeUnmount = function(component) {}

/* typal types/vnode.xml */
/**
 * Virtual DOM Node.
 * @interface
 */
preact.VNode = function() {}
/**
 * The string of the DOM node to create or Component constructor to render.
 * @type {string|function(new: preact.Component)|Function}
 */
preact.VNode.prototype.nodeName
/**
 * The children of node. Can be scalar values (string, number, boolean, null, undefined, etc), more Virtual DOM elements, or infinitely nested arrays of the above.
 * @type {!Array<preact.VNode|string|boolean|number|undefined>}
 */
preact.VNode.prototype.children
/**
 * The key used to identify this VNode in a list.
 * @type {(string|number)|undefined}
 */
preact.VNode.prototype.key
/**
 * The properties of this VNode.
 * @type {Object}
 */
preact.VNode.prototype.attributes

/* typal types/component.xml */
/**
 * A base class that is usually subclassed to create stateful _Preact_ components.
 * @param {!Object=} [props] The initial component props.
 * @param {!Object=} [context] The initial context from parent components' getChildContext.
 * @constructor
 */
preact.Component = function(props, context) {}
/**
 * Properties that will be assigned upon construction of the component.
 * @type {(!Object)|undefined}
 */
preact.Component.defaultProps
/**
 * The function to compute the state from properties.
 * @type {(function(!Object,!Object): !Object)|undefined}
 */
preact.Component.getDerivedStateFromProps = function(props, state) {}
/**
 * Turns off stateful re-rendering.
 * @type {boolean|undefined}
 */
preact.Component.prototype._disable
/**
 * An alias for `_disable`.
 * @type {boolean|undefined}
 */
preact.Component.prototype.__x
/**
 * The context.
 * @type {!Object}
 */
preact.Component.prototype.context
/**
 * The properties.
 * @type {!Object}
 */
preact.Component.prototype.props
/**
 * The state.
 * @type {!Object}
 */
preact.Component.prototype.state
/**
 * @param {!Object} state The state.
 * @param {function(): void=} [callback] The callback after completion.
 */
preact.Component.prototype.setState = function(state, callback) {}
/**
 * @param {function(): void=} [callback] The callback after completion.
 */
preact.Component.prototype.forceUpdate = function(callback) {}
/**
 * The `render()` function is required for all components. It can inspect the props and state of the component, and should return a _Preact_ element or `null`.
 * @param {!Object=} [props] Component properties.
 * @param {!Object=} [state] Component state.
 * @param {!Object=} [context] Component context.
 * @return {preact.VNode}
 */
preact.Component.prototype.render = function(props, state, context) {}
/**
 * Called before the component gets mounted to the DOM.
 */
preact.Component.prototype.componentWillMount = function() {}
/**
 * Called after the component gets mounted to the DOM.
 */
preact.Component.prototype.componentDidMount = function() {}
/**
 * Called prior to removal from the DOM.
 */
preact.Component.prototype.componentWillUnmount = function() {}
/**
 * @return {!Object}
 */
preact.Component.prototype.getChildContext = function() {}
/**
 * Called before new props get accepted.
 * @param {!Object=} [nextProps] New properties.
 * @param {!Object=} [nextContext] New context.
 */
preact.Component.prototype.componentWillReceiveProps = function(nextProps, nextContext) {}
/**
 * Called before `render()`. Should return `false` to skip render.
 * @param {!Object=} [nextProps] New properties.
 * @param {!Object=} [nextState] New state.
 * @param {!Object=} [nextContext] New context.
 * @return {boolean}
 */
preact.Component.prototype.shouldComponentUpdate = function(nextProps, nextState, nextContext) {}
/**
 * Called before `render()`.
 * @param {!Object=} [nextProps] New properties.
 * @param {!Object=} [nextState] New state.
 * @param {!Object=} [nextContext] New context.
 */
preact.Component.prototype.componentWillUpdate = function(nextProps, nextState, nextContext) {}
/**
 * Called after `render()`.
 * @param {!Object=} [prevProps] Previous properties.
 * @param {!Object=} [prevState] Previous state.
 * @param {!Object=} [prevContext] Previous context.
 */
preact.Component.prototype.componentDidUpdate = function(prevProps, prevState, prevContext) {}
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [preact](#preact)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import preact from '@externs/preact'
```

The actual externs are found in the `type/externs.js` file which is referenced by the package in the `externs` field.

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## preact

The entry module, `src/index.js` of this package destructures the properties available on preact global variable, and exports them.

```js
export default preact

const {
  h,
  createElement,
  cloneElement,
  createRef,
  Component,
  render,
  rerender,
  options,
} = preact

export {
  h,
  createElement,
  cloneElement,
  createRef,
  Component,
  render,
  rerender,
  options,
}
```

The usage is up to the developers to decide, but the package does not contain any functionality in itself, other than to provide the externs and the way to import preact in the code.

```jsx
import { render, Component } from '@externs/preact'

class App extends Component {
  render({ name }) {
    return <div>Hello, {name}</div>
  }
}


render(<App name="World"/>, body)
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img width="100" src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png"
          alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a> 2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img width="100" src="https://raw.githubusercontent.com/idiocc/cookies/master/wiki/arch4.jpg"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>