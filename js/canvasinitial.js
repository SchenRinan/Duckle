const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const duckBG = new Image();
duckBG.src = "./images/Ducks.jpg";
let wordsArray = [];
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerWidth * 0.4;

window.onload = () => {
    ctx.drawImage(duckBG, 0, 0, canvas.width, canvas.height);
    canvas.style.filter = "blur(5px)";
    document.getElementById('goal').value = 3;
    document.getElementById('lives').value = 0;
    document.getElementById('speed').value = 1;
    document.getElementById('letters').value = 1;
    document.getElementById('difficulty').value = 1;
}