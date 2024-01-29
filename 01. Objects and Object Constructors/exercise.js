Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info
const Book = {
    title: "The Hobbit",
    author: "J.R.R",
    pages: 295,
    read: "not yet",

   function(){
    console.log(Book.title, +"by " + Book.author, Book.pages, Book.read);
   }  
}