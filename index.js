const myObject = {
    property: "value",
    otherProperty: 77,
    "obnoxious property": function() {
        console.log("Halllllå");
    }
}

let a = myObject.property;
let b = myObject["obnoxious property"];

const variable = 'property';
myObject.variable;
myObject[variable];

//Object constructors 

function Book(title, author, pages, hasRead) {
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        let read = (hasRead) ? "You have read this book" : "You have not read this book";
        return "This book is called " + title + 
        " and it's written by " + author + 
        ". It is " + pages + " pages long." + read;
    } 
}

let theHobbit = new Book("The Hobbit", "Tolkien", "224", 0);
console.log(theHobbit.info());

// Prototypes __proto__