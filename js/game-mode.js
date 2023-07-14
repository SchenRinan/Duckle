function gameMode(){
    putWordsOnscreen();
    moveWords();
    countdown();
    checkWord();
    loseLife();
    win();
    lose();
}

function countdown() {
    if (frames % 60 === 0 && document.getElementById('set-difficulty').value > 1) {
      timer--;
      document.getElementById("timer").innerHTML = `Timer: ${timer}`;
    }
}

class WordGenerator {
    constructor(startingx, color, word, y, fallspeed) {
      this.startingx = startingx;
      this.color = color;
      this.word = word.toLowerCase();
      this.y = y;
      this.fallspeed = fallspeed;
    }
  
    update() {
      ctx.fillStyle = this.color;
      ctx.fillText(this.word, this.startingx, this.y);
    }
  }

function putWordsOnscreen(){
    if (frames % (140 - 30 * document.getElementById('set-speed').value) === 0) {
        let iWord = Math.floor(Math.random() * wordsArray.length);
        // let direction = Math.floor(Math.random() * 2);
        let word = wordsArray[iWord];
        let y = 0;
        let startingx = Math.floor(Math.random() * (canvas.width - ctx.measureText(word).width));
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let color = `rgb(${red},${green},${blue})`;
        let fallspeed = Math.floor(Math.random() * document.getElementById('set-speed').value);
        // if (direction === 0) {
        //   x = canvas.width;
        // }
        // if (direction === 1) {
        //   x = -ctx.measureText(word).width;
        // }
        wordsOnscreen.push(
          new WordGenerator(startingx, color, word, y, fallspeed)
        );
    }
}

function moveWords() {
    for (i = 0; i < wordsOnscreen.length; i++) {
        wordsOnscreen[i].y += (1 + wordsOnscreen[i].fallspeed);
        wordsOnscreen[i].update();
    }
}

function checkWord() {
    let isolateWord = wordsOnscreen.map((item) => item.word);
    if (isolateWord.includes(input.value)) {
      wordsOnscreen.splice(isolateWord.indexOf(input.value), 1);
      input.value = "";
      score++;
      correctSound.play();
    }
    document.getElementById("score").innerHTML = `Score: ${score}`;
}

function loseLife() {
  for (i = 0; i < wordsOnscreen.length; i++) {
    if (wordsOnscreen[i].y > canvas.height + 50) {
      wordsOnscreen.splice(i, 1);
      if (+document.getElementById("set-lives").value > 0) {
        life--;
        // lose life sound .play();
        loseSound.play();
      }
    }
  }
  if (document.getElementById('set-difficulty').value > 1) {
    document.getElementById("life").innerHTML = `Life: ${life}`;
  }
}

function win() {
  if(+document.getElementById("set-goal").value > 0){
    if(score === +document.getElementById("set-goal").value ){
      canvas.style.filter = "blur(5px)";  
      animation = false;
      // cancelAnimationFrame();
      // togglescreen("gameover-screen", true);
      document.getElementById('end-screen').style = 'block';
      document.getElementById('win').style = 'height: 300px; display: block;';
      music.pause();
      winSound.play();
    }
  }
}

//lose condition
function lose() {
  if(+document.getElementById("set-lives").value > 0){
    if (life < 1) {
        
      // togglescreen("gameover-screen", true);
      canvas.style.filter = "blur(5px)";
      document.getElementById('end-screen').style = 'block';
      document.getElementById('lose').style = 'height: 300px; display: block;;';
      // music.pause();
      // loseSound.play();
      // cancelAnimationFrame();
      animation = false;
    }
  }
  // if (difficulty > 1 && life < 1) {
  //   cancelAnimationFrame(animation);
  //   togglescreen("gameover-screen", true);
  //   canvas.style.filter = "blur(5px)";
  //   document.getElementById('win-lose').innerHTML = '<img src="./images/te856-removebg-preview.png" id="lose" alt=""/>';
  //   music.pause();
  //   loseSound.play();
  // }
}