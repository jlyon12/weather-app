import { form, toggleUnit, locationInput } from './cacheDom';
import {
	updateCurrentWeatherOutputs,
	updateUnitMode,
	renderDayForecast,
} from './domManipulator';
import { processWeatherData } from './weatherApi';

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	await processWeatherData(locationInput.value);
	updateCurrentWeatherOutputs();
	renderDayForecast();
	form.reset();
});

toggleUnit.addEventListener('change', () => {
	updateUnitMode();
	updateCurrentWeatherOutputs();
	renderDayForecast();
});

window.addEventListener('load', async () => {
	updateUnitMode();
	const getCoords = async (position) => {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		await processWeatherData(`${lat},${lon}`);
		updateCurrentWeatherOutputs();
		renderDayForecast();
	};
	const errorCallback = async () => {
		await processWeatherData('Vermont');
		updateCurrentWeatherOutputs();
		renderDayForecast();
	};
	navigator.geolocation.getCurrentPosition(getCoords, errorCallback);
});
