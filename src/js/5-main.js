// styling
if(Site.Mainmenu.current) Site.MenuLink.select(Site.Mainmenu.current);
if(Site.Submenu.current) Site.MenuLink.select(Site.Submenu.current);

// add event listeners
Site.Mainmenu.html.addEventListener("wheel", Site.Mainmenu)
Site.Submenu.html.addEventListener("wheel", Site.Submenu)
