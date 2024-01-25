// Conditions and Functions in JS

// if statement

if (false) {
  console.log("Hello World!")
}

// console.log("Outside of the if condition")

let num = 20

// else
// if (num > 21) {
//   console.log("The number is greater then 12")
// } else {
//   console.log("The number is smaller then 20")
// }

// else-if
let randomNum = 3

if (randomNum > 5) {
  console.log("The number is greater than 5")
} else if (randomNum === 5) {
  console.log("The number is equal to 5")
} else {
  console.log("The number is less than 5")
}

// Switch Statement
let day = "Friday"

switch (day) {
  case "Monday":
    console.log("It's the start of the week!")
    break
  case "Friday":
    console.log("It's almost the weekend!")
    break
  default:
    console.log("It's another day of the week!")
}

// console.log("another log")

// Functions
// let result = 90 + 10
// let result2 = 10 + 10

// definition or declaration of a function
function addNumber(num1, num2) {
  let sum = num1 + num2
  return sum
}

//invoke of the function
console.log(addNumber(5, 15))

// simple version
// function printMyNumber(number) {
//   if (number > 100) {
//     console.log("Ovoj broj e poglem od 100")
//   } else {
//     console.log("Ovoj broj e pomal od 100")
//   }
// }

// printMyNumber(100)

// more specific version
function printMyNumber(number) {
  if (typeof number === "number") {
    if (number > 100) {
      console.log("Ovoj broj e poglem od 100")
    } else {
      console.log("Ovoj broj e pomal od 100")
    }
  } else {
    console.log("Ova ne e broj tuku: ", typeof number)
  }
}

printMyNumber(90)
