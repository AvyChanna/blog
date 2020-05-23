! function () {
	const container = document.querySelector(".container")
	const menu = document.querySelector(".menu")
	const mobileMenuTrigger = document.querySelector(".menu-trigger")
	const desktopMenu = document.querySelector(".menu__inner--desktop")
	const desktopMenuTrigger = document.querySelector(".menu__sub-inner-more-trigger")
	const menuMore = document.querySelector(".menu__sub-inner-more")
	const mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth")
	const isMobile = () => window.matchMedia(mobileQuery).matches
	const handleMenuClasses = () => {
		mobileMenuTrigger && mobileMenuTrigger.classList.toggle("hidden", !isMobile())
		menu && menu.classList.toggle("hidden", isMobile())
		menuMore && menuMore.classList.toggle("hidden", !isMobile())
	}

	// Common

	menu && menu.addEventListener("click", e => e.stopPropagation())
	menuMore && menuMore.addEventListener("click", e => e.stopPropagation())

	handleMenuClasses()

	document.body.addEventListener("click", () => {
		if (!isMobile() && menuMore && !menuMore.classList.contains("hidden"))
			menuMore.classList.add("hidden")
		else if (isMobile() && !menu.classList.contains("hidden"))
			menu.classList.add("hidden")
	})

	window.addEventListener("resize", handleMenuClasses)

	// Mobile menu

	mobileMenuTrigger && mobileMenuTrigger.addEventListener("click", e => {
		e.stopPropagation()
		menu && menu.classList.toggle("hidden")
	})

	// Desktop menu

	desktopMenuTrigger && desktopMenuTrigger.addEventListener("click", e => {
		e.stopPropagation()
		menuMore && menuMore.classList.toggle("hidden")

		if (menuMore.getBoundingClientRect().right > container.getBoundingClientRect().right) {
			menuMore.style.left = "auto"
			menuMore.style.right = 0
		}
	})
	//               .---. .---. 
	//              :     : o   :    Here, have a cookie!
	//          _..-:   o :     :-.._    /
	//      .-''  '  `---' `---' "   ``-.    
	//    .'   "   '  "  .    "  . '  "  `.  
	//   :   '.---.,,.,...,.,.,.,..---.  ' ;
	//   `. " `.                     .' " .'
	//    `.  '`.                   .' ' .'
	//     `.    `-._           _.-' "  .'  .----.
	//       `. "    '"--...--"'  . ' .'  .'  o   `.
	//       .'`-._'    " .     " _.-'`. :       o  :
	//     .'      ```--.....--'''    ' `:_ o       :
	//   .'    "     '         "     "   ; `.;";";";'
	//  ;         '       "       '     . ; .' ; ; ;
	// ;     '         '       '   "    .'      .-'
	// '  "     "   '      "           "    _.-'
	cookieStr = "              .---. .---. \n             :     : o   :    Here, have a cookie!\n         _..-:   o :     :-.._    /\n     .-''  '  `---' `---' \"   ``-.    \n   .'   \"   '  \"  .    \"  . '  \"  `.  \n  :   '.---.,,.,...,.,.,.,..---.  ' ;\n  `. \" `.                     .' \" .'\n   `.  '`.                   .' ' .'\n    `.    `-._           _.-' \"  .'  .----.\n      `. \"    '\"--...--\"'  . ' .'  .'  o   `.\n      .'`-._'    \" .     \" _.-'`. :       o  :\n    .'      ```--.....--'''    ' `:_ o       :\n  .'    \"     '         \"     \"   ; `.;\";\";\";'\n ;         '       \"       '     . ; .' ; ; ;\n;     '         '       '   \"    .'      .-'\n'  \"     \"   '      \"           \"    _.-'\n";
	cookieStyle = "font-size: 10px; font-family:monospace;"
	if (typeof console === 'object' && window.console && Math.random() > 0.8) {
		console.log("%c%s", cookieStyle, cookieStr)
	}
}()