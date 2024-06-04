const menuMobile = document.querySelector(' #mobile-nav-list');
const btnMobile = document.querySelector('.mobile-menu-icon button')
console.log(btnMobile)

function showMenu(){
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        menuMobile.classList.style.display='none';
    } else {
        menuMobile.classList.add('open');
        menuMobile.classList.style.display='block';
    }
}

btnMobile.addEventListener('click', showMenu)