// Build-in High Order Functions in JS

// function printName(func) {
//   return func()
// }

// printName(() => console.log("hristijan"))

// forEach()
let fruits = ["apple", "banana", "cherry", "mango", "lemon"]

// fruits.forEach(function (fruit) {
//   console.log(fruit)
// })

// map()
let numbersArray = [1, 2, 3, 4, 5, 6, 7]
let newNumbersArray = numbersArray.map((number) => number + 1)
// console.log(newNumbersArray)
// console.log(numbersArray)

// sort()
let randomArray = [10, 13, 1, 4, 11, 45, 93]
let sortedArray = randomArray.sort((a, b) => a - b)
// console.log(sortedArray)

// reduce()
let sumOfRandomNumber = randomArray.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber,
  0
)
// console.log(sumOfRandomNumber)

// filter()
let evenNumbers = [10, 20, 40, 60, 80, 100, 200, 240]
let numbersBiggerThenSixty = evenNumbers.filter((num) => num > 60)
// console.log(numbersBiggerThenSixty)

// find()
let oddNumbers = [1, 3, 5, 7, 9, 11, 13]
let firstNumberBiggerThenSeven = oddNumbers.find((num) => num > 7)
// console.log(firstNumberBiggerThenSeven)

// some()
let numArray = [11, 1, 3, 18, 13, 33, 87, 10]
let numArrayHasEvenNumber = numArray.some((num) => num % 2 === 0)
// console.log(numArrayHasEvenNumber)

const isEvenNumber = (num) => {
  return num % 2 === 0
}

// chaining high-order functions
let randomEvenNumbers = numArray.filter(isEvenNumber).every(isEvenNumber)
// console.log(randomEvenNumbers)

// Spread operator, Ternary operator, Destructuring

// spread operator
let originalArray = [10, 20, 30, 40, 50]
let copiedArray = [...originalArray]
// console.log(originalArray, copiedArray)

let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]
let combinedArray = array1.concat(array2) // one way

let combinedArray2 = [...array1, ...array2] // second way
//console.log(combinedArray, combinedArray2)

function sumOfThreeNumbers(a, b, c) {
  return a + b + c
}

let arrayOfThreeNumbers = [10, 20, 30]
const result = sumOfThreeNumbers(...arrayOfThreeNumbers)
// console.log(result)

// console.log([...["a", "b", "c"], , true, {}, ...[1, 2, 3]])

// ternary operator
let checkNum = (num) => {
  num % 2 === 0 ? console.log("Even") : console.log("Odd")

  // this is the same
  //   if (num % 2 === 0) {
  //     console.log("Even")
  //   } else {
  //     console.log("Odd")
  //   }
}
// checkNum(29)

// destructuring
let [
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber,
  ,
  sixthNumber,
  ,
  someNumber,
] = [1, 2, 3, 10, 9, 82]
console.log(someNumber)

const randomPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
}

let name = randomPerson.firstName // one way
console.log(name)

const { firstName: name2, age } = randomPerson
console.log(name2, age)
