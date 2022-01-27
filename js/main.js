const navToggle = document.getElementById('nav__toggle')
const navClose = document.getElementById('nav__close')
const navMenu = document.getElementById('nav__menu')

if(navToggle,navMenu){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('nav-visible')
    })
}
if(navClose,navMenu){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('nav-visible')
    })
}


//remove nav-visible when the link is clicked
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('nav-visible')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true
})

sr.reveal(`.hero__data , .hero__social,.footer__data, .footer__courses, .footer__uselinks, 
.footer__address, .footer__copy, .swiper-container, .staff__card, .blog__card, .course__card,.about_info`,{
    origin:'top',
    interval:100,
})

sr.reveal(`.about__data, .contact__map`,{
    origin:'left',
})

sr.reveal(`.about__img, .contact__form `,{
    origin: 'right',
    interval: 100,
})