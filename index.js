//toogle icon navigation 
let menuIcon = document.querySelector('#menu-icon'); // Corrected selector with #
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Specify the class you want to toggle
    navbar.classList.toggle('active');
}

function openSocialMedia(url) {
    window.open(url, '_blank');
}
//scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            // Active navbar links 
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
            sec.classList.add('show-animate'); 
        }
        
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector ('footer'); 
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight); 
}
const rocketContainer = document.querySelector('.rocket-container');
let flying = false;

window.addEventListener('scroll', function() {
  if (!flying) {
    rocketContainer.classList.add('flying');
    flying = true;
  }
});

window.addEventListener('scroll', function() {
  if (flying && window.scrollY === 0) {
    rocketContainer.classList.remove('flying');
    flying = false;
  }
});
