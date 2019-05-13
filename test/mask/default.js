import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import preact from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await preact({
      text: this.input,
    })
    return res
  },
  context: Context,
})