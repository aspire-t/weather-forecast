export interface WeatherResponse {
	count: string
	forecasts: DailyWeather[]
	info: string
	infocode: string
	status: string
}

export interface DailyWeather {
	adcode: string
	casts: CastsWeather[]
	city: string
	province: string
}

export interface CastsWeather {
	date: string
	daypower: string
	daytemp: string
	daytemp_float: string
	dayweather: string
	daywind: string
	nightpower: string
	nighttemp: string
	nighttemp_float: string
	nightweather: string
	nightwind: string
	week: string
}
