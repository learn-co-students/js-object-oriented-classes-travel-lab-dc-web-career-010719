let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {

  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }

}

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    for (const index in eastWest) {
      if (this.beginningLocation.horizontal === eastWest[index]) {
        var a = index
      }
    }
    for (const index in eastWest) {
      if (this.endingLocation.horizontal === eastWest[index]) {
        var b = index
      }
    }
    var horizontalBlocksTravelled = Math.abs(b - a)
    var verticalBlocksTravelled = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical))
    return horizontalBlocksTravelled + verticalBlocksTravelled
  }

  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
