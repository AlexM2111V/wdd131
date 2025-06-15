document.getElementById("currentYear").textContent = new Date().getFullYear();

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const logo = document.querySelector('.logo');
const bookButton = document.querySelector('.book-button');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('stack');
    hambutton.classList.toggle('show');
    logo.classList.toggle('hide');
});

bookButton.addEventListener('click', () => {
    window.location.href = 'booking.html';
});

