const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Destructuring Object and Array in JS
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const book = getBook(3);
// const title = book.title;
// const author = book.author;
// const { titles, author } = book;
// console.log(titles, author);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
book;
console.log(title, author, genres);
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Destructuring practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Rest/Spread operation practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Spread Operator with Array
const [, , ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);
//const newGenres = [genres, "epic fentasy"];
const newGenres = [...genres, "epic fentasy"];
newGenres;
// Spread operator with Object
// New Property add into the book object
const bookWithNewProperty = { ...book, updatedMovieDate: "2001-06-12" };
bookWithNewProperty;
// Overwriting existing property
const updatedBookWithNewGenres = { ...book, genres: newGenres };
console.log(updatedBookWithNewGenres);
const uBook = { ...book, pages: 300 };
console.log(uBook);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Rest/Spread operation practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Template Literals operation practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;
console.log(summary);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Template Literals operation practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Ternaries instead of if/else statement practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const result = pages > 1000 ? "Over a thousand" : "Less than a thousand";
console.log(result);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Ternaries instead of if/else statement practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Arrow function practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Tradition way to write a function
function getYear(str) {
  return str.split("-")[0];
}
const year = (str) => str.split("-")[0]; // No need to write return for single line of code function
// console.log(getYear(publicationDate));
console.log(year(publicationDate));
// With return statemnt in Arrow function.
const getSummary = () => {
  return `${title}, a ${pages}-page long book, was written by ${author} and published in ${
    publicationDate.split("-")[0]
  }`;
};
console.log(getSummary());
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Arrow function practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Short-circuiting and logical operators practice &&,||,??
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(true && "Some String"); // Returns 'Some String'
console.log(false && "Some String"); // Returns false
console.log(hasMovieAdaptation && "This book has a movie");
// Falsy value: 0, '', null, undefined
console.log("Jani" && "Sameer");
console.log(0 && "Sameer");

console.log(true || "Sameer");
console.log(0 || "Sameer");

const spanishTranslated = book.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranslated);

// console.log(book.reviews.librarything.reviewsCount);
// const wrongCount = book.reviews.librarything.reviewsCount || "No data";
// console.log(wrongCount);

// const count = book.reviews.librarything.reviewsCount ?? "No data";
// console.log(count); // Returns 0 if value is 0 instead of 'No data'
// Note: ?? operator will call second execution if there is undefined or null value there but not for empty string and 0 value
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Short-circuiting and logical operators practice &&,||,??
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Optional Chaining practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getTotalReviewCount(book) {
  const goodreads = book?.reviews?.goodreads?.reviewsCount ?? 0;
  //const librarything = book.reviews.librarything.reviewsCount;
  const librarything = book?.reviews?.librarything?.reviewsCount ?? 0; // ?. which is used for optional chaining.
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Optional Chaining practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Array Map Method practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const output = [1, 2, 3, 4, 5].map((e) => e * 2);
console.log(output); // output=> [2,4,6,8,10]
const books = getBooks();
const titles = books.map((book) => book.title); // Create new array with all the title values.
console.log(titles); // Array with all the book titles
const essentialDatas = books.map((book) => ({
  title: book.title,
  author: book.author,
  totalReviewCount: getTotalReviewCount(book),
}));
console.log(essentialDatas);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Array Map Method practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Array Filter Method practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const divisionBy4Output = output.filter((v) => v % 4 == 0);
console.log(divisionBy4Output); // Returns: [4,8]

const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);
const longBooksWithMovieAdaptations = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovieAdaptations);

const adventureBooksTitle = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooksTitle);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Array Filter Method practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Array Reduce Method practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Note: Here, acc which is accumelator which is start with 0 then every pages count will be added with accumetor value and returns final counts
const totalPagesOfAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(totalPagesOfAllBooks);
const totalGenraOfTotalBooks = books.reduce(
  (genresCount, book) => genresCount + book.genres.length,
  0
);
console.log(totalGenraOfTotalBooks);
// Total pages of spanish translator books only.
const totalPagesOfSpanishBooks = books.reduce(
  (acc, book) => acc + (book?.translations?.spanish ? book.pages : 0),
  0
);
console.log(totalPagesOfSpanishBooks);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Array Reduce Method practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Array Sort practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const arr = [3, 1, 2, 5, 7, 6];
// const sorted = arr.sort((a, b) => a - b); // Here, original array will also sorted hence sort function is muted the array.
const sorted = arr.slice().sort((a, b) => a - b); // Here, it will create copy of original array then sorting hence, original array not get updation.
console.log(sorted);
console.log(arr);

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

const sortByTitle = books
  .slice()
  .sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
  .map((book) => book.title);
console.log(sortByTitle);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Array Sort practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Work with Immutable Array practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Porter and the chamber of secrets",
  author: "J. K. Rowling",
};
const booksNewArr = [...books, newBook];
console.log(booksNewArr.length);

// 2) Delete a book from the array
const booksAfterDeleted = booksNewArr.filter((book) => book.id !== 3);
console.log(booksAfterDeleted.length);

// 3) Update the book object in the array.
const booksAfterUpdate = booksAfterDeleted.map((book) =>
  book.id === 6
    ? {
        ...book,
        title: "Harry Porter and the chamber of secrets Chapter 4",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
      }
    : book
);
console.log(booksAfterUpdate);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Work with Immutable Array practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Async JS Promises practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((result) => result.json())
  .then((data) => console.log(data));

console.log("Sameer");
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Async JS Promises practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Asynchronous JS Async/Await practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  console.log("Jani");
  return data;
};
getTodos().then((data) => console.log(data));
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// End of Asynchronous JS Async/Await practice
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
