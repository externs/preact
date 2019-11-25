/* eslint-disable no-undef */
/* start example */
export default preact

try {
  /**
   * @suppress {const}
   */
  window.preact = preact
} catch (err) {
  /**
   * @suppress {const|checkTypes}
   */
  window.preact = {}
}

const {
  h,
  createElement,
  cloneElement,
  createRef,
  Component,
  render,
  rerender,
  options,
} = window.preact

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
/* end example */

/* typal types/methods.xml namespace */

/* typal types/options.xml namespace */

/* typal types/vnode.xml namespace */

/* typal types/component.xml namespace */
