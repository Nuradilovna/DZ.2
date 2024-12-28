const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');
// let scrollEvent = false;

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
const closeModal =()=>{
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// const onScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight && !scrollEvent) {
//         openModal();
//         scrollEvent = true;
//         window.removeEventListener('scroll', onScroll);
//     }
// }

const onScroll =() => {
    const scroll = window.innerHeight +window.scrollY
    if (scroll >= document.body.offsetHeight - 1) {
        openModal();
        removeEventListener("scroll", onScroll);
    }
}


modalTrigger.onclick = openModal;
modalCloseButton.onclick= closeModal
modal.onclick = (event) => {
    if(event.target === modal){
       closeModal()
    }
}

// setTimeout(openModal, 10000);

window.addEventListener('scroll', onScroll);

//POST DATA

const token = '7664197035:AAFRH9B7QRWW2KEIhwg3pUKrR7XCb1f1QNk'
const form = document.querySelector('form')
const chat_id = '@nurperi_44'
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;

form.onsubmit = (event) => {
    event.preventDefault()
    const {name ,phone} = Object.fromEntries(new FormData(form).entries())
    const text =`Имя: ${name}\nНомер: ${phone}`

    fetch(URL_API , {
        method: 'POST',
        headers: {"Content-type" : "application/json" },
        body: JSON.stringify({
            chat_id: chat_id,
            text: text
        })
    })
}

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
