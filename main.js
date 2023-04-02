const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

function generateColor(){
    hex.innerHTML = "#" + Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = hex.innerHTML
}

generateColor()

btn.addEventListener("click", generateColor);