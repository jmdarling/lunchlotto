'use strict'

/**
 * Draw a new winning lunch lotto destination
 *
 * @param lunchCrew {LunchCrew} The LunchCrew for which we want to draw a winning lunch destination.
 *
 * @return {Promise}
 */
module.exports.drawLunchLottoDestination = lunchCrew => {
  return lunchCrew.destionationOptions[0] // choose 1st option as our winner -- version 0.1
}
