let resultadoNum = Math.floor(-100*Math.random()*100);
let resultadoB1 = Math.floor(+100 * Math.random() - 100);
let resultadoB2 = Math.floor(-100 * Math.random() + 100);
let resultadoB3 = Math.floor(-100 * Math.random() + 100);

function load() {    
    resultado = document.getElementById('resultado');
    resultado.innerHTML = resultadoNum;
    document.getElementById('botao1').value = resultadoB1;
    document.getElementById('botao2').value = resultadoB2;
    document.getElementById('botao3').value = resultadoB3;
}

function botao1() {
    resultadoNum = resultadoNum + resultadoB1
    resultado.innerHTML = resultadoNum
    resultadoB1 = Math.floor(+ 100 * Math.random() - 100);
    document.getElementById('botao1').value = resultadoB1
    resultadoB2 = Math.floor(- 100 * Math.random() + 100);
    document.getElementById('botao2').value = resultadoB2
    resultadoB3 = Math.floor(+ 100 * Math.random() - 100);
    document.getElementById('botao3').value = resultadoB3
}
function botao2() {
    resultadoNum = resultadoNum + resultadoB2
    resultado.innerHTML = resultadoNum
    resultadoB1 = Math.floor(+ 100 * Math.random() - 100);
    document.getElementById('botao1').value = resultadoB1
    resultadoB2 = Math.floor(- 100 * Math.random() + 100);
    document.getElementById('botao2').value = resultadoB2
    resultadoB3 = Math.floor(+ 100 * Math.random() - 100);
    document.getElementById('botao3').value = resultadoB3
} 
function botao3() {
    resultadoNum = resultadoNum + resultadoB3
    resultado.innerHTML = resultadoNum
    resultadoB1 = Math.floor(+ 100 * Math.random() - 100);
    document.getElementById('botao1').value = resultadoB1
    resultadoB2 = Math.floor(- 100 * Math.random() +100);
    document.getElementById('botao2').value = resultadoB2
    resultadoB3 = Math.floor(+ 100 * Math.random() - 100);
    document.getElementById('botao3').value = resultadoB3
}