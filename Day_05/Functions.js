// Activity 1: Function Declaration

// Task 1:

function evenOdd(num) {
  if (num % 2 == 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

evenOdd(100);

// Task 2:

function squareOfnumber(num) {
  return num ** 2;
}

console.log(squareOfnumber(5));

// Activity 2: Function Expression

// Task 3:

const maxNum = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(maxNum(10, 50));

// Task 4:

const concatStrings = function (str1, str2) {
  return str1 + str2;
};
//or
//function concatStrings(str1, str2) {
//    return str1 + " " + str2;
//};

console.log(concatStrings("car", "pet"));

// Activity 3: Arrow Function

// Task 5:

const sum = (num1, num2) => num1 + num2;

console.log(sum(999, 1));

// Task 6:

const check = (str, ch) => (str.includes(ch) ? true : false);

console.log(check("Hello World!", "H"));

//Activity 4: Function Parameters and Default Values

// Task 7:

const product = (num1, num2 = 1) => num1 * num2;

console.log(product(10, 20));
console.log(product(55));

// Task 8:

const greeting = (name, age = 16) => {
  return `Happy Birthday ${name}, on your ${age}th birthday!!! `;
};

console.log(greeting("Zulia", 23));

// Activity 5: Higher-Order Functions

// Task 9:

function star() {
  console.log("*");
}

const printStar = (star, num) => {
  for (let i = 0; i < num; i++) {
    star();
  }
};

printStar(star, 5);

// Task 10:

const square = (doubledNum) => doubledNum ** 2;

const double = (num) => num + num;

const doubleSquare = (num) => square(double(num));

console.log(doubleSquare(4));
