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

//Tab slider
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

const showTabContent=(index=0)=>{
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
    }, 1000);
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


