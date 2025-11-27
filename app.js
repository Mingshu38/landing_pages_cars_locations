const btnBurger = document.querySelector('#burger-menu');
const menu = document.querySelector('.navigation');
const linkNav = document.querySelectorAll('.navigation a');
const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');

// Menu burger toggle 
btnBurger.addEventListener('click', () => {
    menu.classList.toggle('active');
    btnBurger.classList.toggle('bx-x');
});

// Close menu when click on a link

linkNav.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        btnBurger.classList.remove('bx-x');
    });
});

// Close menu on scroll

window.addEventListener('scroll', () => {
    menu.classList.remove('active');
    btnBurger.classList.remove('bx-x');
});

// Change nav on scroll

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', window.scrollY > 0);
});

// Scroll sections active link

const scrollActive = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            linkNav.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navigation a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
window.addEventListener('scroll', scrollActive); {

}