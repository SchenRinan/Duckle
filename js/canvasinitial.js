const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const duckBG = new Image();
duckBG.src = "./images/Ducks.jpg";
let wordsArray = [];
let frames = 0;
let score = 0;
let life;
let timer = 61;
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerWidth * 0.4;

window.onload = () => {
    ctx.font = "bold 3vw sans-serif";
    ctx.drawImage(duckBG, 0, 0, canvas.width, canvas.height);
    canvas.style.filter = "blur(5px)";
    document.getElementById('set-goal').value = 3;
    document.getElementById('set-lives').value = 0;
    document.getElementById('set-speed').value = 1;
    document.getElementById('set-letters').value = 1;
    document.getElementById('set-difficulty').value = 1;
}