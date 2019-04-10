function scrollwheel() { ; }

// feel
scrollwheel.weight = 0;
scrollwheel.up     = (e) => { return (e.deltaY <= -weight); };
scrollwheel.down   = (e) => { return (e.deltaY >= weight); };
scrollwheel.direction = (e) => {
	if(scrollwheel.up(e))
		return 1;
	else if (scrollwheel.down(e))
		return -1;
	else


scrollwheel.onscroll = (e) => {
	var direction = 
	var U = scrollwheel.up(e);
	var D = scrollwheel.down(e);

	switch(window.location.pathname) {
	case "/":
		if(D) window.location.href="/about";
		break;
	case "/about/":
		if(U) window.location.href="/";
		if(D) window.location.href="/services";
		break;
	case "/services/":
	case "/services/exterior-painting/":
	case "/services/interior-painting/":
	case "/services/gutter-cleaning/":
		if(U) window.location.href="/about";
		if(D) window.location.href="/references";
		break;
	case "/references/":
		if(U) window.location.href="/services";
		if(D) window.location.href="/contact";
		break;
	case "/contact/":
		if(U) window.location.href="/references";
		break;
	default:
		;
	}

	return true
}

scrollwheel.subheader = (e) => {
	var U = scrollwheel.up(e);
	var D = scrollwheel.down(e);

	switch(window.location.pathname) {
	case "/services/":
		if(D) window.location.href="/services/exterior-painting/";
		break;
	case "/services/exterior-painting/":
		if(U) window.location.href="/services";
		if(D) window.location.href="/services/interior-painting/";
		break;
	case "/services/interior-painting/":
		if(U) window.location.href="/services/exterior-painting/";
		if(D) window.location.href="/services/gutter-cleaning/";
		break;
	case "/services/gutter-cleaning/":
		if(U) window.location.href="/services/interior-painting/";
		break;
	default:
		;
	}

	return true
}

document.getElementById("nav-list").addEventListener("wheel", scrollwheel.header);
document.getElementById("nav-sublist").addEventListener("wheel", scrollwheel.subheader);


