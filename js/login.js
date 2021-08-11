var loginImageSm = document.getElementById("loginImageSm");
var loginImageLg = document.getElementById("loginImageLg");
var modalBg = document.querySelector(".login-modal-bg");
var modalClose = document.querySelector(".close");

loginImageLg.addEventListener("click", function() {
    modalBg.classList.add("bg-active");
});

loginImageSm.addEventListener("click", function() {
    modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function() {
    modalBg.classList.remove("bg-active");
});

document.getElementById("loginContinue").onclick = function() {
    location.href = "dashboard.html";
};