// Activity 1

//Task 1:
var num1 = 20;
console.log(num1);

//Task 2:
let str = "Excaliber";
console.log(str);

// Activity 2

//Task 3:
const check = true;
console.log(check);

// Activity 3

//Task 4:
const a = true; //boolean
const b = 123; //number
const c = "Subrat"; //string
const d = [22, 19, 34]; //array object
const e = { name: "Subrat", age: 19 }; //object
const f = null; //object
const g = undefined; //undefined

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// Activity 4

//Task 5:
let num;
num = 20;
console.log(num);
num = "Subrat";
console.log(num);

// Activity 5

//Task 6:
const pin = 404;
//pin = 403; //ERROR, const variable cannot be changed
console.log(pin);

//Feature Request:
//Variable Types Console Log

const myName = "Titan";
const age = 22;
const residenceOfIndia = true;
const hobbies = ["football", "Badminton", "Comics", "Origami"];
const food = {
  Breakfast: ["Upma", "Poha", "Idli", "Dosa", "Roti & Sabji"],
  Lunch: ["Panner", "Chicken", "Sabji", "Soyabean"],
  Dinner: ["Panner", "Chicken", "Sabji", "Soyabean"],
};

console.log(myName + ": " + typeof myName);
console.log(age + ": " + typeof age);
console.log(residenceOfIndia + ": " + typeof residenceOfIndia);
console.log(hobbies + ": " + typeof hobbies);
console.log(`${food}: ${typeof food}`);

//Reassignment Demo
try {
  let color = "Blue";
  color = "Red";
  console.log(color);
} catch (e) {
  console.log("Error: " + e.message);
}

try {
  const Aadhaar = "1234 5678 9012";
  Aadhaar = "1234 5678 9013";
  console.log(Aadhaar);
} catch (e) {
  console.log("Error: " + e.message);
}
