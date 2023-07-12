const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const duckBG = new Image();
duckBG.src = "./images/Ducks.jpg";

window.onload = () => {
    ctx.drawImage(duckBG, 0, 0, canvas.width, canvas.height);
    canvas.style.filter = "blur(5px)";
}