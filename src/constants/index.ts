export const DEFAULT_CITY = '上海';
export const DEFAULT_ADCODE = '310000';

export const WEATHER_TYPES = {
  SUNNY: '晴',
  CLOUDY: '多云',
  RAINY: '雨',
} as const;

export const ERROR_MESSAGES = {
  NOT_FOUND: '未找到该城市的天气数据',
  FETCH_ERROR: '获取天气数据失败，请检查网络连接',
} as const;