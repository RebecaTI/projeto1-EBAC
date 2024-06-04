const menuMobile = document.querySelector('#mobile-menu #mobile-nav-list');
const btnMobile = document.querySelector('.mobile-menu-icon button')
console.log(btnMobile)

function showMenu(){
    if(menuMobile){
        menuMobile.style.display = "block";
    } else {
        menuMobile.style.display = "none";
    }
}

btnMobile.addEventListener('click', showMenu)