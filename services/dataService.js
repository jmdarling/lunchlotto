'use strict'

const MongoClient = require('mongodb').MongoClient

const LunchCrew = require('./../models/LunchCrew')

// Variable to store a handle to the connected DB instance.
let db = null

/**
 * Initializes a connection to the DB.
 *
 * @param url {string} The URL of the DB to connect to.
 *
 * @return {Promise}
 */
module.exports.connect = url => {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve()
      return
    }

    MongoClient.connect(url, (err, dataBase) => {
      if (err) {
        reject(err)
        return
      }

      db = dataBase
      resolve()
    })
  })
}

/**
 * Gets LunchCrews.
 *
 * @return {Array} An array of LunchCrews.
 */
module.exports.getLunchCrews = () => {
  return new Promise((resolve, reject) => {
    let collection = db.collection('lunchCrew')

    collection.find().toArray((error, documents) => {
      if (error) {
        reject(error)
        return
      }

      resolve(documents.map(document => new LunchCrew(document)))
    })
  })
}

/**
 * Inserts a new LunchCrew.
 *
 * @param lunchCrew {LunchCrew} The LunchCrew to insert.
 *
 * @return {Promise}
 */
module.exports.insertLunchCrew = lunchCrew => {
  return new Promise((resolve, reject) => {
    let collection = db.collection('lunchCrew')

    collection.insert(lunchCrew, (error, result) => {
      if (error) {
        reject(error)
        return
      }

      resolve(result)
    })
  })
}

/**
 * Inserts a new DestinationOption to a given LunchCrew.
 *
 * @param destinationOption {DestinationOption} The DestinationOption to insert.
 *
 * @return {Promise}
 */
module.exports.insertDestinationOption = destinationOption => {
  return new Promise((resolve, reject) => {
    let collection = db.collection('lunchCrew')
    let query = {name: destinationOption.lunchCrew}
    let update = {$addToSet: { destinationOptions: destinationOption.name }}

    collection.update(
      query,
      update,
      (error, result) => {
        if (error) {
          reject(error)
          return
        }
        resolve(result)
      })
  })
}
