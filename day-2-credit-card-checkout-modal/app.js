
const btn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
// const btnClose = document.getElementById("close");

btn.addEventListener("click", () => {
    modal.style.display = "block";
})

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("cardSlide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }