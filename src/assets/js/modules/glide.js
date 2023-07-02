import Glide from '@glidejs/glide';

export default function () {


	// news carousel

	var newsCarousel = document.getElementsByClassName('news-carousel');

	if (newsCarousel.length > 0) {

		var glide = new Glide('.news-carousel', {
			type: 'slider',
			perView: 3,
			autoplay: false,
			focusAt: 0,
			gap: 50,
			peek: 0,
			animationDuration: 1000,
			hoverpause: true,
			breakpoints: {
				1500: {
					perView: 3
				},
				900: {
					perView: 2
				},
				550: {
					peek: 26,
					perView: 1.3,
				}
			}
		})

		glide.mount()

	}








	// usp carousel

	var uspCarousel = document.getElementsByClassName('usp-carousel');

	if (uspCarousel.length > 0) {

		var glide = new Glide('.usp-carousel', {
			type: 'slider',
			perView: 3,
			autoplay: false,
			focusAt: 0,
			gap: 20,
			peek: 0,
			animationDuration: 1000,
			hoverpause: true,
			breakpoints: {
				1500: {
					perView: 3
				},
				900: {
					perView: 2
				},
				550: {
					peek: 26,
					perView: 1.3,
				}
			}
		})

		glide.mount()

	}












	// quotes carousel


	var quoteCarousel = document.getElementsByClassName('quote-carousel');

	if (quoteCarousel.length > 0) {

		var glide = new Glide('.quote-carousel', {
			type: 'slider',
			perView: 3,
			autoplay: false,
			focusAt: 0,
			gap: 20,
			peek: 0,
			animationDuration: 1000,
			hoverpause: true,
			breakpoints: {
				1500: {
					perView: 3
				},
				900: {
					perView: 2
				},
				550: {
					peek: 26,
					perView: 1.2,
				}
			}
		})

		glide.mount()

	}

}
