'use strict'

const openBtn = document.querySelector('.btn-open');
const modalElem = document.querySelector('.modal')
const closeBtn = document.querySelector('.btn-close')
modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: 300ms ease-in-out;
`;

function showModal() {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

function closeModal() {
        modalElem.style.visibility = 'hidden';
        modalElem.style.opacity = 0;
        modalElem.style.transition = '300ms ease-out';
}

openBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);




