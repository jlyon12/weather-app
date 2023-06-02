// Form related elements
const form = document.getElementById('locationForm');
const locationInput = document.getElementById('location');
const btnSubmit = document.getElementById('btnSubmit');
const toggleUnit = document.getElementById('toggleUnit');
const unitMode = document.getElementById('unitMode');

// Output Elements for API responses
// Current Section - Preview Section
const conditionTextOutput = document.getElementById('conditionTextOutput');
const currentTempOutput = document.getElementById('currentTempOutput');
const nameOutput = document.getElementById('nameOutput');
const locationOutput = document.getElementById('locationOutput');
const countryOutput = document.getElementById('countryOutput');
const localTimeOutput = document.getElementById('localTimeOutput');
const localDateOutput = document.getElementById('localDateOutput');
// Current Section - Details Section
const windSpeedOutput = document.getElementById('windSpeedOutput');
const windDirOutput = document.getElementById('windDirOutput');
const pressureOutput = document.getElementById('pressureOutput');
const humidityOutput = document.getElementById('humidityOutput');
const visibilityOutput = document.getElementById('visibilityOutput');
const uvOutput = document.getElementById('uvOutput');
// Forecast Section
const dayForecast = document.getElementById('dayForecast');
export {
	form,
	locationInput,
	btnSubmit,
	toggleUnit,
	unitMode,
	conditionTextOutput,
	currentTempOutput,
	nameOutput,
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
};
