class Driver{
  //set initial attributes
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
    
  }
  ///functions here
  
  yearsExperienceFromBeginningOf(year) {
    const startYear = this.startDate.getFullYear()
    return year - startYear
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
  ]

class Route{
  //set initializers
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  
  blocksTravelled(){
    let street = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    
    let streets = []
    for (const st in eastWest) {
	   if (eastWest[st] === this.beginningLocation.horizontal || eastWest[st] === this.endingLocation.horizontal) {
		streets.push(st)
      }
    }
    
    if (streets.length === 1) {
      return street
    } else {
      let dist = (streets[0] - streets[1])
      return street + Math.abs(dist)
    }
  }
  
  estimatedTime(peakTime){
    if (peakTime === true){
      let peak = (this.blocksTravelled()/ 2)
      return Math.round(peak)
      } else {
        let offPeak = (this.blocksTravelled()/3) 
        return Math.round(offPeak)
      }
      
    
    //peakHours
  }
}
