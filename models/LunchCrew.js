'use strict'

module.exports = class LunchCrew {
  constructor (lunchCrew) {
    if (!lunchCrew) {
      return
    }

    this._id = lunchCrew._id
    this.destinationOptions = lunchCrew.destinationOptions
    this.name = lunchCrew.name
  }

  validate () {
    return this.destinationOptions &&
      this.name
  }
}
