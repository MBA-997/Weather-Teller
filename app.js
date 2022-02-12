const ui = new UI();

//Init storage
const store = new Storage();

//Get storage
const weatherLocation = store.getLocationData();
// console.log(weatherLocation);

const weather = new Weather(weatherLocation.country, weatherLocation.postal);

document.addEventListener("DOMContentLoaded", getWeather);

//Change Location event
document.getElementById("w-change-btn").addEventListener("click", () => {
  const country = document.getElementById("city").value;
  const postal = document.getElementById("state").value;

  //Set Location
  weather.changeLocation(country, postal);

  //Store in local Storage
  store.setLocation(country, postal);

  getWeather();

  //Close modal
  $("#locModal").modal("hide");
});

//Gets the weather
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results, weather.getCountry(), weather.getPostal());
    })
    .catch((err) => console.log(err));
}
