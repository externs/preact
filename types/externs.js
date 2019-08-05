/**
 * @fileoverview
 * @externs
 */

/* typal types/methods.xml */
/** @const */
var preact = {}
/**
 * The pragma (rendering) function.
 * @param {string|!Function} nodeName An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object=} [attributes] Any attributes/props to set on the created element.
 * @param {...!(preact.VNode|Array<!preact.VNode>)} args Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 * @return {!preact.VNode}
 */
preact.h = function(nodeName, attributes, ...args) {}
/**
 * The pragma (rendering) function. Alias of `h`.
 * @param {string|!Function} nodeName An element name. Ex: `div`, `a`, `span`, etc.
 * @param {Object=} [attributes] Any attributes/props to set on the created element.
 * @param {...!(preact.VNode|Array<!preact.VNode>)} args Additional arguments are taken to be children to append. Can be infinitely nested Arrays.
 * @return {!preact.VNode}
 */
preact.createElement = function(nodeName, attributes, ...args) {}
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 * @param {!preact.VNode} vnode The virtual DOM element to clone.
 * @param {Object=} [props] Attributes/props to add when cloning.
 * @param {...!(preact.VNode|Array<!preact.VNode>)} args Any additional arguments will be used as replacement children.
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

// because each option is optional, they are defined as types and not functions
// to allow "|undefined".
// todo typal: write constructor still ( = function(arg,arg2) {})
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
 * @type {(function(function(): void): void)|undefined}
 */
preact.options.prototype.debounceRendering = function(callback) {}
/**
 * @type {(function(!preact.VNode): void)|undefined}
 */
preact.options.prototype.vnode = function(vnode) {}
/**
 * @type {(function(!Event): !Event)|undefined}
 */
preact.options.prototype.event = function(event) {}
/**
 * @type {(function(!preact.Component): void)|undefined}
 */
preact.options.prototype.afterMount = function(component) {}
/**
 * @type {(function(!preact.Component): void)|undefined}
 */
preact.options.prototype.afterUpdate = function(component) {}
/**
 * @type {(function(!preact.Component): void)|undefined}
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
 * @type {string|preact.ComponentConstructor|Function}
 */
preact.VNode.prototype.nodeName
/**
 * The children of node.
 * @type {!Array<!preact.VNode|string>}
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

/**
 * Static default property.
 * @type {!Object}
 */
preact.ComponentConstructor.defaultProps
/**
 * Static get derived.
 * @type {function(!Object, !Object): !Object}
 */
preact.ComponentConstructor.getDerivedStateFromProps

/* typal types/component.xml */
/**
 * Preact component.
 * @param {!Object=} [props] The initial component props.
 * @param {!Object=} [context] The initial context from parent components' getChildContext.
 * @constructor
 */
preact.Component = function(props, context) {}
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
 * Properties that will be assigned upon construction of the component.
 * @type {(!Object)|undefined}
 */
preact.Component.defaultProps
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
 * @type {(function(!Object,!Object): !Object)|undefined}
 */
preact.Component.getDerivedStateFromProps = function(props, state) {}
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
 * @param {!Object=} [props] Component properties.
 * @param {!Object=} [state] Component state.
 * @param {!Object=} [context] Component context.
 * @return {preact.VNode}
 */
preact.Component.prototype.render = function(props, state, context) {}
/**
 */
preact.Component.prototype.componentWillMount = function() {}
/**
 */
preact.Component.prototype.componentDidMount = function() {}
/**
 */
preact.Component.prototype.componentWillUnmount = function() {}
/**
 * @return {!Object}
 */
preact.Component.prototype.getChildContext = function() {}
/**
 * @param {!Object=} [nextProps] New properties.
 * @param {!Object=} [nextContext] New context.
 */
preact.Component.prototype.componentWillReceiveProps = function(nextProps, nextContext) {}
/**
 * @param {!Object=} [nextProps] New properties.
 * @param {!Object=} [nextState] New state.
 * @param {!Object=} [nextContext] New context.
 * @return {boolean}
 */
preact.Component.prototype.shouldComponentUpdate = function(nextProps, nextState, nextContext) {}
/**
 * @param {!Object=} [nextProps] New properties.
 * @param {!Object=} [nextState] New state.
 * @param {!Object=} [nextContext] New context.
 */
preact.Component.prototype.componentWillUpdate = function(nextProps, nextState, nextContext) {}
/**
 * @param {!Object=} [prevProps] Previous properties.
 * @param {!Object=} [prevState] Previous state.
 * @param {!Object=} [prevContext] Previous context.
 */
preact.Component.prototype.componentDidUpdate = function(prevProps, prevState, prevContext) {}
