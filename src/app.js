const express = require('express')
const morgan = require('morgan')
const { default: helmet } = require('helmet')
const compression = require('compression')
const app = express()
//init middware
app.use(morgan('dev'))
// app.use(morgan('combined'))
// app.use(morgan('common'))
// app.use(morgan('short'))
// app.use(morgan('tiny'))
app.use(helmet())
app.use(compression())
//init db
require('./dbs/init.mongodb')
const { checkOverLoad } = require('./helpers/check.connect')
// checkOverLoad()
//init route
app.get('/', (req, res, next) => {
  // const strCompress = 'Hello javascript'
  return res.status(200).json({
    message: 'wellcome javascript',
    // metadata: strCompress.repeat(10),
  })
})
//handing error

module.exports = app
