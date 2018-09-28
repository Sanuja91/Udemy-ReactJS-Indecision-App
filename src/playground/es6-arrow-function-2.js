// arguments object - no longer bound with arrow functions
function add(a, b) {
  console.log(arguments)
  return a + b
}

const addArrow = (a, b) => a + b

console.log(add(55, 1))

// this keyword - no longer bound
const user = {
  name: "Sanuja",
  cities: ["Colombo", "America", "China"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city)
  }
}

console.log(user.printPlacesLived())

// Challenge area
const multiplier ={
  numbers:[2,5,6,7,8],
  multiplyBy:10,
  multiply(){
    return this.numbers.map(number=> number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
