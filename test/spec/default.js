import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import preact from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof preact, 'function')
  },
  async 'calls package without error'() {
    await preact()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await preact({
      text,
    })
    ok(res, text)
  },
}

export default T