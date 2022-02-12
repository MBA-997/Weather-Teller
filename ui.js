class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.stringMax = document.getElementById("w-string-max");
    this.stringMin = document.getElementById("w-string-min");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewPoint = document.getElementById("w-dew-point");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather, country, postal) {
    this.location.textContent = country + ", " + postal;
    this.desc.textContent = weather.daypart[0].wxPhraseLong[0];
    this.stringMax.textContent = `${weather.calendarDayTemperatureMin[0]} C - ${weather.calendarDayTemperatureMax[0]} C`;

    const gif = weather.daypart[0].wxPhraseLong[0];
    if (gif.match(".*[Rr]ain.*")) {
      this.icon.setAttribute("src", "/pictures/rain.png");

      const body = document.getElementById("main");
      body.style.backgroundImage = `url('/pictures/rainy800.gif')`;
    }

    if (gif.match(".*[Ss]now.*")) {
      this.icon.setAttribute("src", "/pictures/snow.png");
    }
    if (gif.match(".*[Ss]unny.*|.*[Cc]lear.*"))
      this.icon.setAttribute("src", "/pictures/sunny (2).png");
    if (gif.match(".*[Pp]artly.*"))
      this.icon.setAttribute("src", "/pictures/partly.png");

    if (gif.match(".*[Cc]loudy.*"))
      this.icon.setAttribute("src", "/pictures/cloudy.png");

    this.humidity.textContent = `Relative Humidity: ${weather.daypart[0].relativeHumidity[0]}%`;
    this.feelsLike.textContent = `UV Index: ${weather.daypart[0].uvIndex[0]}% (${weather.daypart[0].uvDescription[0]})`;

    this.dewPoint.textContent = `Sunrise: ${weather.sunriseTimeLocal[0]}`;
    this.wind.textContent = `Wind: ${weather.daypart[0].windPhrase[0]}`;
  }
}
