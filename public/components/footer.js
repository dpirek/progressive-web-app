class Footer extends HTMLElement {
  navItems = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Contact',
      url: '/contact'
    }
  ];

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `${this.navItems.map(item => `<a class="item" href="${item.url}">${item.title}</a>`).join('')}`;
  }
}

customElements.define('footer-component', Footer);

export default Footer;