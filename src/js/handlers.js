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
	await processWeatherData('Vermont');
	updateCurrentWeatherOutputs();
});
