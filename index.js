
let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

let numberBlocks = {}
for (let i = 0; i < eastWest.length; i++) {
  numberBlocks[eastWest[i]] = i
}

class Driver {
  constructor(name, date){
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()

  }

}

class Route {
  constructor(start, end) {
    this.start = start
    this.end = end
  }

  blocksTravelled(){
    let vert = Math.abs(this.start.vertical - this.end.vertical)
    let hori = Math.abs(numberBlocks[this.start.horizontal] - numberBlocks[this.end.horizontal])
    return vert + hori
  }

  estimatedTime(peak = false) {
    if (!peak) {
    return this.blocksTravelled() / 3
  } else {
    return this.blocksTravelled() / 2
  }
  }

}












//
