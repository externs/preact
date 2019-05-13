import { debuglog } from 'util'

const LOG = debuglog('@externs/preact')

/**
 * The Externs For Preact.
 * @param {_@externs/preact.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
export default async function preact(config = {}) {
  const {
    shouldRun = true,
    text,
  } = config
  if (!shouldRun) return
  LOG('@externs/preact called with %s', text)
  return text
}

/* documentary types/index.xml */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {_@externs/preact.Config} Config Options for the program.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {Object} _@externs/preact.Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */
