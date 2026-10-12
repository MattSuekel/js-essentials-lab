function WeatherCard(props) {
  if (!props.locationName || !props.currentWeather) {
    return null;
  }

  const weather = props.currentWeather;

  const getCardinalDirection = (deg) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
  };

  return (
    <section className="border border-border bg-muted p-6">
      <p className="text-sm text-muted-foreground">
        {props.locationName}
      </p>

      <h2 className="mt-3 text-5xl font-semibold">
        {Math.round(weather.main.temp)}°F
      </h2>

      <p className="mt-2 text-sm capitalize text-muted-foreground">
        {weather.weather[0].description}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-5 border-t border-border pt-5">
        <div>
          <p className="text-xs text-muted-foreground">Feels like</p>
          <p className="mt-1 font-medium">
            {Math.round(weather.main.feels_like)}°F
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Humidity</p>
          <p className="mt-1 font-medium">
            {weather.main.humidity}%
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Wind Speed</p>
          <p className="mt-1 font-medium">
            {weather.wind.speed} mph
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Wind Direction</p>
          <p className="mt-1 font-medium">
            {getCardinalDirection(weather.wind.deg)}
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Visibility</p>
          <p className="mt-1 font-medium">
            {Math.round(weather.visibility * .000621371)} miles
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Pressure</p>
          <p className="mt-1 font-medium">
            {weather.main.pressure} mbar
          </p>
        </div>

      </div>
    </section>
  );
}

export default WeatherCard;
