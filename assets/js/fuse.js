/*!
 * Fuse.js v5.2.3 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2020 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var t, e;
t = this, e = function () {
	"use strict";

	function t(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function e(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
		}
	}

	function n(t, n, r) {
		return n && e(t.prototype, n), r && e(t, r), t
	}

	function r(t, e, n) {
		return e in t ? Object.defineProperty(t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	function i(t, e) {
		var n = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(t);
			e && (r = r.filter((function (e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable
			}))), n.push.apply(n, r)
		}
		return n
	}

	function o(t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = null != arguments[e] ? arguments[e] : {};
			e % 2 ? i(Object(n), !0).forEach((function (e) {
				r(t, e, n[e])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
				Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
			}))
		}
		return t
	}

	function a(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				writable: !0,
				configurable: !0
			}
		}), e && c(t, e)
	}

	function s(t) {
		return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function c(t, e) {
		return (c = Object.setPrototypeOf || function (t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function h() {
		if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
		if (Reflect.construct.sham) return !1;
		if ("function" == typeof Proxy) return !0;
		try {
			return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
		} catch (t) {
			return !1
		}
	}

	function u(t, e) {
		return !e || "object" != typeof e && "function" != typeof e ? function (t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t) : e
	}

	function l(t) {
		return function () {
			var e, n = s(t);
			if (h()) {
				var r = s(this).constructor;
				e = Reflect.construct(n, arguments, r)
			} else e = n.apply(this, arguments);
			return u(this, e)
		}
	}

	function f(t) {
		return function (t) {
			if (Array.isArray(t)) return v(t)
		}(t) || function (t) {
			if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
		}(t) || function (t, e) {
			if (t) {
				if ("string" == typeof t) return v(t, e);
				var n = Object.prototype.toString.call(t).slice(8, -1);
				return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0
			}
		}(t) || function () {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}()
	}

	function v(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
		return r
	}
	var d = function (t) {
			return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
		},
		g = function (t) {
			return "string" == typeof t
		},
		y = function (t) {
			return "number" == typeof t
		},
		p = function (t) {
			return null != t
		},
		m = function (t) {
			return !t.trim().length
		},
		k = o({}, {
			isCaseSensitive: !1,
			includeScore: !1,
			keys: [],
			shouldSort: !0,
			sortFn: function (t, e) {
				return t.score === e.score ? t.idx < e.idx ? -1 : 1 : t.score < e.score ? -1 : 1
			}
		}, {}, {
			includeMatches: !1,
			findAllMatches: !1,
			minMatchCharLength: 1
		}, {}, {
			location: 0,
			threshold: .6,
			distance: 100
		}, {}, {
			useExtendedSearch: !1,
			getFn: function (t, e) {
				var n = [],
					r = !1;
				return function t(e, i) {
					if (i) {
						var o = i.indexOf("."),
							a = i,
							s = null; - 1 !== o && (a = i.slice(0, o), s = i.slice(o + 1));
						var c = e[a];
						if (p(c))
							if (s || !g(c) && !y(c))
								if (d(c)) {
									r = !0;
									for (var h = 0, u = c.length; h < u; h += 1) t(c[h], s)
								} else s && t(c, s);
						else n.push(function (t) {
							return null == t ? "" : function (t) {
								if ("string" == typeof t) return t;
								var e = t + "";
								return "0" == e && 1 / t == -1 / 0 ? "-0" : e
							}(t)
						}(c))
					} else n.push(e)
				}(t, e), r ? n : n[0]
			}
		});

	function M(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = e.errors,
			r = void 0 === n ? 0 : n,
			i = e.currentLocation,
			o = void 0 === i ? 0 : i,
			a = e.expectedLocation,
			s = void 0 === a ? 0 : a,
			c = e.distance,
			h = void 0 === c ? k.distance : c,
			u = r / t.length,
			l = Math.abs(s - o);
		return h ? u + l / h : l ? 1 : u
	}

	function x() {
		for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k.minMatchCharLength, n = [], r = -1, i = -1, o = 0, a = t.length; o < a; o += 1) {
			var s = t[o];
			s && -1 === r ? r = o : s || -1 === r || ((i = o - 1) - r + 1 >= e && n.push([r, i]), r = -1)
		}
		return t[o - 1] && o - r >= e && n.push([r, o - 1]), n
	}

	function b(t, e, n) {
		var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
			i = r.location,
			o = void 0 === i ? k.location : i,
			a = r.distance,
			s = void 0 === a ? k.distance : a,
			c = r.threshold,
			h = void 0 === c ? k.threshold : c,
			u = r.findAllMatches,
			l = void 0 === u ? k.findAllMatches : u,
			f = r.minMatchCharLength,
			v = void 0 === f ? k.minMatchCharLength : f,
			d = r.includeMatches,
			g = void 0 === d ? k.includeMatches : d;
		if (e.length > 32) throw new Error("Pattern length exceeds max of ".concat(32, "."));
		var y, p = e.length,
			m = t.length,
			b = Math.max(0, Math.min(o, m)),
			w = h,
			S = b,
			_ = [];
		if (g)
			for (var O = 0; O < m; O += 1) _[O] = 0;
		for (;
			(y = t.indexOf(e, S)) > -1;) {
			var I = M(e, {
				currentLocation: y,
				expectedLocation: b,
				distance: s
			});
			if (w = Math.min(I, w), S = y + p, g)
				for (var C = 0; C < p;) _[y + C] = 1, C += 1
		}
		S = -1;
		for (var A = [], L = 1, $ = p + m, j = 1 << (p <= 31 ? p - 1 : 30), R = 0; R < p; R += 1) {
			for (var P = 0, E = $; P < E;) {
				var N = M(e, {
					errors: R,
					currentLocation: b + E,
					expectedLocation: b,
					distance: s
				});
				N <= w ? P = E : $ = E, E = Math.floor(($ - P) / 2 + P)
			}
			$ = E;
			var F = Math.max(1, b - E + 1),
				D = l ? m : Math.min(b + E, m) + p,
				q = Array(D + 2);
			q[D + 1] = (1 << R) - 1;
			for (var W = D; W >= F; W -= 1) {
				var T = W - 1,
					U = n[t.charAt(T)];
				if (U && g && (_[T] = 1), q[W] = (q[W + 1] << 1 | 1) & U, 0 !== R && (q[W] |= (A[W + 1] | A[W]) << 1 | 1 | A[W + 1]), q[W] & j && (L = M(e, {
						errors: R,
						currentLocation: T,
						expectedLocation: b,
						distance: s
					})) <= w) {
					if (w = L, (S = T) <= b) break;
					F = Math.max(1, 2 * b - S)
				}
			}
			var z = M(e, {
				errors: R + 1,
				currentLocation: b,
				expectedLocation: b,
				distance: s
			});
			if (z > w) break;
			A = q
		}
		var J = {
			isMatch: S >= 0,
			score: L || .001
		};
		return g && (J.matchedIndices = x(_, v)), J
	}

	function w(t) {
		for (var e = {}, n = t.length, r = 0; r < n; r += 1) e[t.charAt(r)] = 0;
		for (var i = 0; i < n; i += 1) e[t.charAt(i)] |= 1 << n - i - 1;
		return e
	}
	var S = function () {
			function e(n) {
				var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					i = r.location,
					o = void 0 === i ? k.location : i,
					a = r.threshold,
					s = void 0 === a ? k.threshold : a,
					c = r.distance,
					h = void 0 === c ? k.distance : c,
					u = r.includeMatches,
					l = void 0 === u ? k.includeMatches : u,
					f = r.findAllMatches,
					v = void 0 === f ? k.findAllMatches : f,
					d = r.minMatchCharLength,
					g = void 0 === d ? k.minMatchCharLength : d,
					y = r.isCaseSensitive,
					p = void 0 === y ? k.isCaseSensitive : y;
				t(this, e), this.options = {
					location: o,
					threshold: s,
					distance: h,
					includeMatches: l,
					findAllMatches: v,
					minMatchCharLength: g,
					isCaseSensitive: p
				}, this.pattern = p ? n : n.toLowerCase(), this.chunks = [];
				for (var m = 0; m < this.pattern.length;) {
					var M = this.pattern.substring(m, m + 32);
					this.chunks.push({
						pattern: M,
						alphabet: w(M)
					}), m += 32
				}
			}
			return n(e, [{
				key: "searchIn",
				value: function (t) {
					var e = t.$;
					return this.searchInString(e)
				}
			}, {
				key: "searchInString",
				value: function (t) {
					var e = this.options,
						n = e.isCaseSensitive,
						r = e.includeMatches;
					if (n || (t = t.toLowerCase()), this.pattern === t) {
						var i = {
							isMatch: !0,
							score: 0
						};
						return r && (i.matchedIndices = [
							[0, t.length - 1]
						]), i
					}
					for (var o = this.options, a = o.location, s = o.distance, c = o.threshold, h = o.findAllMatches, u = o.minMatchCharLength, l = [], v = 0, d = !1, g = 0, y = this.chunks.length; g < y; g += 1) {
						var p = this.chunks[g],
							m = b(t, p.pattern, p.alphabet, {
								location: a + 32 * g,
								distance: s,
								threshold: c,
								findAllMatches: h,
								minMatchCharLength: u,
								includeMatches: r
							}),
							k = m.isMatch,
							M = m.score,
							x = m.matchedIndices;
						k && (d = !0), v += M, k && x && (l = [].concat(f(l), f(x)))
					}
					var w = {
						isMatch: d,
						score: d ? v / this.chunks.length : 1
					};
					return d && r && (w.matchedIndices = l), w
				}
			}]), e
		}(),
		_ = function () {
			function e(n) {
				t(this, e), this.pattern = n
			}
			return n(e, [{
				key: "search",
				value: function () {}
			}], [{
				key: "isMultiMatch",
				value: function (t) {
					return O(t, this.multiRegex)
				}
			}, {
				key: "isSingleMatch",
				value: function (t) {
					return O(t, this.singleRegex)
				}
			}]), e
		}();

	function O(t, e) {
		var n = t.match(e);
		return n ? n[1] : null
	}
	var I = function (e) {
			a(i, e);
			var r = l(i);

			function i(e) {
				return t(this, i), r.call(this, e)
			}
			return n(i, [{
				key: "search",
				value: function (t) {
					for (var e, n = 0, r = [], i = this.pattern.length;
						(e = t.indexOf(this.pattern, n)) > -1;) n = e + i, r.push([e, n - 1]);
					var o = !!r.length;
					return {
						isMatch: o,
						score: o ? 1 : 0,
						matchedIndices: r
					}
				}
			}], [{
				key: "type",
				get: function () {
					return "exact"
				}
			}, {
				key: "multiRegex",
				get: function () {
					return /^'"(.*)"$/
				}
			}, {
				key: "singleRegex",
				get: function () {
					return /^'(.*)$/
				}
			}]), i
		}(_),
		C = function (e) {
			a(i, e);
			var r = l(i);

			function i(e) {
				return t(this, i), r.call(this, e)
			}
			return n(i, [{
				key: "search",
				value: function (t) {
					var e = -1 === t.indexOf(this.pattern);
					return {
						isMatch: e,
						score: e ? 0 : 1,
						matchedIndices: [0, t.length - 1]
					}
				}
			}], [{
				key: "type",
				get: function () {
					return "inverse-exact"
				}
			}, {
				key: "multiRegex",
				get: function () {
					return /^!"(.*)"$/
				}
			}, {
				key: "singleRegex",
				get: function () {
					return /^!(.*)$/
				}
			}]), i
		}(_),
		A = function (e) {
			a(i, e);
			var r = l(i);

			function i(e) {
				return t(this, i), r.call(this, e)
			}
			return n(i, [{
				key: "search",
				value: function (t) {
					var e = t.startsWith(this.pattern);
					return {
						isMatch: e,
						score: e ? 0 : 1,
						matchedIndices: [0, this.pattern.length - 1]
					}
				}
			}], [{
				key: "type",
				get: function () {
					return "prefix-exact"
				}
			}, {
				key: "multiRegex",
				get: function () {
					return /^\^"(.*)"$/
				}
			}, {
				key: "singleRegex",
				get: function () {
					return /^\^(.*)$/
				}
			}]), i
		}(_),
		L = function (e) {
			a(i, e);
			var r = l(i);

			function i(e) {
				return t(this, i), r.call(this, e)
			}
			return n(i, [{
				key: "search",
				value: function (t) {
					var e = !t.startsWith(this.pattern);
					return {
						isMatch: e,
						score: e ? 0 : 1,
						matchedIndices: [0, t.length - 1]
					}
				}
			}], [{
				key: "type",
				get: function () {
					return "inverse-prefix-exact"
				}
			}, {
				key: "multiRegex",
				get: function () {
					return /^!\^"(.*)"$/
				}
			}, {
				key: "singleRegex",
				get: function () {
					return /^!\^(.*)$/
				}
			}]), i
		}(_),
		$ = function (e) {
			a(i, e);
			var r = l(i);

			function i(e) {
				return t(this, i), r.call(this, e)
			}
			return n(i, [{
				key: "search",
				value: function (t) {
					var e = t.endsWith(this.pattern);
					return {
						isMatch: e,
						score: e ? 0 : 1,
						matchedIndices: [t.length - this.pattern.length, t.length - 1]
					}
				}
			}], [{
				key: "type",
				get: function () {
					return "suffix-exact"
				}
			}, {
				key: "multiRegex",
				get: function () {
					return /^"(.*)"\$$/
				}
			}, {
				key: "singleRegex",
				get: function () {
					return /^(.*)\$$/
				}
			}]), i
		}(_),
		j = function (e) {
			a(i, e);
			var r = l(i);

			function i(e) {
				return t(this, i), r.call(this, e)
			}
			return n(i, [{
				key: "search",
				value: function (t) {
					var e = !t.endsWith(this.pattern);
					return {
						isMatch: e,
						score: e ? 0 : 1,
						matchedIndices: [0, t.length - 1]
					}
				}
			}], [{
				key: "type",
				get: function () {
					return "inverse-suffix-exact"
				}
			}, {
				key: "multiRegex",
				get: function () {
					return /^!"(.*)"\$$/
				}
			}, {
				key: "singleRegex",
				get: function () {
					return /^!(.*)\$$/
				}
			}]), i
		}(_),
		R = function (e) {
			a(i, e);
			var r = l(i);

			function i(e) {
				var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					a = o.location,
					s = void 0 === a ? k.location : a,
					c = o.threshold,
					h = void 0 === c ? k.threshold : c,
					u = o.distance,
					l = void 0 === u ? k.distance : u,
					f = o.includeMatches,
					v = void 0 === f ? k.includeMatches : f,
					d = o.findAllMatches,
					g = void 0 === d ? k.findAllMatches : d,
					y = o.minMatchCharLength,
					p = void 0 === y ? k.minMatchCharLength : y,
					m = o.isCaseSensitive,
					M = void 0 === m ? k.isCaseSensitive : m;
				return t(this, i), (n = r.call(this, e))._bitapSearch = new S(e, {
					location: s,
					threshold: h,
					distance: l,
					includeMatches: v,
					findAllMatches: g,
					minMatchCharLength: p,
					isCaseSensitive: M
				}), n
			}
			return n(i, [{
				key: "search",
				value: function (t) {
					return this._bitapSearch.searchInString(t)
				}
			}], [{
				key: "type",
				get: function () {
					return "fuzzy"
				}
			}, {
				key: "multiRegex",
				get: function () {
					return /^"(.*)"$/
				}
			}, {
				key: "singleRegex",
				get: function () {
					return /^(.*)$/
				}
			}]), i
		}(_),
		P = [I, A, L, j, $, C, R],
		E = P.length,
		N = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;

	function F(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		return t.split("|").map((function (t) {
			for (var n = t.trim().split(N).filter((function (t) {
					return t && !!t.trim()
				})), r = [], i = 0, o = n.length; i < o; i += 1) {
				for (var a = n[i], s = !1, c = -1; !s && ++c < E;) {
					var h = P[c],
						u = h.isMultiMatch(a);
					u && (r.push(new h(u, e)), s = !0)
				}
				if (!s)
					for (c = -1; ++c < E;) {
						var l = P[c],
							f = l.isSingleMatch(a);
						if (f) {
							r.push(new l(f, e));
							break
						}
					}
			}
			return r
		}))
	}
	var D = new Set([R.type, I.type]),
		q = function () {
			function e(n) {
				var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					i = r.isCaseSensitive,
					o = void 0 === i ? k.isCaseSensitive : i,
					a = r.includeMatches,
					s = void 0 === a ? k.includeMatches : a,
					c = r.minMatchCharLength,
					h = void 0 === c ? k.minMatchCharLength : c,
					u = r.findAllMatches,
					l = void 0 === u ? k.findAllMatches : u,
					f = r.location,
					v = void 0 === f ? k.location : f,
					d = r.threshold,
					g = void 0 === d ? k.threshold : d,
					y = r.distance,
					p = void 0 === y ? k.distance : y;
				t(this, e), this.query = null, this.options = {
					isCaseSensitive: o,
					includeMatches: s,
					minMatchCharLength: h,
					findAllMatches: l,
					location: v,
					threshold: g,
					distance: p
				}, this.pattern = o ? n : n.toLowerCase(), this.query = F(this.pattern, this.options)
			}
			return n(e, [{
				key: "searchIn",
				value: function (t) {
					var e = this.query;
					if (!e) return {
						isMatch: !1,
						score: 1
					};
					var n = t.$,
						r = this.options,
						i = r.includeMatches;
					n = r.isCaseSensitive ? n : n.toLowerCase();
					for (var o = 0, a = [], s = 0, c = 0, h = e.length; c < h; c += 1) {
						var u = e[c];
						a.length = 0, o = 0;
						for (var l = 0, v = u.length; l < v; l += 1) {
							var d = u[l],
								g = d.search(n),
								y = g.isMatch,
								p = g.matchedIndices,
								m = g.score;
							if (!y) {
								s = 0, o = 0, a.length = 0;
								break
							}
							if (o += 1, s += m, i) {
								var k = d.constructor.type;
								D.has(k) ? a = [].concat(f(a), f(p)) : a.push(p)
							}
						}
						if (o) {
							var M = {
								isMatch: !0,
								score: s / o
							};
							return i && (M.matchedIndices = a), M
						}
					}
					return {
						isMatch: !1,
						score: 1
					}
				}
			}], [{
				key: "condition",
				value: function (t, e) {
					return e.useExtendedSearch
				}
			}]), e
		}(),
		W = /[^ ]+/g;

	function T(t, e) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
			r = n.getFn,
			i = void 0 === r ? k.getFn : r,
			o = [];
		if (g(e[0]))
			for (var a = 0, s = e.length; a < s; a += 1) {
				var c = e[a];
				if (p(c) && !m(c)) {
					var h = {
						$: c,
						idx: a,
						t: c.match(W).length
					};
					o.push(h)
				}
			} else
				for (var u = t.length, l = 0, f = e.length; l < f; l += 1) {
					for (var v = e[l], y = {
							idx: l,
							$: {}
						}, M = 0; M < u; M += 1) {
						var x = t[M],
							b = i(v, x);
						if (p(b))
							if (d(b)) {
								for (var w = [], S = [{
										arrayIndex: -1,
										value: b
									}]; S.length;) {
									var _ = S.pop(),
										O = _.arrayIndex,
										I = _.value;
									if (p(I))
										if (g(I) && !m(I)) {
											var C = {
												$: I,
												idx: O,
												t: I.match(W).length
											};
											w.push(C)
										} else if (d(I))
										for (var A = 0, L = I.length; A < L; A += 1) S.push({
											arrayIndex: A,
											value: I[A]
										})
								}
								y.$[x] = w
							} else if (!m(b)) {
							var $ = {
								$: b,
								t: b.match(W).length
							};
							y.$[x] = $
						}
					}
					o.push(y)
				}
		return o
	}
	var U = function () {
		function e(n) {
			if (t(this, e), this._keys = {}, this._keyNames = [], this._length = n.length, n.length && g(n[0]))
				for (var r = 0; r < this._length; r += 1) {
					var i = n[r];
					this._keys[i] = {
						weight: 1
					}, this._keyNames.push(i)
				} else {
					for (var o = 0, a = 0; a < this._length; a += 1) {
						var s = n[a];
						if (!Object.prototype.hasOwnProperty.call(s, "name")) throw new Error('Missing "name" property in key object');
						var c = s.name;
						if (this._keyNames.push(c), !Object.prototype.hasOwnProperty.call(s, "weight")) throw new Error('Missing "weight" property in key object');
						var h = s.weight;
						if (h <= 0 || h >= 1) throw new Error('"weight" property in key must be in the range of (0, 1)');
						this._keys[c] = {
							weight: h
						}, o += h
					}
					for (var u = 0; u < this._length; u += 1) {
						var l = this._keyNames[u],
							f = this._keys[l].weight;
						this._keys[l].weight = f / o
					}
				}
		}
		return n(e, [{
			key: "get",
			value: function (t, e) {
				return this._keys[t] ? this._keys[t][e] : -1
			}
		}, {
			key: "keys",
			value: function () {
				return this._keyNames
			}
		}, {
			key: "count",
			value: function () {
				return this._length
			}
		}, {
			key: "toJSON",
			value: function () {
				return JSON.stringify(this._keys)
			}
		}]), e
	}();

	function z(t, e) {
		var n = t.matches;
		if (e.matches = [], p(n))
			for (var r = 0, i = n.length; r < i; r += 1) {
				var o = n[r];
				if (p(o.indices) && 0 !== o.indices.length) {
					var a = {
						indices: o.indices,
						value: o.value
					};
					o.key && (a.key = o.key), o.idx > -1 && (a.refIndex = o.idx), e.matches.push(a)
				}
			}
	}

	function J(t, e) {
		e.score = t.score
	}
	var K = [],
		B = function () {
			function e(n) {
				var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
				t(this, e), this.options = o({}, k, {}, r), this._processKeys(this.options.keys), this.setCollection(n, i)
			}
			return n(e, [{
				key: "setCollection",
				value: function (t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
					this.list = t, this.listIsStringArray = g(t[0]), e ? this.setIndex(e) : this.setIndex(this._createIndex())
				}
			}, {
				key: "setIndex",
				value: function (t) {
					this._indexedList = t
				}
			}, {
				key: "_processKeys",
				value: function (t) {
					this._keyStore = new U(t)
				}
			}, {
				key: "_createIndex",
				value: function () {
					return T(this._keyStore.keys(), this.list, {
						getFn: this.options.getFn
					})
				}
			}, {
				key: "search",
				value: function (t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
						limit: !1
					};
					if (!(t = t.trim()).length) return [];
					for (var n = this.options.shouldSort, r = null, i = 0, o = K.length; i < o; i += 1) {
						var a = K[i];
						if (a.condition(t, this.options)) {
							r = new a(t, this.options);
							break
						}
					}
					r || (r = new S(t, this.options));
					var s = this._searchUsing(r);
					return this._computeScore(s), n && this._sort(s), e.limit && y(e.limit) && (s = s.slice(0, e.limit)), this._format(s)
				}
			}, {
				key: "_searchUsing",
				value: function (t) {
					var e = this._indexedList,
						n = [],
						r = this.options.includeMatches;
					if (this.listIsStringArray)
						for (var i = 0, o = e.length; i < o; i += 1) {
							var a = e[i],
								s = a.$,
								c = a.idx,
								h = a.t;
							if (p(s)) {
								var u = t.searchIn(a),
									l = u.isMatch,
									f = u.score;
								if (l) {
									var v = {
										score: f,
										value: s,
										t: h
									};
									r && (v.indices = u.matchedIndices), n.push({
										item: s,
										idx: c,
										matches: [v]
									})
								}
							}
						} else
							for (var g = this._keyStore.keys(), y = this._keyStore.count(), m = 0, k = e.length; m < k; m += 1) {
								var M = e[m],
									x = M.$,
									b = M.idx;
								if (p(x)) {
									for (var w = [], S = 0; S < y; S += 1) {
										var _ = g[S],
											O = x[_];
										if (p(O))
											if (d(O))
												for (var I = 0, C = O.length; I < C; I += 1) {
													var A = O[I],
														L = A.$,
														$ = A.idx,
														j = A.t;
													if (p(L)) {
														var R = t.searchIn(A),
															P = R.isMatch,
															E = R.score;
														if (P) {
															var N = {
																score: E,
																key: _,
																value: L,
																idx: $,
																t: j
															};
															r && (N.indices = R.matchedIndices), w.push(N)
														}
													}
												} else {
													var F = O.$,
														D = O.t,
														q = t.searchIn(O),
														W = q.isMatch,
														T = q.score;
													if (!W) continue;
													var U = {
														score: T,
														key: _,
														value: F,
														t: D
													};
													r && (U.indices = q.matchedIndices), w.push(U)
												}
									}
									w.length && n.push({
										idx: b,
										item: x,
										matches: w
									})
								}
							}
					return n
				}
			}, {
				key: "_computeScore",
				value: function (t) {
					for (var e = t.length, n = 0; n < e; n += 1) {
						for (var r = t[n], i = r.matches, o = i.length, a = 1, s = 0; s < o; s += 1) {
							var c = i[s],
								h = c.key,
								u = c.t,
								l = this._keyStore.get(h, "weight"),
								f = l > -1 ? l : 1,
								v = 0 === c.score && l > -1 ? Number.EPSILON : c.score,
								d = 1 / Math.sqrt(u);
							a *= Math.pow(v, f * d)
						}
						r.score = a
					}
				}
			}, {
				key: "_sort",
				value: function (t) {
					t.sort(this.options.sortFn)
				}
			}, {
				key: "_format",
				value: function (t) {
					var e = [],
						n = this.options,
						r = n.includeMatches,
						i = n.includeScore,
						o = [];
					r && o.push(z), i && o.push(J);
					for (var a = 0, s = t.length; a < s; a += 1) {
						var c = t[a],
							h = c.idx,
							u = {
								item: this.list[h],
								refIndex: h
							};
						if (o.length)
							for (var l = 0, f = o.length; l < f; l += 1) o[l](c, u);
						e.push(u)
					}
					return e
				}
			}]), e
		}();
	return function () {
		K.push.apply(K, arguments)
	}(q), B.version = "5.2.3", B.createIndex = T, B.config = k, B
}, "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Fuse = e();