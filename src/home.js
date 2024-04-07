import img from './wallpaper.jpg';
const container = document.querySelector('#content');

function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');
    container.appendChild(home);

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');
    home.appendChild(homeDiv);

    const title = document.createElement('h1');
    title.textContent = 'Coffee Shop';
    homeDiv.appendChild(title);

    const image = new Image();
    image.src = img;
    homeDiv.appendChild(image);

    return home;
}

export default createHome;