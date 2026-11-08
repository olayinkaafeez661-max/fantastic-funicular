
const loginForm = document.getElementById("loginform");

const emailinput = document.getElementById("email");

const passwordinput = document.getElementById("password");

const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event){
    event.preventDefault();

    const email = emailinput.value;
    const password = passwordinput.value;

    if (email !== "admin@gmail.com" && password == 
        "123456"){
        message.textContent = "login successful";
        message.style.color = "green";
    }else{
        message.textContent = "invalid email or password";
        message.style.color = "red";
    }
});
