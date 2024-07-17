// Day 3: Control Structures

// Activity 1: If-Else Statements

//Task 1:

let a = -10;
if (a > 0) {
  console.log("a is positive");
} else if (a < 0) {
  console.log("a is negative");
} else {
  console.log("a is zero");
}

//Task 2:

let age = 25;
if (age >= 18) {
  console.log("eligible for voting");
} else {
  console.log("not eligible for voting");
}

// Activity 2: Nested If-Else Statements

// Task 3:

let x = 90;
let y = 200;
let z = 50;
if (x > y) {
  if (x > z) {
    console.log("x is greatest");
  } else {
    console.log("z is greatest");
  }
} else if (y > z) {
  console.log("y is greatest");
} else {
  console.log("z is greatest");
}

// Activity 3: Switch Case

// Task 4:

let Day_number = 4;
switch (Day_number) {
  case 1:
    console.log("Today is Monday");
    break;

  case 2:
    console.log("Today is Tuesday");
    break;

  case 3:
    console.log("Today is Wednesday");
    break;

  case 4:
    console.log("Today is Thursday");
    break;

  case 5:
    console.log("Today is Friday");
    break;

  case 6:
    console.log("Today is Saturday");
    break;

  case 7:
    console.log("Today is Sunday!!!");
    break;

  default:
    console.log("Please Enter a valid date...");
    break;
}

// Task 5:

const score = 50;

switch (true) {
  case score <= 100 && score >= 80:
    console.log("Grade: A");
    break;

  case score < 80 && score >= 70:
    console.log("Grade: B");
    break;

  case score < 70 && score >= 60:
    console.log("Grade: C");
    break;

  case score < 60 && score >= 50:
    console.log("Grade: D");
    break;

  case score < 50 && score >= 0:
    console.log("Grade: F");
    break;

  default:
    console.log("Please enter a valid score...");
    break;
}

//Activity 4: Conditional (Ternary) Operator

//Task 6:

let num = 478;
let result = num % 2 == 0 ? "Even number" : "Odd number";
console.log(num + " is an " + result);

//Activity 5: Combining Conditions

//Task 7:

let year = 2024;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + "is not a leap year");
}
