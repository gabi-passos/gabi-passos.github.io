//Executa assim que terminar de carregar a pagina
document.addEventListener("DOMContentLoaded", function () {
    //Define o que vai acontecer a cada 1s
    setInterval(function () {
        //Inicia uma variavel com a data do inicio das ferias
        const inicioFerias = new Date(2025, 4, 30, 17, 30)
        //Inicia uma variavel com a data de hoje
        const dataAtual = new Date()
        
        let diferenca = inicioFerias - dataAtual
        let dateDiff = new Date()
        dateDiff.setTime(diferenca)        

        //Busca a diferenca de dias ate a data
        document.getElementById("dias").textContent = dateDiff.getDate() - 1 + " dias"
        document.getElementById("horas").textContent = dateDiff.getHours() + 3 + "h"
        document.getElementById("minutos").textContent = dateDiff.getMinutes() + "m"
        document.getElementById("segundos").textContent = dateDiff.getSeconds()+ "s"
    }, 1000)
});
