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
    ctx.fillText(wordsOnscreen[0].toLowerCase(), 2 * canvas.width / 3 - ctx.measureText(wordsOnscreen[0].toLowerCase()).width, canvas.height*.6);
}