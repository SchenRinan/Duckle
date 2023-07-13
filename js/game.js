let frames = 0;
let score = 0;
let life = 4;
let animation;
let difficulty = document.getElementById('difficulty').value;
const input = document.getElementById("typeHere");
const wordsOnscreen = [];
let iWord;

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(duckBG, 0, 0, canvas.width, canvas.height);
    document.getElementById('goal').innerHTML = `Goal: ${+document.getElementById('goal').value}`;
    frames++;
    generateWords();
    animation = requestAnimationFrame(game);
}

function generateWords() {
    if(+document.getElementById('difficulty').value === 1){
        kidsMode();
    }
}

function dataGather() {
    if(+document.getElementById('difficulty').value === 1 || (+document.getElementById('difficulty').value === 6 && +document.getElementById('letters').value === 1)){
        wordsArray = wordsThree.concat(wordsFour);}
    if(+document.getElementById('difficulty').value === 2 || (+document.getElementById('difficulty').value === 6 && +document.getElementById('letters').value === 2)){
        wordsArray = wordsFour.concat(wordsFive);}
    if(+document.getElementById('difficulty').value === 3 || (+document.getElementById('difficulty').value === 6 && +document.getElementById('letters').value === 3)){
        wordsArray = wordsFive.concat(wordsSix).concat(wordsSeven);}
    if(+document.getElementById('difficulty').value === 4 || (+document.getElementById('difficulty').value === 6 && +document.getElementById('letters').value === 4)){
        wordsArray = wordsTen.concat(wordsNine).concat(wordsEight).concat(wordsFive).concat(wordsSix).concat(wordsSeven);}
    if(+document.getElementById('difficulty').value == 5){wordsArray = wordsGerman;}
}