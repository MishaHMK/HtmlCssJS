const modalObj = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
    modalObj.style.visibility = "visible";
});

closeBtn.addEventListener("click", function () {
    modalObj.style.visibility = "hidden";
});