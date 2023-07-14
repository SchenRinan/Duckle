function kidsMode(){
    if(wordsOnscreen.length === 0){
        iWord = Math.floor(Math.random() * wordsArray.length);
        wordsOnscreen.push(wordsArray[iWord]);
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let color = `rgb(${red},${green},${blue})`;
        ctx.fillStyle = color;
    }
    ctx.font = "bold 15vw sans-serif";
    ctx.fillText(wordsOnscreen[0].toLowerCase(), (canvas.width - ctx.measureText(wordsOnscreen[0].toLowerCase()).width)/2, canvas.height*.6);
    checkWordKids();
}

function checkWordKids() {
    if (wordsOnscreen[0].toLowerCase() === input.value.toLowerCase()) {
        wordsOnscreen.splice(0, 1);
        input.value = "";
        score++;
        // correctSound.play();
    }
    document.getElementById("score").innerHTML = `Score: ${score}`;
  }