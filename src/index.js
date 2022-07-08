let now = new Date();

now.getHours();
now.getMinutes();
now.getDay();

let h3 = document.querySelector("h3");
let mon = document.querySelector(".mon");
let hours = now.getHours([]);
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sat",
];
let day = days[now.getDay()];

h3.innerHTML = `${hours}:${minutes}`;
mon.innerHTML = `${day}`;

function showWeatherInfo(response) {
  console.log(response.data.name);
  document.querySelector("#bmore").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let apiKey = "8e88bab69fd8392de8ddb8dc9567fe60";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeatherInfo);

  let searchInput = document.querySelector("#city-input");

  let bmore = document.querySelector("#bmore");
  if (searchInput.value) {
    bmore.innerHTML = `${searchInput.value}`;
  } else {
    bmore.innerHTML = null;
    alert("Please enter a city");
  }
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", search);
