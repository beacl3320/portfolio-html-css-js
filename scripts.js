/* SIDE NAVIGATION JS CODE */
let menuBtn = document.querySelector('.navbar__btn');
let cancelBtn = document.querySelector('.navbar__btn-cancel');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = function() {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navbar.classList.add('active');
}

cancelBtn.onclick = () => {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navbar.classList.remove('active');
}

/* STICKY NAVIGATION MENU JS */
let nav = document.querySelector('nav');
let val;
window.onscroll = () => {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add('sticky');
    }else{
        nav.classList.remove('sticky');
    }
}

/* OWL CAROUSEL SCRIPT */
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
})

