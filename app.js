let myLibrary = [];
const libraryContainer = document.querySelector(".library-container");

function Book(name, author, numberOfPages, isRead, rating) {
  this.name = name;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
  this.rating = rating;
}

addBookToLibrary(new Book("Dune", "Frank Herbert", 412, true, 5));
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 310, true, 5));
addBookToLibrary(new Book("1984", "George Orwell", 328, true, 4.5));
addBookToLibrary(new Book("Brave New World", "Aldous Huxley", 311, false, 3));
addBookToLibrary(new Book("Fahrenheit 451", "Ray Bradbury", 249, true, 4));
addBookToLibrary(
  new Book("The Catcher in the Rye", "J.D. Salinger", 277, false, 4)
);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function updateLibrary() {
  for (book in myLibrary) {
    const libraryItem = document.createElement("div");
    libraryItem.classList.add("library-item");
    libraryContainer.appendChild(libraryItem);

    const bookName = document.createElement("div");
    bookName.classList.add("book-name");
    libraryItem.appendChild(bookName);
    bookName.textContent = myLibrary[book].name;

    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");
    libraryItem.appendChild(bookAuthor);
    bookAuthor.textContent = myLibrary[book].author;

    const bookLength = document.createElement("div");
    bookLength.classList.add("book-length");
    libraryItem.appendChild(bookLength);
    bookLength.textContent = myLibrary[book].numberOfPages + " pages";

    const bookIsRead = document.createElement("div");
    bookIsRead.classList.add("book-isread");
    libraryItem.appendChild(bookIsRead);
    if (myLibrary[book].isRead) {
      bookIsRead.textContent = "Read";
    } else {
      bookIsRead.textContent = "Not read";
    }

    const bookRating = document.createElement("div");
    bookRating.classList.add("book-rating");
    libraryItem.appendChild(bookRating);
    bookRating.textContent = myLibrary[book].rating + "/5";

    const deleteButton = document.createElement("button");
    libraryItem.appendChild(deleteButton);
  }
}

updateLibrary();
