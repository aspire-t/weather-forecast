import { useState } from 'react';
import CitySelector from './components/CitySelector';
import WeatherCard from './components/WeatherCard';
import { useWeather } from './hooks/useWeather';
import { DEFAULT_CITY } from './constants';
import './App.css';

function App() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const { weatherCasts, loading, error } = useWeather(city);

  const handleCityChange = (selectedCity: string) => {
    setCity(selectedCity);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>{city}七天天气预报</h1>
        <div className="search-container">
          <CitySelector 
            selectedCity={city}
            onCityChange={handleCityChange}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {loading && <p className="loading-message">加载中...</p>}
      </header>
      <div className="weather-grid">
        {weatherCasts.map((day) => (
          <WeatherCard key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
}

export default App;
