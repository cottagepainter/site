document.getElementById("nav-sublist").addEventListener("wheel", subheaderNavigation);
function subheaderNavigation(e) {
	// feel
	var weight = 0;
	var scrollU = (e.deltaY <= -weight);
	var scrollD = (e.deltaY >= weight);

	switch(window.location.pathname) {
	case "/services/":
		if(scrollD) window.location.href="/services/exterior-painting/";
		break;
	case "/services/exterior-painting/":
		if(scrollU) window.location.href="/services";
		if(scrollD) window.location.href="/services/interior-painting/";
		break;
	case "/services/interior-painting/":
		if(scrollU) window.location.href="/services/exterior-painting/";
		if(scrollD) window.location.href="/services/gutter-cleaning/";
		break;
	case "/services/gutter-cleaning/":
		if(scrollU) window.location.href="/services/interior-painting/";
		break;
	default:
		;
	}

	return true
}
