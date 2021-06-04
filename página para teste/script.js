var agora = document.getElementById("horas")
function Horario(){ 
    var hoje = new Date()
    var horas = hoje.getHours()
    if ( horas < 10){
        horas = "0"+horas
    }
    var minutos = hoje.getMinutes()
    if (minutos < 10) {
        minutos = "0"+minutos 
    }
    var segundos = hoje.getSeconds()
    if (segundos < 10) {
        segundos = '0'+segundos
    }
    agora.innerHTML = horas + ":" + minutos + ":" + segundos
} window.setInterval("Horario()",1000)

function calcular() {
    let cal_1 = document.getElementById('tabuada')
    let cal_2 = document.getElementById('tabuada2')

    if (cal_1.value == 0 || cal_2.value == 0) {
        alert('[ERRO] coloque algum valor para calcular')
    } else {
        var res = document.getElementById('resConta')

        cal1 = Number(cal_1.value) 
        cal2 = Number(cal_2.value)

        res.innerHTML = `O resultado de ${cal1}x${cal2} é igual a ${cal1 * cal2}`
    }
}