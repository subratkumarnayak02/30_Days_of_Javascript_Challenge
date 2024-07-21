// Activity 1: Array Creation and Access

// Task 1:

let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2:

let names = ["drake", "lorel", "phil", "terry"];
console.log(names[0]);
console.log(names[names.length - 1]);
//console.log(names[-1]); will not work, negative indexing works only in python

// Activity 2: Array Methods (Basic)

let nums = [1, 2, 3, 4, 5];

// Task 3:

nums.push(6); //add element to the end
console.log(nums);

// Task 4:

nums.pop(); //delete element from the end
console.log(nums);

// Task 5:

nums.unshift(0); //add element to the beginnning
console.log(nums);

// Task 6:

nums.shift(); //delete element from the beginning
console.log(nums);

// Activity 3: Array Methods (Intermediate)

let randomNums = [33, 25, 11, 67, 45, 8, 55, 80];

// Task 7: map method

let doubled = randomNums.map((num) => num * 2);
console.log(doubled);

// Task 8: filter method

let even = randomNums.filter((num) => num % 2 === 0);
console.log(even);

// Task 9: reduce method

let sum = randomNums.reduce((total, num) => total + num, 0);
console.log(sum);

// Activity 4: Array Iteration

let people = ["Raju", "Kalia", "Dholu", "Molu", "Jaggu", "Chhutki", "Bheem"];

// Task 10:

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// Task 11: forEach

people.forEach((person) => {
  console.log(person);
});

// Activity 5: Multi-dimentional Arrays

// Task 12: 2-dimentional array

let keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];

for (let i = 0; i < keypad.length; i++) {
  for (let j = 0; j < keypad[i].length; j++) {
    process.stdout.write(`${keypad[i][j]} `);
  }
  console.log();
}

// Task 13: access any specife element from the 2-d array

let chess = [
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],
];
console.log(chess[2][1]);
