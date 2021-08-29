const API_KEY = "963e6868204804599f1322aa18380935"
//User의 위치를 알아보자
function onGeoOk(pos){
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude; 
    console.log("You live in,",lat,lng);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //console.log(weatherUrl);

    fetch(weatherUrl)
        .then(Response => Response.json())
        .then(data => {
            const weatherBox = document.querySelector('#weather span:first-child');
            const cityBox = document.querySelector('#weather span:last-child');
            // const dataName = data.name;
            weatherBox.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            cityBox.innerText = data.name;
    });

}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

// getCurrentPosition 두 개의 변수를 받는데, 하나는 성공했을 때, 하나는 실패했을 때