// This script finds the currently viewed branch/node of the website and
// highlights the corresponding links in the header/sub-header
function highlightMenuLinks() {
	var menu = document.getElementsByClassName("navigation-link");
	var currentPath = normalizePathname(window.location.pathname);
	
	// match the current branch with its menu-link
	for(var i=0; i < menu.length; i++) {
		if(currentPath.search(normalizePathname(menu[i].pathname)) != -1) {
			applyStyling(menu[i]);
		}
	}
}

function applyStyling(e) {
	e.style.borderRadius = "0.7rem";
	e.style.paddingLeft = "0.7rem";
	e.style.paddingRight = "0.7rem";
	e.style.backgroundColor = "#212121";
	e.style.color = "#FAFAFA";
}

function normalizePathname(n) {
	return n.replace(/\/$/, "");
}

highlightMenuLinks();
