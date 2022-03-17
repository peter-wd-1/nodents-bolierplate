import { add } from '#/src/adder'
import { add as ad } from '#/src/ad/adder'

import express from 'express'

console.log({ ad })

exports = {}
const app = express()

app.listen(3000, () => {
  console.log(`Server Listening on port 3000`)
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

var a = 1
console.log(a)
console.log(`add('1 2') = ${add('1 2')}`)
