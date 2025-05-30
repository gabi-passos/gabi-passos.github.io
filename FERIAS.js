//Executa assim que terminar de carregar a pagina
document.addEventListener("DOMContentLoaded", function () {
    //Inicia uma variavel com a data do inicio das ferias
    const inicioFerias = new Date(2025, 4, 30, 17, 30)
    //Define o que vai acontecer a cada 1s

    timer = setInterval(function () {
        tempoRestante(inicioFerias);
    }, 1000)

    function tempoRestante(dataLimite) {        
        //Inicia uma variavel com a data de hoje
        const dataAtual = new Date()
        
        let diferenca = dataLimite.getTime() - dataAtual.getTime()

        //Se diferença for menor
        if (diferenca <= 0) {
            //Para a execução
            clearInterval(timer);
            return;
        }

        let segundos = Math.floor(diferenca / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        //Divide por ele mesmo e atribui o resto
        segundos %= 60;
        minutos %= 60;
        horas %= 24;
        
        //Busca a diferenca de dias ate a data
        document.getElementById("dias").textContent = dias + " dias";
        document.getElementById("horas").textContent = horas + "h";
        document.getElementById("minutos").textContent = minutos + "m";
        document.getElementById("segundos").textContent = segundos + "s";
    }
});
