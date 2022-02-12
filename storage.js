class Storage {
  constructor() {
    this.country;
    this.postal;
    this.defaultCountry = "US";
    this.defaultPostal = "10001"; //New York
  }

  getLocationData() {
    if (localStorage.getItem("country") === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem("country");
    }

    if (localStorage.getItem("postal") === null) {
      this.postal = this.defaultPostal;
    } else {
      this.postal = localStorage.getItem("postal");
    }

    return {
      country: this.country,
      postal: this.postal,
    };
  }

  setLocation(country, postal) {
    localStorage.setItem("country", country);
    localStorage.setItem("postal", postal);
  }
}
