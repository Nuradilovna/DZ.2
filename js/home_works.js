//GMAIL BLOCK
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w{1,1000}\S@gmail\.com$/
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML="OK"
        gmailResult.style.color="green"
    }else{
        gmailResult.innerHTML="Invalid email address";
        gmailResult.style.color="red"
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

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight;


let positionX = 0;
let positionY = 0;
let direction = 1;


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

//character-card

const request = new XMLHttpRequest();
request.open('GET', '../data/persons.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    const data = JSON.parse(request.response);

    const characterList = document.querySelector('.characters-list');

    data.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');

        const photoDiv = document.createElement('div');
        photoDiv.classList.add('character-photo');
        const img = document.createElement('img');
        img.src = character.photo;
        photoDiv.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = character.name;

        const element = document.createElement('p');
        element.classList.add('element');
        element.textContent = `Element: ${character.element}`;

        const age = document.createElement('p');
        age.classList.add('age');
        age.textContent = `Age: ${character.age}`;

        card.appendChild(photoDiv);
        card.appendChild(name);
        card.appendChild(element);
        card.appendChild(age);

        characterList.appendChild(card);
    });
};

//uber mich

const request_2 = new XMLHttpRequest();
request_2.open('GET','../data/any.json')
request_2.setRequestHeader('Content-type','application/json')
request_2.send()

request_2.onload = ()=> {
    const any = JSON.parse(request_2.response)
    console.log(any)
}