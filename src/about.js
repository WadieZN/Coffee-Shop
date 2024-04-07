import img from './image.jpg';
const container = document.querySelector('#content');

function createAbout(){
    const about = document.createElement('div');
    about.classList.add('about');
    container.appendChild(about);

    const myDiv = document.createElement('div');
    myDiv.classList.add('my-div');
    about.appendChild(myDiv);

    const image = new Image();
    image.src = img;
    myDiv.appendChild(image);

    const text = document.createElement('p');
    text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores vitae quibusdam saepe neque distinctio ipsum iusto ea consectetur temporibus excepturi delectus magnam cum cupiditate soluta labore corporis eveniet officia nemo, dolore ducimus est. Architecto, provident, aperiam vitae rerum consectetur magnam deserunt obcaecati quia totam placeat error id veritatis! Repudiandae, dolore reprehenderit ex culpa ipsam incidunt itaque placeat sint voluptate facilis asperiores eaque inventore molestiae, distinctio praesentium aliquid voluptatibus mollitia? Quos iste eveniet consectetur, mollitia veritatis optio ratione autem alias nulla repellendus sunt harum? Tenetur, facere inventore. Saepe quas laboriosam nostrum, soluta obcaecati temporibus expedita fuga, possimus sapiente, esse inventore nesciunt ratione dicta quod error incidunt labore? Eligendi recusandae magni ipsum! Tempore similique laudantium minus illum, eveniet totam libero cumque nisi? Quas ipsum delectus, quidem magnam nostrum recusandae minima libero rem ab numquam, quibusdam culpa, doloremque totam. Impedit, commodi perspiciatis.';
    myDiv.appendChild(text);

    return about;
}

export default createAbout;