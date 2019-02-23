
class Driver {
    constructor(name, startDate) {
        this.name = name
        this.startDate = new Date(startDate)
    }
}

Driver.prototype.yearsExperienceFromBeginningOf = function(year) {
   return year - this.startDate.getFullYear()
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }
}

Route.prototype.blocksTravelled = function() {
    let verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical
    let horizontalBlocks =  eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    return Math.abs((verticalBlocks) + (horizontalBlocks))
}
   
Route.prototype.estimatedTime = function(peak) {
    if(peak) {
        return this.blocksTravelled() / 2
    } else {
        return this.blocksTravelled() / 3
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