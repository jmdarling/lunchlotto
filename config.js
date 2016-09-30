'use strict'

module.exports = {
  dbUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/lunchlotto',
  appPort: 8080
}
