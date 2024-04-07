import './style.css';
import createHome from './home.js';
import createMenu from './menu.js';
import createAbout from './about.js';

const container = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');

createHome();

homeBtn.addEventListener('click', () => {
    container.textContent = '';
    createHome();
});

menuBtn.addEventListener('click', () => {
    container.textContent = '';
    createMenu();
});

aboutBtn.addEventListener('click', () => {
    container.textContent = '';
    createAbout();
});

