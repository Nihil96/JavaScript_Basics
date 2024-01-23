// Getting Started With JavaScript
console.log("Hristijan Kostadinoski")

// Data Types

// Primitive data types
var myNumber = 100
var myName = "Hristijan"
var myBool = false
var myUndefined = undefined
var myNullType = null

// Reference data types

// Obejct
var myObject = { car: "Mercedes", model: "Benz" }
console.log(myObject.car)

// Array
var myArray = [1, "name", true, false, [], {}, null, undefined]
console.log(myArray)

// kreiranje na promenlivi
var myVariable = 10

// var, let, const
var age = 17
let age2 = 17
const age3 = 17
const PI = 3.14

age2 = 27
// age3 = 34 - this will throw an error
console.log(age3)

let name = "Marko"
let surname = "Petkovski"
let fullName = name + " " + surname

console.log(fullName)

// Mathematical operations

// Addition
let sum = 10 + 10
console.log(sum)

// Subtraction
let difference = 100 - 30
let num1 = 80
let num2 = 42
// console.log(num1 + num2)

// Multiplication
let product = 1 * 15

// Division
let div = 10 / 5

// Modulus
let reminder = 15 % 4
console.log(reminder)

let complexOperation = (30 + 22) / 7 - 80 * 8

// Boolean Algebra

// Logical Operators:

// && (Logical AND)
let x = true
let y = true
let z = false
let result = x && y && z
console.log(result) // this will return false

// || (Logical OR)
let a = true
let b = false
let result2 = a || b
// console.log(result2)

// ! (Logical NOT):

let c = false
console.log(!c)

// Comparison Operators
// == (Equal to)

let number1 = 5
let number2 = 51
// console.log(number1 <= number2)

// ==, ===
let num5 = 20
let num6 = 20
console.log(num5 === num6)

// typeof operator

let randomNum = 87
let randomString = "Hello World!"
let randomBool = true

console.log(typeof randomBool)
