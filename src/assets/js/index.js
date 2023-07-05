import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import Glide from './modules/glide';
import LogoCarousel from './modules/logo-carousel';

document.addEventListener("DOMContentLoaded", function () {
	Glide();
	LogoCarousel();
});



// document.addEventListener("DOMContentLoaded", function () {
//   const headings = document.querySelectorAll('.heading-line');

//   headings.forEach(heading => {
//     const textWidth = heading.offsetWidth;
//     console.log(`The width of "${heading.textContent}" is ${textWidth}px.`);
//     heading.style.width = `${textWidth}px`;
//   });
// });
