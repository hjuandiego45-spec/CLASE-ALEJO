import { getCoordinates, getWeather } from './service.js';
import { renderWeather, renderError } from './ui.js';

async function searchWeather(city) {
  try {
    const coordinates = await getCoordinates(city);

    if (coordinates === null) {
      renderError('Ciudad no encontrada');
      return;
    }

    const weather = await getWeather(coordinates.latitude, coordinates.longitude);

    if (weather === null) {
      renderError('Error al obtener el clima');
      return;
    }

    renderWeather(coordinates.name, weather);

  } catch (error) {
    renderError('Ocurrió un error inesperado');
  }
}

// Capturamos el formulario del HTML
const form = document.getElementById('search-form');

// Escuchamos cuando el usuario envía el formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const city = document.getElementById('city-input').value.trim();

  if (city === '') {
    renderError('Por favor escribe una ciudad');
    return;
  }

  searchWeather(city);
});