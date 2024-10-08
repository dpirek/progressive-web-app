import Header from './components/header.js';
import Footer from './components/footer.js';

const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const root = document.getElementById('root');
const content = document.createElement('div');
content.innerHTML = `
  <h1>Welcome to PWA</h1>
  <p>${loremText}</p>
  <p>${loremText}</p>
  <p>${loremText}</p>`;

root.appendChild(content);