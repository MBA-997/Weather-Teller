class Weather {
  constructor(country, postal) {
    this.apiKey = "";
    this.country = country;
    this.postal = postal;
  }

  //Gets weather data
  async getWeather() {
    const response = await fetch(
      `https://api.weather.com/v3/wx/forecast/daily/5day?postalKey=${this.postal}:${this.country}&units=m&language=en-US&format=json&apiKey=${this.apiKey}`
    );

    const resData = await response.json();
    return resData;
  }

  //Changes city state
  changeLocation(country, postal) {
    this.country = country;
    this.postal = postal;
  }

  //Get Location
  getCountry() {
    return this.country;
  }

  getPostal() {
    return this.postal;
  }
}
