let passwordInput = document.getElementById("password");
let length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "01234567890"
let symbol = "@#$%^&*()_+=-?><~"
let button = document.querySelector("button");
let allChars = upperCase + lowerCase + number + symbol;






function createPassword (){
    let password = '';
    while(password.length < length){
    password += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordInput.value = password;
    sessionStorage.setItem('pass', password)
}




button.onclick = ()=> {
    createPassword()
}




function copyPassword(){
    passwordInput.select();
    document.execCommand("copy")
        passwordInput.value = `copied`
    setTimeout(() => {
        passwordInput.value = sessionStorage.getItem('pass');
    }, 400);
}