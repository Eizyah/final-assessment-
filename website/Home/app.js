let index = 0;
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");

function showSlides(i) {
    index = i;
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function next(){
    index = (index + 1) % dots.length;
    showSlides(index);
}

function previous(){
    index = (index - 1 + dots.length) % dots.length;
    showSlides(index)
}

function goToSlide(i){
    showSlides(i);
}