/* Object-oriented programming(OOP) in JavaScript */

// Function Constructor
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// Person.prototype.great = function () {
//   console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
// }

// making instance of Person
// const marko = new Person("Marko", 21)
// const jana = new Person("Jana", 31)

// console.log(marko.age)
// marko.great()
// jana.great()

// Clasess
class Person2 {
  constructor(name, surname, age) {
    this.name = name
    this.age = age
    this.surname = surname
  }

  great() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
  }

  printSurname() {
    console.log("My surname is", this.surname)
  }
}

// making instance of Person2
const sanja = new Person2("Sanja", "Petkovska", 35)
const mirko = new Person2("Mirko", 16)

mirko.great()
sanja.printSurname()

// Inheritance
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
  }
}

class Professor extends Person {
  constructor(name, age, subject) {
    super(name, age)
    this.subject = subject
  }

  teach() {
    console.log(`I teach ${this.subject}`)
  }
}

class Student {}

// Instances
const newPerson = new Person("Martin", 20)
const professor = new Professor("Mitko", 45, "Computer Science")

// newPerson.introduce()
professor.introduce()
professor.teach()
