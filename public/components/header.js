class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `<img src="/images/pwa.svg" alt="pwa" class="logo" />`;
  }
}

customElements.define('header-component', Header);

export default Header;