const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';

export async function getCoordinates(city) {
  try {
    const response = await fetch(`${GEO_URL}?name=${city}&count=1&language=es`);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return null;
    }

    return data.results[0];

  } catch (error) {
    console.log('Error al buscar la ciudad:', error);
    return null;
  }
}

export async function getWeather(lat, lon) {
  try {
    const response = await fetch(
      `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const data = await response.json();

    return data.current_weather;

  } catch (error) {
    console.log('Error al obtener el clima:', error);
    return null;
  }
}