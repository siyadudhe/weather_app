async function fetchWeatherData(cityName){
	let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7aa8fe3d1b6aa81a9a4fb6a8c73ae7d2`
	const response = await fetch(url)
	const data = await response.json();
	console.log(data)
}
function fetchCity() {
	let cityName =document.getElementById("city_name");
	if (cityName.value==="") {
		alert("Enter a City Name")
	} else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}