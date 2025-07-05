//api key: d5dd287dc7cdf179f83d8ef35b6abd28
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
const apiKey = "d5dd287dc7cdf179f83d8ef35b6abd28";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const pesquisaInput = document.querySelector(".pesquisa input");
const pesquisaButton = document.querySelector(".pesquisa button");
const imagemClima = document.querySelector(".imagem-clima")
async function checaClima(cidade) {
    const resposta = await fetch(apiUrl + cidade + `&appid=${apiKey}`);
    var data = await resposta.json();
    if (resposta.status == 404) {
        document.querySelector(".invalido p").style.display = "block";
        document.querySelector(".clima").style.display = "none";
    } else {
        document.querySelector(".invalido p").style.display = "none";
    }
    document.querySelector(".cidade").innerHTML = data.name;
    document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidade").innerHTML = data.main.humidity + "%";
    document.querySelector(".vento").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".clima").style.display = "block";

    if(data.weather[0].main == "Clouds") {
        imagemClima.src = "img/scatteredClouds.png";
    } else if (data.weather[0].main == "Clear") {
        imagemClima.src = "img/clearSky.png";
    } else if (data.weather[0].main == "Rain") {
        imagemClima.src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        imagemClima.src = "img/showerRain.png";
    } else if (data.weather[0].main == "Snow") {
        imagemClima.src = "img/snow.png";
    } else if (data.weather[0].main == "Thunderstorm") {
        imagemClima.src = "img/thunderstorm.png";
    } else if (data.weather[0].main == "Atmosphere") {
        imagemClima.src = "img/fog.png";
    }
    
}

pesquisaButton.addEventListener("click", ()=> {
    checaClima(pesquisaInput.value);
})
checaClima();