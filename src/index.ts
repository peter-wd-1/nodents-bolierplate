import { add } from '#/ad/adder.ts'
import { add as d } from '#/ad/adt/adder.ts'
import { add as adsd } from 'ad/adder'
import express from 'express'

exports = {}
const app = express()

console.log(d)

app.listen(3000, () => {
  console.log(`Server Listening on port ${port}`)
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
console.log({ route })
console.log(`add('1 2') = ${add('1 2')}`)
