import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import Glide from './modules/glide';
import LogoCarousel from './modules/logo-carousel';

document.addEventListener("DOMContentLoaded", function () {
	Glide();
	LogoCarousel();
});
