//PHONE BLOCK

const phoneInput=document.querySelector('#phone_input');
const phoneButton=document.querySelector('#phone_button');
const phoneResult=document.querySelector('#phone_result');

const regExp=/^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick=()=>{
    if(regExp.test(phoneInput.value)){
       phoneResult.innerHTML="ok";
       phoneResult.style.color="green"
    }else {
        phoneResult.innerHTML="Invalid phone number";
        phoneResult.style.color="red"
    }
}

// Tab slider
const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs=document.querySelectorAll(".tab_content_item");
const tabsParent=document.querySelector(".tab_content_items")
let index = 0
let interval

const hideTabContent=()=>{
    tabContentBlocks.forEach(item=>{
        item.style.display="none";
    })
    tabs.forEach(item=>{
        item.classList.remove("tab_content_item_active");
    })
}
const showTabContent=(index= 0)=>{
    tabContentBlocks[index].style.display="block";
    tabs[index].classList.add("tab_content_item_active");
}
hideTabContent();
showTabContent();

const autoTabs = () => {
    interval = setInterval(() => {
        hideTabContent();
        index ++ >= tabs.length ? index = 0 : index = index ++;
        showTabContent(index);
    }, 5000);
};

autoTabs();


tabsParent.onclick=(e)=>{
    if (e.target.classList.contains('tab_content_item')) {
        tabs.forEach((item,newIndex)=>{
            if (e.target===item){
                clearInterval(interval);
                index = newIndex;
                hideTabContent();
                showTabContent(index);
                autoTabs();
            }
        })

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


//CARD SWITCHER
const cardBlock = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let cardId = 1;

function loadCard(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .then((data) => {
            const { title, completed, id } = data;
            cardBlock.innerHTML = `
                <p>${title}</p>
                <p>${completed}</p>
                <span>${id}</span>
            `;
        });
}

loadCard(cardId);

btnNext.onclick = () => {
    cardId++;
    if (cardId > 200) cardId = 1;
    loadCard(cardId);
};

btnPrev.onclick = () => {
    cardId--;
    if (cardId < 1) cardId = 200;
    loadCard(cardId);
};

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then((response) => response.json())
.then((data) => console.log(data))




