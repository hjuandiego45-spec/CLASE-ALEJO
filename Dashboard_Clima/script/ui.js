const weatherResult = document.getElementById('weather-result');
const errorMessage = document.getElementById('error-message');

export function renderWeather(city, weather) {
  weatherResult.classList.remove('hidden');
  errorMessage.classList.add('hidden');

  weatherResult.innerHTML = `
    <div class="weather-card">
      <h2>${city}</h2>
      <p class="temperatura">🌡️ ${weather.temperature}°C</p>
      <p class="info">Viento: ${weather.windspeed} km/h</p>
      <p class="info">Código clima: ${weather.weathercode}</p>
      <p class="info">Hora: ${weather.time}</p>
    </div>
  `;
}

export function renderError(message) {
  errorMessage.classList.remove('hidden');
  weatherResult.classList.add('hidden');

  errorMessage.innerHTML = `<p>❌ ${message}</p>`;
}