let alea = Math.floor(Math.random()* 100)
let aleat = Number(alea.value)

let reiniciar = document.getElementById('reiniciar') 
reiniciar.style.display = "none"

function selecionar() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')

    if (num.value.length == 0) {
        alert('[ERRO] Esolha um número')        
    } else if (alea < Number(num.value)) {
        res.innerHTML = "Escolha um maior menor"
        num.focus()
    } else if (alea > Number(num.value)) {
        res.innerHTML = "Escolha um número maior"
        num.focus()
    } else {
        let select = document.getElementById('select')
        let parabens = document.getElementById('parabens')
        select.innerHTML= ''
        parabens.innerHTML = "Parabéns"
        res.innerHTML = `Você acerto. O número sorteado foi ${alea}`
        reiniciar.style.display = ""
        function reiniciar() {
            reload()
        } 
    }
}

