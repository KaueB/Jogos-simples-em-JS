window.onload = function () {
    document.getElementById('reiniciar').style.visibility = 'hidden';
    document.getElementById('num').onkeyup = function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            selecionar();
        }
    };
}