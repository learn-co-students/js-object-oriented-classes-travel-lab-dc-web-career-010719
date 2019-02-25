class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
  return  year -  this.startDate.getFullYear()
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



class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    }


  eastWestNumber(avenue){
  return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
  let verticalDist = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
  let horizontalDist = Math.abs(this.eastWestNumber(this.beginningLocation.horizontal)- this.eastWestNumber(this.endingLocation.horizontal))
  return verticalDist+horizontalDist
  }

  estimatedTime(peak){
let time;
    if (peak){
      time = this.blocksTravelled()/2
    }else{
      time = this.blocksTravelled()/3
    }
    return time
  }

}
