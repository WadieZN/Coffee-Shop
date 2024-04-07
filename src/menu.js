import cf1 from './coffee1.png';
import cf2 from './coffee2.png';
import cf3 from './coffee3.png';
import cf4 from './coffee4.png';
import cf5 from './coffee5.png';

const container = document.querySelector('#content');

const menuItems = [
    { name: 'Black Coffee', price: '5.00$', imageSrc: cf1 },
    { name: 'Healthy Tea', price: '2.50$', imageSrc: cf2 },
    { name: 'Normal Coffee', price: '4.25$', imageSrc: cf3 },
    { name: 'Nescafe Coffee', price: '7.00$', imageSrc: cf4 },
    { name: 'Coffee with beans', price: '10.00$', imageSrc: cf5 }
];

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menuItems.forEach(item => {
        const coffeeCont = document.createElement('div');
        coffeeCont.classList.add('coffee-container');
        menu.appendChild(coffeeCont);

        const coffee = new Image();
        coffee.src = item.imageSrc;
        coffee.classList.add('coffees');
        coffeeCont.appendChild(coffee);

        const title = document.createElement('h2');
        title.textContent = `${item.name} - ${item.price}`;
        coffeeCont.appendChild(title);
    });

    container.appendChild(menu);
    return menu;
}

export default createMenu;