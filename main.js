//show and hide menu



const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-nav");
const closeBtn = document.querySelector("#close-nav");


menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";  
}
closeBtn.addEventListener('click', closeNav)