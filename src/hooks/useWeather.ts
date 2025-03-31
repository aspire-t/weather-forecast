import { useState, useEffect } from 'react';
import { CastsWeather } from '../types/weather';
import { getWeatherForecast } from '../services/weatherService';
import { ERROR_MESSAGES } from '../constants';

export const useWeather = (city: string) => {
  const [weatherCasts, setWeatherCasts] = useState<CastsWeather[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getWeatherForecast(city);
        if (!data?.forecasts?.length) {
          throw new Error(ERROR_MESSAGES.NOT_FOUND);
        }
        setWeatherCasts(data.forecasts[0].casts);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : ERROR_MESSAGES.FETCH_ERROR;
        console.error('天气获取失败:', err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weatherCasts, loading, error };
};