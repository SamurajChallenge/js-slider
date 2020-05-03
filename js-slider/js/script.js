const sliderElement = document.querySelector('.slider-container');
const slideElement = sliderElement.querySelector('.slides');
const slidesCollection = slideElement.querySelectorAll('.image');
const buttonPrevious = sliderElement.querySelector('#button-previous');
const buttonNext = sliderElement.querySelector('#button-next');

let sliderTotalWidth = slidesCollection
let imageWidth = slidesCollection[0].clientWidth;
let counter = 0;

slideElement.style.transform = 'translateX(' + (imageWidth * counter) + 'px)';


buttonNext.addEventListener('click', () => {
    if (counter < slidesCollection.length-1) {
        if (buttonNext.classList.contains('disabled')) {
            buttonNext.classList.remove('disabled');
        }
        if (buttonPrevious.classList.contains('disabled')) {
            buttonPrevious.classList.remove('disabled');
        }
        counter++;
        if (counter == slidesCollection.length - 1) {
            buttonNext.classList.add('disabled');
            
        }
        slideElement.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)'; 	
    }
});

buttonPrevious.addEventListener('click', () => {
    if (counter > 0) {
        if (buttonPrevious.classList.contains('disabled')) {
            buttonPrevious.classList.remove('disabled');
        }
        if (buttonNext.classList.contains('disabled')) {
            buttonNext.classList.remove('disabled');
        }
        counter--;
        if (counter == 0) {
            buttonPrevious.classList.add('disabled');
        }
        slideElement.style.transform = 'translateX(' + (-imageWidth * counter) + 'px)';
    }    
});