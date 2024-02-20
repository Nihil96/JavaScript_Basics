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

// This class inherits from the class Person
class Professor extends Person {
  constructor(name, age, subject) {
    super(name, age)
    this.subject = subject
  }

  teach() {
    console.log(`I teach ${this.subject}`)
  }
}

// This class inherits from the class Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  study() {
    console.log(`I am styding ${this.major}`)
  }
}

// Instances
const newPerson = new Person("Martin", 20)
const professor = new Professor("Mitko", 45, "Computer Science")
const student = new Student("Hristijan", 35, "Backend developmet")

// professor.introduce()
// professor.teach()
// student.study()

// Static members, setters, getters and private variables
class Circle {
  // static property
  static PI = 3.14

  // private property
  #radius

  constructor(radius) {
    this.#radius = radius
  }

  // getter for the radius
  get getRadis() {
    return this.#radius
  }

  // setter for the radius
  set setRadis(newRadis) {
    if (newRadis > 0) {
      this.#radius = newRadis
    } else {
      console.log("The radius must be a positive number!")
    }
  }

  // method
  calculateArea() {
    return Circle.PI * this.#radius ** 2
  }
}

const circleOne = new Circle(30)
console.log(circleOne.getRadis)

circleOne.setRadis = 20 // changing the value of the radius
console.log(circleOne.getRadis)

console.log(Circle.PI) // accessing static property

const circleTwo = new Circle(10)
console.log(circleTwo.calculateArea())
