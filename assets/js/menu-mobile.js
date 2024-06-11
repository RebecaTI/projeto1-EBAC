const menuMobile = document.querySelector(' #mobile-nav-list');
const btnMobile = document.querySelector('.mobile-menu-icon button')

function showMenu(){
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        menuMobile.style.display='none';
        //Muda o display p none
    } else {
        menuMobile.classList.add('open');
        menuMobile.style.display='block';
        //Muda o display p none
    }
}

btnMobile.addEventListener('click', showMenu)