const menuIcon = document.querySelector('.menu-icon'),
    header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');

    header.classList.toggle('header--mobile')
});


//slider wrapper//

const sliderArrows = document.querySelector('.slider-arrows');
const slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item'),
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
    
    // Hide all slides
    slidesArrows.forEach(item => item.style.display = 'none');
    
    // Show the current slide
    slidesArrows[slideIndex].style.display = 'block';
}

// Show the initial slide
showSlideArrows();




// slider-dots //

const sliderDots = document.querySelector('.slider-dots'),
      slidesDots = sliderDots.querySelectorAll('.slider-dots__item'),
      wrapperDots = sliderDots.querySelector('.slider-dots__nav');

const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
    const dot = document.createElement('button');

    dot.dataset.slideTo = i;

    dot.classList.add('slider-dots__nav-item'); // No dot (.) needed
    if (i == 0) dot.classList.add('slider-dots__nav-item--active');

    if (i != 0) slidesDots[i].style.display = 'none'; // Hide all slides except the first one
    dot.addEventListener('click', showSlideDots);

    wrapperDots.append(dot);
    dots.push(dot);
}

function showSlideDots(e) {
    const slideTo = e.target.dataset.slideTo;

    // Hide all slides
    slidesDots.forEach(item => item.style.display = 'none');

    // Show the selected slide
    slidesDots[slideTo].style.display = 'block';

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));

    // Add active class to the clicked dot
    e.target.classList.add('slider-dots__nav-item--active');
}




