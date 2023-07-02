export default function () {

	// Logo Carousel
	window.addEventListener('DOMContentLoaded', (event) => {
		const logocarousel = document.querySelector('.logo-carousel');
		const logocarouselItems = logocarousel.querySelectorAll('.logo-carousel-item');
		const totalItems = logocarouselItems.length;
		const cloneItems = [];

		// Clone the logo slides
		logocarouselItems.forEach((item) => {
			const clone = item.cloneNode(true);
			cloneItems.push(clone);
			logocarousel.appendChild(clone);
		});

		let scrollPosition = 0;

		function slideNext() {
			scrollPosition += logocarouselItems[0].offsetWidth;
			logocarousel.scrollTo({
				left: scrollPosition,
				behavior: 'smooth',
			});

			if (scrollPosition >= ((totalItems + 1) * logocarouselItems[0].offsetWidth)) {
				// Reset scroll position to the beginning
				scrollPosition = 0;
				logocarousel.scrollTo({
					left: scrollPosition,
					behavior: 'auto',
				});
			}
			setTimeout(slideNext, 3000);
		}

		slideNext();
	});

}
