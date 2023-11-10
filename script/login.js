const $loginForm = document.querySelector(".login-form");
const $email = document.querySelector(".email-login");

$loginForm.addEventListener('submit', checkLogIn);

function checkLogIn(e){
    e.preventDefault();
    fetch("https://api.escuelajs.co/api/v1/users/is-available", {
    method : "POST",
    headers: {
        "Content-type" : "application/json"
    },
    body: JSON.stringify(
        {
            email: $email.value
        }
    )
    })
    .then(response => response.json())
    .then(user => available(user))
    $email.value = "";
}

function available(user){
    if(user){
        window.location.replace("http://127.0.0.1:5500/index.html");
    }
}