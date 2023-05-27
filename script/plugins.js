/*! For license information please see plugins.js.LICENSE.txt */
(()=>{
    var e, t = {
        851: (e,t,n)=>{
            "use strict";
            var r = n(631)
              , i = n.n(r)
              , o = n(755)
              , a = n.n(o)
              , s = (n(795),
            n(379))
              , u = n.n(s)
              , l = n(188)
              , c = {
                insert: "head",
                singleton: !1
            };
            u()(l.Z, c);
            l.Z.locals;
            var f = window
              , d = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.msRequestAnimationFrame || function(e) {
                return setTimeout(e, 16)
            }
              , p = window
              , h = p.cancelAnimationFrame || p.mozCancelAnimationFrame || function(e) {
                clearTimeout(e)
            }
            ;
            function m() {
                for (var e, t, n, r = arguments[0] || {}, i = 1, o = arguments.length; i < o; i++)
                    if (null !== (e = arguments[i]))
                        for (t in e)
                            r !== (n = e[t]) && void 0 !== n && (r[t] = n);
                return r
            }
            function v(e) {
                return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e
            }
            function g(e, t, n, r) {
                if (r)
                    try {
                        e.setItem(t, n)
                    } catch (e) {}
                return n
            }
            function y() {
                var e = document
                  , t = e.body;
                return t || ((t = e.createElement("body")).fake = !0),
                t
            }
            var b = document.documentElement;
            function x(e) {
                var t = "";
                return e.fake && (t = b.style.overflow,
                e.style.background = "",
                e.style.overflow = b.style.overflow = "hidden",
                b.appendChild(e)),
                t
            }
            function w(e, t) {
                e.fake && (e.remove(),
                b.style.overflow = t,
                b.offsetHeight)
            }
            function T(e, t, n, r) {
                "insertRule"in e ? e.insertRule(t + "{" + n + "}", r) : e.addRule(t, n, r)
            }
            function C(e) {
                return ("insertRule"in e ? e.cssRules : e.rules).length
            }
            function E(e, t, n) {
                for (var r = 0, i = e.length; r < i; r++)
                    t.call(n, e[r], r)
            }
            var A = "classList"in document.createElement("_")
              , S = A ? function(e, t) {
                return e.classList.contains(t)
            }
            : function(e, t) {
                return e.className.indexOf(t) >= 0
            }
              , N = A ? function(e, t) {
                S(e, t) || e.classList.add(t)
            }
            : function(e, t) {
                S(e, t) || (e.className += " " + t)
            }
              , k = A ? function(e, t) {
                S(e, t) && e.classList.remove(t)
            }
            : function(e, t) {
                S(e, t) && (e.className = e.className.replace(t, ""))
            }
            ;
            function D(e, t) {
                return e.hasAttribute(t)
            }
            function L(e, t) {
                return e.getAttribute(t)
            }
            function O(e) {
                return void 0 !== e.item
            }
            function M(e, t) {
                if (e = O(e) || e instanceof Array ? e : [e],
                "[object Object]" === Object.prototype.toString.call(t))
                    for (var n = e.length; n--; )
                        for (var r in t)
                            e[n].setAttribute(r, t[r])
            }
            function j(e, t) {
                e = O(e) || e instanceof Array ? e : [e];
                for (var n = (t = t instanceof Array ? t : [t]).length, r = e.length; r--; )
                    for (var i = n; i--; )
                        e[r].removeAttribute(t[i])
            }
            function H(e) {
                for (var t = [], n = 0, r = e.length; n < r; n++)
                    t.push(e[n]);
                return t
            }
            function P(e, t) {
                "none" !== e.style.display && (e.style.display = "none")
            }
            function B(e, t) {
                "none" === e.style.display && (e.style.display = "")
            }
            function I(e) {
                return "none" !== window.getComputedStyle(e).display
            }
            function q(e) {
                if ("string" == typeof e) {
                    var t = [e]
                      , n = e.charAt(0).toUpperCase() + e.substr(1);
                    ["Webkit", "Moz", "ms", "O"].forEach((function(r) {
                        "ms" === r && "transform" !== e || t.push(r + n)
                    }
                    )),
                    e = t
                }
                for (var r = document.createElement("fakeelement"), i = (e.length,
                0); i < e.length; i++) {
                    var o = e[i];
                    if (void 0 !== r.style[o])
                        return o
                }
                return !1
            }
            function z(e, t) {
                var n = !1;
                return /^Webkit/.test(e) ? n = "webkit" + t + "End" : /^O/.test(e) ? n = "o" + t + "End" : e && (n = t.toLowerCase() + "end"),
                n
            }
            var R = !1;
            try {
                var F = Object.defineProperty({}, "passive", {
                    get: function() {
                        R = !0
                    }
                });
                window.addEventListener("test", null, F)
            } catch (e) {}
            var W = !!R && {
                passive: !0
            };
            function _(e, t, n) {
                for (var r in t) {
                    var i = ["touchstart", "touchmove"].indexOf(r) >= 0 && !n && W;
                    e.addEventListener(r, t[r], i)
                }
            }
            function U(e, t) {
                for (var n in t) {
                    var r = ["touchstart", "touchmove"].indexOf(n) >= 0 && W;
                    e.removeEventListener(n, t[n], r)
                }
            }
            function $() {
                return {
                    topics: {},
                    on: function(e, t) {
                        this.topics[e] = this.topics[e] || [],
                        this.topics[e].push(t)
                    },
                    off: function(e, t) {
                        if (this.topics[e])
                            for (var n = 0; n < this.topics[e].length; n++)
                                if (this.topics[e][n] === t) {
                                    this.topics[e].splice(n, 1);
                                    break
                                }
                    },
                    emit: function(e, t) {
                        t.type = e,
                        this.topics[e] && this.topics[e].forEach((function(n) {
                            n(t, e)
                        }
                        ))
                    }
                }
            }
            Object.keys || (Object.keys = function(e) {
                var t = [];
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }
            ),
            "remove"in Element.prototype || (Element.prototype.remove = function() {
                this.parentNode && this.parentNode.removeChild(this)
            }
            );
            var V = function(e) {
                e = m({
                    container: ".slider",
                    mode: "carousel",
                    axis: "horizontal",
                    items: 1,
                    gutter: 0,
                    edgePadding: 0,
                    fixedWidth: !1,
                    autoWidth: !1,
                    viewportMax: !1,
                    slideBy: 1,
                    center: !1,
                    controls: !0,
                    controlsPosition: "top",
                    controlsText: ["prev", "next"],
                    controlsContainer: !1,
                    prevButton: !1,
                    nextButton: !1,
                    nav: !0,
                    navPosition: "top",
                    navContainer: !1,
                    navAsThumbnails: !1,
                    arrowKeys: !1,
                    speed: 300,
                    autoplay: !1,
                    autoplayPosition: "top",
                    autoplayTimeout: 5e3,
                    autoplayDirection: "forward",
                    autoplayText: ["start", "stop"],
                    autoplayHoverPause: !1,
                    autoplayButton: !1,
                    autoplayButtonOutput: !0,
                    autoplayResetOnVisibility: !0,
                    animateIn: "tns-fadeIn",
                    animateOut: "tns-fadeOut",
                    animateNormal: "tns-normal",
                    animateDelay: !1,
                    loop: !0,
                    rewind: !1,
                    autoHeight: !1,
                    responsive: !1,
                    lazyload: !1,
                    lazyloadSelector: ".tns-lazy-img",
                    touch: !0,
                    mouseDrag: !1,
                    swipeAngle: 15,
                    nested: !1,
                    preventActionWhenRunning: !1,
                    preventScrollOnTouch: !1,
                    freezable: !0,
                    onInit: !1,
                    useLocalStorage: !0,
                    nonce: !1
                }, e || {});
                var t = document
                  , n = window
                  , r = {
                    ENTER: 13,
                    SPACE: 32,
                    LEFT: 37,
                    RIGHT: 39
                }
                  , i = {}
                  , o = e.useLocalStorage;
                if (o) {
                    var a = navigator.userAgent
                      , s = new Date;
                    try {
                        (i = n.localStorage) ? (i.setItem(s, s),
                        o = i.getItem(s) == s,
                        i.removeItem(s)) : o = !1,
                        o || (i = {})
                    } catch (e) {
                        o = !1
                    }
                    o && (i.tnsApp && i.tnsApp !== a && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach((function(e) {
                        i.removeItem(e)
                    }
                    )),
                    localStorage.tnsApp = a)
                }
                var u = i.tC ? v(i.tC) : g(i, "tC", function() {
                    var e = document
                      , t = y()
                      , n = x(t)
                      , r = e.createElement("div")
                      , i = !1;
                    t.appendChild(r);
                    try {
                        for (var o, a = "(10px * 10)", s = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a], u = 0; u < 3; u++)
                            if (o = s[u],
                            r.style.width = o,
                            100 === r.offsetWidth) {
                                i = o.replace(a, "");
                                break
                            }
                    } catch (e) {}
                    return t.fake ? w(t, n) : r.remove(),
                    i
                }(), o)
                  , l = i.tPL ? v(i.tPL) : g(i, "tPL", function() {
                    var e, t = document, n = y(), r = x(n), i = t.createElement("div"), o = t.createElement("div"), a = "";
                    i.className = "tns-t-subp2",
                    o.className = "tns-t-ct";
                    for (var s = 0; s < 70; s++)
                        a += "<div></div>";
                    return o.innerHTML = a,
                    i.appendChild(o),
                    n.appendChild(i),
                    e = Math.abs(i.getBoundingClientRect().left - o.children[67].getBoundingClientRect().left) < 2,
                    n.fake ? w(n, r) : i.remove(),
                    e
                }(), o)
                  , c = i.tMQ ? v(i.tMQ) : g(i, "tMQ", function() {
                    if (window.matchMedia || window.msMatchMedia)
                        return !0;
                    var e, t = document, n = y(), r = x(n), i = t.createElement("div"), o = t.createElement("style"), a = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                    return o.type = "text/css",
                    i.className = "tns-mq-test",
                    n.appendChild(o),
                    n.appendChild(i),
                    o.styleSheet ? o.styleSheet.cssText = a : o.appendChild(t.createTextNode(a)),
                    e = window.getComputedStyle ? window.getComputedStyle(i).position : i.currentStyle.position,
                    n.fake ? w(n, r) : i.remove(),
                    "absolute" === e
                }(), o)
                  , f = i.tTf ? v(i.tTf) : g(i, "tTf", q("transform"), o)
                  , p = i.t3D ? v(i.t3D) : g(i, "t3D", function(e) {
                    if (!e)
                        return !1;
                    if (!window.getComputedStyle)
                        return !1;
                    var t, n = document, r = y(), i = x(r), o = n.createElement("p"), a = e.length > 9 ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";
                    return a += "transform",
                    r.insertBefore(o, null),
                    o.style[e] = "translate3d(1px,1px,1px)",
                    t = window.getComputedStyle(o).getPropertyValue(a),
                    r.fake ? w(r, i) : o.remove(),
                    void 0 !== t && t.length > 0 && "none" !== t
                }(f), o)
                  , b = i.tTDu ? v(i.tTDu) : g(i, "tTDu", q("transitionDuration"), o)
                  , A = i.tTDe ? v(i.tTDe) : g(i, "tTDe", q("transitionDelay"), o)
                  , O = i.tADu ? v(i.tADu) : g(i, "tADu", q("animationDuration"), o)
                  , R = i.tADe ? v(i.tADe) : g(i, "tADe", q("animationDelay"), o)
                  , F = i.tTE ? v(i.tTE) : g(i, "tTE", z(b, "Transition"), o)
                  , W = i.tAE ? v(i.tAE) : g(i, "tAE", z(O, "Animation"), o)
                  , Y = n.console && "function" == typeof n.console.warn
                  , X = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"]
                  , G = {};
                if (X.forEach((function(n) {
                    if ("string" == typeof e[n]) {
                        var r = e[n]
                          , i = t.querySelector(r);
                        if (G[n] = r,
                        !i || !i.nodeName)
                            return void (Y && console.warn("Can't find", e[n]));
                        e[n] = i
                    }
                }
                )),
                !(e.container.children.length < 1)) {
                    var J = e.responsive
                      , Q = e.nested
                      , Z = "carousel" === e.mode;
                    if (J) {
                        0 in J && (e = m(e, J[0]),
                        delete J[0]);
                        var K = {};
                        for (var ee in J) {
                            var te = J[ee];
                            te = "number" == typeof te ? {
                                items: te
                            } : te,
                            K[ee] = te
                        }
                        J = K,
                        K = null
                    }
                    if (Z || function e(t) {
                        for (var n in t)
                            Z || ("slideBy" === n && (t[n] = "page"),
                            "edgePadding" === n && (t[n] = !1),
                            "autoHeight" === n && (t[n] = !1)),
                            "responsive" === n && e(t[n])
                    }(e),
                    !Z) {
                        e.axis = "horizontal",
                        e.slideBy = "page",
                        e.edgePadding = !1;
                        var ne = e.animateIn
                          , re = e.animateOut
                          , ie = e.animateDelay
                          , oe = e.animateNormal
                    }
                    var ae, se, ue = "horizontal" === e.axis, le = t.createElement("div"), ce = t.createElement("div"), fe = e.container, de = fe.parentNode, pe = fe.outerHTML, he = fe.children, me = he.length, ve = jn(), ge = !1;
                    J && er(),
                    Z && (fe.className += " tns-vpfix");
                    var ye, be, xe, we, Te, Ce, Ee, Ae, Se, Ne = e.autoWidth, ke = qn("fixedWidth"), De = qn("edgePadding"), Le = qn("gutter"), Oe = Bn(), Me = qn("center"), je = Ne ? 1 : Math.floor(qn("items")), He = qn("slideBy"), Pe = e.viewportMax || e.fixedWidthViewportWidth, Be = qn("arrowKeys"), Ie = qn("speed"), qe = e.rewind, ze = !qe && e.loop, Re = qn("autoHeight"), Fe = qn("controls"), We = qn("controlsText"), _e = qn("nav"), Ue = qn("touch"), $e = qn("mouseDrag"), Ve = qn("autoplay"), Ye = qn("autoplayTimeout"), Xe = qn("autoplayText"), Ge = qn("autoplayHoverPause"), Je = qn("autoplayResetOnVisibility"), Qe = (Ee = null,
                    Ae = qn("nonce"),
                    Se = document.createElement("style"),
                    Ee && Se.setAttribute("media", Ee),
                    Ae && Se.setAttribute("nonce", Ae),
                    document.querySelector("head").appendChild(Se),
                    Se.sheet ? Se.sheet : Se.styleSheet), Ze = e.lazyload, Ke = e.lazyloadSelector, et = [], tt = ze ? (Te = function() {
                        if (Ne || ke && !Pe)
                            return me - 1;
                        var t = ke ? "fixedWidth" : "items"
                          , n = [];
                        if ((ke || e[t] < me) && n.push(e[t]),
                        J)
                            for (var r in J) {
                                var i = J[r][t];
                                i && (ke || i < me) && n.push(i)
                            }
                        return n.length || n.push(0),
                        Math.ceil(ke ? Pe / Math.min.apply(null, n) : Math.max.apply(null, n))
                    }(),
                    Ce = Z ? Math.ceil((5 * Te - me) / 2) : 4 * Te - me,
                    Ce = Math.max(Te, Ce),
                    In("edgePadding") ? Ce + 1 : Ce) : 0, nt = Z ? me + 2 * tt : me + tt, rt = !(!ke && !Ne || ze), it = ke ? Sr() : null, ot = !Z || !ze, at = ue ? "left" : "top", st = "", ut = "", lt = ke ? function() {
                        return Me && !ze ? me - 1 : Math.ceil(-it / (ke + Le))
                    }
                    : Ne ? function() {
                        for (var e = 0; e < nt; e++)
                            if (ye[e] >= -it)
                                return e
                    }
                    : function() {
                        return Me && Z && !ze ? me - 1 : ze || Z ? Math.max(0, nt - Math.ceil(je)) : nt - 1
                    }
                    , ct = Ln(qn("startIndex")), ft = ct, dt = (Dn(),
                    0), pt = Ne ? null : lt(), ht = e.preventActionWhenRunning, mt = e.swipeAngle, vt = !mt || "?", gt = !1, yt = e.onInit, bt = new $, xt = " tns-slider tns-" + e.mode, wt = fe.id || (we = window.tnsId,
                    window.tnsId = we ? we + 1 : 1,
                    "tns" + window.tnsId), Tt = qn("disable"), Ct = !1, Et = e.freezable, At = !(!Et || Ne) && Kn(), St = !1, Nt = {
                        click: Pr,
                        keydown: function(e) {
                            e = _r(e);
                            var t = [r.LEFT, r.RIGHT].indexOf(e.keyCode);
                            t >= 0 && (0 === t ? Gt.disabled || Pr(e, -1) : Jt.disabled || Pr(e, 1))
                        }
                    }, kt = {
                        click: function(e) {
                            if (gt) {
                                if (ht)
                                    return;
                                jr()
                            }
                            var t = Ur(e = _r(e));
                            for (; t !== en && !D(t, "data-nav"); )
                                t = t.parentNode;
                            if (D(t, "data-nav")) {
                                var n = on = Number(L(t, "data-nav"))
                                  , r = ke || Ne ? n * me / nn : n * je;
                                Hr(Bt ? n : Math.min(Math.ceil(r), me - 1), e),
                                an === n && (dn && Rr(),
                                on = -1)
                            }
                        },
                        keydown: function(e) {
                            e = _r(e);
                            var n = t.activeElement;
                            if (!D(n, "data-nav"))
                                return;
                            var i = [r.LEFT, r.RIGHT, r.ENTER, r.SPACE].indexOf(e.keyCode)
                              , o = Number(L(n, "data-nav"));
                            i >= 0 && (0 === i ? o > 0 && Wr(Kt[o - 1]) : 1 === i ? o < nn - 1 && Wr(Kt[o + 1]) : (on = o,
                            Hr(o, e)))
                        }
                    }, Dt = {
                        mouseover: function() {
                            dn && (Ir(),
                            pn = !0)
                        },
                        mouseout: function() {
                            pn && (Br(),
                            pn = !1)
                        }
                    }, Lt = {
                        visibilitychange: function() {
                            t.hidden ? dn && (Ir(),
                            mn = !0) : mn && (Br(),
                            mn = !1)
                        }
                    }, Ot = {
                        keydown: function(e) {
                            e = _r(e);
                            var t = [r.LEFT, r.RIGHT].indexOf(e.keyCode);
                            t >= 0 && Pr(e, 0 === t ? -1 : 1)
                        }
                    }, Mt = {
                        touchstart: Xr,
                        touchmove: Gr,
                        touchend: Qr,
                        touchcancel: Qr
                    }, jt = {
                        mousedown: Xr,
                        mousemove: Gr,
                        mouseup: Qr,
                        mouseleave: Qr
                    }, Ht = In("controls"), Pt = In("nav"), Bt = !!Ne || e.navAsThumbnails, It = In("autoplay"), qt = In("touch"), zt = In("mouseDrag"), Rt = "tns-slide-active", Ft = "tns-slide-cloned", Wt = "tns-complete", _t = {
                        load: function(e) {
                            lr(Ur(e))
                        },
                        error: function(e) {
                            t = Ur(e),
                            N(t, "failed"),
                            cr(t);
                            var t
                        }
                    }, Ut = "force" === e.preventScrollOnTouch;
                    if (Ht)
                        var $t, Vt, Yt = e.controlsContainer, Xt = e.controlsContainer ? e.controlsContainer.outerHTML : "", Gt = e.prevButton, Jt = e.nextButton, Qt = e.prevButton ? e.prevButton.outerHTML : "", Zt = e.nextButton ? e.nextButton.outerHTML : "";
                    if (Pt)
                        var Kt, en = e.navContainer, tn = e.navContainer ? e.navContainer.outerHTML : "", nn = Ne ? me : Kr(), rn = 0, on = -1, an = Mn(), sn = an, un = "tns-nav-active", ln = "Carousel Page ", cn = " (Current Slide)";
                    if (It)
                        var fn, dn, pn, hn, mn, vn = "forward" === e.autoplayDirection ? 1 : -1, gn = e.autoplayButton, yn = e.autoplayButton ? e.autoplayButton.outerHTML : "", bn = ["<span class='tns-visually-hidden'>", " animation</span>"];
                    if (qt || zt)
                        var xn, wn, Tn = {}, Cn = {}, En = !1, An = ue ? function(e, t) {
                            return e.x - t.x
                        }
                        : function(e, t) {
                            return e.y - t.y
                        }
                        ;
                    Ne || kn(Tt || At),
                    f && (at = f,
                    st = "translate",
                    p ? (st += ue ? "3d(" : "3d(0px, ",
                    ut = ue ? ", 0px, 0px)" : ", 0px)") : (st += ue ? "X(" : "Y(",
                    ut = ")")),
                    Z && (fe.className = fe.className.replace("tns-vpfix", "")),
                    function() {
                        In("gutter");
                        le.className = "tns-outer",
                        ce.className = "tns-inner",
                        le.id = wt + "-ow",
                        ce.id = wt + "-iw",
                        "" === fe.id && (fe.id = wt);
                        xt += l || Ne ? " tns-subpixel" : " tns-no-subpixel",
                        xt += u ? " tns-calc" : " tns-no-calc",
                        Ne && (xt += " tns-autowidth");
                        xt += " tns-" + e.axis,
                        fe.className += xt,
                        Z ? ((ae = t.createElement("div")).id = wt + "-mw",
                        ae.className = "tns-ovh",
                        le.appendChild(ae),
                        ae.appendChild(ce)) : le.appendChild(ce);
                        if (Re) {
                            (ae || ce).className += " tns-ah"
                        }
                        if (de.insertBefore(le, fe),
                        ce.appendChild(fe),
                        E(he, (function(e, t) {
                            N(e, "tns-item"),
                            e.id || (e.id = wt + "-item" + t),
                            !Z && oe && N(e, oe),
                            M(e, {
                                "aria-hidden": "true",
                                tabindex: "-1"
                            })
                        }
                        )),
                        tt) {
                            for (var n = t.createDocumentFragment(), r = t.createDocumentFragment(), i = tt; i--; ) {
                                var o = i % me
                                  , a = he[o].cloneNode(!0);
                                if (N(a, Ft),
                                j(a, "id"),
                                r.insertBefore(a, r.firstChild),
                                Z) {
                                    var s = he[me - 1 - o].cloneNode(!0);
                                    N(s, Ft),
                                    j(s, "id"),
                                    n.appendChild(s)
                                }
                            }
                            fe.insertBefore(n, fe.firstChild),
                            fe.appendChild(r),
                            he = fe.children
                        }
                    }(),
                    function() {
                        if (!Z)
                            for (var t = ct, r = ct + Math.min(me, je); t < r; t++) {
                                var i = he[t];
                                i.style.left = 100 * (t - ct) / je + "%",
                                N(i, ne),
                                k(i, oe)
                            }
                        ue && (l || Ne ? (T(Qe, "#" + wt + " > .tns-item", "font-size:" + n.getComputedStyle(he[0]).fontSize + ";", C(Qe)),
                        T(Qe, "#" + wt, "font-size:0;", C(Qe))) : Z && E(he, (function(e, t) {
                            e.style.marginLeft = function(e) {
                                return u ? u + "(" + 100 * e + "% / " + nt + ")" : 100 * e / nt + "%"
                            }(t)
                        }
                        )));
                        if (c) {
                            if (b) {
                                var o = ae && e.autoHeight ? Un(e.speed) : "";
                                T(Qe, "#" + wt + "-mw", o, C(Qe))
                            }
                            o = zn(e.edgePadding, e.gutter, e.fixedWidth, e.speed, e.autoHeight),
                            T(Qe, "#" + wt + "-iw", o, C(Qe)),
                            Z && (o = ue && !Ne ? "width:" + Rn(e.fixedWidth, e.gutter, e.items) + ";" : "",
                            b && (o += Un(Ie)),
                            T(Qe, "#" + wt, o, C(Qe))),
                            o = ue && !Ne ? Fn(e.fixedWidth, e.gutter, e.items) : "",
                            e.gutter && (o += Wn(e.gutter)),
                            Z || (b && (o += Un(Ie)),
                            O && (o += $n(Ie))),
                            o && T(Qe, "#" + wt + " > .tns-item", o, C(Qe))
                        } else {
                            Z && Re && (ae.style[b] = Ie / 1e3 + "s"),
                            ce.style.cssText = zn(De, Le, ke, Re),
                            Z && ue && !Ne && (fe.style.width = Rn(ke, Le, je));
                            o = ue && !Ne ? Fn(ke, Le, je) : "";
                            Le && (o += Wn(Le)),
                            o && T(Qe, "#" + wt + " > .tns-item", o, C(Qe))
                        }
                        if (J && c)
                            for (var a in J) {
                                a = parseInt(a);
                                var s = J[a]
                                  , f = (o = "",
                                "")
                                  , d = ""
                                  , p = ""
                                  , h = ""
                                  , m = Ne ? null : qn("items", a)
                                  , v = qn("fixedWidth", a)
                                  , g = qn("speed", a)
                                  , y = qn("edgePadding", a)
                                  , x = qn("autoHeight", a)
                                  , w = qn("gutter", a);
                                b && ae && qn("autoHeight", a) && "speed"in s && (f = "#" + wt + "-mw{" + Un(g) + "}"),
                                ("edgePadding"in s || "gutter"in s) && (d = "#" + wt + "-iw{" + zn(y, w, v, g, x) + "}"),
                                Z && ue && !Ne && ("fixedWidth"in s || "items"in s || ke && "gutter"in s) && (p = "width:" + Rn(v, w, m) + ";"),
                                b && "speed"in s && (p += Un(g)),
                                p && (p = "#" + wt + "{" + p + "}"),
                                ("fixedWidth"in s || ke && "gutter"in s || !Z && "items"in s) && (h += Fn(v, w, m)),
                                "gutter"in s && (h += Wn(w)),
                                !Z && "speed"in s && (b && (h += Un(g)),
                                O && (h += $n(g))),
                                h && (h = "#" + wt + " > .tns-item{" + h + "}"),
                                (o = f + d + p + h) && Qe.insertRule("@media (min-width: " + a / 16 + "em) {" + o + "}", Qe.cssRules.length)
                            }
                    }(),
                    Vn();
                    var Sn = ze ? Z ? function() {
                        var e = dt
                          , t = pt;
                        e += He,
                        t -= He,
                        De ? (e += 1,
                        t -= 1) : ke && (Oe + Le) % (ke + Le) && (t -= 1),
                        tt && (ct > t ? ct -= me : ct < e && (ct += me))
                    }
                    : function() {
                        if (ct > pt)
                            for (; ct >= dt + me; )
                                ct -= me;
                        else if (ct < dt)
                            for (; ct <= pt - me; )
                                ct += me
                    }
                    : function() {
                        ct = Math.max(dt, Math.min(pt, ct))
                    }
                      , Nn = Z ? function() {
                        var e, t, n, r, i, o, a, s, u, l, c;
                        Er(fe, ""),
                        b || !Ie ? (Dr(),
                        Ie && I(fe) || jr()) : (e = fe,
                        t = at,
                        n = st,
                        r = ut,
                        i = Nr(),
                        o = Ie,
                        a = jr,
                        s = Math.min(o, 10),
                        u = i.indexOf("%") >= 0 ? "%" : "px",
                        i = i.replace(u, ""),
                        l = Number(e.style[t].replace(n, "").replace(r, "").replace(u, "")),
                        c = (i - l) / o * s,
                        setTimeout((function i() {
                            o -= s,
                            l += c,
                            e.style[t] = n + l + u + r,
                            o > 0 ? setTimeout(i, s) : a()
                        }
                        ), s)),
                        ue || Zr()
                    }
                    : function() {
                        et = [];
                        var e = {};
                        e[F] = e[W] = jr,
                        U(he[ft], e),
                        _(he[ct], e),
                        Lr(ft, ne, re, !0),
                        Lr(ct, oe, ne),
                        F && W && Ie && I(fe) || jr()
                    }
                    ;
                    return {
                        version: "2.9.4",
                        getInfo: ti,
                        events: bt,
                        goTo: Hr,
                        play: function() {
                            Ve && !dn && (zr(),
                            hn = !1)
                        },
                        pause: function() {
                            dn && (Rr(),
                            hn = !0)
                        },
                        isOn: ge,
                        updateSliderHeight: vr,
                        refresh: Vn,
                        destroy: function() {
                            if (Qe.disabled = !0,
                            Qe.ownerNode && Qe.ownerNode.remove(),
                            U(n, {
                                resize: Qn
                            }),
                            Be && U(t, Ot),
                            Yt && U(Yt, Nt),
                            en && U(en, kt),
                            U(fe, Dt),
                            U(fe, Lt),
                            gn && U(gn, {
                                click: Fr
                            }),
                            Ve && clearInterval(fn),
                            Z && F) {
                                var r = {};
                                r[F] = jr,
                                U(fe, r)
                            }
                            Ue && U(fe, Mt),
                            $e && U(fe, jt);
                            var i = [pe, Xt, Qt, Zt, tn, yn];
                            for (var o in X.forEach((function(t, n) {
                                var r = "container" === t ? le : e[t];
                                if ("object" == typeof r && r) {
                                    var o = !!r.previousElementSibling && r.previousElementSibling
                                      , a = r.parentNode;
                                    r.outerHTML = i[n],
                                    e[t] = o ? o.nextElementSibling : a.firstElementChild
                                }
                            }
                            )),
                            X = ne = re = ie = oe = ue = le = ce = fe = de = pe = he = me = se = ve = Ne = ke = De = Le = Oe = je = He = Pe = Be = Ie = qe = ze = Re = Qe = Ze = ye = et = tt = nt = rt = it = ot = at = st = ut = lt = ct = ft = dt = pt = mt = vt = gt = yt = bt = xt = wt = Tt = Ct = Et = At = St = Nt = kt = Dt = Lt = Ot = Mt = jt = Ht = Pt = Bt = It = qt = zt = Rt = Wt = _t = be = Fe = We = Yt = Xt = Gt = Jt = $t = Vt = _e = en = tn = Kt = nn = rn = on = an = sn = un = ln = cn = Ve = Ye = vn = Xe = Ge = gn = yn = Je = bn = fn = dn = pn = hn = mn = Tn = Cn = xn = En = wn = An = Ue = $e = null,
                            this)
                                "rebuild" !== o && (this[o] = null);
                            ge = !1
                        },
                        rebuild: function() {
                            return V(m(e, G))
                        }
                    }
                }
                function kn(e) {
                    e && (Fe = _e = Ue = $e = Be = Ve = Ge = Je = !1)
                }
                function Dn() {
                    for (var e = Z ? ct - tt : ct; e < 0; )
                        e += me;
                    return e % me + 1
                }
                function Ln(e) {
                    return e = e ? Math.max(0, Math.min(ze ? me - 1 : me - je, e)) : 0,
                    Z ? e + tt : e
                }
                function On(e) {
                    for (null == e && (e = ct),
                    Z && (e -= tt); e < 0; )
                        e += me;
                    return Math.floor(e % me)
                }
                function Mn() {
                    var e, t = On();
                    return e = Bt ? t : ke || Ne ? Math.ceil((t + 1) * nn / me - 1) : Math.floor(t / je),
                    !ze && Z && ct === pt && (e = nn - 1),
                    e
                }
                function jn() {
                    return n.innerWidth || t.documentElement.clientWidth || t.body.clientWidth
                }
                function Hn(e) {
                    return "top" === e ? "afterbegin" : "beforeend"
                }
                function Pn(e) {
                    if (null != e) {
                        var n, r, i = t.createElement("div");
                        return e.appendChild(i),
                        r = (n = i.getBoundingClientRect()).right - n.left,
                        i.remove(),
                        r || Pn(e.parentNode)
                    }
                }
                function Bn() {
                    var e = De ? 2 * De - Le : 0;
                    return Pn(de) - e
                }
                function In(t) {
                    if (e[t])
                        return !0;
                    if (J)
                        for (var n in J)
                            if (J[n][t])
                                return !0;
                    return !1
                }
                function qn(t, n) {
                    if (null == n && (n = ve),
                    "items" === t && ke)
                        return Math.floor((Oe + Le) / (ke + Le)) || 1;
                    var r = e[t];
                    if (J)
                        for (var i in J)
                            n >= parseInt(i) && t in J[i] && (r = J[i][t]);
                    return "slideBy" === t && "page" === r && (r = qn("items")),
                    Z || "slideBy" !== t && "items" !== t || (r = Math.floor(r)),
                    r
                }
                function zn(e, t, n, r, i) {
                    var o = "";
                    if (void 0 !== e) {
                        var a = e;
                        t && (a -= t),
                        o = ue ? "margin: 0 " + a + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + a + "px 0;"
                    } else if (t && !n) {
                        var s = "-" + t + "px";
                        o = "margin: 0 " + (ue ? s + " 0 0" : "0 " + s + " 0") + ";"
                    }
                    return !Z && i && b && r && (o += Un(r)),
                    o
                }
                function Rn(e, t, n) {
                    return e ? (e + t) * nt + "px" : u ? u + "(" + 100 * nt + "% / " + n + ")" : 100 * nt / n + "%"
                }
                function Fn(e, t, n) {
                    var r;
                    if (e)
                        r = e + t + "px";
                    else {
                        Z || (n = Math.floor(n));
                        var i = Z ? nt : n;
                        r = u ? u + "(100% / " + i + ")" : 100 / i + "%"
                    }
                    return r = "width:" + r,
                    "inner" !== Q ? r + ";" : r + " !important;"
                }
                function Wn(e) {
                    var t = "";
                    !1 !== e && (t = (ue ? "padding-" : "margin-") + (ue ? "right" : "bottom") + ": " + e + "px;");
                    return t
                }
                function _n(e, t) {
                    var n = e.substring(0, e.length - t).toLowerCase();
                    return n && (n = "-" + n + "-"),
                    n
                }
                function Un(e) {
                    return _n(b, 18) + "transition-duration:" + e / 1e3 + "s;"
                }
                function $n(e) {
                    return _n(O, 17) + "animation-duration:" + e / 1e3 + "s;"
                }
                function Vn() {
                    if (In("autoHeight") || Ne || !ue) {
                        var e = fe.querySelectorAll("img");
                        E(e, (function(e) {
                            var t = e.src;
                            Ze || (t && t.indexOf("data:image") < 0 ? (e.src = "",
                            _(e, _t),
                            N(e, "loading"),
                            e.src = t) : lr(e))
                        }
                        )),
                        d((function() {
                            pr(H(e), (function() {
                                be = !0
                            }
                            ))
                        }
                        )),
                        In("autoHeight") && (e = fr(ct, Math.min(ct + je - 1, nt - 1))),
                        Ze ? Yn() : d((function() {
                            pr(H(e), Yn)
                        }
                        ))
                    } else
                        Z && kr(),
                        Gn(),
                        Jn()
                }
                function Yn() {
                    if (Ne && me > 1) {
                        var e = ze ? ct : me - 1;
                        !function t() {
                            var n = he[e].getBoundingClientRect().left
                              , r = he[e - 1].getBoundingClientRect().right;
                            Math.abs(n - r) <= 1 ? Xn() : setTimeout((function() {
                                t()
                            }
                            ), 16)
                        }()
                    } else
                        Xn()
                }
                function Xn() {
                    ue && !Ne || (gr(),
                    Ne ? (it = Sr(),
                    Et && (At = Kn()),
                    pt = lt(),
                    kn(Tt || At)) : Zr()),
                    Z && kr(),
                    Gn(),
                    Jn()
                }
                function Gn() {
                    if (yr(),
                    le.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + ar() + "</span>  of " + me + "</div>"),
                    xe = le.querySelector(".tns-liveregion .current"),
                    It) {
                        var t = Ve ? "stop" : "start";
                        gn ? M(gn, {
                            "data-action": t
                        }) : e.autoplayButtonOutput && (le.insertAdjacentHTML(Hn(e.autoplayPosition), '<button type="button" data-action="' + t + '">' + bn[0] + t + bn[1] + Xe[0] + "</button>"),
                        gn = le.querySelector("[data-action]")),
                        gn && _(gn, {
                            click: Fr
                        }),
                        Ve && (zr(),
                        Ge && _(fe, Dt),
                        Je && _(fe, Lt))
                    }
                    if (Pt) {
                        if (en)
                            M(en, {
                                "aria-label": "Carousel Pagination"
                            }),
                            E(Kt = en.children, (function(e, t) {
                                M(e, {
                                    "data-nav": t,
                                    tabindex: "-1",
                                    "aria-label": ln + (t + 1),
                                    "aria-controls": wt
                                })
                            }
                            ));
                        else {
                            for (var n = "", r = Bt ? "" : 'style="display:none"', i = 0; i < me; i++)
                                n += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + wt + '" ' + r + ' aria-label="' + ln + (i + 1) + '"></button>';
                            n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>",
                            le.insertAdjacentHTML(Hn(e.navPosition), n),
                            en = le.querySelector(".tns-nav"),
                            Kt = en.children
                        }
                        if (ei(),
                        b) {
                            var o = b.substring(0, b.length - 18).toLowerCase()
                              , a = "transition: all " + Ie / 1e3 + "s";
                            o && (a = "-" + o + "-" + a),
                            T(Qe, "[aria-controls^=" + wt + "-item]", a, C(Qe))
                        }
                        M(Kt[an], {
                            "aria-label": ln + (an + 1) + cn
                        }),
                        j(Kt[an], "tabindex"),
                        N(Kt[an], un),
                        _(en, kt)
                    }
                    Ht && (Yt || Gt && Jt || (le.insertAdjacentHTML(Hn(e.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + wt + '">' + We[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + wt + '">' + We[1] + "</button></div>"),
                    Yt = le.querySelector(".tns-controls")),
                    Gt && Jt || (Gt = Yt.children[0],
                    Jt = Yt.children[1]),
                    e.controlsContainer && M(Yt, {
                        "aria-label": "Carousel Navigation",
                        tabindex: "0"
                    }),
                    (e.controlsContainer || e.prevButton && e.nextButton) && M([Gt, Jt], {
                        "aria-controls": wt,
                        tabindex: "-1"
                    }),
                    (e.controlsContainer || e.prevButton && e.nextButton) && (M(Gt, {
                        "data-controls": "prev"
                    }),
                    M(Jt, {
                        "data-controls": "next"
                    })),
                    $t = xr(Gt),
                    Vt = xr(Jt),
                    Cr(),
                    Yt ? _(Yt, Nt) : (_(Gt, Nt),
                    _(Jt, Nt))),
                    tr()
                }
                function Jn() {
                    if (Z && F) {
                        var r = {};
                        r[F] = jr,
                        _(fe, r)
                    }
                    Ue && _(fe, Mt, e.preventScrollOnTouch),
                    $e && _(fe, jt),
                    Be && _(t, Ot),
                    "inner" === Q ? bt.on("outerResized", (function() {
                        Zn(),
                        bt.emit("innerLoaded", ti())
                    }
                    )) : (J || ke || Ne || Re || !ue) && _(n, {
                        resize: Qn
                    }),
                    Re && ("outer" === Q ? bt.on("innerLoaded", dr) : Tt || dr()),
                    ur(),
                    Tt ? ir() : At && rr(),
                    bt.on("indexChanged", hr),
                    "inner" === Q && bt.emit("innerLoaded", ti()),
                    "function" == typeof yt && yt(ti()),
                    ge = !0
                }
                function Qn(e) {
                    d((function() {
                        Zn(_r(e))
                    }
                    ))
                }
                function Zn(n) {
                    if (ge) {
                        "outer" === Q && bt.emit("outerResized", ti(n)),
                        ve = jn();
                        var r, i = se, o = !1;
                        J && (er(),
                        (r = i !== se) && bt.emit("newBreakpointStart", ti(n)));
                        var a, s, u = je, l = Tt, f = At, d = Be, p = Fe, h = _e, m = Ue, v = $e, g = Ve, y = Ge, b = Je, x = ct;
                        if (r) {
                            var w = ke
                              , A = Re
                              , S = We
                              , D = Me
                              , L = Xe;
                            if (!c)
                                var O = Le
                                  , M = De
                        }
                        if (Be = qn("arrowKeys"),
                        Fe = qn("controls"),
                        _e = qn("nav"),
                        Ue = qn("touch"),
                        Me = qn("center"),
                        $e = qn("mouseDrag"),
                        Ve = qn("autoplay"),
                        Ge = qn("autoplayHoverPause"),
                        Je = qn("autoplayResetOnVisibility"),
                        r && (Tt = qn("disable"),
                        ke = qn("fixedWidth"),
                        Ie = qn("speed"),
                        Re = qn("autoHeight"),
                        We = qn("controlsText"),
                        Xe = qn("autoplayText"),
                        Ye = qn("autoplayTimeout"),
                        c || (De = qn("edgePadding"),
                        Le = qn("gutter"))),
                        kn(Tt),
                        Oe = Bn(),
                        ue && !Ne || Tt || (gr(),
                        ue || (Zr(),
                        o = !0)),
                        (ke || Ne) && (it = Sr(),
                        pt = lt()),
                        (r || ke) && (je = qn("items"),
                        He = qn("slideBy"),
                        (s = je !== u) && (ke || Ne || (pt = lt()),
                        Sn())),
                        r && Tt !== l && (Tt ? ir() : function() {
                            if (!Ct)
                                return;
                            if (Qe.disabled = !1,
                            fe.className += xt,
                            kr(),
                            ze)
                                for (var e = tt; e--; )
                                    Z && B(he[e]),
                                    B(he[nt - e - 1]);
                            if (!Z)
                                for (var t = ct, n = ct + me; t < n; t++) {
                                    var r = he[t]
                                      , i = t < ct + je ? ne : oe;
                                    r.style.left = 100 * (t - ct) / je + "%",
                                    N(r, i)
                                }
                            nr(),
                            Ct = !1
                        }()),
                        Et && (r || ke || Ne) && (At = Kn()) !== f && (At ? (Dr(Nr(Ln(0))),
                        rr()) : (!function() {
                            if (!St)
                                return;
                            De && c && (ce.style.margin = "");
                            if (tt)
                                for (var e = "tns-transparent", t = tt; t--; )
                                    Z && k(he[t], e),
                                    k(he[nt - t - 1], e);
                            nr(),
                            St = !1
                        }(),
                        o = !0)),
                        kn(Tt || At),
                        Ve || (Ge = Je = !1),
                        Be !== d && (Be ? _(t, Ot) : U(t, Ot)),
                        Fe !== p && (Fe ? Yt ? B(Yt) : (Gt && B(Gt),
                        Jt && B(Jt)) : Yt ? P(Yt) : (Gt && P(Gt),
                        Jt && P(Jt))),
                        _e !== h && (_e ? (B(en),
                        ei()) : P(en)),
                        Ue !== m && (Ue ? _(fe, Mt, e.preventScrollOnTouch) : U(fe, Mt)),
                        $e !== v && ($e ? _(fe, jt) : U(fe, jt)),
                        Ve !== g && (Ve ? (gn && B(gn),
                        dn || hn || zr()) : (gn && P(gn),
                        dn && Rr())),
                        Ge !== y && (Ge ? _(fe, Dt) : U(fe, Dt)),
                        Je !== b && (Je ? _(t, Lt) : U(t, Lt)),
                        r) {
                            if (ke === w && Me === D || (o = !0),
                            Re !== A && (Re || (ce.style.height = "")),
                            Fe && We !== S && (Gt.innerHTML = We[0],
                            Jt.innerHTML = We[1]),
                            gn && Xe !== L) {
                                var j = Ve ? 1 : 0
                                  , H = gn.innerHTML
                                  , I = H.length - L[j].length;
                                H.substring(I) === L[j] && (gn.innerHTML = H.substring(0, I) + Xe[j])
                            }
                        } else
                            Me && (ke || Ne) && (o = !0);
                        if ((s || ke && !Ne) && (nn = Kr(),
                        ei()),
                        (a = ct !== x) ? (bt.emit("indexChanged", ti()),
                        o = !0) : s ? a || hr() : (ke || Ne) && (ur(),
                        yr(),
                        or()),
                        s && !Z && function() {
                            for (var e = ct + Math.min(me, je), t = nt; t--; ) {
                                var n = he[t];
                                t >= ct && t < e ? (N(n, "tns-moving"),
                                n.style.left = 100 * (t - ct) / je + "%",
                                N(n, ne),
                                k(n, oe)) : n.style.left && (n.style.left = "",
                                N(n, oe),
                                k(n, ne)),
                                k(n, re)
                            }
                            setTimeout((function() {
                                E(he, (function(e) {
                                    k(e, "tns-moving")
                                }
                                ))
                            }
                            ), 300)
                        }(),
                        !Tt && !At) {
                            if (r && !c && (De === M && Le === O || (ce.style.cssText = zn(De, Le, ke, Ie, Re)),
                            ue)) {
                                Z && (fe.style.width = Rn(ke, Le, je));
                                var q = Fn(ke, Le, je) + Wn(Le);
                                !function(e, t) {
                                    "deleteRule"in e ? e.deleteRule(t) : e.removeRule(t)
                                }(Qe, C(Qe) - 1),
                                T(Qe, "#" + wt + " > .tns-item", q, C(Qe))
                            }
                            Re && dr(),
                            o && (kr(),
                            ft = ct)
                        }
                        r && bt.emit("newBreakpointEnd", ti(n))
                    }
                }
                function Kn() {
                    if (!ke && !Ne)
                        return me <= (Me ? je - (je - 1) / 2 : je);
                    var e = ke ? (ke + Le) * me : ye[me]
                      , t = De ? Oe + 2 * De : Oe + Le;
                    return Me && (t -= ke ? (Oe - ke) / 2 : (Oe - (ye[ct + 1] - ye[ct] - Le)) / 2),
                    e <= t
                }
                function er() {
                    for (var e in se = 0,
                    J)
                        e = parseInt(e),
                        ve >= e && (se = e)
                }
                function tr() {
                    !Ve && gn && P(gn),
                    !_e && en && P(en),
                    Fe || (Yt ? P(Yt) : (Gt && P(Gt),
                    Jt && P(Jt)))
                }
                function nr() {
                    Ve && gn && B(gn),
                    _e && en && B(en),
                    Fe && (Yt ? B(Yt) : (Gt && B(Gt),
                    Jt && B(Jt)))
                }
                function rr() {
                    if (!St) {
                        if (De && (ce.style.margin = "0px"),
                        tt)
                            for (var e = "tns-transparent", t = tt; t--; )
                                Z && N(he[t], e),
                                N(he[nt - t - 1], e);
                        tr(),
                        St = !0
                    }
                }
                function ir() {
                    if (!Ct) {
                        if (Qe.disabled = !0,
                        fe.className = fe.className.replace(xt.substring(1), ""),
                        j(fe, ["style"]),
                        ze)
                            for (var e = tt; e--; )
                                Z && P(he[e]),
                                P(he[nt - e - 1]);
                        if (ue && Z || j(ce, ["style"]),
                        !Z)
                            for (var t = ct, n = ct + me; t < n; t++) {
                                var r = he[t];
                                j(r, ["style"]),
                                k(r, ne),
                                k(r, oe)
                            }
                        tr(),
                        Ct = !0
                    }
                }
                function or() {
                    var e = ar();
                    xe.innerHTML !== e && (xe.innerHTML = e)
                }
                function ar() {
                    var e = sr()
                      , t = e[0] + 1
                      , n = e[1] + 1;
                    return t === n ? t + "" : t + " to " + n
                }
                function sr(e) {
                    null == e && (e = Nr());
                    var t, n, r, i = ct;
                    if (Me || De ? (Ne || ke) && (n = -(parseFloat(e) + De),
                    r = n + Oe + 2 * De) : Ne && (n = ye[ct],
                    r = n + Oe),
                    Ne)
                        ye.forEach((function(e, o) {
                            o < nt && ((Me || De) && e <= n + .5 && (i = o),
                            r - e >= .5 && (t = o))
                        }
                        ));
                    else {
                        if (ke) {
                            var o = ke + Le;
                            Me || De ? (i = Math.floor(n / o),
                            t = Math.ceil(r / o - 1)) : t = i + Math.ceil(Oe / o) - 1
                        } else if (Me || De) {
                            var a = je - 1;
                            if (Me ? (i -= a / 2,
                            t = ct + a / 2) : t = ct + a,
                            De) {
                                var s = De * je / Oe;
                                i -= s,
                                t += s
                            }
                            i = Math.floor(i),
                            t = Math.ceil(t)
                        } else
                            t = i + je - 1;
                        i = Math.max(i, 0),
                        t = Math.min(t, nt - 1)
                    }
                    return [i, t]
                }
                function ur() {
                    if (Ze && !Tt) {
                        var e = sr();
                        e.push(Ke),
                        fr.apply(null, e).forEach((function(e) {
                            if (!S(e, Wt)) {
                                var t = {};
                                t[F] = function(e) {
                                    e.stopPropagation()
                                }
                                ,
                                _(e, t),
                                _(e, _t),
                                e.src = L(e, "data-src");
                                var n = L(e, "data-srcset");
                                n && (e.srcset = n),
                                N(e, "loading")
                            }
                        }
                        ))
                    }
                }
                function lr(e) {
                    N(e, "loaded"),
                    cr(e)
                }
                function cr(e) {
                    N(e, Wt),
                    k(e, "loading"),
                    U(e, _t)
                }
                function fr(e, t, n) {
                    var r = [];
                    for (n || (n = "img"); e <= t; )
                        E(he[e].querySelectorAll(n), (function(e) {
                            r.push(e)
                        }
                        )),
                        e++;
                    return r
                }
                function dr() {
                    var e = fr.apply(null, sr());
                    d((function() {
                        pr(e, vr)
                    }
                    ))
                }
                function pr(e, t) {
                    return be ? t() : (e.forEach((function(t, n) {
                        !Ze && t.complete && cr(t),
                        S(t, Wt) && e.splice(n, 1)
                    }
                    )),
                    e.length ? void d((function() {
                        pr(e, t)
                    }
                    )) : t())
                }
                function hr() {
                    ur(),
                    yr(),
                    or(),
                    Cr(),
                    function() {
                        if (_e && (an = on >= 0 ? on : Mn(),
                        on = -1,
                        an !== sn)) {
                            var e = Kt[sn]
                              , t = Kt[an];
                            M(e, {
                                tabindex: "-1",
                                "aria-label": ln + (sn + 1)
                            }),
                            k(e, un),
                            M(t, {
                                "aria-label": ln + (an + 1) + cn
                            }),
                            j(t, "tabindex"),
                            N(t, un),
                            sn = an
                        }
                    }()
                }
                function mr(e, t) {
                    for (var n = [], r = e, i = Math.min(e + t, nt); r < i; r++)
                        n.push(he[r].offsetHeight);
                    return Math.max.apply(null, n)
                }
                function vr() {
                    var e = Re ? mr(ct, je) : mr(tt, me)
                      , t = ae || ce;
                    t.style.height !== e && (t.style.height = e + "px")
                }
                function gr() {
                    ye = [0];
                    var e = ue ? "left" : "top"
                      , t = ue ? "right" : "bottom"
                      , n = he[0].getBoundingClientRect()[e];
                    E(he, (function(r, i) {
                        i && ye.push(r.getBoundingClientRect()[e] - n),
                        i === nt - 1 && ye.push(r.getBoundingClientRect()[t] - n)
                    }
                    ))
                }
                function yr() {
                    var e = sr()
                      , t = e[0]
                      , n = e[1];
                    E(he, (function(e, r) {
                        r >= t && r <= n ? D(e, "aria-hidden") && (j(e, ["aria-hidden", "tabindex"]),
                        N(e, Rt)) : D(e, "aria-hidden") || (M(e, {
                            "aria-hidden": "true",
                            tabindex: "-1"
                        }),
                        k(e, Rt))
                    }
                    ))
                }
                function br(e) {
                    return e.nodeName.toLowerCase()
                }
                function xr(e) {
                    return "button" === br(e)
                }
                function wr(e) {
                    return "true" === e.getAttribute("aria-disabled")
                }
                function Tr(e, t, n) {
                    e ? t.disabled = n : t.setAttribute("aria-disabled", n.toString())
                }
                function Cr() {
                    if (Fe && !qe && !ze) {
                        var e = $t ? Gt.disabled : wr(Gt)
                          , t = Vt ? Jt.disabled : wr(Jt)
                          , n = ct <= dt
                          , r = !qe && ct >= pt;
                        n && !e && Tr($t, Gt, !0),
                        !n && e && Tr($t, Gt, !1),
                        r && !t && Tr(Vt, Jt, !0),
                        !r && t && Tr(Vt, Jt, !1)
                    }
                }
                function Er(e, t) {
                    b && (e.style[b] = t)
                }
                function Ar(e) {
                    return null == e && (e = ct),
                    Ne ? (Oe - (De ? Le : 0) - (ye[e + 1] - ye[e] - Le)) / 2 : ke ? (Oe - ke) / 2 : (je - 1) / 2
                }
                function Sr() {
                    var e = Oe + (De ? Le : 0) - (ke ? (ke + Le) * nt : ye[nt]);
                    return Me && !ze && (e = ke ? -(ke + Le) * (nt - 1) - Ar() : Ar(nt - 1) - ye[nt - 1]),
                    e > 0 && (e = 0),
                    e
                }
                function Nr(e) {
                    var t;
                    if (null == e && (e = ct),
                    ue && !Ne)
                        if (ke)
                            t = -(ke + Le) * e,
                            Me && (t += Ar());
                        else {
                            var n = f ? nt : je;
                            Me && (e -= Ar()),
                            t = 100 * -e / n
                        }
                    else
                        t = -ye[e],
                        Me && Ne && (t += Ar());
                    return rt && (t = Math.max(t, it)),
                    t += !ue || Ne || ke ? "px" : "%"
                }
                function kr(e) {
                    Er(fe, "0s"),
                    Dr(e)
                }
                function Dr(e) {
                    null == e && (e = Nr()),
                    fe.style[at] = st + e + ut
                }
                function Lr(e, t, n, r) {
                    var i = e + je;
                    ze || (i = Math.min(i, nt));
                    for (var o = e; o < i; o++) {
                        var a = he[o];
                        r || (a.style.left = 100 * (o - ct) / je + "%"),
                        ie && A && (a.style[A] = a.style[R] = ie * (o - e) / 1e3 + "s"),
                        k(a, t),
                        N(a, n),
                        r && et.push(a)
                    }
                }
                function Or(e, t) {
                    ot && Sn(),
                    (ct !== ft || t) && (bt.emit("indexChanged", ti()),
                    bt.emit("transitionStart", ti()),
                    Re && dr(),
                    dn && e && ["click", "keydown"].indexOf(e.type) >= 0 && Rr(),
                    gt = !0,
                    Nn())
                }
                function Mr(e) {
                    return e.toLowerCase().replace(/-/g, "")
                }
                function jr(e) {
                    if (Z || gt) {
                        if (bt.emit("transitionEnd", ti(e)),
                        !Z && et.length > 0)
                            for (var t = 0; t < et.length; t++) {
                                var n = et[t];
                                n.style.left = "",
                                R && A && (n.style[R] = "",
                                n.style[A] = ""),
                                k(n, re),
                                N(n, oe)
                            }
                        if (!e || !Z && e.target.parentNode === fe || e.target === fe && Mr(e.propertyName) === Mr(at)) {
                            if (!ot) {
                                var r = ct;
                                Sn(),
                                ct !== r && (bt.emit("indexChanged", ti()),
                                kr())
                            }
                            "inner" === Q && bt.emit("innerLoaded", ti()),
                            gt = !1,
                            ft = ct
                        }
                    }
                }
                function Hr(e, t) {
                    if (!At)
                        if ("prev" === e)
                            Pr(t, -1);
                        else if ("next" === e)
                            Pr(t, 1);
                        else {
                            if (gt) {
                                if (ht)
                                    return;
                                jr()
                            }
                            var n = On()
                              , r = 0;
                            if ("first" === e ? r = -n : "last" === e ? r = Z ? me - je - n : me - 1 - n : ("number" != typeof e && (e = parseInt(e)),
                            isNaN(e) || (t || (e = Math.max(0, Math.min(me - 1, e))),
                            r = e - n)),
                            !Z && r && Math.abs(r) < je) {
                                var i = r > 0 ? 1 : -1;
                                r += ct + r - me >= dt ? me * i : 2 * me * i * -1
                            }
                            ct += r,
                            Z && ze && (ct < dt && (ct += me),
                            ct > pt && (ct -= me)),
                            On(ct) !== On(ft) && Or(t)
                        }
                }
                function Pr(e, t) {
                    if (gt) {
                        if (ht)
                            return;
                        jr()
                    }
                    var n;
                    if (!t) {
                        for (var r = Ur(e = _r(e)); r !== Yt && [Gt, Jt].indexOf(r) < 0; )
                            r = r.parentNode;
                        var i = [Gt, Jt].indexOf(r);
                        i >= 0 && (n = !0,
                        t = 0 === i ? -1 : 1)
                    }
                    if (qe) {
                        if (ct === dt && -1 === t)
                            return void Hr("last", e);
                        if (ct === pt && 1 === t)
                            return void Hr("first", e)
                    }
                    t && (ct += He * t,
                    Ne && (ct = Math.floor(ct)),
                    Or(n || e && "keydown" === e.type ? e : null))
                }
                function Br() {
                    fn = setInterval((function() {
                        Pr(null, vn)
                    }
                    ), Ye),
                    dn = !0
                }
                function Ir() {
                    clearInterval(fn),
                    dn = !1
                }
                function qr(e, t) {
                    M(gn, {
                        "data-action": e
                    }),
                    gn.innerHTML = bn[0] + e + bn[1] + t
                }
                function zr() {
                    Br(),
                    gn && qr("stop", Xe[1])
                }
                function Rr() {
                    Ir(),
                    gn && qr("start", Xe[0])
                }
                function Fr() {
                    dn ? (Rr(),
                    hn = !0) : (zr(),
                    hn = !1)
                }
                function Wr(e) {
                    e.focus()
                }
                function _r(e) {
                    return $r(e = e || n.event) ? e.changedTouches[0] : e
                }
                function Ur(e) {
                    return e.target || n.event.srcElement
                }
                function $r(e) {
                    return e.type.indexOf("touch") >= 0
                }
                function Vr(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }
                function Yr() {
                    return o = Cn.y - Tn.y,
                    a = Cn.x - Tn.x,
                    t = Math.atan2(o, a) * (180 / Math.PI),
                    n = mt,
                    r = !1,
                    (i = Math.abs(90 - Math.abs(t))) >= 90 - n ? r = "horizontal" : i <= n && (r = "vertical"),
                    r === e.axis;
                    var t, n, r, i, o, a
                }
                function Xr(e) {
                    if (gt) {
                        if (ht)
                            return;
                        jr()
                    }
                    Ve && dn && Ir(),
                    En = !0,
                    wn && (h(wn),
                    wn = null);
                    var t = _r(e);
                    bt.emit($r(e) ? "touchStart" : "dragStart", ti(e)),
                    !$r(e) && ["img", "a"].indexOf(br(Ur(e))) >= 0 && Vr(e),
                    Cn.x = Tn.x = t.clientX,
                    Cn.y = Tn.y = t.clientY,
                    Z && (xn = parseFloat(fe.style[at].replace(st, "")),
                    Er(fe, "0s"))
                }
                function Gr(e) {
                    if (En) {
                        var t = _r(e);
                        Cn.x = t.clientX,
                        Cn.y = t.clientY,
                        Z ? wn || (wn = d((function() {
                            Jr(e)
                        }
                        ))) : ("?" === vt && (vt = Yr()),
                        vt && (Ut = !0)),
                        ("boolean" != typeof e.cancelable || e.cancelable) && Ut && e.preventDefault()
                    }
                }
                function Jr(e) {
                    if (vt) {
                        if (h(wn),
                        En && (wn = d((function() {
                            Jr(e)
                        }
                        ))),
                        "?" === vt && (vt = Yr()),
                        vt) {
                            !Ut && $r(e) && (Ut = !0);
                            try {
                                e.type && bt.emit($r(e) ? "touchMove" : "dragMove", ti(e))
                            } catch (e) {}
                            var t = xn
                              , n = An(Cn, Tn);
                            if (!ue || ke || Ne)
                                t += n,
                                t += "px";
                            else
                                t += f ? n * je * 100 / ((Oe + Le) * nt) : 100 * n / (Oe + Le),
                                t += "%";
                            fe.style[at] = st + t + ut
                        }
                    } else
                        En = !1
                }
                function Qr(t) {
                    if (En) {
                        wn && (h(wn),
                        wn = null),
                        Z && Er(fe, ""),
                        En = !1;
                        var n = _r(t);
                        Cn.x = n.clientX,
                        Cn.y = n.clientY;
                        var r = An(Cn, Tn);
                        if (Math.abs(r)) {
                            if (!$r(t)) {
                                var i = Ur(t);
                                _(i, {
                                    click: function e(t) {
                                        Vr(t),
                                        U(i, {
                                            click: e
                                        })
                                    }
                                })
                            }
                            Z ? wn = d((function() {
                                if (ue && !Ne) {
                                    var e = -r * je / (Oe + Le);
                                    e = r > 0 ? Math.floor(e) : Math.ceil(e),
                                    ct += e
                                } else {
                                    var n = -(xn + r);
                                    if (n <= 0)
                                        ct = dt;
                                    else if (n >= ye[nt - 1])
                                        ct = pt;
                                    else
                                        for (var i = 0; i < nt && n >= ye[i]; )
                                            ct = i,
                                            n > ye[i] && r < 0 && (ct += 1),
                                            i++
                                }
                                Or(t, r),
                                bt.emit($r(t) ? "touchEnd" : "dragEnd", ti(t))
                            }
                            )) : vt && Pr(t, r > 0 ? -1 : 1)
                        }
                    }
                    "auto" === e.preventScrollOnTouch && (Ut = !1),
                    mt && (vt = "?"),
                    Ve && !dn && Br()
                }
                function Zr() {
                    (ae || ce).style.height = ye[ct + je] - ye[ct] + "px"
                }
                function Kr() {
                    var e = ke ? (ke + Le) * me / Oe : me / je;
                    return Math.min(Math.ceil(e), me)
                }
                function ei() {
                    if (_e && !Bt && nn !== rn) {
                        var e = rn
                          , t = nn
                          , n = B;
                        for (rn > nn && (e = nn,
                        t = rn,
                        n = P); e < t; )
                            n(Kt[e]),
                            e++;
                        rn = nn
                    }
                }
                function ti(e) {
                    return {
                        container: fe,
                        slideItems: he,
                        navContainer: en,
                        navItems: Kt,
                        controlsContainer: Yt,
                        hasControls: Ht,
                        prevButton: Gt,
                        nextButton: Jt,
                        items: je,
                        slideBy: He,
                        cloneCount: tt,
                        slideCount: me,
                        slideCountNew: nt,
                        index: ct,
                        indexCached: ft,
                        displayIndex: Dn(),
                        navCurrentIndex: an,
                        navCurrentIndexCached: sn,
                        pages: nn,
                        pagesCached: rn,
                        sheet: Qe,
                        isOn: ge,
                        event: e || {}
                    }
                }
                Y && console.warn("No slides found in", e.container)
            }
              , Y = (n(90),
            n(82),
            n(808))
              , X = n.n(Y)
              , G = n(535)
              , J = {
                insert: "head",
                singleton: !1
            };
            u()(G.Z, J);
            G.Z.locals;
            var Q = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
              , Z = function() {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                    if (Q && navigator.userAgent.indexOf(e[t]) >= 0)
                        return 1;
                return 0
            }();
            var K = Q && window.Promise ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0,
                    window.Promise.resolve().then((function() {
                        t = !1,
                        e()
                    }
                    )))
                }
            }
            : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0,
                    setTimeout((function() {
                        t = !1,
                        e()
                    }
                    ), Z))
                }
            }
            ;
            function ee(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }
            function te(e, t) {
                if (1 !== e.nodeType)
                    return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n
            }
            function ne(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }
            function re(e) {
                if (!e)
                    return document.body;
                switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body
                }
                var t = te(e)
                  , n = t.overflow
                  , r = t.overflowX
                  , i = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + i + r) ? e : re(ne(e))
            }
            function ie(e) {
                return e && e.referenceNode ? e.referenceNode : e
            }
            var oe = Q && !(!window.MSInputMethodContext || !document.documentMode)
              , ae = Q && /MSIE 10/.test(navigator.userAgent);
            function se(e) {
                return 11 === e ? oe : 10 === e ? ae : oe || ae
            }
            function ue(e) {
                if (!e)
                    return document.documentElement;
                for (var t = se(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
                    n = (e = e.nextElementSibling).offsetParent;
                var r = n && n.nodeName;
                return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === te(n, "position") ? ue(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }
            function le(e) {
                return null !== e.parentNode ? le(e.parentNode) : e
            }
            function ce(e, t) {
                if (!(e && e.nodeType && t && t.nodeType))
                    return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
                  , r = n ? e : t
                  , i = n ? t : e
                  , o = document.createRange();
                o.setStart(r, 0),
                o.setEnd(i, 0);
                var a, s, u = o.commonAncestorContainer;
                if (e !== u && t !== u || r.contains(i))
                    return "BODY" === (s = (a = u).nodeName) || "HTML" !== s && ue(a.firstElementChild) !== a ? ue(u) : u;
                var l = le(e);
                return l.host ? ce(l.host, t) : ce(e, le(t).host)
            }
            function fe(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
                  , n = "top" === t ? "scrollTop" : "scrollLeft"
                  , r = e.nodeName;
                if ("BODY" === r || "HTML" === r) {
                    var i = e.ownerDocument.documentElement
                      , o = e.ownerDocument.scrollingElement || i;
                    return o[n]
                }
                return e[n]
            }
            function de(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , r = fe(t, "top")
                  , i = fe(t, "left")
                  , o = n ? -1 : 1;
                return e.top += r * o,
                e.bottom += r * o,
                e.left += i * o,
                e.right += i * o,
                e
            }
            function pe(e, t) {
                var n = "x" === t ? "Left" : "Top"
                  , r = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
            }
            function he(e, t, n, r) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], se(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }
            function me(e) {
                var t = e.body
                  , n = e.documentElement
                  , r = se(10) && getComputedStyle(n);
                return {
                    height: he("Height", t, n, r),
                    width: he("Width", t, n, r)
                }
            }
            var ve = function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
              , ge = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , ye = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
              , be = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ;
            function xe(e) {
                return be({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }
            function we(e) {
                var t = {};
                try {
                    if (se(10)) {
                        t = e.getBoundingClientRect();
                        var n = fe(e, "top")
                          , r = fe(e, "left");
                        t.top += n,
                        t.left += r,
                        t.bottom += n,
                        t.right += r
                    } else
                        t = e.getBoundingClientRect()
                } catch (e) {}
                var i = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }
                  , o = "HTML" === e.nodeName ? me(e.ownerDocument) : {}
                  , a = o.width || e.clientWidth || i.width
                  , s = o.height || e.clientHeight || i.height
                  , u = e.offsetWidth - a
                  , l = e.offsetHeight - s;
                if (u || l) {
                    var c = te(e);
                    u -= pe(c, "x"),
                    l -= pe(c, "y"),
                    i.width -= u,
                    i.height -= l
                }
                return xe(i)
            }
            function Te(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , r = se(10)
                  , i = "HTML" === t.nodeName
                  , o = we(e)
                  , a = we(t)
                  , s = re(e)
                  , u = te(t)
                  , l = parseFloat(u.borderTopWidth)
                  , c = parseFloat(u.borderLeftWidth);
                n && i && (a.top = Math.max(a.top, 0),
                a.left = Math.max(a.left, 0));
                var f = xe({
                    top: o.top - a.top - l,
                    left: o.left - a.left - c,
                    width: o.width,
                    height: o.height
                });
                if (f.marginTop = 0,
                f.marginLeft = 0,
                !r && i) {
                    var d = parseFloat(u.marginTop)
                      , p = parseFloat(u.marginLeft);
                    f.top -= l - d,
                    f.bottom -= l - d,
                    f.left -= c - p,
                    f.right -= c - p,
                    f.marginTop = d,
                    f.marginLeft = p
                }
                return (r && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (f = de(f, t)),
                f
            }
            function Ce(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = e.ownerDocument.documentElement
                  , r = Te(e, n)
                  , i = Math.max(n.clientWidth, window.innerWidth || 0)
                  , o = Math.max(n.clientHeight, window.innerHeight || 0)
                  , a = t ? 0 : fe(n)
                  , s = t ? 0 : fe(n, "left")
                  , u = {
                    top: a - r.top + r.marginTop,
                    left: s - r.left + r.marginLeft,
                    width: i,
                    height: o
                };
                return xe(u)
            }
            function Ee(e) {
                var t = e.nodeName;
                if ("BODY" === t || "HTML" === t)
                    return !1;
                if ("fixed" === te(e, "position"))
                    return !0;
                var n = ne(e);
                return !!n && Ee(n)
            }
            function Ae(e) {
                if (!e || !e.parentElement || se())
                    return document.documentElement;
                for (var t = e.parentElement; t && "none" === te(t, "transform"); )
                    t = t.parentElement;
                return t || document.documentElement
            }
            function Se(e, t, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                  , o = {
                    top: 0,
                    left: 0
                }
                  , a = i ? Ae(e) : ce(e, ie(t));
                if ("viewport" === r)
                    o = Ce(a, i);
                else {
                    var s = void 0;
                    "scrollParent" === r ? "BODY" === (s = re(ne(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === r ? e.ownerDocument.documentElement : r;
                    var u = Te(s, a, i);
                    if ("HTML" !== s.nodeName || Ee(a))
                        o = u;
                    else {
                        var l = me(e.ownerDocument)
                          , c = l.height
                          , f = l.width;
                        o.top += u.top - u.marginTop,
                        o.bottom = c + u.top,
                        o.left += u.left - u.marginLeft,
                        o.right = f + u.left
                    }
                }
                var d = "number" == typeof (n = n || 0);
                return o.left += d ? n : n.left || 0,
                o.top += d ? n : n.top || 0,
                o.right -= d ? n : n.right || 0,
                o.bottom -= d ? n : n.bottom || 0,
                o
            }
            function Ne(e) {
                return e.width * e.height
            }
            function ke(e, t, n, r, i) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto"))
                    return e;
                var a = Se(n, r, o, i)
                  , s = {
                    top: {
                        width: a.width,
                        height: t.top - a.top
                    },
                    right: {
                        width: a.right - t.right,
                        height: a.height
                    },
                    bottom: {
                        width: a.width,
                        height: a.bottom - t.bottom
                    },
                    left: {
                        width: t.left - a.left,
                        height: a.height
                    }
                }
                  , u = Object.keys(s).map((function(e) {
                    return be({
                        key: e
                    }, s[e], {
                        area: Ne(s[e])
                    })
                }
                )).sort((function(e, t) {
                    return t.area - e.area
                }
                ))
                  , l = u.filter((function(e) {
                    var t = e.width
                      , r = e.height;
                    return t >= n.clientWidth && r >= n.clientHeight
                }
                ))
                  , c = l.length > 0 ? l[0].key : u[0].key
                  , f = e.split("-")[1];
                return c + (f ? "-" + f : "")
            }
            function De(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                  , i = r ? Ae(t) : ce(t, ie(n));
                return Te(n, i, r)
            }
            function Le(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e)
                  , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
                  , r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + r,
                    height: e.offsetHeight + n
                }
            }
            function Oe(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return t[e]
                }
                ))
            }
            function Me(e, t, n) {
                n = n.split("-")[0];
                var r = Le(e)
                  , i = {
                    width: r.width,
                    height: r.height
                }
                  , o = -1 !== ["right", "left"].indexOf(n)
                  , a = o ? "top" : "left"
                  , s = o ? "left" : "top"
                  , u = o ? "height" : "width"
                  , l = o ? "width" : "height";
                return i[a] = t[a] + t[u] / 2 - r[u] / 2,
                i[s] = n === s ? t[s] - r[l] : t[Oe(s)],
                i
            }
            function je(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }
            function He(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                    if (Array.prototype.findIndex)
                        return e.findIndex((function(e) {
                            return e[t] === n
                        }
                        ));
                    var r = je(e, (function(e) {
                        return e[t] === n
                    }
                    ));
                    return e.indexOf(r)
                }(e, "name", n))).forEach((function(e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && ee(n) && (t.offsets.popper = xe(t.offsets.popper),
                    t.offsets.reference = xe(t.offsets.reference),
                    t = n(t, e))
                }
                )),
                t
            }
            function Pe() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = De(this.state, this.popper, this.reference, this.options.positionFixed),
                    e.placement = ke(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                    e.originalPlacement = e.placement,
                    e.positionFixed = this.options.positionFixed,
                    e.offsets.popper = Me(this.popper, e.offsets.reference, e.placement),
                    e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                    e = He(this.modifiers, e),
                    this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                    this.options.onCreate(e))
                }
            }
            function Be(e, t) {
                return e.some((function(e) {
                    var n = e.name;
                    return e.enabled && n === t
                }
                ))
            }
            function Ie(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                    var i = t[r]
                      , o = i ? "" + i + n : e;
                    if (void 0 !== document.body.style[o])
                        return o
                }
                return null
            }
            function qe() {
                return this.state.isDestroyed = !0,
                Be(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                this.popper.style.position = "",
                this.popper.style.top = "",
                this.popper.style.left = "",
                this.popper.style.right = "",
                this.popper.style.bottom = "",
                this.popper.style.willChange = "",
                this.popper.style[Ie("transform")] = ""),
                this.disableEventListeners(),
                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                this
            }
            function ze(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }
            function Re(e, t, n, r) {
                var i = "BODY" === e.nodeName
                  , o = i ? e.ownerDocument.defaultView : e;
                o.addEventListener(t, n, {
                    passive: !0
                }),
                i || Re(re(o.parentNode), t, n, r),
                r.push(o)
            }
            function Fe(e, t, n, r) {
                n.updateBound = r,
                ze(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var i = re(e);
                return Re(i, "scroll", n.updateBound, n.scrollParents),
                n.scrollElement = i,
                n.eventsEnabled = !0,
                n
            }
            function We() {
                this.state.eventsEnabled || (this.state = Fe(this.reference, this.options, this.state, this.scheduleUpdate))
            }
            function _e() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
                this.state = (e = this.reference,
                t = this.state,
                ze(e).removeEventListener("resize", t.updateBound),
                t.scrollParents.forEach((function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                }
                )),
                t.updateBound = null,
                t.scrollParents = [],
                t.scrollElement = null,
                t.eventsEnabled = !1,
                t))
            }
            function Ue(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }
            function $e(e, t) {
                Object.keys(t).forEach((function(n) {
                    var r = "";
                    -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Ue(t[n]) && (r = "px"),
                    e.style[n] = t[n] + r
                }
                ))
            }
            var Ve = Q && /Firefox/i.test(navigator.userAgent);
            function Ye(e, t, n) {
                var r = je(e, (function(e) {
                    return e.name === t
                }
                ))
                  , i = !!r && e.some((function(e) {
                    return e.name === n && e.enabled && e.order < r.order
                }
                ));
                if (!i) {
                    var o = "`" + t + "`"
                      , a = "`" + n + "`";
                    console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                }
                return i
            }
            var Xe = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
              , Ge = Xe.slice(3);
            function Je(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = Ge.indexOf(e)
                  , r = Ge.slice(n + 1).concat(Ge.slice(0, n));
                return t ? r.reverse() : r
            }
            var Qe = "flip"
              , Ze = "clockwise"
              , Ke = "counterclockwise";
            function et(e, t, n, r) {
                var i = [0, 0]
                  , o = -1 !== ["right", "left"].indexOf(r)
                  , a = e.split(/(\+|\-)/).map((function(e) {
                    return e.trim()
                }
                ))
                  , s = a.indexOf(je(a, (function(e) {
                    return -1 !== e.search(/,|\s/)
                }
                )));
                a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var u = /\s*,\s*|\s+/
                  , l = -1 !== s ? [a.slice(0, s).concat([a[s].split(u)[0]]), [a[s].split(u)[1]].concat(a.slice(s + 1))] : [a];
                return l = l.map((function(e, r) {
                    var i = (1 === r ? !o : o) ? "height" : "width"
                      , a = !1;
                    return e.reduce((function(e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                        a = !0,
                        e) : a ? (e[e.length - 1] += t,
                        a = !1,
                        e) : e.concat(t)
                    }
                    ), []).map((function(e) {
                        return function(e, t, n, r) {
                            var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                              , o = +i[1]
                              , a = i[2];
                            if (!o)
                                return e;
                            if (0 === a.indexOf("%")) {
                                return xe("%p" === a ? n : r)[t] / 100 * o
                            }
                            if ("vh" === a || "vw" === a)
                                return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                            return o
                        }(e, i, t, n)
                    }
                    ))
                }
                )),
                l.forEach((function(e, t) {
                    e.forEach((function(n, r) {
                        Ue(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
                    }
                    ))
                }
                )),
                i
            }
            var tt = {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement
                          , n = t.split("-")[0]
                          , r = t.split("-")[1];
                        if (r) {
                            var i = e.offsets
                              , o = i.reference
                              , a = i.popper
                              , s = -1 !== ["bottom", "top"].indexOf(n)
                              , u = s ? "left" : "top"
                              , l = s ? "width" : "height"
                              , c = {
                                start: ye({}, u, o[u]),
                                end: ye({}, u, o[u] + o[l] - a[l])
                            };
                            e.offsets.popper = be({}, a, c[r])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.offset
                          , r = e.placement
                          , i = e.offsets
                          , o = i.popper
                          , a = i.reference
                          , s = r.split("-")[0]
                          , u = void 0;
                        return u = Ue(+n) ? [+n, 0] : et(n, o, a, s),
                        "left" === s ? (o.top += u[0],
                        o.left -= u[1]) : "right" === s ? (o.top += u[0],
                        o.left += u[1]) : "top" === s ? (o.left += u[0],
                        o.top -= u[1]) : "bottom" === s && (o.left += u[0],
                        o.top += u[1]),
                        e.popper = o,
                        e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.boundariesElement || ue(e.instance.popper);
                        e.instance.reference === n && (n = ue(n));
                        var r = Ie("transform")
                          , i = e.instance.popper.style
                          , o = i.top
                          , a = i.left
                          , s = i[r];
                        i.top = "",
                        i.left = "",
                        i[r] = "";
                        var u = Se(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        i.top = o,
                        i.left = a,
                        i[r] = s,
                        t.boundaries = u;
                        var l = t.priority
                          , c = e.offsets.popper
                          , f = {
                            primary: function(e) {
                                var n = c[e];
                                return c[e] < u[e] && !t.escapeWithReference && (n = Math.max(c[e], u[e])),
                                ye({}, e, n)
                            },
                            secondary: function(e) {
                                var n = "right" === e ? "left" : "top"
                                  , r = c[n];
                                return c[e] > u[e] && !t.escapeWithReference && (r = Math.min(c[n], u[e] - ("right" === e ? c.width : c.height))),
                                ye({}, n, r)
                            }
                        };
                        return l.forEach((function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            c = be({}, c, f[t](e))
                        }
                        )),
                        e.offsets.popper = c,
                        e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets
                          , n = t.popper
                          , r = t.reference
                          , i = e.placement.split("-")[0]
                          , o = Math.floor
                          , a = -1 !== ["top", "bottom"].indexOf(i)
                          , s = a ? "right" : "bottom"
                          , u = a ? "left" : "top"
                          , l = a ? "width" : "height";
                        return n[s] < o(r[u]) && (e.offsets.popper[u] = o(r[u]) - n[l]),
                        n[u] > o(r[s]) && (e.offsets.popper[u] = o(r[s])),
                        e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!Ye(e.instance.modifiers, "arrow", "keepTogether"))
                            return e;
                        var r = t.element;
                        if ("string" == typeof r) {
                            if (!(r = e.instance.popper.querySelector(r)))
                                return e
                        } else if (!e.instance.popper.contains(r))
                            return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                            e;
                        var i = e.placement.split("-")[0]
                          , o = e.offsets
                          , a = o.popper
                          , s = o.reference
                          , u = -1 !== ["left", "right"].indexOf(i)
                          , l = u ? "height" : "width"
                          , c = u ? "Top" : "Left"
                          , f = c.toLowerCase()
                          , d = u ? "left" : "top"
                          , p = u ? "bottom" : "right"
                          , h = Le(r)[l];
                        s[p] - h < a[f] && (e.offsets.popper[f] -= a[f] - (s[p] - h)),
                        s[f] + h > a[p] && (e.offsets.popper[f] += s[f] + h - a[p]),
                        e.offsets.popper = xe(e.offsets.popper);
                        var m = s[f] + s[l] / 2 - h / 2
                          , v = te(e.instance.popper)
                          , g = parseFloat(v["margin" + c])
                          , y = parseFloat(v["border" + c + "Width"])
                          , b = m - e.offsets.popper[f] - g - y;
                        return b = Math.max(Math.min(a[l] - h, b), 0),
                        e.arrowElement = r,
                        e.offsets.arrow = (ye(n = {}, f, Math.round(b)),
                        ye(n, d, ""),
                        n),
                        e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (Be(e.instance.modifiers, "inner"))
                            return e;
                        if (e.flipped && e.placement === e.originalPlacement)
                            return e;
                        var n = Se(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                          , r = e.placement.split("-")[0]
                          , i = Oe(r)
                          , o = e.placement.split("-")[1] || ""
                          , a = [];
                        switch (t.behavior) {
                        case Qe:
                            a = [r, i];
                            break;
                        case Ze:
                            a = Je(r);
                            break;
                        case Ke:
                            a = Je(r, !0);
                            break;
                        default:
                            a = t.behavior
                        }
                        return a.forEach((function(s, u) {
                            if (r !== s || a.length === u + 1)
                                return e;
                            r = e.placement.split("-")[0],
                            i = Oe(r);
                            var l = e.offsets.popper
                              , c = e.offsets.reference
                              , f = Math.floor
                              , d = "left" === r && f(l.right) > f(c.left) || "right" === r && f(l.left) < f(c.right) || "top" === r && f(l.bottom) > f(c.top) || "bottom" === r && f(l.top) < f(c.bottom)
                              , p = f(l.left) < f(n.left)
                              , h = f(l.right) > f(n.right)
                              , m = f(l.top) < f(n.top)
                              , v = f(l.bottom) > f(n.bottom)
                              , g = "left" === r && p || "right" === r && h || "top" === r && m || "bottom" === r && v
                              , y = -1 !== ["top", "bottom"].indexOf(r)
                              , b = !!t.flipVariations && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && m || !y && "end" === o && v)
                              , x = !!t.flipVariationsByContent && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && v || !y && "end" === o && m)
                              , w = b || x;
                            (d || g || w) && (e.flipped = !0,
                            (d || g) && (r = a[u + 1]),
                            w && (o = function(e) {
                                return "end" === e ? "start" : "start" === e ? "end" : e
                            }(o)),
                            e.placement = r + (o ? "-" + o : ""),
                            e.offsets.popper = be({}, e.offsets.popper, Me(e.instance.popper, e.offsets.reference, e.placement)),
                            e = He(e.instance.modifiers, e, "flip"))
                        }
                        )),
                        e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement
                          , n = t.split("-")[0]
                          , r = e.offsets
                          , i = r.popper
                          , o = r.reference
                          , a = -1 !== ["left", "right"].indexOf(n)
                          , s = -1 === ["top", "left"].indexOf(n);
                        return i[a ? "left" : "top"] = o[n] - (s ? i[a ? "width" : "height"] : 0),
                        e.placement = Oe(t),
                        e.offsets.popper = xe(i),
                        e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!Ye(e.instance.modifiers, "hide", "preventOverflow"))
                            return e;
                        var t = e.offsets.reference
                          , n = je(e.instance.modifiers, (function(e) {
                            return "preventOverflow" === e.name
                        }
                        )).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide)
                                return e;
                            e.hide = !0,
                            e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide)
                                return e;
                            e.hide = !1,
                            e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x
                          , r = t.y
                          , i = e.offsets.popper
                          , o = je(e.instance.modifiers, (function(e) {
                            return "applyStyle" === e.name
                        }
                        )).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a = void 0 !== o ? o : t.gpuAcceleration
                          , s = ue(e.instance.popper)
                          , u = we(s)
                          , l = {
                            position: i.position
                        }
                          , c = function(e, t) {
                            var n = e.offsets
                              , r = n.popper
                              , i = n.reference
                              , o = Math.round
                              , a = Math.floor
                              , s = function(e) {
                                return e
                            }
                              , u = o(i.width)
                              , l = o(r.width)
                              , c = -1 !== ["left", "right"].indexOf(e.placement)
                              , f = -1 !== e.placement.indexOf("-")
                              , d = t ? c || f || u % 2 == l % 2 ? o : a : s
                              , p = t ? o : s;
                            return {
                                left: d(u % 2 == 1 && l % 2 == 1 && !f && t ? r.left - 1 : r.left),
                                top: p(r.top),
                                bottom: p(r.bottom),
                                right: d(r.right)
                            }
                        }(e, window.devicePixelRatio < 2 || !Ve)
                          , f = "bottom" === n ? "top" : "bottom"
                          , d = "right" === r ? "left" : "right"
                          , p = Ie("transform")
                          , h = void 0
                          , m = void 0;
                        if (m = "bottom" === f ? "HTML" === s.nodeName ? -s.clientHeight + c.bottom : -u.height + c.bottom : c.top,
                        h = "right" === d ? "HTML" === s.nodeName ? -s.clientWidth + c.right : -u.width + c.right : c.left,
                        a && p)
                            l[p] = "translate3d(" + h + "px, " + m + "px, 0)",
                            l[f] = 0,
                            l[d] = 0,
                            l.willChange = "transform";
                        else {
                            var v = "bottom" === f ? -1 : 1
                              , g = "right" === d ? -1 : 1;
                            l[f] = m * v,
                            l[d] = h * g,
                            l.willChange = f + ", " + d
                        }
                        var y = {
                            "x-placement": e.placement
                        };
                        return e.attributes = be({}, y, e.attributes),
                        e.styles = be({}, l, e.styles),
                        e.arrowStyles = be({}, e.offsets.arrow, e.arrowStyles),
                        e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return $e(e.instance.popper, e.styles),
                        t = e.instance.popper,
                        n = e.attributes,
                        Object.keys(n).forEach((function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }
                        )),
                        e.arrowElement && Object.keys(e.arrowStyles).length && $e(e.arrowElement, e.arrowStyles),
                        e
                    },
                    onLoad: function(e, t, n, r, i) {
                        var o = De(i, t, e, n.positionFixed)
                          , a = ke(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a),
                        $e(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }),
                        n
                    },
                    gpuAcceleration: void 0
                }
            }
              , nt = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function() {},
                onUpdate: function() {},
                modifiers: tt
            }
              , rt = function() {
                function e(t, n) {
                    var r = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    ve(this, e),
                    this.scheduleUpdate = function() {
                        return requestAnimationFrame(r.update)
                    }
                    ,
                    this.update = K(this.update.bind(this)),
                    this.options = be({}, e.Defaults, i),
                    this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    },
                    this.reference = t && t.jquery ? t[0] : t,
                    this.popper = n && n.jquery ? n[0] : n,
                    this.options.modifiers = {},
                    Object.keys(be({}, e.Defaults.modifiers, i.modifiers)).forEach((function(t) {
                        r.options.modifiers[t] = be({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                    }
                    )),
                    this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                        return be({
                            name: e
                        }, r.options.modifiers[e])
                    }
                    )).sort((function(e, t) {
                        return e.order - t.order
                    }
                    )),
                    this.modifiers.forEach((function(e) {
                        e.enabled && ee(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                    }
                    )),
                    this.update();
                    var o = this.options.eventsEnabled;
                    o && this.enableEventListeners(),
                    this.state.eventsEnabled = o
                }
                return ge(e, [{
                    key: "update",
                    value: function() {
                        return Pe.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return qe.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return We.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return _e.call(this)
                    }
                }]),
                e
            }();
            rt.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils,
            rt.placements = Xe,
            rt.Defaults = nt;
            const it = rt;
            function ot() {
                return ot = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                ot.apply(this, arguments)
            }
            var at = "5.2.1";
            function st(e, t) {
                e.innerHTML = t
            }
            function ut(e) {
                return !(!e || !e._tippy || e._tippy.reference !== e)
            }
            function lt(e, t) {
                return {}.hasOwnProperty.call(e, t)
            }
            function ct(e) {
                return ht(e) ? [e] : function(e) {
                    return pt(e, "NodeList")
                }(e) ? Tt(e) : Array.isArray(e) ? e : Tt(document.querySelectorAll(e))
            }
            function ft(e, t, n) {
                if (Array.isArray(e)) {
                    var r = e[t];
                    return null == r ? Array.isArray(n) ? n[t] : n : r
                }
                return e
            }
            function dt(e, t) {
                return e && e.modifiers && e.modifiers[t]
            }
            function pt(e, t) {
                var n = {}.toString.call(e);
                return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1
            }
            function ht(e) {
                return pt(e, "Element")
            }
            function mt(e, t) {
                return "function" == typeof e ? e.apply(void 0, t) : e
            }
            function vt(e, t, n, r) {
                e.filter((function(e) {
                    return e.name === t
                }
                ))[0][n] = r
            }
            function gt() {
                return document.createElement("div")
            }
            function yt(e, t) {
                e.forEach((function(e) {
                    e && (e.style.transitionDuration = t + "ms")
                }
                ))
            }
            function bt(e, t) {
                e.forEach((function(e) {
                    e && e.setAttribute("data-state", t)
                }
                ))
            }
            function xt(e, t) {
                return 0 === t ? e : function(r) {
                    clearTimeout(n),
                    n = setTimeout((function() {
                        e(r)
                    }
                    ), t)
                }
                ;
                var n
            }
            function wt(e, t, n) {
                e && e !== t && e.apply(void 0, n)
            }
            function Tt(e) {
                return [].slice.call(e)
            }
            function Ct(e, t) {
                return e.indexOf(t) > -1
            }
            function Et(e) {
                return e.split(/\s+/).filter(Boolean)
            }
            function At(e, t) {
                return void 0 !== e ? e : t
            }
            function St(e) {
                return [].concat(e)
            }
            function Nt(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }
            function kt(e) {
                return "number" == typeof e ? e : parseFloat(e)
            }
            function Dt(e, t, n) {
                void 0 === t && (t = 5);
                var r = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                };
                return Object.keys(r).reduce((function(r, i) {
                    return r[i] = "number" == typeof t ? t : t[i],
                    e === i && (r[i] = "number" == typeof t ? t + n : t[e] + n),
                    r
                }
                ), r)
            }
            var Lt = ot({
                allowHTML: !0,
                animation: "fade",
                appendTo: function() {
                    return document.body
                },
                aria: "describedby",
                arrow: !0,
                boundary: "scrollParent",
                content: "",
                delay: 0,
                distance: 10,
                duration: [300, 250],
                flip: !0,
                flipBehavior: "flip",
                flipOnUpdate: !1,
                hideOnClick: !0,
                ignoreAttributes: !1,
                inertia: !1,
                interactive: !1,
                interactiveBorder: 2,
                interactiveDebounce: 0,
                lazy: !0,
                maxWidth: 350,
                multiple: !1,
                offset: 0,
                onAfterUpdate: function() {},
                onBeforeUpdate: function() {},
                onCreate: function() {},
                onDestroy: function() {},
                onHidden: function() {},
                onHide: function() {},
                onMount: function() {},
                onShow: function() {},
                onShown: function() {},
                onTrigger: function() {},
                onUntrigger: function() {},
                placement: "top",
                plugins: [],
                popperOptions: {},
                role: "tooltip",
                showOnCreate: !1,
                theme: "",
                touch: !0,
                trigger: "mouseenter focus",
                triggerTarget: null,
                updateDuration: 0,
                zIndex: 9999
            }, {
                animateFill: !1,
                followCursor: !1,
                inlinePositioning: !1,
                sticky: !1
            })
              , Ot = Object.keys(Lt)
              , Mt = ["arrow", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions"]
              , jt = function(e) {
                Object.keys(e).forEach((function(t) {
                    Lt[t] = e[t]
                }
                ))
            };
            function Ht(e) {
                var t = (e.plugins || []).reduce((function(t, n) {
                    var r = n.name
                      , i = n.defaultValue;
                    return r && (t[r] = void 0 !== e[r] ? e[r] : i),
                    t
                }
                ), {});
                return ot({}, e, {}, t)
            }
            function Pt(e, t) {
                var n = ot({}, t, {
                    content: mt(t.content, [e])
                }, t.ignoreAttributes ? {} : function(e, t) {
                    return (t ? Object.keys(Ht(ot({}, Lt, {
                        plugins: t
                    }))) : Ot).reduce((function(t, n) {
                        var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                        if (!r)
                            return t;
                        if ("content" === n)
                            t[n] = r;
                        else
                            try {
                                t[n] = JSON.parse(r)
                            } catch (e) {
                                t[n] = r
                            }
                        return t
                    }
                    ), {})
                }(e, t.plugins));
                return n.interactive && (n.aria = null),
                n
            }
            var Bt = {
                passive: !0
            }
              , It = "tippy-popper"
              , qt = "tippy-tooltip"
              , zt = "tippy-content"
              , Rt = "tippy-arrow"
              , Ft = "tippy-svg-arrow"
              , Wt = {
                isTouch: !1
            }
              , _t = 0;
            function Ut() {
                Wt.isTouch || (Wt.isTouch = !0,
                window.performance && document.addEventListener("mousemove", $t))
            }
            function $t() {
                var e = performance.now();
                e - _t < 20 && (Wt.isTouch = !1,
                document.removeEventListener("mousemove", $t)),
                _t = e
            }
            function Vt() {
                var e = document.activeElement;
                if (ut(e)) {
                    var t = e._tippy;
                    e.blur && !t.state.isVisible && e.blur()
                }
            }
            var Yt = "undefined" != typeof window && "undefined" != typeof document
              , Xt = Yt ? navigator.userAgent : ""
              , Gt = /MSIE |Trident\//.test(Xt)
              , Jt = Yt && /iPhone|iPad|iPod/.test(navigator.platform);
            function Qt(e) {
                var t = e && Jt && Wt.isTouch;
                document.body.classList[t ? "add" : "remove"]("tippy-iOS")
            }
            function Zt(e) {
                return e.split("-")[0]
            }
            function Kt(e) {
                e.setAttribute("data-inertia", "")
            }
            function en(e) {
                e.setAttribute("data-interactive", "")
            }
            function tn(e, t) {
                if (ht(t.content))
                    st(e, ""),
                    e.appendChild(t.content);
                else if ("function" != typeof t.content) {
                    e[t.allowHTML ? "innerHTML" : "textContent"] = t.content
                }
            }
            function nn(e) {
                return {
                    tooltip: e.querySelector(".tippy-tooltip"),
                    content: e.querySelector(".tippy-content"),
                    arrow: e.querySelector(".tippy-arrow") || e.querySelector(".tippy-svg-arrow")
                }
            }
            function rn(e) {
                var t = gt();
                return !0 === e ? t.className = Rt : (t.className = Ft,
                ht(e) ? t.appendChild(e) : st(t, e)),
                t
            }
            function on(e, t) {
                var n = gt();
                n.className = It,
                n.style.position = "absolute",
                n.style.top = "0",
                n.style.left = "0";
                var r = gt();
                r.className = qt,
                r.id = "tippy-" + e,
                r.setAttribute("data-state", "hidden"),
                r.setAttribute("tabindex", "-1"),
                un(r, "add", t.theme);
                var i = gt();
                return i.className = zt,
                i.setAttribute("data-state", "hidden"),
                t.interactive && en(r),
                t.arrow && (r.setAttribute("data-arrow", ""),
                r.appendChild(rn(t.arrow))),
                t.inertia && Kt(r),
                tn(i, t),
                r.appendChild(i),
                n.appendChild(r),
                an(n, t, t),
                n
            }
            function an(e, t, n) {
                var r, i = nn(e), o = i.tooltip, a = i.content, s = i.arrow;
                e.style.zIndex = "" + n.zIndex,
                o.setAttribute("data-animation", n.animation),
                o.style.maxWidth = "number" == typeof (r = n.maxWidth) ? r + "px" : r,
                n.role ? o.setAttribute("role", n.role) : o.removeAttribute("role"),
                t.content !== n.content && tn(a, n),
                !t.arrow && n.arrow ? (o.appendChild(rn(n.arrow)),
                o.setAttribute("data-arrow", "")) : t.arrow && !n.arrow ? (o.removeChild(s),
                o.removeAttribute("data-arrow")) : t.arrow !== n.arrow && (o.removeChild(s),
                o.appendChild(rn(n.arrow))),
                !t.interactive && n.interactive ? en(o) : t.interactive && !n.interactive && function(e) {
                    e.removeAttribute("data-interactive")
                }(o),
                !t.inertia && n.inertia ? Kt(o) : t.inertia && !n.inertia && function(e) {
                    e.removeAttribute("data-inertia")
                }(o),
                t.theme !== n.theme && (un(o, "remove", t.theme),
                un(o, "add", n.theme))
            }
            function sn(e, t, n) {
                ["transitionend", "webkitTransitionEnd"].forEach((function(r) {
                    e[t + "EventListener"](r, n)
                }
                ))
            }
            function un(e, t, n) {
                Et(n).forEach((function(n) {
                    e.classList[t](n + "-theme")
                }
                ))
            }
            var ln = 1
              , cn = []
              , fn = [];
            function dn(e, t) {
                var n, r, i, o = Pt(e, ot({}, Lt, {}, Ht(t)));
                if (!o.multiple && e._tippy)
                    return null;
                var a, s, u, l, c, f, d, p = !1, h = !1, m = !1, v = 0, g = [], y = xt(V, o.interactiveDebounce), b = (c = o.triggerTarget || e,
                (f = St(c)[0]) && f.ownerDocument || document), x = ln++, w = on(x, o), T = nn(w), C = (d = o.plugins).filter((function(e, t) {
                    return d.indexOf(e) === t
                }
                )), E = T.tooltip, A = T.content, S = [E, A], N = {
                    id: x,
                    reference: e,
                    popper: w,
                    popperChildren: T,
                    popperInstance: null,
                    props: o,
                    state: {
                        currentPlacement: null,
                        isEnabled: !0,
                        isVisible: !1,
                        isDestroyed: !1,
                        isMounted: !1,
                        isShown: !1
                    },
                    plugins: C,
                    clearDelayTimeouts: function() {
                        clearTimeout(n),
                        clearTimeout(r),
                        cancelAnimationFrame(i)
                    },
                    setProps: function(t) {
                        0;
                        if (N.state.isDestroyed)
                            return;
                        0;
                        H("onBeforeUpdate", [N, t]),
                        U();
                        var n = N.props
                          , r = Pt(e, ot({}, N.props, {}, t, {
                            ignoreAttributes: !0
                        }));
                        r.ignoreAttributes = At(t.ignoreAttributes, n.ignoreAttributes),
                        N.props = r,
                        _(),
                        n.interactiveDebounce !== r.interactiveDebounce && (I(),
                        y = xt(V, r.interactiveDebounce));
                        an(w, n, r),
                        N.popperChildren = nn(w),
                        n.triggerTarget && !r.triggerTarget ? St(n.triggerTarget).forEach((function(e) {
                            e.removeAttribute("aria-expanded")
                        }
                        )) : r.triggerTarget && e.removeAttribute("aria-expanded");
                        if (B(),
                        N.popperInstance)
                            if (Mt.some((function(e) {
                                return lt(t, e) && t[e] !== n[e]
                            }
                            ))) {
                                var i = N.popperInstance.reference;
                                N.popperInstance.destroy(),
                                J(),
                                N.popperInstance.reference = i,
                                N.state.isVisible && N.popperInstance.enableEventListeners()
                            } else
                                N.popperInstance.update();
                        H("onAfterUpdate", [N, t])
                    },
                    setContent: function(e) {
                        N.setProps({
                            content: e
                        })
                    },
                    show: function(e) {
                        void 0 === e && (e = ft(N.props.duration, 0, Lt.duration));
                        0;
                        var t = N.state.isVisible
                          , n = N.state.isDestroyed
                          , r = !N.state.isEnabled
                          , i = Wt.isTouch && !N.props.touch;
                        if (t || n || r || i)
                            return;
                        if (M().hasAttribute("disabled"))
                            return;
                        N.popperInstance || J();
                        if (H("onShow", [N], !1),
                        !1 === N.props.onShow(N))
                            return;
                        z(),
                        w.style.visibility = "visible",
                        N.state.isVisible = !0,
                        N.state.isMounted || yt(S.concat(w), 0);
                        s = function() {
                            N.state.isVisible && (yt([w], N.props.updateDuration),
                            yt(S, e),
                            bt(S, "visible"),
                            P(),
                            B(),
                            Nt(fn, N),
                            Qt(!0),
                            N.state.isMounted = !0,
                            H("onMount", [N]),
                            function(e, t) {
                                F(e, t)
                            }(e, (function() {
                                N.state.isShown = !0,
                                H("onShown", [N])
                            }
                            )))
                        }
                        ,
                        function() {
                            v = 0;
                            var e, t = N.props.appendTo, n = M();
                            e = N.props.interactive && t === Lt.appendTo || "parent" === t ? n.parentNode : mt(t, [n]);
                            e.contains(w) || e.appendChild(w);
                            0;
                            vt(N.popperInstance.modifiers, "flip", "enabled", N.props.flip),
                            N.popperInstance.enableEventListeners(),
                            N.popperInstance.update()
                        }()
                    },
                    hide: function(e) {
                        void 0 === e && (e = ft(N.props.duration, 1, Lt.duration));
                        0;
                        var t = !N.state.isVisible && !p
                          , n = N.state.isDestroyed
                          , r = !N.state.isEnabled && !p;
                        if (t || n || r)
                            return;
                        if (H("onHide", [N], !1),
                        !1 === N.props.onHide(N) && !p)
                            return;
                        R(),
                        w.style.visibility = "hidden",
                        N.state.isVisible = !1,
                        N.state.isShown = !1,
                        yt(S, e),
                        bt(S, "hidden"),
                        P(),
                        B(),
                        function(e, t) {
                            F(e, (function() {
                                !N.state.isVisible && w.parentNode && w.parentNode.contains(w) && t()
                            }
                            ))
                        }(e, (function() {
                            N.popperInstance.disableEventListeners(),
                            N.popperInstance.options.placement = N.props.placement,
                            w.parentNode.removeChild(w),
                            0 === (fn = fn.filter((function(e) {
                                return e !== N
                            }
                            ))).length && Qt(!1),
                            N.state.isMounted = !1,
                            H("onHidden", [N])
                        }
                        ))
                    },
                    enable: function() {
                        N.state.isEnabled = !0
                    },
                    disable: function() {
                        N.hide(),
                        N.state.isEnabled = !1
                    },
                    destroy: function() {
                        0;
                        if (N.state.isDestroyed)
                            return;
                        p = !0,
                        N.clearDelayTimeouts(),
                        N.hide(0),
                        U(),
                        delete e._tippy,
                        N.popperInstance && N.popperInstance.destroy();
                        p = !1,
                        N.state.isDestroyed = !0,
                        H("onDestroy", [N])
                    }
                };
                e._tippy = N,
                w._tippy = N;
                var k = C.map((function(e) {
                    return e.fn(N)
                }
                ))
                  , D = e.hasAttribute("aria-expanded");
                return _(),
                B(),
                o.lazy || J(),
                H("onCreate", [N]),
                o.showOnCreate && Z(),
                w.addEventListener("mouseenter", (function() {
                    N.props.interactive && N.state.isVisible && N.clearDelayTimeouts()
                }
                )),
                w.addEventListener("mouseleave", (function(e) {
                    N.props.interactive && Ct(N.props.trigger, "mouseenter") && (y(e),
                    b.addEventListener("mousemove", y))
                }
                )),
                N;
                function L() {
                    var e = N.props.touch;
                    return Array.isArray(e) ? e : [e, 0]
                }
                function O() {
                    return "hold" === L()[0]
                }
                function M() {
                    return l || e
                }
                function j(e) {
                    return N.state.isMounted && !N.state.isVisible || Wt.isTouch || a && "focus" === a.type ? 0 : ft(N.props.delay, e ? 0 : 1, Lt.delay)
                }
                function H(e, t, n) {
                    var r;
                    (void 0 === n && (n = !0),
                    k.forEach((function(n) {
                        lt(n, e) && n[e].apply(n, t)
                    }
                    )),
                    n) && (r = N.props)[e].apply(r, t)
                }
                function P() {
                    var t = N.props.aria;
                    if (t) {
                        var n = "aria-" + t
                          , r = E.id;
                        St(N.props.triggerTarget || e).forEach((function(e) {
                            var t = e.getAttribute(n);
                            if (N.state.isVisible)
                                e.setAttribute(n, t ? t + " " + r : r);
                            else {
                                var i = t && t.replace(r, "").trim();
                                i ? e.setAttribute(n, i) : e.removeAttribute(n)
                            }
                        }
                        ))
                    }
                }
                function B() {
                    D || St(N.props.triggerTarget || e).forEach((function(e) {
                        N.props.interactive ? e.setAttribute("aria-expanded", N.state.isVisible && e === M() ? "true" : "false") : e.removeAttribute("aria-expanded")
                    }
                    ))
                }
                function I() {
                    b.body.removeEventListener("mouseleave", K),
                    b.removeEventListener("mousemove", y),
                    cn = cn.filter((function(e) {
                        return e !== y
                    }
                    ))
                }
                function q(e) {
                    if (!N.props.interactive || !w.contains(e.target)) {
                        if (M().contains(e.target)) {
                            if (Wt.isTouch)
                                return;
                            if (N.state.isVisible && Ct(N.props.trigger, "click"))
                                return
                        }
                        !0 === N.props.hideOnClick && (h = !1,
                        N.clearDelayTimeouts(),
                        N.hide(),
                        m = !0,
                        setTimeout((function() {
                            m = !1
                        }
                        )),
                        N.state.isMounted || R())
                    }
                }
                function z() {
                    b.addEventListener("mousedown", q, !0)
                }
                function R() {
                    b.removeEventListener("mousedown", q, !0)
                }
                function F(e, t) {
                    function n(e) {
                        e.target === E && (sn(E, "remove", n),
                        t())
                    }
                    if (0 === e)
                        return t();
                    sn(E, "remove", u),
                    sn(E, "add", n),
                    u = n
                }
                function W(t, n, r) {
                    void 0 === r && (r = !1),
                    St(N.props.triggerTarget || e).forEach((function(e) {
                        e.addEventListener(t, n, r),
                        g.push({
                            node: e,
                            eventType: t,
                            handler: n,
                            options: r
                        })
                    }
                    ))
                }
                function _() {
                    O() && (W("touchstart", $, Bt),
                    W("touchend", Y, Bt)),
                    Et(N.props.trigger).forEach((function(e) {
                        if ("manual" !== e)
                            switch (W(e, $),
                            e) {
                            case "mouseenter":
                                W("mouseleave", Y);
                                break;
                            case "focus":
                                W(Gt ? "focusout" : "blur", X);
                                break;
                            case "focusin":
                                W("focusout", X)
                            }
                    }
                    ))
                }
                function U() {
                    g.forEach((function(e) {
                        var t = e.node
                          , n = e.eventType
                          , r = e.handler
                          , i = e.options;
                        t.removeEventListener(n, r, i)
                    }
                    )),
                    g = []
                }
                function $(e) {
                    var t = !1;
                    if (N.state.isEnabled && !G(e) && !m) {
                        if (a = e,
                        l = e.currentTarget,
                        B(),
                        !N.state.isVisible && function(e) {
                            return pt(e, "MouseEvent")
                        }(e) && cn.forEach((function(t) {
                            return t(e)
                        }
                        )),
                        "click" !== e.type || Ct(N.props.trigger, "mouseenter") && !h || !1 === N.props.hideOnClick || !N.state.isVisible) {
                            var r = L()
                              , i = r[0]
                              , o = r[1];
                            Wt.isTouch && "hold" === i && o ? n = setTimeout((function() {
                                Z(e)
                            }
                            ), o) : Z(e)
                        } else
                            t = !0;
                        "click" === e.type && (h = !t),
                        t && K(e)
                    }
                }
                function V(t) {
                    var n = function(e, t) {
                        for (; e; ) {
                            if (t(e))
                                return e;
                            e = e.parentElement
                        }
                        return null
                    }(t.target, (function(t) {
                        return t === e || t === w
                    }
                    ));
                    if ("mousemove" !== t.type || !n) {
                        var r = Tt(w.querySelectorAll(".tippy-popper")).concat(w).map((function(e) {
                            var t = e._tippy
                              , n = t.popperChildren.tooltip
                              , r = t.props.interactiveBorder;
                            return {
                                popperRect: e.getBoundingClientRect(),
                                tooltipRect: n.getBoundingClientRect(),
                                interactiveBorder: r
                            }
                        }
                        ));
                        (function(e, t) {
                            var n = t.clientX
                              , r = t.clientY;
                            return e.every((function(e) {
                                var t = e.popperRect
                                  , i = e.tooltipRect
                                  , o = e.interactiveBorder
                                  , a = Math.min(t.top, i.top)
                                  , s = Math.max(t.right, i.right)
                                  , u = Math.max(t.bottom, i.bottom)
                                  , l = Math.min(t.left, i.left);
                                return a - r > o || r - u > o || l - n > o || n - s > o
                            }
                            ))
                        }
                        )(r, t) && (I(),
                        K(t))
                    }
                }
                function Y(e) {
                    if (!(G(e) || Ct(N.props.trigger, "click") && h))
                        return N.props.interactive ? (b.body.addEventListener("mouseleave", K),
                        b.addEventListener("mousemove", y),
                        Nt(cn, y),
                        void y(e)) : void K(e)
                }
                function X(e) {
                    (Ct(N.props.trigger, "focusin") || e.target === M()) && (N.props.interactive && e.relatedTarget && w.contains(e.relatedTarget) || K(e))
                }
                function G(e) {
                    var t = "ontouchstart"in window
                      , n = Ct(e.type, "touch")
                      , r = O();
                    return t && Wt.isTouch && r && !n || Wt.isTouch && !r && n
                }
                function J() {
                    var t, n = N.props.popperOptions, r = N.popperChildren.arrow, i = dt(n, "flip"), o = dt(n, "preventOverflow");
                    function a(e) {
                        var n = N.state.currentPlacement;
                        N.state.currentPlacement = e.placement,
                        N.props.flip && !N.props.flipOnUpdate && (e.flipped && (N.popperInstance.options.placement = e.placement),
                        vt(N.popperInstance.modifiers, "flip", "enabled", !1)),
                        E.setAttribute("data-placement", e.placement),
                        !1 !== e.attributes["x-out-of-boundaries"] ? E.setAttribute("data-out-of-boundaries", "") : E.removeAttribute("data-out-of-boundaries");
                        var r = Zt(e.placement)
                          , i = Ct(["top", "bottom"], r)
                          , o = Ct(["bottom", "right"], r);
                        E.style.top = "0",
                        E.style.left = "0",
                        E.style[i ? "top" : "left"] = (o ? 1 : -1) * t + "px",
                        n && n !== e.placement && N.popperInstance.update()
                    }
                    var s = ot({
                        eventsEnabled: !1,
                        placement: N.props.placement
                    }, n, {
                        modifiers: ot({}, n && n.modifiers, {
                            tippyDistance: {
                                enabled: !0,
                                order: 0,
                                fn: function(e) {
                                    t = function(e, t) {
                                        var n = "string" == typeof t && Ct(t, "rem")
                                          , r = e.documentElement;
                                        return r && n ? parseFloat(getComputedStyle(r).fontSize || String(16)) * kt(t) : kt(t)
                                    }(b, N.props.distance);
                                    var n = Zt(e.placement)
                                      , r = Dt(n, o && o.padding, t)
                                      , a = Dt(n, i && i.padding, t)
                                      , s = N.popperInstance.modifiers;
                                    return vt(s, "preventOverflow", "padding", r),
                                    vt(s, "flip", "padding", a),
                                    e
                                }
                            },
                            preventOverflow: ot({
                                boundariesElement: N.props.boundary
                            }, o),
                            flip: ot({
                                enabled: N.props.flip,
                                behavior: N.props.flipBehavior
                            }, i),
                            arrow: ot({
                                element: r,
                                enabled: !!r
                            }, dt(n, "arrow")),
                            offset: ot({
                                offset: N.props.offset
                            }, dt(n, "offset"))
                        }),
                        onCreate: function(e) {
                            a(e),
                            wt(n && n.onCreate, s.onCreate, [e]),
                            Q()
                        },
                        onUpdate: function(e) {
                            a(e),
                            wt(n && n.onUpdate, s.onUpdate, [e]),
                            Q()
                        }
                    });
                    N.popperInstance = new it(e,w,s)
                }
                function Q() {
                    0 === v ? (v++,
                    N.popperInstance.update()) : s && 1 === v && (v++,
                    function(e) {
                        e.offsetHeight
                    }(w),
                    s())
                }
                function Z(e) {
                    N.clearDelayTimeouts(),
                    N.popperInstance || J(),
                    e && H("onTrigger", [N, e]),
                    z();
                    var t = j(!0);
                    t ? n = setTimeout((function() {
                        N.show()
                    }
                    ), t) : N.show()
                }
                function K(e) {
                    if (N.clearDelayTimeouts(),
                    H("onUntrigger", [N, e]),
                    N.state.isVisible) {
                        if (!(Ct(N.props.trigger, "mouseenter") && Ct(N.props.trigger, "click") && Ct(["mouseleave", "mousemove"], e.type) && h)) {
                            var t = j(!1);
                            t ? r = setTimeout((function() {
                                N.state.isVisible && N.hide()
                            }
                            ), t) : i = requestAnimationFrame((function() {
                                N.hide()
                            }
                            ))
                        }
                    } else
                        R()
                }
            }
            function pn(e, t, n) {
                void 0 === t && (t = {}),
                void 0 === n && (n = []),
                n = Lt.plugins.concat(t.plugins || n),
                document.addEventListener("touchstart", Ut, ot({}, Bt, {
                    capture: !0
                })),
                window.addEventListener("blur", Vt);
                var r = ot({}, t, {
                    plugins: n
                })
                  , i = ct(e).reduce((function(e, t) {
                    var n = t && dn(t, r);
                    return n && e.push(n),
                    e
                }
                ), []);
                return ht(e) ? i[0] : i
            }
            pn.version = at,
            pn.defaultProps = Lt,
            pn.setDefaultProps = jt,
            pn.currentInput = Wt;
            window.Headroom = i(),
            window.$ = window.jQuery = a(),
            a().timeago.settings.strings = {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: null,
                suffixFromNow: "nữa",
                seconds: "%d giây",
                minute: "1 phút",
                minutes: "%d phút",
                hour: "1 giờ",
                hours: "%d giờ",
                day: "1 ngày",
                days: "%d ngày",
                month: "1 tháng",
                months: "%d tháng",
                year: "1 năm",
                years: "%d năm",
                wordSeparator: " ",
                numbers: []
            },
            window.tns = V,
            window.Cookies = X(),
            window.tippy = pn,
            window.tippyHideAll = function(e) {
                var t = void 0 === e ? {} : e
                  , n = t.exclude
                  , r = t.duration;
                fn.forEach((function(e) {
                    var t = !1;
                    n && (t = ut(n) ? e.reference === n : e.popper === n.popper),
                    t || e.hide(r)
                }
                ))
            }
        }
        ,
        188: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>o
            });
            var r = n(645)
              , i = n.n(r)()((function(e) {
                return e[1]
            }
            ));
            i.push([e.id, '.tns-outer{padding:0!important}.tns-outer [hidden]{display:none!important}.tns-outer [aria-controls],.tns-outer [data-action]{cursor:pointer}.tns-slider{transition:all 0s}.tns-slider>.tns-item{box-sizing:border-box}.tns-horizontal.tns-subpixel{white-space:nowrap}.tns-horizontal.tns-subpixel>.tns-item{display:inline-block;vertical-align:top;white-space:normal}.tns-horizontal.tns-no-subpixel:after{clear:both;content:"";display:table}.tns-horizontal.tns-no-subpixel>.tns-item{float:left}.tns-horizontal.tns-carousel.tns-no-subpixel>.tns-item{margin-right:-100%}.tns-gallery,.tns-no-calc{left:0;position:relative}.tns-gallery{min-height:1px}.tns-gallery>.tns-item{left:-100%;position:absolute;transition:opacity 0s,-webkit-transform 0s;transition:transform 0s,opacity 0s;transition:transform 0s,opacity 0s,-webkit-transform 0s}.tns-gallery>.tns-slide-active{left:auto!important;position:relative}.tns-gallery>.tns-moving{transition:all .25s}.tns-autowidth{display:inline-block}.tns-lazy-img{opacity:.6;transition:opacity .6s}.tns-lazy-img.tns-complete{opacity:1}.tns-ah{transition:height 0s}.tns-ovh{overflow:hidden}.tns-visually-hidden{left:-10000em;position:absolute}.tns-transparent{opacity:0;visibility:hidden}.tns-fadeIn{filter:alpha(opacity=100);opacity:1;z-index:0}.tns-fadeOut,.tns-normal{filter:alpha(opacity=0);opacity:0;z-index:-1}.tns-vpfix{white-space:nowrap}.tns-vpfix>div,.tns-vpfix>li{display:inline-block}.tns-t-subp2{height:10px;margin:0 auto;overflow:hidden;position:relative;width:310px}.tns-t-ct{position:absolute;right:0;width:2333.3333333%;width:2333.33333%}.tns-t-ct:after{clear:both;content:"";display:table}.tns-t-ct>div{float:left;height:10px;width:1.4285714%;width:1.42857%}', ""]);
            const o = i
        }
        ,
        535: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>o
            });
            var r = n(645)
              , i = n.n(r)()((function(e) {
                return e[1]
            }
            ));
            i.push([e.id, ".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{-webkit-tap-highlight-color:transparent;cursor:pointer!important}.tippy-popper{max-width:calc(100vw - 10px);pointer-events:none;transition-property:transform;transition-timing-function:cubic-bezier(.165,.84,.44,1)}.tippy-tooltip{background-color:#333;border-radius:4px;color:#fff;font-size:14px;line-height:1.4;outline:0;position:relative;transition-property:visibility,opacity,transform}.tippy-tooltip[data-placement^=top]>.tippy-arrow{border-top-color:#333;border-width:8px 8px 0;bottom:-7px;margin:0 3px;transform-origin:50% 0}.tippy-tooltip[data-placement^=bottom]>.tippy-arrow{border-bottom-color:#333;border-width:0 8px 8px;margin:0 3px;top:-7px;transform-origin:50% 7px}.tippy-tooltip[data-placement^=left]>.tippy-arrow{border-left-color:#333;border-width:8px 0 8px 8px;margin:3px 0;right:-7px;transform-origin:0 50%}.tippy-tooltip[data-placement^=right]>.tippy-arrow{border-right-color:#333;border-width:8px 8px 8px 0;left:-7px;margin:3px 0;transform-origin:7px 50%}.tippy-tooltip[data-interactive][data-state=visible]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{border-color:transparent;border-style:solid;position:absolute}.tippy-content{padding:5px 9px}", ""]);
            const o = i
        }
        ,
        645: e=>{
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = e(t);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                    }
                    )).join("")
                }
                ,
                t.i = function(e, n, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var i = {};
                    if (r)
                        for (var o = 0; o < this.length; o++) {
                            var a = this[o][0];
                            null != a && (i[a] = !0)
                        }
                    for (var s = 0; s < e.length; s++) {
                        var u = [].concat(e[s]);
                        r && i[u[0]] || (n && (u[2] ? u[2] = "".concat(n, " and ").concat(u[2]) : u[2] = n),
                        t.push(u))
                    }
                }
                ,
                t
            }
        }
        ,
        631: function(e) {
            e.exports = function() {
                "use strict";
                function e() {
                    return "undefined" != typeof window
                }
                function t() {
                    var e = !1;
                    try {
                        var t = {
                            get passive() {
                                e = !0
                            }
                        };
                        window.addEventListener("test", t, t),
                        window.removeEventListener("test", t, t)
                    } catch (t) {
                        e = !1
                    }
                    return e
                }
                function n() {
                    return !!(e() && function() {}
                    .bind && "classList"in document.documentElement && Object.assign && Object.keys && requestAnimationFrame)
                }
                function r(e) {
                    return 9 === e.nodeType
                }
                function i(e) {
                    return e && e.document && r(e.document)
                }
                function o(e) {
                    var t = e.document
                      , n = t.body
                      , r = t.documentElement;
                    return {
                        scrollHeight: function() {
                            return Math.max(n.scrollHeight, r.scrollHeight, n.offsetHeight, r.offsetHeight, n.clientHeight, r.clientHeight)
                        },
                        height: function() {
                            return e.innerHeight || r.clientHeight || n.clientHeight
                        },
                        scrollY: function() {
                            return void 0 !== e.pageYOffset ? e.pageYOffset : (r || n.parentNode || n).scrollTop
                        }
                    }
                }
                function a(e) {
                    return {
                        scrollHeight: function() {
                            return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
                        },
                        height: function() {
                            return Math.max(e.offsetHeight, e.clientHeight)
                        },
                        scrollY: function() {
                            return e.scrollTop
                        }
                    }
                }
                function s(e) {
                    return i(e) ? o(e) : a(e)
                }
                function u(e, n, r) {
                    var i, o = t(), a = !1, u = s(e), l = u.scrollY(), c = {};
                    function f() {
                        var e = Math.round(u.scrollY())
                          , t = u.height()
                          , i = u.scrollHeight();
                        c.scrollY = e,
                        c.lastScrollY = l,
                        c.direction = e > l ? "down" : "up",
                        c.distance = Math.abs(e - l),
                        c.isOutOfBounds = e < 0 || e + t > i,
                        c.top = e <= n.offset,
                        c.bottom = e + t >= i,
                        c.toleranceExceeded = c.distance > n.tolerance[c.direction],
                        r(c),
                        l = e,
                        a = !1
                    }
                    function d() {
                        a || (a = !0,
                        i = requestAnimationFrame(f))
                    }
                    var p = !!o && {
                        passive: !0,
                        capture: !1
                    };
                    return e.addEventListener("scroll", d, p),
                    f(),
                    {
                        destroy: function() {
                            cancelAnimationFrame(i),
                            e.removeEventListener("scroll", d, p)
                        }
                    }
                }
                function l(e) {
                    return e === Object(e) ? e : {
                        down: e,
                        up: e
                    }
                }
                function c(e, t) {
                    t = t || {},
                    Object.assign(this, c.options, t),
                    this.classes = Object.assign({}, c.options.classes, t.classes),
                    this.elem = e,
                    this.tolerance = l(this.tolerance),
                    this.initialised = !1,
                    this.frozen = !1
                }
                return c.prototype = {
                    constructor: c,
                    init: function() {
                        return c.cutsTheMustard && !this.initialised && (this.addClass("initial"),
                        this.initialised = !0,
                        setTimeout((function(e) {
                            e.scrollTracker = u(e.scroller, {
                                offset: e.offset,
                                tolerance: e.tolerance
                            }, e.update.bind(e))
                        }
                        ), 100, this)),
                        this
                    },
                    destroy: function() {
                        this.initialised = !1,
                        Object.keys(this.classes).forEach(this.removeClass, this),
                        this.scrollTracker.destroy()
                    },
                    unpin: function() {
                        !this.hasClass("pinned") && this.hasClass("unpinned") || (this.addClass("unpinned"),
                        this.removeClass("pinned"),
                        this.onUnpin && this.onUnpin.call(this))
                    },
                    pin: function() {
                        this.hasClass("unpinned") && (this.addClass("pinned"),
                        this.removeClass("unpinned"),
                        this.onPin && this.onPin.call(this))
                    },
                    freeze: function() {
                        this.frozen = !0,
                        this.addClass("frozen")
                    },
                    unfreeze: function() {
                        this.frozen = !1,
                        this.removeClass("frozen")
                    },
                    top: function() {
                        this.hasClass("top") || (this.addClass("top"),
                        this.removeClass("notTop"),
                        this.onTop && this.onTop.call(this))
                    },
                    notTop: function() {
                        this.hasClass("notTop") || (this.addClass("notTop"),
                        this.removeClass("top"),
                        this.onNotTop && this.onNotTop.call(this))
                    },
                    bottom: function() {
                        this.hasClass("bottom") || (this.addClass("bottom"),
                        this.removeClass("notBottom"),
                        this.onBottom && this.onBottom.call(this))
                    },
                    notBottom: function() {
                        this.hasClass("notBottom") || (this.addClass("notBottom"),
                        this.removeClass("bottom"),
                        this.onNotBottom && this.onNotBottom.call(this))
                    },
                    shouldUnpin: function(e) {
                        return "down" === e.direction && !e.top && e.toleranceExceeded
                    },
                    shouldPin: function(e) {
                        return "up" === e.direction && e.toleranceExceeded || e.top
                    },
                    addClass: function(e) {
                        this.elem.classList.add.apply(this.elem.classList, this.classes[e].split(" "))
                    },
                    removeClass: function(e) {
                        this.elem.classList.remove.apply(this.elem.classList, this.classes[e].split(" "))
                    },
                    hasClass: function(e) {
                        return this.classes[e].split(" ").every((function(e) {
                            return this.classList.contains(e)
                        }
                        ), this.elem)
                    },
                    update: function(e) {
                        e.isOutOfBounds || !0 !== this.frozen && (e.top ? this.top() : this.notTop(),
                        e.bottom ? this.bottom() : this.notBottom(),
                        this.shouldUnpin(e) ? this.unpin() : this.shouldPin(e) && this.pin())
                    }
                },
                c.options = {
                    tolerance: {
                        up: 0,
                        down: 0
                    },
                    offset: 0,
                    scroller: e() ? window : null,
                    classes: {
                        frozen: "headroom--frozen",
                        pinned: "headroom--pinned",
                        unpinned: "headroom--unpinned",
                        top: "headroom--top",
                        notTop: "headroom--not-top",
                        bottom: "headroom--bottom",
                        notBottom: "headroom--not-bottom",
                        initial: "headroom"
                    }
                },
                c.cutsTheMustard = n(),
                c
            }()
        },
        755: function(e, t) {
            var n;
            !function(t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document)
                        throw new Error("jQuery requires a window with a document");
                    return n(e)
                }
                : n(t)
            }("undefined" != typeof window ? window : this, (function(r, i) {
                "use strict";
                var o = []
                  , a = Object.getPrototypeOf
                  , s = o.slice
                  , u = o.flat ? function(e) {
                    return o.flat.call(e)
                }
                : function(e) {
                    return o.concat.apply([], e)
                }
                  , l = o.push
                  , c = o.indexOf
                  , f = {}
                  , d = f.toString
                  , p = f.hasOwnProperty
                  , h = p.toString
                  , m = h.call(Object)
                  , v = {}
                  , g = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                }
                  , y = function(e) {
                    return null != e && e === e.window
                }
                  , b = r.document
                  , x = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function w(e, t, n) {
                    var r, i, o = (n = n || b).createElement("script");
                    if (o.text = e,
                    t)
                        for (r in x)
                            (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o)
                }
                function T(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[d.call(e)] || "object" : typeof e
                }
                var C = "3.6.0"
                  , E = function(e, t) {
                    return new E.fn.init(e,t)
                };
                function A(e) {
                    var t = !!e && "length"in e && e.length
                      , n = T(e);
                    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }
                E.fn = E.prototype = {
                    jquery: C,
                    constructor: E,
                    length: 0,
                    toArray: function() {
                        return s.call(this)
                    },
                    get: function(e) {
                        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = E.merge(this.constructor(), e);
                        return t.prevObject = this,
                        t
                    },
                    each: function(e) {
                        return E.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(E.map(this, (function(t, n) {
                            return e.call(t, n, t)
                        }
                        )))
                    },
                    slice: function() {
                        return this.pushStack(s.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(E.grep(this, (function(e, t) {
                            return (t + 1) % 2
                        }
                        )))
                    },
                    odd: function() {
                        return this.pushStack(E.grep(this, (function(e, t) {
                            return t % 2
                        }
                        )))
                    },
                    eq: function(e) {
                        var t = this.length
                          , n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: l,
                    sort: o.sort,
                    splice: o.splice
                },
                E.extend = E.fn.extend = function() {
                    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                    for ("boolean" == typeof a && (l = a,
                    a = arguments[s] || {},
                    s++),
                    "object" == typeof a || g(a) || (a = {}),
                    s === u && (a = this,
                    s--); s < u; s++)
                        if (null != (e = arguments[s]))
                            for (t in e)
                                r = e[t],
                                "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                                o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {},
                                i = !1,
                                a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                    return a
                }
                ,
                E.extend({
                    expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== d.call(e)) && (!(t = a(e)) || "function" == typeof (n = p.call(t, "constructor") && t.constructor) && h.call(n) === m)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        w(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (A(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                                ;
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r]))
                                    break;
                        return e
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (A(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
                        n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : c.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                            e[i++] = t[r];
                        return e.length = i,
                        e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                            !t(e[i], i) !== a && r.push(e[i]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, i, o = 0, a = [];
                        if (A(e))
                            for (r = e.length; o < r; o++)
                                null != (i = t(e[o], o, n)) && a.push(i);
                        else
                            for (o in e)
                                null != (i = t(e[o], o, n)) && a.push(i);
                        return u(a)
                    },
                    guid: 1,
                    support: v
                }),
                "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]),
                E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    f["[object " + t + "]"] = t.toLowerCase()
                }
                ));
                var S = function(e) {
                    var t, n, r, i, o, a, s, u, l, c, f, d, p, h, m, v, g, y, b, x = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ue(), A = ue(), S = ue(), N = ue(), k = function(e, t) {
                        return e === t && (f = !0),
                        0
                    }, D = {}.hasOwnProperty, L = [], O = L.pop, M = L.push, j = L.push, H = L.slice, P = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", z = "\\[[\\x20\\t\\r\\n\\f]*(" + q + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + I + "*\\]", R = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)", F = new RegExp(I + "+","g"), W = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"), _ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), U = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), $ = new RegExp(I + "|>"), V = new RegExp(R), Y = new RegExp("^" + q + "$"), X = {
                        ID: new RegExp("^#(" + q + ")"),
                        CLASS: new RegExp("^\\.(" + q + ")"),
                        TAG: new RegExp("^(" + q + "|[*])"),
                        ATTR: new RegExp("^" + z),
                        PSEUDO: new RegExp("^" + R),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),
                        bool: new RegExp("^(?:" + B + ")$","i"),
                        needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")
                    }, G = /HTML$/i, J = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, oe = function() {
                        d()
                    }, ae = xe((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }
                    ), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        j.apply(L = H.call(w.childNodes), w.childNodes),
                        L[w.childNodes.length].nodeType
                    } catch (e) {
                        j = {
                            apply: L.length ? function(e, t) {
                                M.apply(e, H.call(t))
                            }
                            : function(e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++]; )
                                    ;
                                e.length = n - 1
                            }
                        }
                    }
                    function se(e, t, r, i) {
                        var o, s, l, c, f, h, g, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
                        if (r = r || [],
                        "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                            return r;
                        if (!i && (d(t),
                        t = t || p,
                        m)) {
                            if (11 !== w && (f = K.exec(e)))
                                if (o = f[1]) {
                                    if (9 === w) {
                                        if (!(l = t.getElementById(o)))
                                            return r;
                                        if (l.id === o)
                                            return r.push(l),
                                            r
                                    } else if (y && (l = y.getElementById(o)) && b(t, l) && l.id === o)
                                        return r.push(l),
                                        r
                                } else {
                                    if (f[2])
                                        return j.apply(r, t.getElementsByTagName(e)),
                                        r;
                                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                        return j.apply(r, t.getElementsByClassName(o)),
                                        r
                                }
                            if (n.qsa && !N[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                if (g = e,
                                y = t,
                                1 === w && ($.test(e) || U.test(e))) {
                                    for ((y = ee.test(e) && ge(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = x)),
                                    s = (h = a(e)).length; s--; )
                                        h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                                    g = h.join(",")
                                }
                                try {
                                    return j.apply(r, y.querySelectorAll(g)),
                                    r
                                } catch (t) {
                                    N(e, !0)
                                } finally {
                                    c === x && t.removeAttribute("id")
                                }
                            }
                        }
                        return u(e.replace(W, "$1"), t, r, i)
                    }
                    function ue() {
                        var e = [];
                        return function t(n, i) {
                            return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                            t[n + " "] = i
                        }
                    }
                    function le(e) {
                        return e[x] = !0,
                        e
                    }
                    function ce(e) {
                        var t = p.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t),
                            t = null
                        }
                    }
                    function fe(e, t) {
                        for (var n = e.split("|"), i = n.length; i--; )
                            r.attrHandle[n[i]] = t
                    }
                    function de(e, t) {
                        var n = t && e
                          , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (r)
                            return r;
                        if (n)
                            for (; n = n.nextSibling; )
                                if (n === t)
                                    return -1;
                        return e ? 1 : -1
                    }
                    function pe(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }
                    function he(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function me(e) {
                        return function(t) {
                            return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
                        }
                    }
                    function ve(e) {
                        return le((function(t) {
                            return t = +t,
                            le((function(n, r) {
                                for (var i, o = e([], n.length, t), a = o.length; a--; )
                                    n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                            }
                            ))
                        }
                        ))
                    }
                    function ge(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = se.support = {},
                    o = se.isXML = function(e) {
                        var t = e && e.namespaceURI
                          , n = e && (e.ownerDocument || e).documentElement;
                        return !G.test(t || n && n.nodeName || "HTML")
                    }
                    ,
                    d = se.setDocument = function(e) {
                        var t, i, a = e ? e.ownerDocument || e : w;
                        return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement,
                        m = !o(p),
                        w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
                        n.scope = ce((function(e) {
                            return h.appendChild(e).appendChild(p.createElement("div")),
                            void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }
                        )),
                        n.attributes = ce((function(e) {
                            return e.className = "i",
                            !e.getAttribute("className")
                        }
                        )),
                        n.getElementsByTagName = ce((function(e) {
                            return e.appendChild(p.createComment("")),
                            !e.getElementsByTagName("*").length
                        }
                        )),
                        n.getElementsByClassName = Z.test(p.getElementsByClassName),
                        n.getById = ce((function(e) {
                            return h.appendChild(e).id = x,
                            !p.getElementsByName || !p.getElementsByName(x).length
                        }
                        )),
                        n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }
                        ,
                        r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                        ) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }
                        ,
                        r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                        return [o];
                                    for (i = t.getElementsByName(e),
                                    r = 0; o = i[r++]; )
                                        if ((n = o.getAttributeNode("id")) && n.value === e)
                                            return [o]
                                }
                                return []
                            }
                        }
                        ),
                        r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        }
                        : function(e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++]; )
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }
                        ,
                        r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && m)
                                return t.getElementsByClassName(e)
                        }
                        ,
                        g = [],
                        v = [],
                        (n.qsa = Z.test(p.querySelectorAll)) && (ce((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + B + ")"),
                            e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                            (t = p.createElement("input")).setAttribute("name", ""),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length || v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                            e.querySelectorAll(":checked").length || v.push(":checked"),
                            e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            v.push("[\\r\\n\\f]")
                        }
                        )),
                        ce((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                            h.appendChild(e).disabled = !0,
                            2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            v.push(",.*:")
                        }
                        ))),
                        (n.matchesSelector = Z.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                            n.disconnectedMatch = y.call(e, "*"),
                            y.call(e, "[s!='']:x"),
                            g.push("!=", R)
                        }
                        )),
                        v = v.length && new RegExp(v.join("|")),
                        g = g.length && new RegExp(g.join("|")),
                        t = Z.test(h.compareDocumentPosition),
                        b = t || Z.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e
                              , r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        }
                        : function(e, t) {
                            if (t)
                                for (; t = t.parentNode; )
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                        ,
                        k = t ? function(e, t) {
                            if (e === t)
                                return f = !0,
                                0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && b(w, e) ? -1 : t == p || t.ownerDocument == w && b(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
                        }
                        : function(e, t) {
                            if (e === t)
                                return f = !0,
                                0;
                            var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                            if (!i || !o)
                                return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                            if (i === o)
                                return de(e, t);
                            for (n = e; n = n.parentNode; )
                                a.unshift(n);
                            for (n = t; n = n.parentNode; )
                                s.unshift(n);
                            for (; a[r] === s[r]; )
                                r++;
                            return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                        }
                        ,
                        p) : p
                    }
                    ,
                    se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }
                    ,
                    se.matchesSelector = function(e, t) {
                        if (d(e),
                        n.matchesSelector && m && !N[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t)))
                            try {
                                var r = y.call(e, t);
                                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                    return r
                            } catch (e) {
                                N(t, !0)
                            }
                        return se(t, p, null, [e]).length > 0
                    }
                    ,
                    se.contains = function(e, t) {
                        return (e.ownerDocument || e) != p && d(e),
                        b(e, t)
                    }
                    ,
                    se.attr = function(e, t) {
                        (e.ownerDocument || e) != p && d(e);
                        var i = r.attrHandle[t.toLowerCase()]
                          , o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                        return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }
                    ,
                    se.escape = function(e) {
                        return (e + "").replace(re, ie)
                    }
                    ,
                    se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }
                    ,
                    se.uniqueSort = function(e) {
                        var t, r = [], i = 0, o = 0;
                        if (f = !n.detectDuplicates,
                        c = !n.sortStable && e.slice(0),
                        e.sort(k),
                        f) {
                            for (; t = e[o++]; )
                                t === e[o] && (i = r.push(o));
                            for (; i--; )
                                e.splice(r[i], 1)
                        }
                        return c = null,
                        e
                    }
                    ,
                    i = se.getText = function(e) {
                        var t, n = "", r = 0, o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent)
                                    return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    n += i(e)
                            } else if (3 === o || 4 === o)
                                return e.nodeValue
                        } else
                            for (; t = e[r++]; )
                                n += i(t);
                        return n
                    }
                    ,
                    r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: le,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne),
                                e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(),
                                "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                                e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                e[2] = n.slice(0, t)),
                                e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                }
                                : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = E[e + " "];
                                return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + I + "|$)")) && E(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }
                                ))
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = se.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "",
                                    "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3)
                                  , a = "last" !== e.slice(-4)
                                  , s = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                }
                                : function(t, n, u) {
                                    var l, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, g = s && t.nodeName.toLowerCase(), y = !u && !s, b = !1;
                                    if (v) {
                                        if (o) {
                                            for (; m; ) {
                                                for (d = t; d = d[m]; )
                                                    if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType)
                                                        return !1;
                                                h = m = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? v.firstChild : v.lastChild],
                                        a && y) {
                                            for (b = (p = (l = (c = (f = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                            d = p && v.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop(); )
                                                if (1 === d.nodeType && ++b && d === t) {
                                                    c[e] = [T, p, b];
                                                    break
                                                }
                                        } else if (y && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                                        !1 === b)
                                            for (; (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, b]),
                                            d !== t)); )
                                                ;
                                        return (b -= i) === r || b % r == 0 && b / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                                r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                                    for (var r, o = i(e, t), a = o.length; a--; )
                                        e[r = P(e, o[a])] = !(n[r] = o[a])
                                }
                                )) : function(e) {
                                    return i(e, 0, n)
                                }
                                ) : i
                            }
                        },
                        pseudos: {
                            not: le((function(e) {
                                var t = []
                                  , n = []
                                  , r = s(e.replace(W, "$1"));
                                return r[x] ? le((function(e, t, n, i) {
                                    for (var o, a = r(e, null, i, []), s = e.length; s--; )
                                        (o = a[s]) && (e[s] = !(t[s] = o))
                                }
                                )) : function(e, i, o) {
                                    return t[0] = e,
                                    r(t, null, o, n),
                                    t[0] = null,
                                    !n.pop()
                                }
                            }
                            )),
                            has: le((function(e) {
                                return function(t) {
                                    return se(e, t).length > 0
                                }
                            }
                            )),
                            contains: le((function(e) {
                                return e = e.replace(te, ne),
                                function(t) {
                                    return (t.textContent || i(t)).indexOf(e) > -1
                                }
                            }
                            )),
                            lang: le((function(e) {
                                return Y.test(e || "") || se.error("unsupported lang: " + e),
                                e = e.replace(te, ne).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                            return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            }
                            )),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: me(!1),
                            disabled: me(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6)
                                        return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return J.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ve((function() {
                                return [0]
                            }
                            )),
                            last: ve((function(e, t) {
                                return [t - 1]
                            }
                            )),
                            eq: ve((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }
                            )),
                            even: ve((function(e, t) {
                                for (var n = 0; n < t; n += 2)
                                    e.push(n);
                                return e
                            }
                            )),
                            odd: ve((function(e, t) {
                                for (var n = 1; n < t; n += 2)
                                    e.push(n);
                                return e
                            }
                            )),
                            lt: ve((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                                    e.push(r);
                                return e
                            }
                            )),
                            gt: ve((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t; )
                                    e.push(r);
                                return e
                            }
                            ))
                        }
                    },
                    r.pseudos.nth = r.pseudos.eq,
                    {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        r.pseudos[t] = pe(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    })
                        r.pseudos[t] = he(t);
                    function ye() {}
                    function be(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++)
                            r += e[t].value;
                        return r
                    }
                    function xe(e, t, n) {
                        var r = t.dir
                          , i = t.next
                          , o = i || r
                          , a = n && "parentNode" === o
                          , s = C++;
                        return t.first ? function(t, n, i) {
                            for (; t = t[r]; )
                                if (1 === t.nodeType || a)
                                    return e(t, n, i);
                            return !1
                        }
                        : function(t, n, u) {
                            var l, c, f, d = [T, s];
                            if (u) {
                                for (; t = t[r]; )
                                    if ((1 === t.nodeType || a) && e(t, n, u))
                                        return !0
                            } else
                                for (; t = t[r]; )
                                    if (1 === t.nodeType || a)
                                        if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                                        i && i === t.nodeName.toLowerCase())
                                            t = t[r] || t;
                                        else {
                                            if ((l = c[o]) && l[0] === T && l[1] === s)
                                                return d[2] = l[2];
                                            if (c[o] = d,
                                            d[2] = e(t, n, u))
                                                return !0
                                        }
                            return !1
                        }
                    }
                    function we(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var i = e.length; i--; )
                                if (!e[i](t, n, r))
                                    return !1;
                            return !0
                        }
                        : e[0]
                    }
                    function Te(e, t, n, r, i) {
                        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                            (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                            l && t.push(s)));
                        return a
                    }
                    function Ce(e, t, n, r, i, o) {
                        return r && !r[x] && (r = Ce(r)),
                        i && !i[x] && (i = Ce(i, o)),
                        le((function(o, a, s, u) {
                            var l, c, f, d = [], p = [], h = a.length, m = o || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++)
                                    se(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []), v = !e || !o && t ? m : Te(m, d, e, s, u), g = n ? i || (o ? e : h || r) ? [] : a : v;
                            if (n && n(v, g, s, u),
                            r)
                                for (l = Te(g, p),
                                r(l, [], s, u),
                                c = l.length; c--; )
                                    (f = l[c]) && (g[p[c]] = !(v[p[c]] = f));
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        for (l = [],
                                        c = g.length; c--; )
                                            (f = g[c]) && l.push(v[c] = f);
                                        i(null, g = [], l, u)
                                    }
                                    for (c = g.length; c--; )
                                        (f = g[c]) && (l = i ? P(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f))
                                }
                            } else
                                g = Te(g === a ? g.splice(h, g.length) : g),
                                i ? i(null, a, g, u) : j.apply(a, g)
                        }
                        ))
                    }
                    function Ee(e) {
                        for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = xe((function(e) {
                            return e === t
                        }
                        ), s, !0), f = xe((function(e) {
                            return P(t, e) > -1
                        }
                        ), s, !0), d = [function(e, n, r) {
                            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return t = null,
                            i
                        }
                        ]; u < o; u++)
                            if (n = r.relative[e[u].type])
                                d = [xe(we(d), n)];
                            else {
                                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                                    for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                                        ;
                                    return Ce(u > 1 && we(d), u > 1 && be(e.slice(0, u - 1).concat({
                                        value: " " === e[u - 2].type ? "*" : ""
                                    })).replace(W, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && be(e))
                                }
                                d.push(n)
                            }
                        return we(d)
                    }
                    return ye.prototype = r.filters = r.pseudos,
                    r.setFilters = new ye,
                    a = se.tokenize = function(e, t) {
                        var n, i, o, a, s, u, l, c = A[e + " "];
                        if (c)
                            return t ? 0 : c.slice(0);
                        for (s = e,
                        u = [],
                        l = r.preFilter; s; ) {
                            for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                            u.push(o = [])),
                            n = !1,
                            (i = U.exec(s)) && (n = i.shift(),
                            o.push({
                                value: n,
                                type: i[0].replace(W, " ")
                            }),
                            s = s.slice(n.length)),
                            r.filter)
                                !(i = X[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                                o.push({
                                    value: n,
                                    type: a,
                                    matches: i
                                }),
                                s = s.slice(n.length));
                            if (!n)
                                break
                        }
                        return t ? s.length : s ? se.error(e) : A(e, u).slice(0)
                    }
                    ,
                    s = se.compile = function(e, t) {
                        var n, i = [], o = [], s = S[e + " "];
                        if (!s) {
                            for (t || (t = a(e)),
                            n = t.length; n--; )
                                (s = Ee(t[n]))[x] ? i.push(s) : o.push(s);
                            s = S(e, function(e, t) {
                                var n = t.length > 0
                                  , i = e.length > 0
                                  , o = function(o, a, s, u, c) {
                                    var f, h, v, g = 0, y = "0", b = o && [], x = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, A = C.length;
                                    for (c && (l = a == p || a || c); y !== A && null != (f = C[y]); y++) {
                                        if (i && f) {
                                            for (h = 0,
                                            a || f.ownerDocument == p || (d(f),
                                            s = !m); v = e[h++]; )
                                                if (v(f, a || p, s)) {
                                                    u.push(f);
                                                    break
                                                }
                                            c && (T = E)
                                        }
                                        n && ((f = !v && f) && g--,
                                        o && b.push(f))
                                    }
                                    if (g += y,
                                    n && y !== g) {
                                        for (h = 0; v = t[h++]; )
                                            v(b, x, a, s);
                                        if (o) {
                                            if (g > 0)
                                                for (; y--; )
                                                    b[y] || x[y] || (x[y] = O.call(u));
                                            x = Te(x)
                                        }
                                        j.apply(u, x),
                                        c && !o && x.length > 0 && g + t.length > 1 && se.uniqueSort(u)
                                    }
                                    return c && (T = E,
                                    l = w),
                                    b
                                };
                                return n ? le(o) : o
                            }(o, i)),
                            s.selector = e
                        }
                        return s
                    }
                    ,
                    u = se.select = function(e, t, n, i) {
                        var o, u, l, c, f, d = "function" == typeof e && e, p = !i && a(e = d.selector || e);
                        if (n = n || [],
                        1 === p.length) {
                            if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && m && r.relative[u[1].type]) {
                                if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                                    return n;
                                d && (t = t.parentNode),
                                e = e.slice(u.shift().value.length)
                            }
                            for (o = X.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o],
                            !r.relative[c = l.type]); )
                                if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ge(t.parentNode) || t))) {
                                    if (u.splice(o, 1),
                                    !(e = i.length && be(u)))
                                        return j.apply(n, i),
                                        n;
                                    break
                                }
                        }
                        return (d || s(e, p))(i, t, !m, n, !t || ee.test(e) && ge(t.parentNode) || t),
                        n
                    }
                    ,
                    n.sortStable = x.split("").sort(k).join("") === x,
                    n.detectDuplicates = !!f,
                    d(),
                    n.sortDetached = ce((function(e) {
                        return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                    }
                    )),
                    ce((function(e) {
                        return e.innerHTML = "<a href='#'></a>",
                        "#" === e.firstChild.getAttribute("href")
                    }
                    )) || fe("type|href|height|width", (function(e, t, n) {
                        if (!n)
                            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }
                    )),
                    n.attributes && ce((function(e) {
                        return e.innerHTML = "<input/>",
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    }
                    )) || fe("value", (function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase())
                            return e.defaultValue
                    }
                    )),
                    ce((function(e) {
                        return null == e.getAttribute("disabled")
                    }
                    )) || fe(B, (function(e, t, n) {
                        var r;
                        if (!n)
                            return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                    )),
                    se
                }(r);
                E.find = S,
                E.expr = S.selectors,
                E.expr[":"] = E.expr.pseudos,
                E.uniqueSort = E.unique = S.uniqueSort,
                E.text = S.getText,
                E.isXMLDoc = S.isXML,
                E.contains = S.contains,
                E.escapeSelector = S.escape;
                var N = function(e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (i && E(e).is(n))
                                break;
                            r.push(e)
                        }
                    return r
                }
                  , k = function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                  , D = E.expr.match.needsContext;
                function L(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function M(e, t, n) {
                    return g(t) ? E.grep(e, (function(e, r) {
                        return !!t.call(e, r, e) !== n
                    }
                    )) : t.nodeType ? E.grep(e, (function(e) {
                        return e === t !== n
                    }
                    )) : "string" != typeof t ? E.grep(e, (function(e) {
                        return c.call(t, e) > -1 !== n
                    }
                    )) : E.filter(t, e, n)
                }
                E.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, (function(e) {
                        return 1 === e.nodeType
                    }
                    )))
                }
                ,
                E.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length, i = this;
                        if ("string" != typeof e)
                            return this.pushStack(E(e).filter((function() {
                                for (t = 0; t < r; t++)
                                    if (E.contains(i[t], this))
                                        return !0
                            }
                            )));
                        for (n = this.pushStack([]),
                        t = 0; t < r; t++)
                            E.find(e, i[t], n);
                        return r > 1 ? E.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(M(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(M(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!M(this, "string" == typeof e && D.test(e) ? E(e) : e || [], !1).length
                    }
                });
                var j, H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (E.fn.init = function(e, t, n) {
                    var r, i;
                    if (!e)
                        return this;
                    if (n = n || j,
                    "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : H.exec(e)) || !r[1] && t)
                            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof E ? t[0] : t,
                            E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
                            O.test(r[1]) && E.isPlainObject(t))
                                for (r in t)
                                    g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return (i = b.getElementById(r[2])) && (this[0] = i,
                        this.length = 1),
                        this
                    }
                    return e.nodeType ? (this[0] = e,
                    this.length = 1,
                    this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
                }
                ).prototype = E.fn,
                j = E(b);
                var P = /^(?:parents|prev(?:Until|All))/
                  , B = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function I(e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType; )
                        ;
                    return e
                }
                E.fn.extend({
                    has: function(e) {
                        var t = E(e, this)
                          , n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++)
                                if (E.contains(this, t[e]))
                                    return !0
                        }
                        ))
                    },
                    closest: function(e, t) {
                        var n, r = 0, i = this.length, o = [], a = "string" != typeof e && E(e);
                        if (!D.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? c.call(E(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }),
                E.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return N(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return N(e, "parentNode", n)
                    },
                    next: function(e) {
                        return I(e, "nextSibling")
                    },
                    prev: function(e) {
                        return I(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return N(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return N(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return N(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return N(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return k((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return k(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (L(e, "template") && (e = e.content || e),
                        E.merge([], e.childNodes))
                    }
                }, (function(e, t) {
                    E.fn[e] = function(n, r) {
                        var i = E.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n),
                        r && "string" == typeof r && (i = E.filter(r, i)),
                        this.length > 1 && (B[e] || E.uniqueSort(i),
                        P.test(e) && i.reverse()),
                        this.pushStack(i)
                    }
                }
                ));
                var q = /[^\x20\t\r\n\f]+/g;
                function z(e) {
                    return e
                }
                function R(e) {
                    throw e
                }
                function F(e, t, n, r) {
                    var i;
                    try {
                        e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                E.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return E.each(e.match(q) || [], (function(e, n) {
                            t[n] = !0
                        }
                        )),
                        t
                    }(e) : E.extend({}, e);
                    var t, n, r, i, o = [], a = [], s = -1, u = function() {
                        for (i = i || e.once,
                        r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length; )
                                !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                                n = !1);
                        e.memory || (n = !1),
                        t = !1,
                        i && (o = n ? [] : "")
                    }, l = {
                        add: function() {
                            return o && (n && !t && (s = o.length - 1,
                            a.push(n)),
                            function t(n) {
                                E.each(n, (function(n, r) {
                                    g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
                                }
                                ))
                            }(arguments),
                            n && !t && u()),
                            this
                        },
                        remove: function() {
                            return E.each(arguments, (function(e, t) {
                                for (var n; (n = E.inArray(t, o, n)) > -1; )
                                    o.splice(n, 1),
                                    n <= s && s--
                            }
                            )),
                            this
                        },
                        has: function(e) {
                            return e ? E.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []),
                            this
                        },
                        disable: function() {
                            return i = a = [],
                            o = n = "",
                            this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = a = [],
                            n || t || (o = n = ""),
                            this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                            a.push(n),
                            t || u()),
                            this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments),
                            this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                    return l
                }
                ,
                E.extend({
                    Deferred: function(e) {
                        var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
                          , n = "pending"
                          , i = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments),
                                this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return E.Deferred((function(n) {
                                    E.each(t, (function(t, r) {
                                        var i = g(e[r[4]]) && e[r[4]];
                                        o[r[1]]((function() {
                                            var e = i && i.apply(this, arguments);
                                            e && g(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                        }
                                        ))
                                    }
                                    )),
                                    e = null
                                }
                                )).promise()
                            },
                            then: function(e, n, i) {
                                var o = 0;
                                function a(e, t, n, i) {
                                    return function() {
                                        var s = this
                                          , u = arguments
                                          , l = function() {
                                            var r, l;
                                            if (!(e < o)) {
                                                if ((r = n.apply(s, u)) === t.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                l = r && ("object" == typeof r || "function" == typeof r) && r.then,
                                                g(l) ? i ? l.call(r, a(o, t, z, i), a(o, t, R, i)) : (o++,
                                                l.call(r, a(o, t, z, i), a(o, t, R, i), a(o, t, z, t.notifyWith))) : (n !== z && (s = void 0,
                                                u = [r]),
                                                (i || t.resolveWith)(s, u))
                                            }
                                        }
                                          , c = i ? l : function() {
                                            try {
                                                l()
                                            } catch (r) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(r, c.stackTrace),
                                                e + 1 >= o && (n !== R && (s = void 0,
                                                u = [r]),
                                                t.rejectWith(s, u))
                                            }
                                        }
                                        ;
                                        e ? c() : (E.Deferred.getStackHook && (c.stackTrace = E.Deferred.getStackHook()),
                                        r.setTimeout(c))
                                    }
                                }
                                return E.Deferred((function(r) {
                                    t[0][3].add(a(0, r, g(i) ? i : z, r.notifyWith)),
                                    t[1][3].add(a(0, r, g(e) ? e : z)),
                                    t[2][3].add(a(0, r, g(n) ? n : R))
                                }
                                )).promise()
                            },
                            promise: function(e) {
                                return null != e ? E.extend(e, i) : i
                            }
                        }
                          , o = {};
                        return E.each(t, (function(e, r) {
                            var a = r[2]
                              , s = r[5];
                            i[r[1]] = a.add,
                            s && a.add((function() {
                                n = s
                            }
                            ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                            a.add(r[3].fire),
                            o[r[0]] = function() {
                                return o[r[0] + "With"](this === o ? void 0 : this, arguments),
                                this
                            }
                            ,
                            o[r[0] + "With"] = a.fireWith
                        }
                        )),
                        i.promise(o),
                        e && e.call(o, o),
                        o
                    },
                    when: function(e) {
                        var t = arguments.length
                          , n = t
                          , r = Array(n)
                          , i = s.call(arguments)
                          , o = E.Deferred()
                          , a = function(e) {
                            return function(n) {
                                r[e] = this,
                                i[e] = arguments.length > 1 ? s.call(arguments) : n,
                                --t || o.resolveWith(r, i)
                            }
                        };
                        if (t <= 1 && (F(e, o.done(a(n)).resolve, o.reject, !t),
                        "pending" === o.state() || g(i[n] && i[n].then)))
                            return o.then();
                        for (; n--; )
                            F(i[n], a(n), o.reject);
                        return o.promise()
                    }
                });
                var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                E.Deferred.exceptionHook = function(e, t) {
                    r.console && r.console.warn && e && W.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }
                ,
                E.readyException = function(e) {
                    r.setTimeout((function() {
                        throw e
                    }
                    ))
                }
                ;
                var _ = E.Deferred();
                function U() {
                    b.removeEventListener("DOMContentLoaded", U),
                    r.removeEventListener("load", U),
                    E.ready()
                }
                E.fn.ready = function(e) {
                    return _.then(e).catch((function(e) {
                        E.readyException(e)
                    }
                    )),
                    this
                }
                ,
                E.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0,
                        !0 !== e && --E.readyWait > 0 || _.resolveWith(b, [E]))
                    }
                }),
                E.ready.then = _.then,
                "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? r.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", U),
                r.addEventListener("load", U));
                var $ = function(e, t, n, r, i, o, a) {
                    var s = 0
                      , u = e.length
                      , l = null == n;
                    if ("object" === T(n))
                        for (s in i = !0,
                        n)
                            $(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== r && (i = !0,
                    g(r) || (a = !0),
                    l && (a ? (t.call(e, r),
                    t = null) : (l = t,
                    t = function(e, t, n) {
                        return l.call(E(e), n)
                    }
                    )),
                    t))
                        for (; s < u; s++)
                            t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                }
                  , V = /^-ms-/
                  , Y = /-([a-z])/g;
                function X(e, t) {
                    return t.toUpperCase()
                }
                function G(e) {
                    return e.replace(V, "ms-").replace(Y, X)
                }
                var J = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
                function Q() {
                    this.expando = E.expando + Q.uid++
                }
                Q.uid = 1,
                Q.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {},
                        J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))),
                        t
                    },
                    set: function(e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t)
                            i[G(t)] = n;
                        else
                            for (r in t)
                                i[G(r)] = t[r];
                        return i
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                        void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(G) : (t = G(t))in r ? [t] : t.match(q) || []).length;
                                for (; n--; )
                                    delete r[t[n]]
                            }
                            (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !E.isEmptyObject(t)
                    }
                };
                var Z = new Q
                  , K = new Q
                  , ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                  , te = /[A-Z]/g;
                function ne(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(te, "-$&").toLowerCase(),
                        "string" == typeof (n = e.getAttribute(r))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (e) {}
                            K.set(e, t, n)
                        } else
                            n = void 0;
                    return n
                }
                E.extend({
                    hasData: function(e) {
                        return K.hasData(e) || Z.hasData(e)
                    },
                    data: function(e, t, n) {
                        return K.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        K.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return Z.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        Z.remove(e, t)
                    }
                }),
                E.fn.extend({
                    data: function(e, t) {
                        var n, r, i, o = this[0], a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = K.get(o),
                            1 === o.nodeType && !Z.get(o, "hasDataAttrs"))) {
                                for (n = a.length; n--; )
                                    a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)),
                                    ne(o, r, i[r]));
                                Z.set(o, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each((function() {
                            K.set(this, e)
                        }
                        )) : $(this, (function(t) {
                            var n;
                            if (o && void 0 === t)
                                return void 0 !== (n = K.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                            this.each((function() {
                                K.set(this, e, t)
                            }
                            ))
                        }
                        ), null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            K.remove(this, e)
                        }
                        ))
                    }
                }),
                E.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e)
                            return t = (t || "fx") + "queue",
                            r = Z.get(e, t),
                            n && (!r || Array.isArray(n) ? r = Z.access(e, t, E.makeArray(n)) : r.push(n)),
                            r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = E.queue(e, t)
                          , r = n.length
                          , i = n.shift()
                          , o = E._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(),
                        r--),
                        i && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, (function() {
                            E.dequeue(e, t)
                        }
                        ), o)),
                        !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return Z.get(e, n) || Z.access(e, n, {
                            empty: E.Callbacks("once memory").add((function() {
                                Z.remove(e, [t + "queue", n])
                            }
                            ))
                        })
                    }
                }),
                E.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e,
                        e = "fx",
                        n--),
                        arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = E.queue(this, e, t);
                            E._queueHooks(this, e),
                            "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                        }
                        ))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            E.dequeue(this, e)
                        }
                        ))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1, i = E.Deferred(), o = this, a = this.length, s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                        for ("string" != typeof e && (t = e,
                        e = void 0),
                        e = e || "fx"; a--; )
                            (n = Z.get(o[a], e + "queueHooks")) && n.empty && (r++,
                            n.empty.add(s));
                        return s(),
                        i.promise(t)
                    }
                });
                var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                  , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
                  , oe = ["Top", "Right", "Bottom", "Left"]
                  , ae = b.documentElement
                  , se = function(e) {
                    return E.contains(e.ownerDocument, e)
                }
                  , ue = {
                    composed: !0
                };
                ae.getRootNode && (se = function(e) {
                    return E.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument
                }
                );
                var le = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === E.css(e, "display")
                };
                function ce(e, t, n, r) {
                    var i, o, a = 20, s = r ? function() {
                        return r.cur()
                    }
                    : function() {
                        return E.css(e, t, "")
                    }
                    , u = s(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"), c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && ie.exec(E.css(e, t));
                    if (c && c[3] !== l) {
                        for (u /= 2,
                        l = l || c[3],
                        c = +u || 1; a--; )
                            E.style(e, t, c + l),
                            (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                            c /= o;
                        c *= 2,
                        E.style(e, t, c + l),
                        n = n || []
                    }
                    return n && (c = +c || +u || 0,
                    i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = l,
                    r.start = c,
                    r.end = i)),
                    i
                }
                var fe = {};
                function de(e) {
                    var t, n = e.ownerDocument, r = e.nodeName, i = fe[r];
                    return i || (t = n.body.appendChild(n.createElement(r)),
                    i = E.css(t, "display"),
                    t.parentNode.removeChild(t),
                    "none" === i && (i = "block"),
                    fe[r] = i,
                    i)
                }
                function pe(e, t) {
                    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
                        (r = e[o]).style && (n = r.style.display,
                        t ? ("none" === n && (i[o] = Z.get(r, "display") || null,
                        i[o] || (r.style.display = "")),
                        "" === r.style.display && le(r) && (i[o] = de(r))) : "none" !== n && (i[o] = "none",
                        Z.set(r, "display", n)));
                    for (o = 0; o < a; o++)
                        null != i[o] && (e[o].style.display = i[o]);
                    return e
                }
                E.fn.extend({
                    show: function() {
                        return pe(this, !0)
                    },
                    hide: function() {
                        return pe(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            le(this) ? E(this).show() : E(this).hide()
                        }
                        ))
                    }
                });
                var he, me, ve = /^(?:checkbox|radio)$/i, ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ye = /^$|^module$|\/(?:java|ecma)script/i;
                he = b.createDocumentFragment().appendChild(b.createElement("div")),
                (me = b.createElement("input")).setAttribute("type", "radio"),
                me.setAttribute("checked", "checked"),
                me.setAttribute("name", "t"),
                he.appendChild(me),
                v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked,
                he.innerHTML = "<textarea>x</textarea>",
                v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue,
                he.innerHTML = "<option></option>",
                v.option = !!he.lastChild;
                var be = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                function xe(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                    void 0 === t || t && L(e, t) ? E.merge([e], n) : n
                }
                function we(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
                }
                be.tbody = be.tfoot = be.colgroup = be.caption = be.thead,
                be.th = be.td,
                v.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
                var Te = /<|&#?\w+;/;
                function Ce(e, t, n, r, i) {
                    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                        if ((o = e[p]) || 0 === o)
                            if ("object" === T(o))
                                E.merge(d, o.nodeType ? [o] : o);
                            else if (Te.test(o)) {
                                for (a = a || f.appendChild(t.createElement("div")),
                                s = (ge.exec(o) || ["", ""])[1].toLowerCase(),
                                u = be[s] || be._default,
                                a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                                c = u[0]; c--; )
                                    a = a.lastChild;
                                E.merge(d, a.childNodes),
                                (a = f.firstChild).textContent = ""
                            } else
                                d.push(t.createTextNode(o));
                    for (f.textContent = "",
                    p = 0; o = d[p++]; )
                        if (r && E.inArray(o, r) > -1)
                            i && i.push(o);
                        else if (l = se(o),
                        a = xe(f.appendChild(o), "script"),
                        l && we(a),
                        n)
                            for (c = 0; o = a[c++]; )
                                ye.test(o.type || "") && n.push(o);
                    return f
                }
                var Ee = /^([^.]*)(?:\.(.+)|)/;
                function Ae() {
                    return !0
                }
                function Se() {
                    return !1
                }
                function Ne(e, t) {
                    return e === function() {
                        try {
                            return b.activeElement
                        } catch (e) {}
                    }() == ("focus" === t)
                }
                function ke(e, t, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (r = r || n,
                        n = void 0),
                        t)
                            ke(e, s, n, r, t[s], o);
                        return e
                    }
                    if (null == r && null == i ? (i = n,
                    r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                    r = void 0) : (i = r,
                    r = n,
                    n = void 0)),
                    !1 === i)
                        i = Se;
                    else if (!i)
                        return e;
                    return 1 === o && (a = i,
                    i = function(e) {
                        return E().off(e),
                        a.apply(this, arguments)
                    }
                    ,
                    i.guid = a.guid || (a.guid = E.guid++)),
                    e.each((function() {
                        E.event.add(this, t, i, r, n)
                    }
                    ))
                }
                function De(e, t, n) {
                    n ? (Z.set(e, t, !1),
                    E.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var r, i, o = Z.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (o.length)
                                    (E.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (o = s.call(arguments),
                                Z.set(this, t, o),
                                r = n(this, t),
                                this[t](),
                                o !== (i = Z.get(this, t)) || r ? Z.set(this, t, !1) : i = {},
                                o !== i)
                                    return e.stopImmediatePropagation(),
                                    e.preventDefault(),
                                    i && i.value
                            } else
                                o.length && (Z.set(this, t, {
                                    value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)
                                }),
                                e.stopImmediatePropagation())
                        }
                    })) : void 0 === Z.get(e, t) && E.event.add(e, t, Ae)
                }
                E.event = {
                    global: {},
                    add: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, d, p, h, m, v = Z.get(e);
                        if (J(e))
                            for (n.handler && (n = (o = n).handler,
                            i = o.selector),
                            i && E.find.matchesSelector(ae, i),
                            n.guid || (n.guid = E.guid++),
                            (u = v.events) || (u = v.events = Object.create(null)),
                            (a = v.handle) || (a = v.handle = function(t) {
                                return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            l = (t = (t || "").match(q) || [""]).length; l--; )
                                p = m = (s = Ee.exec(t[l]) || [])[1],
                                h = (s[2] || "").split(".").sort(),
                                p && (f = E.event.special[p] || {},
                                p = (i ? f.delegateType : f.bindType) || p,
                                f = E.event.special[p] || {},
                                c = E.extend({
                                    type: p,
                                    origType: m,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && E.expr.match.needsContext.test(i),
                                    namespace: h.join(".")
                                }, o),
                                (d = u[p]) || ((d = u[p] = []).delegateCount = 0,
                                f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                                f.add && (f.add.call(e, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                                i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                                E.event.global[p] = !0)
                    },
                    remove: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, d, p, h, m, v = Z.hasData(e) && Z.get(e);
                        if (v && (u = v.events)) {
                            for (l = (t = (t || "").match(q) || [""]).length; l--; )
                                if (p = m = (s = Ee.exec(t[l]) || [])[1],
                                h = (s[2] || "").split(".").sort(),
                                p) {
                                    for (f = E.event.special[p] || {},
                                    d = u[p = (r ? f.delegateType : f.bindType) || p] || [],
                                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    a = o = d.length; o--; )
                                        c = d[o],
                                        !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                                        c.selector && d.delegateCount--,
                                        f.remove && f.remove.call(e, c));
                                    a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle),
                                    delete u[p])
                                } else
                                    for (p in u)
                                        E.event.remove(e, p + t[l], n, r, !0);
                            E.isEmptyObject(u) && Z.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, a, s = new Array(arguments.length), u = E.event.fix(e), l = (Z.get(this, "events") || Object.create(null))[u.type] || [], c = E.event.special[u.type] || {};
                        for (s[0] = u,
                        t = 1; t < arguments.length; t++)
                            s[t] = arguments[t];
                        if (u.delegateTarget = this,
                        !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                            for (a = E.event.handlers.call(this, u, l),
                            t = 0; (i = a[t++]) && !u.isPropagationStopped(); )
                                for (u.currentTarget = i.elem,
                                n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                                    u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                                    u.data = o.data,
                                    void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                                    u.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, u),
                            u.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
                        if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                    for (o = [],
                                    a = {},
                                    n = 0; n < u; n++)
                                        void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? E(i, this).index(l) > -1 : E.find(i, this, null, [l]).length),
                                        a[i] && o.push(r);
                                    o.length && s.push({
                                        elem: l,
                                        handlers: o
                                    })
                                }
                        return l = this,
                        u < t.length && s.push({
                            elem: l,
                            handlers: t.slice(u)
                        }),
                        s
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(E.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: g(t) ? function() {
                                if (this.originalEvent)
                                    return t(this.originalEvent)
                            }
                            : function() {
                                if (this.originalEvent)
                                    return this.originalEvent[e]
                            }
                            ,
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[E.expando] ? e : new E.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return ve.test(t.type) && t.click && L(t, "input") && De(t, "click", Ae),
                                !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return ve.test(t.type) && t.click && L(t, "input") && De(t, "click"),
                                !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return ve.test(t.type) && t.click && L(t, "input") && Z.get(t, "click") || L(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                },
                E.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                ,
                E.Event = function(e, t) {
                    if (!(this instanceof E.Event))
                        return new E.Event(e,t);
                    e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Se,
                    this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                    this.currentTarget = e.currentTarget,
                    this.relatedTarget = e.relatedTarget) : this.type = e,
                    t && E.extend(this, t),
                    this.timeStamp = e && e.timeStamp || Date.now(),
                    this[E.expando] = !0
                }
                ,
                E.Event.prototype = {
                    constructor: E.Event,
                    isDefaultPrevented: Se,
                    isPropagationStopped: Se,
                    isImmediatePropagationStopped: Se,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Ae,
                        e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Ae,
                        e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Ae,
                        e && !this.isSimulated && e.stopImmediatePropagation(),
                        this.stopPropagation()
                    }
                },
                E.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, E.event.addProp),
                E.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    E.event.special[e] = {
                        setup: function() {
                            return De(this, e, Ne),
                            !1
                        },
                        trigger: function() {
                            return De(this, e),
                            !0
                        },
                        _default: function() {
                            return !0
                        },
                        delegateType: t
                    }
                }
                )),
                E.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    E.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = this, i = e.relatedTarget, o = e.handleObj;
                            return i && (i === r || E.contains(r, i)) || (e.type = o.origType,
                            n = o.handler.apply(this, arguments),
                            e.type = t),
                            n
                        }
                    }
                }
                )),
                E.fn.extend({
                    on: function(e, t, n, r) {
                        return ke(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return ke(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj)
                            return r = e.handleObj,
                            E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                            this;
                        if ("object" == typeof e) {
                            for (i in e)
                                this.off(i, t, e[i]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t,
                        t = void 0),
                        !1 === n && (n = Se),
                        this.each((function() {
                            E.event.remove(this, e, n, t)
                        }
                        ))
                    }
                });
                var Le = /<script|<style|<link/i
                  , Oe = /checked\s*(?:[^=]|=\s*.checked.)/i
                  , Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                function je(e, t) {
                    return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
                }
                function He(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
                }
                function Pe(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                    e
                }
                function Be(e, t) {
                    var n, r, i, o, a, s;
                    if (1 === t.nodeType) {
                        if (Z.hasData(e) && (s = Z.get(e).events))
                            for (i in Z.remove(t, "handle events"),
                            s)
                                for (n = 0,
                                r = s[i].length; n < r; n++)
                                    E.event.add(t, i, s[i][n]);
                        K.hasData(e) && (o = K.access(e),
                        a = E.extend({}, o),
                        K.set(t, a))
                    }
                }
                function Ie(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
                function qe(e, t, n, r) {
                    t = u(t);
                    var i, o, a, s, l, c, f = 0, d = e.length, p = d - 1, h = t[0], m = g(h);
                    if (m || d > 1 && "string" == typeof h && !v.checkClone && Oe.test(h))
                        return e.each((function(i) {
                            var o = e.eq(i);
                            m && (t[0] = h.call(this, i, o.html())),
                            qe(o, t, n, r)
                        }
                        ));
                    if (d && (o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild,
                    1 === i.childNodes.length && (i = o),
                    o || r)) {
                        for (s = (a = E.map(xe(i, "script"), He)).length; f < d; f++)
                            l = i,
                            f !== p && (l = E.clone(l, !0, !0),
                            s && E.merge(a, xe(l, "script"))),
                            n.call(e[f], l, f);
                        if (s)
                            for (c = a[a.length - 1].ownerDocument,
                            E.map(a, Pe),
                            f = 0; f < s; f++)
                                l = a[f],
                                ye.test(l.type || "") && !Z.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                                    nonce: l.nonce || l.getAttribute("nonce")
                                }, c) : w(l.textContent.replace(Me, ""), l, c))
                    }
                    return e
                }
                function ze(e, t, n) {
                    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                        n || 1 !== r.nodeType || E.cleanData(xe(r)),
                        r.parentNode && (n && se(r) && we(xe(r, "script")),
                        r.parentNode.removeChild(r));
                    return e
                }
                E.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, i, o, a, s = e.cloneNode(!0), u = se(e);
                        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                            for (a = xe(s),
                            r = 0,
                            i = (o = xe(e)).length; r < i; r++)
                                Ie(o[r], a[r]);
                        if (t)
                            if (n)
                                for (o = o || xe(e),
                                a = a || xe(s),
                                r = 0,
                                i = o.length; r < i; r++)
                                    Be(o[r], a[r]);
                            else
                                Be(e, s);
                        return (a = xe(s, "script")).length > 0 && we(a, !u && xe(e, "script")),
                        s
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (J(n)) {
                                if (t = n[Z.expando]) {
                                    if (t.events)
                                        for (r in t.events)
                                            i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                                    n[Z.expando] = void 0
                                }
                                n[K.expando] && (n[K.expando] = void 0)
                            }
                    }
                }),
                E.fn.extend({
                    detach: function(e) {
                        return ze(this, e, !0)
                    },
                    remove: function(e) {
                        return ze(this, e)
                    },
                    text: function(e) {
                        return $(this, (function(e) {
                            return void 0 === e ? E.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }
                            ))
                        }
                        ), null, e, arguments.length)
                    },
                    append: function() {
                        return qe(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
                        }
                        ))
                    },
                    prepend: function() {
                        return qe(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = je(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        }
                        ))
                    },
                    before: function() {
                        return qe(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }
                        ))
                    },
                    after: function() {
                        return qe(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }
                        ))
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            1 === e.nodeType && (E.cleanData(xe(e, !1)),
                            e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e,
                        t = null == t ? e : t,
                        this.map((function() {
                            return E.clone(this, e, t)
                        }
                        ))
                    },
                    html: function(e) {
                        return $(this, (function(e) {
                            var t = this[0] || {}
                              , n = 0
                              , r = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !Le.test(e) && !be[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = E.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++)
                                        1 === (t = this[n] || {}).nodeType && (E.cleanData(xe(t, !1)),
                                        t.innerHTML = e);
                                    t = 0
                                } catch (e) {}
                            }
                            t && this.empty().append(e)
                        }
                        ), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return qe(this, arguments, (function(t) {
                            var n = this.parentNode;
                            E.inArray(this, e) < 0 && (E.cleanData(xe(this)),
                            n && n.replaceChild(t, this))
                        }
                        ), e)
                    }
                }),
                E.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    E.fn[e] = function(e) {
                        for (var n, r = [], i = E(e), o = i.length - 1, a = 0; a <= o; a++)
                            n = a === o ? this : this.clone(!0),
                            E(i[a])[t](n),
                            l.apply(r, n.get());
                        return this.pushStack(r)
                    }
                }
                ));
                var Re = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
                  , Fe = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = r),
                    t.getComputedStyle(e)
                }
                  , We = function(e, t, n) {
                    var r, i, o = {};
                    for (i in t)
                        o[i] = e.style[i],
                        e.style[i] = t[i];
                    for (i in r = n.call(e),
                    t)
                        e.style[i] = o[i];
                    return r
                }
                  , _e = new RegExp(oe.join("|"),"i");
                function Ue(e, t, n) {
                    var r, i, o, a, s = e.style;
                    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = E.style(e, t)),
                    !v.pixelBoxStyles() && Re.test(a) && _e.test(t) && (r = s.width,
                    i = s.minWidth,
                    o = s.maxWidth,
                    s.minWidth = s.maxWidth = s.width = a,
                    a = n.width,
                    s.width = r,
                    s.minWidth = i,
                    s.maxWidth = o)),
                    void 0 !== a ? a + "" : a
                }
                function $e(e, t) {
                    return {
                        get: function() {
                            if (!e())
                                return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }
                !function() {
                    function e() {
                        if (c) {
                            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                            c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                            ae.appendChild(l).appendChild(c);
                            var e = r.getComputedStyle(c);
                            n = "1%" !== e.top,
                            u = 12 === t(e.marginLeft),
                            c.style.right = "60%",
                            a = 36 === t(e.right),
                            i = 36 === t(e.width),
                            c.style.position = "absolute",
                            o = 12 === t(c.offsetWidth / 3),
                            ae.removeChild(l),
                            c = null
                        }
                    }
                    function t(e) {
                        return Math.round(parseFloat(e))
                    }
                    var n, i, o, a, s, u, l = b.createElement("div"), c = b.createElement("div");
                    c.style && (c.style.backgroundClip = "content-box",
                    c.cloneNode(!0).style.backgroundClip = "",
                    v.clearCloneStyle = "content-box" === c.style.backgroundClip,
                    E.extend(v, {
                        boxSizingReliable: function() {
                            return e(),
                            i
                        },
                        pixelBoxStyles: function() {
                            return e(),
                            a
                        },
                        pixelPosition: function() {
                            return e(),
                            n
                        },
                        reliableMarginLeft: function() {
                            return e(),
                            u
                        },
                        scrollboxSize: function() {
                            return e(),
                            o
                        },
                        reliableTrDimensions: function() {
                            var e, t, n, i;
                            return null == s && (e = b.createElement("table"),
                            t = b.createElement("tr"),
                            n = b.createElement("div"),
                            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                            t.style.cssText = "border:1px solid",
                            t.style.height = "1px",
                            n.style.height = "9px",
                            n.style.display = "block",
                            ae.appendChild(e).appendChild(t).appendChild(n),
                            i = r.getComputedStyle(t),
                            s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight,
                            ae.removeChild(e)),
                            s
                        }
                    }))
                }();
                var Ve = ["Webkit", "Moz", "ms"]
                  , Ye = b.createElement("div").style
                  , Xe = {};
                function Ge(e) {
                    var t = E.cssProps[e] || Xe[e];
                    return t || (e in Ye ? e : Xe[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--; )
                            if ((e = Ve[n] + t)in Ye)
                                return e
                    }(e) || e)
                }
                var Je = /^(none|table(?!-c[ea]).+)/
                  , Qe = /^--/
                  , Ze = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                  , Ke = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function et(e, t, n) {
                    var r = ie.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }
                function tt(e, t, n, r, i, o) {
                    var a = "width" === t ? 1 : 0
                      , s = 0
                      , u = 0;
                    if (n === (r ? "border" : "content"))
                        return 0;
                    for (; a < 4; a += 2)
                        "margin" === n && (u += E.css(e, n + oe[a], !0, i)),
                        r ? ("content" === n && (u -= E.css(e, "padding" + oe[a], !0, i)),
                        "margin" !== n && (u -= E.css(e, "border" + oe[a] + "Width", !0, i))) : (u += E.css(e, "padding" + oe[a], !0, i),
                        "padding" !== n ? u += E.css(e, "border" + oe[a] + "Width", !0, i) : s += E.css(e, "border" + oe[a] + "Width", !0, i));
                    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
                    u
                }
                function nt(e, t, n) {
                    var r = Fe(e)
                      , i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r)
                      , o = i
                      , a = Ue(e, t, r)
                      , s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Re.test(a)) {
                        if (!n)
                            return a;
                        a = "auto"
                    }
                    return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && L(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r),
                    (o = s in e) && (a = e[s])),
                    (a = parseFloat(a) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                }
                function rt(e, t, n, r, i) {
                    return new rt.prototype.init(e,t,n,r,i)
                }
                E.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = Ue(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, o, a, s = G(t), u = Qe.test(t), l = e.style;
                            if (u || (t = Ge(s)),
                            a = E.cssHooks[t] || E.cssHooks[s],
                            void 0 === n)
                                return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                            "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ce(e, t, i),
                            o = "number"),
                            null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")),
                            v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                            a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o, a, s = G(t);
                        return Qe.test(t) || (t = Ge(s)),
                        (a = E.cssHooks[t] || E.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
                        void 0 === i && (i = Ue(e, t, r)),
                        "normal" === i && t in Ke && (i = Ke[t]),
                        "" === n || n ? (o = parseFloat(i),
                        !0 === n || isFinite(o) ? o || 0 : i) : i
                    }
                }),
                E.each(["height", "width"], (function(e, t) {
                    E.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n)
                                return !Je.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : We(e, Ze, (function() {
                                    return nt(e, t, r)
                                }
                                ))
                        },
                        set: function(e, n, r) {
                            var i, o = Fe(e), a = !v.scrollboxSize() && "absolute" === o.position, s = (a || r) && "border-box" === E.css(e, "boxSizing", !1, o), u = r ? tt(e, t, r, s, o) : 0;
                            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)),
                            u && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                            n = E.css(e, t)),
                            et(0, n, u)
                        }
                    }
                }
                )),
                E.cssHooks.marginLeft = $e(v.reliableMarginLeft, (function(e, t) {
                    if (t)
                        return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                            marginLeft: 0
                        }, (function() {
                            return e.getBoundingClientRect().left
                        }
                        ))) + "px"
                }
                )),
                E.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    E.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                                i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    },
                    "margin" !== e && (E.cssHooks[e + t].set = et)
                }
                )),
                E.fn.extend({
                    css: function(e, t) {
                        return $(this, (function(e, t, n) {
                            var r, i, o = {}, a = 0;
                            if (Array.isArray(t)) {
                                for (r = Fe(e),
                                i = t.length; a < i; a++)
                                    o[t[a]] = E.css(e, t[a], !1, r);
                                return o
                            }
                            return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                        }
                        ), e, t, arguments.length > 1)
                    }
                }),
                E.Tween = rt,
                rt.prototype = {
                    constructor: rt,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e,
                        this.prop = n,
                        this.easing = i || E.easing._default,
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = r,
                        this.unit = o || (E.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = rt.propHooks[this.prop];
                        return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = rt.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                        this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                        this
                    }
                },
                rt.prototype.init.prototype = rt.prototype,
                rt.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                E.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                E.fx = rt.prototype.init,
                E.fx.step = {};
                var it, ot, at = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
                function ut() {
                    ot && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(ut) : r.setTimeout(ut, E.fx.interval),
                    E.fx.tick())
                }
                function lt() {
                    return r.setTimeout((function() {
                        it = void 0
                    }
                    )),
                    it = Date.now()
                }
                function ct(e, t) {
                    var n, r = 0, i = {
                        height: e
                    };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t)
                        i["margin" + (n = oe[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e),
                    i
                }
                function ft(e, t, n) {
                    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                        if (r = i[o].call(n, t, e))
                            return r
                }
                function dt(e, t, n) {
                    var r, i, o = 0, a = dt.prefilters.length, s = E.Deferred().always((function() {
                        delete u.elem
                    }
                    )), u = function() {
                        if (i)
                            return !1;
                        for (var t = it || lt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                            l.tweens[o].run(r);
                        return s.notifyWith(e, [l, r, n]),
                        r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
                        s.resolveWith(e, [l]),
                        !1)
                    }, l = s.promise({
                        elem: e,
                        props: E.extend({}, t),
                        opts: E.extend(!0, {
                            specialEasing: {},
                            easing: E.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: it || lt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = E.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r),
                            r
                        },
                        stop: function(t) {
                            var n = 0
                              , r = t ? l.tweens.length : 0;
                            if (i)
                                return this;
                            for (i = !0; n < r; n++)
                                l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]),
                            s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                            this
                        }
                    }), c = l.props;
                    for (!function(e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (i = t[r = G(n)],
                            o = e[n],
                            Array.isArray(o) && (i = o[1],
                            o = e[n] = o[0]),
                            n !== r && (e[r] = o,
                            delete e[n]),
                            (a = E.cssHooks[r]) && "expand"in a)
                                for (n in o = a.expand(o),
                                delete e[r],
                                o)
                                    n in e || (e[n] = o[n],
                                    t[n] = i);
                            else
                                t[r] = i
                    }(c, l.opts.specialEasing); o < a; o++)
                        if (r = dt.prefilters[o].call(l, e, c, l.opts))
                            return g(r.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                            r;
                    return E.map(c, ft, l),
                    g(l.opts.start) && l.opts.start.call(e, l),
                    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                    E.fx.timer(E.extend(u, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })),
                    l
                }
                E.Animation = E.extend(dt, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return ce(n.elem, e, ie.exec(t), n),
                            n
                        }
                        ]
                    },
                    tweener: function(e, t) {
                        g(e) ? (t = e,
                        e = ["*"]) : e = e.match(q);
                        for (var n, r = 0, i = e.length; r < i; r++)
                            n = e[r],
                            dt.tweeners[n] = dt.tweeners[n] || [],
                            dt.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, m = e.nodeType && le(e), v = Z.get(e, "fxshow");
                        for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                        s = a.empty.fire,
                        a.empty.fire = function() {
                            a.unqueued || s()
                        }
                        ),
                        a.unqueued++,
                        d.always((function() {
                            d.always((function() {
                                a.unqueued--,
                                E.queue(e, "fx").length || a.empty.fire()
                            }
                            ))
                        }
                        ))),
                        t)
                            if (i = t[r],
                            at.test(i)) {
                                if (delete t[r],
                                o = o || "toggle" === i,
                                i === (m ? "hide" : "show")) {
                                    if ("show" !== i || !v || void 0 === v[r])
                                        continue;
                                    m = !0
                                }
                                p[r] = v && v[r] || E.style(e, r)
                            }
                        if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                            for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                            null == (l = v && v.display) && (l = Z.get(e, "display")),
                            "none" === (c = E.css(e, "display")) && (l ? c = l : (pe([e], !0),
                            l = e.style.display || l,
                            c = E.css(e, "display"),
                            pe([e]))),
                            ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (d.done((function() {
                                h.display = l
                            }
                            )),
                            null == l && (c = h.display,
                            l = "none" === c ? "" : c)),
                            h.display = "inline-block")),
                            n.overflow && (h.overflow = "hidden",
                            d.always((function() {
                                h.overflow = n.overflow[0],
                                h.overflowX = n.overflow[1],
                                h.overflowY = n.overflow[2]
                            }
                            ))),
                            u = !1,
                            p)
                                u || (v ? "hidden"in v && (m = v.hidden) : v = Z.access(e, "fxshow", {
                                    display: l
                                }),
                                o && (v.hidden = !m),
                                m && pe([e], !0),
                                d.done((function() {
                                    for (r in m || pe([e]),
                                    Z.remove(e, "fxshow"),
                                    p)
                                        E.style(e, r, p[r])
                                }
                                ))),
                                u = ft(m ? v[r] : 0, r, d),
                                r in v || (v[r] = u.start,
                                m && (u.end = u.start,
                                u.start = 0))
                    }
                    ],
                    prefilter: function(e, t) {
                        t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
                    }
                }),
                E.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? E.extend({}, e) : {
                        complete: n || !n && t || g(e) && e,
                        duration: e,
                        easing: n && t || t && !g(t) && t
                    };
                    return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default),
                    null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                    r.old = r.complete,
                    r.complete = function() {
                        g(r.old) && r.old.call(this),
                        r.queue && E.dequeue(this, r.queue)
                    }
                    ,
                    r
                }
                ,
                E.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(le).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = E.isEmptyObject(e)
                          , o = E.speed(t, n, r)
                          , a = function() {
                            var t = dt(this, E.extend({}, e), o);
                            (i || Z.get(this, "finish")) && t.stop(!0)
                        };
                        return a.finish = a,
                        i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop,
                            t(n)
                        };
                        return "string" != typeof e && (n = t,
                        t = e,
                        e = void 0),
                        t && this.queue(e || "fx", []),
                        this.each((function() {
                            var t = !0
                              , i = null != e && e + "queueHooks"
                              , o = E.timers
                              , a = Z.get(this);
                            if (i)
                                a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a)
                                    a[i] && a[i].stop && st.test(i) && r(a[i]);
                            for (i = o.length; i--; )
                                o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                            !t && n || E.dequeue(this, e)
                        }
                        ))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"),
                        this.each((function() {
                            var t, n = Z.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = E.timers, a = r ? r.length : 0;
                            for (n.finish = !0,
                            E.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length; t--; )
                                o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                            for (t = 0; t < a; t++)
                                r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        }
                        ))
                    }
                }),
                E.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = E.fn[t];
                    E.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, i)
                    }
                }
                )),
                E.each({
                    slideDown: ct("show"),
                    slideUp: ct("hide"),
                    slideToggle: ct("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    E.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }
                )),
                E.timers = [],
                E.fx.tick = function() {
                    var e, t = 0, n = E.timers;
                    for (it = Date.now(); t < n.length; t++)
                        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || E.fx.stop(),
                    it = void 0
                }
                ,
                E.fx.timer = function(e) {
                    E.timers.push(e),
                    E.fx.start()
                }
                ,
                E.fx.interval = 13,
                E.fx.start = function() {
                    ot || (ot = !0,
                    ut())
                }
                ,
                E.fx.stop = function() {
                    ot = null
                }
                ,
                E.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                E.fn.delay = function(e, t) {
                    return e = E.fx && E.fx.speeds[e] || e,
                    t = t || "fx",
                    this.queue(t, (function(t, n) {
                        var i = r.setTimeout(t, e);
                        n.stop = function() {
                            r.clearTimeout(i)
                        }
                    }
                    ))
                }
                ,
                function() {
                    var e = b.createElement("input")
                      , t = b.createElement("select").appendChild(b.createElement("option"));
                    e.type = "checkbox",
                    v.checkOn = "" !== e.value,
                    v.optSelected = t.selected,
                    (e = b.createElement("input")).value = "t",
                    e.type = "radio",
                    v.radioValue = "t" === e.value
                }();
                var pt, ht = E.expr.attrHandle;
                E.fn.extend({
                    attr: function(e, t) {
                        return $(this, E.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            E.removeAttr(this, e)
                        }
                        ))
                    }
                }),
                E.extend({
                    attr: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)),
                            void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!v.radioValue && "radio" === t && L(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                    n && (e.value = n),
                                    t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0, i = t && t.match(q);
                        if (i && 1 === e.nodeType)
                            for (; n = i[r++]; )
                                e.removeAttribute(n)
                    }
                }),
                pt = {
                    set: function(e, t, n) {
                        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
                        n
                    }
                },
                E.each(E.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = ht[t] || E.find.attr;
                    ht[t] = function(e, t, r) {
                        var i, o, a = t.toLowerCase();
                        return r || (o = ht[a],
                        ht[a] = i,
                        i = null != n(e, t, r) ? a : null,
                        ht[a] = o),
                        i
                    }
                }
                ));
                var mt = /^(?:input|select|textarea|button)$/i
                  , vt = /^(?:a|area)$/i;
                function gt(e) {
                    return (e.match(q) || []).join(" ")
                }
                function yt(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }
                function bt(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []
                }
                E.fn.extend({
                    prop: function(e, t) {
                        return $(this, E.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[E.propFix[e] || e]
                        }
                        ))
                    }
                }),
                E.extend({
                    prop: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                            i = E.propHooks[t]),
                            void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = E.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }),
                v.optSelected || (E.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex,
                        null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex)
                    }
                }),
                E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    E.propFix[this.toLowerCase()] = this
                }
                )),
                E.fn.extend({
                    addClass: function(e) {
                        var t, n, r, i, o, a, s, u = 0;
                        if (g(e))
                            return this.each((function(t) {
                                E(this).addClass(e.call(this, t, yt(this)))
                            }
                            ));
                        if ((t = bt(e)).length)
                            for (; n = this[u++]; )
                                if (i = yt(n),
                                r = 1 === n.nodeType && " " + gt(i) + " ") {
                                    for (a = 0; o = t[a++]; )
                                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                    i !== (s = gt(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var t, n, r, i, o, a, s, u = 0;
                        if (g(e))
                            return this.each((function(t) {
                                E(this).removeClass(e.call(this, t, yt(this)))
                            }
                            ));
                        if (!arguments.length)
                            return this.attr("class", "");
                        if ((t = bt(e)).length)
                            for (; n = this[u++]; )
                                if (i = yt(n),
                                r = 1 === n.nodeType && " " + gt(i) + " ") {
                                    for (a = 0; o = t[a++]; )
                                        for (; r.indexOf(" " + o + " ") > -1; )
                                            r = r.replace(" " + o + " ", " ");
                                    i !== (s = gt(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e
                          , r = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function(n) {
                            E(this).toggleClass(e.call(this, n, yt(this), t), t)
                        }
                        )) : this.each((function() {
                            var t, i, o, a;
                            if (r)
                                for (i = 0,
                                o = E(this),
                                a = bt(e); t = a[i++]; )
                                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                            else
                                void 0 !== e && "boolean" !== n || ((t = yt(this)) && Z.set(this, "__className__", t),
                                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
                        }
                        ))
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++]; )
                            if (1 === n.nodeType && (" " + gt(yt(n)) + " ").indexOf(t) > -1)
                                return !0;
                        return !1
                    }
                });
                var xt = /\r/g;
                E.fn.extend({
                    val: function(e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = g(e),
                        this.each((function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, E(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = E.map(i, (function(e) {
                                return null == e ? "" : e + ""
                            }
                            ))),
                            (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        }
                        ))) : i ? (t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
                    }
                }),
                E.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = E.find.attr(e, "value");
                                return null != t ? t : gt(E.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                    if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                                        if (t = E(n).val(),
                                        a)
                                            return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--; )
                                    ((r = i[a]).selected = E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                o
                            }
                        }
                    }
                }),
                E.each(["radio", "checkbox"], (function() {
                    E.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t))
                                return e.checked = E.inArray(E(e).val(), t) > -1
                        }
                    },
                    v.checkOn || (E.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    }
                    )
                }
                )),
                v.focusin = "onfocusin"in r;
                var wt = /^(?:focusinfocus|focusoutblur)$/
                  , Tt = function(e) {
                    e.stopPropagation()
                };
                E.extend(E.event, {
                    trigger: function(e, t, n, i) {
                        var o, a, s, u, l, c, f, d, h = [n || b], m = p.call(e, "type") ? e.type : e, v = p.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (a = d = s = n = n || b,
                        3 !== n.nodeType && 8 !== n.nodeType && !wt.test(m + E.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."),
                        m = v.shift(),
                        v.sort()),
                        l = m.indexOf(":") < 0 && "on" + m,
                        (e = e[E.expando] ? e : new E.Event(m,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
                        e.namespace = v.join("."),
                        e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        e.result = void 0,
                        e.target || (e.target = n),
                        t = null == t ? [e] : E.makeArray(t, [e]),
                        f = E.event.special[m] || {},
                        i || !f.trigger || !1 !== f.trigger.apply(n, t))) {
                            if (!i && !f.noBubble && !y(n)) {
                                for (u = f.delegateType || m,
                                wt.test(u + m) || (a = a.parentNode); a; a = a.parentNode)
                                    h.push(a),
                                    s = a;
                                s === (n.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || r)
                            }
                            for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                                d = a,
                                e.type = o > 1 ? u : f.bindType || m,
                                (c = (Z.get(a, "events") || Object.create(null))[e.type] && Z.get(a, "handle")) && c.apply(a, t),
                                (c = l && a[l]) && c.apply && J(a) && (e.result = c.apply(a, t),
                                !1 === e.result && e.preventDefault());
                            return e.type = m,
                            i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !J(n) || l && g(n[m]) && !y(n) && ((s = n[l]) && (n[l] = null),
                            E.event.triggered = m,
                            e.isPropagationStopped() && d.addEventListener(m, Tt),
                            n[m](),
                            e.isPropagationStopped() && d.removeEventListener(m, Tt),
                            E.event.triggered = void 0,
                            s && (n[l] = s)),
                            e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = E.extend(new E.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        E.event.trigger(r, null, t)
                    }
                }),
                E.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            E.event.trigger(e, t, this)
                        }
                        ))
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n)
                            return E.event.trigger(e, t, n, !0)
                    }
                }),
                v.focusin || E.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    var n = function(e) {
                        E.event.simulate(t, e.target, E.event.fix(e))
                    };
                    E.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this
                              , i = Z.access(r, t);
                            i || r.addEventListener(e, n, !0),
                            Z.access(r, t, (i || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this
                              , i = Z.access(r, t) - 1;
                            i ? Z.access(r, t, i) : (r.removeEventListener(e, n, !0),
                            Z.remove(r, t))
                        }
                    }
                }
                ));
                var Ct = r.location
                  , Et = {
                    guid: Date.now()
                }
                  , At = /\?/;
                E.parseXML = function(e) {
                    var t, n;
                    if (!e || "string" != typeof e)
                        return null;
                    try {
                        t = (new r.DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {}
                    return n = t && t.getElementsByTagName("parsererror")[0],
                    t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, (function(e) {
                        return e.textContent
                    }
                    )).join("\n") : e)),
                    t
                }
                ;
                var St = /\[\]$/
                  , Nt = /\r?\n/g
                  , kt = /^(?:submit|button|image|reset|file)$/i
                  , Dt = /^(?:input|select|textarea|keygen)/i;
                function Lt(e, t, n, r) {
                    var i;
                    if (Array.isArray(t))
                        E.each(t, (function(t, i) {
                            n || St.test(e) ? r(e, i) : Lt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                        }
                        ));
                    else if (n || "object" !== T(t))
                        r(e, t);
                    else
                        for (i in t)
                            Lt(e + "[" + i + "]", t[i], n, r)
                }
                E.param = function(e, t) {
                    var n, r = [], i = function(e, t) {
                        var n = g(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                    if (null == e)
                        return "";
                    if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
                        E.each(e, (function() {
                            i(this.name, this.value)
                        }
                        ));
                    else
                        for (n in e)
                            Lt(n, e[n], t, i);
                    return r.join("&")
                }
                ,
                E.fn.extend({
                    serialize: function() {
                        return E.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = E.prop(this, "elements");
                            return e ? E.makeArray(e) : this
                        }
                        )).filter((function() {
                            var e = this.type;
                            return this.name && !E(this).is(":disabled") && Dt.test(this.nodeName) && !kt.test(e) && (this.checked || !ve.test(e))
                        }
                        )).map((function(e, t) {
                            var n = E(this).val();
                            return null == n ? null : Array.isArray(n) ? E.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Nt, "\r\n")
                                }
                            }
                            )) : {
                                name: t.name,
                                value: n.replace(Nt, "\r\n")
                            }
                        }
                        )).get()
                    }
                });
                var Ot = /%20/g
                  , Mt = /#.*$/
                  , jt = /([?&])_=[^&]*/
                  , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
                  , Pt = /^(?:GET|HEAD)$/
                  , Bt = /^\/\//
                  , It = {}
                  , qt = {}
                  , zt = "*/".concat("*")
                  , Rt = b.createElement("a");
                function Ft(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t,
                        t = "*");
                        var r, i = 0, o = t.toLowerCase().match(q) || [];
                        if (g(n))
                            for (; r = o[i++]; )
                                "+" === r[0] ? (r = r.slice(1) || "*",
                                (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }
                function Wt(e, t, n, r) {
                    var i = {}
                      , o = e === qt;
                    function a(s) {
                        var u;
                        return i[s] = !0,
                        E.each(e[s] || [], (function(e, s) {
                            var l = s(t, n, r);
                            return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                            a(l),
                            !1)
                        }
                        )),
                        u
                    }
                    return a(t.dataTypes[0]) || !i["*"] && a("*")
                }
                function _t(e, t) {
                    var n, r, i = E.ajaxSettings.flatOptions || {};
                    for (n in t)
                        void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && E.extend(!0, e, r),
                    e
                }
                Rt.href = Ct.href,
                E.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Ct.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": zt,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": E.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? _t(_t(e, E.ajaxSettings), t) : _t(E.ajaxSettings, e)
                    },
                    ajaxPrefilter: Ft(It),
                    ajaxTransport: Ft(qt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e,
                        e = void 0),
                        t = t || {};
                        var n, i, o, a, s, u, l, c, f, d, p = E.ajaxSetup({}, t), h = p.context || p, m = p.context && (h.nodeType || h.jquery) ? E(h) : E.event, v = E.Deferred(), g = E.Callbacks("once memory"), y = p.statusCode || {}, x = {}, w = {}, T = "canceled", C = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (l) {
                                    if (!a)
                                        for (a = {}; t = Ht.exec(o); )
                                            a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = a[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return l ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                                x[e] = t),
                                this
                            },
                            overrideMimeType: function(e) {
                                return null == l && (p.mimeType = e),
                                this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (l)
                                        C.always(e[C.status]);
                                    else
                                        for (t in e)
                                            y[t] = [y[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || T;
                                return n && n.abort(t),
                                A(0, t),
                                this
                            }
                        };
                        if (v.promise(C),
                        p.url = ((e || p.url || Ct.href) + "").replace(Bt, Ct.protocol + "//"),
                        p.type = t.method || t.type || p.method || p.type,
                        p.dataTypes = (p.dataType || "*").toLowerCase().match(q) || [""],
                        null == p.crossDomain) {
                            u = b.createElement("a");
                            try {
                                u.href = p.url,
                                u.href = u.href,
                                p.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host
                            } catch (e) {
                                p.crossDomain = !0
                            }
                        }
                        if (p.data && p.processData && "string" != typeof p.data && (p.data = E.param(p.data, p.traditional)),
                        Wt(It, p, t, C),
                        l)
                            return C;
                        for (f in (c = E.event && p.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                        p.type = p.type.toUpperCase(),
                        p.hasContent = !Pt.test(p.type),
                        i = p.url.replace(Mt, ""),
                        p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ot, "+")) : (d = p.url.slice(i.length),
                        p.data && (p.processData || "string" == typeof p.data) && (i += (At.test(i) ? "&" : "?") + p.data,
                        delete p.data),
                        !1 === p.cache && (i = i.replace(jt, "$1"),
                        d = (At.test(i) ? "&" : "?") + "_=" + Et.guid++ + d),
                        p.url = i + d),
                        p.ifModified && (E.lastModified[i] && C.setRequestHeader("If-Modified-Since", E.lastModified[i]),
                        E.etag[i] && C.setRequestHeader("If-None-Match", E.etag[i])),
                        (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && C.setRequestHeader("Content-Type", p.contentType),
                        C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : p.accepts["*"]),
                        p.headers)
                            C.setRequestHeader(f, p.headers[f]);
                        if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || l))
                            return C.abort();
                        if (T = "abort",
                        g.add(p.complete),
                        C.done(p.success),
                        C.fail(p.error),
                        n = Wt(qt, p, t, C)) {
                            if (C.readyState = 1,
                            c && m.trigger("ajaxSend", [C, p]),
                            l)
                                return C;
                            p.async && p.timeout > 0 && (s = r.setTimeout((function() {
                                C.abort("timeout")
                            }
                            ), p.timeout));
                            try {
                                l = !1,
                                n.send(x, A)
                            } catch (e) {
                                if (l)
                                    throw e;
                                A(-1, e)
                            }
                        } else
                            A(-1, "No Transport");
                        function A(e, t, a, u) {
                            var f, d, b, x, w, T = t;
                            l || (l = !0,
                            s && r.clearTimeout(s),
                            n = void 0,
                            o = u || "",
                            C.readyState = e > 0 ? 4 : 0,
                            f = e >= 200 && e < 300 || 304 === e,
                            a && (x = function(e, t, n) {
                                for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                                    u.shift(),
                                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break
                                        }
                                if (u[0]in n)
                                    o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break
                                        }
                                        a || (a = i)
                                    }
                                    o = o || a
                                }
                                if (o)
                                    return o !== u[0] && u.unshift(o),
                                    n[o]
                            }(p, C, a)),
                            !f && E.inArray("script", p.dataTypes) > -1 && E.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}
                            ),
                            x = function(e, t, n, r) {
                                var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                                if (c[1])
                                    for (a in e.converters)
                                        l[a.toLowerCase()] = e.converters[a];
                                for (o = c.shift(); o; )
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    u = o,
                                    o = c.shift())
                                        if ("*" === o)
                                            o = u;
                                        else if ("*" !== u && u !== o) {
                                            if (!(a = l[u + " " + o] || l["* " + o]))
                                                for (i in l)
                                                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                                        c.unshift(s[1]));
                                                        break
                                                    }
                                            if (!0 !== a)
                                                if (a && e.throws)
                                                    t = a(t);
                                                else
                                                    try {
                                                        t = a(t)
                                                    } catch (e) {
                                                        return {
                                                            state: "parsererror",
                                                            error: a ? e : "No conversion from " + u + " to " + o
                                                        }
                                                    }
                                        }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(p, x, C, f),
                            f ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (E.lastModified[i] = w),
                            (w = C.getResponseHeader("etag")) && (E.etag[i] = w)),
                            204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state,
                            d = x.data,
                            f = !(b = x.error))) : (b = T,
                            !e && T || (T = "error",
                            e < 0 && (e = 0))),
                            C.status = e,
                            C.statusText = (t || T) + "",
                            f ? v.resolveWith(h, [d, T, C]) : v.rejectWith(h, [C, T, b]),
                            C.statusCode(y),
                            y = void 0,
                            c && m.trigger(f ? "ajaxSuccess" : "ajaxError", [C, p, f ? d : b]),
                            g.fireWith(h, [C, T]),
                            c && (m.trigger("ajaxComplete", [C, p]),
                            --E.active || E.event.trigger("ajaxStop")))
                        }
                        return C
                    },
                    getJSON: function(e, t, n) {
                        return E.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return E.get(e, void 0, t, "script")
                    }
                }),
                E.each(["get", "post"], (function(e, t) {
                    E[t] = function(e, n, r, i) {
                        return g(n) && (i = i || r,
                        r = n,
                        n = void 0),
                        E.ajax(E.extend({
                            url: e,
                            type: t,
                            dataType: i,
                            data: n,
                            success: r
                        }, E.isPlainObject(e) && e))
                    }
                }
                )),
                E.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers)
                        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                }
                )),
                E._evalUrl = function(e, t, n) {
                    return E.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            E.globalEval(e, t, n)
                        }
                    })
                }
                ,
                E.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (g(e) && (e = e.call(this[0])),
                        t = E(e, this[0].ownerDocument).eq(0).clone(!0),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t.map((function() {
                            for (var e = this; e.firstElementChild; )
                                e = e.firstElementChild;
                            return e
                        }
                        )).append(this)),
                        this
                    },
                    wrapInner: function(e) {
                        return g(e) ? this.each((function(t) {
                            E(this).wrapInner(e.call(this, t))
                        }
                        )) : this.each((function() {
                            var t = E(this)
                              , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        }
                        ))
                    },
                    wrap: function(e) {
                        var t = g(e);
                        return this.each((function(n) {
                            E(this).wrapAll(t ? e.call(this, n) : e)
                        }
                        ))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            E(this).replaceWith(this.childNodes)
                        }
                        )),
                        this
                    }
                }),
                E.expr.pseudos.hidden = function(e) {
                    return !E.expr.pseudos.visible(e)
                }
                ,
                E.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }
                ,
                E.ajaxSettings.xhr = function() {
                    try {
                        return new r.XMLHttpRequest
                    } catch (e) {}
                }
                ;
                var Ut = {
                    0: 200,
                    1223: 204
                }
                  , $t = E.ajaxSettings.xhr();
                v.cors = !!$t && "withCredentials"in $t,
                v.ajax = $t = !!$t,
                E.ajaxTransport((function(e) {
                    var t, n;
                    if (v.cors || $t && !e.crossDomain)
                        return {
                            send: function(i, o) {
                                var a, s = e.xhr();
                                if (s.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                                    for (a in e.xhrFields)
                                        s[a] = e.xhrFields[a];
                                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                                e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                                i)
                                    s.setRequestHeader(a, i[a]);
                                t = function(e) {
                                    return function() {
                                        t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                                        "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                            binary: s.response
                                        } : {
                                            text: s.responseText
                                        }, s.getAllResponseHeaders()))
                                    }
                                }
                                ,
                                s.onload = t(),
                                n = s.onerror = s.ontimeout = t("error"),
                                void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                                    4 === s.readyState && r.setTimeout((function() {
                                        t && n()
                                    }
                                    ))
                                }
                                ,
                                t = t("abort");
                                try {
                                    s.send(e.hasContent && e.data || null)
                                } catch (e) {
                                    if (t)
                                        throw e
                                }
                            },
                            abort: function() {
                                t && t()
                            }
                        }
                }
                )),
                E.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1)
                }
                )),
                E.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return E.globalEval(e),
                            e
                        }
                    }
                }),
                E.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET")
                }
                )),
                E.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs)
                        return {
                            send: function(r, i) {
                                t = E("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(),
                                    n = null,
                                    e && i("error" === e.type ? 404 : 200, e.type)
                                }
                                ),
                                b.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                }
                ));
                var Vt, Yt = [], Xt = /(=)\?(?=&|$)|\?\?/;
                E.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Yt.pop() || E.expando + "_" + Et.guid++;
                        return this[e] = !0,
                        e
                    }
                }),
                E.ajaxPrefilter("json jsonp", (function(e, t, n) {
                    var i, o, a, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0])
                        return i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        s ? e[s] = e[s].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                        e.converters["script json"] = function() {
                            return a || E.error(i + " was not called"),
                            a[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        o = r[i],
                        r[i] = function() {
                            a = arguments
                        }
                        ,
                        n.always((function() {
                            void 0 === o ? E(r).removeProp(i) : r[i] = o,
                            e[i] && (e.jsonpCallback = t.jsonpCallback,
                            Yt.push(i)),
                            a && g(o) && o(a[0]),
                            a = o = void 0
                        }
                        )),
                        "script"
                }
                )),
                v.createHTMLDocument = ((Vt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
                2 === Vt.childNodes.length),
                E.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                    t = !1),
                    t || (v.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href,
                    t.head.appendChild(r)) : t = b),
                    o = !n && [],
                    (i = O.exec(e)) ? [t.createElement(i[1])] : (i = Ce([e], t, o),
                    o && o.length && E(o).remove(),
                    E.merge([], i.childNodes)));
                    var r, i, o
                }
                ,
                E.fn.load = function(e, t, n) {
                    var r, i, o, a = this, s = e.indexOf(" ");
                    return s > -1 && (r = gt(e.slice(s)),
                    e = e.slice(0, s)),
                    g(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (i = "POST"),
                    a.length > 0 && E.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        o = arguments,
                        a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
                    }
                    )).always(n && function(e, t) {
                        a.each((function() {
                            n.apply(this, o || [e.responseText, t, e])
                        }
                        ))
                    }
                    ),
                    this
                }
                ,
                E.expr.pseudos.animated = function(e) {
                    return E.grep(E.timers, (function(t) {
                        return e === t.elem
                    }
                    )).length
                }
                ,
                E.offset = {
                    setOffset: function(e, t, n) {
                        var r, i, o, a, s, u, l = E.css(e, "position"), c = E(e), f = {};
                        "static" === l && (e.style.position = "relative"),
                        s = c.offset(),
                        o = E.css(e, "top"),
                        u = E.css(e, "left"),
                        ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
                        i = r.left) : (a = parseFloat(o) || 0,
                        i = parseFloat(u) || 0),
                        g(t) && (t = t.call(e, n, E.extend({}, s))),
                        null != t.top && (f.top = t.top - s.top + a),
                        null != t.left && (f.left = t.left - s.left + i),
                        "using"in t ? t.using.call(e, f) : c.css(f)
                    }
                },
                E.fn.extend({
                    offset: function(e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each((function(t) {
                                E.offset.setOffset(this, e, t)
                            }
                            ));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                        n = r.ownerDocument.defaultView,
                        {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0], i = {
                                top: 0,
                                left: 0
                            };
                            if ("fixed" === E.css(r, "position"))
                                t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(),
                                n = r.ownerDocument,
                                e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); )
                                    e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0),
                                i.left += E.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - i.top - E.css(r, "marginTop", !0),
                                left: t.left - i.left - E.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === E.css(e, "position"); )
                                e = e.offsetParent;
                            return e || ae
                        }
                        ))
                    }
                }),
                E.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    E.fn[e] = function(r) {
                        return $(this, (function(e, r, i) {
                            var o;
                            if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                            void 0 === i)
                                return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                        }
                        ), e, r, arguments.length)
                    }
                }
                )),
                E.each(["top", "left"], (function(e, t) {
                    E.cssHooks[t] = $e(v.pixelPosition, (function(e, n) {
                        if (n)
                            return n = Ue(e, t),
                            Re.test(n) ? E(e).position()[t] + "px" : n
                    }
                    ))
                }
                )),
                E.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    E.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, r) {
                        E.fn[r] = function(i, o) {
                            var a = arguments.length && (n || "boolean" != typeof i)
                              , s = n || (!0 === i || !0 === o ? "margin" : "border");
                            return $(this, (function(t, n, i) {
                                var o;
                                return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                                Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? E.css(t, n, s) : E.style(t, n, i, s)
                            }
                            ), t, a ? i : void 0, a)
                        }
                    }
                    ))
                }
                )),
                E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                    E.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }
                )),
                E.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }),
                E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    E.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }
                ));
                var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                E.proxy = function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    g(e))
                        return r = s.call(arguments, 2),
                        i = function() {
                            return e.apply(t || this, r.concat(s.call(arguments)))
                        }
                        ,
                        i.guid = e.guid = e.guid || E.guid++,
                        i
                }
                ,
                E.holdReady = function(e) {
                    e ? E.readyWait++ : E.ready(!0)
                }
                ,
                E.isArray = Array.isArray,
                E.parseJSON = JSON.parse,
                E.nodeName = L,
                E.isFunction = g,
                E.isWindow = y,
                E.camelCase = G,
                E.type = T,
                E.now = Date.now,
                E.isNumeric = function(e) {
                    var t = E.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }
                ,
                E.trim = function(e) {
                    return null == e ? "" : (e + "").replace(Gt, "")
                }
                ,
                void 0 === (n = function() {
                    return E
                }
                .apply(t, [])) || (e.exports = n);
                var Jt = r.jQuery
                  , Qt = r.$;
                return E.noConflict = function(e) {
                    return r.$ === E && (r.$ = Qt),
                    e && r.jQuery === E && (r.jQuery = Jt),
                    E
                }
                ,
                void 0 === i && (r.jQuery = r.$ = E),
                E
            }
            ))
        },
        808: (e,t,n)=>{
            var r, i;
            !function(o) {
                if (void 0 === (i = "function" == typeof (r = o) ? r.call(t, n, t, e) : r) || (e.exports = i),
                !0,
                e.exports = o(),
                !!0) {
                    var a = window.Cookies
                      , s = window.Cookies = o();
                    s.noConflict = function() {
                        return window.Cookies = a,
                        s
                    }
                }
            }((function() {
                function e() {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            t[r] = n[r]
                    }
                    return t
                }
                function t(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
                return function n(r) {
                    function i() {}
                    function o(t, n, o) {
                        if ("undefined" != typeof document) {
                            "number" == typeof (o = e({
                                path: "/"
                            }, i.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)),
                            o.expires = o.expires ? o.expires.toUTCString() : "";
                            try {
                                var a = JSON.stringify(n);
                                /^[\{\[]/.test(a) && (n = a)
                            } catch (e) {}
                            n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                            t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var s = "";
                            for (var u in o)
                                o[u] && (s += "; " + u,
                                !0 !== o[u] && (s += "=" + o[u].split(";")[0]));
                            return document.cookie = t + "=" + n + s
                        }
                    }
                    function a(e, n) {
                        if ("undefined" != typeof document) {
                            for (var i = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                                var s = o[a].split("=")
                                  , u = s.slice(1).join("=");
                                n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                                try {
                                    var l = t(s[0]);
                                    if (u = (r.read || r)(u, l) || t(u),
                                    n)
                                        try {
                                            u = JSON.parse(u)
                                        } catch (e) {}
                                    if (i[l] = u,
                                    e === l)
                                        break
                                } catch (e) {}
                            }
                            return e ? i[e] : i
                        }
                    }
                    return i.set = o,
                    i.get = function(e) {
                        return a(e, !1)
                    }
                    ,
                    i.getJSON = function(e) {
                        return a(e, !0)
                    }
                    ,
                    i.remove = function(t, n) {
                        o(t, "", e(n, {
                            expires: -1
                        }))
                    }
                    ,
                    i.defaults = {},
                    i.withConverter = n,
                    i
                }((function() {}
                ))
            }
            ))
        }
        ,
        90: e=>{
            !function(t, n) {
                var r = function(e, t, n) {
                    "use strict";
                    var r, i;
                    if (function() {
                        var t, n = {
                            lazyClass: "lazyload",
                            loadedClass: "lazyloaded",
                            loadingClass: "lazyloading",
                            preloadClass: "lazypreload",
                            errorClass: "lazyerror",
                            autosizesClass: "lazyautosizes",
                            fastLoadedClass: "ls-is-cached",
                            iframeLoadMode: 0,
                            srcAttr: "data-src",
                            srcsetAttr: "data-srcset",
                            sizesAttr: "data-sizes",
                            minSize: 40,
                            customMedia: {},
                            init: !0,
                            expFactor: 1.5,
                            hFac: .8,
                            loadMode: 2,
                            loadHidden: !0,
                            ricTimeout: 0,
                            throttleDelay: 125
                        };
                        for (t in i = e.lazySizesConfig || e.lazysizesConfig || {},
                        n)
                            t in i || (i[t] = n[t])
                    }(),
                    !t || !t.getElementsByClassName)
                        return {
                            init: function() {},
                            cfg: i,
                            noSupport: !0
                        };
                    var o = t.documentElement
                      , a = e.HTMLPictureElement
                      , s = "addEventListener"
                      , u = "getAttribute"
                      , l = e[s].bind(e)
                      , c = e.setTimeout
                      , f = e.requestAnimationFrame || c
                      , d = e.requestIdleCallback
                      , p = /^picture$/i
                      , h = ["load", "error", "lazyincluded", "_lazyloaded"]
                      , m = {}
                      , v = Array.prototype.forEach
                      , g = function(e, t) {
                        return m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                        m[t].test(e[u]("class") || "") && m[t]
                    }
                      , y = function(e, t) {
                        g(e, t) || e.setAttribute("class", (e[u]("class") || "").trim() + " " + t)
                    }
                      , b = function(e, t) {
                        var n;
                        (n = g(e, t)) && e.setAttribute("class", (e[u]("class") || "").replace(n, " "))
                    }
                      , x = function(e, t, n) {
                        var r = n ? s : "removeEventListener";
                        n && x(e, t),
                        h.forEach((function(n) {
                            e[r](n, t)
                        }
                        ))
                    }
                      , w = function(e, n, i, o, a) {
                        var s = t.createEvent("Event");
                        return i || (i = {}),
                        i.instance = r,
                        s.initEvent(n, !o, !a),
                        s.detail = i,
                        e.dispatchEvent(s),
                        s
                    }
                      , T = function(t, n) {
                        var r;
                        !a && (r = e.picturefill || i.pf) ? (n && n.src && !t[u]("srcset") && t.setAttribute("srcset", n.src),
                        r({
                            reevaluate: !0,
                            elements: [t]
                        })) : n && n.src && (t.src = n.src)
                    }
                      , C = function(e, t) {
                        return (getComputedStyle(e, null) || {})[t]
                    }
                      , E = function(e, t, n) {
                        for (n = n || e.offsetWidth; n < i.minSize && t && !e._lazysizesWidth; )
                            n = t.offsetWidth,
                            t = t.parentNode;
                        return n
                    }
                      , A = (ye = [],
                    be = [],
                    xe = ye,
                    we = function() {
                        var e = xe;
                        for (xe = ye.length ? be : ye,
                        ve = !0,
                        ge = !1; e.length; )
                            e.shift()();
                        ve = !1
                    }
                    ,
                    Te = function(e, n) {
                        ve && !n ? e.apply(this, arguments) : (xe.push(e),
                        ge || (ge = !0,
                        (t.hidden ? c : f)(we)))
                    }
                    ,
                    Te._lsFlush = we,
                    Te)
                      , S = function(e, t) {
                        return t ? function() {
                            A(e)
                        }
                        : function() {
                            var t = this
                              , n = arguments;
                            A((function() {
                                e.apply(t, n)
                            }
                            ))
                        }
                    }
                      , N = function(e) {
                        var t, r = 0, o = i.throttleDelay, a = i.ricTimeout, s = function() {
                            t = !1,
                            r = n.now(),
                            e()
                        }, u = d && a > 49 ? function() {
                            d(s, {
                                timeout: a
                            }),
                            a !== i.ricTimeout && (a = i.ricTimeout)
                        }
                        : S((function() {
                            c(s)
                        }
                        ), !0);
                        return function(e) {
                            var i;
                            (e = !0 === e) && (a = 33),
                            t || (t = !0,
                            (i = o - (n.now() - r)) < 0 && (i = 0),
                            e || i < 9 ? u() : c(u, i))
                        }
                    }
                      , k = function(e) {
                        var t, r, i = 99, o = function() {
                            t = null,
                            e()
                        }, a = function() {
                            var e = n.now() - r;
                            e < i ? c(a, i - e) : (d || o)(o)
                        };
                        return function() {
                            r = n.now(),
                            t || (t = c(a, i))
                        }
                    }
                      , D = (X = /^img$/i,
                    G = /^iframe$/i,
                    J = "onscroll"in e && !/(gle|ing)bot/.test(navigator.userAgent),
                    Q = 0,
                    Z = 0,
                    K = 0,
                    ee = -1,
                    te = function(e) {
                        K--,
                        (!e || K < 0 || !e.target) && (K = 0)
                    }
                    ,
                    ne = function(e) {
                        return null == Y && (Y = "hidden" == C(t.body, "visibility")),
                        Y || !("hidden" == C(e.parentNode, "visibility") && "hidden" == C(e, "visibility"))
                    }
                    ,
                    re = function(e, n) {
                        var r, i = e, a = ne(e);
                        for (_ -= n,
                        V += n,
                        U -= n,
                        $ += n; a && (i = i.offsetParent) && i != t.body && i != o; )
                            (a = (C(i, "opacity") || 1) > 0) && "visible" != C(i, "overflow") && (r = i.getBoundingClientRect(),
                            a = $ > r.left && U < r.right && V > r.top - 1 && _ < r.bottom + 1);
                        return a
                    }
                    ,
                    ie = function() {
                        var e, n, a, s, l, c, f, d, p, h, m, v, g = r.elements;
                        if ((z = i.loadMode) && K < 8 && (e = g.length)) {
                            for (n = 0,
                            ee++; n < e; n++)
                                if (g[n] && !g[n]._lazyRace)
                                    if (!J || r.prematureUnveil && r.prematureUnveil(g[n]))
                                        de(g[n]);
                                    else if ((d = g[n][u]("data-expand")) && (c = 1 * d) || (c = Z),
                                    h || (h = !i.expand || i.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : i.expand,
                                    r._defEx = h,
                                    m = h * i.expFactor,
                                    v = i.hFac,
                                    Y = null,
                                    Z < m && K < 1 && ee > 2 && z > 2 && !t.hidden ? (Z = m,
                                    ee = 0) : Z = z > 1 && ee > 1 && K < 6 ? h : Q),
                                    p !== c && (F = innerWidth + c * v,
                                    W = innerHeight + c,
                                    f = -1 * c,
                                    p = c),
                                    a = g[n].getBoundingClientRect(),
                                    (V = a.bottom) >= f && (_ = a.top) <= W && ($ = a.right) >= f * v && (U = a.left) <= F && (V || $ || U || _) && (i.loadHidden || ne(g[n])) && (I && K < 3 && !d && (z < 3 || ee < 4) || re(g[n], c))) {
                                        if (de(g[n]),
                                        l = !0,
                                        K > 9)
                                            break
                                    } else
                                        !l && I && !s && K < 4 && ee < 4 && z > 2 && (B[0] || i.preloadAfterLoad) && (B[0] || !d && (V || $ || U || _ || "auto" != g[n][u](i.sizesAttr))) && (s = B[0] || g[n]);
                            s && !l && de(s)
                        }
                    }
                    ,
                    oe = N(ie),
                    ae = function(e) {
                        var t = e.target;
                        t._lazyCache ? delete t._lazyCache : (te(e),
                        y(t, i.loadedClass),
                        b(t, i.loadingClass),
                        x(t, ue),
                        w(t, "lazyloaded"))
                    }
                    ,
                    se = S(ae),
                    ue = function(e) {
                        se({
                            target: e.target
                        })
                    }
                    ,
                    le = function(e, t) {
                        var n = e.getAttribute("data-load-mode") || i.iframeLoadMode;
                        0 == n ? e.contentWindow.location.replace(t) : 1 == n && (e.src = t)
                    }
                    ,
                    ce = function(e) {
                        var t, n = e[u](i.srcsetAttr);
                        (t = i.customMedia[e[u]("data-media") || e[u]("media")]) && e.setAttribute("media", t),
                        n && e.setAttribute("srcset", n)
                    }
                    ,
                    fe = S((function(e, t, n, r, o) {
                        var a, s, l, f, d, h;
                        (d = w(e, "lazybeforeunveil", t)).defaultPrevented || (r && (n ? y(e, i.autosizesClass) : e.setAttribute("sizes", r)),
                        s = e[u](i.srcsetAttr),
                        a = e[u](i.srcAttr),
                        o && (f = (l = e.parentNode) && p.test(l.nodeName || "")),
                        h = t.firesLoad || "src"in e && (s || a || f),
                        d = {
                            target: e
                        },
                        y(e, i.loadingClass),
                        h && (clearTimeout(q),
                        q = c(te, 2500),
                        x(e, ue, !0)),
                        f && v.call(l.getElementsByTagName("source"), ce),
                        s ? e.setAttribute("srcset", s) : a && !f && (G.test(e.nodeName) ? le(e, a) : e.src = a),
                        o && (s || f) && T(e, {
                            src: a
                        })),
                        e._lazyRace && delete e._lazyRace,
                        b(e, i.lazyClass),
                        A((function() {
                            var t = e.complete && e.naturalWidth > 1;
                            h && !t || (t && y(e, i.fastLoadedClass),
                            ae(d),
                            e._lazyCache = !0,
                            c((function() {
                                "_lazyCache"in e && delete e._lazyCache
                            }
                            ), 9)),
                            "lazy" == e.loading && K--
                        }
                        ), !0)
                    }
                    )),
                    de = function(e) {
                        if (!e._lazyRace) {
                            var t, n = X.test(e.nodeName), r = n && (e[u](i.sizesAttr) || e[u]("sizes")), o = "auto" == r;
                            (!o && I || !n || !e[u]("src") && !e.srcset || e.complete || g(e, i.errorClass) || !g(e, i.lazyClass)) && (t = w(e, "lazyunveilread").detail,
                            o && L.updateElem(e, !0, e.offsetWidth),
                            e._lazyRace = !0,
                            K++,
                            fe(e, t, o, r, n))
                        }
                    }
                    ,
                    pe = k((function() {
                        i.loadMode = 3,
                        oe()
                    }
                    )),
                    he = function() {
                        3 == i.loadMode && (i.loadMode = 2),
                        pe()
                    }
                    ,
                    me = function() {
                        I || (n.now() - R < 999 ? c(me, 999) : (I = !0,
                        i.loadMode = 3,
                        oe(),
                        l("scroll", he, !0)))
                    }
                    ,
                    {
                        _: function() {
                            R = n.now(),
                            r.elements = t.getElementsByClassName(i.lazyClass),
                            B = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass),
                            l("scroll", oe, !0),
                            l("resize", oe, !0),
                            l("pageshow", (function(e) {
                                if (e.persisted) {
                                    var n = t.querySelectorAll("." + i.loadingClass);
                                    n.length && n.forEach && f((function() {
                                        n.forEach((function(e) {
                                            e.complete && de(e)
                                        }
                                        ))
                                    }
                                    ))
                                }
                            }
                            )),
                            e.MutationObserver ? new MutationObserver(oe).observe(o, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (o[s]("DOMNodeInserted", oe, !0),
                            o[s]("DOMAttrModified", oe, !0),
                            setInterval(oe, 999)),
                            l("hashchange", oe, !0),
                            ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                                t[s](e, oe, !0)
                            }
                            )),
                            /d$|^c/.test(t.readyState) ? me() : (l("load", me),
                            t[s]("DOMContentLoaded", oe),
                            c(me, 2e4)),
                            r.elements.length ? (ie(),
                            A._lsFlush()) : oe()
                        },
                        checkElems: oe,
                        unveil: de,
                        _aLSL: he
                    })
                      , L = (j = S((function(e, t, n, r) {
                        var i, o, a;
                        if (e._lazysizesWidth = r,
                        r += "px",
                        e.setAttribute("sizes", r),
                        p.test(t.nodeName || ""))
                            for (o = 0,
                            a = (i = t.getElementsByTagName("source")).length; o < a; o++)
                                i[o].setAttribute("sizes", r);
                        n.detail.dataAttr || T(e, n.detail)
                    }
                    )),
                    H = function(e, t, n) {
                        var r, i = e.parentNode;
                        i && (n = E(e, i, n),
                        (r = w(e, "lazybeforesizes", {
                            width: n,
                            dataAttr: !!t
                        })).defaultPrevented || (n = r.detail.width) && n !== e._lazysizesWidth && j(e, i, r, n))
                    }
                    ,
                    P = k((function() {
                        var e, t = M.length;
                        if (t)
                            for (e = 0; e < t; e++)
                                H(M[e])
                    }
                    )),
                    {
                        _: function() {
                            M = t.getElementsByClassName(i.autosizesClass),
                            l("resize", P)
                        },
                        checkElems: P,
                        updateElem: H
                    })
                      , O = function() {
                        !O.i && t.getElementsByClassName && (O.i = !0,
                        L._(),
                        D._())
                    };
                    var M, j, H, P;
                    var B, I, q, z, R, F, W, _, U, $, V, Y, X, G, J, Q, Z, K, ee, te, ne, re, ie, oe, ae, se, ue, le, ce, fe, de, pe, he, me;
                    var ve, ge, ye, be, xe, we, Te;
                    return c((function() {
                        i.init && O()
                    }
                    )),
                    r = {
                        cfg: i,
                        autoSizer: L,
                        loader: D,
                        init: O,
                        uP: T,
                        aC: y,
                        rC: b,
                        hC: g,
                        fire: w,
                        gW: E,
                        rAF: A
                    }
                }(t, t.document, Date);
                t.lazySizes = r,
                e.exports && (e.exports = r)
            }("undefined" != typeof window ? window : {})
        }
        ,
        82: (e,t,n)=>{
            var r, i, o;
            !function(a, s) {
                s = s.bind(null, a, a.document),
                e.exports ? s(n(90)) : (i = [n(90)],
                void 0 === (o = "function" == typeof (r = s) ? r.apply(t, i) : r) || (e.exports = o))
            }(window, (function(e, t, n) {
                "use strict";
                var r, i, o = {};
                function a(e, n, r) {
                    if (!o[e]) {
                        var i = t.createElement(n ? "link" : "script")
                          , a = t.getElementsByTagName("script")[0];
                        n ? (i.rel = "stylesheet",
                        i.href = e) : (i.onload = function() {
                            i.onerror = null,
                            i.onload = null,
                            r()
                        }
                        ,
                        i.onerror = i.onload,
                        i.src = e),
                        o[e] = !0,
                        o[i.src || i.href] = !0,
                        a.parentNode.insertBefore(i, a)
                    }
                }
                t.addEventListener && (i = /\(|\)|\s|'/,
                r = function(e, n) {
                    var r = t.createElement("img");
                    r.onload = function() {
                        r.onload = null,
                        r.onerror = null,
                        r = null,
                        n()
                    }
                    ,
                    r.onerror = r.onload,
                    r.src = e,
                    r && r.complete && r.onload && r.onload()
                }
                ,
                addEventListener("lazybeforeunveil", (function(e) {
                    var t, o, s;
                    if (e.detail.instance == n && !e.defaultPrevented) {
                        var u = e.target;
                        if ("none" == u.preload && (u.preload = u.getAttribute("data-preload") || "auto"),
                        null != u.getAttribute("data-autoplay"))
                            if (u.getAttribute("data-expand") && !u.autoplay)
                                try {
                                    u.play()
                                } catch (e) {}
                            else
                                requestAnimationFrame((function() {
                                    u.setAttribute("data-expand", "-10"),
                                    n.aC(u, n.cfg.lazyClass)
                                }
                                ));
                        (t = u.getAttribute("data-link")) && a(t, !0),
                        (t = u.getAttribute("data-script")) && (e.detail.firesLoad = !0,
                        a(t, null, (function() {
                            e.detail.firesLoad = !1,
                            n.fire(u, "_lazyloaded", {}, !0, !0)
                        }
                        ))),
                        (t = u.getAttribute("data-require")) && (n.cfg.requireJs ? n.cfg.requireJs([t]) : a(t)),
                        (o = u.getAttribute("data-bg")) && (e.detail.firesLoad = !0,
                        r(o, (function() {
                            u.style.backgroundImage = "url(" + (i.test(o) ? JSON.stringify(o) : o) + ")",
                            e.detail.firesLoad = !1,
                            n.fire(u, "_lazyloaded", {}, !0, !0)
                        }
                        ))),
                        (s = u.getAttribute("data-poster")) && (e.detail.firesLoad = !0,
                        r(s, (function() {
                            u.poster = s,
                            e.detail.firesLoad = !1,
                            n.fire(u, "_lazyloaded", {}, !0, !0)
                        }
                        )))
                    }
                }
                ), !1))
            }
            ))
        }
        ,
        167: ()=>{}
        ,
        964: ()=>{}
        ,
        528: ()=>{}
        ,
        379: (e,t,n)=>{
            "use strict";
            var r, i = function() {
                return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)),
                r
            }, o = function() {
                var e = {};
                return function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                        e[t] = n
                    }
                    return e[t]
                }
            }(), a = [];
            function s(e) {
                for (var t = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === e) {
                        t = n;
                        break
                    }
                return t
            }
            function u(e, t) {
                for (var n = {}, r = [], i = 0; i < e.length; i++) {
                    var o = e[i]
                      , u = t.base ? o[0] + t.base : o[0]
                      , l = n[u] || 0
                      , c = "".concat(u, " ").concat(l);
                    n[u] = l + 1;
                    var f = s(c)
                      , d = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                    -1 !== f ? (a[f].references++,
                    a[f].updater(d)) : a.push({
                        identifier: c,
                        updater: v(d, t),
                        references: 1
                    }),
                    r.push(c)
                }
                return r
            }
            function l(e) {
                var t = document.createElement("style")
                  , r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var i = n.nc;
                    i && (r.nonce = i)
                }
                if (Object.keys(r).forEach((function(e) {
                    t.setAttribute(e, r[e])
                }
                )),
                "function" == typeof e.insert)
                    e.insert(t);
                else {
                    var a = o(e.insert || "head");
                    if (!a)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t)
                }
                return t
            }
            var c, f = (c = [],
            function(e, t) {
                return c[e] = t,
                c.filter(Boolean).join("\n")
            }
            );
            function d(e, t, n, r) {
                var i = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet)
                    e.styleSheet.cssText = f(t, i);
                else {
                    var o = document.createTextNode(i)
                      , a = e.childNodes;
                    a[t] && e.removeChild(a[t]),
                    a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
                }
            }
            function p(e, t, n) {
                var r = n.css
                  , i = n.media
                  , o = n.sourceMap;
                if (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
                o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
                e.styleSheet)
                    e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r))
                }
            }
            var h = null
              , m = 0;
            function v(e, t) {
                var n, r, i;
                if (t.singleton) {
                    var o = m++;
                    n = h || (h = l(t)),
                    r = d.bind(null, n, o, !1),
                    i = d.bind(null, n, o, !0)
                } else
                    n = l(t),
                    r = p.bind(null, n, t),
                    i = function() {
                        !function(e) {
                            if (null === e.parentNode)
                                return !1;
                            e.parentNode.removeChild(e)
                        }(n)
                    }
                    ;
                return r(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        r(e = t)
                    } else
                        i()
                }
            }
            e.exports = function(e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = i());
                var n = u(e = e || [], t);
                return function(e) {
                    if (e = e || [],
                    "[object Array]" === Object.prototype.toString.call(e)) {
                        for (var r = 0; r < n.length; r++) {
                            var i = s(n[r]);
                            a[i].references--
                        }
                        for (var o = u(e, t), l = 0; l < n.length; l++) {
                            var c = s(n[l]);
                            0 === a[c].references && (a[c].updater(),
                            a.splice(c, 1))
                        }
                        n = o
                    }
                }
            }
        }
        ,
        795: (e,t,n)=>{
            var r, i, o;
            i = [n(755)],
            void 0 === (o = "function" == typeof (r = function(e) {
                e.timeago = function(t) {
                    return t instanceof Date ? o(t) : o("string" == typeof t ? e.timeago.parse(t) : "number" == typeof t ? new Date(t) : e.timeago.datetime(t))
                }
                ;
                var t = e.timeago;
                e.extend(e.timeago, {
                    settings: {
                        refreshMillis: 6e4,
                        allowPast: !0,
                        allowFuture: !1,
                        localeTitle: !1,
                        cutoff: 0,
                        autoDispose: !0,
                        strings: {
                            prefixAgo: null,
                            prefixFromNow: null,
                            suffixAgo: "ago",
                            suffixFromNow: "from now",
                            inPast: "any moment now",
                            seconds: "less than a minute",
                            minute: "about a minute",
                            minutes: "%d minutes",
                            hour: "about an hour",
                            hours: "about %d hours",
                            day: "a day",
                            days: "%d days",
                            month: "about a month",
                            months: "%d months",
                            year: "about a year",
                            years: "%d years",
                            wordSeparator: " ",
                            numbers: []
                        }
                    },
                    inWords: function(t) {
                        if (!this.settings.allowPast && !this.settings.allowFuture)
                            throw "timeago allowPast and allowFuture settings can not both be set to false.";
                        var n = this.settings.strings
                          , r = n.prefixAgo
                          , i = n.suffixAgo;
                        if (this.settings.allowFuture && t < 0 && (r = n.prefixFromNow,
                        i = n.suffixFromNow),
                        !this.settings.allowPast && t >= 0)
                            return this.settings.strings.inPast;
                        var o = Math.abs(t) / 1e3
                          , a = o / 60
                          , s = a / 60
                          , u = s / 24
                          , l = u / 365;
                        function c(r, i) {
                            var o = e.isFunction(r) ? r(i, t) : r
                              , a = n.numbers && n.numbers[i] || i;
                            return o.replace(/%d/i, a)
                        }
                        var f = o < 45 && c(n.seconds, Math.round(o)) || o < 90 && c(n.minute, 1) || a < 45 && c(n.minutes, Math.round(a)) || a < 90 && c(n.hour, 1) || s < 24 && c(n.hours, Math.round(s)) || s < 42 && c(n.day, 1) || u < 30 && c(n.days, Math.round(u)) || u < 45 && c(n.month, 1) || u < 365 && c(n.months, Math.round(u / 30)) || l < 1.5 && c(n.year, 1) || c(n.years, Math.round(l))
                          , d = n.wordSeparator || "";
                        return void 0 === n.wordSeparator && (d = " "),
                        e.trim([r, f, i].join(d))
                    },
                    parse: function(t) {
                        var n = e.trim(t);
                        return n = (n = (n = (n = (n = n.replace(/\.\d+/, "")).replace(/-/, "/").replace(/-/, "/")).replace(/T/, " ").replace(/Z/, " UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")).replace(/([\+\-]\d\d)$/, " $100"),
                        new Date(n)
                    },
                    datetime: function(n) {
                        var r = t.isTime(n) ? e(n).attr("datetime") : e(n).attr("title");
                        return t.parse(r)
                    },
                    isTime: function(t) {
                        return "time" === e(t).get(0).tagName.toLowerCase()
                    }
                });
                var n = {
                    init: function() {
                        n.dispose.call(this);
                        var i = e.proxy(r, this);
                        i();
                        var o = t.settings;
                        o.refreshMillis > 0 && (this._timeagoInterval = setInterval(i, o.refreshMillis))
                    },
                    update: function(n) {
                        var i = n instanceof Date ? n : t.parse(n);
                        e(this).data("timeago", {
                            datetime: i
                        }),
                        t.settings.localeTitle && e(this).attr("title", i.toLocaleString()),
                        r.apply(this)
                    },
                    updateFromDOM: function() {
                        e(this).data("timeago", {
                            datetime: t.parse(t.isTime(this) ? e(this).attr("datetime") : e(this).attr("title"))
                        }),
                        r.apply(this)
                    },
                    dispose: function() {
                        this._timeagoInterval && (window.clearInterval(this._timeagoInterval),
                        this._timeagoInterval = null)
                    }
                };
                function r() {
                    var n = t.settings;
                    if (n.autoDispose && !e.contains(document.documentElement, this))
                        return e(this).timeago("dispose"),
                        this;
                    var r = i(this);
                    return isNaN(r.datetime) || (0 === n.cutoff || Math.abs(a(r.datetime)) < n.cutoff ? e(this).text(o(r.datetime)) : e(this).attr("title").length > 0 && e(this).text(e(this).attr("title"))),
                    this
                }
                function i(n) {
                    if (!(n = e(n)).data("timeago")) {
                        n.data("timeago", {
                            datetime: t.datetime(n)
                        });
                        var r = e.trim(n.text());
                        t.settings.localeTitle ? n.attr("title", n.data("timeago").datetime.toLocaleString()) : !(r.length > 0) || t.isTime(n) && n.attr("title") || n.attr("title", r)
                    }
                    return n.data("timeago")
                }
                function o(e) {
                    return t.inWords(a(e))
                }
                function a(e) {
                    return (new Date).getTime() - e.getTime()
                }
                e.fn.timeago = function(e, t) {
                    var r = e ? n[e] : n.init;
                    if (!r)
                        throw new Error("Unknown function name '" + e + "' for timeago");
                    return this.each((function() {
                        r.call(this, t)
                    }
                    )),
                    this
                }
                ,
                document.createElement("abbr"),
                document.createElement("time")
            }
            ) ? r.apply(t, i) : r) || (e.exports = o)
        }
    }, n = {};
    function r(e) {
        var i = n[e];
        if (void 0 !== i)
            return i.exports;
        var o = n[e] = {
            id: e,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, r),
        o.exports
    }
    r.m = t,
    e = [],
    r.O = (t,n,i,o)=>{
        if (!n) {
            var a = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [n,i,o] = e[c], s = !0, u = 0; u < n.length; u++)
                    (!1 & o || a >= o) && Object.keys(r.O).every((e=>r.O[e](n[u]))) ? n.splice(u--, 1) : (s = !1,
                    o < a && (a = o));
                if (s) {
                    e.splice(c--, 1);
                    var l = i();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        o = o || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > o; c--)
            e[c] = e[c - 1];
        e[c] = [n, i, o]
    }
    ,
    r.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = (e,t)=>{
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        var e = {
            525: 0,
            146: 0,
            734: 0,
            258: 0
        };
        r.O.j = t=>0 === e[t];
        var t = (t,n)=>{
            var i, o, [a,s,u] = n, l = 0;
            if (a.some((t=>0 !== e[t]))) {
                for (i in s)
                    r.o(s, i) && (r.m[i] = s[i]);
                if (u)
                    var c = u(r)
            }
            for (t && t(n); l < a.length; l++)
                o = a[l],
                r.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return r.O(c)
        }
          , n = self.webpackChunk = self.webpackChunk || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )(),
    r.O(void 0, [146, 734, 258], (()=>r(851))),
    r.O(void 0, [146, 734, 258], (()=>r(167))),
    r.O(void 0, [146, 734, 258], (()=>r(964)));
    var i = r.O(void 0, [146, 734, 258], (()=>r(528)));
    i = r.O(i)
}
)();
