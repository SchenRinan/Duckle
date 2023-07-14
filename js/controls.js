const btnKid = document.getElementById("btn-kid");
const btnEasy = document.getElementById("btn-easy");
const btnMed = document.getElementById("btn-med");
const btnHard = document.getElementById("btn-hard");
const btnGerman = document.getElementById("btn-german");
const btnCustom = document.getElementById("btn-custom");

const btnAudio = document.getElementById("btn-aud");
const btnEffect = document.getElementById("btn-eff");

btnKid.addEventListener("click", () => {
    btnKid.classList.add("active");
    btnEasy.classList.remove("active");
    btnMed.classList.remove("active");
    btnHard.classList.remove("active");
    btnGerman.classList.remove("active");
    btnCustom.classList.remove("active");
    document.getElementById('des-kid').hidden = false;
    document.getElementById('des-easy').hidden = true;
    document.getElementById('des-med').hidden = true;
    document.getElementById('des-hard').hidden = true;
    document.getElementById('des-german').hidden = true;
    document.getElementById('des-custom1').style.display = 'none';
    document.getElementById('des-custom2').style.display = 'none';
    document.getElementById('des-custom3').style.display = 'none';
    document.getElementById('des-custom4').style.display = 'none';
    document.getElementById('set-goal').value = 3;
    document.getElementById('set-lives').value = 0;
    document.getElementById('set-speed').value = 1;
    document.getElementById('set-letters').value = 1;
    document.getElementById('set-difficulty').value = 1;
    ctx.font = "bold 15vw sans-serif";
})

btnEasy.addEventListener("click", () => {
    btnKid.classList.remove("active");
    btnEasy.classList.add("active");
    btnMed.classList.remove("active");
    btnHard.classList.remove("active");
    btnGerman.classList.remove("active");
    btnCustom.classList.remove("active");
    document.getElementById('des-kid').hidden = true;
    document.getElementById('des-easy').hidden = false;
    document.getElementById('des-med').hidden = true;
    document.getElementById('des-hard').hidden = true;
    document.getElementById('des-german').hidden = true;
    document.getElementById('des-custom1').style.display = 'none';
    document.getElementById('des-custom2').style.display = 'none';
    document.getElementById('des-custom3').style.display = 'none';
    document.getElementById('des-custom4').style.display = 'none';
    document.getElementById('set-goal').value = 3;
    document.getElementById('set-lives').value = 3;
    document.getElementById('set-speed').value = 1;
    document.getElementById('set-letters').value = 2;
    document.getElementById('set-difficulty').value = 2;
    ctx.font = "bold 3vw sans-serif";
})

btnMed.addEventListener("click", () => {
    btnKid.classList.remove("active");
    btnEasy.classList.remove("active");
    btnMed.classList.add("active");
    btnHard.classList.remove("active");
    btnGerman.classList.remove("active");
    btnCustom.classList.remove("active");
    document.getElementById('des-kid').hidden = true;
    document.getElementById('des-easy').hidden = true;
    document.getElementById('des-med').hidden = false;
    document.getElementById('des-hard').hidden = true;
    document.getElementById('des-german').hidden = true;
    document.getElementById('des-custom1').style.display = 'none';
    document.getElementById('des-custom2').style.display = 'none';
    document.getElementById('des-custom3').style.display = 'none';
    document.getElementById('des-custom4').style.display = 'none';
    document.getElementById('set-goal').value = 5;
    document.getElementById('set-lives').value = 3;
    document.getElementById('set-speed').value = 2;
    document.getElementById('set-letters').value = 3;
    document.getElementById('set-difficulty').value = 3;
    ctx.font = "bold 3vw sans-serif";
})

btnHard.addEventListener("click", () => {
    btnKid.classList.remove("active");
    btnEasy.classList.remove("active");
    btnMed.classList.remove("active");
    btnHard.classList.add("active");
    btnGerman.classList.remove("active");
    btnCustom.classList.remove("active");
    document.getElementById('des-kid').hidden = true;
    document.getElementById('des-easy').hidden = true;
    document.getElementById('des-med').hidden = true;
    document.getElementById('des-hard').hidden = false;
    document.getElementById('des-german').hidden = true;
    document.getElementById('des-custom1').style.display = 'none';
    document.getElementById('des-custom2').style.display = 'none';
    document.getElementById('des-custom3').style.display = 'none';
    document.getElementById('des-custom4').style.display = 'none';
    document.getElementById('set-goal').value = 0;
    document.getElementById('set-lives').value = 4;
    document.getElementById('set-speed').value = 3;
    document.getElementById('set-letters').value = 4;
    document.getElementById('set-difficulty').value = 4;
    ctx.font = "bold 3vw sans-serif";
})

