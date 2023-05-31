import { form } from './cacheDom';
import updateCurrentWeatherOutputs from './domManiulator';

form.addEventListener('submit', (e) => {
	e.preventDefault();
	updateCurrentWeatherOutputs();
	form.reset();
});
