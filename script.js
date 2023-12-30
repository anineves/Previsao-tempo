

const key  = "2d8c53b9f745cec066ae1a81bee04480"


function colocarDados(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Previsao de tempo para:  " + dados.name
    document.querySelector(".temp").innerHTML = "Temperatura atual: " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".humidade").innerHTML = "Humidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function pesquisarCidade(input){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    
    colocarDados(dados)
}

function cliqueiBotao() {
    const input = document.querySelector(".input-cidade").value

    pesquisarCidade(input)
}