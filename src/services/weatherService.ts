import axios from 'axios';
import { WeatherResponse } from '../types/weather'

const API_KEY = 'f52fe4dc71bf0b09f549662abeab2c9e';
const BASE_URL = 'https://restapi.amap.com/v3/weather/weatherInfo?';

export const getWeatherForecast = async (adCode: string): Promise<WeatherResponse> => {
  try {
    const locationRes = await axios.get(
			`${BASE_URL}key=${API_KEY}&city=${adCode}&extensions=all&output=json`
    );
		return locationRes.data;
  } catch (error) {
    console.error('获取天气数据失败:', error);
    throw error;
  }
};