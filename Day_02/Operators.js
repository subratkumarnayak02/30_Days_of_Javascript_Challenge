// Activity 1: Arithmetic Operations

//Task 1-5:
let a = 10;
let b = 5;
let result = a + b;
console.log(`${a} + ${b} = ${result}`);
result = a - b;
console.log(`${a} - ${b} = ${result}`);
result = a * b;
console.log(`${a} * ${b} = ${result}`);
result = a / b;
console.log(`${a} / ${b} = ${result}`);
result = a % b;
console.log(`${a} % ${b} = ${result}`);

// Activity 2: Assignment Operations

// Task 6:
let num1 = 80;
let num2 = 20;

num1 += num2;
console.log(num1);

// Task 7:
let num3 = 50;
let num4 = 20;

num3 -= num4;
console.log(num3);

//Activity 3: Comparison Operators

// Task 8:
let num5 = 10;
let num6 = 20;

console.log(`${num5} > ${num6} : ${num5 > num6}`);
console.log(`${num5} < ${num6} : ${num5 < num6}`);

// Task 9:
let num7 = 50;
let num8 = 50;
console.log(`${num7} >= ${num8} : ${num7 >= num8}`);
console.log(`${num7} <= ${num8} : ${num7 <= num8}`);

// Task 10:
let num9 = 200;
let num10 = "200";
console.log(`${num9} == ${num10} : ${num9 == num10}`);
console.log(`${num9} === ${num10} : ${num9 === num10}`);

// Activity 4: Logical Operators

//Task 11-13:

let num11 = 30;
let num12 = 40;

let And_condition = num11 > num12 && num11 == 30;
console.log(And_condition);

let Or_condition = num11 > num12 || num12 == 40;
console.log(Or_condition);

let Negate = !(num11 > num12);
console.log(Negate);

// Activity 5: Ternary Operator

// Task 14:

let num13 = 40;
result = "";

num13 > 0 ? (result = "positive") : (result = "negative");
console.log(result);
