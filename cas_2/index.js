// Complex Data Types and Loops in JavaScript

// Arrays[]

let fruits = ["apple", "banana", "cherry"]
// apple - index 0
// banana - index 1
// cherry - index 2
console.log(fruits[0])
console.log(fruits[2]) // cherry
console.log("This array has length of:", fruits.length)

// modifying elements in the array
fruits[2] = "grape"
// console.log(fruits)

// adding elements:
fruits.push("orange")
// console.log(fruits)

// remove the last element:
let removedLastFruit = fruits.pop()
// console.log(removedLastFruit)

// remove the first element
let removeFirstElement = fruits.shift()
// console.log(removeFirstElement)

// unshift
let animals = ["dog", "cat"]
// console.log(animals[0]) // dog
animals.unshift("donkey")
// console.log(animals[0]) // donkey

// concat
let musicZanr1 = ["rap", "pop"]
let musicZanr2 = ["metal", "rock"]
let allMusicZanrs = musicZanr1.concat(musicZanr2)
// console.log(allMusicZanrs)

// reverse
let numbers = [1, 2, 3, 4, 5]
// console.log(numbers.reverse())

// Objects
let person = {
  name: "Hristijan",
  age: 27,
  isStudent: false,
}

// accessing properties
console.log(person.age)

// modifying properties
person.name = "Marko"
// console.log(person)

// adding new properties
person.email = "marko@gmail.com"
console.log(person)

// nested objects
let student = {
  name: "Sonja",
  grades: [76, 80, 100],
  address: {
    city: "Skopje",
    zipCode: "1000",
  },
}
console.log(student.address.city)

// accessing properties using bracket notation
console.log(student["grades"][1]) // prints 80
