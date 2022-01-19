class Book extends HTMLElement {
    constructor() {
        super();

    }

    set book(book){
        this.innerHTML = `
             <div class="card m-3 col-md-5" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${book.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">${book.description}</p>
                            <p class="card-text"><small class="text-muted">Date Published: ${book.releaseDate} by ${book.author}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.get('book-card') || customElements.define('book-card', Book);