let myLibrary = [];
const libraryContainer = document.querySelector(".library-container");
let libraryItems = document.querySelectorAll(".library-item");
const itemAddButton = document.querySelector(".item-add-button");
const itemAddModalContainer = document.querySelector(
  ".item-add-modal-container"
);
const modalCloseButton = document.querySelector(".modal-close-container");
let modalFields = {
  name: document.querySelector("#name").value,
  author: document.querySelector("#author").value,
  numberOfPages: Number(document.querySelector("#numberOfPages").value),
  isRead: Boolean(document.querySelector("#isRead").value),
};

const modalSubmitButton = document.querySelector("#submit");

function Book(name, author, numberOfPages, isRead) {
  this.name = name;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

addBookToLibrary(new Book("Dune", "Frank Herbert", 412, true));
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 310, true));
addBookToLibrary(new Book("1984", "George Orwell", 328, true));
addBookToLibrary(new Book("Brave New World", "Aldous Huxley", 311, false));
addBookToLibrary(new Book("Fahrenheit 451", "Ray Bradbury", 249, true));
addBookToLibrary(
  new Book("The Catcher in the Rye", "J.D. Salinger", 277, false)
);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(book) {
  delete myLibrary[book];
}

function updateLibrary() {
  libraryItems = document.querySelectorAll(".library-item");
  libraryItems.forEach((i) => {
    // Dont remove first child which acts as a caption
    if (i.id != "caption") {
      i.remove();
    }
  });
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
    bookIsRead.id = book;
    libraryItem.appendChild(bookIsRead);
    if (myLibrary[book].isRead) {
      bookIsRead.textContent = "Read";
    } else {
      bookIsRead.textContent = "Not read";
    }
    bookIsRead.addEventListener("click", (e) => {
      if (myLibrary[e.target.id].isRead) {
        myLibrary[e.target.id].isRead = false;
      } else {
        myLibrary[e.target.id].isRead = true;
      }
      updateLibrary();
    });

    const deleteButton = document.createElement("div");
    libraryItem.appendChild(deleteButton);
    deleteButton.classList.add("book-delete");
    deleteButton.innerHTML = `<box-icon type="solid" color="#fdf0d5" name="trash" animation="tada-hover" id="${book}"></box-icon>`;
    deleteButton.addEventListener("click", (e) => {
      console.log(e.target);
      removeBookFromLibrary(Number(e.target.id));
      updateLibrary();
    });
  }
}

updateLibrary();

itemAddButton.addEventListener("click", () => {
  itemAddModalContainer.classList.remove("hidden");
});

modalCloseButton.addEventListener("click", () => {
  itemAddModalContainer.classList.add("hidden");
});

// itemAddModalContainer.addEventListener("click", () => {
//   itemAddModalContainer.style.display = "none";
// });

modalSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  modalFields = {
    name: document.querySelector("#name").value,
    author: document.querySelector("#author").value,
    numberOfPages: Number(document.querySelector("#numberOfPages").value),
    isRead: Boolean(document.querySelector("#isRead").value),
  };
  if (
    modalFields.name != "" &&
    modalFields.author != "" &&
    numberOfPages != 0
  ) {
    addBookToLibrary(
      new Book(
        modalFields.name,
        modalFields.author,
        modalFields.numberOfPages,
        numberOfPages.isRead
      )
    );
    updateLibrary();
    itemAddModalContainer.classList.add("hidden");
  }
});
