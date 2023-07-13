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
    document.getElementById('goal').value = 3;
    document.getElementById('lives').value = 0;
    document.getElementById('speed').value = 1;
    document.getElementById('letters').value = 1;
    document.getElementById('difficulty').value = 1;
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
    document.getElementById('goal').value = 3;
    document.getElementById('lives').value = 3;
    document.getElementById('speed').value = 1;
    document.getElementById('letters').value = 2;
    document.getElementById('difficulty').value = 2;
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
    document.getElementById('goal').value = 5;
    document.getElementById('lives').value = 3;
    document.getElementById('speed').value = 2;
    document.getElementById('letters').value = 3;
    document.getElementById('difficulty').value = 3;
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
    document.getElementById('goal').value = 0;
    document.getElementById('lives').value = 4;
    document.getElementById('speed').value = 3;
    document.getElementById('letters').value = 4;
    document.getElementById('difficulty').value = 4;
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
    document.getElementById('goal').value = 0;
    document.getElementById('lives').value = 4;
    document.getElementById('speed').value = 3;
    document.getElementById('letters').value = 4;
    document.getElementById('difficulty').value = 5;
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
})


//controls for audio effects missing
//start the game button still needs work
btnAudio.addEventListener("click", () => {
    console.log('audio button')
})

btnEffect.addEventListener("click", () => {
    console.log('Effect button')
})

document.getElementById('btn-start').addEventListener('click', () => {
    console.log(document.getElementById('goal').value)
    console.log(document.getElementById('lives').value)
    console.log(document.getElementById('speed').value)
    console.log(document.getElementById('letters').value)
    console.log(document.getElementById('difficulty').value)
    // document.getElementById('startmenu').style.display = 'none';
})