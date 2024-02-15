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
  fetch("https://jsonplaceholder.typicode.com/users")
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

// fetchUsers()

// GET Method using async/await, try/catch
const fetchUsersData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    const emailContainer = document.getElementById("email-container")

    data.forEach((user) => {
      const emailParagraph = document.createElement("p")
      emailParagraph.textContent = user.email
      emailContainer.appendChild(emailParagraph)
    })
  } catch (error) {
    console.log(error)
  }
}

// fetchUsersData()

// POST Method
const postData = () => {
  const newPost = {
    userId: 11,
    title: "Post 11",
    body: "Random Post Body",
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

postData()
