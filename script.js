const url = "https://api.openweathermap.org/data/2.5/";
// const key = "62709d9c4a72dbdbee0c27e7ce53d411";

const searchBar = document.querySelector("#searchBar");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const minmax = document.querySelector(".minmax");

searchBar.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
  }
}

const getResult = (cityName) => {
  //   let query = `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`;
  let query = `${url}weather?q=${cityName}&appid=${import.meta.env.key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

function displayResult(result) {
  console.log(result);
  city.textContent = `${result.name}, ${result.sys.country}`;
  temp.textContent = `${Math.round(result.main.temp)} °c`;
  desc.textContent = `${result.weather[0].description}`;
  minmax.textContent = `${Math.round(result.main.temp_min)}°c / ${Math.round(
    result.main.temp_max
  )}°c`;
}
