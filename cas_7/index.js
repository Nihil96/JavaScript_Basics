// JSON

const json = {
  name: "John",
  age: 32,
  isStudent: false,
}

// console.log(json)

// JSON.stringify()
const jsonString = JSON.stringify(json)
// console.log(jsonString)

// JSON.parse()
const parsedData = JSON.parse(jsonString)
// console.log(parsedData)

// FETCH Method
function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/userss")
    .then((response) => response.json())
    .then((data) => {
      const emailContainer = document.getElementById("email-container")

      data.forEach((user) => {
        const emailParagraph = document.createElement("p")
        emailParagraph.textContent = user.email
        emailContainer.appendChild(emailParagraph)
      })
    })
    .catch((error) => console.log(error))
}

fetchUsers()
