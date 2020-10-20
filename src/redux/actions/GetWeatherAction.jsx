
export const SetCurrentWeather = (payload={}) => {
	return { 
		type: 'CURRENT_WEATHER',
		payload
	}
}

export const SetWeatherForecast = (payload={}) => {
	console.log('payload in forecast action: ', payload);
	
	return { 
		type: 'WEATHER_FORECAST',
		payload
	}
}