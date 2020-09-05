const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('#navbar');
const navAnchor = document.querySelectorAll('.nav-links a');
const svg = document.querySelectorAll('.svg');
const burger_div = document.querySelectorAll('.burger div');

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

let flag1 = true;
let flag2 = true;

window.onscroll = () => {
	if (this.scrollY >= window.innerHeight * 2.92)
		navbar.style.background = `#183E55`;
	else if (this.scrollY >= window.innerHeight * 1.92){
		navbar.style.background = `#CFD752`;
	}
  	else
  		navbar.style.background = `#5C7237`;

  	if (this.scrollY >= window.innerHeight * 1.92 && this.scrollY <= window.innerHeight * 2.92){
  		flag2 = true;
  		if (flag1) {
  			flag1 = false;
  			navAnchor.forEach((i, index) => {
				i.style.color = `black`;
			});

			burger_div.forEach((i, index) => {
				i.style.background = `black`;
			});
			
			
			svg.forEach((i, index) => {
				i.style.filter = `none`;
			});
  		}
	}
	else {
		flag1 = true;
		if (flag2) {
			flag2 = false;
			navAnchor.forEach((i, index) => {
				i.style.color = `white`;
			});

			burger_div.forEach((i, index) => {
				i.style.background = `white`;
			});
		
			svg.forEach((i, index) => {
				i.style.filter = `none`;
				i.style.filter = `invert(1)`;
			});
		}
	}
};
};


navSlide();
