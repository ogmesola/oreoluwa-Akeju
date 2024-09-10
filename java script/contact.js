

onclick='document.getElementById(---)'.style.display='block'"



const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const contactPopup = document.getElementById('contact-popup');

openPopupButton.addEventListener('click', () => {
    contactPopup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    contactPopup.style.display = 'none';
});

