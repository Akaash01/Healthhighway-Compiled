var loginImageSm = document.getElementById("loginImageSm");
var loginImageLg = document.getElementById("loginImageLg");
var modalBg = document.querySelector(".login-modal-bg");
var modalClose = document.querySelector(".close");
var navbar = document.querySelector("nav");
var OTP = document.getElementById("OTP");
var phoneNumber = document.getElementById("phoneNumber");
var loginContinue = document.getElementById("loginContinue");
var phoneDiv = document.getElementById("phoneDiv");
var loginModal = document.querySelector(".login-modal");
var modalBack = document.getElementById("modalBack");

phoneDivActive = () => {
    phoneDiv.style.display = "block";
    loginModal.classList.add("phoneDivActive");
    OTP.style.display = "none";
    loginModal.classList.remove("OTPActive");
    phoneNumber.innerHTML = "";
    phoneDiv.style.display = "flex";
};

OTPDivActive = () => {
    phoneDiv.style.display = "none";
    loginModal.classList.remove("phoneDivActive");
    OTP.style.display = "block";
    loginModal.classList.add("OTPActive");
    phoneNumber.classList.add("phone");
};

modalCloseFunction = () => {
    modalBg.classList.remove("bg-active");
    phoneDivActive();
};

modalOpenFunction = () => {
    modalBg.classList.add("bg-active");
    navbar.style.zIndex = "0";
};

loginImageLg.addEventListener("click", function() {
    modalOpenFunction();
});

loginImageSm.addEventListener("click", function() {
    modalOpenFunction();
});

modalClose.addEventListener("click", function() {
    modalCloseFunction();
});

loginContinue.onclick = function() {
    let inputText = parseInt(document.querySelector("#inputPhoneNo").value);
    phoneNumber.innerHTML = inputText;
    OTPDivActive();
};

modalBack.onclick = function() {
    phoneDivActive();
};

// code for otp input
$(function() {
    "use strict";

    var body = $("body");

    function goToNextInput(e) {
        var key = e.which,
            t = $(e.target),
            sib = t.next("input");

        if (key != 9 && (key < 48 || key > 57)) {
            e.preventDefault();
            return false;
        }

        if (key === 9) {
            return true;
        }

        if (!sib || !sib.length) {
            sib = body.find("input").eq(0);
        }
        sib.select().focus();
    }

    function onKeyDown(e) {
        var key = e.which;

        if (key === 9 || (key >= 48 && key <= 57)) {
            return true;
        }

        e.preventDefault();
        return false;
    }

    function onFocus(e) {
        $(e.target).select();
    }

    body.on("keyup", "input", goToNextInput);
    body.on("keydown", "input", onKeyDown);
    body.on("click", "input", onFocus);
});