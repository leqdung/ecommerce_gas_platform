'use stric'
const mongodb = require('mongoose')
const connectString = `mongodb+srv://ledung:LeDung%4090@cluster0.veajk3q.mongodb.net/?retryWrites=true&w=majority`
const { countConnect } = require('../helpers/check.connect')

// mongodb
//   .connect(connectString)
//   .then((_) => console.log('connect sucessful'))
//   .catch((err) => {
//     console.log(`connect error: ${err}`)
//   })

// dùng singleton de chỉ tạo 1 kết nối (tránh bị request lại nhiều lần)
class Database {
  constructor() {
    this.connect()
  }
  connect(type = 'mongodb') {
    //change type of database
    if (1 === 1) {
      mongodb.set('debug', true)
      mongodb.set('debug', { color: true })
    }
    mongodb
      .connect(connectString, { maxPoolSize: 50 }) //  maxPoolsize la kich thuoc gioi han ket noi=>khong the nuong chieu
      .then((_) => {
        console.log(`Connect db succesfull NEW`, countConnect())
      })
      .catch((err) => {
        console.log(`Error connect:  ${err}`)
      })
  }
  //connect by with singleton
  static getInstance() {
    if (!Database.instance) {
      //
      Database.instance = new Database()
    }
    return Database.instance
  }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb
