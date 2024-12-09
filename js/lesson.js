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

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs=document.querySelectorAll(".tab_content_item");
const tabsParent=document.querySelector(".tab_content_items")
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

tabsParent.onclick=(e)=>{
    if (e.target.classList.contains('tab_content_item')) {
        tabs.forEach((item,index)=>{
            if (e.target===item){
                hideTabContent();
                showTabContent(index);
            }
        })
    }
}

