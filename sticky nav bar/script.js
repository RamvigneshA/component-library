const nav = document.querySelector('.navbar');
const topNav = nav.offsetTop;

function fixNav() {
    // console.log(window.scrollY);
    // console.log(topNav);
    if(window.scrollY >= topNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('sticky');

    } else {
        document.body.style.paddingTop = 0
        nav.classList.remove('sticky');
    }
}


window.addEventListener('scroll', fixNav);  