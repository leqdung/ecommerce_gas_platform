'use stric'
const mongoose = require('mongoose')
const connectString = `mongodb+srv://ledung:LeDung%4090@cluster0.veajk3q.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(connectString)
  .then((_) => console.log('Connected Mongodb Sucess'))
  .catch((err) => {
    console.log(`error connect: ${err}`)
  })
//dev
if (1 === 1) {
  mongoose.set('debug', true)
  mongoose.set('debug', { color: true })
}

module.exports = mongoose
//nhược điểm là sẽ gọi lại nhiều lần gây quá tải vì có nhiều request
//khắc phục bằng cách dùng sigleton => các cuộc gọi tiếp theo sẽ
