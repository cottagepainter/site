document.getElementById("nav-list").addEventListener("wheel", myFunction);
function myFunction(e) {
	// feel
	var weight = 0;
	var scrollU = (e.deltaY <= -weight);
	var scrollD = (e.deltaY >= weight);

	switch(window.location.pathname) {
	case "/":
		if(scrollD) window.location.href="/about";
		break;
	case "/about/":
		if(scrollU) window.location.href="/";
		if(scrollD) window.location.href="/services";
		break;
	case "/services/":
	case "/services/exterior-painting/":
	case "/services/interior-painting/":
	case "/services/gutter-cleaning/":
		if(scrollU) window.location.href="/about";
		if(scrollD) window.location.href="/references";
		break;
	case "/references/":
		if(scrollU) window.location.href="/services";
		if(scrollD) window.location.href="/contact";
		break;
	case "/contact/":
		if(scrollU) window.location.href="/references";
		break;
	default:
		;
	}

	return true
}
