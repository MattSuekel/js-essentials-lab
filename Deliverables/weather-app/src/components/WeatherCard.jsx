function WeatherCard(props) {
  if (!props.locationName || !props.currentWeather) {
    return null;
  }

  const weather = props.currentWeather;

  return (
    <div>
      <h3>Location: {props.locationName}</h3>
      <ul>
        <li>Condition: {weather?.weather?.[0]?.description ?? 'N/A'}</li>
        <li>Temperature: {weather?.main?.temp != null ? `${Math.round(weather.main.temp)}°F` : 'N/A'}</li>
        <li>Feels Like: {weather?.main?.feels_like != null ? `${Math.round(weather.main.feels_like)}°F` : 'N/A'}</li>
        <li>Humidity: {weather?.main?.humidity != null ? `${weather.main.humidity}%` : 'N/A'}</li>
        <li>Wind Speed: {weather?.wind?.speed != null ? `${Math.round(weather.wind.speed)} mph` : 'N/A'}</li>
      </ul>
    </div>
  );
}

export default WeatherCard;
