// This script controls the visibility of the sub-header
function toggleSublistVisibility() {
	var sublist = document.getElementById("nav-sublist");
	
	if(window.location.pathname.split("/")[1] == "services") {
		sublist.style.display = "block";
	} else {
		sublist.style.display = "none";
	}
	return true;
}

toggleSublistVisibility();
