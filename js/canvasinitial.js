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
const music = document.getElementById("music");
const correctSound = document.getElementById("correct-sound");
const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");
music.volume = 0.5;
correctSound.volume = 1;
winSound.volume = 1;
loseSound.volume = 1;

window.onload = () => {
    music.load();
    ctx.font = "bold 15vw sans-serif";
    ctx.drawImage(duckBG, 0, 0, canvas.width, canvas.height);
    canvas.style.filter = "blur(5px)";
    document.getElementById('set-goal').value = 3;
    document.getElementById('set-lives').value = 0;
    document.getElementById('set-speed').value = 1;
    document.getElementById('set-letters').value = 1;
    document.getElementById('set-difficulty').value = 1;
}