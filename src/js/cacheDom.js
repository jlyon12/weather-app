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
const regionOutput = document.getElementById('regionOutput');
const countryOutput = document.getElementById('countryOutput');
const localTimeOutput = document.getElementById('localTimeOutput');
// Current Section - Details Section
const windSpeedOutput = document.getElementById('windSpeedOutput');
const windDirOutput = document.getElementById('windDirOutput');
const pressureOutput = document.getElementById('pressureOutput');
const humidityOutput = document.getElementById('humidityOutput');
const visibilityOutput = document.getElementById('visibilityOutput');
const uvOutput = document.getElementById('uvOutput');

export {
	form,
	locationInput,
	btnSubmit,
	toggleUnit,
	unitMode,
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
};
