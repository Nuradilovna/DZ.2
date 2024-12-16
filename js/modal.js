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
