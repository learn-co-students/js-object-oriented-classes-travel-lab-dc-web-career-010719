
class Driver {

  constructor(name, date) {

    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {

    return year - (this.startDate.getFullYear())
  }

}



class Route {

  constructor(beginningLocation, endingLocation) {

    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }



  blocksTravelled() {

    const eastWest = {
    '1st Avenue': 0,
    '2nd Avenue': 1,
    '3rd Avenue': 2,
    'Lexington Avenue': 3,
    'Park': 4,
    'Madison Avenue': 5,
    '5th Avenue': 6
    };

    const horizontalDistance = Math.abs(eastWest[this.beginningLocation.horizontal] -
      eastWest[this.endingLocation.horizontal])

    const verticalDistance = Math.abs(this.beginningLocation.vertical -
      this.endingLocation.vertical)

    return horizontalDistance + verticalDistance

  }

  estimatedTime(rushHour) {

    if (rushHour) {

      return this.blocksTravelled() / 2
    } else { return this.blocksTravelled() / 3}

  }

}
