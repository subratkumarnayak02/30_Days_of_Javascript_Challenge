// Activity 1: Selecting and Manipulating Elements

// Task 1:

let heading = document.getElementById("mainHeading");
heading.innerText = "DOM Manipulation";

// Task 2:

let listing = document.querySelector(".fruits");
listing.style.backgroundColor = "green";

// Activity 2: Creating and Appending Elements

// Task 3:

let div = document.createElement("div");
div.innerText = "Some More Content";
document.body.append(div);

// Task 4:

let li = document.createElement("li");
li.innerText = "Kiwi";
let ul = document.querySelector(".fruits");
ul.append(li);

// Activity 3: Remove Elements

// Task 5:

let subtodelete = document.querySelector("#subHeading");
subtodelete.remove();

// Task 6:

let select = document.querySelector(".fruits");
select.removeChild(select.lastElementChild);

// Activity 4: Modify Attributes and Classes

// Task 7:

let img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png?f=webp"
);

// Task 8:

let img2 = document.querySelector("img");
img2.classList.add("imgClass");
img2.classList.remove("imgClass");

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let para = document.querySelector("p");
  para.innerText = "Hello World";
});

// Task 10: Add a mouseover event listener to an element that changes its border color

let ele = document.querySelector(".fruits");
ele.addEventListener("mouseover", function () {
  ele.style.border = "2px solid red";
});
