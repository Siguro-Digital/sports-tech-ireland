import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import Glide from './modules/glide';
import LogoCarousel from './modules/logo-carousel';

document.addEventListener("DOMContentLoaded", function () {
	Glide();
	LogoCarousel();
});



document.addEventListener("DOMContentLoaded", function () {
	const elements = document.querySelectorAll('.heading-line');

	elements.forEach(element => {
	  if (element.classList.contains('headline-line')) {
		console.log(element.textContent);
		const firstLine = element.innerText.trim().split(' ');
		const lastWord = firstLine[firstLine.length - 1];
		console.log(`The last word on the first line of "${element.textContent}" is "${lastWord}".`);
	  }
	});
  });
