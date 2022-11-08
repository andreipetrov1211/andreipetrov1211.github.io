	let	menu = document.querySelector('.header__menu'),
		menuH = document.querySelector('.header__menu').clientHeight,
		headerH = document.querySelector('.header').clientHeight;

	document.onscroll = function() {
		let scroll = window.scrollY;
		if (scroll >headerH) {
			menu.classList.add('fixed');
			document.body.style.paddingTop = menuH + 'px';
		} else {
			menu.classList.remove('fixed');
			document.body.removeAttribute('style');
		}
	}