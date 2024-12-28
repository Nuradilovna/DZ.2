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


//  CONVERTER

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');


const converter = (element, targetElement) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '../data/converter.json');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();

        xhr.onload = () => {
            const data = JSON.parse(xhr.response);

            if (element.id === "som") {
                targetElement.value = (element.value * data.usd).toFixed(2);
                usdInput.value = (element.value / data.usd).toFixed(2);
                eurInput.value = (element.value / data.usd / data.eur).toFixed(2);
            }
            if (element.id === "usd") {
                targetElement.value = (element.value * data.usd).toFixed(2);
                somInput.value = (element.value * data.usd).toFixed(2);
                eurInput.value = (element.value * data.usd / data.eur).toFixed(2);
            }
            if (element.id === "eur") {
                targetElement.value = (element.value * data.eur).toFixed(2);
                somInput.value = (element.value * data.eur).toFixed(2);
                usdInput.value = (element.value * data.eur / data.usd).toFixed(2);
            }

            if (element.value === "") {
                somInput.value = usdInput.value = eurInput.value = ""
            }
        };
    };
};
converter(somInput, usdInput);
converter(usdInput, somInput);
converter(usdInput, eurInput);
converter(eurInput, somInput);
converter(eurInput, usdInput);


//location
const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.onclick=()=>{
    const items =document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
}
$prev.onclick=()=>{
    const items =document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length-1])
}

//character
const request = new XMLHttpRequest();
request.open('GET', '../data/earhtCard.json');
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
        firstContent.classList.add('first-content');

        const photoDiv = document.createElement('div');
        photoDiv.classList.add('card-photo');
        const img = document.createElement('img');
        img.src = character.photo;
        photoDiv.appendChild(img);
        firstContent.appendChild(photoDiv);

        // Контейнер для второго контента (тексты)
        const secondContent = document.createElement('div');
        secondContent.classList.add('second-content');

        const name = document.createElement('p');
        name.classList.add('character-name');
        name.textContent = character.name;

        const element = document.createElement('p');
        element.classList.add('element');
        element.textContent = character.element;

        const age = document.createElement('p');
        age.classList.add('age');
        age.textContent = `Age: ${character.age}`;

        secondContent.appendChild(name);
        secondContent.appendChild(element);
        secondContent.appendChild(age);

        // Добавляем контент в карточку
        card.appendChild(firstContent);
        card.appendChild(secondContent);

        // Назначаем фоновое изображение при наведении
        card.addEventListener('mouseenter', () => {
            card.style.backgroundImage = `url(${character.backgroundPhoto})`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
        });

        card.addEventListener('mouseleave', () => {
            card.style.backgroundImage = ''; // Убираем фон при уходе с карточки
        });

        galleryList.appendChild(card);
    });
};
