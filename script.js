var log = document.getElementById("login");
var reg = document.getElementById("register");
var btn = document.getElementById("btn");

function register(){
    log.style.left = "-400px";
    reg.style.left = "50px";
    btn.style.left = "110px"
}

function login(){
    log.style.left = "50px";
    reg.style.left = "450px";
    btn.style.left = "0px"
}