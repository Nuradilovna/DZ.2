// //GMAIL BLOCK
// const gmailInput = document.querySelector('#gmail_input')
// const gmailButton = document.querySelector('#gmail_button')
// const gmailResult = document.querySelector('#gmail_result')
//
// const regExp = /^\w{1,1000}\S@gmail\.com$/
// gmailButton.onclick = () => {
//     if (regExp.test(gmailInput.value)) {
//         gmailResult.innerHTML="OK"
//         gmailResult.style.color="green"
//     }else{
//         gmailResult.innerHTML="Invalid email address";
//         gmailResult.style.color="red"
//     }
// }

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

//MOVE BLOCK
// const count = () => {
//     const move = document.querySelector('.child_block');
//     let goleft = parseInt(move.style.left || '0', 10);
//     goleft++;
//     if (goleft > 448) {
//         return;
//     }
//     move.style.left = `${goleft}px`;
//     requestAnimationFrame(count);
// }
// count();


// MOVE BLOCK

const parentBlock = document.querySelector(".parent_block2");
const childBlock = document.querySelector(".child_block");
const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight;


let positionX = 0;
let positionY = 0;
let direction = 1;

childBlock.onclick=()=>{
    if (childBlock.classList.contains("head2")) childBlock.classList.remove("head2")
    else childBlock.classList.add("head2")
}

const moveBlock = () => {
    if(direction === 1){
        if(positionX < maxWidth) {
            childBlock.style.left = `${positionX}px`
            positionX++
        }else {
            direction = 2;
            positionX = maxWidth
        }
    }else if(direction === 2) {
        if(positionY < maxHeight && positionX >= maxWidth) {
            childBlock.style.top = `${positionY}px`
            positionY++
        }else {
            direction = 3;
        }
    }else if(direction === 3){
        if(positionX > 0 && positionY >= maxHeight){
            childBlock.style.left = `${positionX}px`
            positionX--
        }else {
            direction = 4
        }
    }else if(direction === 4) {
        if(positionY > 0 && positionX >= 0) {
            childBlock.style.top = `${positionY}px`
            positionY--
        }else {
            direction = 1;
            positionY = 0;
        }
    }
    requestAnimationFrame(moveBlock)

}
moveBlock()



//character-card
async function airCharacters() {
    try {
        const response = await fetch('../data/persons.json');
        const data = await response.json();
        const characterList = document.querySelector('.characters-list');

        data.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('character-card');

            const photoDiv = document.createElement('div');
            photoDiv.classList.add('character-photo');
            const img = document.createElement('img');
            img.src = character.photo;
            photoDiv.appendChild(img);

            const textBox = document.createElement('div');
            textBox.classList.add('textBox');

            const name = document.createElement('p');
            name.classList.add('head');
            name.textContent = character.name;

            const element = document.createElement('span');
            element.textContent = character.element;

            const age = document.createElement('p');
            age.classList.add('age');
            age.textContent = `Age: ${character.age}`;

            textBox.appendChild(name);
            textBox.appendChild(element);
            textBox.appendChild(age);

            card.appendChild(photoDiv);
            card.appendChild(textBox);

            characterList.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
airCharacters();

//uber mich

// const request_2 = new XMLHttpRequest();
// request_2.open('GET','../data/any.json')
// request_2.setRequestHeader('Content-type','application/json')
// request_2.send()
//
// request_2.onload = ()=> {
//     const any = JSON.parse(request_2.response)
//     console.log(any)
// }