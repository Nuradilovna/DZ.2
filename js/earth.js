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

async function converterFnc () {
    try {
        const response = await fetch('../data/converter.json');
        return await response.json();
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        return null;
    }
}


const converter = (element, targetElement) => {
    element.oninput = async () => {
        const data = await converterFnc();

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
            somInput.value = usdInput.value = eurInput.value = "";
        }
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
async function earthCharacters() {
    try {
        const response = await fetch('../data/earhtCard.json');
        const data = await response.json();
        const galleryList = document.querySelector('.gallery-list');

        data.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('card');


            const firstContent = document.createElement('div');
            firstContent.classList.add('first-content');

            const photoDiv = document.createElement('div');
            photoDiv.classList.add('card-photo');
            const img = document.createElement('img');
            img.src = character.photo;
            photoDiv.appendChild(img);
            firstContent.appendChild(photoDiv);

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

            card.appendChild(firstContent);
            card.appendChild(secondContent);

            card.addEventListener('mouseenter', () => {
                card.style.backgroundImage = `url(${character.backgroundPhoto})`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundPosition = 'center';
            });

            card.addEventListener('mouseleave', () => {
                card.style.backgroundImage = '';
            });

            galleryList.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

earthCharacters();

