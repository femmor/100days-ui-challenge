const btn = document.getElementById("modalBtn");
const modal = document.getElementById("formModal");
const close = document.getElementById("close");

btn.addEventListener("click", () => {
   modal.style.display = "inline-block";
})

close.addEventListener("click", () => {
    modal.style.display = "none";
})

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
