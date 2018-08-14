// let slides = [
// 	{
// 		background:'../images/concept-idea-innovation.jpg',
// 		title: 'Slide Number One',
// 		subTitle: 'More Cool Text Incoming!',
// 		callToActionText: 'Learn More',
// 		callToActionLink: '//#'
// 	},
// 	{
// 		background: '../images/concept-idea-innovation.jpg',
// 		title: 'Slide Number Two',
// 		subTitle: 'More Cool Text Incoming!',
// 		callToActionText: 'Learn More',
// 		callToActionLink: '//#'
// 	},
// 	{
// 		background:'../images/concept-idea-innovation.jpg',
// 		title: 'Slide Number Three',
// 		subTitle: 'More Cool Text Incoming!',
// 		callToActionText: 'Learn More',
// 		callToActionLink: '//#'
// 	},
// 	{
// 		background: '../images/concept-idea-innovation.jpg',
// 		title: 'Slide Number Four',
// 		subTitle: 'More Cool Text Incoming!',
// 		callToActionText: 'Learn More',
// 		callToActionLink: '//#'
// 	},
// ]
// Object.keys(slides).map(key => {
// 	let slide =	`
// 			<div class="slide__background" style="background: linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)), url(${slides[key].background}) center center / cover;"></div>
// 			<div class="slide__details">
// 				<span class="slide__title">${slides[key].title}</span>
// 				<span class="slide__sub-title">${slides[key].subTitle}</span>
// 				<div class="slide__cta">
// 					<a href="${slides[key].callToActionLink}" class="button button--pink">${slides[key].callToActionText}</a>
// 				</div>
// 			</div>
// 	`;
// 	const slider = document.querySelector('#slider');
// 	const newDiv = document.createElement('div');
// 	slider.appendChild(newDiv).innerHTML = slide;
// 	newDiv.classList.add('slide');
// 	if(slides[key] == slides[0]) {
// 		newDiv.classList.add('slide', 'slide--active');
// 	};

// });


let counter = 0;
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const DOMSlides = Array.from(document.querySelectorAll('#slider div.slide'));
let currentSlide = DOMSlides[counter];
let nextSlide1;
let lastSlide;

// Slider Config
let autoPlayTime = 6000;

// Next Slide Button Logic
const nextSlide = () => {
	if(currentSlide.classList.contains('r-in') || currentSlide.classList.contains('r-out')) {
		return;
	}
	nextSlide1 = currentSlide.nextElementSibling || DOMSlides[0];
	nextSlide1.classList.add('slide--active');
	nextSlide1.classList.add('r-in');
	currentSlide = nextSlide1;

	lastSlide = nextSlide1.previousElementSibling || DOMSlides[DOMSlides.length - 1];
	lastSlide.classList.add('r-out');

	nextSlide1.addEventListener('animationend', (e) => {
		lastSlide.classList.remove('r-out');
		lastSlide.classList.remove('slide--active');
		nextSlide1.classList.remove('r-in');
	});

};
// Previous Slide Button Logic
const previousSlide = () => {

if(currentSlide.classList.contains('l-in') || currentSlide.classList.contains('l-out')) {
	return;
}

	nextSlide1 = currentSlide.previousElementSibling || DOMSlides[DOMSlides.length - 1];
	nextSlide1.classList.add('slide--active');
	nextSlide1.classList.add('l-in');
	currentSlide = nextSlide1;

	lastSlide = nextSlide1.nextElementSibling || DOMSlides[0];
	lastSlide.classList.add('l-out');

	nextSlide1.addEventListener('animationend', (e) => {
		lastSlide.classList.remove('l-out');
		lastSlide.classList.remove('slide--active');
		nextSlide1.classList.remove('l-in');
	});

};
// Slider Autoplay Logic
const autoPlay = (ms) => {
	slider.addEventListener('mouseenter', () => {
		return;
	});
	if(ms > 0) {
		setInterval(nextSlide, ms);
	}
}

// Set Auto Play
autoPlay(autoPlayTime);

if (DOMSlides.length > 1) {
	nextButton.addEventListener('click', (event) => {
		nextSlide(event);
	});

	prevButton.addEventListener('click', (event) => {
		previousSlide(event);
	});
}