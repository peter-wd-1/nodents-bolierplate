import { add } from '@app/ad/adder'
import { a } from '@app/adda/imptest'
import express from 'express'

exports = {}
const app = express()

console.log({ a })

app.listen(3000, () => {
  console.log('Server Listening on port 3000')
})

app.get('/', (req, res) => {
  res.send('hello')
  process.exit(1)
})

const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
]

console.log(`Detailed : add('1 2') = ${add('1 2')}`, arr)
