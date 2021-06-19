let resultadoNum = Math.floor(Math.random() * 100);
let resultadoB1 = Math.floor(Math.random() * 50);
let resultadoB2 = Math.floor(Math.random() * 50);
let resultadoB3 = Math.floor(Math.random() * -50);
let resultadoB4 = Math.floor(Math.random() * -50);

function load() {    
    resultado = document.getElementById('resultado');
    resultado.innerHTML = resultadoNum;
    document.getElementById('botao1').value = resultadoB1;
    document.getElementById('botao2').value = resultadoB2;
    document.getElementById('botao3').value = resultadoB3;
    document.getElementById('botao4').value = resultadoB4
}

function botao1() {
    resultadoNum = resultadoNum + resultadoB3
    resultado.innerHTML = resultadoNum
    resultadoB1 = Math.floor(Math.random() * 50);
    document.getElementById('botao1').value = resultadoB1
    resultadoB2 = Math.floor(Math.random() * 50);
    document.getElementById('botao2').value = resultadoB2
    resultadoB3 = Math.floor(Math.random() * -50);
    document.getElementById('botao3').value = resultadoB3
    resultadoB4 = Math.floor(Math.random() * -50);
    document.getElementById('botao4').value = resultadoB4
}

function botao2() {
    resultadoNum = resultadoNum + resultadoB3
    resultado.innerHTML = resultadoNum
    resultadoB1 = Math.floor(Math.random() * 50);
    document.getElementById('botao1').value = resultadoB1
    resultadoB2 = Math.floor(Math.random() * 50);
    document.getElementById('botao2').value = resultadoB2
    resultadoB3 = Math.floor(Math.random() * -50);
    document.getElementById('botao3').value = resultadoB3
    resultadoB4 = Math.floor(Math.random() * -50);
    document.getElementById('botao4').value = resultadoB4
} 
function botao3() {
    resultadoNum = resultadoNum + resultadoB3
    resultado.innerHTML = resultadoNum
    resultadoB1 = Math.floor(Math.random() * 50);
    document.getElementById('botao1').value = resultadoB1
    resultadoB2 = Math.floor(Math.random() * 50);
    document.getElementById('botao2').value = resultadoB2
    resultadoB3 = Math.floor(Math.random() * -50);
    document.getElementById('botao3').value = resultadoB3
    resultadoB4 = Math.floor(Math.random() * -50);
    document.getElementById('botao4').value = resultadoB4
}

function botao4() {
    resultadoNum = resultadoNum + resultadoB3
    resultado.innerHTML = resultadoNum
    resultadoB1 = Math.floor(Math.random() * 50);
    document.getElementById('botao1').value = resultadoB1
    resultadoB2 = Math.floor(Math.random() * 50);
    document.getElementById('botao2').value = resultadoB2
    resultadoB3 = Math.floor(Math.random() * -50);
    document.getElementById('botao3').value = resultadoB3
    resultadoB4 = Math.floor(Math.random() * -50);
    document.getElementById('botao4').value = resultadoB4
}