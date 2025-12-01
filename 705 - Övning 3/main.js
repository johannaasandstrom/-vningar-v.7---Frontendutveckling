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

//function (event) = event representerar submit som är den typ vår knapp är - på så sätt når vi knappen men vi måste lägga till en händelse till hela formuläret för att kunna använda preventDefault då vi inte bara kan sätta det på knappen.