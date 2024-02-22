import { PI, add } from "./math.js"
import calculator from "./calculator.js"

// Example of localStorage
localStorage.setItem("username", "petko_petkovski")
localStorage.setItem("theme", "dark")

const theme = localStorage.getItem("theme")
console.log(theme)

// Small exercise
// const body = document.getElementsByTagName("body")[0]

// if (theme === "light") {
//   body.style.background = "white"
// } else {
//   body.style.background = "black"
// }

// Example of sessionStorage
sessionStorage.setItem("tempData", "some_value")
const tempData = sessionStorage.getItem("tempData")

console.log(tempData)

console.log("print the value of PI", PI)

console.log(add(10, 20))

console.log(calculator.subtract(90, 78))
