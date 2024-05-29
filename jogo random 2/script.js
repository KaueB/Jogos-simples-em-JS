function load() {
    const min = -50;
    const max = 50;
    const resultadoNum = Math.floor(Math.random() * (max - min + 1)) + min;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = resultadoNum;

    resultadoNum === 0 ? parabens() : undefined

    handleButton();
}

function handleButton() {
    for (let e = 1; e <= 4; e++) {
        document.getElementById(`botao${e}`).value = Math.floor(Math.random() * 50);
    }
}

function parabens() {
    for (let e = 1; e <= 4; e++) {
        document.getElementById(`botao${e}`).style.display = 'none'
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "Parabéns"

    document.getElementById('reiniciar').style.display = 'block'

    return
}

function botao(value) {
    let resultado = document.getElementById('resultado');
    let resultadoNumero = Number(resultado.innerHTML);
    let valorNumero = Number(value);

    if (resultadoNumero > 0) {
        resultado.innerHTML = resultadoNumero - valorNumero;
    } else {
        resultado.innerHTML = resultadoNumero + valorNumero;
    };

    Number(document.getElementById('resultado').innerHTML) === 0 ? parabens() : undefined

    handleButton();
}

function reiniciar() {
    window.location.reload();
}