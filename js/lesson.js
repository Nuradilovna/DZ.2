
//CARD SWITCHER
const cardBlock = document.querySelector(".card_s");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");

let cardId = 1;

const CardSwitcher = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        const { title, completed, id: cardId } = data;

        cardBlock.innerHTML = `
            <p>${title}</p>
            <p>${completed}</p>
            <span>${cardId}</span>
        `;
    } catch (error) {
        console.error("Error loading card:", error);
        cardBlock.innerHTML = "Error loading card";
    }
};
CardSwitcher(cardId);

btnNext.onclick = () => {
    cardId++;
    if (cardId > 200) {
        cardId = 1;
    }
    CardSwitcher(cardId);
};

btnPrev.onclick = () => {
    cardId--;
    if (cardId < 1) {
        cardId = 200;
    }
    CardSwitcher(cardId);
};


//OPEN WATER

const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const openWater = document.querySelector('.Open_water');


const json = {
    "imgBlock": "https://i.pinimg.com/736x/ef/30/1d/ef301dcf52509e22049f043a9dd5f6ef.jpg",
    "imgBlock2": "https://i.pinimg.com/736x/83/b6/bf/83b6bf574813df232d7124be69dbec5d.jpg"
};

buttonOne.onclick=() => {
    openWater.style.backgroundImage = `url(${json.imgBlock})`;
};
buttonTwo.onclick=() => {
    openWater.style.backgroundImage = `url(${json.imgBlock2})`;
};

//WEATHER

const searchInput = document.querySelector(".cityName")
const searchButton = document.querySelector("#search")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const weatherIcon = document.querySelector("#weather-icon")

const API_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
searchButton.onclick = async () =>{
    try {
        const response = await fetch(`${API_URL}?appid=${API_KEY}&q=${searchInput.value}&units=metric&lang=RU`);
        const data = await response.json();
        city.innerHTML = data.name ||"Город не найден ..."
                            temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + '&deg;C' : "ᓚᘏᗢ"
                            weatherIcon.src =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    } catch (error) {
        console.log(error)
    }
}


//character-card
async function loadData() {
    try {
        const response = await fetch('../data/waterCard.json');
        const data = await response.json();
        const galleryList = document.querySelector('.gallery-list');

        data.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('card');

            const photoDiv = document.createElement('div');
            photoDiv.classList.add('card-photo');
            const img = document.createElement('img');
            img.src = character.photo;
            photoDiv.appendChild(img);

            const descriptionBox = document.createElement('div');
            descriptionBox.classList.add('description-box');

            const name = document.createElement('p');
            name.classList.add('character-name');
            name.textContent = character.name;

            const element = document.createElement('span');
            element.textContent = character.element;

            const age = document.createElement('p');
            age.classList.add('age');
            age.textContent = `Age: ${character.age}`;

            descriptionBox.appendChild(name);
            descriptionBox.appendChild(element);
            descriptionBox.appendChild(age);

            card.appendChild(photoDiv);
            card.appendChild(descriptionBox);

            galleryList.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

loadData();

