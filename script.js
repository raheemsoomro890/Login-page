const container = document.getElementById("container");

const registerBtn = document.getElementById("register");

const loginBtn = document.getElementById("login");


/* SIGN UP BUTTON */

registerBtn.addEventListener("click", () => {

    container.classList.add("active");

});


/* SIGN IN BUTTON */

loginBtn.addEventListener("click", () => {

    container.classList.remove("active");

});
