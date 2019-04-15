// styling
Submenu.toggle();
if(Mainmenu.current) MenuLink.select(Mainmenu.current);
if(Submenu.current) MenuLink.select(Submenu.current);
if(Sidebar.current) MenuLink.select(Sidebar.current);
if(Subsidebar.current) MenuLink.select(Subsidebar.current);

// add event listeners
Mainmenu.html.addEventListener("wheel", Mainmenu)
Submenu.html.addEventListener("wheel", Submenu)

