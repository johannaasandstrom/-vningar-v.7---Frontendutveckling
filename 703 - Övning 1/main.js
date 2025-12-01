const sendBtn = document.querySelector("#sendBtn");
const message = document.querySelector("#message");
const username = document.querySelector("#name");
const email = document.querySelector("#email");


    sendBtn.addEventListener("click", () =>{

        if(
            username.value === ""  || email.value === ""
        ){
        message.textContent = "Vänligen fyll i alla fälten";
        }

    else {
        message.textContent = "Tack för din registrering!";
    }
    })
