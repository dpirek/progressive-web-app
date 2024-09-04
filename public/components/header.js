class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <header>
          <h1>Web Components</h1>
        </header>
      `;
  }
}

customElements.define('header-component', Header);

export default Header;