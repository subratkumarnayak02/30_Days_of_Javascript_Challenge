// Activity 1: Template Literals

// Task 1:

let myName = "Subrat";
let myAge = 22;
console.log(`My name is ${myName} and I am ${myAge} years old.`);

// Task 2:

console.log(`List:
1. Apple
2. Banana
3. Orange
4. Grape
5. Mango`);

// Activity 2: Destructuring

// Task 3:

let arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arr;
console.log(a, b, c, d, e);

// Task 4:

let book = {
  title: "Beauty And the Beast",
  author: "William Shakespeare",
};
let { title, author } = book;
console.log(title, ", By", author);

// Activity 3: Spread and Rest Operators

// Task 5:

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7, 8, 9, 10];
console.log(arr2);

// Task 6:

function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(add(2, 4, 6));
console.log(add(100, 200, 300, 400, 500));

// Activity 5: Default Parameters

// Task 7:

function calc(num1, num2 = 1) {
  return num1 * num2;
}

console.log(calc(10));
console.log(calc(10, 5));

// Activity 5: Enhanced Object Literals

// Task 8:

const person = {
  name: "Suzan",
  age: 23,

  // Method shorthand
  greet() {
    return `Hello, my name is ${this.name}.`;
  },

  // Computed property name
  ["isAdult"]: function () {
    return this.age >= 18;
  },

  // Dynamic Property
  getProfile() {
    return {
      name: this.name,
      age: this.age,
      isAdult: this.isAdult(),
    };
  },
};
console.log(person.greet());
console.log(person.isAdult());
console.log(person.getProfile());

// Task 9:

// Define variables to use as computed property names
const key1 = "name";
const key2 = "age";

// Create an object with computed property names
const person2 = {
  [key1]: "Suzan",
  [key2]: 23,

  // Adding a method with a computed property name
  ["isAdult"]() {
    return this.age >= 18;
  },
};
console.log(person2);
console.log(person2.isAdult());
