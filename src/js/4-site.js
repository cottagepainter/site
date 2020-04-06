var Site = {
	Mainmenu: new Menu("nav-list"),

	Submenu: new Menu("nav-sublist"),

	MenuLink: {
		select: (e) => {
			e.style.borderRadius = "0.7rem";
			e.style.paddingLeft = "0.7rem";
			e.style.paddingRight = "0.7rem";
			e.style.backgroundColor = Theme.bg_color_inverted;
			e.style.color = Theme.fg_color_inverted;
		}
	}
}

