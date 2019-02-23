class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let verticalBlocks;
    let b;
    let c;
    verticalBlocks = Math.abs(
      parseInt(this.endingLocation['vertical']) -
        parseInt(this.beginningLocation['vertical'])
    );

    for (const i in eastWest) {
      if (this.beginningLocation['horizontal'] === eastWest[i]) {
        b = parseInt(i);
      }
      // }

      // for (const i in eastWest) {
      if (this.endingLocation['horizontal'] === eastWest[i]) {
        c = parseInt(i);
      }
    }
    var horizontalBlocks = Math.abs(c - b);
    return verticalBlocks + horizontalBlocks;
  }
  estimatedTime(peak) {
    // debugger;
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
