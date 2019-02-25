class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf (endDate) {
    endDate = new Date(endDate, 0, 1)
    let experience = endDate.getFullYear() - this.startDate.getFullYear()
    return experience
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = {horizontal: beginningLocation.horizontal, vertical: beginningLocation.vertical}
    this.endingLocation = {horizontal: endingLocation.horizontal, vertical: endingLocation.vertical}
  }

  blocksTravelled () {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let hdist = Math.abs(eastWest.findIndex((avenue) => {return avenue === this.endingLocation.horizontal}) - eastWest.findIndex((avenue) => {return avenue === this.beginningLocation.horizontal}))

    let vdist = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical))
    return hdist + vdist
  }

  estimatedTime (peakTime) {
    if (typeof peakTime === 'undefined') { peakTime = false }
    if (peakTime === true) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
