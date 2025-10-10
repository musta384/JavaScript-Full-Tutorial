// script.js


class WeatherApp {
  constructor() {
    this.apiKey = 'b90090c97edaee91142e3ee16c947947'; // Get from OpenWeatherMap
    this.baseUrl = 'https://api.openweathermap.org/data/2.5';
    this.iconsBaseUrl = 'https://openweathermap.org/img/wn/';

    this.initializeApp();
  }

  initializeApp() {
    // DOM Elements
    this.cityInput = document.getElementById('city-input');
    this.searchBtn = document.getElementById('search-btn');
    this.locationBtn = document.getElementById('location-btn');
    this.loading = document.getElementById('loading');
    this.errorMessage = document.getElementById('error-message');
    this.errorText = document.getElementById('error-text');
    this.currentWeather = document.getElementById('current-weather');
    this.forecast = document.getElementById('forecast');
    this.forecastContainer = document.getElementById('forecast-container');

    // Event Listeners
    this.searchBtn.addEventListener('click', () => this.searchWeather());
    this.locationBtn.addEventListener('click', () => this.getLocationWeather());
    this.cityInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.searchWeather();
    });

    // Load last searched city or get location on app start
    this.loadLastCity();
  }

  async searchWeather() {
    const city = this.cityInput.value.trim();

    if (!city) {
      this.showError('Please enter a city name');
      return;
    }

    await this.fetchWeatherData(city);
  }

  async getLocationWeather() {
    if (!navigator.geolocation) {
      this.showError('Geolocation is not supported by your browser');
      return;
    }

    this.showLoading();

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await this.fetchWeatherByCoords(latitude, longitude);
      },
      (error) => {
        this.hideLoading();
        this.showError('Unable to retrieve your location');
        console.error('Geolocation error:', error);
      }
    );
  }

  async fetchWeatherData(city) {
    this.showLoading();
    this.hideError();

    try {
      // Fetch current weather
      const currentResponse = await fetch(
        `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`
      );

      if (!currentResponse.ok) {
        throw new Error('City not found');
      }

      const currentData = await currentResponse.json();

      // Fetch forecast
      const forecastResponse = await fetch(
        `${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`
      );

      if (!forecastResponse.ok) {
        throw new Error('Forecast data unavailable');
      }

      const forecastData = await forecastResponse.json();

      this.displayWeather(currentData, forecastData);
      this.saveLastCity(city);

    } catch (error) {
      this.showError(error.message);
    } finally {
      this.hideLoading();
    }
  }

  async fetchWeatherByCoords(lat, lon) {
    try {
      // Fetch current weather
      const currentResponse = await fetch(
        `${this.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
      );

      if (!currentResponse.ok) {
        throw new Error('Weather data unavailable');
      }

      const currentData = await currentResponse.json();

      // Fetch forecast
      const forecastResponse = await fetch(
        `${this.baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
      );

      if (!forecastResponse.ok) {
        throw new Error('Forecast data unavailable');
      }

      const forecastData = await forecastResponse.json();

      this.displayWeather(currentData, forecastData);
      this.saveLastCity(currentData.name);

    } catch (error) {
      this.showError(error.message);
    } finally {
      this.hideLoading();
    }
  }

  displayWeather(currentData, forecastData) {
    this.displayCurrentWeather(currentData);
    this.displayForecast(forecastData);

    this.currentWeather.classList.remove('hidden');
    this.forecast.classList.remove('hidden');
  }

  displayCurrentWeather(data) {
    document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('current-date').textContent = this.formatDate(new Date());
    document.getElementById('current-temp').textContent = Math.round(data.main.temp);
    document.getElementById('feels-like').textContent = Math.round(data.main.feels_like);
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('wind-speed').textContent = data.wind.speed;
    document.getElementById('pressure').textContent = data.main.pressure;

    // Weather icon
    const iconCode = data.weather[0].icon;
    document.getElementById('weather-img').src = `${this.iconsBaseUrl}${iconCode}@2x.png`;
    document.getElementById('weather-img').alt = data.weather[0].description;
  }

  displayForecast(data) {
    this.forecastContainer.innerHTML = '';

    // Get unique days (5-day forecast)
    const dailyForecasts = this.processForecastData(data.list);

    dailyForecasts.forEach(day => {
      const forecastCard = this.createForecastCard(day);
      this.forecastContainer.appendChild(forecastCard);
    });
  }

  processForecastData(forecastList) {
    const dailyData = {};

    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000);
      const dateString = date.toDateString();

      if (!dailyData[dateString]) {
        dailyData[dateString] = {
          date: date,
          temps: [],
          icons: [],
          descriptions: []
        };
      }

      dailyData[dateString].temps.push(item.main.temp);
      dailyData[dateString].icons.push(item.weather[0].icon);
      dailyData[dateString].descriptions.push(item.weather[0].description);
    });

    // Convert to array and take next 5 days
    return Object.values(dailyData)
      .slice(1, 6)
      .map(day => ({
        date: day.date,
        temp: Math.round(day.temps.reduce((a, b) => a + b) / day.temps.length),
        icon: day.icons[Math.floor(day.icons.length / 2)],
        description: day.descriptions[0]
      }));
  }

  createForecastCard(dayData) {
    const card = document.createElement('div');
    card.className = 'forecast-card';

    card.innerHTML = `
            <div class="forecast-date">${this.formatDate(dayData.date, 'short')}</div>
            <div class="forecast-icon">
                <img src="${this.iconsBaseUrl}${dayData.icon}.png" alt="${dayData.description}">
            </div>
            <div class="forecast-temp">${dayData.temp}°C</div>
            <div class="forecast-desc">${dayData.description}</div>
        `;

    return card;
  }

  formatDate(date, format = 'long') {
    const options = format === 'short'
      ? { weekday: 'short', day: 'numeric', month: 'short' }
      : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  }

  showLoading() {
    this.loading.classList.remove('hidden');
    this.currentWeather.classList.add('hidden');
    this.forecast.classList.add('hidden');
  }

  hideLoading() {
    this.loading.classList.add('hidden');
  }

  showError(message) {
    this.errorText.textContent = message;
    this.errorMessage.classList.remove('hidden');
    this.currentWeather.classList.add('hidden');
    this.forecast.classList.add('hidden');
  }

  hideError() {
    this.errorMessage.classList.add('hidden');
  }

  saveLastCity(city) {
    localStorage.setItem('lastSearchedCity', city);
  }

  loadLastCity() {
    const lastCity = localStorage.getItem('lastSearchedCity');
    if (lastCity) {
      this.cityInput.value = lastCity;
      this.fetchWeatherData(lastCity);
    } else {
      // Try to get location on first load
      this.getLocationWeather();
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new WeatherApp();
});