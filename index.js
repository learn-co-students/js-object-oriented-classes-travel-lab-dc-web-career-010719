let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
class Driver{
  constructor(name, startDate){
    this.name = name
     this.startDate = new Date( startDate );
  }


  yearsExperienceFromBeginningOf(endDate){
    return endDate-this.startDate.getUTCFullYear()
  }

}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation

  }
  blocksTravelled(){
    if (this.endingLocation.horizontal == this.beginningLocation.horizontal){
      return this.endingLocation.vertical - this.beginningLocation.vertical
    }else if (this.endingLocation.vertical == this.beginningLocation.vertical) {
      let x = eastWest.indexOf(this.endingLocation.horizontal);
      let x1 = eastWest.indexOf(this.beginningLocation.horizontal);
      return Math.abs(x1-x)
      console.log("damn",this.endingLocation,this.beginningLocation );
    }else{
      let z = this.endingLocation.vertical - this.beginningLocation.vertical
      let x = eastWest.indexOf(this.endingLocation.horizontal);
      let x1 = eastWest.indexOf(this.beginningLocation.horizontal);
      return Math.abs(x1-x) +z
      // console.log("wow");
    }
    // console.log(this.endingLocation.vertical,this.beginningLocation.vertical );
    // console.log(this.endingLocation,this.beginningLocation );

    // return this.endingLocation.vertical - this.beginningLocation.vertical
  }
  estimatedTime(peak){
    if(peak){
      return Math.floor(this.blocksTravelled() / 2)
    }else{
      return Math.ceil(this.blocksTravelled() / 3)
    }
    // debugger
  }


}
