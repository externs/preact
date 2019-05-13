# @externs/preact

[![npm version](https://badge.fury.io/js/%40externs%2Fpreact.svg)](https://npmjs.org/package/@externs/preact)

`@externs/preact` is The Externs For Preact. It can be used to import _Preact_ in code, knowing that the `preact` variable will be available in the global scope of the browser. For the developer experience, the code should still use `import { h } from 'preact'`, but use some kind of tool to prepare source code for compiling with Google Closure Compiler, for example, [_Depack_](https://artdecocode.com/depack/).

```sh
yarn add @externs/preact
```

```js
/** @const */
var preact = {}

/**
 * @param {string|!Function} nodeName An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} [attributes] Any attributes/props to set on the created element.
 * @param {...*} args Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 * @return {!preact.VNode}
 */
preact.h = function(nodeName, attributes, ...args) {}
/**
 * @param {string|!Function} nodeName An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object} [attributes] Any attributes/props to set on the created element.
 * @param {...!(preact.VNode|Array<!preact.VNode>)} args Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 * @return {!preact.VNode}
 */
preact.createElement = function(nodeName, attributes, ...args) {}
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its
 * children.
 * @param {!preact.VNode} vnode The virtual DOM element to clone.
 * @param {!Object} [props] Attributes/props to add when cloning.
 * @param {...!(preact.VNode|Array<!preact.VNode>)} args Any additional arguments will be used as replacement children.
 * @return {!preact.VNode}
 */
preact.cloneElement = function(vnode, props, args) {}
/**
 * Just returns an object...?
 * @return {!Object}
 */
preact.createRef = function() {}
/**
 * Render JSX into a `parent` Element.
 * @param {!preact.VNode} vnode A (JSX) VNode to render
 * @param {!Element} parent DOM element to render into
 * @param {!Element} [merge] Attempt to re-use an existing DOM tree rooted at `merge`
 */
preact.render = function(vnode, parent, merge) {}
/**
 * Rerenders all rendered elements.
 */
preact.rerender = function() {}

/** @record */
preact.options
/** @type {boolean} */
preact.options.syncComponentUpdates
/** @type {function(function(): void): void} */
preact.options.debounceRendering
/** @type {function(!preact.VNode): void} */
preact.options.vnode
/** @type {function(!Event): !Event} */
preact.options.event
/** @type {function(!preact.Component): void} */
preact.options.afterMount
/** @type {function(!preact.Component): void} */
preact.options.afterUpdate
/** @type {function(!preact.Component): void} */
preact.options.beforeUnmount

/**
 * Virtual DOM Node.
 * @constructor
 */
preact.VNode = function(){}
/**
 * The string of the DOM node to create or Component constructor to render.
 * @type {string|Function}
 */
preact.VNode.prototype.nodeName
/**
 * The children of node.
 * @type {!Array<!preact.VNode|string>}
 */
preact.VNode.prototype.children
/**
 * The key used to identify this VNode in a list.
 * @type {string|number|undefined}
 */
preact.VNode.prototype.key
/**
 * The properties of this VNode.
 * @type {Object}
 */
preact.VNode.prototype.attributes

/**
 * @interface
 * @param {!Object} [props] The initial component props
 * @param {!Object} [context] The initial context from parent components' getChildContext
 */
preact.Component = function(props, context) {}
/** @type {!Object} */
preact.Component.prototype.context
/** @type {!Object} */
preact.Component.prototype.props
/** @type {!Object} */
preact.Component.prototype.state
/**
 * @param {!Object} state
 * @param {function(): void} callback
 */
preact.Component.prototype.setState = function(state, callback) {}
/**
 * @param {function(): void} callback
 */
preact.Component.prototype.forceUpdate = function(callback) {}
/**
 * @param {!Object} props
 * @param {!Object} state
 * @param {!Object} context
 * @return {!preact.VNode}
 */
preact.Component.prototype.render = function(props, state, context) {}
preact.Component.prototype.componentWillMount = function() {}
preact.Component.prototype.componentDidMount = function() {}
preact.Component.prototype.componentWillUnmount = function() {}
/**
 * @returns {!Object}
 */
preact.Component.prototype.getChildContext = function() {}
/**
 * @param {!Object} [nextProps]
 * @param {!Object} [nextContext]
 */
preact.Component.prototype.componentWillReceiveProps = function(nextProps, nextContext) {}
/**
 * @param {!Object} [nextProps]
 * @param {!Object} [nextState]
 * @param {!Object} [nextContext]
 * @return {boolean}
 */
preact.Component.prototype.shouldComponentUpdate = function(nextProps, nextState, nextContext) {}
/**
 * @param {!Object} [nextProps]
 * @param {!Object} [nextState]
 * @param {!Object} [nextContext]
 */
preact.Component.prototype.componentWillUpdate = function(nextProps, nextState, nextContext) {}
/**
 * @param {!Object} [prevProps]
 * @param {!Object} [prevState]
 * @param {!Object} [prevContext]
 */
preact.Component.prototype.componentDidUpdate = function(prevProps, prevState, prevContext) {}
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`preact()`](#preact-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import preact from '@externs/preact'
```

The actual externs are found in the `type/externs.js` file which is referenced by the package in the `externs` field.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `preact(): void`

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

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a> 2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>