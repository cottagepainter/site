var Mainmenu = new Menu("nav-list");

var Submenu = new Menu("nav-sublist");
Submenu.toggle = (function() {
	if($g.location == "/")
		Submenu.html.style.display = "none";
	else if (Mainmenu.current.innerHTML == "Services")
		Submenu.html.style.display = "inline";
	else
		Submenu.html.style.display = "none";

	return true;
});

var MenuLink = {
	select: function(e) {
		e.style.borderRadius = "0.7rem";
		e.style.paddingLeft = "0.7rem";
		e.style.paddingRight = "0.7rem";
		e.style.backgroundColor = Theme.bg_color_inverted;
		e.style.color = Theme.fg_color_inverted;
	}
};

var Sidebar = new Menu("sidebar-nav-main");
var Subsidebar = new Menu("sidebar-nav-sub");
