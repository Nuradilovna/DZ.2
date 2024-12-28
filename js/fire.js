// // RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}



//STOP WATCH

const seconds = document.querySelector('#seconds')

let intervalId;
let secondsValue = 0;
let Run = false ;

const startTimer = () => {
    if(!Run) {
        intervalId = setInterval(() => {
            secondsValue++
            seconds.innerHTML = secondsValue
        }, 1000)
    }
    Run = true
}
document.querySelector('#start').addEventListener('click', startTimer)

const stopTimer = () => {
    clearInterval(intervalId)
    Run = false
}
document.querySelector('#stop').addEventListener('click', stopTimer)

const resetTimer = () => {
    clearInterval(intervalId)
    secondsValue = 0
    seconds.innerHTML = secondsValue
    Run = false
}
document.querySelector('#reset').addEventListener('click', resetTimer)


//character
const request = new XMLHttpRequest();
request.open('GET', '../data/fireCard.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    const data = JSON.parse(request.response);
    const galleryList = document.querySelector('.gallery-list');

    data.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Контейнер для первого контента (фото)
        const firstContent = document.createElement('div');
        firstContent.classList.add('cover'); // The cover div will hold the photo

        const photoDiv = document.createElement('div');
        photoDiv.classList.add('card-photo');
        const img = document.createElement('img');
        img.src = character.photo;  // Character's photo
        photoDiv.appendChild(img);
        firstContent.appendChild(photoDiv);

        // Контейнер для второго контента (name, age и background photo)
        const secondContent = document.createElement('div');
        secondContent.classList.add('book');  // The book div for name, age, and background

        const name = document.createElement('p');
        name.classList.add('character-name');
        name.textContent = character.name; // Character's name
        secondContent.appendChild(name);

        const age = document.createElement('p');
        age.classList.add('age');
        age.textContent = `Возраст: ${character.age}`; // Character's age
        secondContent.appendChild(age);

        // Добавляем контент в карточку
        card.appendChild(firstContent);
        card.appendChild(secondContent);

        // Добавляем фоновое изображение при наведении на карточку
        card.addEventListener('mouseenter', () => {
            card.style.backgroundImage = `url(${character.backgroundPhoto})`; // Set background on hover
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
        });

        card.addEventListener('mouseleave', () => {
            card.style.backgroundImage = ''; // Remove background on hover out
        });

        galleryList.appendChild(card);
    });
};

