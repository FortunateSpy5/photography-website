const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-link');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			}
			else {
				link.style.animation = `nav-link-animation ${0.3 + index / 8}s ease-out 0.4s`;
			}
		});
	});
};

navSlide();