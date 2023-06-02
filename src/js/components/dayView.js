import format from 'date-fns/format';
import { toggleUnit } from '../cacheDom';

export default function createDayView(foreCastDayObj) {
	const container = document.createElement('div');
	container.classList.add('day-container');
	const pDay = document.createElement('p');
	pDay.classList.add('day-title');
	const spanDay = document.createElement('span');
	spanDay.textContent = format(new Date(foreCastDayObj.hour[0].time), 'eeee');
	spanDay.classList.add('day-title');
	pDay.appendChild(spanDay);
	const pCondition = document.createElement('p');
	pCondition.classList.add('day-condition');
	const spanCondition = document.createElement('span');
	spanCondition.classList.add('day-condition');
	spanCondition.textContent = foreCastDayObj.day.condition.text;
	pCondition.appendChild(spanCondition);
	const subContainer = document.createElement('div');
	subContainer.classList.add('sub-container');
	const pLowTemp = document.createElement('p');
	pLowTemp.textContent = 'Low';
	const spanLowTemp = document.createElement('span');
	if (toggleUnit.checked) {
		spanLowTemp.textContent = `${foreCastDayObj.day.mintemp_c} °C`;
	} else {
		spanLowTemp.textContent = `${foreCastDayObj.day.mintemp_f} °F`;
	}
	pLowTemp.appendChild(spanLowTemp);
	const pHighTemp = document.createElement('p');
	pHighTemp.textContent = 'High';
	const spanHighTemp = document.createElement('span');
	if (toggleUnit.checked) {
		spanHighTemp.textContent = `${foreCastDayObj.day.maxtemp_c} °C`;
	} else {
		spanHighTemp.textContent = `${foreCastDayObj.day.maxtemp_f} °F`;
	}
	pHighTemp.appendChild(spanHighTemp);
	const pRain = document.createElement('p');
	pRain.textContent = 'Rain';
	const spanRain = document.createElement('span');
	spanRain.textContent = `${foreCastDayObj.day.daily_chance_of_rain} %`;
	pRain.appendChild(spanRain);
	const pSnow = document.createElement('p');
	pSnow.textContent = 'Snow';
	const spanSnow = document.createElement('span');
	spanSnow.textContent = `${foreCastDayObj.day.daily_chance_of_snow} %`;
	pSnow.appendChild(spanSnow);
	container.appendChild(pDay);
	container.appendChild(pCondition);
	subContainer.appendChild(pLowTemp);
	subContainer.appendChild(pHighTemp);
	subContainer.appendChild(pRain);
	subContainer.appendChild(pSnow);
	container.appendChild(subContainer);
	return container;
}
