import { useState, useEffect, useCallback } from 'react';
import SearchForm from './components/searchForm';
import WeatherCard from './components/WeatherCard';

const KEY = import.meta.env.VITE_WEATHER_KEY;

function App() {
  const[cityInput, setCityInput] = useState('South Ogden');
  const[locationName, setLocationName] = useState('');
  const[currentWeather, setCurrentWeather] = useState('');
  const[isLoading, setIsLoading] = useState(false);
  const[error, setError] = useState('');

  const fetchWeatherHandler = useCallback(async (cityName) => {
    setIsLoading(true);
    setError(null);

    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
        cityName
      )}&limit=1&appid=${KEY}`;

      const geoResponse = await fetch(geoUrl);
      if (!geoResponse.ok) {
        throw new Error(`Error! Status: ${geoResponse.status}`)
      }

      const geoData = await geoResponse.json();
      if (geoData.length === 0) {
        throw new Error(`Error: ${geoData.status}`)
      }

      const lat = geoData[0].lat;
      const lon = geoData[0].lon;
      const foundName = geoData[0].name;
      const foundState = geoData[0].state ? `, ${geoData[0].state}` : '';
      const foundCountry = geoData[0].country;

      setLocationName(`${foundName}${foundState}, ${foundCountry}`);

      const wUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${KEY}`;
      
      const wUrlResponse = await fetch(wUrl);
      if (!wUrlResponse.ok) {
        throw new Error(`Error: ${wUrlResponse.status}`);
      }

      const wUrlData = await wUrlResponse.json();
      setCurrentWeather(wUrlData)

    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
    }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    if (cityInput) {
      fetchWeatherHandler(cityInput)
    }
  }, [cityInput, fetchWeatherHandler]);

  return (
    <main className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-lg space-y-8">
        <header className="text-center">
          <h1 className="text-2xl font-semibold">Open Weather Fetch</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            current weather by city
          </p>
        </header>

        <SearchForm
          onSearch={setCityInput}
          isLoading={isLoading}
        />

        {isLoading && (
          <p className="text-center text-sm text-muted-foreground">
            Loading weather data...
          </p>
        )}

        {error && (
          <p role="alert" className="text-center text-sm text-red-400">
            {error}
          </p>
        )}

        {!isLoading && !error && (
          <WeatherCard
            locationName={locationName}
            currentWeather={currentWeather}
          />
        )}
      </div>
    </main>
  )
}

export default App;
