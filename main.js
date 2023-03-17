import './books.js'

window.addEventListener('load', ()=> {
    createBookList();
});

async function createBookList(){
    const response = await fetch('./books.json');
    const json     = await response.json();                 console.log("JSON:"); console.log(json);
    const books    = document.getElementById('books');

    json.books.forEach((book) => {                          console.log("book:"); console.log(book);
        const element = document.createElement('mit-book');
        element.book = book;
        books.appendChild(element);
    })
}
