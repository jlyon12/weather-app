import format from 'date-fns/format';

import {
	unitMode,
	toggleUnit,
	conditionTextOutput,
	currentTempOutput,
	locationOutput,
	countryOutput,
	localTimeOutput,
	localDateOutput,
	windSpeedOutput,
	windDirOutput,
	pressureOutput,
	humidityOutput,
	visibilityOutput,
	uvOutput,
	dayForecast,
} from './cacheDom';
import { currentWeatherData, daysForecastData } from './weatherApi';
import createDayView from './components/dayView';

const updateCurrentWeatherOutputs = async () => {
	conditionTextOutput.textContent = `${currentWeatherData.conditions} in ${currentWeatherData.name}`;
	if (toggleUnit.checked === false) {
		windSpeedOutput.textContent = `${currentWeatherData.windSpeed.imperial} mph`;
		currentTempOutput.textContent = `${currentWeatherData.temp.imperial} °F`;
		visibilityOutput.textContent = `${currentWeatherData.visibility.imperial} mi`;
	} else {
		windSpeedOutput.textContent = `${currentWeatherData.windSpeed.metric} kph`;
		currentTempOutput.textContent = `${currentWeatherData.temp.metric} °C`;
		visibilityOutput.textContent = `${currentWeatherData.visibility.metric} km`;
	}
	locationOutput.textContent = `${currentWeatherData.name}, ${currentWeatherData.region}`;
	countryOutput.textContent = currentWeatherData.country;
	localTimeOutput.textContent = format(currentWeatherData.time, 'h:mm bbb');
	localDateOutput.textContent = format(currentWeatherData.time, 'PPP');

	windDirOutput.textContent = currentWeatherData.windDir;
	pressureOutput.textContent = `${currentWeatherData.pressure} mb`;
	humidityOutput.textContent = `${currentWeatherData.humidity} %`;

	uvOutput.textContent = currentWeatherData.uv;
};
const updateUnitMode = () => {
	if (toggleUnit.checked === true) {
		unitMode.textContent = 'Metric';
	} else {
		unitMode.textContent = 'Imperial';
	}
};

const renderDayForecast = () => {
	dayForecast.textContent = '';
	daysForecastData.forEach((day) =>
		dayForecast.appendChild(createDayView(day))
	);
};
const renderErrorMessage = () => {
	conditionTextOutput.textContent = `Please enter a valid city, postal code or latitude and longitude.`;
};
export {
	updateCurrentWeatherOutputs,
	updateUnitMode,
	renderDayForecast,
	renderErrorMessage,
};
