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
/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
! function (t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function () {
	return function (t) {
		function e(o) {
			if (n[o]) return n[o].exports;
			var r = n[o] = {
				i: o,
				l: !1,
				exports: {}
			};
			return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
		}
		var n = {};
		return e.m = t, e.c = n, e.i = function (t) {
			return t
		}, e.d = function (t, n, o) {
			e.o(t, n) || Object.defineProperty(t, n, {
				configurable: !1,
				enumerable: !0,
				get: o
			})
		}, e.n = function (t) {
			var n = t && t.__esModule ? function () {
				return t.default
			} : function () {
				return t
			};
			return e.d(n, "a", n), n
		}, e.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, e.p = "", e(e.s = 3)
	}([function (t, e, n) {
		var o, r, i;
		! function (a, c) {
			r = [t, n(7)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
		}(0, function (t, e) {
			"use strict";

			function n(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var o = function (t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}(e),
				r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
					return typeof t
				} : function (t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				i = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
						}
					}
					return function (e, n, o) {
						return n && t(e.prototype, n), o && t(e, o), e
					}
				}(),
				a = function () {
					function t(e) {
						n(this, t), this.resolveOptions(e), this.initSelection()
					}
					return i(t, [{
						key: "resolveOptions",
						value: function () {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
							this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
						}
					}, {
						key: "initSelection",
						value: function () {
							this.text ? this.selectFake() : this.target && this.selectTarget()
						}
					}, {
						key: "selectFake",
						value: function () {
							var t = this,
								e = "rtl" == document.documentElement.getAttribute("dir");
							this.removeFake(), this.fakeHandlerCallback = function () {
								return t.removeFake()
							}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
							var n = window.pageYOffset || document.documentElement.scrollTop;
							this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText()
						}
					}, {
						key: "removeFake",
						value: function () {
							this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
						}
					}, {
						key: "selectTarget",
						value: function () {
							this.selectedText = (0, o.default)(this.target), this.copyText()
						}
					}, {
						key: "copyText",
						value: function () {
							var t = void 0;
							try {
								t = document.execCommand(this.action)
							} catch (e) {
								t = !1
							}
							this.handleResult(t)
						}
					}, {
						key: "handleResult",
						value: function (t) {
							this.emitter.emit(t ? "success" : "error", {
								action: this.action,
								text: this.selectedText,
								trigger: this.trigger,
								clearSelection: this.clearSelection.bind(this)
							})
						}
					}, {
						key: "clearSelection",
						value: function () {
							this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
						}
					}, {
						key: "destroy",
						value: function () {
							this.removeFake()
						}
					}, {
						key: "action",
						set: function () {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
							if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
						},
						get: function () {
							return this._action
						}
					}, {
						key: "target",
						set: function (t) {
							if (void 0 !== t) {
								if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
								if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
								if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
								this._target = t
							}
						},
						get: function () {
							return this._target
						}
					}]), t
				}();
			t.exports = a
		})
	}, function (t, e, n) {
		function o(t, e, n) {
			if (!t && !e && !n) throw new Error("Missing required arguments");
			if (!c.string(e)) throw new TypeError("Second argument must be a String");
			if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
			if (c.node(t)) return r(t, e, n);
			if (c.nodeList(t)) return i(t, e, n);
			if (c.string(t)) return a(t, e, n);
			throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
		}

		function r(t, e, n) {
			return t.addEventListener(e, n), {
				destroy: function () {
					t.removeEventListener(e, n)
				}
			}
		}

		function i(t, e, n) {
			return Array.prototype.forEach.call(t, function (t) {
				t.addEventListener(e, n)
			}), {
				destroy: function () {
					Array.prototype.forEach.call(t, function (t) {
						t.removeEventListener(e, n)
					})
				}
			}
		}

		function a(t, e, n) {
			return u(document.body, t, e, n)
		}
		var c = n(6),
			u = n(5);
		t.exports = o
	}, function (t, e) {
		function n() {}
		n.prototype = {
			on: function (t, e, n) {
				var o = this.e || (this.e = {});
				return (o[t] || (o[t] = [])).push({
					fn: e,
					ctx: n
				}), this
			},
			once: function (t, e, n) {
				function o() {
					r.off(t, o), e.apply(n, arguments)
				}
				var r = this;
				return o._ = e, this.on(t, o, n)
			},
			emit: function (t) {
				var e = [].slice.call(arguments, 1),
					n = ((this.e || (this.e = {}))[t] || []).slice(),
					o = 0,
					r = n.length;
				for (o; o < r; o++) n[o].fn.apply(n[o].ctx, e);
				return this
			},
			off: function (t, e) {
				var n = this.e || (this.e = {}),
					o = n[t],
					r = [];
				if (o && e)
					for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
				return r.length ? n[t] = r : delete n[t], this
			}
		}, t.exports = n
	}, function (t, e, n) {
		var o, r, i;
		! function (a, c) {
			r = [t, n(0), n(2), n(1)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
		}(0, function (t, e, n, o) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function i(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function a(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function c(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function u(t, e) {
				var n = "data-clipboard-" + t;
				if (e.hasAttribute(n)) return e.getAttribute(n)
			}
			var l = r(e),
				s = r(n),
				f = r(o),
				d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
					return typeof t
				} : function (t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				h = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
						}
					}
					return function (e, n, o) {
						return n && t(e.prototype, n), o && t(e, o), e
					}
				}(),
				p = function (t) {
					function e(t, n) {
						i(this, e);
						var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
						return o.resolveOptions(n), o.listenClick(t), o
					}
					return c(e, t), h(e, [{
						key: "resolveOptions",
						value: function () {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
							this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body
						}
					}, {
						key: "listenClick",
						value: function (t) {
							var e = this;
							this.listener = (0, f.default)(t, "click", function (t) {
								return e.onClick(t)
							})
						}
					}, {
						key: "onClick",
						value: function (t) {
							var e = t.delegateTarget || t.currentTarget;
							this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({
								action: this.action(e),
								target: this.target(e),
								text: this.text(e),
								container: this.container,
								trigger: e,
								emitter: this
							})
						}
					}, {
						key: "defaultAction",
						value: function (t) {
							return u("action", t)
						}
					}, {
						key: "defaultTarget",
						value: function (t) {
							var e = u("target", t);
							if (e) return document.querySelector(e)
						}
					}, {
						key: "defaultText",
						value: function (t) {
							return u("text", t)
						}
					}, {
						key: "destroy",
						value: function () {
							this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
						}
					}], [{
						key: "isSupported",
						value: function () {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
								e = "string" == typeof t ? [t] : t,
								n = !!document.queryCommandSupported;
							return e.forEach(function (t) {
								n = n && !!document.queryCommandSupported(t)
							}), n
						}
					}]), e
				}(s.default);
			t.exports = p
		})
	}, function (t, e) {
		function n(t, e) {
			for (; t && t.nodeType !== o;) {
				if ("function" == typeof t.matches && t.matches(e)) return t;
				t = t.parentNode
			}
		}
		var o = 9;
		if ("undefined" != typeof Element && !Element.prototype.matches) {
			var r = Element.prototype;
			r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
		}
		t.exports = n
	}, function (t, e, n) {
		function o(t, e, n, o, r) {
			var a = i.apply(this, arguments);
			return t.addEventListener(n, a, r), {
				destroy: function () {
					t.removeEventListener(n, a, r)
				}
			}
		}

		function r(t, e, n, r, i) {
			return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
				return o(t, e, n, r, i)
			}))
		}

		function i(t, e, n, o) {
			return function (n) {
				n.delegateTarget = a(n.target, e), n.delegateTarget && o.call(t, n)
			}
		}
		var a = n(4);
		t.exports = r
	}, function (t, e) {
		e.node = function (t) {
			return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
		}, e.nodeList = function (t) {
			var n = Object.prototype.toString.call(t);
			return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
		}, e.string = function (t) {
			return "string" == typeof t || t instanceof String
		}, e.fn = function (t) {
			return "[object Function]" === Object.prototype.toString.call(t)
		}
	}, function (t, e) {
		function n(t) {
			var e;
			if ("SELECT" === t.nodeName) t.focus(), e = t.value;
			else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
				var n = t.hasAttribute("readonly");
				n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
			} else {
				t.hasAttribute("contenteditable") && t.focus();
				var o = window.getSelection(),
					r = document.createRange();
				r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString()
			}
			return e
		}
		t.exports = n
	}])
});
/*! PrismJS 1.20.0
 * https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+actionscript+apacheconf+applescript+bash+c+csharp+cpp+coffeescript+csp+css-extras+diff+django+docker+elixir+elm+erlang+fsharp+flow+git+go+graphql+haml+handlebars+haskell+http+java+json+kotlin+latex+less+makefile+markdown+markup-templating+objectivec+ocaml+perl+php+php-extras+processing+pug+python+r+jsx+tsx+reason+ruby+rust+sass+scss+scheme+sql+stylus+swift+textile+toml+twig+typescript+vim+visual-basic+wasm+yaml&plugins=line-highlight+line-numbers+jsonp-highlight+command-line+toolbar+copy-to-clipboard+diff-highlight
 */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
	Prism = function (u) {
		var c = /\blang(?:uage)?-([\w-]+)\b/i,
			n = 0,
			C = {
				manual: u.Prism && u.Prism.manual,
				disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
				util: {
					encode: function e(n) {
						return n instanceof _ ? new _(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
					},
					type: function (e) {
						return Object.prototype.toString.call(e).slice(8, -1)
					},
					objId: function (e) {
						return e.__id || Object.defineProperty(e, "__id", {
							value: ++n
						}), e.__id
					},
					clone: function t(e, r) {
						var a, n, l = C.util.type(e);
						switch (r = r || {}, l) {
							case "Object":
								if (n = C.util.objId(e), r[n]) return r[n];
								for (var i in a = {}, r[n] = a, e) e.hasOwnProperty(i) && (a[i] = t(e[i], r));
								return a;
							case "Array":
								return n = C.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function (e, n) {
									a[n] = t(e, r)
								}), a);
							default:
								return e
						}
					},
					getLanguage: function (e) {
						for (; e && !c.test(e.className);) e = e.parentElement;
						return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none"
					},
					currentScript: function () {
						if ("undefined" == typeof document) return null;
						if ("currentScript" in document) return document.currentScript;
						try {
							throw new Error
						} catch (e) {
							var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
							if (n) {
								var t = document.getElementsByTagName("script");
								for (var r in t)
									if (t[r].src == n) return t[r]
							}
							return null
						}
					}
				},
				languages: {
					extend: function (e, n) {
						var t = C.util.clone(C.languages[e]);
						for (var r in n) t[r] = n[r];
						return t
					},
					insertBefore: function (t, e, n, r) {
						var a = (r = r || C.languages)[t],
							l = {};
						for (var i in a)
							if (a.hasOwnProperty(i)) {
								if (i == e)
									for (var o in n) n.hasOwnProperty(o) && (l[o] = n[o]);
								n.hasOwnProperty(i) || (l[i] = a[i])
							} var s = r[t];
						return r[t] = l, C.languages.DFS(C.languages, function (e, n) {
							n === s && e != t && (this[e] = l)
						}), l
					},
					DFS: function e(n, t, r, a) {
						a = a || {};
						var l = C.util.objId;
						for (var i in n)
							if (n.hasOwnProperty(i)) {
								t.call(n, i, n[i], r || i);
								var o = n[i],
									s = C.util.type(o);
								"Object" !== s || a[l(o)] ? "Array" !== s || a[l(o)] || (a[l(o)] = !0, e(o, t, i, a)) : (a[l(o)] = !0, e(o, t, null, a))
							}
					}
				},
				plugins: {},
				highlightAll: function (e, n) {
					C.highlightAllUnder(document, e, n)
				},
				highlightAllUnder: function (e, n, t) {
					var r = {
						callback: t,
						container: e,
						selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
					};
					C.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), C.hooks.run("before-all-elements-highlight", r);
					for (var a, l = 0; a = r.elements[l++];) C.highlightElement(a, !0 === n, r.callback)
				},
				highlightElement: function (e, n, t) {
					var r = C.util.getLanguage(e),
						a = C.languages[r];
					e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
					var l = e.parentNode;
					l && "pre" === l.nodeName.toLowerCase() && (l.className = l.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);
					var i = {
						element: e,
						language: r,
						grammar: a,
						code: e.textContent
					};

					function o(e) {
						i.highlightedCode = e, C.hooks.run("before-insert", i), i.element.innerHTML = i.highlightedCode, C.hooks.run("after-highlight", i), C.hooks.run("complete", i), t && t.call(i.element)
					}
					if (C.hooks.run("before-sanity-check", i), !i.code) return C.hooks.run("complete", i), void(t && t.call(i.element));
					if (C.hooks.run("before-highlight", i), i.grammar)
						if (n && u.Worker) {
							var s = new Worker(C.filename);
							s.onmessage = function (e) {
								o(e.data)
							}, s.postMessage(JSON.stringify({
								language: i.language,
								code: i.code,
								immediateClose: !0
							}))
						} else o(C.highlight(i.code, i.grammar, i.language));
					else o(C.util.encode(i.code))
				},
				highlight: function (e, n, t) {
					var r = {
						code: e,
						grammar: n,
						language: t
					};
					return C.hooks.run("before-tokenize", r), r.tokens = C.tokenize(r.code, r.grammar), C.hooks.run("after-tokenize", r), _.stringify(C.util.encode(r.tokens), r.language)
				},
				tokenize: function (e, n) {
					var t = n.rest;
					if (t) {
						for (var r in t) n[r] = t[r];
						delete n.rest
					}
					var a = new l;
					return M(a, a.head, e),
						function e(n, t, r, a, l, i, o) {
							for (var s in r)
								if (r.hasOwnProperty(s) && r[s]) {
									var u = r[s];
									u = Array.isArray(u) ? u : [u];
									for (var c = 0; c < u.length; ++c) {
										if (o && o == s + "," + c) return;
										var g = u[c],
											f = g.inside,
											h = !!g.lookbehind,
											d = !!g.greedy,
											v = 0,
											p = g.alias;
										if (d && !g.pattern.global) {
											var m = g.pattern.toString().match(/[imsuy]*$/)[0];
											g.pattern = RegExp(g.pattern.source, m + "g")
										}
										g = g.pattern || g;
										for (var y = a.next, k = l; y !== t.tail; k += y.value.length, y = y.next) {
											var b = y.value;
											if (t.length > n.length) return;
											if (!(b instanceof _)) {
												var x = 1;
												if (d && y != t.tail.prev) {
													g.lastIndex = k;
													var w = g.exec(n);
													if (!w) break;
													var A = w.index + (h && w[1] ? w[1].length : 0),
														P = w.index + w[0].length,
														S = k;
													for (S += y.value.length; S <= A;) y = y.next, S += y.value.length;
													if (S -= y.value.length, k = S, y.value instanceof _) continue;
													for (var O = y; O !== t.tail && (S < P || "string" == typeof O.value && !O.prev.value.greedy); O = O.next) x++, S += O.value.length;
													x--, b = n.slice(k, S), w.index -= k
												} else {
													g.lastIndex = 0;
													var w = g.exec(b)
												}
												if (w) {
													h && (v = w[1] ? w[1].length : 0);
													var A = w.index + v,
														w = w[0].slice(v),
														P = A + w.length,
														E = b.slice(0, A),
														N = b.slice(P),
														j = y.prev;
													E && (j = M(t, j, E), k += E.length), W(t, j, x);
													var L = new _(s, f ? C.tokenize(w, f) : w, p, w, d);
													if (y = M(t, j, L), N && M(t, y, N), 1 < x && e(n, t, r, y.prev, k, !0, s + "," + c), i) break
												} else if (i) break
											}
										}
									}
								}
						}(e, a, n, a.head, 0),
						function (e) {
							var n = [],
								t = e.head.next;
							for (; t !== e.tail;) n.push(t.value), t = t.next;
							return n
						}(a)
				},
				hooks: {
					all: {},
					add: function (e, n) {
						var t = C.hooks.all;
						t[e] = t[e] || [], t[e].push(n)
					},
					run: function (e, n) {
						var t = C.hooks.all[e];
						if (t && t.length)
							for (var r, a = 0; r = t[a++];) r(n)
					}
				},
				Token: _
			};

		function _(e, n, t, r, a) {
			this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length, this.greedy = !!a
		}

		function l() {
			var e = {
					value: null,
					prev: null,
					next: null
				},
				n = {
					value: null,
					prev: e,
					next: null
				};
			e.next = n, this.head = e, this.tail = n, this.length = 0
		}

		function M(e, n, t) {
			var r = n.next,
				a = {
					value: t,
					prev: n,
					next: r
				};
			return n.next = a, r.prev = a, e.length++, a
		}

		function W(e, n, t) {
			for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
			(n.next = r).prev = n, e.length -= a
		}
		if (u.Prism = C, _.stringify = function n(e, t) {
				if ("string" == typeof e) return e;
				if (Array.isArray(e)) {
					var r = "";
					return e.forEach(function (e) {
						r += n(e, t)
					}), r
				}
				var a = {
						type: e.type,
						content: n(e.content, t),
						tag: "span",
						classes: ["token", e.type],
						attributes: {},
						language: t
					},
					l = e.alias;
				l && (Array.isArray(l) ? Array.prototype.push.apply(a.classes, l) : a.classes.push(l)), C.hooks.run("wrap", a);
				var i = "";
				for (var o in a.attributes) i += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
				return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + i + ">" + a.content + "</" + a.tag + ">"
			}, !u.document) return u.addEventListener && (C.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
			var n = JSON.parse(e.data),
				t = n.language,
				r = n.code,
				a = n.immediateClose;
			u.postMessage(C.highlight(r, C.languages[t], t)), a && u.close()
		}, !1)), C;
		var e = C.util.currentScript();

		function t() {
			C.manual || C.highlightAll()
		}
		if (e && (C.filename = e.src, e.hasAttribute("data-manual") && (C.manual = !0)), !C.manual) {
			var r = document.readyState;
			"loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16)
		}
		return C
	}(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
	comment: /<!--[\s\S]*?-->/,
	prolog: /<\?[\s\S]+?\?>/,
	doctype: {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: !0
	},
	cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
	tag: {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: !0,
		inside: {
			tag: {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					punctuation: /^<\/?/,
					namespace: /^[^\s>\/:]+:/
				}
			},
			"attr-value": {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					punctuation: [/^=/, {
						pattern: /^(\s*)["']|["']$/,
						lookbehind: !0
					}]
				}
			},
			punctuation: /\/?>/,
			"attr-name": {
				pattern: /[^\s>\/]+/,
				inside: {
					namespace: /^[^\s>\/:]+:/
				}
			}
		}
	},
	entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) {
	"entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
	value: function (a, e) {
		var s = {};
		s["language-" + e] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: !0,
			inside: Prism.languages[e]
		}, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
		var n = {
			"included-cdata": {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: s
			}
		};
		n["language-" + e] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[e]
		};
		var t = {};
		t[a] = {
			pattern: RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {
				return a
			}), "i"),
			lookbehind: !0,
			greedy: !0,
			inside: n
		}, Prism.languages.insertBefore("markup", "cdata", t)
	}
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml;
! function (s) {
	var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
	s.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				rule: /^@[\w-]+/,
				"selector-function-argument": {
					pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
					lookbehind: !0,
					alias: "selector"
				}
			}
		},
		url: {
			pattern: RegExp("url\\((?:" + e.source + "|[^\n\r()]*)\\)", "i"),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/
			}
		},
		selector: RegExp("[^{}\\s](?:[^{};\"']|" + e.source + ")*?(?=\\s*\\{)"),
		string: {
			pattern: e,
			greedy: !0
		},
		property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		important: /!important\b/i,
		function: /[-a-z0-9]+(?=\()/i,
		punctuation: /[(){};:,]/
	}, s.languages.css.atrule.inside.rest = s.languages.css;
	var t = s.languages.markup;
	t && (t.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
		"style-attr": {
			pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
			inside: {
				"attr-name": {
					pattern: /^\s*style/i,
					inside: t.tag.inside
				},
				punctuation: /^\s*=\s*['"]|['"]\s*$/,
				"attr-value": {
					pattern: /.+/i,
					inside: s.languages.css
				}
			},
			alias: "language-css"
		}
	}, t.tag))
}(Prism);
Prism.languages.clike = {
	comment: [{
		pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
		lookbehind: !0
	}, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: !0,
		greedy: !0
	}],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0
	},
	"class-name": {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: !0,
		inside: {
			punctuation: /[.\\]/
		}
	},
	keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	boolean: /\b(?:true|false)\b/,
	function: /\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
	"class-name": [Prism.languages.clike["class-name"], {
		pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
		lookbehind: !0
	}],
	keyword: [{
		pattern: /((?:^|})\s*)(?:catch|finally)\b/,
		lookbehind: !0
	}, {
		pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
		lookbehind: !0
	}],
	number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
	regex: {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: !0,
		greedy: !0
	},
	"function-variable": {
		pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: "function"
	},
	parameter: [{
		pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
		lookbehind: !0,
		inside: Prism.languages.javascript
	}, {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
		inside: Prism.languages.javascript
	}, {
		pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
		lookbehind: !0,
		inside: Prism.languages.javascript
	}, {
		pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
		lookbehind: !0,
		inside: Prism.languages.javascript
	}],
	constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
	"template-string": {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: !0,
		inside: {
			"template-punctuation": {
				pattern: /^`|`$/,
				alias: "string"
			},
			interpolation: {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: !0,
				inside: {
					"interpolation-punctuation": {
						pattern: /^\${|}$/,
						alias: "punctuation"
					},
					rest: Prism.languages.javascript
				}
			},
			string: /[\s\S]+/
		}
	}
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
Prism.languages.actionscript = Prism.languages.extend("javascript", {
	keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
	operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
}), Prism.languages.actionscript["class-name"].alias = "function", Prism.languages.markup && Prism.languages.insertBefore("actionscript", "string", {
	xml: {
		pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
		lookbehind: !0,
		inside: Prism.languages.markup
	}
});
Prism.languages.apacheconf = {
	comment: /#.*/,
	"directive-inline": {
		pattern: /(^\s*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|Type|UserFile|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferSize|BufferedLogs|CGIDScriptTimeout|CGIMapExtension|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DTracePrivileges|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtFilterDefine|ExtFilterOptions|ExtendedStatus|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|KeepAlive|KeepAliveTimeout|KeptBodySize|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|LanguagePriority|Limit(?:InternalRecursion|Request(?:Body|FieldSize|Fields|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|MMapFile|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|ModMimeUsePathInfo|ModemStandard|MultiviewsMatch|Mutex|NWSSLTrustedCerts|NWSSLUpgradeable|NameVirtualHost|NoProxy|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|RLimitCPU|RLimitMEM|RLimitNPROC|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|SSIETag|SSIEndTag|SSIErrorMsg|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|SRPUnknownUserSeed|SRPVerifierFile|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UseStapling|UserName|VerifyClient|VerifyDepth)|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadStackSize|ThreadsPerChild|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
		lookbehind: !0,
		alias: "property"
	},
	"directive-block": {
		pattern: /<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b *.*>/i,
		inside: {
			"directive-block": {
				pattern: /^<\/?\w+/,
				inside: {
					punctuation: /^<\/?/
				},
				alias: "tag"
			},
			"directive-block-parameter": {
				pattern: /.*[^>]/,
				inside: {
					punctuation: /:/,
					string: {
						pattern: /("|').*\1/,
						inside: {
							variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/
						}
					}
				},
				alias: "attr-value"
			},
			punctuation: />/
		},
		alias: "tag"
	},
	"directive-flags": {
		pattern: /\[(?:\w,?)+\]/,
		alias: "keyword"
	},
	string: {
		pattern: /("|').*\1/,
		inside: {
			variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/
		}
	},
	variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
	regex: /\^?.*\$|\^.*\$?/
};
Prism.languages.applescript = {
	comment: [/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/, /--.+/, /#.+/],
	string: /"(?:\\.|[^"\\\r\n])*"/,
	number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?\b/i,
	operator: [/[&=≠≤≥*+\-\/÷^]|[<>]=?/, /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/],
	keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
	class: {
		pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/, alias: "builtin"
	},
	punctuation: /[{}():,¬«»《》]/
};
! function (e) {
	var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
		n = {
			environment: {
				pattern: RegExp("\\$" + t),
				alias: "constant"
			},
			variable: [{
				pattern: /\$?\(\([\s\S]+?\)\)/,
				greedy: !0,
				inside: {
					variable: [{
						pattern: /(^\$\(\([\s\S]+)\)\)/,
						lookbehind: !0
					}, /^\$\(\(/],
					number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
					operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
					punctuation: /\(\(?|\)\)?|,|;/
				}
			}, {
				pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
				greedy: !0,
				inside: {
					variable: /^\$\(|^`|\)$|`$/
				}
			}, {
				pattern: /\$\{[^}]+\}/,
				greedy: !0,
				inside: {
					operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
					punctuation: /[\[\]]/,
					environment: {
						pattern: RegExp("(\\{)" + t),
						lookbehind: !0,
						alias: "constant"
					}
				}
			}, /\$(?:\w+|[#?*!@$])/],
			entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
		};
	e.languages.bash = {
		shebang: {
			pattern: /^#!\s*\/.*/,
			alias: "important"
		},
		comment: {
			pattern: /(^|[^"{\\$])#.*/,
			lookbehind: !0
		},
		"function-name": [{
			pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
			lookbehind: !0,
			alias: "function"
		}, {
			pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
			alias: "function"
		}],
		"for-or-select": {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: "variable",
			lookbehind: !0
		},
		"assign-left": {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
			inside: {
				environment: {
					pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
					lookbehind: !0,
					alias: "constant"
				}
			},
			alias: "variable",
			lookbehind: !0
		},
		string: [{
			pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,
			lookbehind: !0,
			greedy: !0,
			inside: n
		}, {
			pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,
			lookbehind: !0,
			greedy: !0,
			inside: n
		}],
		environment: {
			pattern: RegExp("\\$?" + t),
			alias: "constant"
		},
		variable: n.variable,
		function: {
			pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: !0
		},
		keyword: {
			pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
			lookbehind: !0
		},
		builtin: {
			pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
			lookbehind: !0,
			alias: "class-name"
		},
		boolean: {
			pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
			lookbehind: !0
		},
		"file-descriptor": {
			pattern: /\B&\d\b/,
			alias: "important"
		},
		operator: {
			pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
			inside: {
				"file-descriptor": {
					pattern: /^\d/,
					alias: "important"
				}
			}
		},
		punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		number: {
			pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
			lookbehind: !0
		}
	};
	for (var a = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], r = n.variable[1].inside, s = 0; s < a.length; s++) r[a[s]] = e.languages.bash[a[s]];
	e.languages.shell = e.languages.bash
}(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
	comment: {
		pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: !0
	},
	"class-name": {
		pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+/,
		lookbehind: !0
	},
	keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
	function: /[a-z_]\w*(?=\s*\()/i,
	operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
	number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
}), Prism.languages.insertBefore("c", "string", {
	macro: {
		pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
		lookbehind: !0,
		greedy: !0,
		alias: "property",
		inside: {
			string: [{
				pattern: /^(#\s*include\s*)<[^>]+>/,
				lookbehind: !0
			}, Prism.languages.c.string],
			comment: Prism.languages.c.comment,
			directive: {
				pattern: /^(#\s*)[a-z]+/,
				lookbehind: !0,
				alias: "keyword"
			}
		}
	},
	constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
}), delete Prism.languages.c.boolean;
! function (s) {
	function a(e, s) {
		return e.replace(/<<(\d+)>>/g, function (e, n) {
			return "(?:" + s[+n] + ")"
		})
	}

	function t(e, n, s) {
		return RegExp(a(e, n), s || "")
	}

	function e(e, n) {
		for (var s = 0; s < n; s++) e = e.replace(/<<self>>/g, function () {
			return "(?:" + e + ")"
		});
		return e.replace(/<<self>>/g, "[^\\s\\S]")
	}
	var n = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
		i = "class enum interface struct",
		r = "add alias ascending async await by descending from get global group into join let nameof notnull on orderby partial remove select set unmanaged value when where where",
		o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";

	function l(e) {
		return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b"
	}
	var d = l(i),
		p = RegExp(l(n + " " + i + " " + r + " " + o)),
		c = l(i + " " + r + " " + o),
		u = l(n + " " + i + " " + o),
		g = e("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2),
		b = e("\\((?:[^()]|<<self>>)*\\)", 2),
		h = "@?\\b[A-Za-z_]\\w*\\b",
		f = a("<<0>>(?:\\s*<<1>>)?", [h, g]),
		m = a("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f]),
		k = "\\[\\s*(?:,\\s*)*\\]",
		y = a("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [a("\\(<<0>>+(?:,<<0>>+)+\\)", [a("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k])]), m, k]),
		w = {
			keyword: p,
			punctuation: /[<>()?,.:[\]]/
		},
		v = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",
		x = '"(?:\\\\.|[^\\\\"\r\n])*"';
	s.languages.csharp = s.languages.extend("clike", {
		string: [{
			pattern: t("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: t("(^|[^@$\\\\])<<0>>", [x]),
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: RegExp(v),
			greedy: !0,
			alias: "character"
		}],
		"class-name": [{
			pattern: t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]),
			lookbehind: !0,
			inside: w
		}, {
			pattern: t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [h, y]),
			lookbehind: !0,
			inside: w
		}, {
			pattern: t("(\\busing\\s+)<<0>>(?=\\s*=)", [h]),
			lookbehind: !0
		}, {
			pattern: t("(\\b<<0>>\\s+)<<1>>", [d, f]),
			lookbehind: !0,
			inside: w
		}, {
			pattern: t("(\\bcatch\\s*\\(\\s*)<<0>>", [m]),
			lookbehind: !0,
			inside: w
		}, {
			pattern: t("(\\bwhere\\s+)<<0>>", [h]),
			lookbehind: !0
		}, {
			pattern: t("(\\b(?:is|as)\\s+)<<0>>", [y]),
			lookbehind: !0,
			inside: w
		}, {
			pattern: t("\\b<<0>>(?=\\s+(?!<<1>>)<<2>>(?:\\s*[=,;:{)\\]]|\\s+in))", [y, u, h]),
			inside: w
		}],
		keyword: p,
		number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,
		operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
		punctuation: /\?\.?|::|[{}[\];(),.:]/
	}), s.languages.insertBefore("csharp", "number", {
		range: {
			pattern: /\.\./,
			alias: "operator"
		}
	}), s.languages.insertBefore("csharp", "punctuation", {
		"named-parameter": {
			pattern: t("([(,]\\s*)<<0>>(?=\\s*:)", [h]),
			lookbehind: !0,
			alias: "punctuation"
		}
	}), s.languages.insertBefore("csharp", "class-name", {
		namespace: {
			pattern: t("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])", [h]),
			lookbehind: !0,
			inside: {
				punctuation: /\./
			}
		},
		"type-expression": {
			pattern: t("(\\b(?:default|typeof|sizeof)\\s*\\(\\s*)(?:[^()\\s]|\\s(?!\\s*\\))|<<0>>)*(?=\\s*\\))", [b]),
			lookbehind: !0,
			alias: "class-name",
			inside: w
		},
		"return-type": {
			pattern: t("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [y, m]),
			inside: w,
			alias: "class-name"
		},
		"constructor-invocation": {
			pattern: t("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [y]),
			lookbehind: !0,
			inside: w,
			alias: "class-name"
		},
		"generic-method": {
			pattern: t("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]),
			inside: {
				function: t("^<<0>>", [h]),
				generic: {
					pattern: RegExp(g),
					alias: "class-name",
					inside: w
				}
			}
		},
		"type-list": {
			pattern: t("\\b((?:<<0>>\\s+<<1>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>)(?:\\s*,\\s*(?:<<3>>|<<4>>))*(?=\\s*(?:where|[{;]|=>|$))", [d, f, h, y, p.source]),
			lookbehind: !0,
			inside: {
				keyword: p,
				"class-name": {
					pattern: RegExp(y),
					greedy: !0,
					inside: w
				},
				punctuation: /,/
			}
		},
		preprocessor: {
			pattern: /(^\s*)#.*/m,
			lookbehind: !0,
			alias: "property",
			inside: {
				directive: {
					pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
					lookbehind: !0,
					alias: "keyword"
				}
			}
		}
	});
	var $ = x + "|" + v,
		_ = a("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [$]),
		B = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [_]), 2),
		E = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",
		R = a("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, B]);
	s.languages.insertBefore("csharp", "class-name", {
		attribute: {
			pattern: t("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])", [E, R]),
			lookbehind: !0,
			greedy: !0,
			inside: {
				target: {
					pattern: t("^<<0>>(?=\\s*:)", [E]),
					alias: "keyword"
				},
				"attribute-arguments": {
					pattern: t("\\(<<0>>*\\)", [B]),
					inside: s.languages.csharp
				},
				"class-name": {
					pattern: RegExp(m),
					inside: {
						punctuation: /\./
					}
				},
				punctuation: /[:,]/
			}
		}
	});
	var P = ":[^}\r\n]+",
		z = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [_]), 2),
		S = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [z, P]),
		j = e(a("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)", [$]), 2),
		A = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [j, P]);

	function F(e, n) {
		return {
			interpolation: {
				pattern: t("([^{](?:\\{\\{)*)<<0>>", [e]),
				lookbehind: !0,
				inside: {
					"format-string": {
						pattern: t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [n, P]),
						lookbehind: !0,
						inside: {
							punctuation: /^:/
						}
					},
					punctuation: /^\{|\}$/,
					expression: {
						pattern: /[\s\S]+/,
						alias: "language-csharp",
						inside: s.languages.csharp
					}
				}
			},
			string: /[\s\S]+/
		}
	}
	s.languages.insertBefore("csharp", "string", {
		"interpolation-string": [{
			pattern: t('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"', [S]),
			lookbehind: !0,
			greedy: !0,
			inside: F(S, z)
		}, {
			pattern: t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [A]),
			lookbehind: !0,
			greedy: !0,
			inside: F(A, j)
		}]
	})
}(Prism), Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;
! function (e) {
	var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
	e.languages.cpp = e.languages.extend("c", {
		"class-name": [{
			pattern: RegExp("(\\b(?:class|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, function () {
				return t.source
			})),
			lookbehind: !0
		}, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, {
			pattern: /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
			inside: null
		}],
		keyword: t,
		number: {
			pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
			greedy: !0
		},
		operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
		boolean: /\b(?:true|false)\b/
	}), e.languages.insertBefore("cpp", "string", {
		"raw-string": {
			pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
			alias: "string",
			greedy: !0
		}
	}), e.languages.insertBefore("cpp", "class-name", {
		"base-clause": {
			pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)(?:[^;{}"'])+?(?=\s*[;{])/,
			lookbehind: !0,
			greedy: !0,
			inside: e.languages.extend("cpp", {})
		}
	}), e.languages.insertBefore("inside", "operator", {
		"class-name": /\b[a-z_]\w*\b(?!\s*::)/i
	}, e.languages.cpp["base-clause"])
}(Prism);
! function (e) {
	var t = /#(?!\{).+/,
		n = {
			pattern: /#\{[^}]+\}/,
			alias: "variable"
		};
	e.languages.coffeescript = e.languages.extend("javascript", {
		comment: t,
		string: [{
			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
			greedy: !0
		}, {
			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
			greedy: !0,
			inside: {
				interpolation: n
			}
		}],
		keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
		"class-member": {
			pattern: /@(?!\d)\w+/,
			alias: "variable"
		}
	}), e.languages.insertBefore("coffeescript", "comment", {
		"multiline-comment": {
			pattern: /###[\s\S]+?###/,
			alias: "comment"
		},
		"block-regex": {
			pattern: /\/{3}[\s\S]*?\/{3}/,
			alias: "regex",
			inside: {
				comment: t,
				interpolation: n
			}
		}
	}), e.languages.insertBefore("coffeescript", "string", {
		"inline-javascript": {
			pattern: /`(?:\\[\s\S]|[^\\`])*`/,
			inside: {
				delimiter: {
					pattern: /^`|`$/,
					alias: "punctuation"
				},
				rest: e.languages.javascript
			}
		},
		"multiline-string": [{
			pattern: /'''[\s\S]*?'''/,
			greedy: !0,
			alias: "string"
		}, {
			pattern: /"""[\s\S]*?"""/,
			greedy: !0,
			alias: "string",
			inside: {
				interpolation: n
			}
		}]
	}), e.languages.insertBefore("coffeescript", "keyword", {
		property: /(?!\d)\w+(?=\s*:(?!:))/
	}), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript
}(Prism);
Prism.languages.csp = {
	directive: {
		pattern: /\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,
		alias: "keyword"
	},
	safe: {
		pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\d+=/]+)'/,
		alias: "selector"
	},
	unsafe: {
		pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\*)/,
		alias: "function"
	}
};
! function (e) {
	var a, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
	e.languages.css.selector = {
		pattern: e.languages.css.selector,
		inside: a = {
			"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
			"pseudo-class": /:[-\w]+/,
			class: /\.[-:.\w]+/,
			id: /#[-:.\w]+/,
			attribute: {
				pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
				greedy: !0,
				inside: {
					punctuation: /^\[|\]$/,
					"case-sensitivity": {
						pattern: /(\s)[si]$/i,
						lookbehind: !0,
						alias: "keyword"
					},
					namespace: {
						pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
						lookbehind: !0,
						inside: {
							punctuation: /\|$/
						}
					},
					"attr-name": {
						pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
						lookbehind: !0
					},
					"attr-value": [n, {
						pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
						lookbehind: !0
					}],
					operator: /[|~*^$]?=/
				}
			},
			"n-th": [{
				pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
				lookbehind: !0,
				inside: {
					number: /[\dn]+/,
					operator: /[+-]/
				}
			}, {
				pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
				lookbehind: !0
			}],
			combinator: />|\+|~|\|\|/,
			punctuation: /[(),]/
		}
	}, e.languages.css.atrule.inside["selector-function-argument"].inside = a, e.languages.insertBefore("css", "property", {
		variable: {
			pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
			lookbehind: !0
		}
	});
	var r = {
			pattern: /(\d)(?:%|[a-z]+)/,
			lookbehind: !0
		},
		i = {
			pattern: /(^|[^\w.-])-?\d*\.?\d+/,
			lookbehind: !0
		};
	e.languages.insertBefore("css", "function", {
		operator: {
			pattern: /(\s)[+\-*\/](?=\s)/,
			lookbehind: !0
		},
		hexcode: {
			pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
			alias: "color"
		},
		color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
			pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
			inside: {
				unit: r,
				number: i,
				function: /[\w-]+(?=\()/,
				punctuation: /[(),]/
			}
		}],
		entity: /\\[\da-f]{1,8}/i,
		unit: r,
		number: i
	})
}(Prism);
! function (i) {
	i.languages.diff = {
		coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m]
	};
	var r = {
		"deleted-sign": "-",
		"deleted-arrow": "<",
		"inserted-sign": "+",
		"inserted-arrow": ">",
		unchanged: " ",
		diff: "!"
	};
	Object.keys(r).forEach(function (e) {
		var n = r[e],
			a = [];
		/^\w+$/.test(e) || a.push(/\w+/.exec(e)[0]), "diff" === e && a.push("bold"), i.languages.diff[e] = {
			pattern: RegExp("^(?:[" + n + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
			alias: a,
			inside: {
				line: {
					pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
					lookbehind: !0
				},
				prefix: {
					pattern: /[\s\S]/,
					alias: /\w+/.exec(e)[0]
				}
			}
		}
	}), Object.defineProperty(i.languages.diff, "PREFIXES", {
		value: r
	})
}(Prism);
! function (h) {
	function v(e, n) {
		return "___" + e.toUpperCase() + n + "___"
	}
	Object.defineProperties(h.languages["markup-templating"] = {}, {
		buildPlaceholders: {
			value: function (a, r, e, o) {
				if (a.language === r) {
					var c = a.tokenStack = [];
					a.code = a.code.replace(e, function (e) {
						if ("function" == typeof o && !o(e)) return e;
						for (var n, t = c.length; - 1 !== a.code.indexOf(n = v(r, t));) ++t;
						return c[t] = e, n
					}), a.grammar = h.languages.markup
				}
			}
		},
		tokenizePlaceholders: {
			value: function (p, k) {
				if (p.language === k && p.tokenStack) {
					p.grammar = h.languages[k];
					var m = 0,
						d = Object.keys(p.tokenStack);
					! function e(n) {
						for (var t = 0; t < n.length && !(m >= d.length); t++) {
							var a = n[t];
							if ("string" == typeof a || a.content && "string" == typeof a.content) {
								var r = d[m],
									o = p.tokenStack[r],
									c = "string" == typeof a ? a : a.content,
									i = v(k, r),
									u = c.indexOf(i);
								if (-1 < u) {
									++m;
									var g = c.substring(0, u),
										l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o),
										s = c.substring(u + i.length),
										f = [];
									g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f
								}
							} else a.content && e(a.content)
						}
						return n
					}(p.tokens)
				}
			}
		}
	})
}(Prism);
! function (e) {
	e.languages.django = {
		comment: /^{#[\s\S]*?#}$/,
		tag: {
			pattern: /(^{%[+-]?\s*)\w+/,
			lookbehind: !0,
			alias: "keyword"
		},
		delimiter: {
			pattern: /^{[{%][+-]?|[+-]?[}%]}$/,
			alias: "punctuation"
		},
		string: {
			pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
			greedy: !0
		},
		filter: {
			pattern: /(\|)\w+/,
			lookbehind: !0,
			alias: "function"
		},
		test: {
			pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
			lookbehind: !0,
			alias: "function"
		},
		function: /\b[a-z_]\w+(?=\s*\()/i,
		keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
		operator: /[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
		number: /\b\d+(?:\.\d+)?\b/,
		boolean: /[Tt]rue|[Ff]alse|[Nn]one/,
		variable: /\b\w+?\b/,
		punctuation: /[{}[\](),.:;]/
	};
	var n = /{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g,
		o = e.languages["markup-templating"];
	e.hooks.add("before-tokenize", function (e) {
		o.buildPlaceholders(e, "django", n)
	}), e.hooks.add("after-tokenize", function (e) {
		o.tokenizePlaceholders(e, "django")
	}), e.languages.jinja2 = e.languages.django, e.hooks.add("before-tokenize", function (e) {
		o.buildPlaceholders(e, "jinja2", n)
	}), e.hooks.add("after-tokenize", function (e) {
		o.tokenizePlaceholders(e, "jinja2")
	})
}(Prism);
Prism.languages.docker = {
	keyword: {
		pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
		lookbehind: !0
	},
	string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
	comment: /#.*/,
	punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
}, Prism.languages.dockerfile = Prism.languages.docker;
Prism.languages.elixir = {
	comment: /#.*/m,
	regex: {
		pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
		greedy: !0
	},
	string: [{
		pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
		greedy: !0,
		inside: {}
	}, {
		pattern: /("""|''')[\s\S]*?\1/,
		greedy: !0,
		inside: {}
	}, {
		pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0,
		inside: {}
	}],
	atom: {
		pattern: /(^|[^:]):\w+/,
		lookbehind: !0,
		alias: "symbol"
	},
	"attr-name": /\w+\??:(?!:)/,
	capture: {
		pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
		lookbehind: !0,
		alias: "function"
	},
	argument: {
		pattern: /(^|[^&])&\d+/,
		lookbehind: !0,
		alias: "variable"
	},
	attribute: {
		pattern: /@\w+/,
		alias: "variable"
	},
	number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
	keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
	boolean: /\b(?:true|false|nil)\b/,
	operator: [/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/, {
		pattern: /([^<])<(?!<)/,
		lookbehind: !0
	}, {
		pattern: /([^>])>(?!>)/,
		lookbehind: !0
	}],
	punctuation: /<<|>>|[.,%\[\]{}()]/
}, Prism.languages.elixir.string.forEach(function (e) {
	e.inside = {
		interpolation: {
			pattern: /#\{[^}]+\}/,
			inside: {
				delimiter: {
					pattern: /^#\{|\}$/,
					alias: "punctuation"
				},
				rest: Prism.languages.elixir
			}
		}
	}
});
Prism.languages.elm = {
	comment: /--.*|{-[\s\S]*?-}/,
	char: {
		pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
		greedy: !0
	},
	string: [{
		pattern: /"""[\s\S]*?"""/,
		greedy: !0
	}, {
		pattern: /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/,
		greedy: !0
	}],
	import_statement: {
		pattern: /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
		inside: {
			keyword: /\b(?:import|as|exposing)\b/
		}
	},
	keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
	builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
	number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
	operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
	hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
	constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
	punctuation: /[{}[\]|(),.:]/
};
Prism.languages.erlang = {
	comment: /%.+/,
	string: {
		pattern: /"(?:\\.|[^\\"\r\n])*"/,
		greedy: !0
	},
	"quoted-function": {
		pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
		alias: "function"
	},
	"quoted-atom": {
		pattern: /'(?:\\.|[^\\'\r\n])+'/,
		alias: "atom"
	},
	boolean: /\b(?:true|false)\b/,
	keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
	number: [/\$\\?./, /\d+#[a-z0-9]+/i, /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i],
	function: /\b[a-z][\w@]*(?=\()/,
	variable: {
		pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
		lookbehind: !0
	},
	operator: [/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/, {
		pattern: /(^|[^<])<(?!<)/,
		lookbehind: !0
	}, {
		pattern: /(^|[^>])>(?!>)/,
		lookbehind: !0
	}],
	atom: /\b[a-z][\w@]*/,
	punctuation: /[()[\]{}:;,.#|]|<<|>>/
};
Prism.languages.fsharp = Prism.languages.extend("clike", {
	comment: [{
		pattern: /(^|[^\\])\(\*[\s\S]*?\*\)/,
		lookbehind: !0
	}, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: !0
	}],
	string: {
		pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
		greedy: !0
	},
	"class-name": {
		pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
		lookbehind: !0,
		inside: {
			operator: /->|\*/,
			punctuation: /\./
		}
	},
	keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
	number: [/\b0x[\da-fA-F]+(?:un|lf|LF)?\b/, /\b0b[01]+(?:y|uy)?\b/, /(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i, /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/],
	operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
}), Prism.languages.insertBefore("fsharp", "keyword", {
	preprocessor: {
		pattern: /^[^\r\n\S]*#.*/m,
		alias: "property",
		inside: {
			directive: {
				pattern: /(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/,
				lookbehind: !0,
				alias: "keyword"
			}
		}
	}
}), Prism.languages.insertBefore("fsharp", "punctuation", {
	"computation-expression": {
		pattern: /[_a-z]\w*(?=\s*\{)/i,
		alias: "keyword"
	}
}), Prism.languages.insertBefore("fsharp", "string", {
	annotation: {
		pattern: /\[<.+?>\]/,
		inside: {
			punctuation: /^\[<|>\]$/,
			"class-name": {
				pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
				lookbehind: !0
			},
			"annotation-content": {
				pattern: /[\s\S]+/,
				inside: Prism.languages.fsharp
			}
		}
	}
});
! function (a) {
	a.languages.flow = a.languages.extend("javascript", {}), a.languages.insertBefore("flow", "keyword", {
		type: [{
			pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
			alias: "tag"
		}]
	}), a.languages.flow["function-variable"].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i, delete a.languages.flow.parameter, a.languages.insertBefore("flow", "operator", {
		"flow-punctuation": {
			pattern: /\{\||\|\}/,
			alias: "punctuation"
		}
	}), Array.isArray(a.languages.flow.keyword) || (a.languages.flow.keyword = [a.languages.flow.keyword]), a.languages.flow.keyword.unshift({
		pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
		lookbehind: !0
	}, {
		pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
		lookbehind: !0
	})
}(Prism);
Prism.languages.git = {
	comment: /^#.*/m,
	deleted: /^[-–].*/m,
	inserted: /^\+.*/m,
	string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
	command: {
		pattern: /^.*\$ git .*$/m,
		inside: {
			parameter: /\s--?\w+/m
		}
	},
	coord: /^@@.*@@$/m,
	commit_sha1: /^commit \w{40}$/m
};
Prism.languages.go = Prism.languages.extend("clike", {
	keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
	builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
	boolean: /\b(?:_|iota|nil|true|false)\b/,
	operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
	number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
	string: {
		pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
		greedy: !0
	}
}), delete Prism.languages.go["class-name"];
Prism.languages.graphql = {
	comment: /#.*/,
	string: {
		pattern: /"(?:\\.|[^\\"\r\n])*"/,
		greedy: !0
	},
	number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	boolean: /\b(?:true|false)\b/,
	variable: /\$[a-z_]\w*/i,
	directive: {
		pattern: /@[a-z_]\w*/i,
		alias: "function"
	},
	"attr-name": {
		pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
		greedy: !0
	},
	"class-name": {
		pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
		lookbehind: !0
	},
	fragment: {
		pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
		lookbehind: !0,
		alias: "function"
	},
	keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
	operator: /[!=|]|\.{3}/,
	punctuation: /[!(){}\[\]:=,]/,
	constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
};
! function (e) {
	e.languages.ruby = e.languages.extend("clike", {
		comment: [/#.*/, {
			pattern: /^=begin\s[\s\S]*?^=end/m,
			greedy: !0
		}],
		"class-name": {
			pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
			lookbehind: !0,
			inside: {
				punctuation: /[.\\]/
			}
		},
		keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/
	});
	var n = {
		pattern: /#\{[^}]+\}/,
		inside: {
			delimiter: {
				pattern: /^#\{|\}$/,
				alias: "tag"
			},
			rest: e.languages.ruby
		}
	};
	delete e.languages.ruby.function, e.languages.insertBefore("ruby", "keyword", {
		regex: [{
			pattern: /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,
			greedy: !0,
			inside: {
				interpolation: n
			}
		}, {
			pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
			greedy: !0,
			inside: {
				interpolation: n
			}
		}, {
			pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
			greedy: !0,
			inside: {
				interpolation: n
			}
		}, {
			pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
			greedy: !0,
			inside: {
				interpolation: n
			}
		}, {
			pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
			greedy: !0,
			inside: {
				interpolation: n
			}
		}, {
			pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,
			lookbehind: !0,
			greedy: !0
		}],
		variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
		symbol: {
			pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
			lookbehind: !0
		},
		"method-definition": {
			pattern: /(\bdef\s+)[\w.]+/,
			lookbehind: !0,
			inside: {
				function: /\w+$/,
				rest: e.languages.ruby
			}
		}
	}), e.languages.insertBefore("ruby", "number", {
		builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
		constant: /\b[A-Z]\w*(?:[?!]|\b)/
	}), e.languages.ruby.string = [{
		pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
		greedy: !0,
		inside: {
			interpolation: n
		}
	}, {
		pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
		greedy: !0,
		inside: {
			interpolation: n
		}
	}, {
		pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
		greedy: !0,
		inside: {
			interpolation: n
		}
	}, {
		pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
		greedy: !0,
		inside: {
			interpolation: n
		}
	}, {
		pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
		greedy: !0,
		inside: {
			interpolation: n
		}
	}, {
		pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0,
		inside: {
			interpolation: n
		}
	}], e.languages.rb = e.languages.ruby
}(Prism);
! function (e) {
	e.languages.haml = {
		"multiline-comment": {
			pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ]+.+)*/,
			lookbehind: !0,
			alias: "comment"
		},
		"multiline-code": [{
			pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ]+.+)/,
			lookbehind: !0,
			inside: e.languages.ruby
		}, {
			pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
			lookbehind: !0,
			inside: e.languages.ruby
		}],
		filter: {
			pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
			lookbehind: !0,
			inside: {
				"filter-name": {
					pattern: /^:[\w-]+/,
					alias: "variable"
				}
			}
		},
		markup: {
			pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
			lookbehind: !0,
			inside: e.languages.markup
		},
		doctype: {
			pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
			lookbehind: !0
		},
		tag: {
			pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
			lookbehind: !0,
			inside: {
				attributes: [{
					pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
					lookbehind: !0,
					inside: e.languages.ruby
				}, {
					pattern: /\([^)]+\)/,
					inside: {
						"attr-value": {
							pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,
							lookbehind: !0
						},
						"attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
						punctuation: /[=(),]/
					}
				}, {
					pattern: /\[[^\]]+\]/,
					inside: e.languages.ruby
				}],
				punctuation: /[<>]/
			}
		},
		code: {
			pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
			lookbehind: !0,
			inside: e.languages.ruby
		},
		interpolation: {
			pattern: /#\{[^}]+\}/,
			inside: {
				delimiter: {
					pattern: /^#\{|\}$/,
					alias: "punctuation"
				},
				rest: e.languages.ruby
			}
		},
		punctuation: {
			pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
			lookbehind: !0
		}
	};
	for (var t = ["css", {
			filter: "coffee",
			language: "coffeescript"
		}, "erb", "javascript", "less", "markdown", "ruby", "scss", "textile"], n = {}, r = 0, a = t.length; r < a; r++) {
		var i = t[r];
		i = "string" == typeof i ? {
			filter: i,
			language: i
		} : i, e.languages[i.language] && (n["filter-" + i.filter] = {
			pattern: RegExp("((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+".replace("{{filter_name}}", function () {
				return i.filter
			})),
			lookbehind: !0,
			inside: {
				"filter-name": {
					pattern: /^:[\w-]+/,
					alias: "variable"
				},
				rest: e.languages[i.language]
			}
		})
	}
	e.languages.insertBefore("haml", "filter", n)
}(Prism);
! function (e) {
	e.languages.handlebars = {
		comment: /\{\{![\s\S]*?\}\}/,
		delimiter: {
			pattern: /^\{\{\{?|\}\}\}?$/i,
			alias: "punctuation"
		},
		string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
		number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
		boolean: /\b(?:true|false)\b/,
		block: {
			pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
			lookbehind: !0,
			alias: "keyword"
		},
		brackets: {
			pattern: /\[[^\]]+\]/,
			inside: {
				punctuation: /\[|\]/,
				variable: /[\s\S]+/
			}
		},
		punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
		variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
	}, e.hooks.add("before-tokenize", function (a) {
		e.languages["markup-templating"].buildPlaceholders(a, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)
	}), e.hooks.add("after-tokenize", function (a) {
		e.languages["markup-templating"].tokenizePlaceholders(a, "handlebars")
	})
}(Prism);
Prism.languages.haskell = {
	comment: {
		pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\s\S]*?-})/m,
		lookbehind: !0
	},
	char: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
	string: {
		pattern: /"(?:[^\\"]|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
		greedy: !0
	},
	keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
	import_statement: {
		pattern: /((?:\r?\n|\r|^)\s*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][_a-zA-Z0-9']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
		lookbehind: !0,
		inside: {
			keyword: /\b(?:import|qualified|as|hiding)\b/
		}
	},
	builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
	number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
	operator: /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/,
	hvariable: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*\b/,
	constant: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*\b/,
	punctuation: /[{}[\];(),.:]/
}, Prism.languages.hs = Prism.languages.haskell;
! function (t) {
	t.languages.http = {
		"request-line": {
			pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
			inside: {
				property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
				"attr-name": /:\w+/
			}
		},
		"response-status": {
			pattern: /^HTTP\/1.[01] \d+.*/m,
			inside: {
				property: {
					pattern: /(^HTTP\/1.[01] )\d+.*/i,
					lookbehind: !0
				}
			}
		},
		"header-name": {
			pattern: /^[\w-]+:(?=.)/m,
			alias: "keyword"
		}
	};
	var a, e, n, i = t.languages,
		p = {
			"application/javascript": i.javascript,
			"application/json": i.json || i.javascript,
			"application/xml": i.xml,
			"text/xml": i.xml,
			"text/html": i.html,
			"text/css": i.css
		},
		s = {
			"application/json": !0,
			"application/xml": !0
		};
	for (var r in p)
		if (p[r]) {
			a = a || {};
			var T = s[r] ? (void 0, n = (e = r).replace(/^[a-z]+\//, ""), "(?:" + e + "|\\w+/(?:[\\w.-]+\\+)+" + n + "(?![+\\w.-]))") : r;
			a[r.replace(/\//g, "-")] = {
				pattern: RegExp("(content-type:\\s*" + T + "[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*", "i"),
				lookbehind: !0,
				inside: p[r]
			}
		} a && t.languages.insertBefore("http", "header-name", a)
}(Prism);
! function (e) {
	var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|null|open|opens|package|private|protected|provides|public|record|requires|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
		a = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
	e.languages.java = e.languages.extend("clike", {
		"class-name": [a, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
		keyword: t,
		function: [e.languages.clike.function, {
			pattern: /(\:\:)[a-z_]\w*/,
			lookbehind: !0
		}],
		number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		operator: {
			pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: !0
		}
	}), e.languages.insertBefore("java", "string", {
		"triple-quoted-string": {
			pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
			greedy: !0,
			alias: "string"
		}
	}), e.languages.insertBefore("java", "class-name", {
		annotation: {
			alias: "punctuation",
			pattern: /(^|[^.])@\w+/,
			lookbehind: !0
		},
		namespace: {
			pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function () {
				return t.source
			})),
			lookbehind: !0,
			inside: {
				punctuation: /\./
			}
		},
		generics: {
			pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
			inside: {
				"class-name": a,
				keyword: t,
				punctuation: /[<>(),.:]/,
				operator: /[?&|]/
			}
		}
	})
}(Prism);
Prism.languages.json = {
	property: {
		pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		greedy: !0
	},
	string: {
		pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		greedy: !0
	},
	comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
	number: /-?\d+\.?\d*(?:e[+-]?\d+)?/i,
	punctuation: /[{}[\],]/,
	operator: /:/,
	boolean: /\b(?:true|false)\b/,
	null: {
		pattern: /\bnull\b/,
		alias: "keyword"
	}
};
! function (e) {
	e.languages.kotlin = e.languages.extend("clike", {
		keyword: {
			pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
			lookbehind: !0
		},
		function: [/\w+(?=\s*\()/, {
			pattern: /(\.)\w+(?=\s*\{)/,
			lookbehind: !0
		}],
		number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
		operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
	}), delete e.languages.kotlin["class-name"], e.languages.insertBefore("kotlin", "string", {
		"raw-string": {
			pattern: /("""|''')[\s\S]*?\1/,
			alias: "string"
		}
	}), e.languages.insertBefore("kotlin", "keyword", {
		annotation: {
			pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
			alias: "builtin"
		}
	}), e.languages.insertBefore("kotlin", "function", {
		label: {
			pattern: /\w+@|@\w+/,
			alias: "symbol"
		}
	});
	var n = [{
		pattern: /\$\{[^}]+\}/,
		inside: {
			delimiter: {
				pattern: /^\$\{|\}$/,
				alias: "variable"
			},
			rest: e.languages.kotlin
		}
	}, {
		pattern: /\$\w+/,
		alias: "variable"
	}];
	e.languages.kotlin.string.inside = e.languages.kotlin["raw-string"].inside = {
		interpolation: n
	}
}(Prism);
! function (a) {
	var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
		n = {
			"equation-command": {
				pattern: e,
				alias: "regex"
			}
		};
	a.languages.latex = {
		comment: /%.*/m,
		cdata: {
			pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
			lookbehind: !0
		},
		equation: [{
			pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
			inside: n,
			alias: "string"
		}, {
			pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
			lookbehind: !0,
			inside: n,
			alias: "string"
		}],
		keyword: {
			pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
			lookbehind: !0
		},
		url: {
			pattern: /(\\url\{)[^}]+(?=\})/,
			lookbehind: !0
		},
		headline: {
			pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
			lookbehind: !0,
			alias: "class-name"
		},
		function: {
			pattern: e,
			alias: "selector"
		},
		punctuation: /[[\]{}&]/
	}, a.languages.tex = a.languages.latex, a.languages.context = a.languages.latex
}(Prism);
Prism.languages.less = Prism.languages.extend("css", {
	comment: [/\/\*[\s\S]*?\*\//, {
		pattern: /(^|[^\\])\/\/.*/,
		lookbehind: !0
	}],
	atrule: {
		pattern: /@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/,
		inside: {
			punctuation: /[:()]/
		}
	},
	selector: {
		pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/,
		inside: {
			variable: /@+[\w-]+/
		}
	},
	property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
	operator: /[+\-*\/]/
}), Prism.languages.insertBefore("less", "property", {
	variable: [{
		pattern: /@[\w-]+\s*:/,
		inside: {
			punctuation: /:/
		}
	}, /@@?[\w-]+/],
	"mixin-usage": {
		pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
		lookbehind: !0,
		alias: "function"
	}
});
Prism.languages.makefile = {
	comment: {
		pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
		lookbehind: !0
	},
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0
	},
	builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
	symbol: {
		pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
		inside: {
			variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/
		}
	},
	variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
	keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, {
		pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
		lookbehind: !0
	}],
	operator: /(?:::|[?:+!])?=|[|@]/,
	punctuation: /[:;(){}]/
};
! function (d) {
	function n(n, e) {
		return n = n.replace(/<inner>/g, function () {
			return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))"
		}), e && (n = n + "|" + n.replace(/_/g, "\\*")), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")")
	}
	var e = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
		t = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|$)".replace(/__/g, function () {
			return e
		}),
		a = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
	d.languages.markdown = d.languages.extend("markup", {}), d.languages.insertBefore("markdown", "prolog", {
		blockquote: {
			pattern: /^>(?:[\t ]*>)*/m,
			alias: "punctuation"
		},
		table: {
			pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"),
			inside: {
				"table-data-rows": {
					pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"),
					lookbehind: !0,
					inside: {
						"table-data": {
							pattern: RegExp(e),
							inside: d.languages.markdown
						},
						punctuation: /\|/
					}
				},
				"table-line": {
					pattern: RegExp("^(" + t + ")" + a + "$"),
					lookbehind: !0,
					inside: {
						punctuation: /\||:?-{3,}:?/
					}
				},
				"table-header-row": {
					pattern: RegExp("^" + t + "$"),
					inside: {
						"table-header": {
							pattern: RegExp(e),
							alias: "important",
							inside: d.languages.markdown
						},
						punctuation: /\|/
					}
				}
			}
		},
		code: [{
			pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
			lookbehind: !0,
			alias: "keyword"
		}, {
			pattern: /``.+?``|`[^`\r\n]+`/,
			alias: "keyword"
		}, {
			pattern: /^```[\s\S]*?^```$/m,
			greedy: !0,
			inside: {
				"code-block": {
					pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
					lookbehind: !0
				},
				"code-language": {
					pattern: /^(```).+/,
					lookbehind: !0
				},
				punctuation: /```/
			}
		}],
		title: [{
			pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
			alias: "important",
			inside: {
				punctuation: /==+$|--+$/
			}
		}, {
			pattern: /(^\s*)#+.+/m,
			lookbehind: !0,
			alias: "important",
			inside: {
				punctuation: /^#+|#+$/
			}
		}],
		hr: {
			pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
			lookbehind: !0,
			alias: "punctuation"
		},
		list: {
			pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
			lookbehind: !0,
			alias: "punctuation"
		},
		"url-reference": {
			pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
			inside: {
				variable: {
					pattern: /^(!?\[)[^\]]+/,
					lookbehind: !0
				},
				string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
				punctuation: /^[\[\]!:]|[<>]/
			},
			alias: "url"
		},
		bold: {
			pattern: n("__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__", !0),
			lookbehind: !0,
			greedy: !0,
			inside: {
				content: {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: !0,
					inside: {}
				},
				punctuation: /\*\*|__/
			}
		},
		italic: {
			pattern: n("_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_", !0),
			lookbehind: !0,
			greedy: !0,
			inside: {
				content: {
					pattern: /(^.)[\s\S]+(?=.$)/,
					lookbehind: !0,
					inside: {}
				},
				punctuation: /[*_]/
			}
		},
		strike: {
			pattern: n("(~~?)(?:(?!~)<inner>)+?\\2", !1),
			lookbehind: !0,
			greedy: !0,
			inside: {
				content: {
					pattern: /(^~~?)[\s\S]+(?=\1$)/,
					lookbehind: !0,
					inside: {}
				},
				punctuation: /~~?/
			}
		},
		url: {
			pattern: n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])', !1),
			lookbehind: !0,
			greedy: !0,
			inside: {
				variable: {
					pattern: /(\[)[^\]]+(?=\]$)/,
					lookbehind: !0
				},
				content: {
					pattern: /(^!?\[)[^\]]+(?=\])/,
					lookbehind: !0,
					inside: {}
				},
				string: {
					pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
				}
			}
		}
	}), ["url", "bold", "italic", "strike"].forEach(function (e) {
		["url", "bold", "italic", "strike"].forEach(function (n) {
			e !== n && (d.languages.markdown[e].inside.content.inside[n] = d.languages.markdown[n])
		})
	}), d.hooks.add("after-tokenize", function (n) {
		"markdown" !== n.language && "md" !== n.language || ! function n(e) {
			if (e && "string" != typeof e)
				for (var t = 0, a = e.length; t < a; t++) {
					var i = e[t];
					if ("code" === i.type) {
						var r = i.content[1],
							o = i.content[3];
						if (r && o && "code-language" === r.type && "code-block" === o.type && "string" == typeof r.content) {
							var l = r.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
								s = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
							o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s]
						}
					} else n(i.content)
				}
		}(n.tokens)
	}), d.hooks.add("wrap", function (n) {
		if ("code-block" === n.type) {
			for (var e = "", t = 0, a = n.classes.length; t < a; t++) {
				var i = n.classes[t],
					r = /language-(.+)/.exec(i);
				if (r) {
					e = r[1];
					break
				}
			}
			var o = d.languages[e];
			if (o) {
				var l = n.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
				n.content = d.highlight(l, o, e)
			} else if (e && "none" !== e && d.plugins.autoloader) {
				var s = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
				n.attributes.id = s, d.plugins.autoloader.loadLanguages(e, function () {
					var n = document.getElementById(s);
					n && (n.innerHTML = d.highlight(n.textContent, d.languages[e], e))
				})
			}
		}
	}), d.languages.md = d.languages.markdown
}(Prism);
Prism.languages.objectivec = Prism.languages.extend("c", {
	keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
	string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
	operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
}), delete Prism.languages.objectivec["class-name"], Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.ocaml = {
	comment: /\(\*[\s\S]*?\*\)/,
	string: [{
		pattern: /"(?:\\.|[^\\\r\n"])*"/,
		greedy: !0
	}, {
		pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
		greedy: !0
	}],
	number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
	directive: {
		pattern: /\B#\w+/,
		alias: "important"
	},
	label: {
		pattern: /\B~\w+/,
		alias: "function"
	},
	type_variable: {
		pattern: /\B'\w+/,
		alias: "function"
	},
	variant: {
		pattern: /`\w+/,
		alias: "variable"
	},
	module: {
		pattern: /\b[A-Z]\w+/,
		alias: "variable"
	},
	keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
	boolean: /\b(?:false|true)\b/,
	operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
	punctuation: /[(){}\[\]|_.,:;]/
};
Prism.languages.perl = {
	comment: [{
		pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m,
		lookbehind: !0
	}, {
		pattern: /(^|[^\\$])#.*/,
		lookbehind: !0
	}],
	string: [{
		pattern: /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
		greedy: !0
	}, {
		pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
		greedy: !0
	}, {
		pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
		greedy: !0
	}, {
		pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
		greedy: !0
	}, {
		pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
		greedy: !0
	}, {
		pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
		greedy: !0
	}, {
		pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
		greedy: !0
	}, {
		pattern: /'(?:[^'\\\r\n]|\\.)*'/,
		greedy: !0
	}],
	regex: [{
		pattern: /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
		greedy: !0
	}, {
		pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
		greedy: !0
	}, {
		pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
		greedy: !0
	}, {
		pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
		greedy: !0
	}, {
		pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
		greedy: !0
	}, {
		pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
		greedy: !0
	}, {
		pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
		lookbehind: !0,
		greedy: !0
	}, {
		pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
		lookbehind: !0,
		greedy: !0
	}, {
		pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
		lookbehind: !0,
		greedy: !0
	}, {
		pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
		lookbehind: !0,
		greedy: !0
	}, {
		pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
		lookbehind: !0,
		greedy: !0
	}, {
		pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
		lookbehind: !0,
		greedy: !0
	}, {
		pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
		greedy: !0
	}],
	variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
	filehandle: {
		pattern: /<(?![<=])\S*>|\b_\b/,
		alias: "symbol"
	},
	vstring: {
		pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
		alias: "string"
	},
	function: {
		pattern: /sub [a-z0-9_]+/i,
		inside: {
			keyword: /sub/
		}
	},
	keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
	number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
	operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
	punctuation: /[{}[\];(),:]/
};
! function (n) {
	n.languages.php = n.languages.extend("clike", {
		keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
		boolean: {
			pattern: /\b(?:false|true)\b/i,
			alias: "constant"
		},
		constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
		comment: {
			pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
			lookbehind: !0
		}
	}), n.languages.insertBefore("php", "string", {
		"shell-comment": {
			pattern: /(^|[^\\])#.*/,
			lookbehind: !0,
			alias: "comment"
		}
	}), n.languages.insertBefore("php", "comment", {
		delimiter: {
			pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
			alias: "important"
		}
	}), n.languages.insertBefore("php", "keyword", {
		variable: /\$+(?:\w+\b|(?={))/i,
		package: {
			pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
			lookbehind: !0,
			inside: {
				punctuation: /\\/
			}
		}
	}), n.languages.insertBefore("php", "operator", {
		property: {
			pattern: /(->)[\w]+/,
			lookbehind: !0
		}
	});
	var e = {
		pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,
		lookbehind: !0,
		inside: n.languages.php
	};
	n.languages.insertBefore("php", "string", {
		"nowdoc-string": {
			pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
			greedy: !0,
			alias: "string",
			inside: {
				delimiter: {
					pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
					alias: "symbol",
					inside: {
						punctuation: /^<<<'?|[';]$/
					}
				}
			}
		},
		"heredoc-string": {
			pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
			greedy: !0,
			alias: "string",
			inside: {
				delimiter: {
					pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
					alias: "symbol",
					inside: {
						punctuation: /^<<<"?|[";]$/
					}
				},
				interpolation: e
			}
		},
		"single-quoted-string": {
			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
			greedy: !0,
			alias: "string"
		},
		"double-quoted-string": {
			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
			greedy: !0,
			alias: "string",
			inside: {
				interpolation: e
			}
		}
	}), delete n.languages.php.string, n.hooks.add("before-tokenize", function (e) {
		if (/<\?/.test(e.code)) {
			n.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)
		}
	}), n.hooks.add("after-tokenize", function (e) {
		n.languages["markup-templating"].tokenizePlaceholders(e, "php")
	})
}(Prism);
Prism.languages.insertBefore("php", "variable", {
	this: /\$this\b/,
	global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
	scope: {
		pattern: /\b[\w\\]+::/,
		inside: {
			keyword: /static|self|parent/,
			punctuation: /::|\\/
		}
	}
});
Prism.languages.processing = Prism.languages.extend("clike", {
	keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
	operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
}), Prism.languages.insertBefore("processing", "number", {
	constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
	type: {
		pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,
		alias: "variable"
	}
}), Prism.languages.processing.function.pattern = /\w+(?=\s*\()/, Prism.languages.processing["class-name"].alias = "variable";
! function (e) {
	e.languages.pug = {
		comment: {
			pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
			lookbehind: !0
		},
		"multiline-script": {
			pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: !0,
			inside: e.languages.javascript
		},
		filter: {
			pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: !0,
			inside: {
				"filter-name": {
					pattern: /^:[\w-]+/,
					alias: "variable"
				}
			}
		},
		"multiline-plain-text": {
			pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: !0
		},
		markup: {
			pattern: /(^[\t ]*)<.+/m,
			lookbehind: !0,
			inside: e.languages.markup
		},
		doctype: {
			pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
			lookbehind: !0
		},
		"flow-control": {
			pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
			lookbehind: !0,
			inside: {
				each: {
					pattern: /^each .+? in\b/,
					inside: {
						keyword: /\b(?:each|in)\b/,
						punctuation: /,/
					}
				},
				branch: {
					pattern: /^(?:if|unless|else|case|when|default|while)\b/,
					alias: "keyword"
				},
				rest: e.languages.javascript
			}
		},
		keyword: {
			pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
			lookbehind: !0
		},
		mixin: [{
			pattern: /(^[\t ]*)mixin .+/m,
			lookbehind: !0,
			inside: {
				keyword: /^mixin/,
				function: /\w+(?=\s*\(|\s*$)/,
				punctuation: /[(),.]/
			}
		}, {
			pattern: /(^[\t ]*)\+.+/m,
			lookbehind: !0,
			inside: {
				name: {
					pattern: /^\+\w+/,
					alias: "function"
				},
				rest: e.languages.javascript
			}
		}],
		script: {
			pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
			lookbehind: !0,
			inside: e.languages.javascript
		},
		"plain-text": {
			pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
			lookbehind: !0
		},
		tag: {
			pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
			lookbehind: !0,
			inside: {
				attributes: [{
					pattern: /&[^(]+\([^)]+\)/,
					inside: e.languages.javascript
				}, {
					pattern: /\([^)]+\)/,
					inside: {
						"attr-value": {
							pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
							lookbehind: !0,
							inside: e.languages.javascript
						},
						"attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
						punctuation: /[!=(),]+/
					}
				}],
				punctuation: /:/,
				"attr-id": /#[\w\-]+/,
				"attr-class": /\.[\w\-]+/
			}
		},
		code: [{
			pattern: /(^[\t ]*(?:-|!?=)).+/m,
			lookbehind: !0,
			inside: e.languages.javascript
		}],
		punctuation: /[.\-!=|]+/
	};
	for (var t = [{
			filter: "atpl",
			language: "twig"
		}, {
			filter: "coffee",
			language: "coffeescript"
		}, "ejs", "handlebars", "less", "livescript", "markdown", {
			filter: "sass",
			language: "scss"
		}, "stylus"], n = {}, a = 0, i = t.length; a < i; a++) {
		var r = t[a];
		r = "string" == typeof r ? {
			filter: r,
			language: r
		} : r, e.languages[r.language] && (n["filter-" + r.filter] = {
			pattern: RegExp("(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ]+.+|\\s*?(?=\r?\n|\r)))+".replace("{{filter_name}}", function () {
				return r.filter
			}), "m"),
			lookbehind: !0,
			inside: {
				"filter-name": {
					pattern: /^:[\w-]+/,
					alias: "variable"
				},
				rest: e.languages[r.language]
			}
		})
	}
	e.languages.insertBefore("pug", "filter", n)
}(Prism);
Prism.languages.python = {
	comment: {
		pattern: /(^|[^\\])#.*/,
		lookbehind: !0
	},
	"string-interpolation": {
		pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
		greedy: !0,
		inside: {
			interpolation: {
				pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
				lookbehind: !0,
				inside: {
					"format-spec": {
						pattern: /(:)[^:(){}]+(?=}$)/,
						lookbehind: !0
					},
					"conversion-option": {
						pattern: /![sra](?=[:}]$)/,
						alias: "punctuation"
					},
					rest: null
				}
			},
			string: /[\s\S]+/
		}
	},
	"triple-quoted-string": {
		pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
		greedy: !0,
		alias: "string"
	},
	string: {
		pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: !0
	},
	function: {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: !0
	},
	"class-name": {
		pattern: /(\bclass\s+)\w+/i,
		lookbehind: !0
	},
	decorator: {
		pattern: /(^\s*)@\w+(?:\.\w+)*/im,
		lookbehind: !0,
		alias: ["annotation", "punctuation"],
		inside: {
			punctuation: /\./
		}
	},
	keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
	builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
	boolean: /\b(?:True|False|None)\b/,
	number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
	operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
	punctuation: /[{}[\];(),.:]/
}, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
Prism.languages.r = {
	comment: /#.*/,
	string: {
		pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
		greedy: !0
	},
	"percent-operator": {
		pattern: /%[^%\s]*%/,
		alias: "operator"
	},
	boolean: /\b(?:TRUE|FALSE)\b/,
	ellipsis: /\.\.(?:\.|\d+)/,
	number: [/\b(?:NaN|Inf)\b/, /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],
	keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
	operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
	punctuation: /[(){}\[\],;]/
};
! function (i) {
	var t = i.util.clone(i.languages.javascript);
	i.languages.jsx = i.languages.extend("markup", t), i.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i, i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, i.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i, i.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, i.languages.insertBefore("inside", "attr-name", {
		spread: {
			pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
			inside: {
				punctuation: /\.{3}|[{}.]/,
				"attr-value": /\w+/
			}
		}
	}, i.languages.jsx.tag), i.languages.insertBefore("inside", "attr-value", {
		script: {
			pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
			inside: {
				"script-punctuation": {
					pattern: /^=(?={)/,
					alias: "punctuation"
				},
				rest: i.languages.jsx
			},
			alias: "language-javascript"
		}
	}, i.languages.jsx.tag);
	var o = function (t) {
			return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(o).join("") : ""
		},
		p = function (t) {
			for (var n = [], e = 0; e < t.length; e++) {
				var a = t[e],
					s = !1;
				if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === o(a.content[0].content[1]) && n.pop() : "/>" === a.content[a.content.length - 1].content || n.push({
						tagName: o(a.content[0].content[1]),
						openedBraces: 0
					}) : 0 < n.length && "punctuation" === a.type && "{" === a.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? n[n.length - 1].openedBraces-- : s = !0), (s || "string" == typeof a) && 0 < n.length && 0 === n[n.length - 1].openedBraces) {
					var g = o(a);
					e < t.length - 1 && ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) && (g += o(t[e + 1]), t.splice(e + 1, 1)), 0 < e && ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) && (g = o(t[e - 1]) + g, t.splice(e - 1, 1), e--), t[e] = new i.Token("plain-text", g, null, g)
				}
				a.content && "string" != typeof a.content && p(a.content)
			}
		};
	i.hooks.add("after-tokenize", function (t) {
		"jsx" !== t.language && "tsx" !== t.language || p(t.tokens)
	})
}(Prism);
! function (e) {
	e.languages.typescript = e.languages.extend("javascript", {
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: !0,
			greedy: !0,
			inside: null
		},
		keyword: /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
		builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
	}), delete e.languages.typescript.parameter;
	var n = e.languages.extend("typescript", {});
	delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", {
		"generic-function": {
			pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
			greedy: !0,
			inside: {
				function: /^#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
				generic: {
					pattern: /<[\s\S]+/,
					alias: "class-name",
					inside: n
				}
			}
		}
	}), e.languages.ts = e.languages.typescript
}(Prism);
var typescript = Prism.util.clone(Prism.languages.typescript);
Prism.languages.tsx = Prism.languages.extend("jsx", typescript);
Prism.languages.reason = Prism.languages.extend("clike", {
	string: {
		pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
		greedy: !0
	},
	"class-name": /\b[A-Z]\w*/,
	keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
	operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
}), Prism.languages.insertBefore("reason", "class-name", {
	character: {
		pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
		alias: "string"
	},
	constructor: {
		pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
		alias: "variable"
	},
	label: {
		pattern: /\b[a-z]\w*(?=::)/,
		alias: "symbol"
	}
}), delete Prism.languages.reason.function;
! function (e) {
	for (var t = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", a = 0; a < 2; a++) t = t.replace(/<self>/g, function () {
		return t
	});
	t = t.replace(/<self>/g, function () {
		return "[^\\s\\S]"
	}), e.languages.rust = {
		comment: [{
			pattern: RegExp("(^|[^\\\\])" + t),
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: !0,
			greedy: !0
		}],
		string: {
			pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
			greedy: !0
		},
		char: {
			pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/,
			greedy: !0,
			alias: "string"
		},
		attribute: {
			pattern: /#!?\[[^[\]]*\]/,
			greedy: !0,
			alias: "attr-name",
			inside: {
				string: null
			}
		},
		"closure-params": {
			pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
			lookbehind: !0,
			greedy: !0,
			inside: {
				"closure-punctuation": {
					pattern: /^\||\|$/,
					alias: "punctuation"
				},
				rest: null
			}
		},
		"lifetime-annotation": {
			pattern: /'\w+/,
			alias: "symbol"
		},
		"fragment-specifier": {
			pattern: /(\$\w+:)[a-z]+/,
			lookbehind: !0,
			alias: "punctuation"
		},
		variable: /\$\w+/,
		"function-definition": {
			pattern: /(\bfn\s*)\w+/,
			lookbehind: !0,
			alias: "function"
		},
		keyword: [/\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char)\b/],
		function: /\b[a-z_]\w*(?=\s*(?:::\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*)?\()/,
		macro: {
			pattern: /\w+!/,
			alias: "property"
		},
		number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,
		boolean: /\b(?:false|true)\b/,
		punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
		operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
	}, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string
}(Prism);
! function (e) {
	e.languages.sass = e.languages.extend("css", {
		comment: {
			pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
			lookbehind: !0
		}
	}), e.languages.insertBefore("sass", "atrule", {
		"atrule-line": {
			pattern: /^(?:[ \t]*)[@+=].+/m,
			inside: {
				atrule: /(?:@[\w-]+|[+=])/m
			}
		}
	}), delete e.languages.sass.atrule;
	var t = /\$[-\w]+|#\{\$[-\w]+\}/,
		a = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
			pattern: /(\s+)-(?=\s)/,
			lookbehind: !0
		}];
	e.languages.insertBefore("sass", "property", {
		"variable-line": {
			pattern: /^[ \t]*\$.+/m,
			inside: {
				punctuation: /:/,
				variable: t,
				operator: a
			}
		},
		"property-line": {
			pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
			inside: {
				property: [/[^:\s]+(?=\s*:)/, {
					pattern: /(:)[^:\s]+/,
					lookbehind: !0
				}],
				punctuation: /:/,
				variable: t,
				operator: a,
				important: e.languages.sass.important
			}
		}
	}), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
		selector: {
			pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
			lookbehind: !0
		}
	})
}(Prism);
Prism.languages.scss = Prism.languages.extend("css", {
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: !0
	},
	atrule: {
		pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
		inside: {
			rule: /@[\w-]+/
		}
	},
	url: /(?:[-a-z]+-)?url(?=\()/i,
	selector: {
		pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
		inside: {
			parent: {
				pattern: /&/,
				alias: "important"
			},
			placeholder: /%[-\w]+/,
			variable: /\$[-\w]+|#\{\$[-\w]+\}/
		}
	},
	property: {
		pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
		inside: {
			variable: /\$[-\w]+|#\{\$[-\w]+\}/
		}
	}
}), Prism.languages.insertBefore("scss", "atrule", {
	keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
		pattern: /( +)(?:from|through)(?= )/,
		lookbehind: !0
	}]
}), Prism.languages.insertBefore("scss", "important", {
	variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
	placeholder: {
		pattern: /%[-\w]+/,
		alias: "selector"
	},
	statement: {
		pattern: /\B!(?:default|optional)\b/i,
		alias: "keyword"
	},
	boolean: /\b(?:true|false)\b/,
	null: {
		pattern: /\bnull\b/,
		alias: "keyword"
	},
	operator: {
		pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
		lookbehind: !0
	}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
Prism.languages.scheme = {
	comment: /;.*/,
	string: {
		pattern: /"(?:[^"\\]|\\.)*"/,
		greedy: !0
	},
	symbol: {
		pattern: /'[^()#'\s]+/,
		greedy: !0
	},
	character: {
		pattern: /#\\(?:[ux][a-fA-F\d]+|[-a-zA-Z]+|\S)/,
		greedy: !0,
		alias: "string"
	},
	"lambda-parameter": [{
		pattern: /(\(lambda\s+)[^()'\s]+/,
		lookbehind: !0
	}, {
		pattern: /(\(lambda\s+\()[^()']+/,
		lookbehind: !0
	}],
	keyword: {
		pattern: /(\()(?:define(?:-library|-macro|-syntax|-values)?|defmacro|(?:case-)?lambda|let(?:(?:\*|rec)?(?:-values)?|-syntax|rec-syntax)|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-(?:case|rules))(?=[()\s]|$)/,
		lookbehind: !0
	},
	builtin: {
		pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s]|$)/,
		lookbehind: !0
	},
	number: {
		pattern: /([\s()])(?:(?:#d(?:#[ei])?|#[ei](?:#d)?)?[+-]?(?:(?:\d*\.?\d+(?:[eE][+-]?\d+)?|\d+\/\d+)(?:[+-](?:\d*\.?\d+(?:[eE][+-]?\d+)?|\d+\/\d+)i)?|(?:\d*\.?\d+(?:[eE][+-]?\d+)?|\d+\/\d+)i)|(?:#[box](?:#[ei])?|#[ei](?:#[box])?)[+-]?(?:[\da-fA-F]+(?:\/[\da-fA-F]+)?(?:[+-][\da-fA-F]+(?:\/[\da-fA-F]+)?i)?|[\da-fA-F]+(?:\/[\da-fA-F]+)?i))(?=[()\s]|$)/,
		lookbehind: !0
	},
	boolean: /#[ft](?=[()\s]|$)/,
	operator: {
		pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)(?=[()\s]|$)/,
		lookbehind: !0
	},
	function: {
		pattern: /(\()[^()'\s]+(?=[()\s]|$)/,
		lookbehind: !0
	},
	punctuation: /[()']/
};
Prism.languages.sql = {
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
		lookbehind: !0
	},
	variable: [{
		pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
		greedy: !0
	}, /@[\w.$]+/],
	string: {
		pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
		greedy: !0,
		lookbehind: !0
	},
	function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
	keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
	boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
	number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
	operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
	punctuation: /[;[\]()`,.]/
};
! function (e) {
	var n = {
			pattern: /(\d)(?:%|[a-z]+)/,
			lookbehind: !0
		},
		r = {
			pattern: /(^|[^\w.-])-?\d*\.?\d+/,
			lookbehind: !0
		},
		i = {
			comment: {
				pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
				lookbehind: !0
			},
			url: {
				pattern: /url\((["']?).*?\1\)/i,
				greedy: !0
			},
			string: {
				pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
				greedy: !0
			},
			interpolation: null,
			func: null,
			important: /\B!(?:important|optional)\b/i,
			keyword: {
				pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
				lookbehind: !0
			},
			hexcode: /#[\da-f]{3,6}/i,
			color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
				pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
				inside: {
					unit: n,
					number: r,
					function: /[\w-]+(?=\()/,
					punctuation: /[(),]/
				}
			}],
			entity: /\\[\da-f]{1,8}/i,
			unit: n,
			boolean: /\b(?:true|false)\b/,
			operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
			number: r,
			punctuation: /[{}()\[\];:,]/
		};
	i.interpolation = {
		pattern: /\{[^\r\n}:]+\}/,
		alias: "variable",
		inside: {
			delimiter: {
				pattern: /^{|}$/,
				alias: "punctuation"
			},
			rest: i
		}
	}, i.func = {
		pattern: /[\w-]+\([^)]*\).*/,
		inside: {
			function: /^[^(]+/,
			rest: i
		}
	}, e.languages.stylus = {
		"atrule-declaration": {
			pattern: /(^\s*)@.+/m,
			lookbehind: !0,
			inside: {
				atrule: /^@[\w-]+/,
				rest: i
			}
		},
		"variable-declaration": {
			pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
			lookbehind: !0,
			inside: {
				variable: /^\S+/,
				rest: i
			}
		},
		statement: {
			pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
			lookbehind: !0,
			inside: {
				keyword: /^\S+/,
				rest: i
			}
		},
		"property-declaration": {
			pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
			lookbehind: !0,
			inside: {
				property: {
					pattern: /^[^\s:]+/,
					inside: {
						interpolation: i.interpolation
					}
				},
				rest: i
			}
		},
		selector: {
			pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
			lookbehind: !0,
			inside: {
				interpolation: i.interpolation,
				comment: i.comment,
				punctuation: /[{},]/
			}
		},
		func: i.func,
		string: i.string,
		comment: {
			pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
			lookbehind: !0,
			greedy: !0
		},
		interpolation: i.interpolation,
		punctuation: /[{}()\[\];:.]/
	}
}(Prism);
Prism.languages.swift = Prism.languages.extend("clike", {
	string: {
		pattern: /("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0,
		inside: {
			interpolation: {
				pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
				inside: {
					delimiter: {
						pattern: /^\\\(|\)$/,
						alias: "variable"
					}
				}
			}
		}
	},
	keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
	number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
	constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
	atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
	builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
}), Prism.languages.swift.string.inside.interpolation.inside.rest = Prism.languages.swift;
! function (n) {
	function e(n, e) {
		return RegExp(n.replace(/<MOD>/g, function () {
			return "(?:\\([^|()\n]+\\)|\\[[^\\]\n]+\\]|\\{[^}\n]+\\})"
		}).replace(/<PAR>/g, function () {
			return "(?:\\)|\\((?![^|()\n]+\\)))"
		}), e || "")
	}
	var i = {
			css: {
				pattern: /\{[^}]+\}/,
				inside: {
					rest: n.languages.css
				}
			},
			"class-id": {
				pattern: /(\()[^)]+(?=\))/,
				lookbehind: !0,
				alias: "attr-value"
			},
			lang: {
				pattern: /(\[)[^\]]+(?=\])/,
				lookbehind: !0,
				alias: "attr-value"
			},
			punctuation: /[\\\/]\d+|\S/
		},
		t = n.languages.textile = n.languages.extend("markup", {
			phrase: {
				pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
				lookbehind: !0,
				inside: {
					"block-tag": {
						pattern: e("^[a-z]\\w*(?:<MOD>|<PAR>|[<>=])*\\."),
						inside: {
							modifier: {
								pattern: e("(^[a-z]\\w*)(?:<MOD>|<PAR>|[<>=])+(?=\\.)"),
								lookbehind: !0,
								inside: i
							},
							tag: /^[a-z]\w*/,
							punctuation: /\.$/
						}
					},
					list: {
						pattern: e("^[*#]+<MOD>*\\s+.+", "m"),
						inside: {
							modifier: {
								pattern: e("(^[*#]+)<MOD>+"),
								lookbehind: !0,
								inside: i
							},
							punctuation: /^[*#]+/
						}
					},
					table: {
						pattern: e("^(?:(?:<MOD>|<PAR>|[<>=^~])+\\.\\s*)?(?:\\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|", "m"),
						inside: {
							modifier: {
								pattern: e("(^|\\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+(?=\\.)"),
								lookbehind: !0,
								inside: i
							},
							punctuation: /\||^\./
						}
					},
					inline: {
						pattern: e("(\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>*.+?\\1"),
						inside: {
							bold: {
								pattern: e("(^(\\*\\*?)<MOD>*).+?(?=\\2)"),
								lookbehind: !0
							},
							italic: {
								pattern: e("(^(__?)<MOD>*).+?(?=\\2)"),
								lookbehind: !0
							},
							cite: {
								pattern: e("(^\\?\\?<MOD>*).+?(?=\\?\\?)"),
								lookbehind: !0,
								alias: "string"
							},
							code: {
								pattern: e("(^@<MOD>*).+?(?=@)"),
								lookbehind: !0,
								alias: "keyword"
							},
							inserted: {
								pattern: e("(^\\+<MOD>*).+?(?=\\+)"),
								lookbehind: !0
							},
							deleted: {
								pattern: e("(^-<MOD>*).+?(?=-)"),
								lookbehind: !0
							},
							span: {
								pattern: e("(^%<MOD>*).+?(?=%)"),
								lookbehind: !0
							},
							modifier: {
								pattern: e("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>+"),
								lookbehind: !0,
								inside: i
							},
							punctuation: /[*_%?@+\-^~]+/
						}
					},
					"link-ref": {
						pattern: /^\[[^\]]+\]\S+$/m,
						inside: {
							string: {
								pattern: /(\[)[^\]]+(?=\])/,
								lookbehind: !0
							},
							url: {
								pattern: /(\])\S+$/,
								lookbehind: !0
							},
							punctuation: /[\[\]]/
						}
					},
					link: {
						pattern: e('"<MOD>*[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),
						inside: {
							text: {
								pattern: e('(^"<MOD>*)[^"]+(?=")'),
								lookbehind: !0
							},
							modifier: {
								pattern: e('(^")<MOD>+'),
								lookbehind: !0,
								inside: i
							},
							url: {
								pattern: /(:).+/,
								lookbehind: !0
							},
							punctuation: /[":]/
						}
					},
					image: {
						pattern: e("!(?:<MOD>|<PAR>|[<>=])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),
						inside: {
							source: {
								pattern: e("(^!(?:<MOD>|<PAR>|[<>=])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),
								lookbehind: !0,
								alias: "url"
							},
							modifier: {
								pattern: e("(^!)(?:<MOD>|<PAR>|[<>=])+"),
								lookbehind: !0,
								inside: i
							},
							url: {
								pattern: /(:).+/,
								lookbehind: !0
							},
							punctuation: /[!:]/
						}
					},
					footnote: {
						pattern: /\b\[\d+\]/,
						alias: "comment",
						inside: {
							punctuation: /\[|\]/
						}
					},
					acronym: {
						pattern: /\b[A-Z\d]+\([^)]+\)/,
						inside: {
							comment: {
								pattern: /(\()[^)]+(?=\))/,
								lookbehind: !0
							},
							punctuation: /[()]/
						}
					},
					mark: {
						pattern: /\b\((?:TM|R|C)\)/,
						alias: "comment",
						inside: {
							punctuation: /[()]/
						}
					}
				}
			}
		}),
		a = t.phrase.inside,
		o = {
			inline: a.inline,
			link: a.link,
			image: a.image,
			footnote: a.footnote,
			acronym: a.acronym,
			mark: a.mark
		};
	t.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
	var r = a.inline.inside;
	r.bold.inside = o, r.italic.inside = o, r.inserted.inside = o, r.deleted.inside = o, r.span.inside = o;
	var d = a.table.inside;
	d.inline = o.inline, d.link = o.link, d.image = o.image, d.footnote = o.footnote, d.acronym = o.acronym, d.mark = o.mark
}(Prism);
! function (e) {
	function n(e) {
		return e.replace(/__/g, function () {
			return "(?:[\\w-]+|'[^'\n\r]*'|\"(?:\\\\.|[^\\\\\"\r\n])*\")"
		})
	}
	e.languages.toml = {
		comment: {
			pattern: /#.*/,
			greedy: !0
		},
		table: {
			pattern: RegExp(n("(^\\s*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])"), "m"),
			lookbehind: !0,
			greedy: !0,
			alias: "class-name"
		},
		key: {
			pattern: RegExp(n("(^\\s*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)"), "m"),
			lookbehind: !0,
			greedy: !0,
			alias: "property"
		},
		string: {
			pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
			greedy: !0
		},
		date: [{
			pattern: /\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?/i,
			alias: "number"
		}, {
			pattern: /\d{2}:\d{2}:\d{2}(?:\.\d+)?/i,
			alias: "number"
		}],
		number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?(?:inf|nan)\b/,
		boolean: /\b(?:true|false)\b/,
		punctuation: /[.,=[\]{}]/
	}
}(Prism);
Prism.languages.twig = {
	comment: /\{#[\s\S]*?#\}/,
	tag: {
		pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
		inside: {
			ld: {
				pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
				inside: {
					punctuation: /^(?:\{\{|\{%)-?/,
					keyword: /\w+/
				}
			},
			rd: {
				pattern: /-?(?:%\}|\}\})$/,
				inside: {
					punctuation: /.+/
				}
			},
			string: {
				pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
				inside: {
					punctuation: /^['"]|['"]$/
				}
			},
			keyword: /\b(?:even|if|odd)\b/,
			boolean: /\b(?:true|false|null)\b/,
			number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
			operator: [{
				pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
				lookbehind: !0
			}, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],
			property: /\b[a-zA-Z_]\w*\b/,
			punctuation: /[()\[\]{}:.,]/
		}
	},
	other: {
		pattern: /\S(?:[\s\S]*\S)?/,
		inside: Prism.languages.markup
	}
};
Prism.languages.vim = {
	string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
	comment: /".*/,
	function: /\w+(?=\()/,
	keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
	builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
	number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
	operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
	punctuation: /[{}[\](),;:]/
};
Prism.languages["visual-basic"] = {
	comment: {
		pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,
		inside: {
			keyword: /^REM/i
		}
	},
	directive: {
		pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
		alias: "comment",
		greedy: !0
	},
	string: {
		pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,
		greedy: !0
	},
	date: {
		pattern: /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))[^\S\r\n]*#/i,
		alias: "builtin"
	},
	number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
	boolean: /\b(?:True|False|Nothing)\b/i,
	keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
	operator: [/[+\-*/\\^<=>&#@$%!]/, {
		pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/,
		lookbehind: !0
	}],
	punctuation: /[{}().,:?]/
}, Prism.languages.vb = Prism.languages["visual-basic"];
Prism.languages.wasm = {
	comment: [/\(;[\s\S]*?;\)/, {
		pattern: /;;.*/,
		greedy: !0
	}],
	string: {
		pattern: /"(?:\\[\s\S]|[^"\\])*"/,
		greedy: !0
	},
	keyword: [{
		pattern: /\b(?:align|offset)=/,
		inside: {
			operator: /=/
		}
	}, {
		pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
		inside: {
			punctuation: /\./
		}
	}, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
	variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
	number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
	punctuation: /[()]/
};
! function (n) {
	var t = /[*&][^\s[\]{},]+/,
		e = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
		r = "(?:" + e.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + e.source + ")?)";

	function a(n, t) {
		t = (t || "").replace(/m/g, "") + "m";
		var e = "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\\s*#))".replace(/<<prop>>/g, function () {
			return r
		}).replace(/<<value>>/g, function () {
			return n
		});
		return RegExp(e, t)
	}
	n.languages.yaml = {
		scalar: {
			pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g, function () {
				return r
			})),
			lookbehind: !0,
			alias: "string"
		},
		comment: /#.*/,
		key: {
			pattern: RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)[^\r\n{[\\]},#\\s]+?(?=\\s*:\\s)".replace(/<<prop>>/g, function () {
				return r
			})),
			lookbehind: !0,
			alias: "atrule"
		},
		directive: {
			pattern: /(^[ \t]*)%.+/m,
			lookbehind: !0,
			alias: "important"
		},
		datetime: {
			pattern: a("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?)?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),
			lookbehind: !0,
			alias: "number"
		},
		boolean: {
			pattern: a("true|false", "i"),
			lookbehind: !0,
			alias: "important"
		},
		null: {
			pattern: a("null|~", "i"),
			lookbehind: !0,
			alias: "important"
		},
		string: {
			pattern: a("(\"|')(?:(?!\\2)[^\\\\\r\n]|\\\\.)*\\2"),
			lookbehind: !0,
			greedy: !0
		},
		number: {
			pattern: a("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+\\.?\\d*|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"),
			lookbehind: !0
		},
		tag: e,
		important: t,
		punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
	}, n.languages.yml = n.languages.yaml
}(Prism);
! function () {
	if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
		var t, s = function () {
				if (void 0 === t) {
					var e = document.createElement("div");
					e.style.fontSize = "13px", e.style.lineHeight = "1.5", e.style.padding = "0", e.style.border = "0", e.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e), t = 38 === e.offsetHeight, document.body.removeChild(e)
				}
				return t
			},
			l = !0,
			a = 0;
		Prism.hooks.add("before-sanity-check", function (e) {
			var t = e.element.parentNode,
				n = t && t.getAttribute("data-line");
			if (t && n && /pre/i.test(t.nodeName)) {
				var i = 0;
				g(".line-highlight", t).forEach(function (e) {
					i += e.textContent.length, e.parentNode.removeChild(e)
				}), i && /^( \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i))
			}
		}), Prism.hooks.add("complete", function e(t) {
			var n = t.element.parentNode,
				i = n && n.getAttribute("data-line");
			if (n && i && /pre/i.test(n.nodeName)) {
				clearTimeout(a);
				var r = Prism.plugins.lineNumbers,
					o = t.plugins && t.plugins.lineNumbers;
				if (b(n, "line-numbers") && r && !o) Prism.hooks.add("line-numbers", e);
				else u(n, i)(), a = setTimeout(c, 1)
			}
		}), window.addEventListener("hashchange", c), window.addEventListener("resize", function () {
			g("pre[data-line]").map(function (e) {
				return u(e)
			}).forEach(v)
		})
	}

	function g(e, t) {
		return Array.prototype.slice.call((t || document).querySelectorAll(e))
	}

	function b(e, t) {
		return t = " " + t + " ", -1 < (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t)
	}

	function v(e) {
		e()
	}

	function u(u, e, c) {
		var t = (e = "string" == typeof e ? e : u.getAttribute("data-line")).replace(/\s+/g, "").split(",").filter(Boolean),
			d = +u.getAttribute("data-line-offset") || 0,
			f = (s() ? parseInt : parseFloat)(getComputedStyle(u.querySelector('code')).lineHeight),
			m = b(u, "line-numbers"),
			p = m ? u : u.querySelector("code") || u,
			h = [];
		t.forEach(function (e) {
			var t = e.split("-"),
				n = +t[0],
				i = +t[1] || n,
				r = u.querySelector('.line-highlight[data-range="' + e + '"]') || document.createElement("div");
			if (h.push(function () {
					r.setAttribute("aria-hidden", "true"), r.setAttribute("data-range", e), r.className = (c || "") + " line-highlight"
				}), m && Prism.plugins.lineNumbers) {
				var o = Prism.plugins.lineNumbers.getLine(u, n),
					a = Prism.plugins.lineNumbers.getLine(u, i);
				if (o) {
					var s = o.offsetTop + "px";
					h.push(function () {
						r.style.top = s
					})
				}
				if (a) {
					var l = a.offsetTop - o.offsetTop + a.offsetHeight + "px";
					h.push(function () {
						r.style.height = l
					})
				}
			} else h.push(function () {
				r.setAttribute("data-start", n), n < i && r.setAttribute("data-end", i), r.style.top = (n - d - 1) * f + "px", r.textContent = new Array(i - n + 2).join(" \n")
			});
			h.push(function () {
				p.appendChild(r)
			})
		});
		var i = u.id;
		if (m && i) {
			for (var n = "linkable-line-numbers", r = !1, o = u; o;) {
				if (b(o, n)) {
					r = !0;
					break
				}
				o = o.parentElement
			}
			if (r) {
				b(u, n) || h.push(function () {
					u.className = (u.className + " " + n).trim()
				});
				var a = parseInt(u.getAttribute("data-start") || "1");
				g(".line-numbers-rows > span", u).forEach(function (e, t) {
					var n = t + a;
					e.onclick = function () {
						var e = i + "." + n;
						l = !1, location.hash = e, setTimeout(function () {
							l = !0
						}, 1)
					}
				})
			}
		}
		return function () {
			h.forEach(v)
		}
	}

	function c() {
		var e = location.hash.slice(1);
		g(".temporary.line-highlight").forEach(function (e) {
			e.parentNode.removeChild(e)
		});
		var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
		if (t && !document.getElementById(e)) {
			var n = e.slice(0, e.lastIndexOf(".")),
				i = document.getElementById(n);
			if (i) i.hasAttribute("data-line") || i.setAttribute("data-line", ""), u(i, t, "temporary ")(), l && document.querySelector(".temporary.line-highlight").scrollIntoView()
		}
	}
}();
! function () {
	if ("undefined" != typeof self && self.Prism && self.document) {
		var l = "line-numbers",
			c = /\n(?!$)/g,
			m = function (e) {
				var t = a(e)["white-space"];
				if ("pre-wrap" === t || "pre-line" === t) {
					var n = e.querySelector("code"),
						r = e.querySelector(".line-numbers-rows");
					if (!n || !r) return;
					var s = e.querySelector(".line-numbers-sizer"),
						i = n.textContent.split(c);
					s || ((s = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(s)), s.style.display = "block", i.forEach(function (e, t) {
						s.textContent = e || "\n";
						var n = s.getBoundingClientRect().height;
						r.children[t].style.height = n + "px"
					}), s.textContent = "", s.style.display = "none"
				}
			},
			a = function (e) {
				return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
			};
		window.addEventListener("resize", function () {
			Array.prototype.forEach.call(document.querySelectorAll("pre." + l), m)
		}), Prism.hooks.add("complete", function (e) {
			if (e.code) {
				var t = e.element,
					n = t.parentNode;
				if (n && /pre/i.test(n.nodeName) && !t.querySelector(".line-numbers-rows")) {
					for (var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t; i; i = i.parentNode)
						if (s.test(i.className)) {
							r = !0;
							break
						} if (r) {
						t.className = t.className.replace(s, " "), s.test(n.className) || (n.className += " line-numbers");
						var l, a = e.code.match(c),
							o = a ? a.length + 1 : 1,
							u = new Array(o + 1).join("<span></span>");
						(l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, n.hasAttribute("data-start") && (n.style.counterReset = "linenumber " + (parseInt(n.getAttribute("data-start"), 10) - 1)), e.element.appendChild(l), m(n), Prism.hooks.run("line-numbers", e)
					}
				}
			}
		}), Prism.hooks.add("line-numbers", function (e) {
			e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
		}), Prism.plugins.lineNumbers = {
			getLine: function (e, t) {
				if ("PRE" === e.tagName && e.classList.contains(l)) {
					var n = e.querySelector(".line-numbers-rows"),
						r = parseInt(e.getAttribute("data-start"), 10) || 1,
						s = r + (n.children.length - 1);
					t < r && (t = r), s < t && (t = s);
					var i = t - r;
					return n.children[i]
				}
			},
			resize: function (e) {
				m(e)
			}
		}
	}
}();
! function () {
	if (self.Prism && self.document && document.querySelectorAll && [].filter) {
		var d = [];
		t(function (t, e) {
			if (t && t.meta && t.data) {
				if (t.meta.status && 400 <= t.meta.status) return "Error: " + (t.data.message || t.meta.status);
				if ("string" == typeof t.data.content) return "function" == typeof atob ? atob(t.data.content.replace(/\s/g, "")) : "Your browser cannot decode base64"
			}
			return null
		}, "github"), t(function (t, e) {
			if (t && t.meta && t.data && t.data.files) {
				if (t.meta.status && 400 <= t.meta.status) return "Error: " + (t.data.message || t.meta.status);
				var n = t.data.files,
					a = e.getAttribute("data-filename");
				if (null == a)
					for (var r in n)
						if (n.hasOwnProperty(r)) {
							a = r;
							break
						} return void 0 !== n[a] ? n[a].content : "Error: unknown or missing gist file " + a
			}
			return null
		}, "gist"), t(function (t, e) {
			return t && t.node && "string" == typeof t.data ? t.data : null
		}, "bitbucket");
		var s = 0,
			l = "Loading…";
		Prism.plugins.jsonphighlight = {
			registerAdapter: t,
			removeAdapter: function (t) {
				if ("string" == typeof t && (t = n(t)), "function" == typeof t) {
					var e = d.map(function (t) {
						return t.adapter
					}).indexOf(t);
					0 <= e && d.splice(e, 1)
				}
			},
			highlight: e
		}, e()
	}

	function t(t, e) {
		e = e || t.name, "function" != typeof t || n(t) || n(e) || d.push({
			adapter: t,
			name: e
		})
	}

	function n(t) {
		if ("function" == typeof t) {
			for (var e = 0; n = d[e++];)
				if (n.adapter.valueOf() === t.valueOf()) return n.adapter
		} else if ("string" == typeof t) {
			var n;
			for (e = 0; n = d[e++];)
				if (n.name === t) return n.adapter
		}
		return null
	}

	function e() {
		Array.prototype.slice.call(document.querySelectorAll("pre[data-jsonp]")).forEach(function (a) {
			a.textContent = "";
			var r = document.createElement("code");
			r.textContent = l, a.appendChild(r);
			var t = a.getAttribute("data-adapter"),
				o = null;
			if (t) {
				if ("function" != typeof window[t]) return void(r.textContent = "JSONP adapter function '" + t + "' doesn't exist");
				o = window[t]
			}
			var i = "prismjsonp" + s++,
				e = document.createElement("a"),
				n = e.href = a.getAttribute("data-jsonp");
			e.href += (e.search ? "&" : "?") + (a.getAttribute("data-callback") || "callback") + "=" + i;
			var u = setTimeout(function () {
					r.textContent === l && (r.textContent = "Timeout loading '" + n + "'")
				}, 5e3),
				f = document.createElement("script");
			f.src = e.href, window[i] = function (t) {
				document.head.removeChild(f), clearTimeout(u), delete window[i];
				var e = "";
				if (o) e = o(t, a);
				else
					for (var n in d)
						if (null !== (e = d[n].adapter(t, a))) break;
				null === e ? r.textContent = "Cannot parse response (perhaps you need an adapter function?)" : (r.textContent = e, Prism.highlightElement(r))
			}, document.head.appendChild(f)
		})
	}
}();
! function () {
	if ("undefined" != typeof self && self.Prism && self.document) {
		var f = /(?:^|\s)command-line(?:\s|$)/;
		Prism.hooks.add("before-highlight", function (e) {
			var t = e.vars = e.vars || {},
				a = t["command-line"] = t["command-line"] || {};
			if (!a.complete && e.code) {
				var n = e.element.parentNode;
				if (n && /pre/i.test(n.nodeName) && (f.test(n.className) || f.test(e.element.className))) {
					var r = e.element.querySelector(".command-line-prompt");
					r && r.remove();
					var s = e.code.split("\n");
					a.numberOfLines = s.length;
					var o = a.outputLines = [],
						i = n.getAttribute("data-output"),
						l = n.getAttribute("data-filter-output");
					if (i || "" === i) {
						i = i.split(",");
						for (var m = 0; m < i.length; m++) {
							var d = i[m].split("-"),
								p = parseInt(d[0], 10),
								c = 2 === d.length ? parseInt(d[1], 10) : p;
							if (!isNaN(p) && !isNaN(c)) {
								p < 1 && (p = 1), c > s.length && (c = s.length), c--;
								for (var u = --p; u <= c; u++) o[u] = s[u], s[u] = ""
							}
						}
					} else if (l)
						for (m = 0; m < s.length; m++) 0 === s[m].indexOf(l) && (o[m] = s[m].slice(l.length), s[m] = "");
					e.code = s.join("\n")
				} else a.complete = !0
			} else a.complete = !0
		}), Prism.hooks.add("before-insert", function (e) {
			var t = e.vars = e.vars || {},
				a = t["command-line"] = t["command-line"] || {};
			if (!a.complete) {
				for (var n = e.highlightedCode.split("\n"), r = 0, s = (a.outputLines || []).length; r < s; r++) a.outputLines.hasOwnProperty(r) && (n[r] = a.outputLines[r]);
				e.highlightedCode = n.join("\n")
			}
		}), Prism.hooks.add("complete", function (e) {
			var t = e.vars = e.vars || {},
				a = t["command-line"] = t["command-line"] || {};
			if (!a.complete) {
				var n = e.element.parentNode;
				f.test(e.element.className) && (e.element.className = e.element.className.replace(f, " ")), f.test(n.className) || (n.className += " command-line");
				var r = function (e, t) {
						return (n.getAttribute(e) || t).replace(/"/g, "&quot")
					},
					s = new Array((a.numberOfLines || 0) + 1),
					o = r("data-prompt", "");
				if ("" !== o) s = s.join('<span data-prompt="' + o + '"></span>');
				else {
					var i = r("data-user", "user"),
						l = r("data-host", "localhost");
					s = s.join('<span data-user="' + i + '" data-host="' + l + '"></span>')
				}
				var m = document.createElement("span");
				m.className = "command-line-prompt", m.innerHTML = s;
				for (var d = 0, p = (a.outputLines || []).length; d < p; d++)
					if (a.outputLines.hasOwnProperty(d)) {
						var c = m.children[d];
						c.removeAttribute("data-user"), c.removeAttribute("data-host"), c.removeAttribute("data-prompt")
					} e.element.insertBefore(m, e.element.firstChild), a.complete = !0
			}
		})
	}
}();
! function () {
	if ("undefined" != typeof self && self.Prism && self.document) {
		var i = [],
			l = {},
			c = function () {};
		Prism.plugins.toolbar = {};
		var e = Prism.plugins.toolbar.registerButton = function (e, n) {
				var t;
				t = "function" == typeof n ? n : function (e) {
					var t;
					return "function" == typeof n.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function () {
						n.onClick.call(this, e)
					})) : "string" == typeof n.url ? (t = document.createElement("a")).href = n.url : t = document.createElement("span"), n.className && t.classList.add(n.className), t.textContent = n.text, t
				}, e in l ? console.warn('There is a button with the key "' + e + '" registered already.') : i.push(l[e] = t)
			},
			t = Prism.plugins.toolbar.hook = function (a) {
				var e = a.element.parentNode;
				if (e && /pre/i.test(e.nodeName) && !e.parentNode.classList.contains("code-toolbar")) {
					var t = document.createElement("div");
					t.classList.add("code-toolbar"), e.parentNode.insertBefore(t, e), t.appendChild(e);
					var r = document.createElement("div");
					r.classList.add("toolbar");
					var n = i,
						o = function (e) {
							for (; e;) {
								var t = e.getAttribute("data-toolbar-order");
								if (null != t) return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
								e = e.parentElement
							}
						}(a.element);
					o && (n = o.map(function (e) {
						return l[e] || c
					})), n.forEach(function (e) {
						var t = e(a);
						if (t) {
							var n = document.createElement("div");
							n.classList.add("toolbar-item"), n.appendChild(t), r.appendChild(n)
						}
					}), t.appendChild(r)
				}
			};
		e("label", function (e) {
			var t = e.element.parentNode;
			if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
				var n, a, r = t.getAttribute("data-label");
				try {
					a = document.querySelector("template#" + r)
				} catch (e) {}
				return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n
			}
		}), Prism.hooks.add("complete", t)
	}
}();
! function () {
	if ("undefined" != typeof self && self.Prism && self.document)
		if (Prism.plugins.toolbar) {
			var r = window.ClipboardJS || void 0;
			r || "function" != typeof require || (r = require("clipboard"));
			var i = [];
			if (!r) {
				var o = document.createElement("script"),
					e = document.querySelector("head");
				o.onload = function () {
					if (r = window.ClipboardJS)
						for (; i.length;) i.pop()()
				}, o.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", e.appendChild(o)
			}
			Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (e) {
				var t = document.createElement("button");
				return t.textContent = "Copy", r ? o() : i.push(o), t;

				function o() {
					var o = new r(t, {
						text: function () {
							return e.code
						}
					});
					o.on("success", function () {
						t.textContent = "Copied!", n()
					}), o.on("error", function () {
						t.textContent = "Press Ctrl+C to copy", n()
					})
				}

				function n() {
					setTimeout(function () {
						t.textContent = "Copy"
					}, 5e3)
				}
			})
		} else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
}();
! function () {
	if ("undefined" != typeof Prism && Prism.languages.diff) {
		var o = /diff-([\w-]+)/i,
			m = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/gi,
			c = RegExp("(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))".replace(/__/g, function () {
				return m.source
			}), "gi"),
			d = Prism.languages.diff.PREFIXES;
		Prism.hooks.add("before-sanity-check", function (e) {
			var a = e.language;
			o.test(a) && !e.grammar && (e.grammar = Prism.languages[a] = Prism.languages.diff)
		}), Prism.hooks.add("before-tokenize", function (e) {
			var a = e.language;
			o.test(a) && !Prism.languages[a] && (Prism.languages[a] = Prism.languages.diff)
		}), Prism.hooks.add("wrap", function (e) {
			var a, s;
			if ("diff" !== e.language) {
				var n = o.exec(e.language);
				if (!n) return;
				a = n[1], s = Prism.languages[a]
			}
			if (e.type in d) {
				var r, i = e.content.replace(m, "").replace(/&lt;/g, "<").replace(/&amp;/g, "&"),
					g = i.replace(/(^|[\r\n])./g, "$1");
				r = s ? Prism.highlight(g, s, a) : Prism.util.encode(g);
				var f, t = new Prism.Token("prefix", d[e.type], [/\w+/.exec(e.type)[0]]),
					u = Prism.Token.stringify(t, e.language),
					l = [];
				for (c.lastIndex = 0; f = c.exec(r);) l.push(u + f[0]);
				/(?:^|[\r\n]).$/.test(i) && l.push(u), e.content = l.join(""), s && e.classes.push("language-" + a)
			}
		})
	}
}();
/* This will force highlight on script load.
   Since this script is async, there are chances
   that prism will not style our code (atleast on
   first load, after which this script may be
   loaded from cache and possibly work correctly)
 */
Prism.highlightAll()