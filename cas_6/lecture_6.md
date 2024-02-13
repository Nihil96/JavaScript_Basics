# Event Listeners

![Alt Text](https://coderpad.io/wp-content/uploads/2022/09/coderpad-blogspot-addeventlistener-adjustment-1024x683-1.png "Event Listeners in JS Example")

In JavaScript, event listeners allow you to respond to user interactions like clicks, keystrokes, and more. They are crucial for creating interactive and dynamic web pages.

**How to work with them?**

First, select the HTML element you want to attach an event listener to. You can do this using various DOM methods like: getElementById, getElementsByClassName, querySelector, etc.

Next, use the addEventListener method on the selected element. This method takes two arguments: the event type and a function (the event handler) to be executed when the event occurs.

The function provided(the event handler) as the second argument will be executed when the specified event occurs. This is where you write the code that responds to the event.

If needed, you can remove an event listener using the removeEventListener method. This is useful when you want to stop listening for events.

There are various event types like click, mouseover, keydown, submit, etc. Choose the appropriate event type for the interaction you want to respond to.

Example 1:

`<button id="myButton">Click Me</button>`

```
function clickHandler() {
  alert("Button clicked!")
  myButton.removeEventListener("click", clickHandler)
}

myButton.addEventListener("click", clickHandler)
```

Example 2:

`<h1>Funny Title</h1>`

```
const title = document.getElementsByTagName("h1")[0]

title.addEventListener("mouseenter", () => {
  title.style.fontSize = "45px"
  title.style.transition = "font-size 0.3s ease-in-out"
})
title.addEventListener("mouseleave", () => {
  title.style.fontSize = "25px"
  title.style.transition = "font-size 0.3s ease-in-out"
})
```

**Commonly used event types in JavaScript:**

- Click Event:
  Triggered when the user clicks an element.

- Mouseover and Mouseout Events:
  Fired when the mouse pointer enters or exits an element.

- Keydown, Keyup, and Keypress Events:
  Capturing keyboard interactions such as key presses, releases, and continuous key holding.

- Submit Event:
  Occurs when a form is submitted.

- Change Event:
  Fired when the value of an input element changes (e.g., in form fields, checkboxes, and select boxes).

- Focus and Blur Events:
  Triggered when an element gains or loses focus.

## preventDefault() and stopPropagation()

**preventDefault**

The preventDefault method is used to prevent the default behavior of an event from occurring. This is often used in conjunction with event handlers to control how events behave.

**How it works:**

Default Behaviors: Many HTML elements have default behaviors associated with certain events. For example, clicking on a link (<a>) navigates to a new page, submitting a form sends the data to the server, and pressing Enter in a form input submits the form.

Event Handling: When an event occurs, you can use preventDefault to stop the default behavior.

Example:

`<a href="https://google.com" id=”myLink”>Google</a>`

```
const linkElement = document.getElementById('myLink');

linkElement.addEventListener("click", (e) => {
e.preventDefault() // prevents the navigation to the google page
console.log("you clicked the link")
})
```

**stopPropagation**

The stopPropagation method is used to stop the propagation of an event through the DOM tree. This means that the event will not bubble up to parent elements or trigger event listeners on ancestors.

**How it works:**

**Event Bubbling:**

When an event occurs on an element, it "bubbles up" through its ancestor elements, triggering event listeners on each one.

**Event Handling**
If you want to prevent an event from reaching parent elements, you can use stopPropagation.

Example

```
<div class="parent">
    Parent
    <div class="child">Child</div>
</div>
```

```
const parentElement = document.querySelector(".parent")
const childElement = document.querySelector(".child")

parentElement.addEventListener("click", (e) => {
  console.log("you clicked the parent element")
})

childElement.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("you clicked the child element")
})
```

## Retrieving Data from Input Fields

Input fields in HTML allow users to enter various types of data, such as text, numbers, and more. To access and retrieve the data entered by a user, you can use JavaScript.

**How it works:**

Accessing Input Elements: Use the getElementById or querySelector methods to get a reference to the input element.

**Retrieving Value:**

To retrieve the value entered by the user, you can use the value property of the input element.

Example:

```
<input type="text" id="myInput" placeholder="Enter your name"/>
<button id="submitButton">Submit</button>
```

```
const submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function () {
  const inputElement = document.getElementById("myInput")
  const inputValue = inputElement.value
  alert(`Hello, ${inputValue}!`)
})
```
