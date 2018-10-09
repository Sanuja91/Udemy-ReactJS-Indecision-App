import React from "react"
import ReactDOM from "react-dom"
import IndecisionApp from "./components/IndecisionApp"

class OldSyntax {
  constructor() {
    this.name = "Mike"
    this.getGreeting = this.getGreeting.bind(this)
 }
 getGreeting(){
     return `Hi. My name is ${this.name}`
 }
}

const oldSyntax = new OldSyntax()
console.log(oldSyntax.getGreeting())

// Can't do this

// ----------

class NewSyntax {
  name = "Jen"
  getGreeting =()=>{
    return `Hi. My name is ${this.name}` 
  }
}

const newSyntax = new NewSyntax()
console.log(newSyntax.getGreeting())

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))
