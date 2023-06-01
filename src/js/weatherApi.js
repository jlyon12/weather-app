const API_KEY = '9451b398bf8c41a187421244232805';

const buildURL = (location) =>
	`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;

const fetchCurrentWeather = async (url) => {
	const response = await fetch(url, { mode: 'cors' });
	const data = await response.json();
	return data;
};

let weatherData;

const processWeatherData = async (location) => {
	const data = await fetchCurrentWeather(buildURL(location));
	weatherData = {
		name: data.location.name,
		region: data.location.region,
		country: data.location.country,
		time: data.location.localtime,
		conditions: data.current.condition.text,
		icon: data.current.condition.icon,
		temp: {
			metric: data.current.temp_c,
			imperial: data.current.temp_f,
		},
		windSpeed: {
			metric: data.current.wind_kph,
			imperial: data.current.wind_mph,
		},
		windDir: data.current.wind_dir,
		pressure: data.current.pressure_mb,
		humidity: data.current.humidity,
		visibility: {
			metric: data.current.vis_km,
			imperial: data.current.vis_miles,
		},
		uv: data.current.uv,
	};

	return weatherData;
};

export { processWeatherData, weatherData };
