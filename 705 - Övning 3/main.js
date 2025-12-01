const username = document.querySelector("#username");
const password = document.querySelector("#password");
const Login = document.querySelector("#Login");
const message = document.querySelector("#message");
const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    if(
        username.value !== "" && password.value !== ""
    ){
        message.textContent = "Inloggningen lyckades!"
    }
});