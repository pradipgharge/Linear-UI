const btnHamburger = document.querySelector(".ham-icon");
const drawer = document.querySelector(".drawer-container");
const btnClose = document.querySelector(".drawer-close");


btnHamburger.addEventListener("click",()=>{
    drawer.classList.add("drawer-transition-on");
    drawer.classList.remove("drawer-transition-off");
})


btnClose.addEventListener("click", ()=>{
    drawer.classList.add("drawer-transition-off");
    drawer.classList.remove("drawer-transition-on");
})