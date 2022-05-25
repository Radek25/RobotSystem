const navHeader = document.querySelector("header");
const burgerMenuIcon = document.querySelector("#burgerMenuBtn");
const closeMenuIcon = document.querySelector("#closeMenuBtn");

let menuFlag = false;

burgerMenuIcon.classList.add('showMenuIcon');
closeMenuIcon.classList.add('hideMenuIcon');
navHeader.style.opacity = 0;

burgerMenuIcon.addEventListener("click", () => menuClick());
closeMenuIcon.addEventListener("click", () => menuClick());

function menuClick(){
    menuFlag = !menuFlag;
    if(menuFlag){
        burgerMenuIcon.classList.add('hideMenuIcon');
        closeMenuIcon.classList.remove('hideMenuIcon');
        closeMenuIcon.classList.add('scale-in-center');
    }
    else{
        closeMenuIcon.classList.add('hideMenuIcon');
        burgerMenuIcon.classList.remove('hideMenuIcon');
        burgerMenuIcon.classList.add('scale-in-center');
    }
    showOrHideLeftMenu(menuFlag);
}

function showOrHideLeftMenu(menuFlag){
    if(!menuFlag){
        navHeader.classList.remove('slide-in-top');
        navHeader.classList.add('slide-out-top');
    }
    else{
        navHeader.classList.remove('slide-out-top');
        navHeader.classList.add('slide-in-top');
    }
}