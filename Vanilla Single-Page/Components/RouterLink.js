class RouterLink extends HTMLElement {
    constructor() {
        super();

        const title = this.innerText;
        this.innerHTML =`
            <div >
                <h3>${title}</h3>
            </div>
        `;
    }
}

customElements.get('router-link') || customElements.define('router-link', RouterLink);