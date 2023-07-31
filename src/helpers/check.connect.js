'use strict'
const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000
//get number of connection to db
// const countConnect = () => {
//   const numOfConnection = mongoose.connections.length
//   console.log(`Number of connection : ${numOfConnection}`)
// }
const countConnect = () => {
  const numOfConnection = mongoose.connections.length
  console.log(`Dont move to another ${numOfConnection}`)
}

//check overload
const checkOverload = () => {
  setInterval(() => {
    //get number of connection in db
    const numOfConnection = mongoose.connections.length
    //get number of core of cpu
    const numCores = os.cpus().length
    //get memory used
    const memoryUsed = process.memoryUsage().rss
    //example number of conn based of number of core
    const maxConnection = numCores * 5
    if (numOfConnection > maxConnection) {
      console.log(`Connection overload detected`)
    }
    console.log(`number used: ${memoryUsed / 1024 / 1024}MB`)
  }, _SECONDS) //monitor every 5s
}

//export to func => trả về phải có dấu ngoặc móc
module.exports = { countConnect, checkOverload }
