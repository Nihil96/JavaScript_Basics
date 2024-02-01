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
let numArray = [11, 1, 3, 17, 13, 33, 87, 10]
let numArrayHasEvenNumber = numArray.some((num) => num % 2 === 0)
// console.log(numArrayHasEvenNumber)
