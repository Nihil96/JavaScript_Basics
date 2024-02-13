// Event Listeners

const myButton = document.getElementById("my-button")

const clickButton = () => {
  alert("The button is clicked")
  // myButton.removeEventListener("click", clickButton) // removing the event listener
}

myButton.addEventListener("click", clickButton)

const funnyTitle = document.querySelector("h1")

funnyTitle.addEventListener("mouseenter", () => {
  funnyTitle.style.fontSize = "45px"
  funnyTitle.style.transition = "font-size 0.3s ease-in-out"
})

funnyTitle.addEventListener("mouseleave", () => {
  funnyTitle.style.fontSize = "25px"
})

// preventDefault() and stopPropagation()

const googleLink = document.getElementsByTagName("a")[0]

googleLink.addEventListener("click", (event) => {
  event.preventDefault()
  console.log(event)
  googleLink.style.color = "green"
})

const parent = document.getElementsByClassName("parent")[0]
const child = document.getElementsByClassName("child")[0]

parent.addEventListener("click", () => {
  console.log("You clicked the PARENT element")
})

child.addEventListener("click", (event) => {
  event.stopPropagation()
  console.log("You clicked thr CHILD element")
})

const submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", () => {
  const inputElement = document.getElementById("myInput")
  const inputValue = inputElement.value
  alert(`Hello ${inputValue}`)
})

const bodyElement = document.getElementsByTagName("body")[0]

bodyElement.addEventListener("keydown", (event) => {
  if (event.key === "y") {
    bodyElement.style.backgroundColor = "yellow"
  } else if (event.key === "r") {
    bodyElement.style.backgroundColor = "red"
  }
})
