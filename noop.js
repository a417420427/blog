const fs = require('fs')
const starttime = Date.now()
let endtime

fs.readFile('package.json', () => {
  endtime = Date.now()
  console.log('finish reading time: ', endtime - starttime)
})

let index = 0

function handler() {
  if (index++ >= 10) return
  console.log(`nextTick ${index}`)
  setImmediate(handler)
  // console.log(`setImmediate ${index}`)
  // setImmediate(handler)
}

handler()

setTimeout(() => {
  console.log('timer1')

  Promise.resolve()
    .then(function () {
      console.log('promise1')
    })
    .then(() => {
      console.log('promise3')
    })
}, 0)

setTimeout(() => {
  console.log('timer2')

  Promise.resolve().then(function () {
    console.log('promise2')
  })
}, 0)
