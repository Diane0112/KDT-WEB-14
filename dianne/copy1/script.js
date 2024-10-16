let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section')
let navLink = document.querySelector('header nav a')

window.onscroll = () => {
    section.fotEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEacg(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a
                    [href*=' + id + ']`).classList.add('active')
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}