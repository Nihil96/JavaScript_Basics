// Synchronous and Asynchronous execution of code in JavaScript

// Synchronous code in JS
// console.log("Task 1")

// for (let i = 0; i < 1000; i++) {
//   console.log("Some other tasks", i)
// }

// console.log("Task 3")

// Asynchronous code in JS

// callbacks - funkcija koja sto se prakja kako argument vo druga funkcija

// Example

const printTask = () => console.log("Executing Task 2")

// console.log("Executing Task 1")

// setTimeout(() => console.log("Executing Task 2"), 2000)
// setTimeout(printTask, 1000) // printTask is callback function

// console.log("Executing Task 3")

// setInterval
let counter = 0

function incrementCounter() {
  counter++
  console.log(`Counter is: ${counter}`)
}

//setInterval(incrementCounter, 2000)

const timerId = setTimeout(() => {
  console.log("This will never be printed")
}, 3000)

// Clear the timer before it executes
clearTimeout(timerId)

// Promises

// pending - initial state, neither fulfielld nor rejected
// fulfielld - meaning the operation completed successfuly
// rejected - meaning the operation failed

// creating a promise
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Success!")
  } else {
    reject("Error!")
  }
})

// myPromise
//   .then((result) => {
//     console.log(result) // Output: Success!
//   })
//   .catch((error) => {
//     console.log(error) // Output: Error!
//   })

// Chaining Promises
const promise1 = new Promise((resolve) => resolve(1))
const promise2 = new Promise((resolve) => resolve(2))

promise1.then((result) => result + 1).then((result) => console.log(result)) // Output: 1
promise2.then((res) => res * 2).then((result) => console.log(result)) // Output: 4
