const books = [
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 },
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 }
];

function sortByYear(bookA,bookB){
  if (bookA.releaseYear < bookB.releaseYear) {
    return -1;
  } else if (bookA.releaseYear > bookB.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}
const filteredBooks = books.filter(book => book.releaseYear <= 1950)

filteredBooks.sort(sortByYear)