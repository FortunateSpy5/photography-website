const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('#navbar');
const navAnchor = document.querySelectorAll('.nav-links a')

const navSlide = () => {

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


window.onscroll = () => {
	console.log(this.scrollY, window.innerHeight)
	if (this.scrollY >= window.innerHeight * 2.92)
		navbar.style.background = `#183E55`;
	else if (this.scrollY >= window.innerHeight * 1.92){
		navbar.style.background = `#CFD752`;
	}
  	else if (this.scrollY >= window.innerHeight / 10)
  		navbar.style.background = `#5C7237`;
  	else
  		navbar.style.background = `transparent`;
  	if (this.scrollY >= window.innerHeight * 1.92 && this.scrollY <= window.innerHeight * 2.92){
  		navAnchor.forEach((i, index) => {
			i.style.color = `black`;
		});
	}
	else {
		navAnchor.forEach((i, index) => {
			i.style.color = `white`;
		});
	}
};
};


navSlide();
