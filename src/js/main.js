const hamButton = document.querySelector('.header-top__button')
const menuMobile = document.querySelector('.mobile-menu')
const menuItem = document.querySelectorAll('.menu-item')
const faIcon = document.querySelector('.fa-bars')
const wrapperContent = document.querySelector('.wrapper__content')
const header = document.querySelector('.header')
const headerTop = document.querySelector('.header-top')

const mediaQuery = window.matchMedia('(max-width: 992px)')
const mediaQueryD = window.matchMedia('(min-width: 992px)')




const showMobileMenu = () => {
    document.body.classList.toggle('sticky-body')
    if (menuMobile.classList.contains('hide')) {
        menuMobile.classList.remove('hide')
        menuMobile.style.display = 'flex'
        menuMobile.classList.add('show')
        wrapperContent.classList.add('wrapper-hide')
        faIcon.classList.remove('fa-bars')
        faIcon.classList.add('fa-xmark')

    } else {
        document.body.style.display = 'block'
        wrapperContent.classList.remove('wrapper-hide')
        menuMobile.style.display = 'none'
        menuMobile.classList.remove('show')
        menuMobile.classList.add('hide')
        faIcon.classList.remove('fa-xmark')
        faIcon.classList.add('fa-bars')

    }


}



let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (mediaQuery.matches) {
        if (lastScrollY < window.scrollY && !menuMobile.classList.contains('show')) {
            header.classList.add("header--hidden");
            headerTop.classList.remove('header-bcg')
        } else if (menuMobile.classList.contains('show')) {
            header.classList.remove("header--hidden");
            // headerTop.classList.remove('header-bcg'); lastScrollY = ''
        }
        else {
            header.classList.remove("header--hidden");
            headerTop.classList.add('header-bcg')
        }

        lastScrollY = window.scrollY;
    } else {
        if (lastScrollY < window.scrollY) {
            header.classList.add("header--hidden");
            // nav.classList.add("header--hidden");
            header.classList.remove('header-bcg')
            // nav.classList.remove('header-bcg')
        } else {
            header.classList.remove("header--hidden");
            // nav.classList.remove("header--hidden");
            header.classList.add('header-bcg')
            // nav.classList.add('header-bcg')
        }
        lastScrollY = window.scrollY;

    }
});




menuItem.forEach(el => el.addEventListener('click', showMobileMenu))
hamButton.addEventListener('click', showMobileMenu)