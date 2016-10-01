'use strict'

module.exports = class DestinationOption {
  constructor (destinationOption) {
    if (!destinationOption) {
      return
    }

    this.lunchCrew = destinationOption.lunchCrew
    this.name = destinationOption.name
  }

  validate () {
    return !!this.name && !!this.lunchCrew
  }
}
