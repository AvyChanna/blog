! function () {
	const e = document.querySelector(".container"),
		n = document.querySelector(".menu"),
		t = document.querySelector(".menu-trigger"),
		o = (document.querySelector(".menu__inner--desktop"), document.querySelector(".menu__sub-inner-more-trigger")),
		i = document.querySelector(".menu__sub-inner-more"),
		d = getComputedStyle(document.body).getPropertyValue("--phoneWidth"),
		c = () => window.matchMedia(d).matches,
		s = () => {
			t && t.classList.toggle("hidden", !c()), n && n.classList.toggle("hidden", c()), i && i.classList.toggle("hidden", !c())
		};
	n && n.addEventListener("click", e => e.stopPropagation()), i && i.addEventListener("click", e => e.stopPropagation()), s(), document.body.addEventListener("click", () => {
		c() || !i || i.classList.contains("hidden") ? c() && !n.classList.contains("hidden") && n.classList.add("hidden") : i.classList.add("hidden")
	}), window.addEventListener("resize", s), t && t.addEventListener("click", e => {
		e.stopPropagation(), n && n.classList.toggle("hidden")
	}), o && o.addEventListener("click", n => {
		n.stopPropagation(), i && i.classList.toggle("hidden"), i.getBoundingClientRect().right > e.getBoundingClientRect().right && (i.style.left = "auto", i.style.right = 0)
	}), cookieStr = "              .---. .---. \n             :     : o   :    Here, have a cookie!\n         _..-:   o :     :-.._    /\n     .-''  '  `---' `---' \"   ``-.    \n   .'   \"   '  \"  .    \"  . '  \"  `.  \n  :   '.---.,,.,...,.,.,.,..---.  ' ;\n  `. \" `.                     .' \" .'\n   `.  '`.                   .' ' .'\n    `.    `-._           _.-' \"  .'  .----.\n      `. \"    '\"--...--\"'  . ' .'  .'  o   `.\n      .'`-._'    \" .     \" _.-'`. :       o  :\n    .'      ```--.....--'''    ' `:_ o       :\n  .'    \"     '         \"     \"   ; `.;\";\";\";'\n ;         '       \"       '     . ; .' ; ; ;\n;     '         '       '   \"    .'      .-'\n'  \"     \"   '      \"           \"    _.-'\n", cookieStyle = "font-size: 10px; font-family:monospace;", "object" == typeof console && window.console && Math.random() > .8 && console.log("%c%s", cookieStyle, cookieStr)
}();
