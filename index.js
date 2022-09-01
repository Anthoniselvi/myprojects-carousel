const slides = document.getElementsByClassName('project-list');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('next-button').addEventListener('click', moveToNextSlide);
document.getElementById('prev-button').addEventListener('click', moveToPrevSlide);

function hideAllSlides(){
    for (let slide of slides){
        slide.classList.remove('project-list-visible');
        slide.classList.add('project-list-hidden');
    }
}

function moveToNextSlide(){
    hideAllSlides();
    if (slidePosition === totalSlides - 1){
    slidePosition = 0;
    }else {
    slidePosition ++;
    }
    slides[slidePosition].classList.add("project-list-visible");
}

function moveToPrevSlide(){
    hideAllSlides();
    if (slidePosition === 0){
    slidePosition = totalSlides - 1;
    }else {
    slidePosition --;
    }
    slides[slidePosition].classList.add("project-list-visible");
}