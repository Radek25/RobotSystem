const navHeader = document.querySelector("header");
const burgerMenuIcon = document.querySelector("#burgerMenuBtn");
const closeMenuIcon = document.querySelector("#closeMenuBtn");

let menuFlag = false;

burgerMenuIcon.classList.add('showMenuIcon');
closeMenuIcon.classList.add('hideMenuIcon');
navHeader.classList.add('hideResponsiveLeftMenu');

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
        navHeader.classList.remove('slide-in-left');
        navHeader.classList.add('slide-out-left');
        document.body.style.overflow = "auto";
    }
    else{
        navHeader.classList.remove('hideResponsiveLeftMenu');
        navHeader.classList.remove('slide-out-left');
        navHeader.classList.add('slide-in-left');
        document.body.style.overflow = "hidden";
    }
}