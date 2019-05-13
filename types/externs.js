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