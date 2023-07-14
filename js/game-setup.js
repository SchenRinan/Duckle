let animation;
const input = document.getElementById("typeHere");
const wordsOnscreen = [];
let iWord;

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(duckBG, 0, 0, canvas.width, canvas.height);
    document.getElementById('goal').innerHTML = `Goal: ${+document.getElementById('set-goal').value}`;
    frames++;
    generateWords();
    if(animation){ requestAnimationFrame(game);  }
    // animation = requestAnimationFrame(game);
}

function generateWords() {
    if(+document.getElementById('set-difficulty').value === 1){
        kidsMode();
    }
    else{ gameMode(); }
}

function dataGather() {
    if(+document.getElementById('set-difficulty').value === 1 || (+document.getElementById('set-difficulty').value === 6 && +document.getElementById('letters').value === 1)){
        wordsArray = wordsThree.concat(wordsFour);}
    if(+document.getElementById('set-difficulty').value === 2 || (+document.getElementById('set-difficulty').value === 6 && +document.getElementById('letters').value === 2)){
        wordsArray = wordsFour.concat(wordsFive);}
    if(+document.getElementById('set-difficulty').value === 3 || (+document.getElementById('set-difficulty').value === 6 && +document.getElementById('letters').value === 3)){
        wordsArray = wordsFive.concat(wordsSix).concat(wordsSeven);}
    if(+document.getElementById('set-difficulty').value === 4 || (+document.getElementById('set-difficulty').value === 6 && +document.getElementById('letters').value === 4)){
        wordsArray = wordsTen.concat(wordsNine).concat(wordsEight).concat(wordsFive).concat(wordsSix).concat(wordsSeven);}
    if(+document.getElementById('set-difficulty').value == 5){wordsArray = wordsGerman;}
}

