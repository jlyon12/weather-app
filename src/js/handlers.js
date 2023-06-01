import { form, toggleUnit, locationInput } from './cacheDom';
import { updateCurrentWeatherOutputs, updateUnitMode } from './domManipulator';
import { processWeatherData } from './weatherApi';

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	await processWeatherData(locationInput.value);
	updateCurrentWeatherOutputs();
	form.reset();
});

toggleUnit.addEventListener('change', () => {
	updateUnitMode();
	updateCurrentWeatherOutputs();
});

window.addEventListener('load', async () => {
	updateUnitMode();
	const getCoords = async (position) => {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		await processWeatherData(`${lat},${lon}`);
		updateCurrentWeatherOutputs();
	};
	const errorCallback = async () => {
		await processWeatherData('Vermont');
		updateCurrentWeatherOutputs();
	};
	navigator.geolocation.getCurrentPosition(getCoords, errorCallback);
});
