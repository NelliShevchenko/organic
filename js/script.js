const menuIcon = document.querySelector('.menu-icon'),
    header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');

    header.classList.toggle('header--mobile')
});


//slider wrapper//

const sliderArrows = document.querySelector('.slider-arrows');
slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item'),
    prev = sliderArrows.querySelector('.slider-arrows__arrow--left'),
    next = sliderArrows.querySelector('.slider-arrows__arrow--right');

          
console.log(next);

let slideIndex = 0;

prev.addEventListener('click', () => showSlideArrows(-1));
next.addEventListener('click', () => showSlideArrows(1));

function showSlideArrows(n = 0) {
    slideIndex += n;

    if (slideIndex < 0) slideIndex = slidesArrows.length - 1;
    if (slideIndex >= slidesArrows.length) slideIndex = 0;
    

    sliderArrows.forEach(item => item.style.display = 'none');
    slidesArrows[slideIndex].style.display = 'block';

}
showSlideArrows();