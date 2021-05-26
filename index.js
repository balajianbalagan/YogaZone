


var navlinks = document.getElementById("navlinks")
navlinks.style.right = "-200px";
navlinks.style.opacity = "1";
function closeMenu(){
  navlinks.style.transition = "1s";
  navlinks.style.right = "-200px";
  navlinks.style.opacity = "0";
}
function showMenu(){
  navlinks.style.transition = "1s";
  navlinks.style.right = "0";
  navlinks.style.opacity = "1";
}
if(window.innerWidth<=700){
  showMenu();

}
if(window.innerWidth>700){

  showMenu();
  navlinks.style.right = "0";
  navlinks.style.opacity = "1";
}



// form validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const phone = document.getElementById('phone');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value;
	const emailValue = email.value.trim();
	const genderval = gender.value;
	const phonevalue = phone.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}



	if(phonevalue === '') {
		setErrorFor(phone, 'Phone number cannot be blank');
	}
	else{
		setSuccessFor(phone);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
var clickBot = document.querySelector("#submit")
clickBot.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));

clickBot.addEventListener("click",function(){
    
    var nameVal = document.getElementById("username").value;
    document.querySelector("#intro-tbox").style.fontSize = "14px";
    document.querySelector("#intro-tpara").innerHTML = "<p> Hey "+ nameVal+"! Our executives will contact you soon.</p>";
    document.querySelector("#formcontainer").innerHTML = "<h1>Your details are submitted successfully!</h1>";


    // alert("Welcome "+nameVal+ " your details are submitted.");
})
