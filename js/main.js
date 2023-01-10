/*============ SHOW MENU ============ */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

   if(toggle && nav){
      toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show-menu')

    })
   } 
}
showMenu('nav-toggle', 'nav-menu')

/*============ REMOVE MENU MOBILE ============ */
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*========================== REMOVE MENU MOBILE ========================= */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}
window.addEventListener('scroll', scrollActive)

/*======================= CHANGE BACKGROUND HEADER ======================== */
function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============================== SHOW SCROLL TOP =========================== */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*============ DARK LIGHT THEME============ */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

//prev selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentItem = () => themeButton.body.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

//we validate if the user previously choose a topic
if(selectedTheme){
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon== 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

//activate / deactive the theme manually with the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============================== SLIDESHOW=========================== */
var slideIndex = 1;
showSlides(slideIndex);

//*Next/Prev controls*//
function plusSlides(n){
    showSlides(slideIndex += n);
}

//* Thumbnail image controller *//
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dots");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"

}


/*============ SCROLL REVEAL ============ */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(' .home, .about__data, .about__img, .services__content, .product, .contact__data, .contact__button, .footer__social, .footer__content, .detail__img, detail__data',{
    interval:200
})