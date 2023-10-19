let weekWitherInfo = [
	{
		day: 'saturday'.toUpperCase(),
		wither: 'sunny'.toUpperCase(),
		img: './images/sun.png',
		celsius: 22,
		fahrenheit: 71.6,
	},
	{
		day: 'sunday'.toUpperCase(),
		wither: 'sunny'.toUpperCase(),
		img: './images/sun.png',
		celsius: 22,
		fahrenheit: 71.6,
	},
	{
		day: 'monday'.toUpperCase(),
		wither: 'cloudy'.toUpperCase(),
		img: './images/SunCloud.png',
		celsius: 22,
		fahrenheit: 71.6,
	},
	{
		day: 'tuesday'.toUpperCase(),
		wither: 'cloudy'.toUpperCase(),
		img: './images/Cloud.png',
		celsius: 22,
		fahrenheit: 71.6,
	},
	{
		day: 'wednesday'.toUpperCase(),
		wither: 'rainy'.toUpperCase(),
		img: './images/rain.png',
		celsius: 22,
		fahrenheit: 71.6,
	},
	{
		day: 'thursday'.toUpperCase(),
		wither: 'rainy'.toUpperCase(),
		img: './images/RainThunder.png',
		celsius: 22,
		fahrenheit: 71.6,
	},
	{
		day: 'friday'.toUpperCase(),
		wither: 'snowy'.toUpperCase(),
		img: './images/Snow.png',
		celsius: 22,
		fahrenheit: 71.6,
	},
];
let card = {
	day: document.getElementById('day'),
	wither: document.getElementById('wither'),
	img: document.getElementById('img'),
	celsius: document.getElementById('celsius'),
	fahrenheit: document.getElementById('fahrenheit'),
};
function randomDay() {
	let rand = Math.floor(Math.random() * 7);

	return rand;
}
function changeCardInfo(index) {

	card.day.innerHTML = weekWitherInfo[index].day;
	card.wither.innerHTML = weekWitherInfo[index].wither;
	card.img.src = weekWitherInfo[index].img;
}
changeCardInfo(randomDay());

