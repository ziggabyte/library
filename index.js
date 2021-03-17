"use strict";
const library = document.getElementById("library");

let myLibrary = [];
let cardArray = [];

function Book(title, author, pages, hasRead) {
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        let read = (hasRead) ? "Have read" : "Have not read";
        return title + 
        " By: " + author + 
        ". Pages: " + pages + " " + read;
    } 
}

function addBook(book){
    myLibrary.push(book);
}

function createCardForBook(book){
    let newCard = document.createElement("div");
    newCard.setAttribute("id", "card");
    newCard.textContent = book.info();
    cardArray.push(newCard);
}

function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        createCardForBook(myLibrary[i]);
    }
    for (let i = 0; i < cardArray.length; i++){
        library.appendChild(cardArray[i]);
    }
}

function initiateLibrary() {
    addBook(new Book("The Hobbit", "Tolkien", 145, 1));
    addBook(new Book("Wuthering heights", "Emily Brontë", 556, 0))
    addBook(new Book("Strange beasts of China", "Yan Ge", 348, 1))
    addBook(new Book("100 år av ensamhet", "Gabriel Garcia Marquez", 467, 1))
    addBook(new Book("The Memory Theatre", "Karin Tidbeck", 285, 0))
}

initiateLibrary();
displayBooks();