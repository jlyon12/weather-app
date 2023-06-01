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
} from './cacheDom';
import { weatherData } from './weatherApi';

const updateCurrentWeatherOutputs = async () => {
	conditionTextOutput.textContent = `${weatherData.conditions} in ${weatherData.name}`;
	if (toggleUnit.checked === false) {
		windSpeedOutput.textContent = `${weatherData.windSpeed.imperial} mph`;
		currentTempOutput.textContent = `${weatherData.temp.imperial} F°`;
		visibilityOutput.textContent = `${weatherData.visibility.imperial} mi`;
	} else {
		windSpeedOutput.textContent = `${weatherData.windSpeed.metric} kph`;
		currentTempOutput.textContent = `${weatherData.temp.metric} C°`;
		visibilityOutput.textContent = `${weatherData.visibility.metric} km`;
	}
	locationOutput.textContent = `${weatherData.name}, ${weatherData.region}`;
	countryOutput.textContent = weatherData.country;
	localTimeOutput.textContent = format(weatherData.time, 'h:mm bbb');
	localDateOutput.textContent = format(weatherData.time, 'PPPP');

	windDirOutput.textContent = weatherData.windDir;
	pressureOutput.textContent = `${weatherData.pressure} mb`;
	humidityOutput.textContent = `${weatherData.humidity} %`;

	uvOutput.textContent = weatherData.uv;
};
const updateUnitMode = () => {
	if (toggleUnit.checked === true) {
		unitMode.textContent = 'Metric';
	} else {
		unitMode.textContent = 'Imperial';
	}
};
export { updateCurrentWeatherOutputs, updateUnitMode };
