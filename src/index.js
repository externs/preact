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

/* typal types/methods.xml namespace */
/**
 * @typedef {preact.h} h The pragma (rendering) function.
 * @typedef {(nodeName: string|!Function, attributes?: Object, ...args: !(preact.VNode|Array<!preact.VNode>)) => !preact.VNode} preact.h The pragma (rendering) function.
 * @typedef {preact.createElement} createElement The pragma (rendering) function. Alias of `h`.
 * @typedef {(nodeName: string|!Function, attributes?: Object, ...args: !(preact.VNode|Array<!preact.VNode>)) => !preact.VNode} preact.createElement The pragma (rendering) function. Alias of `h`.
 * @typedef {preact.cloneElement} cloneElement Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @typedef {(vnode: !preact.VNode, props?: Object, ...args: !(preact.VNode|Array<!preact.VNode>)) => !preact.VNode} preact.cloneElement Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @typedef {preact.createRef} createRef Just returns an object...?
 * @typedef {() => !Object} preact.createRef Just returns an object...?
 * @typedef {preact.render} render Render JSX into a `parent` Element.
 * @typedef {(vnode: !preact.VNode, parent: Element, merge?: Element) => void} preact.render Render JSX into a `parent` Element.
 * @typedef {preact.rerender} rerender Rerenders all rendered elements.
 * @typedef {() => void} preact.rerender Rerenders all rendered elements.
 */

/* typal types/options.xml namespace */
/**
 * @typedef {preact.options} options `＠record` Options for Preact.
 * @typedef {Object} preact.options `＠record` Options for Preact.
 * @prop {boolean} [syncComponentUpdates]
 * @prop {function(function(): void): void} [debounceRendering]
 * @prop {function(!preact.VNode): void} [vnode]
 * @prop {function(!Event): !Event} [event]
 * @prop {function(!preact.Component): void} [afterMount]
 * @prop {function(!preact.Component): void} [afterUpdate]
 * @prop {function(!preact.Component): void} [beforeUnmount]
 */

/* typal types/vnode.xml namespace */
/**
 * @typedef {preact._Component} _Component `＠interface` A component that extends preact.Component to set default properties. https://git.io/fjHoZ
 * @typedef {Object} preact._Component `＠interface` A component that extends preact.Component to set default properties. https://git.io/fjHoZ
 * @prop {!Object} defaultProps The properties that will be assigned on the component by _Preact_ when constructing it.
 * @typedef {preact.VNode} VNode `＠constructor` Virtual DOM Node.
 * @typedef {Object} preact.VNode `＠constructor` Virtual DOM Node.
 * @prop {string|preact._Component} nodeName The string of the DOM node to create or Component constructor to render.
 * @prop {!Array<!preact.VNode|string>} children The children of node.
 * @prop {string|number} [key] The key used to identify this VNode in a list.
 * @prop {Object} attributes The properties of this VNode.
 */

/* typal types/component.xml namespace */
/**
 * @typedef {preact.Component} Component `＠constructor` Preact component.
 * @typedef {Object} preact.Component `＠constructor` Preact component.
 * @prop {!Object} context
 * @prop {!Object} props
 * @prop {!Object} state
 * @prop {(state: !Object, callback?: function(): void) => void} setState
 * @prop {(callback?: function(): void) => void} forceUpdate
 * @prop {(props?: !Object, state?: !Object, context?: !Object) => preact.VNode} render
 * @prop {() => void} componentWillMount
 * @prop {() => void} componentDidMount
 * @prop {() => void} componentWillUnmount
 * @prop {() => !Object} getChildContext
 * @prop {(nextProps?: !Object, nextContext?: !Object) => void} componentWillReceiveProps
 * @prop {(nextProps?: !Object, nextState?: !Object, nextContext?: !Object) => boolean} shouldComponentUpdate
 * @prop {(nextProps?: !Object, nextState?: !Object, nextContext?: !Object) => void} componentWillUpdate
 * @prop {(prevProps?: !Object, prevState?: !Object, prevContext?: !Object) => void} componentDidUpdate
 */
