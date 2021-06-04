let alea = Math.floor(Math.random()* 100);

function selecionar() {
    let num = document.getElementById('num');
    let res = document.getElementById('res');

    if (num.value.length == 0) {
        alert('[ERRO] Esolha um número');
    } else if (alea < Number(num.value)) {
        res.innerHTML = "Escolha um número menor";
        num.focus();
    } else if (alea > Number(num.value)) {
        res.innerHTML = "Escolha um número maior";
        num.focus();
    } else {
        let select = document.getElementById('select');
        let parabens = document.getElementById('parabens');
        select.innerHTML= '';
        parabens.innerHTML = "Parabéns";
        res.innerHTML = `Você acertou. O número sorteado foi ${alea}`;
        document.getElementById('reiniciar').style.visibility = "";
    }
}

function reiniciar() {
    location.reload()
}

function confereEnter(evnt)
{
    if(evnt.key = "Enter" || evnt.keyCode === 13)
    {
        selecionar();
    }
}
