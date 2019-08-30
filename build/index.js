module.exports=preact

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


/* typal types/methods.xml namespace */
/**
 * @typedef {preact.PreactProps} PreactProps `＠constructor`
 * @typedef {Object & preact.$PreactProps} preact.PreactProps `＠constructor`
 * @typedef {Object} preact.$PreactProps `＠constructor`
 * @prop {{__html: *}} dangerouslySetInnerHTML Sets HTML of the node without escaping the contents.
 * @prop {function(?)} ref The reference callback for the node.
 * @typedef {preact.h} h The pragma (rendering) function.
 * @typedef {(nodeName: string|!Function, attributes?: preact.PreactProps, ...args: preact.VNode|Array<preact.VNode|string|boolean|number|undefined>|string|boolean|number|undefined) => !preact.VNode} preact.h The pragma (rendering) function.
 * @typedef {preact.createElement} createElement The pragma (rendering) function. Alias of `h`.
 * @typedef {(nodeName: string|!Function, attributes?: preact.PreactProps, ...args: preact.VNode|Array<preact.VNode|string|boolean|number|undefined>|string|boolean|number|undefined) => !preact.VNode} preact.createElement The pragma (rendering) function. Alias of `h`.
 * @typedef {preact.cloneElement} cloneElement Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @typedef {(vnode: !preact.VNode, props?: preact.PreactProps, ...args: preact.VNode|Array<preact.VNode|string|boolean|number|undefined>|string|boolean|number|undefined) => !preact.VNode} preact.cloneElement Clones the given VNode, optionally adding attributes/props and replacing its children.
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
 * @prop {(callback: function(): void) => ?} [debounceRendering]
 * @prop {(vnode: !preact.VNode) => ?} [vnode]
 * @prop {(event: !Event) => !Event} [event]
 * @prop {(component: !preact.Component) => ?} [afterMount]
 * @prop {(component: !preact.Component) => ?} [afterUpdate]
 * @prop {(component: !preact.Component) => ?} [beforeUnmount]
 */

/* typal types/vnode.xml namespace */
/**
 * @typedef {preact.VNode} VNode `＠interface` Virtual DOM Node.
 * @typedef {Object} preact.VNode `＠interface` Virtual DOM Node.
 * @prop {string|function(new: preact.Component)|Function} nodeName The string of the DOM node to create or Component constructor to render.
 * @prop {!Array<preact.VNode|string|boolean|number|undefined>} children The children of node. Can be scalar values (string, number, boolean, null, undefined, etc), more Virtual DOM elements, or infinitely nested arrays of the above.
 * @prop {string|number} [key] The key used to identify this VNode in a list.
 * @prop {Object} attributes The properties of this VNode.
 */

/* typal types/component.xml namespace */
/**
 * @typedef {preact.Component} Component `＠constructor` A base class that is usually subclassed to create stateful _Preact_ components.
 * @typedef {Object} preact.Component `＠constructor` A base class that is usually subclassed to create stateful _Preact_ components.
 * @prop {(props?: !Object, context?: !Object) => preact.Component} constructor Constructor method.
 * @prop {boolean} [_disable] Turns off stateful re-rendering.
 * @prop {boolean} [__x] An alias for `_disable`.
 * @prop {!Object} context The context.
 * @prop {!Object} props The properties.
 * @prop {!Object} state The state.
 * @prop {(state: !Object, callback?: function(): void) => ?} setState
 * @prop {(callback?: function(): void) => ?} forceUpdate
 * @prop {(props?: !Object, state?: !Object, context?: !Object) => preact.VNode} render The `render()` function is required for all components. It can inspect the props and state of the component, and should return a _Preact_ element or `null`.
 * @prop {() => ?} componentWillMount Called before the component gets mounted to the DOM.
 * @prop {() => ?} componentDidMount Called after the component gets mounted to the DOM.
 * @prop {() => ?} componentWillUnmount Called prior to removal from the DOM.
 * @prop {() => !Object} getChildContext
 * @prop {(nextProps?: !Object, nextContext?: !Object) => ?} componentWillReceiveProps Called before new props get accepted.
 * @prop {(nextProps?: !Object, nextState?: !Object, nextContext?: !Object) => boolean} shouldComponentUpdate Called before `render()`. Should return `false` to skip render.
 * @prop {(nextProps?: !Object, nextState?: !Object, nextContext?: !Object) => ?} componentWillUpdate Called before `render()`.
 * @prop {(prevProps?: !Object, prevState?: !Object, prevContext?: !Object) => ?} componentDidUpdate Called after `render()`.
 */


module.exports.h = h
module.exports.createElement = createElement
module.exports.cloneElement = cloneElement
module.exports.createRef = createRef
module.exports.Component = Component
module.exports.render = render
module.exports.rerender = rerender
module.exports.options = options