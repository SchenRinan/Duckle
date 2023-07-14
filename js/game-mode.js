function gameMode(){
    putWordsOnscreen();
    moveWords();
    countdown();
    checkWord();
    loseLife();
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
        console.log(ctx.measureText(word).width)
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
    //   correctSound.play();
    }
    document.getElementById("score").innerHTML = `Score: ${score}`;
}

function loseLife() {
    if (document.getElementById('set-difficulty').value > 1) {
      document.getElementById("life").innerHTML = `Life: ${life}`;
    }
    for (i = 0; i < wordsOnscreen.length; i++) {
      if (wordsOnscreen[i].y > canvas.height + 50) {
        wordsOnscreen.splice(i, 1);
        if (document.getElementById('set-difficulty').value > 1) {
          life--;
          // lose life sound .play();
        }
      }
    }
  }