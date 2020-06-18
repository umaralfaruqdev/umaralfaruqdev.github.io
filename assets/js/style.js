'use strict';

function navbar(options = {}) {
	let el = document.querySelector(options.navbar);

	window.onscroll = function (e) {
		if(window.pageYOffset >= 1) {
			el.classList.add('navbar-active');
		} else {
			el.classList.remove('navbar-active');
		}
	}

	console.log(el);
}



// app

function app() {
	let main = {
		navbar: navbar		
	}

	return main;
}