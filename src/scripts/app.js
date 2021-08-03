const navLinks = document.querySelector('#nav-links-list')

const toggleNav = () => {
    document.querySelector('#nav-links-list').classList.toggle('toggle-nav')
}

const homeButton = document.querySelector('#home-tab');
const aboutButton = document.querySelector('#about-tab');
const contactButton = document.querySelector('#contact-tab');
const projectsButton = document.querySelector('#projects-tab');
const hangmanCard = document.querySelector('#hangman-app-card');

homeButton.addEventListener('click', () => {
    document.location.href = '/index.html';
})

aboutButton.addEventListener('click', () => {
    document.location.href = '/about.html';
})

contactButton.addEventListener('click', () => {
    document.location.href = '/contact.html';
})

projectsButton.addEventListener('click', () => {
    document.location.href = '/projects.html';
})

hangmanCard.addEventListener('click', () => {
    document.location.href = '../apps/hangman/hangman.html';
})