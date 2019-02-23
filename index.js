let eastWest = {
  '1st Avenue': 1,
  '2nd Avenue': 2,
  '3rd Avenue': 3,
  'Lexington Avenue': 4,
  'Park': 5,
  'Madison Avenue': 6,
  '5th Avenue': 7
};

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

   yearsExperienceFromBeginningOf(year) {
     let difference = parseInt(year) - this.startDate.getFullYear()
    return difference
  }
}


class Route {
  constructor(beginningLocation,endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {

  let verDistance = (this.endingLocation.vertical - this.beginningLocation.vertical)
    let horDistance = (eastWest[this.endingLocation.horizontal] -
      eastWest[this.beginningLocation.horizontal])
    return Math.abs(verDistance) + Math.abs(horDistance);
  }

  estimatedTime(peak) {
    if (peak == true) {
        return this.blocksTravelled() / 2;
      } else {
        return this.blocksTravelled() / 3;
      }
  }

}
