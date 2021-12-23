const body = document.body;
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let activeSlide = 0;

next.addEventListener('click', () => {
    activeSlide++;

    if(activeSlide > slides.length - 1){
        activeSlide = 0;
    }

    setInitialBg();
    setActiveSlide();
});

prev.addEventListener('click', () => {
    activeSlide--;

    if(activeSlide < 0){
        activeSlide = slides.length - 1;
    }

    setInitialBg();
    setActiveSlide();
});

setInitialBg();

function setInitialBg(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide(){
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[activeSlide].classList.add('active');
}