const menuButton = document.querySelector('.menu-btn');
const menuElement = document.querySelector('.menu-trigger');
const mainContainer = document.getElementById('main-container')

menuButton.addEventListener('click', () => {
    menuElement.classList.toggle('closed-menu');
    mainContainer.classList.toggle('shrink-grid');
});