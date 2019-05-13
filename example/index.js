/* alanode example/ */
import preact from '../src'

(async () => {
  const res = await preact({
    text: 'example',
  })
  console.log(res)
})()