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
async function FireCharacters() {
    try {
        const response = await fetch('../data/fireCard.json');
        const data = await response.json();
        const galleryList = document.querySelector('.gallery-list');

        data.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('card');

            const firstContent = document.createElement('div');
            firstContent.classList.add('cover');

            const photoDiv = document.createElement('div');
            photoDiv.classList.add('card-photo');
            const img = document.createElement('img');
            img.src = character.photo;
            photoDiv.appendChild(img);
            firstContent.appendChild(photoDiv);

            const secondContent = document.createElement('div');
            secondContent.classList.add('book');  // The book div for name, age, and background

            const name = document.createElement('p');
            name.classList.add('character-name');
            name.textContent = character.name;
            secondContent.appendChild(name);

            const age = document.createElement('p');
            age.classList.add('age');
            age.textContent = `Возраст: ${character.age}`;
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

FireCharacters();
