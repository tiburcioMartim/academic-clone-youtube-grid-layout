const menuButton = document.querySelector('.menu-btn');
const menuElement = document.querySelector('.menu-trigger');

menuButton.addEventListener('click', () => {
    menuElement.classList.toggle('open');
});