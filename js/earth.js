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