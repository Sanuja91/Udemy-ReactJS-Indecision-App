class Person {
  // Runs constructor on creation of class
  // Can have defaults like Annoymous
  constructor(name = "Annoymous", age = 0) {
    ;(this.name = name), (this.age = age)
  }

  getGreeting() {
    return `Hi! I am ${this.name}!`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old!`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    // super calls the parent function
    super(name, age)
    this.major = major
  }
  hasMajor() {
    // !! flips twice like how ! flips once
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription()
    if (this.hasMajor())
      return `${description} ${this.name} is majoring in ${this.major}`
    else return description
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  hasHomeLocation() {
    return !!this.homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting()
    if (this.hasHomeLocation(0))
      return `${greeting} I'm visiting from ${this.homeLocation}`
    else return greeting
  }
}

const me = new Traveller("Sanuja Cooray", 26, "Colombo")
console.log(me.getGreeting())

const other = new Traveller()
console.log(other.getGreeting())
