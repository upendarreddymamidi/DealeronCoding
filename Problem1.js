  class Rover {  
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }   
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getDirection() {
    return this.direction;
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  setDirection(instruction) {
    const { direction } = this;
    if (direction === 'N') {
      this.direction = instruction === 'L' ? 'W' :'E';
    } else if (direction === 'S') {
      this.direction = instruction === 'L' ?'E' : 'W';
    } else if (direction === 'W') {
      this.direction = instruction === 'L' ? 'S' : 'N';
    } else if (direction ==='E') {
      this.direction = instruction === 'L' ? 'N' : 'S';
    }
  }
  move(area) {
    const { direction } = this;
    const areaX = area[0];
    const areaY = area[1];
    const YCoOrdinate = this.y >= 0 && this.y <= areaY;
    const XCoOrdinate = this.x >= 0 && this.x <= areaX;
    if (direction === 'N' && YCoOrdinate) {
      this.y++;
    } else if (direction === 'S' && YCoOrdinate) {
      this.y--;
    } else if (direction === 'W' && XCoOrdinate) {
      this.x--;
    } else if (direction ==='E' && XCoOrdinate) {
      this.x++;
    } else {
      console.error('Movement not done');
    }
  }
  toString() {
    return `${this.x} ${this.y} ${this.direction}`;
  }
}

function getcordinates(Plateauin,instructions) {
  const plateau = Plateauin.split(' ');  
  const finalCoordiantes = [];   
  instructions.forEach(value => {    
    const instruction = value.split(' ');    
    const x = instruction[0];    
    const y = instruction[1];    
    const point = instruction[2];    
    const steps = instruction[3].split('');     
    const rover = new Rover(x, y, point);    
    steps.forEach(step => {      
      if (step === 'L' || step === 'R') {
        rover.setDirection(step);      
      } else if (step === 'M') { 
        rover.move(plateau);      
      }    
    });     
    finalCoordiantes.push(rover.toString());  
  });    
  return finalCoordiantes;
}
//test data
var Plateauin="5 5"
var instructions=["1 2 N LMLMLMLMM", "3 3 E MMRMMRMRRM"]

console.log(getcordinates(Plateauin,instructions))