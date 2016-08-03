'use strict'

module.exports = class LunchCrew {
  constructor (lunchCrew) {
    if (!lunchCrew) {
      return
    }

    this._id = lunchCrew._id
    this.destinationOptions = lunchCrew.destinationOptions
  }

  validate () {
    return this.destinationOptions
  }
}
