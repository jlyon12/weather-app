import {
	locationInput,
	conditionTextOutput,
	currentTempOutput,
	nameOutput,
	regionOutput,
	countryOutput,
	localTimeOutput,
	windSpeedOutput,
	windDirOutput,
	pressureOutput,
	humidityOutput,
	visibilityOutput,
	uvOutput,
} from './cacheDom';
import processWeatherData from './weatherApi';

const updateCurrentWeatherOutputs = async () => {
	const location = locationInput.value;
	const processedData = await processWeatherData(location);
	console.log(processedData);
	conditionTextOutput.textContent = processedData.conditions;
	currentTempOutput.textContent = processedData.temp.imperial;
	nameOutput.textContent = processedData.name;
	regionOutput.textContent = processedData.region;
	countryOutput.textContent = processedData.country;
	localTimeOutput.textContent = processedData.time;
	windSpeedOutput.textContent = processedData.windSpeed.imperial;
	windDirOutput.textContent = processedData.windDir;
	pressureOutput.textContent = processedData.pressure;
	humidityOutput.textContent = processedData.humidity;
	visibilityOutput.textContent = processedData.visibility.imperial;
	uvOutput.textContent = processedData.uv;
};

export default updateCurrentWeatherOutputs;
