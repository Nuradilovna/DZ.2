//PHONE BLOCK

// const phoneInput=document.querySelector('#phone_input');
// const phoneButton=document.querySelector('#phone_button');
// const phoneResult=document.querySelector('#phone_result');
//
// const regExp=/^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
//
// phoneButton.onclick=()=>{
//     if(regExp.test(phoneInput.value)){
//        phoneResult.innerHTML="ok";
//        phoneResult.style.color="green"
//     }else {
//         phoneResult.innerHTML="Invalid phone number";
//         phoneResult.style.color="red"
//     }
// }

// // Tab slider
// const tabContentBlocks = document.querySelectorAll(".tab_content_block");
// const tabs=document.querySelectorAll(".tab_content_item");
// const tabsParent=document.querySelector(".tab_content_items")
// let index = 0
// let interval
//
// const hideTabContent=()=>{
//     tabContentBlocks.forEach(item=>{
//         item.style.display="none";
//     })
//     tabs.forEach(item=>{
//         item.classList.remove("tab_content_item_active");
//     })
// }
// const showTabContent=(index= 0)=>{
//     tabContentBlocks[index].style.display="block";
//     tabs[index].classList.add("tab_content_item_active");
// }
// hideTabContent();
// showTabContent();
//
// const autoTabs = () => {
//     interval = setInterval(() => {
//         hideTabContent();
//         index ++ >= tabs.length ? index = 0 : index = index ++;
//         showTabContent(index);
//     }, 5000);
// };
//
// autoTabs();
//
//
// tabsParent.onclick=(e)=>{
//     if (e.target.classList.contains('tab_content_item')) {
//         tabs.forEach((item,newIndex)=>{
//             if (e.target===item){
//                 clearInterval(interval);
//                 index = newIndex;
//                 hideTabContent();
//                 showTabContent(index);
//                 autoTabs();
//             }
//         })
//
//     }
// }

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
// // RANDOM COLOR GENERATOR
//
// const buttonsColor = document.querySelectorAll('.btn-color')
// const javaScript = document.querySelector('#js-color')
//
// const generateRandomColor = () => {
//     const hexCodes = '0123456789ABCDEF'
//     let color = ''
//     for (let i = 0; i < 6; i++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
//     }
//     return '#' + color
// }
//
// const setRandomColors = () => {
//     buttonsColor.forEach((buttonColor) => {
//         buttonColor.innerHTML = generateRandomColor()
//         buttonColor.onclick = (event) => {
//             javaScript.style.color = event.target.innerHTML
//         }
//     })
// }
//
// window.onload = () => setRandomColors()
// window.onkeydown = (event) => {
//     if (event.code.toLowerCase() === 'space') {
//         event.preventDefault()
//         setRandomColors()
//     }
// }
// //CARD SWITCHER
// const cardBlock = document.querySelector('.card');
// const btnNext = document.querySelector('#btn-next');
// const btnPrev = document.querySelector('#btn-prev');
//
// let cardId = 1;
//
// function loadCard(id) {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//         .then((response) => response.json())
//         .then((data) => {
//             const { title, completed, id } = data;
//             cardBlock.innerHTML = `
//                 <p>${title}</p>
//                 <p>${completed}</p>
//                 <span>${id}</span>
//             `;
//         });
// }
//
// loadCard(cardId);
//
// btnNext.onclick = () => {
//     cardId++;
//     if (cardId > 200) cardId = 1;
//     loadCard(cardId);
// };
//
// btnPrev.onclick = () => {
//     cardId--;
//     if (cardId < 1) cardId = 200;
//     loadCard(cardId);
// };

// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then((response) => response.json())
// .then((data) => console.log(data))


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
const request = new XMLHttpRequest();
request.open('GET', '../data/waterCard.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    const data = JSON.parse(request.response);

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
};

