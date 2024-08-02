// Activity 1: Basic Event Handling

// Task 1:

const button = document.querySelector("#btn");
const paragraph = document.querySelector("#para");
btn.addEventListener("click", () => {
  paragraph.textContent = "Text changed";
});

// Task 2:

const image = document.querySelector("#task1img");
const imageContainer = document.querySelector("#imgContainer");
imageContainer.addEventListener("dblclick", () => {
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});

// Activity 2: Mouse Events

// Task 3:

const hoverbtn = document.querySelector("#hoverbtn");
hoverbtn.addEventListener("mouseover", () => {
  hoverbtn.style.backgroundColor = "blue";
  hoverbtn.style.color = "white";
  hoverbtn.innerHTML = "Thank You";
});

// Task 4:

hoverbtn.addEventListener("mouseout", () => {
  hoverbtn.style.backgroundColor = "white";
  hoverbtn.style.color = "black";
  hoverbtn.innerHTML = "Hover Me";
});

// Activity 3: Keyboard Events

// Task 5:

const keydown = document.querySelector("#keydown");
keydown.addEventListener("keydown", (event) => {
  console.log(event.key);
});

// Task 6:

const keypressPara = document.querySelector("#keyPara");
const keyup = document.querySelector("#keyup");
keyup.addEventListener("keyup", (event) => {
  keypressPara.textContent = event.target.value;
});

// Activity 4: Form Events

// Task 7:

const form1 = document.querySelector("#form1");
form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#input");
  console.log(input.value);
});

// Task 8:

const form2 = document.querySelector("#form2");
const genderPara = document.querySelector("#genderPara");
form2.addEventListener("change", (event) => {
  event.preventDefault();
  const dropdown = document.querySelector("#dropdown");
  genderPara.innerHTML = `Your gender is ${dropdown.value}`;
});

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.querySelector(".fruits");
list.addEventListener("click", (event) => {
  console.log(event.target.textContent);
});

// Task 10:

const customUI = document.getElementById("task10");

function responding() {
  console.log("Responding");
}

for (var i = 1; i <= 5; i++) {
  const newElement = document.createElement("li");
  newElement.textContent = "This is line " + i;
  customUI.appendChild(newElement);
}
customUI.addEventListener("click", responding);

document.body.appendChild(customUI);
