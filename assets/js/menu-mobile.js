const menuMobile = document.querySelector(' #mobile-nav-list');
const btnMobile = document.querySelector('.mobile-menu-icon button')
console.log(btnMobile)

function showMenu(){
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

btnMobile.addEventListener('click', showMenu)