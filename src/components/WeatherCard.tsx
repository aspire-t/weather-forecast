import React from 'react';
import { CastsWeather } from '../types/weather';

interface WeatherCardProps {
  day: CastsWeather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ day }) => {
  return (
    <div className="weather-card">
      <h3>{new Date(day.date).toLocaleDateString()} (周{day.week})</h3>
      <div className="day-night-section">
        <h4>白天</h4>
        <p>{day.dayweather}</p>
        <p>{day.daytemp}°C</p>
        <p>风力: {day.daypower} 级 {day.daywind}风</p>
      </div>
      <div className="day-night-section">
        <h4>夜间</h4>
        <p>{day.nightweather}</p>
        <p>{day.nighttemp}°C</p>
        <p>风力: {day.nightpower} 级 {day.nightwind}风</p>
      </div>
    </div>
  );
};

export default WeatherCard;