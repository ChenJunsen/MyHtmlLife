/**
 * Created by Alienware on 2018/5/23 0023.
 */
!function (e) {
    function t(n) {
        if (r[n])return r[n].exports;
        var a = r[n] = {exports: {}, id: n, loaded: !1};
        return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
    }

    var r = {};
    return t.m = e, t.c = r, t.p = "", t(0)
}([function (e, t, r) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = r(18), o = n(a);
    t["default"] = window.Tracker = new o["default"], e.exports = t["default"]
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = window, n = r.document;
    t["default"] = {
        dealExtra: function (e) {
            var t = "mtr-", r = {};
            for (var n in e)if (e.hasOwnProperty(n)) {
                var a = 0 === n.indexOf(t) ? n : t + n;
                r[a] = e[n]
            }
            return r
        }, extend: function (e, t) {
            for (var r in t)void 0 !== t[r] && (e[r] = t[r])
        }, onload: function (e) {
            "complete" === n.readyState ? e() : r.addEventListener("load", e)
        }
    }, e.exports = t["default"]
}, function (e, t, r) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var o = function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(), i = r(1), s = n(i), u = r(5), d = n(u), c = r(4), l = n(c), f = window, p = f.document, v = function () {
        return Date.now()
    }, m = d["default"].query, y = function (e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }, h = function () {
        function e(t) {
            a(this, e);
            var r = this;
            r._initListener(), s["default"].extend(r, {
                win: f,
                doc: p,
                Router: d["default"],
                expoObj: {},
                cfg: {
                    pageSeedId: "H5_MTRACKER_AP_PAGE",
                    clkSeedId: "H5_MTRACKER_AP_CLK",
                    calcSeedId: "H5_MTRACKER_AP_CALC",
                    expoSeedId: "H5_MTRACKER_AP_EXPO",
                    syslogSeedId: "H5_MTRACKER_AP_SYSLOG"
                },
                mPageState: m.mPageState,
                platformType: "",
                bizScenario: m.bizScenario,
                autoStart: !0,
                autoError: !0,
                autoClick: !0,
                eventType: "touchstart",
                autoExpo: !1,
                bizType: "H5behavior",
                expotTimeout: 300,
                expoType: function (e) {
                    var t = !1, n = function a() {
                        t || (t = !0, p.removeEventListener("scroll", a), setTimeout(function () {
                            t = !1, p.addEventListener("scroll", a)
                        }, r.expotTimeout), e())
                    };
                    p.addEventListener("scroll", n)
                },
                expoSection: [-.3, .3],
                appId: "",
                url: p.URL,
                fullURL: p.URL,
                _ready: !1,
                _fnCacheList: []
            }), r._initBridgeReady(), s["default"].extend(r, t), f._to && s["default"].extend(r, f._to), r.autoStart && r.start()
        }

        return o(e, [{
            key: "config", value: function (e) {
                s["default"].extend(this, e)
            }
        }, {
            key: "start", value: function () {
                var e = this;
                e.url = e.url.split(/\?|#|;jsessionid=/)[0], e._ready ? (e._beforeApiReady(), e._apiDeclare(), e._afterApiReady()) : (e._apiPreDeclare(), e._trackerReady(function () {
                    e._beforeApiReady(), e._apiDeclare(), e._apiReady(), e._afterApiReady()
                })), e.autoError && e._startAutoError(), e.autoClick && e._startAutoClick(), e.autoExpo && e._startAutoExpo()
            }
        }, {
            key: "_initListener", value: function () {
                var e = this;
                e.st = v(), p.addEventListener("DOMContentLoaded", function () {
                    e.dr = v()
                }), f.addEventListener("load", function () {
                    e.ol = v()
                })
            }
        }, {
            key: "_initBridgeReady", value: function () {
            }
        }, {
            key: "_startAutoExpo", value: function () {
                var e = this, t = e.expoSection[0], r = e.expoSection[1], n = e.expoObj, a = function () {
                    for (var a = p.querySelectorAll("[data-expo]"), o = 0; o < a.length; o++) {
                        var i = a[o], s = i.getAttribute("data-expo");
                        void 0 === n[s] && (n[s] = -1);
                        var u = (0, l["default"])(i);
                        if (u >= t && u <= r) {
                            for (var d = {}, c = 0; c < i.attributes.length; c++) {
                                var f = i.attributes[c];
                                /^data-mtr-/.test(f.name) && (d[f.name.replace("data-", "")] = y(f.value))
                            }
                            n[s] < t ? e.expo(s, "up", d) : n[s] > r && e.expo(s, "down", d)
                        }
                        n[s] = u
                    }
                };
                a(), e.expoType(a)
            }
        }, {
            key: "_startAutoClick", value: function () {
                var e = this;
                p.addEventListener(e.eventType, function (t) {
                    for (var r = t.target; r && "BODY" !== r.tagName;) {
                        for (var n = void 0, a = {}, o = 0; o < r.attributes.length; o++) {
                            var i = r.attributes[o];
                            /^(data-)?seed$/.test(i.name) ? n = y(i.value) : /^(data-)?ucid$/.test(i.name) ? a.ucid = y(i.value) : /^data-mtr-/.test(i.name) && (a[i.name.replace("data-", "")] = y(i.value))
                        }
                        if (n) {
                            e.click(n, a);
                            break
                        }
                        r = r.parentElement
                    }
                })
            }
        }, {
            key: "_startAutoError", value: function () {
                var e = this;
                f.addEventListener("error", function (t) {
                    e.err("jsErr", {filename: t.filename, message: t.message, lineno: t.lineno, colno: t.colno})
                })
            }
        }, {
            key: "_trackerReady", value: function (e) {
                s["default"].onload(e)
            }
        }, {
            key: "_formatRemoteParam", value: function (e) {
                var t = this, r = {
                    version: t.version,
                    mBizScenario: t.bizScenario,
                    mPageState: t.mPageState,
                    mPlatformType: t.platformType,
                    role_id: t.roleId || t.role_id,
                    fullURL: t.fullURL
                };
                return t.bizType && (e.bizType = t.bizType), e.param4 ? s["default"].extend(e.param4, r) : e.param4 = r, e
            }
        }, {
            key: "_apiCache", value: function (e) {
                var t = this;
                t._ready ? e() : t._fnCacheList.push(e)
            }
        }, {
            key: "_apiPreDeclare", value: function () {
                for (var e = this, t = ["click", "calc", "log", "logPv", "err", "pushWindow", "expo", "step"], r = function (r) {
                    var n = t[r];
                    e[n] = function () {
                        for (var t = arguments.length, r = Array(t), a = 0; a < t; a++)r[a] = arguments[a];
                        e._apiCache(function () {
                            e[n].apply(e, r)
                        })
                    }
                }, n = 0; n < t.length; n++)r(n)
            }
        }, {
            key: "_mergeSeedId", value: function () {
            }
        }, {
            key: "_apiDeclare", value: function () {
                var e = this, t = f.encodeURIComponent;
                void 0 !== e.isMtracker && e._mergeSeedId(), s["default"].extend(e, {
                    click: function (r, n) {
                        var a = void 0, o = void 0;
                        if (void 0 === e.isMtracker) {
                            o = r.split(":"), a = {
                                seedId: e.cfg.clkSeedId,
                                param1: e.url,
                                param2: o[0]
                            }, o[1] ? a.param4 = {seedDesc: t(o[1])} : a.param4 = {};
                            var i = s["default"].dealExtra(n);
                            s["default"].extend(a.param4, i)
                        } else a = {seedId: e.cfg.clkSeedId, param1: e.url, param2: r};
                        e._remoteLog(a)
                    }, calc: function (r, n) {
                        var a = void 0, o = void 0;
                        void 0 === e.isMtracker ? (o = r.split(":"), a = {
                            seedId: e.cfg.calcSeedId,
                            param1: e.url,
                            param2: o[0],
                            param3: n
                        }, o[1] && (a.param4 = {seedDesc: t(o[1])})) : a = {
                            seedId: e.cfg.clkSeedId,
                            param1: e.url,
                            param2: r,
                            param3: n
                        }, e._remoteLog(a)
                    }, logPv: function (t, r) {
                        var n = t;
                        n || (n = {
                            domReady: 0,
                            onload: 0,
                            bridgeReady: 0
                        }), r && (n.isResume = 1), e._remoteLog({
                            seedId: e.cfg.pageSeedId,
                            param1: e.url,
                            param2: "",
                            param3: "",
                            param4: n
                        })
                    }, log: function (r) {
                        e._remoteLog({seedId: e.cfg.syslogSeedId, param1: e.url, param2: t(JSON.stringify(r))})
                    }, err: function (r, n) {
                        e._remoteLog({
                            seedId: "MTRERR_" + e.appId + "_" + r,
                            type: "error",
                            param1: e.url,
                            param2: t(JSON.stringify(n))
                        })
                    }, expo: function (t, r, n) {
                        var a = s["default"].dealExtra(n);
                        e._remoteLog({seedId: e.cfg.expoSeedId, param1: e.url, param2: t, param3: r, param4: a || {}})
                    }, isExpo: function (t) {
                        var r = e.expoObj, n = e.expoSection[0], a = e.expoSection[1], o = r[t];
                        return o >= n && o <= a
                    }, pushWindow: function (t, r, n) {
                        t.url = e.initURL(t.url, r, n), e._pushWindow(t)
                    }, step: function (t, r, n) {
                        var a = {"mtr-aot-key": t, "mtr-aot-uniq": r}, o = s["default"].dealExtra(n);
                        s["default"].extend(a, o), e._remoteLog({
                            seedId: e.cfg.syslogSeedId,
                            param1: e.url,
                            param2: e.cfg.syslogSeedId,
                            param4: a
                        })
                    }
                })
            }
        }, {
            key: "_afterApiReady", value: function () {
                var e = this, t = {domReady: e.dr - e.st, onload: e.ol - e.st};
                e.br && (t.bridgeReady = e.br - e.st);
                var r = f._to;
                void 0 !== r && void 0 !== r.fr && (t.firstRender = r.fr - e.st), e.logPv(t), e._resume(function () {
                    e.logPv(null, !0)
                }), p.addEventListener("back", function () {
                    e.click("back")
                }), p.addEventListener("optionMenu", function () {
                    e.click("optionMenu")
                }), p.addEventListener("titleClick", function () {
                    e.click("titleClick")
                })
            }
        }, {
            key: "_resume", value: function (e) {
                p.addEventListener("WV.Event.APP.Active", function (t) {
                    "webview" === t.param.from && e()
                }), p.addEventListener("resume", e)
            }
        }, {
            key: "_pushWindow", value: function (e) {
                location.href = e.url
            }
        }, {
            key: "_beforeApiReady", value: function () {
                var e = this, t = f.AlipayJSBridge;
                void 0 === e.bizScenario && t && t.startupParams && t.startupParams.bizScenario && (e.bizScenario = t.startupParams.bizScenario), e.version || (f.cfg && f.cfg.version ? e.version = f.cfg.version : t && t.startupParams && t.startupParams.version && (e.version = t.startupParams.version)), !e.appId && t && t.startupParams && t.startupParams.appId && (e.appId = t.startupParams.appId)
            }
        }, {
            key: "_apiReady", value: function () {
                var e = this;
                e._ready = !0;
                for (var t = 0; t < e._fnCacheList.length; t++)e._fnCacheList[t]();
                e._fnCacheList = []
            }
        }, {
            key: "setPageState", value: function (e, t) {
                this.mPageState = e, t && d["default"].setHash({mPageState: e}), this.logPv()
            }
        }, {
            key: "initURL", value: function (e, t, r) {
                var n = e, a = t;
                if (void 0 === d["default"].query.bizScenario || /bizScenario=/.test(n) || (a = t || {}, a.bizScenario = a.bizScenario || d["default"].query.bizScenario), a) {
                    var o = /\?/.test(n) ? "&" : "?", i = o + d["default"].stringify(a);
                    /\#/.test(n) ? n = n.replace(/(.*)?\#(.*)?/, "$1" + i + "#$2") : n += i
                }
                return r && (n += "#" + d["default"].stringify(r)), n
            }
        }]), e
    }();
    t["default"] = h, e.exports = t["default"]
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function (e, t, r) {
        var n = void 0;
        return e < -t ? n = -1 : e < 0 ? n = e / t : e + t < r ? n = 0 : e < r ? n = (e + t - r) / t : e >= r && (n = 1), n
    }, e.exports = t["default"]
}, function (e, t, r) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = r(3), o = n(a), i = window, s = i.document, u = s.documentElement;
    t["default"] = function (e) {
        var t = e.getBoundingClientRect();
        return (0, o["default"])(t.top, t.height, u.clientHeight)
    }, e.exports = t["default"]
}, function (e, t, r) {
    var n = window, a = n.location, o = (n.encodeURIComponent, n.decodeURIComponent, r(7)), i = function (e, t) {
        for (var r in t)e[r] = t[r];
        return e
    }, s = {
        parse: o.parse, stringify: o.stringify, refresh: function (e) {
            e = e || "refreshKey";
            var t = {};
            t[e] = Math.random(), console.log(t), s.setSearch(t)
        }, reload: function () {
            a.reload()
        }, query: {}, setSearch: function (e) {
            a.search = o.stringify(i(s.search, e))
        }, setHash: function (e) {
            s.hash = i(s.hash, e), i(s.query, e), a.hash = o.stringify(s.hash)
        }, init: function () {
            return s.search = o.parse(a.search), s.hash = o.parse(a.hash), i(s.query, s.search), i(s.query, s.hash), s.query
        }
    };
    s.init(), e.exports = s
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
}, function (e, t, r) {
    "use strict";
    var n = r(6);
    t.extract = function (e) {
        return e.split("?")[1] || ""
    }, t.parse = function (e) {
        return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#|&)/, ""), e ? e.split("&").reduce(function (e, t) {
            var r = t.replace(/\+/g, " ").split("="), n = r.shift(), a = r.length > 0 ? r.join("=") : void 0;
            return n = decodeURIComponent(n), a = void 0 === a ? null : decodeURIComponent(a), e.hasOwnProperty(n) ? Array.isArray(e[n]) ? e[n].push(a) : e[n] = [e[n], a] : e[n] = a, e
        }, {}) : {})
    }, t.stringify = function (e) {
        return e ? Object.keys(e).sort().map(function (t) {
            var r = e[t];
            return void 0 === r ? "" : null === r ? t : Array.isArray(r) ? r.slice().sort().map(function (e) {
                return n(t) + "=" + n(e)
            }).join("&") : n(t) + "=" + n(r)
        }).filter(function (e) {
            return e.length > 0
        }).join("&") : ""
    }
}, , function (e, t) {
    var r = function (e) {
        var t = {}, r = e.match(/AliApp\S+\b\)/gi);
        return t.is = !!/(T-UA)|(TBIOS)|(WindVane)|(AliApp)/i.test(e), t.name = r ? r[0].match(/\(\w+\-*\w*/)[0].split("(")[1] : "", t.version = r ? r[0].match(/(\d+\.*)+/gi)[0] : "", t
    };
    e.exports = r
}, , , function (e, t, r) {
    var n = {dateFormat: r(14), amountFormat: r(13)};
    e.exports = n
}, function (e, t) {
    function r(e, t, r, n) {
        var a, o, i = /[-\+]?((\d+\.?\d*)|(\d*\.?\d+))/;
        if (t = null == t || t, r = null == r ? 2 : r, n = null != n && n, !i.test(e))return "invalid amount";
        if ("boolean" != typeof t && (t = !0), /\d+/.test(r) || (r = 2), "boolean" != typeof n && (n = !1), sign = e == (e = Math.abs(e)), t)if (e = e.toString(), e.indexOf(".") == -1)a = e, o = "00"; else {
            var s = e.split(".");
            a = s[0], o = s[1], 1 == o.length && (o += "0")
        } else for (e = n ? Math.floor(e * Math.pow(10, r) + .50000000001) : Math.floor(e * Math.pow(10, r)), a = Math.floor(e / Math.pow(10, r)).toString(), o = e % Math.pow(10, r), o = o.toString(); o.length < r;)o = "0" + o;
        return a = a.split("").reverse().reduce(function (e, t, r, n) {
            return t + (!r || r % 3 ? "" : ",") + e
        }, ""), (sign ? "" : "-") + a + "." + o
    }

    e.exports = r
}, function (e, t) {
    var r = function () {
        var e = /p{1}|w{1}|d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, t = function (e, t) {
            for (e = String(e), t = t || 2; e.length < t;)e = "0" + e;
            return e
        }, r = {
            "default": "yyyy-MM-dd HH:mm:ss",
            isoDate: "yyyy-MM-dd",
            isoTime: "HH:mm:ss",
            localShortDate: "yy\u5e74MM\u6708dd\u65e5",
            localShortDateTime: "yy\u5e74MM\u6708dd\u65e5 hh:mm:ss p",
            localLongDate: "yyyy\u5e74MM\u6708dd\u65e5",
            localLongDateTime: "yyyy\u5e74MM\u6708dd\u65e5 hh:mm:ss p",
            localFullDate: "yyyy\u5e74MM\u6708dd\u65e5 w",
            localFullDateTime: "yyyy\u5e74MM\u6708dd\u65e5 w hh:mm:ss p"
        }, n = {
            dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        };
        return function (a, o, i) {
            if (a = a ? new Date(a) : new Date, isNaN(a))return "invalid date";
            o = String(r[o] || o || r["default"]);
            var s = i ? "getUTC" : "get", u = a[s + "Date"](), d = a[s + "Day"](), c = a[s + "Month"](), l = a[s + "FullYear"](), f = a[s + "Hours"](), p = a[s + "Minutes"](), v = a[s + "Seconds"](), m = (a[s + "Milliseconds"](), i ? 0 : a.getTimezoneOffset(), {
                d: u,
                dd: t(u, void 0),
                ddd: n.dayNames[d],
                dddd: n.dayNames[d + 7],
                w: n.dayNames[d + 14],
                M: c + 1,
                MM: t(c + 1, void 0),
                MMM: n.monthNames[c],
                MMMM: n.monthNames[c + 12],
                yy: String(l).slice(2),
                yyyy: l,
                h: f % 12 || 12,
                hh: t(f % 12 || 12, void 0),
                H: f,
                HH: t(f, void 0),
                m: p,
                mm: t(p, void 0),
                s: v,
                ss: t(v, void 0),
                t: f < 12 ? "a" : "p",
                tt: f < 12 ? "am" : "pm",
                T: f < 12 ? "A" : "P",
                TT: f < 12 ? "AM" : "PM",
                p: f < 12 ? "\u4e0a\u5348" : "\u4e0b\u5348"
            });
            return o.replace(e, function (e) {
                return e in m ? m[e] : e.slice(1, e.length - 1)
            })
        }
    }();
    e.exports = function (e, t, n) {
        return r(e, t, n)
    }
}, function (e, t, r) {
    var n = r(16);
    e.exports = n
}, function (e, t, r) {
    function n(e) {
        return Object.prototype.toString.call(e)
    }

    function a(e) {
        return "[object Object]" === n(e)
    }

    function o(e) {
        return "[object Function]" === n(e)
    }

    function i(e, t, r) {
        for (var n = 0, a = e.length; n < a && t.call(e, e[n], n) !== !1; n++);
    }

    function s(e, t, r) {
        var i = o(t) ? t.call(null, r) : t;
        if (!i)return null;
        var s = {name: e, version: c, codename: ""};
        "android" === e && (s.type = r.indexOf("Mobi") > -1 ? "phone" : "pad"), "ios" === e && (s.type = r.indexOf("iPhone") > -1 ? "phone" : "pad");
        var u = n(i);
        if (i === !0)return s;
        if ("[object String]" === u) {
            if (r.indexOf(i) !== -1)return s
        } else {
            if (a(i))return i.hasOwnProperty("version") && (s.version = i.version), s;
            if (i.exec) {
                var d = i.exec(r);
                if (d)return d.length >= 2 && d[1] ? s.version = d[1].replace(/_/g, ".") : s.version = c, s
            }
        }
    }

    function u(e, t, r, n) {
        var a = g;
        i(t, function (t) {
            var r = s(t[0], t[1], e);
            if (r)return a = r, !1
        }), r.call(n, a.name, a.version)
    }

    var d = {}, c = "-1", l = navigator.userAgent || "", f = navigator.appVersion || "", p = navigator.vendor || "", v = (window.external, /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/), m = r(9), y = [["wp", function (e) {
        return e.indexOf("windows phone ") !== -1 ? /\bwindows phone (?:os )?([0-9.]+)/ : e.indexOf("xblwp") !== -1 ? /\bxblwp([0-9.]+)/ : e.indexOf("zunewp") !== -1 ? /\bzunewp([0-9.]+)/ : "windows phone"
    }], ["ios", function (e) {
        return /\bcpu(?: iphone)? os /.test(e) ? /\bcpu(?: iphone)? os ([0-9._]+)/ : e.indexOf("iph os ") !== -1 ? /\biph os ([0-9_]+)/ : /\bios\b/
    }], ["yunos", /\baliyunos ([0-9.]+)/], ["android", /\bandroid[\/\- ]?([0-9.x]+)?/], ["linux", "linux"]], h = [["qq", /\bm?qqbrowser\/([0-9.]+)/], ["ie", v], ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/], ["uc", function (e) {
        return e.indexOf("ucbrowser/") >= 0 ? /\bucbrowser\/([0-9.]+)/ : /\buc\/[0-9]/.test(e) ? /\buc\/([0-9.]+)/ : e.indexOf("ucweb") >= 0 ? /\bucweb[\/]?([0-9.]+)?/ : /\b(?:ucbrowser|uc)\b/
    }], ["android", function (e) {
        if (e.indexOf("android") !== -1)return /\bversion\/([0-9.]+(?: beta)?)/
    }], ["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//], ["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/]], g = {
        name: "na",
        version: c
    }, b = function (e) {
        e = (e || "").toLowerCase();
        var t = {};
        return u(e, y, function (e, r) {
            var n = parseFloat(r);
            t.os = {name: e, version: n, fullVersion: r}, t.os[e] = n
        }, t), u(e, h, function (e, r) {
            var n = parseFloat(r);
            t.browser = {name: e, version: n, fullVersion: r}, t.browser[e] = n
        }, t), t
    };
    d = b(l + " " + f + " " + p), d.parse = b, d._checkApp = m, d.app = d._checkApp(l), e.exports = d
}, , function (e, t, r) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
    var s = function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(), u = r(2), d = n(u), c = r(1), l = n(c), f = r(20), p = n(f), v = r(15), m = n(v), y = r(12), h = n(y), g = window, b = g.document, x = function (e) {
        function t(e) {
            a(this, t);
            var r = new Image, n = {eventType: "mousedown", image: r, ref: b.referrer || "-"};
            return l["default"].extend(n, e), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n))
        }

        return i(t, e), s(t, [{
            key: "_formatExinfoParam", value: function (e) {
                var t = g.encodeURIComponent, r = [];
                for (var n in e)e.hasOwnProperty(n) && r.push(n + "=" + t(e[n]));
                return r.join("^")
            }
        }, {
            key: "_guid", value: function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = 16 * Math.random() | 0, r = "x" === e ? t : 3 & t | 8;
                    return r.toString(16)
                })
            }
        }, {
            key: "_getUUid", value: function () {
                var e = g.localStorage, t = "mtr-mdap";
                return e ? (e[t] || (e[t] = this._guid()), e[t]) : ""
            }
        }, {
            key: "_packFinalData", value: function (e) {
                var t = this, r = ["D-VM", h["default"].dateFormat(Date.now()), m["default"].app.is ? m["default"].app.name : "-", m["default"].app.is ? m["default"].app.version : "-", "2", "-", t._getUUid(), t.role_id, e.seedId, "-", "-", "-", "-", "-", "-", e.seedId, t.fullURL, "H5behavior", "c", e.param1, e.param2, e.param3, t._formatExinfoParam(e.param4), t.bizScenario, "-", "-", "-", "-", t.ref, t.url, "-", "-", "-", p["default"].os, p["default"].osVersion, "-", "-", "-", "-", "-", "-", "-", "-", "-"];
                return r.join()
            }
        }, {
            key: "_send", value: function (e) {
                var t = g.encodeURIComponent, r = this, n = new XMLHttpRequest;
                return r.server ? (n.open("POST", r.server, !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), void n.send("data=" + t(e))) : void console.warn("\u8bf7\u914d\u7f6emtracker\u670d\u52a1\u63a5\u6536\u5730\u5740")
            }
        }, {
            key: "_remoteLog", value: function (e) {
                var t = this;
                t._formatRemoteParam(e);
                var r = t._packFinalData(e);
                this._send(r)
            }
        }]), t
    }(d["default"]);
    t["default"] = x, e.exports = t["default"]
}, , function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r, n, a, o = "-", i = navigator.appVersion, s = navigator.userAgent, u = navigator.appName, d = "" + parseFloat(navigator.appVersion), c = parseInt(navigator.appVersion, 10);
    (n = s.indexOf("Opera")) != -1 && (u = "Opera", d = s.substring(n + 6), (n = s.indexOf("Version")) != -1 && (d = s.substring(n + 8))), (n = s.indexOf("OPR")) != -1 ? (u = "Opera", d = s.substring(n + 4)) : (n = s.indexOf("MSIE")) != -1 ? (u = "Microsoft Internet Explorer", d = s.substring(n + 5)) : (n = s.indexOf("Chrome")) != -1 ? (u = "Chrome", d = s.substring(n + 7)) : (n = s.indexOf("Safari")) != -1 ? (u = "Safari", d = s.substring(n + 7), (n = s.indexOf("Version")) != -1 && (d = s.substring(n + 8))) : (n = s.indexOf("Firefox")) != -1 ? (u = "Firefox", d = s.substring(n + 8)) : s.indexOf("Trident/") != -1 ? (u = "Microsoft Internet Explorer", d = s.substring(s.indexOf("rv:") + 3)) : (r = s.lastIndexOf(" ") + 1) < (n = s.lastIndexOf("/")) && (u = s.substring(r, n), d = s.substring(n + 1), u.toLowerCase() == u.toUpperCase() && (u = navigator.appName)), (a = d.indexOf(";")) != -1 && (d = d.substring(0, a)), (a = d.indexOf(" ")) != -1 && (d = d.substring(0, a)), (a = d.indexOf(")")) != -1 && (d = d.substring(0, a)), c = parseInt("" + d, 10), isNaN(c) && (d = "" + parseFloat(navigator.appVersion), c = parseInt(navigator.appVersion, 10));
    var l = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(i), f = !!navigator.cookieEnabled;
    "undefined" != typeof navigator.cookieEnabled || f || (document.cookie = "testcookie", f = document.cookie.indexOf("testcookie") != -1);
    var p = o, v = [{s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/}, {
        s: "Windows 8.1",
        r: /(Windows 8.1|Windows NT 6.3)/
    }, {s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/}, {
        s: "Windows 7",
        r: /(Windows 7|Windows NT 6.1)/
    }, {s: "Windows Vista", r: /Windows NT 6.0/}, {s: "Windows Server 2003", r: /Windows NT 5.2/}, {
        s: "Windows XP",
        r: /(Windows NT 5.1|Windows XP)/
    }, {s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/}, {
        s: "Windows ME",
        r: /(Win 9x 4.90|Windows ME)/
    }, {s: "Windows 98", r: /(Windows 98|Win98)/}, {
        s: "Windows 95",
        r: /(Windows 95|Win95|Windows_95)/
    }, {s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/}, {
        s: "Windows CE",
        r: /Windows CE/
    }, {s: "Windows 3.11", r: /Win16/}, {s: "Android", r: /Android/}, {s: "Open BSD", r: /OpenBSD/}, {
        s: "Sun OS",
        r: /SunOS/
    }, {s: "Linux", r: /(Linux|X11)/}, {s: "iOS", r: /(iPhone|iPad|iPod)/}, {
        s: "Mac OS X",
        r: /Mac OS X/
    }, {s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/}, {s: "QNX", r: /QNX/}, {
        s: "UNIX",
        r: /UNIX/
    }, {s: "BeOS", r: /BeOS/}, {s: "OS/2", r: /OS\/2/}, {
        s: "Search Bot",
        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
    }];
    for (var m in v) {
        var y = v[m];
        if (y.r.test(s)) {
            p = y.s;
            break
        }
    }
    var h = o;
    switch (/Windows/.test(p) && (h = /Windows (.*)/.exec(p)[1], p = "Windows"), p) {
        case"Mac OS X":
            h = /Mac OS X (10[\.\_\d]+)/.exec(s)[1];
            break;
        case"Android":
            h = /Android ([\.\_\d]+)/.exec(s)[1];
            break;
        case"iOS":
            h = /OS (\d+)_(\d+)_?(\d+)?/.exec(i), h = h[1] + "." + h[2] + "." + (0 | h[3])
    }
    var g = "no check";
    if ("undefined" != typeof swfobject) {
        var b = swfobject.getFlashPlayerVersion();
        g = b.major > 0 ? b.major + "." + b.minor + " r" + b.release : o
    }
    t["default"] = {
        browser: u,
        browserVersion: d,
        browserMajorVersion: c,
        mobile: l,
        os: p,
        osVersion: h,
        cookies: f,
        flashVersion: g
    }, e.exports = t["default"]
}]);