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
    document.getElementById("otp-div").reset();
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

let in1 = document.getElementById('otp-1'),
    ins = document.querySelectorAll('input[type="number"]'),
	 splitNumber = function(e) {
		let data = e.data || e.target.value; 
		if ( ! data ) return; 
		if ( data.length === 1 ) return; 
		
		popuNext(e.target, data);
	},
	popuNext = function(el, data) {
		el.value = data[0]; 
		data = data.substring(1); 
		if ( el.nextElementSibling && data.length ) {
			popuNext(el.nextElementSibling, data);
		}
	};

ins.forEach(function(input) {
	input.addEventListener('keyup', function(e){
		if (e.keyCode === 16 || e.keyCode == 9 || e.keyCode == 224 || e.keyCode == 18 || e.keyCode == 17) {
			 return;
		}
		
		if ( (e.keyCode === 8 || e.keyCode === 37) && this.previousElementSibling && this.previousElementSibling.tagName === "INPUT" ) {
			this.previousElementSibling.select();
		} else if (e.keyCode !== 8 && this.nextElementSibling) {
			this.nextElementSibling.select();
		}
		
		if ( e.target.value.length > 1 ) {
			splitNumber(e);
		}
	});
	
	input.addEventListener('focus', function(e) {
		if ( this === in1 ) return;
		
		if ( in1.value == '' ) {
			in1.focus();
		}
		
		if ( this.previousElementSibling.value == '' ) {
			this.previousElementSibling.focus();
		}
	});
});


in1.addEventListener('input', splitNumber);