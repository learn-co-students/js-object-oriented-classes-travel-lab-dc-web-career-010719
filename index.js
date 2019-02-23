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

  yearsExperienceFromBeginningOf(endDate) {
    let end = new Date(endDate)
    let diff = Math.abs(this.startDate.getFullYear() - end.getFullYear())
    return diff + 1
  }
}

class Route {
  
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  
  blocksTravelled() {
    let horiz = eastWest.indexOf(this.endingLocation.horizontal) -  eastWest.indexOf(this.beginningLocation.horizontal)
    let vert = this.endingLocation.vertical - this.beginningLocation.vertical
    return Math.abs(horiz) + Math.abs(vert)
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}