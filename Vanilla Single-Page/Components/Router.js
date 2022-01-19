import './RouterLink.js';
import {createBookList} from "../main.js";

export class Router extends HTMLElement {
    constructor() {
        super()
        this.childNodes.forEach((item) => {
            if (item.nodeName === 'ROUTER-LINK') {
                console.log("Router Link")
                item.addEventListener('click', (e) => {
                    e.preventDefault()
                    this.loadPage(item.getAttribute('url'));
                })
            }
        })
    }

    async loadPage(page) {
        const response = await fetch(`Pages/${page}`);
        const content = await response.text();
        console.log(content)
        const element = document.getElementById("content");
        element.innerHTML = content;
    }
}

customElements.get('router-nav') || customElements.define('router-nav', Router);