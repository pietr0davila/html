let checkBox = document.querySelector("input#regrasCheckbox");
let btn = document.querySelector("button#button");
let init = new Date().getTime();

setTimeout(function () {
    btn.disabled = false;
}, 100); // Habilita o botão após 1 minuto

checkBox.addEventListener("change", function () {
    btn.disabled = !this.checked;
});

btn.addEventListener("click", function () {
    let currentTime = new Date().getTime();
    let elapsedTime = (currentTime - init) / 1000;

    if (!checkBox.checked) {
        alert("Por favor, leia e concorde com as regras antes de começar.");
    } else if (elapsedTime < 10) {
        alert("Por favor, espere 1 minuto antes de continuar.");
    } else {
        sessionStorage.setItem('regrasAceitas', 'true');
        window.location.href = "pages/desafio1.html";
    }
});

window.addEventListener("beforeunload", function (e) {
    if (sessionStorage.getItem('regrasAceitas') !== 'true') {
        e.preventDefault();
        e.returnValue = '';
    }
});