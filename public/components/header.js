class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `<img src="/images/pwa.svg" class="logo" />`;
  }
}

customElements.define('header-component', Header);

export default Header;