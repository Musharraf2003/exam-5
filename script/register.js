const $nameInput = document.querySelector(".Name");
const $avatarInput = document.querySelector(".Avatar");
const $emailInput = document.querySelector(".Email");
const $passwordInput = document.querySelector(".Password");
const $createForm = document.querySelector(".account-create");
// https://api.escuelajs.co/api/v1/users/


$createForm.addEventListener('submit', createUser);

function createUser(e){
    e.preventDefault();
    if($nameInput.value.trim().length > 0){
        fetch("https://api.escuelajs.co/api/v1/users/", {
            method: "POST", 
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(
                {
                    name: $nameInput.value,
                    email: $emailInput.value,
                    password: $passwordInput.value,
                    avatar: $avatarInput.value
                }
            )
        })
        .then(response => response.json())
        .then(user => functionCheck(user))
        $avatarInput.value = "";
        $emailInput.value = "";
        $nameInput.value = "";
        $passwordInput.value = "";
    }
    else{
        alert("Please, enter your name!");
    }
}


function functionCheck(data){
    if(data){
        window.location.replace("http://127.0.0.1:5500/index.html");
    }
}
