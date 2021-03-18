"use strict";
const library = document.getElementById("library");
const addBookModal = document.getElementById("addBookModal");
const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const addBookButton = document.getElementById("addBookButton");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const hasReadInput = document.getElementsByName("hasread");

let myLibrary = [];
let cardArray = [];

closeModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeBookModal();
})
addBookButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBook(new Book(titleInput.value, authorInput.value, pagesInput.value, checkHasReadValue()))
    closeBookModal();
});

addBookModal.addEventListener("click", (e) => {
    if (e.target == addBookModal) {
        closeBookModal();
    }
})

openModalButton.addEventListener("click", () => addBookModal.style.display = "block")

function checkHasReadValue() {
    for (let i = 0; i < hasReadInput.length; i++) {
        if (hasReadInput[i].checked) {
            return hasReadInput[i];
        }
    }
}

function closeBookModal() {
    addBookModal.style.display = "none";
    clearForm();
}

function clearForm() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    for (let i = 0; i < hasReadInput.length; i++) {
        hasReadInput[i].checked = false;
    }
}

function Book(title, author, pages, hasRead) {
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead ? "Have read" : "Have not read";
    this.id = createId();
}

function createId() {
  return Math.floor(Math.random() * (1000 - 100) + 100);
}

function addBook(book){
    myLibrary.push(book);
    displayBook(book);
}

function createCardForBook(book){
    let newCard = document.createElement("div");
    newCard.setAttribute("class", "card");
    newCard.setAttribute("id", book.id);
    newCard.textContent = book.title + " by " + book.author + ", " + book.pages + " pages. " + book.hasRead;
    cardArray.push(newCard);
    createDeleteButton(book);
    return newCard;
}

function createReadStatusButton(book) {

}

function updateReadStatus(book) {

}

function createDeleteButton(book) {
    let newButton = document.createElement("button");
    newButton.setAttribute("class", "delete-button");
    newButton.setAttribute("id", book.id);
    newButton.textContent = "Delete book";
    newButton.addEventListener("click", (e) => {
        library.removeChild(findCard(findBook(e.target.id)));
        myLibrary.splice(findBookIndex(e.target.id), 1);
    });
    appendElement(findCard(book), newButton)
}

function findCard(book) {
    for (let i = 0; i < cardArray.length; i++) {
        if (cardArray[i].id == book.id)
          return cardArray[i]
    }
}

function findBook(id) {
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].id == id) {
        return myLibrary[i];
      }
    }
}

function findBookIndex(id) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id == id) {
            return i
        }
    }
}
 
function appendElement(parent, element) {
    parent.appendChild(element);
}

function displayBook(book) {
    appendElement(library, createCardForBook(book));
}

function initiateLibrary() {
    addBook(new Book("The Hobbit", "Tolkien", 145, 1));
    addBook(new Book("Wuthering heights", "Emily Brontë", 556, 0))
    addBook(new Book("Strange beasts of China", "Yan Ge", 348, 1))
    addBook(new Book("100 år av ensamhet", "Gabriel Garcia Marquez", 467, 1))
    addBook(new Book("The Memory Theatre", "Karin Tidbeck", 285, 0))
}


initiateLibrary();

