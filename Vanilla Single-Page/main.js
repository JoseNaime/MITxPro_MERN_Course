import './Components/Book.js';

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    createBookList();
});

export async function createBookList() {
    const books = await fetch('./Data/books.json');
    const booksJSON = await books.json();
    console.log(booksJSON)
    const booksContainer = document.getElementById("books-container");
    console.log(booksContainer)
    if (booksContainer) {
        booksJSON.books.forEach(book => {
            const element = document.createElement("book-card");

            element.book = book
            booksContainer.append(element);
        })
    }
}