btnGerman.addEventListener("click", () => {
    btnKid.classList.remove("active");
    btnEasy.classList.remove("active");
    btnMed.classList.remove("active");
    btnHard.classList.remove("active");
    btnGerman.classList.add("active");
    btnCustom.classList.remove("active");
    document.getElementById('des-kid').hidden = true;
    document.getElementById('des-easy').hidden = true;
    document.getElementById('des-med').hidden = true;
    document.getElementById('des-hard').hidden = true;
    document.getElementById('des-german').hidden = false;
    document.getElementById('des-custom1').style.display = 'none';
    document.getElementById('des-custom2').style.display = 'none';
    document.getElementById('des-custom3').style.display = 'none';
    document.getElementById('des-custom4').style.display = 'none';
    document.getElementById('set-goal').value = 0;
    document.getElementById('set-lives').value = 4;
    document.getElementById('set-speed').value = 3;
    document.getElementById('set-letters').value = 4;
    document.getElementById('set-difficulty').value = 5;
    ctx.font = "bold 3vw sans-serif";
})

btnCustom.addEventListener("click", () => {
    btnKid.classList.remove("active");
    btnEasy.classList.remove("active");
    btnMed.classList.remove("active");
    btnHard.classList.remove("active");
    btnGerman.classList.remove("active");
    btnCustom.classList.add("active");
    document.getElementById('des-kid').hidden = true;
    document.getElementById('des-easy').hidden = true;
    document.getElementById('des-med').hidden = true;
    document.getElementById('des-hard').hidden = true;
    document.getElementById('des-german').hidden = true;
    document.getElementById('des-custom1').style.display = 'block';
    document.getElementById('des-custom2').style.display = 'block';
    document.getElementById('des-custom3').style.display = 'block';
    document.getElementById('des-custom4').style.display = 'block';
    document.getElementById('set-difficulty').value = 6;
    ctx.font = "bold 3vw sans-serif";
})


//controls for audio effects missing
//start the game button still needs work
btnAudio.addEventListener("click", () => {
    if(document.getElementById('btn-aud').classList.contains('active')){ music.volume = 1; }
    else{ music.volume = 0; }
})

btnEffect.addEventListener("click", () => {
    if(document.getElementById('btn-eff').classList.contains('active')){ 
        correctSound.volume = 1;
        winSound.volume = 1;
        loseSound.volume = 1;
    }
    else{ 
        correctSound.volume = 0;
        winSound.volume = 0;
        loseSound.volume = 0;
    }
})

document.getElementById('btn-start').addEventListener('click', () => {
    // console.log(document.getElementById('goal').value)
    // console.log(document.getElementById('lives').value)
    // console.log(document.getElementById('speed').value)
    // console.log(document.getElementById('letters').value)
    // console.log(document.getElementById('difficulty').value)
    dataGather();
    canvas.style.filter = "blur(0px)";
    life = +document.getElementById('set-lives').value;
    // console.log(wordsArray)
    document.getElementById('startmenu').style.display = 'none';
    document.getElementById('game-hud').style.display = 'block';
    window.location = "#typeHere";
    animation = true;
    game();
    music.play();
})

document.getElementById('btn-reset').addEventListener('click', () => {
    // console.log(document.getElementById('goal').value)
    // console.log(document.getElementById('lives').value)
    // console.log(document.getElementById('speed').value)
    // console.log(document.getElementById('letters').value)
    // console.log(document.getElementById('difficulty').value)
    // dataGather();
    // canvas.style.filter = "blur(0px)";
    // life = +document.getElementById('set-lives').value;
    // console.log(wordsArray)
    timer = 61;
    frames = 0;
    score = 0;
    wordsOnscreen.length = 0;
    document.getElementById('startmenu').style.display = 'block';
    document.getElementById('game-hud').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('lose').style.display = 'none';
    document.getElementById('win').style.display = 'none';
    // window.location = "#typeHere";
    // animation = true;
    // game();
})