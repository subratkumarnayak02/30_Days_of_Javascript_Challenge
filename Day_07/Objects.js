// Activity 1: Object Creation and Access

// Task 1:

let book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1997,
};

console.log(book);

// Task 2:

console.log(`Title: ${book.title} \nAuthor: ${book.author}`);

// Activity 2: Object Methods

// Task 3:

let bookDetails = {
  title: "The Adventures of Tintin",
  author: "Hergé",
  year: 1929,
  details: () => {
    return `Title: ${bookDetails.title} \nAuthor: ${bookDetails.author}`; //this keyword doesn't work here because it's an arrow function
  },
};

console.log(bookDetails.details());

// Task 4:

let anotherbook = {
  title: "A Game of Thrones",
  author: "George R.R. Martin",
  year: 1996,
  updateYear(year) {
    this.year = year;
  },
};

anotherbook.updateYear(1991);
console.log(anotherbook);

// Activity 3: Nested Objects

// Task 5:

let library = {
  name: "Western Block Library",
  books: [
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      year: 1997,
    },
    {
      title: "A Game of Thrones",
      author: "George R.R. Martin",
      year: 1996,
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
    },
  ],
};

console.log(library);

// Task 6:

console.log(`Name of the library: ${library.name}`);
console.log("Name of books in library: ");
for (const item of library.books) {
  console.log("-> " + item.title);
}

// Activity 4: The this Keyword

// Task 7:

let otherBook = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  year: 1954,
  display() {
    return `Title: ${this.title} \t Year: ${this.year}`;
  },
};

console.log(otherBook.display());

// Activity 5: Object Iteration

// Task 8:

for (const key in otherBook) {
  console.log(`${key} :\t ${otherBook[key]}`);
}

// Task 9: use Object.keys and Object.values

for (const key of Object.keys(otherBook)) {
  console.log(key);
}

for (const value of Object.values(otherBook)) {
  console.log(value);
}
