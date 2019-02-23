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
 

//////////Route Class/////////////

function horiz() {
  //set horizontal streets to a function in lieu of global array
  return [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ] 
}

class Route{
  //set initializers
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  
  //class methods
  blocksTravelled(){
    //set vertical street distance
    let street = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    
    //set horizontal street distance
    let streets = []
    for (const st in horiz()) {
	   if (horiz()[st] === this.beginningLocation.horizontal || horiz()[st] === this.endingLocation.horizontal) {
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
  }
}
