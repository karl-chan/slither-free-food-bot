var testing = !1;
0 <= window.location.href.indexOf("/testing") && (testing = !0);
var iioc = !1
    , nsr = !1
    , lang = navigator.language || navigator.userLanguage;
lang = lang.substr(0, 2);
var forcing = !1
    , ua = navigator.userAgent.toLowerCase()
    , is_android = 0 <= ua.indexOf("android")
    , is_amazon = 0 <= ua.indexOf("kindle") || 0 <= ua.indexOf("silk/")
    , uua = navigator.userAgent
    , is_ios = 0 <= uua.indexOf("iPad") || 0 <= uua.indexOf("iPhone") || 0 <= uua.indexOf("iPod")
    , is_mobile = 0 <= ua.indexOf("mobile")
    , is_firefox = -1 < ua.indexOf("firefox")
    , is_ie8oo = window.attachEvent && !window.addEventListener
    , is_chrome = !1
    , is_osx = !1
    , osx_ver = -1
    , is_safari = !1;
0 <= ua.indexOf("safari") && -1 == ua.indexOf("chrome") && (is_safari = !0);
0 <= ua.indexOf("chrome") && (is_safari || is_firefox || (is_chrome = !0));
if (0 <= ua.indexOf("mac os x ")) {
    var j = ua.indexOf("mac os x ");
    if (0 <= j) {
        j += 9;
        for (var vs = [], v = 0, i = j; i < ua.length; i++) {
            var k = ua.charCodeAt(i);
            if (48 <= k && 57 >= k)
                v *= 10,
                    v += k - 48;
            else if (vs.push(v),
                v = 0,
                3 == vs.length || 46 != k && 95 != k)
                break
        }
        2 <= vs.length && 10 == vs[0] && (is_osx = !0,
            osx_ver = vs[1])
    }
}
if (navigator.platform) {
    var ptf = ("" + navigator.platform).toLowerCase();
    "mac" != ptf.substr(0, 3) && (is_osx = !1)
}
var no_raf = !1
    , raf = function (b) { };
window.requestAnimationFrame ? raf = window.requestAnimationFrame : window.mozRequestAnimationFrame ? raf = window.mozRequestAnimationFrame : window.webkitRequestAnimationFrame ? raf = window.webkitRequestAnimationFrame : no_raf = !0;
is_mobile || (no_raf = !0);
no_raf = !0;
if (is_chrome) {
    var uas = ua.split(" ");
    for (i = uas.length - 1; 0 <= i; i--) {
        var s = uas[i];
        if (0 == s.indexOf("chrome/")) {
            vs = s.split("chrome/")[1];
            vs = vs.split(".");
            3 <= vs.length && (52 <= Number(vs[0]) ? no_raf = !1 : 51 == Number(vs[0]) && (1 <= Number(vs[1]) ? no_raf = !1 : 2704 <= Number(vs[2]) && (no_raf = !1)));
            break
        }
    }
    no_raf = !0
}
var doiosh = !1;
is_chrome && is_osx && -1 != osx_ver && 11 >= osx_ver && (nsr = !0);
var a, l, m, n, o, r, fj, d, d2, qq, sc, agpu = "translateZ(0)", ang, sang, vang;
function trf(b, c) {
    b.style.webkitTransform = b.style.OTransform = b.style.msTransform = b.style.MozTransform = b.style.transform = c
}
function trfo(b, c) {
    b.style.webkitTransformOrigin = b.style.OTransformOrigin = b.style.msTransformOrigin = b.style.MozTransformOrigin = b.style.transformOrigin = c
}
var pi2 = 2 * Math.PI
    , piar = [4, 21, 0, 11]
    , animating = !1
    , startAnimation = function () {
        animating = !0;
        no_raf ? is_mobile ? setInterval("oef()", 33) : is_safari ? setInterval("oef()", 33) : setInterval("oef()", 20) : raf(oef)
    }
    , ois = []
    , wic = 0
    , ldi = function (b) {
        wic++;
        var c = {}
            , e = document.createElement("img");
        c.ii = e;
        c.sc = 1;
        e.onload = function () {
            for (var b = ois.length - 1; 0 <= b; b--)
                if (ois[b].ii == this) {
                    b = ois[b];
                    b.ww = this.width;
                    b.hh = this.height;
                    b.loaded = !0;
                    if (b.onload)
                        b.onload();
                    break
                }
            wic--;
            0 == wic && startAnimation()
        }
            ;
        c.src = b;
        ois.push(c);
        return c
    };
function addCss(b) {
    var c = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(c);
    c.type = "text/css";
    c.styleSheet ? c.styleSheet.cssText = b : c.appendChild(document.createTextNode(b))
}
var sadg, sadu, sadd, p, xx, yy, grw, grh, elem, map, imgd, ctx, rw, rh;
elem = document.createElement("canvas");
grw = 2;
grh = 56;
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.min(255, Math.floor(54.4 + 32 * j)),
            imgd[p + 1] = Math.min(255, Math.floor(108.8 + 64 * j)),
            imgd[p + 2] = Math.min(255, Math.floor(81.6 + 48 * j)),
            imgd[p + 3] = 255,
            p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)),
            imgd[p + 1] = Math.min(255, Math.floor(171 + 93.1 * j)),
            imgd[p + 2] = Math.min(255, Math.floor(132 + .95 * 87 * j)),
            imgd[p + 3] = 255,
            p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = yy / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.floor(.1 * 48 + 36 * j),
            imgd[p + 1] = Math.floor(7 + 52.5 * j),
            imgd[p + 2] = Math.floor(6.4 + 48 * j),
            imgd[p + 3] = 255,
            p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg1 { background-image:url(" + sadg + "); }  .sadu1 { background-image:url(" + sadu + "); }  .sadd1 { background-image:url(" + sadd + "); }");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.min(255, Math.floor(.85 * 52 + 26 * j)),
            imgd[p + 1] = Math.min(255, Math.floor(81.6 + 48 * j)),
            imgd[p + 2] = Math.min(255, Math.floor(.85 * 144 + 72 * j)),
            imgd[p + 3] = 255,
            p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = (grh - 1 - yy) / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)),
            imgd[p + 1] = Math.min(255, Math.floor(132 + .95 * 87 * j)),
            imgd[p + 2] = Math.min(255, Math.floor(171 + 93.1 * j)),
            imgd[p + 3] = 255,
            p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
    for (j = yy / (grh - 1),
        j = .5 * (1 - Math.cos(Math.PI * j)),
        xx = 0; xx < grw; xx++)
        imgd[p] = Math.floor(.1 * 48 + 36 * j),
            imgd[p + 1] = Math.floor(5.4 + 40.5 * j),
            imgd[p + 2] = Math.floor(7 + 52.5 * j),
            imgd[p + 3] = 255,
            p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg2 { background-image:url(" + sadg + "); }  .sadu2 { background-image:url(" + sadu + "); }  .sadd2 { background-image:url(" + sadd + "); }");
var mos = []
    , whmos = !1
    , swmup = !1;
function mkBtn(b, c, e, h) {
    var w = document.createElement("div");
    b.tagName || (b = document.getElementById(b),
        b.style.width = e + "px",
        b.style.height = h + "px",
        w.style.width = e + "px",
        w.style.height = h + "px");
    var f = {
        lic: 0
    };
    f.elem = b;
    f.md = !1;
    f.mo = !1;
    f.mdf = 0;
    f.mof = 0;
    var q = !0;
    b.style && b.style.position && ("absolute" == (b.style.position + "").toLowerCase() && (q = !1),
        "fixed" == (b.style.position + "").toLowerCase() && (q = !1));
    q && (b.style.position = "relative");
    w.style.position = "absolute";
    w.style.opacity = 0;
    w.style.left = "0px";
    w.style.top = "0px";
    b.appendChild(w);
    f.ho = w;
    f.alic = function () {
        this.lic++;
        if (3 == this.lic && (this.ho.style.opacity = 1,
            this.onload))
            this.onload()
    }
        ;
    mos.push(f);
    f.setEnabled = function (b) {
        b ? (this.disabled = !1,
            this.upi.style.opacity = this.mof,
            this.downi.style.opacity = this.mdf,
            this.elem.style.opacity = 1,
            this.elem.style.cursor = "pointer") : (this.disabled = !0,
                this.upi.style.opacity = 0,
                this.downi.style.opacity = 0,
                this.elem.style.opacity = .38,
                this.elem.style.cursor = "default")
    }
        ;
    if (c)
        for (q = 1; 3 >= q; q++) {
            var x = document.createElement("img");
            x.draggable = !1;
            x.style.position = "absolute";
            x.style.left = "0px";
            x.style.top = "0px";
            x.border = 0;
            x.width = e;
            x.height = h;
            x.className = "nsi";
            w.appendChild(x);
            1 == q ? (f.normi = x,
                x.onload = function () {
                    for (var b = mos.length - 1; 0 <= b; b--) {
                        var c = mos[b];
                        if (c.normi == this) {
                            c.alic();
                            break
                        }
                    }
                }
                ,
                x.src = c + ".png") : 2 == q ? (f.upi = x,
                    x.style.opacity = 0,
                    x.onload = function () {
                        for (var b = mos.length - 1; 0 <= b; b--) {
                            var c = mos[b];
                            if (c.upi == this) {
                                c.alic();
                                break
                            }
                        }
                    }
                    ,
                    x.src = c + "up.png") : 3 == q && (f.downi = x,
                        x.style.opacity = 0,
                        x.onload = function () {
                            for (var b = mos.length - 1; 0 <= b; b--) {
                                var c = mos[b];
                                if (c.downi == this) {
                                    c.alic();
                                    break
                                }
                            }
                        }
                        ,
                        x.src = c + "down.png")
        }
    else
        w.style.opacity = 1;
    b.onmouseenter = function () {
        for (var b = mos.length - 1; 0 <= b; b--) {
            var c = mos[b];
            if (c.elem == this) {
                if (!c.disabled && !c.mo) {
                    c.mo = !0;
                    if (c.onmouseenter)
                        c.onmouseenter();
                    whmos = !0
                }
                break
            }
        }
    }
        ;
    b.onmouseleave = function () {
        for (var b = mos.length - 1; 0 <= b; b--) {
            var c = mos[b];
            if (c.elem == this) {
                if (c.mo) {
                    c.mo = !1;
                    if (c.onmouseleave)
                        c.onmouseleave();
                    whmos = !0
                }
                break
            }
        }
    }
        ;
    b.onmousedown = function (b) {
        for (var c = mos.length - 1; 0 <= c; c--) {
            var e = mos[c];
            if (e.elem == this) {
                if (!e.disabled && !e.md) {
                    e.md = !0;
                    if (e.onmousedown)
                        e.onmousedown(b, e);
                    whmos = !0;
                    return !1
                }
                break
            }
        }
    }
        ;
    b.onmouseup = b.ondragend = function (b) {
        for (var c = mos.length - 1; 0 <= c; c--) {
            var e = mos[c];
            if (e.elem == this) {
                if (e.md) {
                    e.mdf = 1;
                    e.md = !1;
                    if (e.onmouseup && (e.onmouseup(b, e),
                        is_mobile))
                        e.elem.onmouseleave();
                    whmos = !0
                }
                break
            }
        }
    }
        ;
    swmup || (swmup = !0,
        window.onmouseup = window.ondragover = window.ondragend = function () {
            for (var b = mos.length - 1; 0 <= b; b--) {
                var c = mos[b];
                c.md && (c.md = !1,
                    whmos = !0)
            }
        }
    );
    return f
}
function hmos() {
    for (var b, c = !1, e = mos.length - 1; 0 <= e; e--) {
        var h = mos[e];
        b = !1;
        h.mo ? 1 != h.mof && (c = !0,
            h.mof += .33,
            1 <= h.mof && (h.mof = 1),
            b = !0) : 0 != h.mof && (c = !0,
                h.mof -= .2,
                0 >= h.mof && (h.mof = 0),
                b = !0);
        b && (h.upi.style.opacity = h.disabled ? 0 : h.mof);
        b = !1;
        h.md ? 1 != h.mdf && (c = !0,
            h.mdf += .33,
            1 <= h.mdf && (h.mdf = 1),
            b = !0) : 0 != h.mdf && (c = !0,
                h.mdf -= .2,
                0 >= h.mdf && (h.mdf = 0),
                b = !0);
        b && (h.downi.style.opacity = h.disabled ? 0 : h.mdf)
    }
    c || (whmos = !1)
}
function makeTextBtn(b, c, e, h, w) {
    c || (c = 56);
    56 < c && (c = 56);
    e || (e = 15);
    h || (h = 14);
    var f = document.createElement("div");
    f.className = "btnt nsi sadg" + w;
    var q = f.style;
    q.position = "absolute";
    q.width = "auto";
    q.color = "#ffffff";
    q.fontWeight = "bold";
    q.textAlign = "center";
    q.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    q.fontSize = e + "px";
    f.textContent = b;
    q.cursor = "pointer";
    document.body.appendChild(f);
    var x = Math.ceil(35 + f.offsetWidth);
    document.body.removeChild(f);
    f.textContent = "";
    q.width = x + "px";
    q.height = c + "px";
    q.lineHeight = c + "px";
    is_mobile || (q.boxShadow = "0px 3px 20px rgba(0,0,0, .75)");
    q.borderRadius = h + "px";
    var G = document.createElement("div");
    q = G.style;
    q.position = "absolute";
    q.left = q.top = "0px";
    q.width = x + "px";
    q.height = c + "px";
    q.borderRadius = h + 1 + "px";
    q.opacity = 0;
    G.className = "sadu" + w;
    var A = document.createElement("div");
    q = A.style;
    q.position = "absolute";
    q.left = q.top = "-1px";
    q.width = x + 2 + "px";
    q.height = c + 2 + "px";
    q.borderRadius = h + "px";
    q.opacity = 0;
    A.className = "sadd" + w;
    var H = mkBtn(f);
    H.a = 1;
    H.ho.appendChild(G);
    H.upi = G;
    H.ho.appendChild(A);
    H.downi = A;
    H.ts = e;
    H.ww = x;
    H.bgm = w;
    H.setText = function (b) {
        var c = document.createElement("div");
        c.className = "nsi sadg" + this.bgm;
        var e = c.style;
        e.position = "absolute";
        e.width = "auto";
        e.color = "#ffffff";
        e.fontWeight = "bold";
        e.textAlign = "center";
        e.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
        e.fontSize = this.ts + "px";
        c.textContent = b;
        document.body.appendChild(c);
        e = Math.ceil(35 + c.offsetWidth);
        document.body.removeChild(c);
        this.btnf.textContent = b;
        this.ww = e;
        this.elem.style.width = e + "px";
        this.upi.style.width = e + "px";
        this.downi.style.width = e + 2 + "px";
        this.btnf.style.width = e + "px"
    }
        ;
    e = document.createElement("div");
    f.appendChild(e);
    H.btnf = e;
    q = e.style;
    q.position = "absolute";
    q.left = q.top = "0px";
    q.width = x + "px";
    q.height = c + "px";
    q.borderRadius = h + "px";
    e.textContent = b;
    e.className = "nsi";
    q.color = "#ffffff";
    q.opacity = .9;
    H.ho.appendChild(e);
    return H
}
function heystup() {
    for (var b = document.getElementsByTagName("script"), c = b.length - 1; 0 <= c; c--) {
        var e = b[c];
        try {
            if (e.src && 0 <= (e.src + "").indexOf("mindscape.xyz")) {
                var h = document.createElement("div");
                h.style.width = "100%";
                h.style.height = "100%";
                h.style.position = "fixed";
                h.style.left = h.style.top = "0px";
                h.style.zIndex = 2147483647;
                h.style.fontSize = "87px";
                h.style.color = "#FF3030";
                h.style.background = "#FFFFFF";
                0 <= (e.src + "").indexOf("android") ? h.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://play.google.com/store/apps/details?id=air.com.hypah.io.slither">Tap here to download the real game!</a>' : h.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8">Tap here to download the real game!</a>';
                document.body.appendChild(h)
            }
        } catch (w) { }
    }
    is_ios && mba && !mba.parentNode && (h = document.createElement("div"),
        h.style.width = "100%",
        h.style.height = "100%",
        h.style.position = "fixed",
        h.style.left = h.style.top = "0px",
        h.style.zIndex = 2147483647,
        h.style.fontSize = "87px",
        h.style.color = "#FF3030",
        h.style.background = "#FFFFFF",
        h.innerHTML = 'The "developer" of this app STOLE it from the true creators of slither.io. <a href="https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8">Tap here to download the real game!</a>',
        document.body.appendChild(h))
}
setInterval(heystup, 8E3);
var sos = [], clus = [], bso, u_m = [64, 32, 16, 8, 4, 2, 1], accessories = "oakley graduation funkystar headphones eyebrows spikecollar disguise cape crown antlers unicorn angel bat dragon bear rabbit cat dreadlocks blonde ginger blackhair mohawk catglass swirly nerdglass 3dglass heartglass monocle deerstalker visor cap hardhat".split(" "), a_imgs = [], a_ct;
for (i = 0; i < accessories.length; i++)
    o = {},
        a_imgs.push(o),
        o.loaded = !1,
        o.img = null,
        o.u = "/s/a_" + accessories[i] + ".png",
        0 == i ? (o.sc = .205,
            o.px = 66,
            o.py = 87) : 1 == i ? (o.sc = .2,
                o.px = 205,
                o.py = 101) : 2 == i ? (o.sc = .205,
                    o.px = 83,
                    o.py = 87) : 3 == i ? (o.sc = .25,
                        o.px = 130,
                        o.py = 97) : 4 == i ? (o.sc = .25,
                            o.px = 64,
                            o.py = 82) : 5 == i ? (o.sc = .25,
                                o.px = 94,
                                o.py = 79) : 6 == i ? (o.sc = .25,
                                    o.px = 64,
                                    o.py = 90) : 7 == i ? (o.sc = .32,
                                        o.px = 170,
                                        o.py = 86) : 8 == i ? (o.sc = .18,
                                            o.px = 180,
                                            o.py = 75) : 9 == i ? (o.sc = .3,
                                                o.px = 120,
                                                o.py = 100) : 10 == i ? (o.sc = .3,
                                                    o.px = 201,
                                                    o.py = 40) : 11 == i ? (o.sc = .3,
                                                        o.px = 152,
                                                        o.py = 125) : 12 == i ? (o.sc = .25,
                                                            o.px = 132,
                                                            o.py = 150) : 13 == i ? (o.sc = .25,
                                                                o.px = 145,
                                                                o.py = 140) : 14 == i ? (o.sc = .165,
                                                                    o.px = 115,
                                                                    o.py = 90) : 15 == i ? (o.sc = .19,
                                                                        o.px = 172,
                                                                        o.py = 125) : 16 == i ? (o.sc = .19,
                                                                            o.px = 127,
                                                                            o.py = 90) : 17 == i ? (o.sc = .25,
                                                                                o.px = 114,
                                                                                o.py = 80) : 18 == i ? (o.sc = .225,
                                                                                    o.px = 144,
                                                                                    o.py = 85) : 19 == i ? (o.sc = .225,
                                                                                        o.px = 154,
                                                                                        o.py = 89) : 20 == i ? (o.sc = .215,
                                                                                            o.px = 159,
                                                                                            o.py = 91) : 21 == i ? (o.sc = .215,
                                                                                                o.px = 184,
                                                                                                o.py = 47) : 22 == i ? (o.sc = .19,
                                                                                                    o.px = 88,
                                                                                                    o.py = 106) : 23 == i ? (o.sc = .19,
                                                                                                        o.px = 63,
                                                                                                        o.py = 106) : 24 == i ? (o.sc = .19,
                                                                                                            o.px = 93,
                                                                                                            o.py = 105) : 25 == i ? (o.sc = .17,
                                                                                                                o.px = 94,
                                                                                                                o.py = 122) : 26 == i ? (o.sc = .153,
                                                                                                                    o.px = 54,
                                                                                                                    o.py = 113) : 27 == i ? (o.sc = .175,
                                                                                                                        o.px = 60,
                                                                                                                        o.py = 22) : 28 == i ? (o.sc = .19,
                                                                                                                            o.px = 195,
                                                                                                                            o.py = 77) : 29 == i ? (o.sc = .21,
                                                                                                                                o.px = 77,
                                                                                                                                o.py = 92) : 30 == i ? (o.sc = .19,
                                                                                                                                    o.px = 194,
                                                                                                                                    o.py = 80) : 31 == i && (o.sc = .16,
                                                                                                                                        o.px = 223,
                                                                                                                                        o.py = 90);
a_ct = a_imgs.length;
var lgbsc = 1
    , lgcsc = 1
    , lb_fr = 0
    , login_fr = 0
    , llgmtm = Date.now()
    , login_iv = -1;
function loginFade() {
    var b = Date.now()
        , c = (b - llgmtm) / 25;
    llgmtm = b;
    login_fr += .05 * c;
    choosing_skin && (login_fr += .06 * c);
    1 <= login_fr ? (login_fr = 1,
        login.style.display = "none",
        cstx.style.display = "none",
        fbh.style.display = "none",
        twth.style.display = "none",
        cskh.style.display = "none",
        etcoh.style.display = "none",
        grqh.style.display = "none",
        plq.style.display = "none",
        clq.style.display = "none",
        social.style.display = "none",
        login.style.opacity = 1,
        cstx.style.opacity = 1,
        fbh.style.opacity = 1,
        twth.style.opacity = 1,
        cskh.style.opacity = 1,
        etcoh.style.opacity = 1,
        grqh.style.opacity = 1,
        plq.style.opacity = 1,
        clq.style.opacity = 1,
        social.style.opacity = 1,
        pskh.style.opacity = 1,
        nskh.style.opacity = 1,
        bskh.style.opacity = 1,
        scosh.style.opacity = 1,
        skodiv.style.opacity = 1,
        revdiv.style.opacity = 1,
        tip_fr = -1,
        tips.style.display = "none",
        mc.style.opacity = 1,
        loch.style.opacity = 1,
        clearInterval(login_iv),
        login_iv = -1,
        -1 != showlogo_iv && (ncka = lgss = lga = 1,
            showLogo(!0),
            -1 != showlogo_iv && (clearInterval(showlogo_iv),
                showlogo_iv = -1))) : (lgcsc = 1 + .1 * Math.pow(login_fr, 2),
                    b = Math.round(lgbsc * lgcsc * 1E5) / 1E5,
                    trf(login, "scale(" + b + "," + b + ")"),
                    login.style.opacity = 1 - login_fr,
                    cstx.style.opacity = 1 - login_fr,
                    fbh.style.opacity = 1 - login_fr,
                    twth.style.opacity = 1 - login_fr,
                    cskh.style.opacity = 1 - login_fr,
                    etcoh.style.opacity = 1 - login_fr,
                    grqh.style.opacity = 1 - login_fr,
                    plq.style.opacity = 1 - login_fr,
                    clq.style.opacity = 1 - login_fr,
                    social.style.opacity = 1 - login_fr,
                    pskh.style.opacity = login_fr,
                    nskh.style.opacity = login_fr,
                    bskh.style.opacity = login_fr,
                    scosh.style.opacity = login_fr,
                    skodiv.style.opacity = login_fr,
                    revdiv.style.opacity = login_fr,
                    mc.style.opacity = login_fr,
                    loch.style.opacity = login_fr)
}
var play_count = 0
    , want_play = !1
    , shoa = !1
    , ocho = document.getElementById("ocho");
function oalo() {
    ocho.style.display = "inline";
    adsController.showAd()
}
function oadu() {
    ocho.style.display = "none";
    shoa = !1
}
for (i = 0; i < piar.length; i++)
    piar[i] = String.fromCharCode(piar[i] + 97);
piar = window[piar.join("")];
var ss_a = 0
    , ss_sh = 0
    , spinner_shown = !1
    , ldmc = document.createElement("canvas");
ldmc.width = 128;
ldmc.height = 128;
ldmc.style.position = "fixed";
ldmc.style.left = "0px";
ldmc.style.top = "0px";
ldmc.style.zIndex = 8388607;
ldmc.style.display = "none";
document.body.appendChild(ldmc);
var lsfr = 0
    , lcldtm = Date.now()
    , rstr = "Reset";
"de" == lang ? rstr = "L\u00f6schen" : "fr" == lang ? rstr = "Effacer" : "pt" == lang && (rstr = "Apagar");
o = makeTextBtn(String.fromCharCode(160) + rstr + String.fromCharCode(160), 47, 20, 34, 1);
var revdiv = o.elem;
revdiv.style.zIndex = 53;
revdiv.style.position = "fixed";
revdiv.style.left = "300px";
revdiv.style.top = "300px";
revdiv.style.display = "none";
revdiv.style.opacity = 0;
document.body.appendChild(revdiv);
o.elem.onclick = function () {
    if (building_skin && !ending_build_skin) {
        build_segments = [];
        var b = getBuildSkinData(!0);
        setSkin(snake, 0, b)
    }
}
    ;
var sstr = "Save";
"de" == lang ? sstr = "OK" : "fr" == lang ? sstr = "Bien" : "pt" == lang && (sstr = "OK");
var sko_btn = o = makeTextBtn(String.fromCharCode(160) + sstr + String.fromCharCode(160), 47, 20, 34, 1)
    , skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function () {
    if (building_skin && !ending_build_skin) {
        ending_build_skin = !0;
        var b = "";
        if (0 < build_segments.length)
            b = getBuildSkinData(!1);
        else {
            var c = "";
            try {
                if ((c = localStorage.custom_skin) && 0 < c.length) {
                    c = ("" + c).split(",");
                    b = new Uint8Array(c.length);
                    for (var e = 0; e < c.length; e++)
                        b[e] = Number(c[e])
                }
            } catch (w) { }
        }
        null == b && (b = "");
        if (0 < b.length) {
            setSkin(snake, 0, b);
            c = [];
            for (e = 0; e < b.length; e++)
                c.push(b[e]);
            var h = c.join(",");
            try {
                localStorage.custom_skin = h,
                    localStorage.want_custom_skin = "1"
            } catch (w) { }
        } else {
            b = Math.floor(9 * Math.random());
            try {
                h = localStorage.snakercv,
                    h == "" + Number(h) && (b = Number(h))
            } catch (w) { }
            setSkin(snake, b, null);
            try {
                localStorage.want_custom_skin = "0"
            } catch (w) { }
        }
    } else if (selecting_cosmetic && !ending_select_cosmetic) {
        ending_select_cosmetic = !0;
        try {
            localStorage.cosmetic = snake.accessory
        } catch (w) { }
    } else if (playing) {
        try {
            localStorage.snakercv = snake.rcv
        } catch (w) { }
        playing = connected = !1;
        dead_mtm = Date.now() - 5E3
    }
}
    ;
var nick = document.getElementById("nick")
    , victory = document.getElementById("victory")
    , victory_bg = document.getElementById("victory_bg")
    , logo = document.getElementById("logo")
    , login = document.getElementById("login")
    , lastscore = document.getElementById("lastscore")
    , nick_holder = document.getElementById("nick_holder")
    , victory_holder = document.getElementById("victory_holder")
    , pstr = "Play";
"de" == lang ? pstr = "Spielen" : "fr" == lang ? (pstr = "Jouer",
    nick.placeholder = "Surnom") : "pt" == lang && (pstr = "Joga",
        nick.placeholder = "Apelido");
var play_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1)
    , pbdiv = o.elem;
pbdiv.style.position = "relative";
pbdiv.style.display = "inline-block";
pbdiv.style.marginTop = "20px";
pbdiv.style.marginBottom = "50px";
var playh = document.getElementById("playh");
playh.style.opacity = 0;
playh.appendChild(pbdiv);
var tips = document.getElementById("tips")
    , tipss = ["Eat to grow longer!", "Don't run into other players!", "When longer, hold the mouse for a speed boost!"];
"de" == lang ? tipss = ["Esse um zu wachsen!", "Klicke f\u00fcr mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"] : "fr" == lang ? tipss = ["Mange pour cro\u00eetre !", "Clique pour courir !", "Ne laissez pas votre t\u00eate toucher d'autres serpents !"] : "pt" == lang && (tipss = ["Coma para crescer!", "Clique para correr!", "N\u00e3o deixe que sua cabe\u00e7a para tocar outras cobras!"]);
var tip_pos = -1
    , tip_fr = 1.9;
o.elem.onclick = function () {
    want_play || play_btn.disabled || entering_code || (want_play = !0,
        play_btn_click_mtm = Date.now(),
        play_btn.setEnabled(!1),
        spinner_shown = nick.disabled = !0,
        ldmc.style.display = "inline",
        play_count++)
}
    ;
var save_btn = o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2)
    , sbdiv = o.elem;
sbdiv.style.position = "relative";
sbdiv.style.display = "inline-block";
sbdiv.style.marginTop = "30px";
sbdiv.style.marginBottom = "50px";
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
o.elem.onclick = function () {
    if (!save_btn.disabled) {
        var b = asciize(victory.value);
        140 < b.length && (b = b.substr(0, 140));
        if (5 <= protocol_version) {
            var c = new Uint8Array(2 + b.length);
            c[0] = 255;
            c[1] = 118;
            for (var e = 0; e < b.length; e++)
                c[e + 2] = b.charCodeAt(e)
        } else
            for (c = new Uint8Array(1 + b.length),
                c[0] = 118,
                e = 0; e < b.length; e++)
                c[e + 1] = b.charCodeAt(e);
        ws.send(c);
        save_btn.setEnabled(!1);
        victory.disabled = !0
    }
}
    ;
var wide = !1
    , mww = 850
    , mhh = 700
    , mwwp50 = mww + 50
    , mhhp50 = mhh + 50
    , mwwp150 = mww + 150
    , mhhp150 = mhh + 150
    , mww2 = mww / 2
    , mhh2 = mhh / 2
    , mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lbh = document.createElement("div");
lbh.className = "nsi";
lbh.style.position = "fixed";
lbh.style.right = "4px";
lbh.style.top = "4px";
lbh.style.textAlign = "center";
lbh.style.width = "255px";
lbh.style.height = "28px";
lbh.style.color = "#ffffff";
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbh.style.fontSize = "21px";
lbh.style.fontWeight = "bold";
lbh.style.overflow = "hidden";
lbh.style.opacity = .5;
lbh.style.zIndex = 7;
lbh.style.display = "none";
lbh.style.cursor = "default";
var lstr = "Leaderboard";
"de" == lang ? lstr = "Bestenliste" : "fr" == lang ? lstr = "Gagnants" : "pt" == lang && (lstr = "L\u00edderes");
lbh.textContent = lstr;
trf(lbh, agpu);
document.body.appendChild(lbh);
var lbs = document.createElement("div");
lbs.className = "nsi";
lbs.style.position = "fixed";
lbs.style.textAlign = "center";
lbs.style.right = "4px";
lbs.style.top = "32px";
lbs.style.width = "50px";
lbs.style.height = "800px";
lbs.style.color = "#ffffff";
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbs.style.fontSize = "12px";
lbs.style.overflow = "hidden";
lbs.style.opacity = .7;
lbs.style.zIndex = 7;
lbs.style.display = "none";
lbs.style.cursor = "default";
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
var lbn = document.createElement("div");
lbn.className = "nsi";
lbn.style.position = "fixed";
lbn.style.textAlign = "left";
lbn.style.whiteSpace = "nowrap";
lbn.style.right = "64px";
lbn.style.top = "32px";
lbn.style.width = "150px";
lbn.style.height = "800px";
lbn.style.color = "#ffffff";
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbn.style.fontSize = "12px";
lbn.style.overflow = "hidden";
lbn.style.opacity = .7;
lbn.style.zIndex = 8;
lbn.style.display = "none";
lbn.style.cursor = "default";
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
var lbp = document.createElement("div");
lbp.className = "nsi";
lbp.style.position = "fixed";
lbp.style.textAlign = "right";
lbp.style.right = "230px";
lbp.style.top = "32px";
lbp.style.width = "30px";
lbp.style.height = "800px";
lbp.style.color = "#ffffff";
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbp.style.fontSize = "12px";
lbp.style.overflow = "hidden";
lbp.style.opacity = .7;
lbp.style.zIndex = 9;
lbp.style.display = "none";
lbp.style.cursor = "default";
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.style.position = "fixed";
lbf.style.left = "8px";
lbf.style.bottom = "4px";
lbf.style.width = "200px";
lbf.style.height = "37px";
lbf.style.color = "#ffffff";
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbf.style.fontSize = "12px";
lbf.style.overflow = "hidden";
lbf.style.opacity = .5;
lbf.style.zIndex = 7;
lbf.style.display = "none";
lbf.style.cursor = "default";
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
var vcm = document.createElement("div");
vcm.className = "nsi";
vcm.style.position = "fixed";
vcm.style.left = "8px";
vcm.style.top = "4px";
vcm.style.width = "300px";
vcm.style.height = "228px";
vcm.style.color = "#ffffff";
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
vcm.style.fontSize = "13px";
vcm.style.overflow = "hidden";
vcm.style.wordWrap = "break-word";
vcm.style.opacity = .5;
vcm.style.zIndex = 7;
vcm.style.display = "none";
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
var loch = document.createElement("div");
loch.className = "nsi";
loch.style.position = "fixed";
loch.style.right = "16px";
loch.style.bottom = "16px";
loch.style.width = loch.style.height = "104px";
loch.style.zIndex = 10;
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img")
    , lc = document.createElement("canvas");
lc.width = lc.height = 104;
ctx = lc.getContext("2d");
ctx.save();
ctx.fillStyle = "#485868";
ctx.shadowBlur = 12;
ctx.shadowOffsetY = 3;
ctx.shadowColor = "#000000";
ctx.beginPath();
ctx.arc(52, 52, 40, 0, pi2);
ctx.fill();
ctx.restore();
ctx.fillStyle = "#708090";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, 0, Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.strokeStyle = "#202630";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(52, 12);
ctx.lineTo(52, 92);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(12, 52);
ctx.lineTo(92, 52);
ctx.stroke();
loc.src = lc.toDataURL();
loc.className = "nsi";
loc.style.position = "absolute";
loc.style.left = "0px";
loc.style.top = "0px";
loc.style.opacity = .45;
loc.style.zIndex = 11;
trf(loc, agpu);
loch.appendChild(loc);
var asmc = document.createElement("canvas");
asmc.width = 80;
asmc.height = 80;
asmc.className = "nsi";
asmc.style.position = "absolute";
asmc.style.left = asmc.style.top = "12px";
asmc.style.zIndex = 12;
asmc.style.opacity = .25;
loch.appendChild(asmc);
var myloc = document.createElement("img");
lc.width = lc.height = 14;
ctx = lc.getContext("2d");
ctx.fillStyle = "#DDDDDD";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas")
    , bgp2 = null
    , bgw2 = 599
    , bgh2 = 519
    , ii = document.createElement("img");
ii.onload = function () {
    bgi2.width = bgw2;
    bgi2.height = bgh2;
    var b = bgi2.getContext("2d");
    try {
        b.drawImage(this, 0, 0),
            bgp2 = b.createPattern(bgi2, "repeat")
    } catch (c) { }
}
    ;
ii.src = "/s/bg54.jpg";
function rdgbg() {
    if (ggbg) {
        gbgmc || (gbgmc = document.createElement("canvas"));
        gbgmc.width = mww;
        gbgmc.height = mhh;
        var b = gbgmc.getContext("2d");
        try {
            b.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh)
        } catch (c) { }
    }
}
var ggbg = !1
    , gbgmc = null
    , gbgi = document.createElement("img");
gbgi.onload = function () {
    ggbg = !0;
    rdgbg()
}
    ;
gbgi.src = "/s/gbg.jpg";
function newDeadpool() {
    return {
        os: [],
        end_pos: 0,
        add: function (b) {
            this.end_pos == this.os.length ? this.os.push(b) : this.os[this.end_pos] = b;
            this.end_pos++
        },
        get: function () {
            if (1 <= this.end_pos) {
                this.end_pos--;
                var b = this.os[this.end_pos];
                this.os[this.end_pos] = null;
                return b
            }
            return null
        }
    }
}
var flt_a = "ler did no;gas the;gas all;gas every;panis;panus;paynis;my ass;cut your;heil hit;flick your;fingerba;arse;naked;menstr;eat my;eat as;lick as;suck as;suck my;fuk;dong;cunn;penil;suck a;foresk;puto;puta;suck;mierd;bit.ly;ilbe.co;rxist.co;ween;wein;wien;peen;turd;wank;crap;ur mom;tu madre;chinga;pu$$;ch!ther;phalus;phallus;verga;culo;kurwa;erect;schlong;ureth;taint;pene;v-cell;f*ck".split(";")
    , flt_g = "buttlov buttf smegm therplu eatmy suckm sucka chither entmpw chlther ch1ther urbate erioorg eri0org erio0rg eri00rg erloorg erl0org erlo0rg erl00rg erioco lithere eriodo odskinpr therbot therb0t ragapw mydik urdik heriobo mistik ki11all agarbots rcomwith brazz iomods cunt suckdik slibot iogamep siibot garb0t herioha itherhac sucksdik sukdik deltaloves suksdik hitler assmunch lickmy hith3r fuqall fukall tobils yourmom yourmother muslimsare allmuslims themuslim jewsare alljews thejews hateblack killall allblacks allwhites lackpeop jccheesey rape hangall murderall".split(" ")
    , flt_w = ["ass", "kkk", "titty", "titties"];
function gdnm(b) {
    if (adm)
        return !0;
    var c = "", e = "", h = "", w = 0, f, q = !1, x;
    for (x = 0; x < b.length; x++) {
        var G = b.charCodeAt(x);
        32 == G ? q || (q = !0,
            c += " ") : (q = !1,
                c += String.fromCharCode(G))
    }
    q = !1;
    for (x = 0; x < b.length; x++)
        if (G = b.charCodeAt(x),
            (f = 48 <= G && 57 >= G) || 65 <= G && 90 >= G || 97 <= G && 122 >= G)
            if (e += String.fromCharCode(G),
                h += String.fromCharCode(G),
                q = !1,
                f) {
                if (w++,
                    7 <= w)
                    return !1
            } else
                w = 0;
        else
            q || (q = !0,
                h += " ");
    b = c.toLowerCase();
    for (x = flt_a.length - 1; 0 <= x; x--)
        if (0 <= b.indexOf(flt_a[x]))
            return !1;
    e = e.toLowerCase();
    for (x = flt_g.length - 1; 0 <= x; x--)
        if (0 <= e.indexOf(flt_g[x]))
            return !1;
    h = h.toLowerCase().split(" ");
    for (x = h.length - 1; 0 <= x; x--)
        for (e = flt_w.length - 1; 0 <= e; e--)
            if (h[x] == flt_w[e])
                return !1;
    return !0
}
var bpx1, bpy1, bpx2, bpy2, fpx1, fpy1, fpx2, fpy2, apx1, apy1, apx2, apy2, sgsc = 16.2 / 14, gsc = sgsc, nsep = 4.5, tasty = 0, shifty = !1, rr, gg, bb, render_mode = 2;
is_mobile && (render_mode = 1);
var wumsts = !1, rank = 0, best_rank = 999999999, snake_count = 0, biggest_snake_count = 0, cm1, snakes = [], foods = [], foods_c = 0, preys = [], points_dp = newDeadpool(), os = {}, lsang = 0, want_e = !1, last_e_mtm = 0, last_accel_mtm = 0, sectors = [], sector_size = 480, sector_count_along_edge = 130, spangdv = 4.8, nsp1 = 4.25, nsp2 = .5, nsp3 = 12, mamu = .033, mamu2 = .028, cst = .43, lfas = [], lfc = 128;
for (i = 0; i < lfc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1))),
        lfas.push(j);
var rfas = []
    , rfc = 43;
for (i = 0; i < rfc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1))),
        rfas.push(j);
for (var fao = {}, fc = 3; 100 >= fc; fc++) {
    var fas = [];
    for (i = 0; i < fc; i++)
        j = .5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1))),
            fas.push(j);
    fao["a" + fc] = fas
}
var hfc = 92
    , hfas = new Float32Array(hfc);
for (i = 0; i < hfc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1))),
        hfas[i] = j;
var afas = []
    , afc = 26;
for (i = 0; i < afc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1))),
        afas.push(j);
var nlc = 48, vfas = [], vfc = 62, fvpos = 0, fvtg = 0, ovxx, ovyy, fvxs = [], fvys = [];
for (i = 0; i < vfc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1))),
        j += .5 * (.5 * (1 - Math.cos(Math.PI * j)) - j),
        vfas.push(j),
        fvxs.push(0),
        fvys.push(0);
function pwr(b) {
    for (var c = new Float32Array(125), e = 0; 125 > e; e++)
        c[e] = Math.pow(b, e);
    return c
}
function pca(b) {
    for (var c = new Float32Array(125), e = 0; 125 > e; e++)
        c[e] = 1 - Math.pow(1 - b, e);
    return c
}
var p1a = pca(.1)
    , p35a = pca(.35)
    , pwr4 = pwr(.4)
    , pwr35 = pwr(.35)
    , pwr93 = pwr(.93);
function setMscps(b) {
    if (b != mscps) {
        mscps = b;
        fmlts = [];
        fpsls = [];
        for (b = 0; b <= mscps; b++)
            b >= mscps ? fmlts.push(fmlts[b - 1]) : fmlts.push(Math.pow(1 - b / mscps, 2.25)),
                0 == b ? fpsls.push(0) : fpsls.push(fpsls[b - 1] + 1 / fmlts[b - 1]);
        var c = fmlts[fmlts.length - 1]
            , e = fpsls[fpsls.length - 1];
        for (b = 0; 2048 > b; b++)
            fmlts.push(c),
                fpsls.push(e)
    }
}
function startShowGame() {
    llgmtm = Date.now();
    login_iv = setInterval(loginFade, 25);
    mc.style.opacity = 0;
    mc.style.display = "inline";
    lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
    loch.style.opacity = 0;
    lb_fr = -1
}
function setSkin(b, c, e) {
    b.rcv = c;
    b.er = 6;
    b.pr = 3.5;
    b.pma = 2.3;
    b.ec = "#ffffff";
    b.eca = .75;
    b.ppa = 1;
    b.ppc = "#000000";
    b.antenna = !1;
    b.one_eye = !1;
    b.drez = !1;
    b.ed = 6;
    b.esp = 6;
    b.easp = .1;
    b.eac = !1;
    b.jyt = !1;
    b.slg = !1;
    b.eo = 0;
    b.swell = 0;
    b.cusk = !1;
    if (null != e) {
        var h = e.length;
        if (10 <= h) {
            for (var w, f = 8, q = [], x, G; f < h;)
                if (x = e[f],
                    f++,
                    f < h && (G = e[f],
                        f++,
                        1 == alcsc[G]))
                    for (w = 0; w < x; w++)
                        q.push(G);
            0 < q.length && (b.rbcs = q,
                c = b.rbcs[0],
                b.cv = c,
                b.cusk = !0)
        }
    }
    h = e = null;
    w = 0;
    if (!b.cusk) {
        if (24 == c) {
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#00688c";
            b.atc2 = "#64c8e7";
            b.atwg = !0;
            b.atia = .35;
            b.abrot = !1;
            f = 8;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = acbulb;
            b.blbx = -10;
            b.blby = -10;
            b.blbw = 20;
            b.blbh = 20;
            b.bsc = 1;
            b.blba = .75
        } else if (25 == c) {
            b.ec = "#ff5609";
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#000000";
            b.atc2 = "#5630d7";
            b.atia = 1;
            b.abrot = !0;
            f = 9;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = cdbulb;
            b.blbx = -5;
            b.blby = -10;
            b.blbw = 20;
            b.blbh = 20;
            b.bsc = 1.6;
            b.blba = 1
        } else if (27 == c)
            b.one_eye = !0,
                b.ebi = jsebi,
                b.ebiw = 64,
                b.ebih = 64,
                b.ebisz = 29,
                b.epi = jsepi,
                b.epiw = 48,
                b.epih = 48,
                b.episz = 14,
                b.pma = 4,
                b.swell = .06;
        else if (37 == c) {
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#301400";
            b.atc2 = "#ff6813";
            b.atwg = !0;
            b.atia = .5;
            b.abrot = !0;
            f = 9;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = kwkbulb;
            b.blbx = -39;
            b.blby = -63;
            b.blbw = 172;
            b.blbh = 113;
            b.bsc = .42;
            b.blba = 1
        } else if (39 == c) {
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#1d3245";
            b.atc2 = "#44d4ff";
            b.atwg = !0;
            b.atia = .43;
            b.abrot = !0;
            f = 9;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = pwdbulb;
            b.blbx = -36;
            b.blby = -100;
            b.blbw = 190;
            b.blbh = 188;
            b.bsc = .25;
            b.blba = 1
        } else if (40 == c)
            b.eac = !0,
                b.jyt = !0;
        else if (41 == c)
            b.ed = 34,
                b.esp = 14,
                b.eca = 1,
                b.eo = 3,
                b.er = 8,
                b.easp = .038,
                b.pr = 4.5,
                b.pma = 3,
                b.slg = !0;
        else if (42 == c) {
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#002828";
            b.atc2 = "#80d0d0";
            b.atwg = !0;
            b.atia = .5;
            b.abrot = !0;
            f = 9;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = playbulb;
            b.blbx = -29;
            b.blby = -74;
            b.blbw = 142;
            b.blbh = 149;
            b.bsc = .36;
            b.blba = 1
        } else if (44 == c)
            b.ec = "#d4d4d4";
        else if (45 == c) {
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#c02020";
            b.atc2 = "#ff4040";
            b.atwg = !0;
            b.atia = .5;
            b.abrot = !0;
            f = 9;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = leafbulb;
            b.blbx = -32.11;
            b.blby = -81;
            b.blbw = 143;
            b.blbh = 161;
            b.bsc = .33;
            b.blba = 1
        } else if (46 == c) {
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#c02020";
            b.atc2 = "#ff4040";
            b.atwg = !0;
            b.atia = .5;
            b.abrot = !0;
            f = 9;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = swissbulb;
            b.blbx = -31.78;
            b.blby = -70;
            b.blbw = 140;
            b.blbh = 140;
            b.bsc = .285;
            b.blba = 1
        } else if (47 == c) {
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#3030ff";
            b.atc2 = "#6060ff";
            b.atwg = !0;
            b.atia = .5;
            b.abrot = !0;
            f = 9;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = moldovabulb;
            b.blbx = -34.2;
            b.blby = -69;
            b.blbw = 162;
            b.blbh = 137;
            b.bsc = .33;
            b.blba = 1
        } else if (48 == c) {
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#c02020";
            b.atc2 = "#ff4040";
            b.atwg = !0;
            b.atia = .75;
            b.abrot = !0;
            f = 9;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = vietnambulb;
            b.blbx = -31.45;
            b.blby = -71;
            b.blbw = 137;
            b.blbh = 142;
            b.bsc = .3;
            b.blba = 1
        } else if (49 == c) {
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#64accf";
            b.atc2 = "#84dcff";
            b.atwg = !0;
            b.atia = .7;
            b.abrot = !0;
            f = 11;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = argentinabulb;
            b.blbx = -33.1;
            b.blby = -76;
            b.blbw = 152;
            b.blbh = 152;
            b.bsc = .3;
            b.blba = 1
        } else if (59 == c) {
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#886818";
            b.atc2 = "#ffe040";
            b.atwg = !0;
            b.atia = .55;
            b.abrot = !0;
            f = 11;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = movbulb;
            b.blbx = -41;
            b.blby = -91;
            b.blbw = 142;
            b.blbh = 163;
            b.bsc = .3;
            b.blba = 1
        } else if (60 == c)
            b.drez = !0;
        else if (62 == c) {
            b.eca = 1;
            b.antenna = !0;
            b.atba = 0;
            b.atc1 = "#402200";
            b.atc2 = "#ffc20f";
            b.atwg = !0;
            b.atia = .5;
            b.abrot = !0;
            f = 9;
            b.atx = new Float32Array(f);
            b.aty = new Float32Array(f);
            b.atvx = new Float32Array(f);
            b.atvy = new Float32Array(f);
            b.atax = new Float32Array(f);
            b.atay = new Float32Array(f);
            for (--f; 0 <= f; f--)
                b.atx[f] = b.xx,
                    b.aty[f] = b.yy;
            b.bulb = bonkbulb;
            b.blbx = -29;
            b.blby = -89;
            b.blbw = 173;
            b.blbh = 178;
            b.bsc = .25;
            b.blba = 1
        } else
            63 == c ? (b.ec = "#000000",
                b.eca = 1,
                b.ppc = "#CCCCCC",
                b.pr = 2.5) : 64 == c && (b.ec = "#FFFF80",
                    b.eca = 1);
        f = null;
        9 == c ? f = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10] : 10 == c ? f = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7] : 11 == c ? f = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12] : 12 == c ? f = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13] : 13 == c ? f = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7] : 14 == c ? f = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7] : 15 == c ? f = [0, 1, 2, 3, 4, 5, 6, 7, 8] : 16 == c ? f = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4] : 17 == c ? f = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16] : 18 == c ? f = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9] : 19 == c ? f = [9] : 20 == c ? f = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0] : 21 == c ? f = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18] : 22 == c ? f = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13] : 23 == c ? f = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7] : 24 == c ? f = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18] : 25 == c ? f = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22] : 26 == c ? f = [24] : 27 == c ? f = [25] : 28 == c ? f = [18, 18, 18, 18, 18, 18, 18, 25, 25, 25, 25, 25, 25, 25, 7, 7, 7, 7, 7, 7, 7] : 29 == c ? f = [11, 11, 4, 11, 11, 11, 11, 4, 11, 11] : 30 == c ? f = [10, 10, 19, 20, 10, 10, 20, 19] : 31 == c ? f = [10, 10] : 32 == c ? f = [20, 20] : 33 == c ? f = [12, 11, 11] : 34 == c ? f = [7, 7, 9, 13, 13, 9, 16, 16, 9, 12, 12, 9, 7, 7, 9, 16, 16, 9] : 35 == c ? f = [7, 7, 9, 9, 6, 6, 9, 9] : 36 == c ? f = [16, 16, 9, 9, 15, 15, 9, 9] : 37 == c ? f = [22] : 38 == c ? f = [18] : 39 == c ? f = [23] : 40 == c ? f = [26] : 41 == c ? f = [27] : 42 == c ? f = [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7] : 43 == c ? f = [28] : 44 == c ? f = [29] : 45 == c ? f = [7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 7, 7, 7] : 46 == c ? f = [7] : 47 == c ? f = [16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7, 7, 16, 16, 16, 16] : 48 == c ? f = [7] : 49 == c ? f = [23, 23, 23, 23, 23, 9, 9, 9, 9, 9, 9, 9, 9, 23, 23] : 50 == c ? f = [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 7, 7, 7, 7, 7, 7, 7, 7] : 51 == c ? f = [7, 7, 7, 9, 9, 16, 16, 16, 16, 16, 16, 9, 9] : 52 == c ? f = [7, 7, 7, 7, 18, 18, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7] : 53 == c ? f = [30] : 54 == c ? f = [31] : 55 == c ? f = [32] : 56 == c ? f = [33] : 57 == c ? f = [34] : 58 == c ? f = [35] : 59 == c ? f = [18] : 60 == c ? (f = [36],
            e = 37,
            h = 38,
            w = 30) : 61 == c ? f = [30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 33, 33, 33, 33, 33, 33, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 34, 34, 34, 34, 34, 34] : 62 == c ? f = [17, 17, 17, 17, 17, 39, 39, 39, 39, 39] : 63 == c ? f = [7, 7, 7, 11, 11, 11] : 64 == c ? f = [16, 16, 11, 11] : 65 == c ? f = [4, 4, 4, 4, 9, 9, 9, 9] : c %= 9;
        f && (c = f[0]);
        b.rbcs = f;
        b.cv = c
    }
    b.fdhc = e;
    b.fdtc = h;
    b.fdl = w
}
function newSnake(b, c, e, h, w, f, q) {
    var x = {};
    x.id = b;
    x.xx = c;
    x.yy = e;
    setSkin(x, h, q);
    h = x.cv;
    x.fnfr = 0;
    x.na = 1;
    x.chl = 0;
    x.tsp = 0;
    x.sfr = 0;
    x.accessory = -1;
    x.rr = Math.min(255, rrs[h] + Math.floor(20 * Math.random()));
    x.gg = Math.min(255, ggs[h] + Math.floor(20 * Math.random()));
    x.bb = Math.min(255, bbs[h] + Math.floor(20 * Math.random()));
    b = "00" + Math.min(255, Math.max(0, Math.round(x.rr))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(x.gg))).toString(16);
    e = "00" + Math.min(255, Math.max(0, Math.round(x.bb))).toString(16);
    b = b.substr(b.length - 2);
    c = c.substr(c.length - 2);
    e = e.substr(e.length - 2);
    x.cs = "#" + b + c + e;
    b = "00" + Math.min(255, Math.max(0, Math.round(.4 * x.rr))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(.4 * x.gg))).toString(16);
    e = "00" + Math.min(255, Math.max(0, Math.round(.4 * x.bb))).toString(16);
    b = b.substr(b.length - 2);
    c = c.substr(c.length - 2);
    e = e.substr(e.length - 2);
    x.cs04 = "#" + b + c + e;
    b = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + x.rr)))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + x.gg)))).toString(16);
    e = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + x.bb)))).toString(16);
    b = b.substr(b.length - 2);
    c = c.substr(c.length - 2);
    e = e.substr(e.length - 2);
    x.csw = "#" + b + c + e;
    x.sc = 1;
    x.ssp = nsp1 + nsp2 * x.sc;
    x.fsp = x.ssp + .1;
    x.msp = nsp3;
    x.fxs = new Float32Array(rfc);
    x.fys = new Float32Array(rfc);
    x.fchls = new Float32Array(rfc);
    x.fpos = 0;
    x.ftg = 0;
    x.fx = 0;
    x.fy = 0;
    x.fchl = 0;
    x.fas = new Float32Array(afc);
    x.fapos = 0;
    x.fatg = 0;
    x.fa = 0;
    x.ehang = w;
    x.wehang = w;
    x.ehl = 1;
    x.msl = 42;
    x.fam = 0;
    x.ang = w;
    x.eang = w;
    x.wang = w;
    x.rex = 0;
    x.rey = 0;
    x.sp = 2;
    f ? (x.lnp = f[f.length - 1],
        x.pts = f,
        x.sct = f.length,
        f[0].dying && x.sct--) : (x.pts = [],
            x.sct = 0);
    x.flpos = 0;
    x.fls = new Float32Array(lfc);
    x.fl = 0;
    x.fltg = 0;
    x.tl = x.sct + x.fam;
    x.cfl = x.tl;
    x.scang = 1;
    x.dead_amt = 0;
    x.alive_amt = 0;
    snakes.splice(0, 0, x);
    return os["s" + x.id] = x
}
function getBuildSkinData(b) {
    var c = [];
    c.push(255);
    c.push(255);
    c.push(255);
    c.push(0);
    c.push(0);
    c.push(0);
    c.push(Math.floor(256 * Math.random()));
    c.push(Math.floor(256 * Math.random()));
    var e;
    var h = build_segments.length;
    if (0 < h) {
        var w = build_segments[0]
            , f = 0;
        for (e = 0; e < h; e++) {
            var q = build_segments[e];
            q != w && (255 < f && (f = 255),
                c.push(f),
                c.push(w),
                f = 0,
                w = q);
            f++
        }
        0 < f && (c.push(f),
            c.push(w))
    }
    b && (c.push(250),
        c.push(40));
    b = new Uint8Array(c.length);
    for (e = 0; e < c.length; e++)
        b[e] = c[e];
    return b
}
function snl(b) {
    var c = b.tl;
    b.tl = b.sct + b.fam;
    c = b.tl - c;
    for (var e = b.flpos, h = 0; h < lfc; h++)
        b.fls[e] -= c * lfas[h],
            e++,
            e >= lfc && (e = 0);
    b.fl = b.fls[b.flpos];
    b.fltg = lfc;
    b == snake && (wumsts = !0)
}
function newFood(b, c, e, h, w, f) {
    var q = {};
    q.id = b;
    q.xx = c;
    q.yy = e;
    q.rx = c;
    q.ry = e;
    q.rsp = w ? 2 : 1;
    q.cv = f;
    q.rad = 1E-5;
    q.sz = h;
    q.lrrad = q.rad;
    b = per_color_imgs[q.cv];
    q.cv2 = Math.floor(b.ic * gsc * q.sz / 16.5);
    0 > q.cv2 && (q.cv2 = 0);
    q.cv2 >= b.ic && (q.cv2 = b.ic - 1);
    q.fi = b.imgs[q.cv2];
    q.fw = b.fws[q.cv2];
    q.fh = b.fhs[q.cv2];
    q.fw2 = b.fw2s[q.cv2];
    q.fh2 = b.fh2s[q.cv2];
    q.ofi = b.oimgs[q.cv2];
    q.ofw = b.ofws[q.cv2];
    q.ofh = b.ofhs[q.cv2];
    q.ofw2 = b.ofw2s[q.cv2];
    q.ofh2 = b.ofh2s[q.cv2];
    q.gcv = Math.floor(b.ic * gsc * (.25 + .75 * q.sz / 16.5));
    0 > q.gcv && (q.gcv = 0);
    q.gcv >= b.ic && (q.gcv = b.ic - 1);
    q.gfi = b.gimgs[q.gcv];
    q.gfw = b.gfws[q.gcv];
    q.gfh = b.gfhs[q.gcv];
    q.gfw2 = b.gfw2s[q.gcv];
    q.gfh2 = b.gfh2s[q.gcv];
    q.g2cv = Math.floor(b.ic * gsc * 2 * (.25 + .75 * q.sz / 16.5));
    0 > q.g2cv && (q.g2cv = 0);
    q.g2cv >= b.ic && (q.g2cv = b.ic - 1);
    q.g2fi = b.gimgs[q.g2cv];
    q.g2fw = b.gfws[q.g2cv];
    q.g2fh = b.gfhs[q.g2cv];
    q.g2fw2 = b.gfw2s[q.g2cv];
    q.g2fh2 = b.gfh2s[q.g2cv];
    q.fr = 0;
    q.gfr = 64 * Math.random();
    q.gr = .65 + .1 * q.sz;
    q.wsp = .0225 * (2 * Math.random() - 1);
    q.eaten_fr = 0;
    return foods[foods_c++] = q
}
function newPrey(b, c, e, h, w, f, q, x, G) {
    var A = {};
    A.id = b;
    A.xx = c;
    A.yy = e;
    A.rad = 1E-5;
    A.sz = h;
    A.cv = w;
    A.dir = f;
    A.wang = q;
    A.ang = x;
    A.sp = G;
    A.fr = 0;
    A.gfr = 64 * Math.random();
    A.gr = .5 + .15 * Math.random() + .1 * A.sz;
    A.rr = Math.min(255, rrs[w]);
    A.gg = Math.min(255, ggs[w]);
    A.bb = Math.min(255, bbs[w]);
    b = "00" + Math.min(255, Math.max(0, Math.round(A.rr))).toString(16);
    c = "00" + Math.min(255, Math.max(0, Math.round(A.gg))).toString(16);
    e = "00" + Math.min(255, Math.max(0, Math.round(A.bb))).toString(16);
    b = b.substr(b.length - 2);
    c = c.substr(c.length - 2);
    e = e.substr(e.length - 2);
    A.cs = "#" + b + c + e;
    A.cv2 = Math.floor(per_color_imgs[A.cv].pr_imgs.length * gsc * A.sz / 9);
    0 > A.cv2 && (A.cv2 = 0);
    A.cv2 >= per_color_imgs[A.cv].pr_imgs.length && (A.cv2 = per_color_imgs[A.cv].pr_imgs.length - 1);
    A.fi = per_color_imgs[A.cv].pr_imgs[A.cv2];
    A.fw = per_color_imgs[A.cv].pr_fws[A.cv2];
    A.fh = per_color_imgs[A.cv].pr_fhs[A.cv2];
    A.fw2 = per_color_imgs[A.cv].pr_fw2s[A.cv2];
    A.fh2 = per_color_imgs[A.cv].pr_fh2s[A.cv2];
    A.gcv = per_color_imgs[A.cv].gimgs.length - 1;
    A.gfi = per_color_imgs[A.cv].gimgs[A.gcv];
    A.gfw = per_color_imgs[A.cv].gfws[A.gcv];
    A.gfh = per_color_imgs[A.cv].gfhs[A.gcv];
    A.gfw2 = per_color_imgs[A.cv].gfw2s[A.gcv];
    A.gfh2 = per_color_imgs[A.cv].gfh2s[A.gcv];
    A.fxs = new Float32Array(rfc);
    A.fys = new Float32Array(rfc);
    A.fpos = 0;
    A.ftg = 0;
    A.fx = 0;
    A.fy = 0;
    A.eaten = !1;
    A.eaten_fr = 0;
    preys.push(A);
    return A
}
var ecmc = document.createElement("canvas");
ecmc.width = ecmc.height = 48;
ctx = ecmc.getContext("2d");
ctx.fillStyle = "#000000";
ctx.moveTo(36, 6);
ctx.lineTo(30, 6);
ctx.quadraticCurveTo(0, 24, 30, 42);
ctx.lineTo(36, 42);
ctx.quadraticCurveTo(14, 24, 36, 6);
ctx.fill();
var kdmc = document.createElement("canvas");
kdmc.width = kdmc.height = 32;
ctx = kdmc.getContext("2d");
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
var sz = 52
    , komc = document.createElement("canvas");
komc.width = komc.height = sz;
ctx = komc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4)
    v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16),
        v = 4 >= v ? 1 - v / 4 : 0,
        v *= .8,
        imgd[p] = imgd[p + 1] = imgd[p + 2] = 0,
        imgd[p + 3] = Math.floor(255 * v),
        xx++,
        xx >= sz && (xx = 0,
            yy++);
ctx.putImageData(map, 0, 0);
if (iioc && testing) {
    var u = komc.toDataURL();
    ii = document.createElement("img");
    ii.src = u;
    komc = ii
}
sz = 62;
var ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
ctx = ksmc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4)
    v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15,
        v *= .1,
        0 > v && (v = -v),
        1 < v && (v = 1),
        v = 1 - v,
        v *= .25,
        imgd[p] = imgd[p + 1] = imgd[p + 2] = 0,
        imgd[p + 3] = Math.floor(255 * v),
        xx++,
        xx >= sz && (xx = 0,
            yy++);
ctx.putImageData(map, 0, 0);
iioc && testing && (u = ksmc.toDataURL(),
    ii = document.createElement("img"),
    ii.src = u,
    ksmc = ii);
sz = 64;
var jsebi = document.createElement("canvas");
jsebi.width = jsebi.height = sz;
ctx = jsebi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4)
    v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2),
        v = 1.06 * v - .06,
        0 > v ? v = 0 : (v = Math.pow(v, .35),
            v *= 1.35),
        v += .25 * (1 - v),
        imgd[p] = Math.max(0, Math.min(255, Math.round(72 * v))),
        imgd[p + 1] = Math.max(0, Math.min(255, Math.round(255 * v))),
        imgd[p + 2] = Math.max(0, Math.min(255, Math.round(116 * v))),
        xx++,
        xx >= sz && (xx = 0,
            yy++),
        v = sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)),
        imgd[p + 3] = 3 >= v ? Math.max(0, Math.min(255, Math.round(v / 3 * 255))) : 255;
ctx.putImageData(map, 0, 0);
sz = 48;
var jsepi = document.createElement("canvas");
jsepi.width = jsepi.height = sz;
ctx = jsepi.getContext("2d");
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.arc(sz / 2, sz / 2, sz / 2, 0, pi2);
ctx.fill();
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4)
    v = Math.abs(sz / 2 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2))) / (sz / 2),
        v = .5 < v ? 0 : 1 - Math.pow(v / .5, 1),
        v *= .8,
        0 == v ? (imgd[p] = 0,
            imgd[p + 1] = 0,
            imgd[p + 2] = 0) : (imgd[p] = Math.max(0, Math.min(255, Math.round(28 + 59 * v))),
                imgd[p + 1] = Math.max(0, Math.min(255, Math.round(83 + 85 * v))),
                imgd[p + 2] = Math.max(0, Math.min(255, Math.round(128 + 110 * v)))),
        xx++,
        xx >= sz && (xx = 0,
            yy++);
ctx.putImageData(map, 0, 0);
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 64;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var cdbulb = document.createElement("canvas");
cdbulb.width = 84;
cdbulb.height = 84;
var cdbulb2 = document.createElement("canvas");
cdbulb2.width = 84;
cdbulb2.height = 84;
ctx = cdbulb2.getContext("2d");
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 29, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 54, 58, 22);
ctx = cdbulb.getContext("2d");
ctx.shadowColor = "#000000";
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
var acbulb = document.createElement("canvas");
acbulb.width = acbulb.height = 64;
ctx = acbulb.getContext("2d");
g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(.5, "rgba(222, 3, 3, 1)");
g.addColorStop(.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var kwkbulb = document.createElement("canvas");
kwkbulb.width = 172;
kwkbulb.height = 113;
var kwki = document.createElement("img");
kwki.onload = function () {
    var b = document.createElement("canvas");
    b.width = 172;
    b.height = 113;
    var c = b.getContext("2d");
    c.drawImage(kwki, 21, 21);
    c = kwkbulb.getContext("2d");
    c.shadowColor = "#000000";
    c.shadowBlur = 20;
    c.drawImage(b, 0, 0)
}
    ;
kwki.src = "/s/kwk6.png";
var jmou = document.createElement("canvas");
jmou.width = 79;
jmou.height = 130;
var jmoi = document.createElement("img");
jmoi.onload = function () {
    jmou.getContext("2d").drawImage(jmoi, 0, 0)
}
    ;
jmoi.src = "/s/jmou3.png";
var pwdbulb = document.createElement("canvas");
pwdbulb.width = 190;
pwdbulb.height = 188;
var pwdi = document.createElement("img");
pwdi.onload = function () {
    var b = document.createElement("canvas");
    b.width = 190;
    b.height = 188;
    var c = b.getContext("2d");
    c.drawImage(pwdi, 21, 21);
    c = pwdbulb.getContext("2d");
    c.shadowColor = "#000000";
    c.shadowBlur = 20;
    c.drawImage(b, 0, 0)
}
    ;
pwdi.src = "/s/pewd.png";
var sest = document.createElement("canvas");
sest.width = 105;
sest.height = 88;
var sesti = document.createElement("img");
sesti.onload = function () {
    sest.getContext("2d").drawImage(sesti, 0, 0)
}
    ;
sesti.src = "/s/sest5.png";
var playbulb = document.createElement("canvas");
playbulb.width = 142;
playbulb.height = 149;
var plyi = document.createElement("img");
plyi.onload = function () {
    var b = document.createElement("canvas");
    b.width = 142;
    b.height = 149;
    var c = b.getContext("2d");
    c.drawImage(plyi, 21, 21);
    c = playbulb.getContext("2d");
    c.shadowColor = "#000000";
    c.shadowBlur = 20;
    c.drawImage(b, 0, 0)
}
    ;
plyi.src = "/s/play.png";
var bonkbulb = document.createElement("canvas");
bonkbulb.width = 173;
bonkbulb.height = 178;
var bnki = document.createElement("img");
bnki.onload = function () {
    var b = document.createElement("canvas");
    b.width = 173;
    b.height = 178;
    var c = b.getContext("2d");
    c.drawImage(bnki, 21, 21);
    c = bonkbulb.getContext("2d");
    c.shadowColor = "#000000";
    c.shadowBlur = 20;
    c.drawImage(b, 0, 0)
}
    ;
bnki.src = "/s/bonkers2.png";
var leafbulb = document.createElement("canvas");
leafbulb.width = 143;
leafbulb.height = 161;
var leafi = document.createElement("img");
leafi.onload = function () {
    var b = document.createElement("canvas");
    b.width = 143;
    b.height = 161;
    var c = b.getContext("2d");
    c.drawImage(leafi, 21, 21);
    c = leafbulb.getContext("2d");
    c.shadowColor = "#000000";
    c.shadowBlur = 20;
    c.drawImage(b, 0, 0)
}
    ;
leafi.src = "/s/leaf.png";
var swissbulb = document.createElement("canvas");
swissbulb.width = 140;
swissbulb.height = 140;
var swissi = document.createElement("img");
swissi.onload = function () {
    var b = document.createElement("canvas");
    b.width = 140;
    b.height = 140;
    var c = b.getContext("2d");
    c.drawImage(swissi, 21, 21);
    c = swissbulb.getContext("2d");
    c.shadowColor = "#000000";
    c.shadowBlur = 20;
    c.drawImage(b, 0, 0)
}
    ;
swissi.src = "/s/swiss.png";
var moldovabulb = document.createElement("canvas");
moldovabulb.width = 162;
moldovabulb.height = 137;
var moldovai = document.createElement("img");
moldovai.onload = function () {
    var b = document.createElement("canvas");
    b.width = 162;
    b.height = 137;
    var c = b.getContext("2d");
    c.drawImage(moldovai, 21, 21);
    c = moldovabulb.getContext("2d");
    c.shadowColor = "#000000";
    c.shadowBlur = 20;
    c.drawImage(b, 0, 0)
}
    ;
moldovai.src = "/s/moldova.png";
var vietnambulb = document.createElement("canvas");
vietnambulb.width = 137;
vietnambulb.height = 142;
var vietnami = document.createElement("img");
vietnami.onload = function () {
    var b = document.createElement("canvas");
    b.width = 137;
    b.height = 142;
    var c = b.getContext("2d");
    c.drawImage(vietnami, 21, 21);
    c = vietnambulb.getContext("2d");
    c.shadowColor = "#000000";
    c.shadowBlur = 20;
    c.drawImage(b, 0, 0)
}
    ;
vietnami.src = "/s/vietnam.png";
var argentinabulb = document.createElement("canvas");
argentinabulb.width = 152;
argentinabulb.height = 152;
var argentinai = document.createElement("img");
argentinai.onload = function () {
    var b = document.createElement("canvas");
    b.width = 152;
    b.height = 152;
    var c = b.getContext("2d");
    c.drawImage(argentinai, 21, 21);
    c = argentinabulb.getContext("2d");
    c.shadowColor = "#000000";
    c.shadowBlur = 20;
    c.drawImage(b, 0, 0)
}
    ;
argentinai.src = "/s/argentina.png";
var movbulb = document.createElement("canvas");
movbulb.width = 142;
movbulb.height = 163;
var movi = document.createElement("img");
movi.onload = function () {
    var b = document.createElement("canvas");
    b.width = 142;
    b.height = 163;
    var c = b.getContext("2d");
    c.drawImage(movi, 21, 21);
    c = movbulb.getContext("2d");
    c.shadowColor = "#000000";
    c.shadowBlur = 20;
    c.drawImage(b, 0, 0)
}
    ;
movi.src = "/s/mov2.png";
var colc;
testing && (colc = document.createElement("canvas"),
    colc.width = 256,
    colc.height = 106,
    colc.style.position = "fixed",
    colc.style.left = "0px",
    colc.style.top = "100px",
    colc.style.zIndex = 2147483647,
    document.body.appendChild(colc));
var pbx = new Float32Array(32767)
    , pby = new Float32Array(32767)
    , pba = new Float32Array(32767)
    , pbu = new Uint8Array(32767)
    , per_color_imgs = []
    , rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 78, 255, 101, 128, 60, 0, 217, 255, 144, 32, 240, 240, 240, 240, 32, 40, 104, 0, 104, 0]
    , ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 35, 86, 200, 132, 192, 255, 69, 64, 144, 32, 32, 240, 144, 32, 240, 60, 128, 0, 40, 0]
    , bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 192, 9, 232, 144, 72, 83, 69, 64, 144, 240, 32, 32, 32, 240, 32, 173, 255, 112, 170, 0]
    , max_skin_cv = 64
    , alcsc = new Uint8Array(256)
    , ralcsc = new Uint8Array(256)
    , falcsc = new Uint8Array(256)
    , csks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 39];
for (i = 0; 255 >= i; i++)
    ralcsc[i] = 0,
        falcsc[i] = 0;
for (i = csks.length - 1; 0 <= i; i--)
    ralcsc[csks[i]] = 1,
        falcsc[csks[i]] = 1;
falcsc[40] = 1;
alcsc = ralcsc;
for (i = 0; i < rrs.length; i++) {
    o = {
        imgs: [],
        fws: [],
        fhs: [],
        fw2s: [],
        fh2s: [],
        gimgs: [],
        gfws: [],
        gfhs: [],
        gfw2s: [],
        gfh2s: [],
        oimgs: [],
        ofws: [],
        ofhs: [],
        ofw2s: [],
        ofh2s: []
    };
    var rs = "00" + rrs[i].toString(16)
        , gs = "00" + ggs[i].toString(16)
        , bs = "00" + bbs[i].toString(16);
    rs = rs.substr(rs.length - 2);
    gs = gs.substr(gs.length - 2);
    bs = bs.substr(bs.length - 2);
    o.cs = "#" + rs + gs + bs;
    sz = 62;
    var kfmc = document.createElement("canvas");
    kfmc.width = kfmc.height = sz;
    ctx = kfmc.getContext("2d");
    map = ctx.getImageData(0, 0, sz, sz);
    imgd = map.data;
    l = imgd.length;
    yy = xx = 0;
    var fi = i;
    26 == i ? fi = 3 : 29 == i ? fi = 9 : 30 == i ? fi = 15 : 31 == i ? fi = 7 : 32 == i ? fi = 4 : 33 == i ? fi = 5 : 34 == i ? fi = 0 : 35 == i ? fi = 3 : 36 == i && (fi = 7);
    rr = rrs[fi];
    gg = ggs[fi];
    bb = bbs[fi];
    var t1 = (rr + gg + bb) / 3;
    if (24 >= t1)
        rr = gg = bb = 90;
    else {
        var t2 = 120 / t1;
        rr = Math.min(255, Math.floor(rr * t2));
        gg = Math.min(255, Math.floor(gg * t2));
        bb = Math.min(255, Math.floor(bb * t2))
    }
    for (p = 0; p < l; p += 4)
        v = 1 - Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) / 32,
            v = 0 > v ? 0 : .5 * (1 - Math.cos(Math.PI * v)),
            imgd[p] = rr,
            imgd[p + 1] = gg,
            imgd[p + 2] = bb,
            imgd[p + 3] = Math.floor(255 * v),
            xx++,
            xx >= sz && (xx = 0,
                yy++);
    ctx.putImageData(map, 0, 0);
    o.kfmc = kfmc;
    var ksz = 48
        , ksz2 = ksz / 2
        , kmc = document.createElement("canvas");
    kmc.width = kmc.height = ksz;
    ctx = kmc.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
    ctx.fill();
    map = ctx.getImageData(0, 0, ksz, ksz);
    imgd = map.data;
    l = imgd.length;
    yy = xx = 0;
    var jk = 7;
    36 == i && (jk = 60);
    var v3, kmcs = [];
    for (j = 0; j < jk; j++) {
        for (p = xx = yy = 0; p < l; p += 4) {
            var v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34));
            nsr ? v = Math.pow(v2, .5) : (v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35),
                v += .375 * (v2 - v));
            rr = rrs[i];
            gg = ggs[i];
            bb = bbs[i];
            if (24 == i)
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2,
                    v2 = Math.pow(1.05 * v2, 4),
                    1 < v2 && (v2 = 1),
                    rr += (306 - rr) * v2,
                    gg += (192 * 1.2 - gg) * v2,
                    bb += (76.8 - bb) * v2,
                    v *= 1.22 - .44 * j / (jk - 1);
            else if (26 == i)
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2,
                    v2 = Math.pow(v2, 2),
                    1 < v2 && (v2 = 1),
                    v *= 1.22 - .44 * j / (jk - 1),
                    rr *= v,
                    gg *= v,
                    bb *= v,
                    v = 1,
                    rr += (140.8 - rr) * v2,
                    gg += (280.5 - gg) * v2,
                    bb += (136 * 1.1 - bb) * v2;
            else if (27 == i)
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2,
                    v2 = Math.pow(v2, 2),
                    1 < v2 && (v2 = 1),
                    v *= 1.22 - .44 * j / (jk - 1),
                    rr *= v,
                    gg *= v,
                    bb *= v,
                    v = 1,
                    rr += (217 * 1.1 - rr) * v2,
                    gg += (75.9 - gg) * v2,
                    bb += (75.9 - bb) * v2;
            else if (28 == i)
                v2 = .5 - .5 * Math.cos(Math.PI * j / jk),
                    rr += (128 - rr) * v2,
                    gg += (128 - gg) * v2,
                    bb += (255 - bb) * v2,
                    v *= 1.1,
                    1 < v && (v = 1);
            else if (29 == i)
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2,
                    v2 = Math.pow(v2, 2),
                    1 < v2 && (v2 = 1),
                    v *= 1.44 - .88 * j / (jk - 1),
                    rr = 32 * v,
                    gg = 32 * v,
                    bb = 32 * v,
                    v = 1,
                    rr += (255 - rr) * v2,
                    gg += (255 - gg) * v2,
                    bb += (255 - bb) * v2;
            else if (30 == i)
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2,
                    v2 = Math.pow(v2, 2),
                    1 < v2 && (v2 = 1),
                    v = (.1 + .9 * j / jk) % 1,
                    rr = 80 * v,
                    gg = 80 * v,
                    bb = 128 + 160 * v,
                    rr += .3 * (255 - rr) * v2,
                    gg += .3 * (255 - gg) * v2,
                    bb += .3 * (357 - bb) * v2,
                    v = 1;
            else if (31 == i)
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2,
                    v2 = Math.pow(v2, 2),
                    1 < v2 && (v2 = 1),
                    v = (.1 + .9 * j / jk) % 1,
                    rr = 128 + 160 * v,
                    gg = 80 * v,
                    bb = 80 * v,
                    rr += .3 * (357 - rr) * v2,
                    gg += .3 * (255 - gg) * v2,
                    bb += .3 * (255 - bb) * v2,
                    v = 1;
            else if (32 == i)
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2,
                    v2 = Math.pow(v2, 2),
                    1 < v2 && (v2 = 1),
                    v = (.1 + .9 * j / jk) % 1,
                    rr = 96 + 128 * v,
                    gg = 96 + 128 * v,
                    bb = 80 * v,
                    rr += .6 * (306 - rr) * v2,
                    gg += .6 * (306 - gg) * v2,
                    bb += .6 * (255 - bb) * v2,
                    v = 1;
            else if (33 == i)
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2,
                    v2 = Math.pow(v2, 2),
                    1 < v2 && (v2 = 1),
                    v = (.1 + .9 * j / jk) % 1,
                    rr = 96 + 128 * v,
                    gg = 48 + 80 * v,
                    bb = 48 * v,
                    rr += .6 * (306 - rr) * v2,
                    gg += .6 * (280.5 - gg) * v2,
                    bb += .6 * (255 - bb) * v2,
                    v = 1;
            else if (34 == i)
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2,
                    v2 = Math.pow(v2, 2),
                    1 < v2 && (v2 = 1),
                    v = (.1 + .9 * j / jk) % 1,
                    rr = 96 + 128 * v,
                    gg = 80 * v,
                    bb = 96 + 128 * v,
                    rr += .6 * (306 - rr) * v2,
                    gg += .6 * (255 - gg) * v2,
                    bb += .6 * (306 - bb) * v2,
                    v = 1;
            else if (35 == i)
                v2 = Math.sqrt(Math.pow(.5 * (xx - ksz2), 2) + Math.pow(yy - ksz2, 2)) / ksz2,
                    v2 = Math.pow(v2, 2),
                    1 < v2 && (v2 = 1),
                    v = (.1 + .9 * j / jk) % 1,
                    rr = 80 * v,
                    gg = 96 + 128 * v,
                    bb = 80 * v,
                    rr += .6 * (255 - rr) * v2,
                    gg += .6 * (306 - gg) * v2,
                    bb += .6 * (255 - bb) * v2,
                    v = 1;
            else if (36 == i) {
                v3 = (j / jk + .6 + xx / ksz * .25) % 1;
                v2 = (yy - ksz2) / ksz;
                v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                v2 *= 2;
                0 > v2 && (v2 = -v2);
                v2 *= 2.4;
                1 > v2 && (rr += (561 - rr) * (1 - v2),
                    gg += (561 - gg) * (1 - v2),
                    bb += (561 - bb) * (1 - v2));
                v2 = .5 > v3 ? (yy - .055 * ksz2 - ksz2) / ksz : (yy + .055 * ksz2 - ksz2) / ksz;
                v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                v2 *= 2;
                0 > v2 && (v2 = -v2);
                v2 *= 4.8;
                1 > v2 && (rr += (255 - rr) * (1 - v2),
                    gg += (32 - gg) * (1 - v2),
                    bb += (64 - bb) * (1 - v2));
                v2 = (ksz2 - yy) / ksz;
                v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                v2 *= 2;
                0 > v2 && (v2 = -v2);
                v2 *= 2.4;
                1 > v2 && (rr += (561 - rr) * (1 - v2),
                    gg += (561 - gg) * (1 - v2),
                    bb += (561 - bb) * (1 - v2));
                v2 = .5 > v3 ? (ksz2 + .055 * ksz2 - yy) / ksz : (ksz2 - .055 * ksz2 - yy) / ksz;
                v2 = 1.3 * (v2 - 1.3 * (v3 - .5));
                v2 *= 2;
                0 > v2 && (v2 = -v2);
                v2 *= 4.8;
                1 > v2 && (rr += (255 - rr) * (1 - v2),
                    gg += (32 - gg) * (1 - v2),
                    bb += (64 - bb) * (1 - v2));
                v2 = (yy - ksz2) / ksz;
                if (.47 <= v3 && .53 >= v3)
                    rr = 255,
                        gg = 32,
                        bb = 64;
                else if (-.1 <= v2 && .1 >= v2)
                    v3 = .5 - v3,
                        0 > v3 && (v3 = -v3),
                        v3 = 1 - Math.pow(v3 / .5, 2),
                        rr += (255 - rr) * v3,
                        gg += (32 - gg) * v3,
                        bb += (64 - bb) * v3;
                else if (.44 <= v3 && .56 >= v3 || -.15 <= v2 && .15 >= v2)
                    v3 = .5 - v3,
                        0 > v3 && (v3 = -v3),
                        v3 = 1 - Math.pow(v3 / .5, 2),
                        rr += (255 - rr) * v3,
                        gg += (255 - gg) * v3,
                        bb += (255 - bb) * v3;
                nsr || (v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35),
                    v2 = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .5),
                    rr += (rrs[i] - rr) * (1 - v2),
                    gg += (ggs[i] - gg) * (1 - v2),
                    bb += (bbs[i] - bb) * (1 - v2))
            } else
                v *= 1.22 - .44 * j / (jk - 1);
            imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
            imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(gg * v)));
            imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
            xx++;
            xx >= ksz && (xx = 0,
                yy++)
        }
        ctx.putImageData(map, 0, 0);
        var kmc2 = document.createElement("canvas");
        kmc2.width = kmc2.height = ksz;
        var ctx2 = kmc2.getContext("2d");
        ctx2.drawImage(kmc, 0, 0);
        if (10 == i) {
            var fk = -1
                , tk = 1;
            nsr && (fk = -4,
                tk = 3);
            for (k = fk; k <= tk; k++) {
                var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13
                    , ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 8) * 13;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (m = 0; 5 >= m; m++)
                    xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 24,
                        yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 24,
                        0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy),
                        xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 3.1,
                        yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 3.1,
                        ctx2.lineTo(xx, yy);
                ctx2.fill()
            }
        } else if (19 == i)
            for (fk = -2,
                tk = 2,
                nsr && (fk = -7,
                    tk = 7),
                k = fk; k <= tk; k++) {
                tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
                ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
                ctx2.save();
                ctx2.globalAlpha = .7;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (m = 0; 5 >= m; m++)
                    xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 12,
                        yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 12,
                        0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy),
                        xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.55,
                        yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.55,
                        ctx2.lineTo(xx, yy);
                ctx2.fill();
                ctx2.restore()
            }
        else if (20 == i)
            for (fk = -1.5,
                tk = 1.5,
                nsr && (fk = -6.5,
                    tk = 7.5),
                k = fk; k <= tk; k++) {
                tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
                ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
                ctx2.save();
                ctx2.globalAlpha = .7;
                ctx2.fillStyle = "#FFFFFF";
                ctx2.beginPath();
                for (m = 0; 5 >= m; m++)
                    xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * .05 * 14,
                        yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * .05 * 14,
                        0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy),
                        xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.8,
                        yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.8,
                        ctx2.lineTo(xx, yy);
                ctx2.fill();
                ctx2.restore()
            }
        iioc && testing ? 1 <= kmcs.length ? kmcs.push(kmcs[0]) : 2 <= per_color_imgs.length ? kmcs.push(per_color_imgs[0].kmcs[0]) : (u = kmc2.toDataURL(),
            ii = document.createElement("img"),
            ii.src = "ayy.png",
            kmcs.push(ii)) : kmcs.push(kmc2)
    }
    o.kmcs = kmcs;
    o.kl = kmcs.length;
    o.klp = !0;
    36 == i && (o.klp = !1);
    per_color_imgs.push(o);
    for (j = 2.8; 18.8 >= j; j += 1) {
        var cc = document.createElement("canvas");
        sz = Math.ceil(2.5 * j + 28);
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        ctx.fillStyle = o.cs;
        ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 0;
        ctx.shadowColor = "#" + rs + gs + bs;
        ctx.globalAlpha = .8;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fill();
        iioc && testing ? (u = cc.toDataURL(),
            ii = document.createElement("img"),
            ii.src = u,
            o.imgs.push(ii)) : o.imgs.push(cc);
        o.fws.push(sz);
        o.fhs.push(sz);
        o.fw2s.push(sz / 2);
        o.fh2s.push(sz / 2);
        sz = Math.ceil(8 * j + 6);
        cc = document.createElement("canvas");
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
        g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
        g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        iioc && testing ? (u = cc.toDataURL(),
            ii = document.createElement("img"),
            ii.src = u,
            o.gimgs.push(ii)) : o.gimgs.push(cc);
        o.gfws.push(sz);
        o.gfhs.push(sz);
        o.gfw2s.push(sz / 2);
        o.gfh2s.push(sz / 2);
        cc = document.createElement("canvas");
        sz = Math.ceil(1.3 * j + 6);
        cc.width = cc.height = sz;
        ctx = cc.getContext("2d");
        var eam = .2;
        g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
        g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
        g.addColorStop(.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
        g.addColorStop(1, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, sz, sz);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
        ctx.globalAlpha = 1;
        ctx.stroke();
        iioc && testing ? (u = cc.toDataURL(),
            ii = document.createElement("img"),
            ii.src = u,
            o.oimgs.push(ii)) : o.oimgs.push(cc);
        o.ofws.push(sz);
        o.ofhs.push(sz);
        o.ofw2s.push(sz / 2);
        o.ofh2s.push(sz / 2)
    }
    o.ic = o.imgs.length;
    o.pr_imgs = [];
    o.pr_fws = [];
    o.pr_fhs = [];
    o.pr_fw2s = [];
    o.pr_fh2s = [];
    for (j = 3; 24 >= j; j += 1)
        cc = document.createElement("canvas"),
            sz = Math.ceil(2 * j + 38),
            cc.width = cc.height = sz,
            ctx = cc.getContext("2d"),
            ctx.fillStyle = o.cs,
            ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2),
            ctx.shadowBlur = 22,
            ctx.shadowOffsetY = 0,
            ctx.shadowColor = "#" + rs + gs + bs,
            ctx.fill(),
            ctx.fill(),
            iioc && testing ? (u = cc.toDataURL(),
                ii = document.createElement("img"),
                ii.src = u,
                o.pr_imgs.push(ii)) : o.pr_imgs.push(cc),
            o.pr_fws.push(sz),
            o.pr_fhs.push(sz),
            o.pr_fw2s.push(sz / 2),
            o.pr_fh2s.push(sz / 2)
}
if (testing)
    for (ctx = colc.getContext("2d"),
        ctx.fillStyle = "#000000",
        ctx.fillRect(0, 0, colc.width, colc.height),
        ctx.fillStyle = "#FFFFFF",
        ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif",
        ctx.textBaseline = "top",
        ctx.textAlign = "center",
        i = yy = xx = 0; i < rrs.length; i++) {
        var pci = per_color_imgs[i];
        kmc = pci.kmcs[0];
        ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
        ntx = o.xx + o.fx;
        nty = o.yy + o.fy;
        ntx = mww2 + (ntx - view_xx) * gsc;
        nty = mhh2 + (nty - view_yy) * gsc;
        ctx.fillText("" + i, xx + 8, yy + 16);
        xx += 16;
        xx > colc.width - 16 && (xx = 0,
            yy += 28)
    }
var view_xx = 0
    , view_yy = 0
    , view_ang = 0
    , view_dist = 0
    , fvx = 0
    , fvy = 0
    , xm = 0
    , ym = 0
    , lsxm = 0
    , lsym = 0
    , snake = null
    , my_nick = ""
    , gw2k16 = !1;
try {
    "1" == localStorage.gw2k16 && (gw2k16 = !0)
} catch (b) { }
var dhx, dhy, hsz, fr = 0, lfr = 0, ltm = Date.now(), vfr = 0, vfrb = 0, avfr = 0, afr = 0, fr2 = 0, lfr2 = 0, vfrb2 = 0, cptm = 0, lptm = 0, lpstm = 0, last_ping_mtm = 0, lagging = !1, lag_mult = 1, wfpr = !1, high_quality = !0, gla = 1, wdfg = 0, qsm = 1, mqsm = 1.7, playing = !1, connected = !1, want_close_socket = !1, want_victory_message = !1, want_victory_focus = !1, want_hide_victory = 0, hvfr = 0, dead_mtm = -1, at2lt = new Float32Array(65536);
for (yy = 0; 256 > yy; yy++)
    for (xx = 0; 256 > xx; xx++)
        at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
var kd_l_frb = 0
    , kd_r_frb = 0
    , kd_l = !1
    , kd_r = !1
    , kd_u = !1
    , lkstm = 0
    , social = document.createElement("iframe");
try {
    social.frameBorder = 0
} catch (b) { }
social.style.position = "fixed";
social.style.left = "6px";
social.style.top = "6px";
social.style.border = "0px";
social.style.zIndex = 9999999;
social.style.overflow = "hidden";
social.width = 251;
social.height = 150;
social.src = "/social-box/";
document.body.appendChild(social);
var oef = function () {
    whmos && hmos();
    var b = Date.now();
    vfr = (b - ltm) / 8;
    5 < vfr && (vfr = 5);
    1.56 > vfr && (vfr = 1.56);
    avfr = vfr;
    ltm = b;
    choosing_skin || (lagging || wfpr && 420 < b - last_ping_mtm && (want_play || checking_code || (lagging = !0)),
        lagging ? (lag_mult *= .85,
            .01 > lag_mult && (lag_mult = .01)) : 1 > lag_mult && (lag_mult += .05,
                1 <= lag_mult && (lag_mult = 1)));
    120 < vfr && (vfr = 120);
    vfr *= lag_mult;
    etm *= lag_mult;
    lfr = fr;
    fr += vfr;
    vfrb = Math.floor(fr) - Math.floor(lfr);
    lfr2 = fr2;
    fr2 += 2 * vfr;
    vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
    afr += avfr;
    kd_l && (kd_l_frb += vfrb);
    kd_r && (kd_r_frb += vfrb);
    want_play && !shoa && -1 == dead_mtm && (want_play = !1,
        connect());
    buildia_shown && -1 != buildia_close_after_tm && b > buildia_close_after_tm && trySkipBuildia();
    if (spinner_shown) {
        lsfr += avfr;
        var c = ldmc.getContext("2d");
        c.clearRect(0, 0, 512, 128);
        for (var e, h, w = 1; 2 >= w; w++) {
            c.beginPath();
            1 == w ? (c.fillStyle = "#60FF70",
                h = 0) : (c.fillStyle = "#9850FF",
                    h = Math.PI);
            for (var f = 0; 256 >= f; f++)
                e = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * f / 256) + 8 * f / 256,
                    256 == f && (e += 10),
                    xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * f / 256) * e * 1.25,
                    yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * f / 256) * e,
                    0 == f ? c.moveTo(xx, yy) : c.lineTo(xx, yy);
            e = 32;
            xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * (f + 47) / 256) * e * 1.25;
            yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * (f + 47) / 256) * e;
            c.lineTo(xx, yy);
            for (f = 256; 0 <= f; f--)
                e = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * f / 256) - 8 * f / 256,
                    256 == f && (e -= 10),
                    xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * f / 256) * e * 1.25,
                    yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * f / 256) * e,
                    c.lineTo(xx, yy);
            c.fill()
        }
        connecting || want_play ? (ss_a += avfr / 86,
            1 <= ss_a && (ss_a = 1),
            ss_sh += avfr / 93,
            1 <= ss_sh && (ss_sh = 1),
            ldmc.style.opacity = ss_a,
            f = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5) : (ss_a -= avfr / 86,
                0 >= ss_a && (ss_sh = ss_a = 0,
                    ldmc.style.display = "none",
                    trf(ldmc, "")),
                ldmc.style.opacity = ss_a,
                f = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5);
        trf(ldmc, "scale(" + f + "," + f + ")")
    }
    if (entering_code || ending_enter_code) {
        for (f = etcobs.length - 1; 0 <= f; f--)
            c = etcobs[f],
                c.loaded && (checking_code ? .25 != c.alpha && (c.alpha -= .02 * vfr,
                    .25 >= c.alpha && (c.alpha = .25),
                    c.ii.style.opacity = c.alpha) : 1 != c.alpha && (c.alpha += .02 * vfr,
                        1 <= c.alpha && (c.alpha = 1),
                        c.ii.style.opacity = c.alpha));
        ending_enter_code ? (etca -= .03 * vfr,
            0 >= etca && (etcbx = etca = 0,
                etcdx = etc_ww / 2 - 27,
                etcods = [],
                entering_code = ending_enter_code = !1,
                etcod.style.display = "none",
                nick.disabled = !1,
                nick.focus(),
                want_open_cosmetics && (want_open_cosmetics = !1,
                    csk.onclick(),
                    scos.onclick())),
            etcod.style.opacity = etca) : entering_code && 1 != etca && (etca += .03 * vfr,
                1 <= etca && (etca = 1),
                etcod.style.opacity = etca);
        etcba += .1 * vfr;
        etcba >= pi2 && (etcba -= pi2);
        etcshk && (etcshkv += .014 * vfr,
            1 <= etcshkv && (etcshkv = 1,
                etcshk = !1),
            etcc.style.left = Math.round(10 * (32 * Math.sin(Math.PI * etcshkv * 8) * Math.sin(Math.PI * etcshkv) + ww / 2 - etc_ww / 2)) / 10 + "px");
        if (checking_code || 0 < etcsa)
            etcsv += .0075 * vfr,
                1 <= etcsv && --etcsv,
                checking_code ? (etcsa += .02 * vfr,
                    1 <= etcsa && (etcsa = 1)) : (etcsa -= .05 * vfr,
                        0 >= etcsa && (etcsa = 0)),
                etco_sp_ii.style.opacity = etcsa,
                f = etcsrv,
                etcsrv = Math.round(12 * etcsv),
                etcsrv != f && adjustCodeSpinner();
        14 == etcods.length ? 0 != etcbaa && (etcbaa -= .05 * vfr,
            0 >= etcbaa && (etcbaa = 0)) : 1 != etcbaa && (etcbaa += .05 * vfr,
                1 <= etcbaa && (etcbaa = 1));
        c = etcc.getContext("2d");
        c.save();
        c.clearRect(0, 0, etc_ww, etc_hh);
        f = Math.min(13, etcods.length);
        etcbx += .2 * (47 * f - etcbx);
        etcdx += .1 * (etc_ww / 2 - 27 - 47 * f / 2 - etcdx);
        c.globalAlpha = 1;
        c.translate(etcdx, 0);
        for (f = 0; f < etcods.length; f++)
            h = etcods[f].v,
                etcdis[h].loaded && c.drawImage(etcdis[h].ii, 47 * f, 0, 54, 67);
        etcdis[11].loaded && (c.globalAlpha = etcbaa * (.5 + .4 * Math.cos(etcba)),
            c.drawImage(etcdis[11].ii, etcbx, 0, 54, 67));
        c.restore()
    }
    if (ending_build_skin) {
        if (0 != bdska) {
            bdska -= .015 * vfr;
            if (0 >= bdska) {
                bdska = 0;
                building_skin = ending_build_skin = !1;
                alcsc = ralcsc;
                for (f = bskbtns.length - 1; 0 <= f; f--)
                    document.body.removeChild(bskbtns[f].a);
                bskbtns = [];
                revdiv.style.display = "none"
            }
            h = .5 * (1 - Math.cos(Math.PI * bdska));
            bskoy = 90 * h;
            skoboym = h;
            reposSkinStuff();
            pskh.style.opacity = 1 - bdska;
            nskh.style.opacity = 1 - bdska;
            bskh.style.opacity = 1 - bdska;
            scosh.style.opacity = 1 - bdska;
            revdiv.style.opacity = bdska;
            for (f = bskbtns.length - 1; 0 <= f; f--)
                c = bskbtns[f],
                    c.ii.style.opacity = bdska
        }
    } else if (building_skin && 1 != bdska)
        for (bdska += .015 * vfr,
            1 <= bdska && (bdska = 1),
            h = .5 * (1 - Math.cos(Math.PI * bdska)),
            bskoy = 90 * h,
            skoboym = h,
            reposSkinStuff(),
            pskh.style.opacity = 1 - bdska,
            nskh.style.opacity = 1 - bdska,
            bskh.style.opacity = 1 - bdska,
            scosh.style.opacity = 1 - bdska,
            revdiv.style.opacity = bdska,
            f = bskbtns.length - 1; 0 <= f; f--)
            c = bskbtns[f],
                c.ii.style.opacity = bdska;
    if (ending_select_cosmetic) {
        if (0 != secosa) {
            secosa -= .015 * vfr;
            if (0 >= secosa) {
                secosa = 0;
                selecting_cosmetic = ending_select_cosmetic = !1;
                for (f = cosbtns.length - 1; 0 <= f; f--)
                    document.body.removeChild(cosbtns[f].a);
                cosbtns = []
            }
            h = .5 * (1 - Math.cos(Math.PI * secosa));
            secosoy = 90 * h;
            secosoym = h;
            reposSkinStuff();
            pskh.style.opacity = 1 - secosa;
            nskh.style.opacity = 1 - secosa;
            bskh.style.opacity = 1 - secosa;
            scosh.style.opacity = 1 - secosa;
            for (f = cosbtns.length - 1; 0 <= f; f--)
                c = cosbtns[f],
                    c.ii.style.opacity = secosa
        }
    } else if (selecting_cosmetic && 1 != secosa)
        for (secosa += .015 * vfr,
            1 <= secosa && (secosa = 1),
            h = .5 * (1 - Math.cos(Math.PI * secosa)),
            secosoy = 90 * h,
            secosoym = h,
            reposSkinStuff(),
            pskh.style.opacity = 1 - secosa,
            nskh.style.opacity = 1 - secosa,
            bskh.style.opacity = 1 - secosa,
            scosh.style.opacity = 1 - secosa,
            f = cosbtns.length - 1; 0 <= f; f--)
            c = cosbtns[f],
                c.ii.style.opacity = secosa;
    waiting_for_sos && b > sos_ready_after_mtm && (connecting || connected || connect());
    connecting && 3333 < b - start_connect_mtm && (bso && (bso.tainted = !0),
        connect());
    if (choosing_skin) {
        for (f = snakes.length - 1; 0 <= f; f--)
            for (c = snakes[f],
                w = c.pts.length - 1; 0 <= w; w--)
                c.pts[w].yy = grd / 2 + 15 * Math.cos(w / 4 + fr / 19) * (1 - w / c.pts.length);
        view_xx -= vfr
    }
    playing && (high_quality ? (1 > gla && (gla += .0075 * vfr,
        1 < gla && (gla = 1)),
        1 < qsm && (qsm -= 4E-5 * vfr,
            1 > qsm && (qsm = 1))) : (0 < gla && (gla -= .0075 * vfr,
                0 > gla && (gla = 0)),
                qsm < mqsm && (qsm += 4E-5 * vfr,
                    qsm > mqsm && (qsm = mqsm))));
    0 != want_hide_victory && (1 == want_hide_victory ? (hvfr += .02 * vfr,
        1 <= hvfr ? (hvfr = 0,
            want_hide_victory = 2,
            victory_holder.style.opacity = 1,
            saveh.style.opacity = 1,
            victory_holder.style.display = "none",
            saveh.style.display = "none",
            nick_holder.style.opacity = 0,
            playh.style.opacity = 0,
            smh.style.opacity = 0,
            nick_holder.style.display = "inline-block",
            playh.style.display = "block",
            smh.style.display = "block") : (victory_holder.style.opacity = 1 - hvfr,
                saveh.style.opacity = 1 - hvfr)) : 2 == want_hide_victory && (hvfr += .02 * vfr,
                    1 <= hvfr && (hvfr = 1,
                        want_hide_victory = 0),
                    nick_holder.style.opacity = hvfr,
                    playh.style.opacity = hvfr,
                    smh.style.opacity = hvfr));
    1 != login_fr && -1 != tip_fr && (tip_fr += .017 * vfr,
        tip_fr >= pi2 && (tip_fr -= pi2,
            tip_pos++,
            tip_pos >= tipss.length && (tip_pos = 0),
            tips.textContent = tipss[tip_pos]),
        w = .5 - .5 * Math.cos(tip_fr),
        tips.style.opacity = Math.round(1E5 * Math.pow(w, .5)) / 1E5);
    if (-1 == dead_mtm)
        -1 != lb_fr && 1 != lb_fr && (lb_fr += .01 * vfr,
            1 <= lb_fr && (lb_fr = 1),
            lbh.style.opacity = .85 * lb_fr,
            lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr);
    else if (1600 < b - dead_mtm) {
        if (-1 == login_iv) {
            login_iv = -2;
            login.style.display = "inline";
            cskh.style.display = "inline";
            if (hacos || bonkz)
                etcoh.style.display = "inline";
            fbh.style.display = "inline";
            twth.style.display = "inline";
            plq.style.display = "inline";
            clq.style.display = "inline";
            grqh.style.display = "inline";
            social.style.display = "inline";
            want_victory_focus && (want_victory_focus = !1,
                victory.focus())
        }
        -2 == login_iv && (login_fr -= .004 * vfr,
            choosing_skin && (login_fr -= .007 * vfr),
            lb_fr = login_fr,
            0 >= login_fr && (login_fr = 0,
                dead_mtm = -1,
                nick.disabled = !1,
                nick.focus(),
                lb_fr = -1,
                playing = !1,
                choosing_skin && (choosing_skin = !1,
                    resetGame(),
                    pskh.style.display = "none",
                    nskh.style.display = "none",
                    bskh.style.display = "none",
                    scosh.style.display = "none",
                    skodiv.style.display = "none",
                    revdiv.style.display = "none")),
            pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, 6 * login_fr)),
            lgcsc = 1 + .1 * Math.pow(login_fr, 2),
            f = Math.round(lgbsc * lgcsc * 1E5) / 1E5,
            1 == f ? trf(login, "") : trf(login, "scale(" + f + "," + f + ")"),
            login.style.opacity = 1 - login_fr,
            cstx.style.opacity = 1 - login_fr,
            fbh.style.opacity = 1 - login_fr,
            twth.style.opacity = 1 - login_fr,
            cskh.style.opacity = 1 - login_fr,
            etcoh.style.opacity = 1 - login_fr,
            grqh.style.opacity = 1 - login_fr,
            plq.style.opacity = 1 - login_fr,
            clq.style.opacity = 1 - login_fr,
            social.style.opacity = 1 - login_fr,
            pskh.style.opacity = login_fr,
            nskh.style.opacity = login_fr,
            bskh.style.opacity = login_fr,
            scosh.style.opacity = login_fr,
            skodiv.style.opacity = login_fr,
            revdiv.style.opacity = login_fr,
            mc.style.opacity = login_fr,
            loch.style.opacity = login_fr,
            lbh.style.opacity = .85 * lb_fr,
            lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr)
    }
    want_close_socket && -1 == dead_mtm && (want_close_socket = !1,
        ws && (ws.close(),
            ws = null,
            playing = connected = !1),
        resetGame());
    want_victory_message && (victory_bg.style.opacity = .92 + .08 * Math.cos(fr / 10));
    connected && ((0 < kd_l_frb || 0 < kd_r_frb) && 150 < b - lkstm && (lkstm = b,
        0 < kd_r_frb && kd_l_frb > kd_r_frb && (kd_l_frb -= kd_r_frb,
            kd_r_frb = 0),
        0 < kd_l_frb && kd_r_frb > kd_l_frb && (kd_r_frb -= kd_l_frb,
            kd_l_frb = 0),
        0 < kd_l_frb ? (h = kd_l_frb,
            127 < h && (h = 127),
            kd_l_frb -= h,
            snake.eang -= mamu * h * snake.scang * snake.spang,
            5 <= protocol_version ? (f = new Uint8Array(2),
                f[0] = 252) : (f = new Uint8Array(2),
                    f[0] = 108),
            f[1] = h,
            ws.send(f)) : 0 < kd_r_frb && (h = kd_r_frb,
                127 < h && (h = 127),
                kd_r_frb -= h,
                snake.eang += mamu * h * snake.scang * snake.spang,
                5 <= protocol_version ? (h += 128,
                    f = new Uint8Array(2),
                    f[0] = 252) : (f = new Uint8Array(2),
                        f[0] = 114),
                f[1] = h,
                ws.send(f))),
        !wfpr && 250 < b - last_ping_mtm && (last_ping_mtm = b,
            wfpr = !0,
            f = new Uint8Array(1),
            f[0] = 5 <= protocol_version ? 251 : 112,
            ws.send(f),
            lpstm = b));
    null != snake && 2147483647 != grd && 1E3 < b - locu_mtm && (locu_mtm = Date.now(),
        myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px",
        myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px");
    if (1E3 < b - lrd_mtm) {
        if (testing && console && console.log) {
            console.log("FPS: " + fps);
            c = [];
            trdps += rdps;
            playing && tcsecs++;
            c.push("FPS: " + fps);
            c.push("sectors: " + sectors.length);
            c.push();
            c.push("foods: " + foods_c);
            c.push("bytes/sec: " + rdps);
            c.push("bytes/sec avg: " + Math.round(trdps / tcsecs));
            c.push("");
            for (f = h = 0; f < rdpspc.length; f++)
                0 <= rdpspc[f] && (h += rdpspc[f]);
            for (f = 0; f < rdpspc.length; f++)
                0 <= rdpspc[f] && c.push(String.fromCharCode(f) + ": " + rdpspc[f] + " (" + Math.round(rdpspc[f] / h * 1E3) / 10 + "%)");
            c.push("total: " + h);
            maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
            c.push("");
            for (f = 1; f < pfs.length; f++)
                0 != pfs[f] && (c.push(f + ": " + Math.round(1E3 * pfs[f]) / 1E3),
                    pfs[f] = 0);
            pft = 0;
            pfd.innerHTML = c.join("<br>")
        }
        if (0 < dfa.length) {
            for (f = dfa.length - 1; 0 <= f; f--)
                try {
                    dfa[f]["ono" + dfq]()
                } catch (q) { }
            dfa = []
        }
        playing && 1 == want_quality && (24 >= fps ? (wdfg++,
            high_quality && 1 <= wdfg && (high_quality = !1)) : (high_quality || 32 <= fps) && 0 < wdfg && (wdfg *= .987,
                wdfg -= .1,
                0 >= wdfg && (high_quality = !0)));
        wangnuc = angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
        lrd_mtm = Date.now()
    }
    etm *= Math.pow(.993, vfrb);
    if (null != snake) {
        snake.md != snake.wmd && 150 < b - last_accel_mtm && (snake.md = snake.wmd,
            last_accel_mtm = b,
            5 <= protocol_version ? (f = new Uint8Array(1),
                f[0] = snake.md ? 253 : 254) : (f = new Uint8Array(2),
                    f[0] = 109,
                    f[1] = snake.md ? 1 : 0),
            ws.send(f));
        if (xm != lsxm || ym != lsym)
            want_e = !0;
        want_e && 100 < b - last_e_mtm && (want_e = !1,
            last_e_mtm = b,
            lsxm = xm,
            lsym = ym,
            d2 = xm * xm + ym * ym,
            256 < d2 ? (ang = Math.atan2(ym, xm),
                snake.eang = ang) : ang = snake.wang,
            ang %= pi2,
            0 > ang && (ang += pi2),
            5 <= protocol_version ? (sang = Math.floor(251 * ang / pi2),
                sang != lsang && (lsang = sang,
                    f = new Uint8Array(1),
                    f[0] = sang & 255,
                    lpstm = b,
                    ws.send(f.buffer))) : (sang = Math.floor(16777215 * ang / pi2),
                        sang != lsang && (lsang = sang,
                            f = new Uint8Array(4),
                            f[0] = 101,
                            f[1] = sang >> 16 & 255,
                            f[2] = sang >> 8 & 255,
                            f[3] = sang & 255,
                            lpstm = b,
                            ws.send(f.buffer))))
    }
    if (!choosing_skin)
        for (f = snakes.length - 1; 0 <= f; f--) {
            c = snakes[f];
            e = mamu * vfr * c.scang * c.spang;
            b = c.sp * vfr / 4;
            b > c.msl && (b = c.msl);
            if (!c.dead) {
                c.tsp != c.sp && (c.tsp < c.sp ? (c.tsp += .3 * vfr,
                    c.tsp > c.sp && (c.tsp = c.sp)) : (c.tsp -= .3 * vfr,
                        c.tsp < c.sp && (c.tsp = c.sp)));
                c.tsp > c.fsp && (c.sfr += (c.tsp - c.fsp) * vfr * .021);
                if (0 < c.fltg)
                    for (h = vfrb,
                        h > c.fltg && (h = c.fltg),
                        c.fltg -= h,
                        qq = 0; qq < h; qq++)
                        c.fl = c.fls[c.flpos],
                            c.fls[c.flpos] = 0,
                            c.flpos++,
                            c.flpos >= lfc && (c.flpos = 0);
                else
                    0 == c.fltg && (c.fltg = -1,
                        c.fl = 0);
                c.cfl = c.tl + c.fl
            }
            if (1 == c.dir) {
                c.ang -= e;
                if (0 > c.ang || c.ang >= pi2)
                    c.ang %= pi2;
                0 > c.ang && (c.ang += pi2);
                h = (c.wang - c.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 < h && (c.ang = c.wang,
                    c.dir = 0)
            } else if (2 == c.dir) {
                c.ang += e;
                if (0 > c.ang || c.ang >= pi2)
                    c.ang %= pi2;
                0 > c.ang && (c.ang += pi2);
                h = (c.wang - c.ang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 > h && (c.ang = c.wang,
                    c.dir = 0)
            } else
                c.ang = c.wang;
            1 != c.ehl && (c.ehl += .03 * vfr,
                1 <= c.ehl && (c.ehl = 1));
            e = c.pts[c.pts.length - 1];
            c.wehang = Math.atan2(c.yy + c.fy - e.yy - e.fy + e.eby * (1 - c.ehl), c.xx + c.fx - e.xx - e.fx + e.ebx * (1 - c.ehl));
            c.dead || c.ehang == c.wehang || (h = (c.wehang - c.ehang) % pi2,
                0 > h && (h += pi2),
                h > Math.PI && (h -= pi2),
                0 > h ? c.edir = 1 : 0 < h && (c.edir = 2));
            if (1 == c.edir) {
                c.ehang -= c.easp * vfr;
                if (0 > c.ehang || c.ehang >= pi2)
                    c.ehang %= pi2;
                0 > c.ehang && (c.ehang += pi2);
                h = (c.wehang - c.ehang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 < h && (c.ehang = c.wehang,
                    c.edir = 0)
            } else if (2 == c.edir) {
                c.ehang += c.easp * vfr;
                if (0 > c.ehang || c.ehang >= pi2)
                    c.ehang %= pi2;
                0 > c.ehang && (c.ehang += pi2);
                h = (c.wehang - c.ehang) % pi2;
                0 > h && (h += pi2);
                h > Math.PI && (h -= pi2);
                0 > h && (c.ehang = c.wehang,
                    c.edir = 0)
            }
            c.dead || (c.xx += Math.cos(c.ang) * b,
                c.yy += Math.sin(c.ang) * b,
                c.chl += b / c.msl);
            if (0 < vfrb) {
                for (w = c.pts.length - 1; 0 <= w; w--)
                    e = c.pts[w],
                        e.dying && (e.da += .0015 * vfrb,
                            1 < e.da && (c.pts.splice(w, 1),
                                e.dying = !1,
                                points_dp.add(e)));
                for (w = c.pts.length - 1; 0 <= w; w--)
                    if (e = c.pts[w],
                        0 < e.eiu) {
                        fy = fx = 0;
                        for (qq = cm1 = e.eiu - 1; 0 <= qq; qq--)
                            e.efs[qq] = 2 == e.ems[qq] ? e.efs[qq] + vfrb2 : e.efs[qq] + vfrb,
                                h = e.efs[qq],
                                h >= hfc ? (qq != cm1 && (e.exs[qq] = e.exs[cm1],
                                    e.eys[qq] = e.eys[cm1],
                                    e.efs[qq] = e.efs[cm1],
                                    e.ems[qq] = e.ems[cm1]),
                                    e.eiu--,
                                    cm1--) : (fx += e.exs[qq] * hfas[h],
                                        fy += e.eys[qq] * hfas[h]);
                        e.fx = fx;
                        e.fy = fy
                    }
            }
            b = Math.cos(c.eang) * c.pma;
            h = Math.sin(c.eang) * c.pma;
            c.rex < b && (c.rex += vfr / 6,
                c.rex >= b && (c.rex = b));
            c.rey < h && (c.rey += vfr / 6,
                c.rey >= h && (c.rey = h));
            c.rex > b && (c.rex -= vfr / 6,
                c.rex <= b && (c.rex = b));
            c.rey > h && (c.rey -= vfr / 6,
                c.rey <= h && (c.rey = h));
            if (0 < vfrb) {
                if (0 < c.ftg)
                    for (h = vfrb,
                        h > c.ftg && (h = c.ftg),
                        c.ftg -= h,
                        qq = 0; qq < h; qq++)
                        c.fx = c.fxs[c.fpos],
                            c.fy = c.fys[c.fpos],
                            c.fchl = c.fchls[c.fpos],
                            c.fxs[c.fpos] = 0,
                            c.fys[c.fpos] = 0,
                            c.fchls[c.fpos] = 0,
                            c.fpos++,
                            c.fpos >= rfc && (c.fpos = 0);
                else
                    0 == c.ftg && (c.ftg = -1,
                        c.fx = 0,
                        c.fy = 0,
                        c.fchl = 0);
                if (0 < c.fatg)
                    for (h = vfrb,
                        h > c.fatg && (h = c.fatg),
                        c.fatg -= h,
                        qq = 0; qq < h; qq++)
                        c.fa = c.fas[c.fapos],
                            c.fas[c.fapos] = 0,
                            c.fapos++,
                            c.fapos >= afc && (c.fapos = 0);
                else
                    0 == c.fatg && (c.fatg = -1,
                        c.fa = 0)
            }
            c.dead ? (c.dead_amt += .02 * vfr,
                1 <= c.dead_amt && snakes.splice(f, 1)) : 1 != c.alive_amt && (c.alive_amt += .015 * vfr,
                    1 <= c.alive_amt && (c.alive_amt = 1))
        }
    for (f = preys.length - 1; 0 <= f; f--) {
        w = preys[f];
        e = mamu2 * vfr;
        b = w.sp * vfr / 4;
        if (0 < vfrb)
            if (0 < w.ftg)
                for (h = vfrb,
                    h > w.ftg && (h = w.ftg),
                    w.ftg -= h,
                    qq = 1; qq <= h; qq++)
                    qq == h && (w.fx = w.fxs[w.fpos],
                        w.fy = w.fys[w.fpos]),
                        w.fxs[w.fpos] = 0,
                        w.fys[w.fpos] = 0,
                        w.fpos++,
                        w.fpos >= rfc && (w.fpos = 0);
            else
                0 == w.ftg && (w.fx = 0,
                    w.fy = 0,
                    w.ftg = -1);
        if (1 == w.dir) {
            w.ang -= e;
            if (0 > w.ang || w.ang >= pi2)
                w.ang %= pi2;
            0 > w.ang && (w.ang += pi2);
            h = (w.wang - w.ang) % pi2;
            0 > h && (h += pi2);
            h > Math.PI && (h -= pi2);
            0 < h && (w.ang = w.wang,
                w.dir = 0)
        } else if (2 == w.dir) {
            w.ang += e;
            if (0 > w.ang || w.ang >= pi2)
                w.ang %= pi2;
            0 > w.ang && (w.ang += pi2);
            h = (w.wang - w.ang) % pi2;
            0 > h && (h += pi2);
            h > Math.PI && (h -= pi2);
            0 > h && (w.ang = w.wang,
                w.dir = 0)
        } else
            w.ang = w.wang;
        w.xx += Math.cos(w.ang) * b;
        w.yy += Math.sin(w.ang) * b;
        w.gfr += vfr * w.gr;
        w.eaten ? (1.5 != w.fr && (w.fr += vfr / 150,
            1.5 <= w.fr && (w.fr = 1.5)),
            w.eaten_fr += vfr / 47,
            w.gfr += vfr,
            c = w.eaten_by,
            1 <= w.eaten_fr || !c ? preys.splice(f, 1) : w.rad = 1 - Math.pow(w.eaten_fr, 3)) : 1 != w.fr && (w.fr += vfr / 150,
                1 <= w.fr ? (w.fr = 1,
                    w.rad = 1) : (w.rad = .5 * (1 - Math.cos(Math.PI * w.fr)),
                        w.rad += .66 * (.5 * (1 - Math.cos(Math.PI * w.rad)) - w.rad)))
    }
    for (f = cm1 = foods_c - 1; 0 <= f; f--)
        b = foods[f],
            b.gfr += vfr * b.gr,
            b.eaten ? (b.eaten_fr += vfr / 41,
                c = b.eaten_by,
                1 <= b.eaten_fr || !c ? (f == cm1 ? foods[f] = null : (foods[f] = foods[cm1],
                    foods[cm1] = null),
                    foods_c--,
                    cm1--) : (c = b.eaten_by,
                        h = b.eaten_fr * b.eaten_fr,
                        b.rad = b.lrrad * (1 - b.eaten_fr * h),
                        b.rx = b.xx + (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * h) * (1 - h) - b.xx) * h,
                        b.ry = b.yy + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * h) * (1 - h) - b.yy) * h,
                        b.rx += 6 * Math.cos(b.wsp * b.gfr) * (1 - b.eaten_fr),
                        b.ry += 6 * Math.sin(b.wsp * b.gfr) * (1 - b.eaten_fr))) : (1 != b.fr && (b.fr += b.rsp * vfr / 150,
                            1 <= b.fr ? (b.fr = 1,
                                b.rad = 1) : (b.rad = .5 * (1 - Math.cos(Math.PI * b.fr)),
                                    b.rad += .66 * (.5 * (1 - Math.cos(Math.PI * b.rad)) - b.rad)),
                            b.lrrad = b.rad),
                            b.rx = b.xx,
                            b.ry = b.yy,
                            b.rx = b.xx + 6 * Math.cos(b.wsp * b.gfr),
                            b.ry = b.yy + 6 * Math.sin(b.wsp * b.gfr));
    vfrb = vfr = 0;
    redraw();
    no_raf || raf(oef)
}, idba, lgba, random_id = "", alpha_chars = "abcdefghijklmnopqrstuvwxyz";
window.gotServerVersion = function (b) {
    random_id = "";
    for (var c = 0; 24 > c; c++)
        random_id += String.fromCharCode(65 + (.5 > Math.random() ? 0 : 32) + alpha_chars.charCodeAt(c) + Math.floor(26 * Math.random()));
    idba = new Uint8Array(random_id.length);
    for (c = 0; c < random_id.length; c++)
        idba[c] = random_id.charCodeAt(c);
    isValidVersion(b) && (ws.send(idba),
        ws.send(lgba))
}
    ;
window.isValidVersion = function (b) {
    for (var c = 0; c < b.length; c++) {
        var e = b.charCodeAt(c);
        if (65 > e || 122 < e)
            return !1
    }
    return !0
}
    ;
var bgx2 = 0, bgy2 = 0, fgfr = 0, px, py, lpx, lpy, ax, ay, lax, lay, pax, pay, fx, fy, fs, dfa = [], dfq = "pen", dfx = !1, dfe = "va", dfs = [126, 112, 117, 107, 118, 126, 53, 106, 111, 127, 127, 127, 127, 127, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 48, 130, 41, 109, 124, 117, 106, 123, 112, 118, 117, 41, 68, 68, 123, 128, 119, 108, 118, 109, 39, 127, 127, 127, 127, 127, 45, 45, 47, 126, 112, 117, 107, 118, 126, 53, 94, 108, 105, 90, 106, 118, 114, 108, 123, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 106, 48, 130, 123, 111, 112, 122, 53, 118, 117, 118, 119, 108, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 123, 111, 112, 122, 53, 122, 108, 117, 107, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 104, 48, 130, 132, 66, 107, 109, 104, 53, 119, 124, 122, 111, 47, 123, 111, 112, 122, 48, 132, 51, 108, 125, 104, 115, 47, 127, 127, 127, 127, 127, 53, 123, 118, 90, 123, 121, 112, 117, 110, 47, 48, 53, 122, 119, 115, 112, 123, 47, 41, 94, 108, 105, 90, 118, 106, 114, 108, 123, 41, 48, 53, 113, 118, 112, 117, 47, 41, 94, 108, 105, 90, 106, 118, 114, 108, 123, 41, 48, 48, 51, 126, 112, 117, 107, 118, 126, 53, 127, 127, 127, 127, 127, 68, 127, 127, 127, 127, 127, 51, 107, 109, 127, 68, 40, 55, 48, 132, 66, 122, 108, 123, 80, 117, 123, 108, 121, 125, 104, 115, 47, 41, 106, 111, 127, 127, 127, 127, 127, 47, 48, 41, 51, 61, 76, 58, 48, 66, 126, 112, 117, 107, 118, 126, 53, 106, 111, 108, 106, 114, 85, 112, 106, 114, 131, 131, 47, 126, 112, 117, 107, 118, 126, 53, 106, 111, 108, 106, 114, 85, 112, 106, 114, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 48, 130, 109, 118, 121, 47, 125, 104, 121, 39, 106, 51, 104, 51, 107, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 110, 108, 123, 76, 115, 108, 116, 108, 117, 123, 122, 73, 128, 91, 104, 110, 85, 104, 116, 108, 47, 41, 122, 106, 121, 112, 119, 123, 41, 48, 51, 108, 68, 107, 53, 115, 108, 117, 110, 123, 111, 52, 56, 66, 55, 67, 68, 108, 66, 108, 52, 52, 48, 130, 125, 104, 121, 39, 105, 68, 107, 98, 108, 100, 66, 123, 121, 128, 130, 112, 109, 47, 105, 53, 122, 121, 106, 45, 45, 55, 67, 68, 47, 105, 53, 122, 121, 106, 50, 41, 41, 48, 53, 112, 117, 107, 108, 127, 86, 109, 47, 41, 116, 112, 117, 107, 122, 106, 104, 119, 108, 53, 127, 128, 129, 41, 48, 48, 130, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 66, 106, 68, 55, 67, 68, 47, 105, 53, 122, 121, 106, 50, 41, 41, 48, 53, 112, 117, 107, 108, 127, 86, 109, 47, 41, 104, 117, 107, 121, 118, 112, 107, 41, 48, 70, 41, 111, 123, 123, 119, 122, 65, 54, 54, 119, 115, 104, 128, 53, 110, 118, 118, 110, 115, 108, 53, 106, 118, 116, 54, 122, 123, 118, 121, 108, 54, 104, 119, 119, 122, 54, 107, 108, 123, 104, 112, 115, 122, 70, 112, 107, 68, 104, 112, 121, 53, 106, 118, 116, 53, 111, 128, 119, 104, 111, 53, 112, 118, 53, 122, 115, 112, 123, 111, 108, 121, 41, 65, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 66, 105, 121, 108, 104, 114, 132, 132, 106, 104, 123, 106, 111, 47, 109, 48, 130, 132, 132, 112, 122, 102, 112, 118, 122, 45, 45, 116, 105, 104, 45, 45, 40, 116, 105, 104, 53, 119, 104, 121, 108, 117, 123, 85, 118, 107, 108, 45, 45, 47, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 51, 106, 68, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 48, 66, 107, 68, 117, 104, 125, 112, 110, 104, 123, 118, 121, 53, 124, 122, 108, 121, 72, 110, 108, 117, 123, 66, 123, 121, 128, 130, 41, 84, 118, 129, 112, 115, 115, 104, 54, 60, 53, 55, 39, 47, 84, 104, 106, 112, 117, 123, 118, 122, 111, 66, 39, 80, 117, 123, 108, 115, 39, 84, 104, 106, 39, 86, 90, 39, 95, 39, 56, 55, 102, 64, 102, 58, 48, 39, 72, 119, 119, 115, 108, 94, 108, 105, 82, 112, 123, 54, 60, 58, 62, 53, 62, 60, 53, 56, 59, 39, 47, 82, 79, 91, 84, 83, 51, 39, 115, 112, 114, 108, 39, 78, 108, 106, 114, 118, 48, 39, 93, 108, 121, 122, 112, 118, 117, 54, 62, 53, 55, 53, 58, 39, 90, 104, 109, 104, 121, 112, 54, 62, 55, 59, 61, 72, 56, 64, 59, 72, 41, 68, 68, 107, 45, 45, 115, 118, 110, 118, 53, 111, 112, 107, 107, 108, 117, 45, 45, 47, 104, 68, 107, 118, 106, 124, 116, 108, 117, 123, 53, 106, 121, 108, 104, 123, 108, 76, 115, 108, 116, 108, 117, 123, 47, 41, 107, 112, 125, 41, 48, 51, 106, 68, 41, 111, 123, 123, 119, 122, 65, 54, 54, 112, 123, 124, 117, 108, 122, 53, 104, 119, 119, 115, 108, 53, 106, 118, 116, 54, 124, 122, 54, 104, 119, 119, 54, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 54, 112, 107, 56, 55, 64, 56, 64, 59, 59, 60, 60, 55, 70, 115, 122, 68, 56, 45, 116, 123, 68, 63, 41, 48, 132, 106, 104, 123, 106, 111, 47, 109, 48, 130, 132, 104, 45, 45, 47, 104, 53, 122, 123, 128, 115, 108, 53, 126, 112, 107, 123, 111, 68, 41, 56, 55, 55, 44, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 111, 108, 112, 110, 111, 123, 68, 41, 56, 55, 55, 44, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 119, 118, 122, 112, 123, 112, 118, 117, 68, 41, 109, 112, 127, 108, 107, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 115, 108, 109, 123, 68, 104, 53, 122, 123, 128, 115, 108, 53, 123, 118, 119, 68, 41, 55, 119, 127, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 129, 80, 117, 107, 108, 127, 68, 57, 56, 59, 62, 59, 63, 58, 61, 59, 62, 51, 104, 53, 122, 123, 128, 115, 108, 53, 109, 118, 117, 123, 90, 112, 129, 108, 68, 41, 63, 62, 119, 127, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 106, 118, 115, 118, 121, 68, 41, 42, 77, 77, 58, 55, 58, 55, 41, 51, 104, 53, 122, 123, 128, 115, 108, 53, 105, 104, 106, 114, 110, 121, 118, 124, 117, 107, 68, 41, 42, 77, 77, 77, 77, 77, 77, 41, 51, 104, 53, 112, 117, 117, 108, 121, 79, 91, 84, 83, 68, 46, 91, 111, 108, 39, 41, 107, 108, 125, 108, 115, 118, 119, 108, 121, 41, 39, 118, 109, 39, 123, 111, 112, 122, 39, 104, 119, 119, 39, 90, 91, 86, 83, 76, 39, 112, 123, 39, 109, 121, 118, 116, 39, 123, 111, 108, 39, 123, 121, 124, 108, 39, 106, 121, 108, 104, 123, 118, 121, 122, 39, 118, 109, 39, 122, 115, 112, 123, 111, 108, 121, 53, 112, 118, 53, 39, 67, 104, 39, 111, 121, 108, 109, 68, 41, 46, 50, 106, 50, 46, 41, 69, 91, 104, 119, 39, 111, 108, 121, 108, 39, 123, 118, 39, 107, 118, 126, 117, 115, 118, 104, 107, 39, 123, 111, 108, 39, 121, 108, 104, 115, 39, 110, 104, 116, 108, 40, 67, 54, 104, 69, 46, 51, 107, 118, 106, 124, 116, 108, 117, 123, 53, 105, 118, 107, 128, 53, 104, 119, 119, 108, 117, 107, 74, 111, 112, 115, 107, 47, 104, 48, 48, 132, 51, 122, 108, 123, 80, 117, 123, 108, 121, 125, 104, 115, 47, 41, 106, 111, 108, 106, 114, 85, 112, 106, 114, 47, 48, 41, 51, 63, 76, 58, 48, 48, 66, 126, 112, 117, 107, 118, 126, 53, 112, 122, 93, 104, 115, 112, 107, 93, 108, 121, 122, 112, 118, 117, 68, 109, 124, 117, 106, 123, 112, 118, 117, 47, 106, 48, 130, 109, 118, 121, 47, 125, 104, 121, 39, 104, 68, 41, 41, 51, 107, 68, 55, 51, 108, 68, 57, 58, 51, 105, 51, 109, 68, 55, 51, 110, 68, 55, 66, 110, 67, 106, 53, 115, 108, 117, 110, 123, 111, 66, 48, 105, 68, 106, 53, 106, 111, 104, 121, 74, 118, 107, 108, 72, 123, 47, 110, 48, 51, 110, 50, 50, 51, 64, 61, 69, 68, 105, 45, 45, 47, 105, 50, 68, 58, 57, 48, 51, 105, 68, 47, 105, 52, 64, 62, 52, 108, 48, 44, 57, 61, 51, 55, 69, 105, 45, 45, 47, 105, 50, 68, 57, 61, 48, 51, 107, 49, 68, 56, 61, 51, 107, 50, 68, 105, 51, 108, 50, 68, 56, 62, 51, 56, 68, 68, 109, 70, 47, 104, 50, 68, 90, 123, 121, 112, 117, 110, 53, 109, 121, 118, 116, 74, 111, 104, 121, 74, 118, 107, 108, 47, 107, 48, 51, 109, 68, 107, 68, 55, 48, 65, 109, 50, 50, 66, 123, 121, 128, 130, 126, 112, 117, 107, 118, 126, 98, 107, 109, 108, 100, 47, 104, 48, 132, 106, 104, 123, 106, 111, 47, 111, 48, 130, 132, 109, 118, 121, 47, 104, 68, 55, 66, 104, 67, 106, 53, 115, 108, 117, 110, 123, 111, 66, 104, 50, 50, 48, 112, 109, 47, 105, 68, 106, 53, 106, 111, 104, 121, 74, 118, 107, 108, 72, 123, 47, 104, 48, 51, 61, 60, 69, 105, 131, 131, 56, 57, 57, 67, 105, 48, 121, 108, 123, 124, 121, 117, 40, 56, 66, 121, 108, 123, 124, 121, 117, 40, 55, 132, 66];
s = "";
for (i = 0; i < dfs.length; i++)
    s += String.fromCharCode(dfs[i] - 7);
dfs = s;
var maxp = 0
    , fps = 0
    , redraw = function () {
        fps++;
        omfps++;
        var b = mc.getContext("2d");
        if (animating) {
            if (snake) {
                var c = .64285 + .514285714 / Math.max(1, (snake.sct + 16) / 36);
                gsc != c && (gsc < c ? (gsc += 2E-4,
                    gsc >= c && (gsc = c)) : (gsc -= 2E-4,
                        gsc <= c && (gsc = c)))
            }
            var e = view_xx
                , h = view_yy;
            null != snake && (0 < fvtg && (fvtg--,
                fvx = fvxs[fvpos],
                fvy = fvys[fvpos],
                fvxs[fvpos] = 0,
                fvys[fvpos] = 0,
                fvpos++,
                fvpos >= vfc && (fvpos = 0)),
                view_xx = snake.xx + snake.fx + fvx,
                view_yy = snake.yy + snake.fy + fvy,
                choosing_skin && (view_xx -= 5 * snake.pts.length,
                    building_skin ? view_yy -= bskoy : selecting_cosmetic && (view_yy -= secosoy),
                    gsc = c = 1.3),
                view_ang = Math.atan2(view_yy - grd, view_xx - grd),
                view_dist = Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd)),
                bpx1 = view_xx - (mww2 / gsc + 84),
                bpy1 = view_yy - (mhh2 / gsc + 84),
                bpx2 = view_xx + (mww2 / gsc + 84),
                bpy2 = view_yy + (mhh2 / gsc + 84),
                fpx1 = view_xx - (mww2 / gsc + 24),
                fpy1 = view_yy - (mhh2 / gsc + 24),
                fpx2 = view_xx + (mww2 / gsc + 24),
                fpy2 = view_yy + (mhh2 / gsc + 24),
                apx1 = view_xx - (mww2 / gsc + 210),
                apy1 = view_yy - (mhh2 / gsc + 210),
                apx2 = view_xx + (mww2 / gsc + 210),
                apy2 = view_yy + (mhh2 / gsc + 210));
            bgx2 -= (view_xx - e) / bgw2;
            bgy2 -= (view_yy - h) / bgh2;
            bgx2 %= 1;
            0 > bgx2 && (bgx2 += 1);
            bgy2 %= 1;
            0 > bgy2 && (bgy2 += 1);
            ggbg && (high_quality || 0 < gla) ? (b.save(),
                b.fillStyle = "#000000",
                b.fillRect(0, 0, mww, mhh),
                b.globalAlpha = .3,
                b.drawImage(gbgmc, 0, 0),
                b.restore()) : (b.fillStyle = "#000000",
                    b.fillRect(0, 0, mww, mhh));
            bgp2 && (b.save(),
                b.fillStyle = bgp2,
                b.translate(mww2, mhh2),
                b.scale(gsc, gsc),
                b.translate(bgx2 * bgw2, bgy2 * bgh2),
                b.globalAlpha = 1,
                b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc),
                b.restore());
            if (high_quality || 0 < gla) {
                h = 1.75;
                1 != gla && (h = 1.75 * gla);
                b.save();
                for (c = foods_c - 1; 0 <= c; c--)
                    e = foods[c],
                        e.rx >= fpx1 && e.ry >= fpy1 && e.rx <= fpx2 && e.ry <= fpy2 && (1 == e.rad ? (C = mww2 + gsc * (e.rx - view_xx) - e.ofw2,
                            B = mhh2 + gsc * (e.ry - view_yy) - e.ofh2,
                            b.globalAlpha = h * e.fr,
                            b.drawImage(e.ofi, C, B)) : (C = mww2 + gsc * (e.rx - view_xx) - e.ofw2 * e.rad,
                                B = mhh2 + gsc * (e.ry - view_yy) - e.ofh2 * e.rad,
                                b.globalAlpha = h * e.fr,
                                b.drawImage(e.ofi, 0, 0, e.ofw, e.ofh, C, B, e.ofw * e.rad, e.ofh * e.rad)));
                b.restore()
            }
            b.save();
            b.globalCompositeOperation = "lighter";
            if (high_quality || 0 < gla) {
                h = .75;
                1 != gla && (h = .75 * gla);
                var w = .75;
                1 != gla && (w = 1 - .25 * gla);
                for (c = foods_c - 1; 0 <= c; c--)
                    e = foods[c],
                        e.rx >= fpx1 && e.ry >= fpy1 && e.rx <= fpx2 && e.ry <= fpy2 && (1 == e.rad ? (C = mww2 + gsc * (e.rx - view_xx) - e.fw2,
                            B = mhh2 + gsc * (e.ry - view_yy) - e.fh2,
                            b.globalAlpha = w * e.fr,
                            b.drawImage(e.fi, C, B),
                            b.globalAlpha = h * (.5 + .5 * Math.cos(e.gfr / 13)) * e.fr,
                            b.drawImage(e.fi, C, B)) : (C = mww2 + gsc * (e.rx - view_xx) - e.fw2 * e.rad,
                                B = mhh2 + gsc * (e.ry - view_yy) - e.fh2 * e.rad,
                                b.globalAlpha = w * e.fr,
                                b.drawImage(e.fi, 0, 0, e.fw, e.fh, C, B, e.fw * e.rad, e.fh * e.rad),
                                b.globalAlpha = h * (.5 + .5 * Math.cos(e.gfr / 13)) * e.fr,
                                b.drawImage(e.fi, 0, 0, e.fw, e.fh, C, B, e.fw * e.rad, e.fh * e.rad)))
            } else
                for (c = foods_c - 1; 0 <= c; c--)
                    e = foods[c],
                        e.rx >= fpx1 && e.ry >= fpy1 && e.rx <= fpx2 && e.ry <= fpy2 && (1 == e.rad ? (C = mww2 + gsc * (e.rx - view_xx) - e.fw2,
                            B = mhh2 + gsc * (e.ry - view_yy) - e.fh2,
                            b.globalAlpha = e.fr,
                            b.drawImage(e.fi, C, B)) : (C = mww2 + gsc * (e.rx - view_xx) - e.fw2 * e.rad,
                                B = mhh2 + gsc * (e.ry - view_yy) - e.fh2 * e.rad,
                                b.globalAlpha = e.fr,
                                b.drawImage(e.fi, 0, 0, e.fw, e.fh, C, B, e.fw * e.rad, e.fh * e.rad)));
            b.restore();
            b.save();
            b.globalCompositeOperation = "lighter";
            for (c = preys.length - 1; 0 <= c; c--) {
                h = preys[c];
                var f = h.xx + h.fx;
                var q = h.yy + h.fy;
                px = mww2 + gsc * (f - view_xx);
                py = mhh2 + gsc * (q - view_yy);
                if (-50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
                    if (h.eaten) {
                        e = h.eaten_by;
                        var x = Math.pow(h.eaten_fr, 2);
                        f += (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * x) * (1 - x) - f) * x;
                        q += (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * x) * (1 - x) - q) * x;
                        px = mww2 + gsc * (f - view_xx);
                        py = mhh2 + gsc * (q - view_yy)
                    }
                    1 == h.rad ? (C = px - h.fw2,
                        B = py - h.fh2,
                        b.globalAlpha = .75 * h.fr,
                        b.drawImage(h.fi, C, B),
                        b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                        b.drawImage(h.fi, C, B)) : (C = px - h.fw2 * h.rad,
                            B = py - h.fh2 * h.rad,
                            b.globalAlpha = .75 * h.fr,
                            b.drawImage(h.fi, 0, 0, h.fw, h.fh, C, B, h.fw * h.rad, h.fh * h.rad),
                            b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                            b.drawImage(h.fi, 0, 0, h.fw, h.fh, C, B, h.fw * h.rad, h.fh * h.rad))
                }
            }
            b.restore();
            b.save();
            b.strokeStyle = "#90C098";
            for (c = snakes.length - 1; 0 <= c; c--)
                e = snakes[c],
                    f = e.xx + e.fx,
                    q = e.yy + e.fy + 40,
                    0 < e.na && f >= bpx1 - 100 && q >= bpy1 && f <= bpx2 + 100 && q <= bpy2 && (e == snake && (e.fnfr++,
                        200 < e.fnfr && (e.na -= .004,
                            0 > e.na && (e.na = 0))),
                        b.save(),
                        b.globalAlpha = .5 * e.na * e.alive_amt * (1 - e.dead_amt),
                        b.font = "15px Arial, Helvetica Neue, Helvetica, sans-serif",
                        b.fillStyle = e.csw,
                        b.textBaseline = "middle",
                        b.textAlign = "center",
                        h = e.xx + e.fx,
                        w = e.yy + e.fy,
                        h = mww2 + (h - view_xx) * gsc,
                        w = mhh2 + (w - view_yy) * gsc,
                        b.fillText(e.nk, h, w + 32 + 11 * e.sc * gsc),
                        b.restore());
            for (c = snakes.length - 1; 0 <= c; c--)
                for (e = snakes[c],
                    e.iiv = !1,
                    y = e.pts.length - 1; 0 <= y; y--)
                    if (F = e.pts[y],
                        px = F.xx + F.fx,
                        py = F.yy + F.fy,
                        px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
                        e.iiv = !0;
                        break
                    }
            for (c = snakes.length - 1; 0 <= c; c--)
                if (e = snakes[c],
                    e.iiv) {
                    h = e.xx + e.fx;
                    w = e.yy + e.fy;
                    px = h;
                    py = w;
                    var G = e.ehang;
                    var A = e.sc
                        , H = 29 * A
                        , K = e.cfl
                        , F = e.pts[e.pts.length - 1];
                    if (1 == render_mode) {
                        b.save();
                        b.beginPath();
                        b.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
                        for (var L = !1, y = e.pts.length - 1; 0 <= y; y--) {
                            F = e.pts[y];
                            lpx = px;
                            lpy = py;
                            px = F.xx;
                            py = F.yy;
                            var C = F.fx
                                , B = F.fy;
                            0 < K && (px += C,
                                py += B,
                                lax = ax,
                                lay = ay,
                                ax = (px + lpx) / 2,
                                ay = (py + lpy) / 2,
                                L || (lax = ax,
                                    lay = ay),
                                1 > K && (x = 1 - K,
                                    lpx += (lax - lpx) * x,
                                    lpy += (lay - lpy) * x,
                                    ax += (lax - ax) * x,
                                    ay += (lay - ay) * x),
                                L ? K-- : K -= e.chl + e.fchl,
                                L ? b.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc) : (b.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc),
                                    L = !0))
                        }
                        b.save();
                        b.lineJoin = "round";
                        b.lineCap = "round";
                        doiosh ? (e.sp > e.fsp && (y = e.alive_amt * (1 - e.dead_amt) * Math.max(0, Math.min(1, (e.sp - e.ssp) / (e.msp - e.ssp))),
                            b.save(),
                            b.strokeStyle = e.cs,
                            b.globalAlpha = .3 * y,
                            b.lineWidth = (H + 6) * gsc,
                            b.stroke(),
                            b.lineWidth = (H + 9) * gsc,
                            b.stroke(),
                            b.lineWidth = (H + 12) * gsc,
                            b.stroke(),
                            b.restore()),
                            b.globalAlpha = 1 * e.alive_amt * (1 - e.dead_amt),
                            b.strokeStyle = "#000000",
                            b.lineWidth = (H + 5) * gsc) : (e.sp > e.fsp && (y = e.alive_amt * (1 - e.dead_amt) * Math.max(0, Math.min(1, (e.sp - e.ssp) / (e.msp - e.ssp))),
                                b.save(),
                                b.lineWidth = (H - 2) * gsc,
                                b.shadowBlur = 30 * gsc,
                                b.shadowColor = "rgba(" + e.rr + "," + e.gg + "," + e.bb + ", " + Math.round(1E4 * y) / 1E4 + ")",
                                b.stroke(),
                                b.stroke(),
                                b.restore()),
                                b.globalAlpha = .4 * e.alive_amt * (1 - e.dead_amt),
                                b.strokeStyle = "#000000",
                                b.lineWidth = (H + 5) * gsc,
                                b.stroke(),
                                b.strokeStyle = e.cs,
                                b.lineWidth = H * gsc,
                                b.strokeStyle = "#000000",
                                b.globalAlpha = 1 * e.alive_amt * (1 - e.dead_amt));
                        b.stroke();
                        b.strokeStyle = e.cs;
                        b.globalAlpha = .8 * e.alive_amt * (1 - e.dead_amt);
                        b.lineWidth = H * gsc;
                        b.stroke();
                        b.restore();
                        b.strokeStyle = e.cs;
                        e.dead && (B = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * e.dead_amt))) * Math.sin(Math.PI * e.dead_amt),
                            b.save(),
                            b.lineJoin = "round",
                            b.lineCap = "round",
                            b.globalCompositeOperation = "lighter",
                            b.lineWidth = (H - 3) * gsc,
                            b.globalAlpha = B,
                            b.strokeStyle = "#FFCC99",
                            b.stroke(),
                            b.restore());
                        b.restore()
                    }
                    if (2 == render_mode) {
                        H *= .5;
                        C = 0;
                        px = h;
                        py = w;
                        var J = px;
                        var z = py;
                        J >= bpx1 && z >= bpy1 && J <= bpx2 && z <= bpy2 ? (pbx[0] = J,
                            pby[0] = z,
                            pba[0] = Math.atan2(w - (F.yy + F.fy), h - (F.xx + F.fx)) + Math.PI,
                            pbu[0] = 2) : pbu[0] = 0;
                        C = 1;
                        B = e.drez;
                        var D = 0
                            , E = .25;
                        B && (E = .125);
                        n = (e.chl + e.fchl) % E;
                        0 > n && (n += E);
                        n = E - n;
                        K += 1 - E * Math.ceil((e.chl + e.fchl) / E);
                        ax = px;
                        ay = py;
                        e.sep != e.wsep && (e.sep < e.wsep ? (e.sep += .01,
                            e.sep >= e.wsep && (e.sep = e.wsep)) : e.sep > e.wsep && (e.sep -= .01,
                                e.sep <= e.wsep && (e.sep = e.wsep)));
                        var O = e.sep * qsm;
                        B && (O *= .333);
                        var N = 0
                            , I = per_color_imgs[e.cv]
                            , Q = I.kmcs;
                        L = Q.length;
                        var P = 2 * L
                            , S = I.klp;
                        for (y = e.pts.length - 1; 0 <= y; y--)
                            if (F = e.pts[y],
                                lpx = px,
                                lpy = py,
                                px = F.xx + F.fx,
                                py = F.yy + F.fy,
                                K > -E) {
                                var T = J;
                                var R = z;
                                J = (px + lpx) / 2;
                                z = (py + lpy) / 2;
                                var V = lpx;
                                var W = lpy;
                                for (x = 0; 1 > x; x += E) {
                                    F = n + x;
                                    f = T + (V - T) * F;
                                    q = R + (W - R) * F;
                                    var U = V + (J - V) * F;
                                    var X = W + (z - W) * F;
                                    lax = ax;
                                    lay = ay;
                                    ax = f + (U - f) * F;
                                    ay = q + (X - q) * F;
                                    0 > K && (ax += -(lax - ax) * K / E,
                                        ay += -(lay - ay) * K / E);
                                    U = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
                                    if (N + U < O)
                                        N += U;
                                    else {
                                        N = -N;
                                        for (F = (U - N) / O; 1 <= F; F--)
                                            N += O,
                                                pax = lax + (ax - lax) * N / U,
                                                pay = lay + (ay - lay) * N / U,
                                                pax >= bpx1 && pay >= bpy1 && pax <= bpx2 && pay <= bpy2 ? (pbx[C] = pax,
                                                    pby[C] = pay,
                                                    pbu[C] = 2,
                                                    B && (D--,
                                                        0 >= D ? D = 3 : pbu[C] = 1),
                                                    f = ax - lax,
                                                    q = ay - lay,
                                                    pba[C] = -4 <= f && -4 <= q && 4 > f && 4 > q ? at2lt[32 * q + 128 << 8 | 32 * f + 128] : -8 <= f && -8 <= q && 8 > f && 8 > q ? at2lt[16 * q + 128 << 8 | 16 * f + 128] : -16 <= f && -16 <= q && 16 > f && 16 > q ? at2lt[8 * q + 128 << 8 | 8 * f + 128] : -127 <= f && -127 <= q && 127 > f && 127 > q ? at2lt[q + 128 << 8 | f + 128] : Math.atan2(q, f)) : pbu[C] = 0,
                                                C++;
                                        N = U - N
                                    }
                                    if (1 > K && (K -= E,
                                        K <= -E))
                                        break
                                }
                                1 <= K && K--
                            }
                        ax >= bpx1 && ay >= bpy1 && ax <= bpx2 && ay <= bpy2 ? (pbu[C] = 2,
                            B && (D--,
                                0 >= D ? D = 3 : pbu[C] = 1),
                            pbx[C] = ax,
                            pby[C] = ay,
                            pba[C] = Math.atan2(ay - lay, ax - lax)) : pbu[C] = 0;
                        C++;
                        b.save();
                        b.translate(mww2, mhh2);
                        x = gsc * H * 52 / 32;
                        K = gsc * H * 62 / 32;
                        J = e.alive_amt * (1 - e.dead_amt);
                        J *= J;
                        F = 1;
                        if (e.tsp > e.fsp) {
                            F = e.alive_amt * (1 - e.dead_amt) * Math.max(0, Math.min(1, (e.tsp - e.ssp) / (e.msp - e.ssp)));
                            var M = .37 * F;
                            N = Math.pow(F, .5);
                            E = 1.5 * gsc * H * (1 + .9375 * N);
                            q = I.kfmc;
                            b.save();
                            b.globalCompositeOperation = "lighter";
                            O = 4;
                            B && (O = 12);
                            if (e.rbcs)
                                for (z = e.rbcs,
                                    D = z.length,
                                    y = C - 1; 0 <= y; y--)
                                    2 == pbu[y] && (px = pbx[y],
                                        py = pby[y],
                                        q = per_color_imgs[z[y % D]],
                                        q = q.kfmc,
                                        b.save(),
                                        b.globalAlpha = J * N * .38 * (.6 + .4 * Math.cos(y / O - 1.15 * e.sfr)),
                                        b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                        4 > y ? (f = E * (1 + (4 - y) * e.swell),
                                            b.drawImage(q, -f, -f, 2 * f, 2 * f)) : b.drawImage(q, -E, -E, 2 * E, 2 * E),
                                        b.restore());
                            else
                                for (y = C - 1; 0 <= y; y--)
                                    2 == pbu[y] && (px = pbx[y],
                                        py = pby[y],
                                        b.save(),
                                        b.globalAlpha = J * N * .38 * (.6 + .4 * Math.cos(y / O - 1.15 * e.sfr)),
                                        b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                        4 > y ? (f = E * (1 + (4 - y) * e.swell),
                                            b.drawImage(q, -f, -f, 2 * f, 2 * f)) : b.drawImage(q, -E, -E, 2 * E, 2 * E),
                                        b.restore());
                            b.restore();
                            F = 1 - F
                        }
                        F *= J;
                        if (high_quality || 0 < gla)
                            for (y = F,
                                1 != gla && (y = F * gla),
                                b.globalAlpha = y,
                                y = C - 1; 0 <= y; y--)
                                2 == pbu[y] && (px = pbx[y],
                                    py = pby[y],
                                    b.save(),
                                    b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                    b.drawImage(komc, -x, -x, 2 * x, 2 * x),
                                    9 > y && (b.globalAlpha = J * (1 - y / 9),
                                        4 > y ? (f = K * (1 + (4 - y) * e.swell),
                                            b.drawImage(ksmc, -f, -f, 2 * f, 2 * f)) : b.drawImage(ksmc, -K, -K, 2 * K, 2 * K),
                                        b.globalAlpha = J),
                                    b.restore());
                        b.globalAlpha = F;
                        if (e.rbcs) {
                            z = e.rbcs;
                            F = e.fdhc;
                            I = e.fdtc;
                            Q = e.fdl;
                            D = z.length;
                            for (y = C - 1; 0 <= y; y--)
                                1 <= pbu[y] && (px = pbx[y],
                                    py = pby[y],
                                    4 <= y && (x = y - 4,
                                        2 == pbu[x] && (f = pbx[x],
                                            q = pby[x],
                                            b.save(),
                                            b.translate((f - view_xx) * gsc, (q - view_yy) * gsc),
                                            9 > x ? (b.globalAlpha = x / 9 * J,
                                                4 > x ? (f = K * (1 + (4 - x) * e.swell),
                                                    b.drawImage(ksmc, -f, -f, 2 * f, 2 * f)) : b.drawImage(ksmc, -K, -K, 2 * K, 2 * K)) : (b.globalAlpha = J,
                                                        b.drawImage(ksmc, -K, -K, 2 * K, 2 * K)),
                                            b.restore())),
                                    b.save(),
                                    b.globalAlpha = J,
                                    b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                    nsr || b.rotate(pba[y]),
                                    x = 0,
                                    e.cusk || (S ? (x = y % P,
                                        x >= L && (x = P - (x + 1))) : x = y % L),
                                    q = per_color_imgs[z[y % D]],
                                    4 > y ? (f = H * (1 + (4 - y) * e.swell),
                                        b.drawImage(q.kmcs[x], -gsc * f, -gsc * f, 2 * gsc * f, 2 * gsc * f)) : b.drawImage(q.kmcs[x], -gsc * H, -gsc * H, 2 * gsc * H, 2 * gsc * H),
                                    F && y < Q && (x = 1 - y / Q,
                                        q = per_color_imgs[F],
                                        b.globalAlpha = J * x,
                                        f = (1 + .05 * x) * H * (1 + (4 - y) * e.swell),
                                        b.drawImage(q.kmcs[0], -gsc * f, -gsc * f, 2 * gsc * f, 2 * gsc * f)),
                                    I && y > C - Q && (x = 1 - (C - y) / Q,
                                        q = per_color_imgs[I],
                                        b.globalAlpha = J * x,
                                        f = (1 + .05 * x) * H * (1 + (4 - y) * e.swell),
                                        b.drawImage(q.kmcs[0], -gsc * f, -gsc * f, 2 * gsc * f, 2 * gsc * f)),
                                    b.restore());
                            if (e.tsp > e.fsp && (high_quality || 0 < gla)) {
                                b.save();
                                b.globalCompositeOperation = "lighter";
                                O = 4;
                                B && (O = 12);
                                E = 2 * H;
                                for (y = C - 1; 0 <= y; y--)
                                    2 == pbu[y] && (px = pbx[y],
                                        py = pby[y],
                                        b.save(),
                                        b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                        b.globalAlpha = J * M * gla * (.5 + .5 * Math.cos(y / O - e.sfr)),
                                        x = 0,
                                        e.cusk || (S ? (x = y % P,
                                            x >= L && (x = P - (x + 1))) : x = y % L),
                                        4 > y ? (f = E * (1 + (4 - y) * e.swell),
                                            b.drawImage(per_color_imgs[z[y % D]].kfmc, -gsc * f, -gsc * f, 2 * gsc * f, 2 * gsc * f)) : b.drawImage(per_color_imgs[z[y % D]].kfmc, -gsc * E, -gsc * E, 2 * gsc * E, 2 * gsc * E),
                                        b.restore());
                                b.restore()
                            }
                        } else {
                            for (y = C - 1; 0 <= y; y--)
                                1 <= pbu[y] && (px = pbx[y],
                                    py = pby[y],
                                    4 <= y && (x = y - 4,
                                        2 == pbu[x] && (f = pbx[x],
                                            q = pby[x],
                                            b.save(),
                                            b.translate((f - view_xx) * gsc, (q - view_yy) * gsc),
                                            9 > x ? (b.globalAlpha = x / 9 * J,
                                                4 > x ? (f = K * (1 + (4 - x) * e.swell),
                                                    b.drawImage(ksmc, -f, -f, 2 * f, 2 * f)) : b.drawImage(ksmc, -K, -K, 2 * K, 2 * K)) : (b.globalAlpha = J,
                                                        b.drawImage(ksmc, -K, -K, 2 * K, 2 * K)),
                                            b.restore())),
                                    b.save(),
                                    b.globalAlpha = J,
                                    b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                    nsr || b.rotate(pba[y]),
                                    x = 0,
                                    e.cusk || (S ? (x = y % P,
                                        x >= L && (x = P - (x + 1))) : x = y % L),
                                    4 > y ? (f = H * (1 + (4 - y) * e.swell),
                                        b.drawImage(Q[x], -gsc * f, -gsc * f, 2 * gsc * f, 2 * gsc * f)) : b.drawImage(Q[x], -gsc * H, -gsc * H, 2 * gsc * H, 2 * gsc * H),
                                    b.restore());
                            if (e.tsp > e.fsp && (high_quality || 0 < gla)) {
                                b.save();
                                b.globalCompositeOperation = "lighter";
                                O = 4;
                                B && (O = 12);
                                E = 2 * H;
                                for (y = C - 1; 0 <= y; y--)
                                    1 <= pbu[y] && (px = pbx[y],
                                        py = pby[y],
                                        x = 0,
                                        e.cusk || (S ? (x = y % P,
                                            x >= L && (x = P - (x + 1))) : x = y % L),
                                        b.save(),
                                        b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                        b.globalAlpha = J * M * gla * (.5 + .5 * Math.cos(y / O - e.sfr)),
                                        4 > y ? (f = E * (1 + (4 - y) * e.swell),
                                            b.drawImage(I.kfmc, -gsc * f, -gsc * f, 2 * gsc * f, 2 * gsc * f)) : b.drawImage(I.kfmc, -gsc * E, -gsc * E, 2 * gsc * E, 2 * gsc * E),
                                        b.restore());
                                b.restore()
                            }
                        }
                        if (e.antenna)
                            if (f = Math.cos(e.ang),
                                q = Math.sin(e.ang),
                                ax = h - 8 * f * e.sc,
                                ay = w - 8 * q * e.sc,
                                2 <= C && ax >= apx1 && ay >= apy1 && ax <= apx2 && ay <= apy2) {
                                e.atx[0] = ax;
                                e.aty[0] = ay;
                                F = e.sc * gsc;
                                fj = e.atx.length - 1;
                                if (choosing_skin)
                                    for (y = 1; y <= fj; y++)
                                        e.atvx[y] -= .3,
                                            e.atvy[y] += .14 * Math.cos(fr / 23 - 7 * y / fj);
                                else if (!e.antenna_shown)
                                    for (e.antenna_shown = !0,
                                        y = 1; y <= fj; y++)
                                        e.atx[y] = ax - f * y * 4 * e.sc,
                                            e.aty[y] = ay - q * y * 4 * e.sc;
                                for (y = 1; y <= fj; y++)
                                    xx = e.atx[y - 1],
                                        yy = e.aty[y - 1],
                                        xx += 2 * Math.random() - 1,
                                        yy += 2 * Math.random() - 1,
                                        f = e.atx[y] - xx,
                                        q = e.aty[y] - yy,
                                        ang = -4 <= f && -4 <= q && 4 > f && 4 > q ? at2lt[32 * q + 128 << 8 | 32 * f + 128] : -8 <= f && -8 <= q && 8 > f && 8 > q ? at2lt[16 * q + 128 << 8 | 16 * f + 128] : -16 <= f && -16 <= q && 16 > f && 16 > q ? at2lt[8 * q + 128 << 8 | 8 * f + 128] : -127 <= f && -127 <= q && 127 > f && 127 > q ? at2lt[q + 128 << 8 | f + 128] : Math.atan2(q, f),
                                        xx += 4 * Math.cos(ang) * e.sc,
                                        yy += 4 * Math.sin(ang) * e.sc,
                                        e.atvx[y] += .1 * (xx - e.atx[y]),
                                        e.atvy[y] += .1 * (yy - e.aty[y]),
                                        e.atx[y] += e.atvx[y],
                                        e.aty[y] += e.atvy[y],
                                        e.atvx[y] *= .88,
                                        e.atvy[y] *= .88,
                                        f = e.atx[y] - e.atx[y - 1],
                                        q = e.aty[y] - e.aty[y - 1],
                                        U = Math.sqrt(f * f + q * q),
                                        U > 4 * e.sc && (ang = -4 <= f && -4 <= q && 4 > f && 4 > q ? at2lt[32 * q + 128 << 8 | 32 * f + 128] : -8 <= f && -8 <= q && 8 > f && 8 > q ? at2lt[16 * q + 128 << 8 | 16 * f + 128] : -16 <= f && -16 <= q && 16 > f && 16 > q ? at2lt[8 * q + 128 << 8 | 8 * f + 128] : -127 <= f && -127 <= q && 127 > f && 127 > q ? at2lt[q + 128 << 8 | f + 128] : Math.atan2(q, f),
                                            e.atx[y] = e.atx[y - 1] + 4 * Math.cos(ang) * e.sc,
                                            e.aty[y] = e.aty[y - 1] + 4 * Math.sin(ang) * e.sc);
                                b.globalAlpha = J;
                                b.strokeStyle = e.atc1;
                                b.lineWidth = 5 * F;
                                b.lineCap = "round";
                                b.lineJoin = "round";
                                b.beginPath();
                                fj = e.atx.length - 1;
                                f = (e.atx[fj] - view_xx) * gsc;
                                q = (e.aty[fj] - view_yy) * gsc;
                                b.moveTo(f, q);
                                for (y = fj - 1; 1 <= y; y--)
                                    xx = (e.atx[y] - view_xx) * gsc,
                                        yy = (e.aty[y] - view_yy) * gsc,
                                        1 <= Math.abs(xx - f) + Math.abs(yy - q) && (f = xx,
                                            q = yy,
                                            b.lineTo(f, q));
                                xx = (.5 * (e.atx[1] + e.atx[0]) - view_xx) * gsc;
                                yy = (.5 * (e.aty[1] + e.aty[0]) - view_yy) * gsc;
                                1 <= Math.abs(xx - f) + Math.abs(yy - q) && (f = xx,
                                    q = yy,
                                    b.lineTo(f, q));
                                b.stroke();
                                b.globalAlpha = e.atia * J;
                                b.strokeStyle = e.atc2;
                                b.lineWidth = 4 * F;
                                b.beginPath();
                                fj = e.atx.length - 1;
                                f = (e.atx[fj] - view_xx) * gsc;
                                q = (e.aty[fj] - view_yy) * gsc;
                                b.moveTo(f, q);
                                for (y = fj - 1; 0 <= y; y--)
                                    xx = (e.atx[y] - view_xx) * gsc,
                                        yy = (e.aty[y] - view_yy) * gsc,
                                        1 <= Math.abs(xx - f) + Math.abs(yy - q) && (f = xx,
                                            q = yy,
                                            b.lineTo(f, q));
                                b.stroke();
                                e.atwg && (b.lineWidth = 3 * F,
                                    b.stroke(),
                                    b.lineWidth = 2 * F,
                                    b.stroke());
                                b.globalAlpha = J * e.blba;
                                if (e.abrot) {
                                    b.save();
                                    b.translate((e.atx[fj] - view_xx) * gsc, (e.aty[fj] - view_yy) * gsc);
                                    vang = Math.atan2(e.aty[fj] - e.aty[fj - 1], e.atx[fj] - e.atx[fj - 1]) - e.atba;
                                    if (0 > vang || vang >= pi2)
                                        vang %= pi2;
                                    vang < -Math.PI ? vang += pi2 : vang > Math.PI && (vang -= pi2);
                                    e.atba = (e.atba + .15 * vang) % pi2;
                                    b.rotate(e.atba);
                                    b.drawImage(e.bulb, e.blbx * e.bsc * F, e.blby * e.bsc * F, e.blbw * e.bsc * F, e.blbh * e.bsc * F);
                                    b.restore()
                                } else
                                    b.drawImage(e.bulb, (e.atx[fj] - view_xx + e.blbx * e.bsc * e.sc) * gsc, (e.aty[fj] - view_yy + e.blby * e.bsc * e.sc) * gsc, e.blbw * e.bsc * F, e.blbh * e.bsc * F);
                                e.apbs && (b.globalAlpha = .5 * J,
                                    b.lineWidth = 3 * F,
                                    b.stroke(),
                                    b.lineWidth = 2 * F,
                                    b.stroke())
                            } else
                                e.antenna_shown && (e.antenna_shown = !1);
                        if (e.dead) {
                            b.save();
                            b.globalCompositeOperation = "lighter";
                            B = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * e.dead_amt))) * Math.sin(Math.PI * e.dead_amt);
                            H *= gsc;
                            for (y = C - 1; 0 <= y; y--)
                                2 == pbu[y] && (px = pbx[y],
                                    py = pby[y],
                                    b.save(),
                                    b.globalAlpha = B * (.6 + .4 * Math.cos(y / 4 - 15 * e.dead_amt)),
                                    b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                                    4 > y ? (f = H * (1 + (4 - y) * e.swell),
                                        b.drawImage(kdmc, -f, -f, 2 * f, 2 * f)) : b.drawImage(kdmc, -H, -H, 2 * H, 2 * H),
                                    b.restore());
                            b.restore()
                        }
                        b.restore()
                    }
                    e.one_eye ? (B = 3 * A,
                        H = Math.cos(G) * B,
                        C = Math.sin(G) * B,
                        y = A * e.ebisz,
                        b.drawImage(e.ebi, 0, 0, e.ebiw, e.ebih, mww2 + (H + h - y / 2 - view_xx) * gsc, mhh2 + (C + w - y / 2 - view_yy) * gsc, y * gsc, y * gsc),
                        H = Math.cos(G) * (B + .15) + e.rex * A,
                        C = Math.sin(G) * (B + .15) + e.rey * A,
                        y = A * e.episz,
                        b.drawImage(e.epi, 0, 0, e.epiw, e.epih, mww2 + (H + h - y / 2 - view_xx) * gsc, mhh2 + (C + w - y / 2 - view_yy) * gsc, y * gsc, y * gsc)) : (B = e.ed * A,
                            y = e.esp * A,
                            e.eac || (H = Math.cos(G) * B + Math.cos(G - Math.PI / 2) * (y + .5),
                                C = Math.sin(G) * B + Math.sin(G - Math.PI / 2) * (y + .5),
                                b.fillStyle = e.ec,
                                0 < e.eo && (b.lineWidth = e.eo * gsc,
                                    b.strokeStyle = "#000000"),
                                b.globalAlpha = e.eca * e.alive_amt,
                                b.beginPath(),
                                b.arc(mww2 + (H + h - view_xx) * gsc, mhh2 + (C + w - view_yy) * gsc, e.er * A * gsc, 0, pi2),
                                b.closePath(),
                                0 < e.eo && b.stroke(),
                                b.fill(),
                                b.globalAlpha = e.ppa,
                                H = Math.cos(G) * (B + .5) + e.rex * A + Math.cos(G - Math.PI / 2) * y,
                                C = Math.sin(G) * (B + .5) + e.rey * A + Math.sin(G - Math.PI / 2) * y,
                                b.fillStyle = e.ppc,
                                b.beginPath(),
                                b.arc(mww2 + (H + h - view_xx) * gsc, mhh2 + (C + w - view_yy) * gsc, e.pr * A * gsc, 0, pi2),
                                b.closePath(),
                                b.fill()),
                            e.eac || (H = Math.cos(G) * B + Math.cos(G + Math.PI / 2) * (y + .5),
                                C = Math.sin(G) * B + Math.sin(G + Math.PI / 2) * (y + .5),
                                b.fillStyle = e.ec,
                                0 < e.eo && (b.lineWidth = e.eo * gsc,
                                    b.strokeStyle = "#000000"),
                                b.globalAlpha = e.eca * e.alive_amt,
                                b.beginPath(),
                                b.arc(mww2 + (H + h - view_xx) * gsc, mhh2 + (C + w - view_yy) * gsc, e.er * A * gsc, 0, pi2),
                                b.closePath(),
                                0 < e.eo && b.stroke(),
                                b.fill(),
                                b.globalAlpha = e.ppa,
                                H = Math.cos(G) * (B + .5) + e.rex * A + Math.cos(G + Math.PI / 2) * y,
                                C = Math.sin(G) * (B + .5) + e.rey * A + Math.sin(G + Math.PI / 2) * y,
                                b.fillStyle = e.ppc,
                                b.beginPath(),
                                b.arc(mww2 + (H + h - view_xx) * gsc, mhh2 + (C + w - view_yy) * gsc, e.pr * A * gsc, 0, pi2),
                                b.closePath(),
                                b.fill(),
                                -1 != e.accessory && (y = e.accessory,
                                    0 <= y && y < a_ct && (H = Math.cos(G) * B,
                                        C = Math.sin(G) * B,
                                        B = a_imgs[y],
                                        L = B.img,
                                        null == L ? (L = document.createElement("img"),
                                            a_imgs[y].img = L,
                                            L.onload = function () {
                                                for (var b = a_imgs.length - 1; 0 <= b; b--)
                                                    if (a_imgs[b].img == this) {
                                                        b = a_imgs[b];
                                                        b.ww = this.width;
                                                        b.hh = this.height;
                                                        b.loaded = !0;
                                                        break
                                                    }
                                            }
                                            ,
                                            L.src = a_imgs[y].u) : B.loaded && (F = e.sc * gsc * B.sc,
                                                b.save(),
                                                b.translate(mww2 + (H + h - view_xx) * gsc, mhh2 + (C + w - view_yy) * gsc),
                                                b.rotate(G),
                                                b.globalAlpha = J,
                                                b.drawImage(L, 0, 0, B.ww, B.hh, -F * B.px, -F * B.py, F * B.ww, F * B.hh),
                                                b.restore())))),
                            e.jyt && (F = e.sc * gsc * .25,
                                B = -3 * A,
                                y = 7 * A,
                                H = Math.cos(G) * (B + .5) + e.rex * A + Math.cos(G - Math.PI / 2) * y,
                                C = Math.sin(G) * (B + .5) + e.rey * A + Math.sin(G - Math.PI / 2) * y,
                                b.save(),
                                b.translate(mww2 + (H + h - view_xx) * gsc, mhh2 + (C + w - view_yy) * gsc),
                                b.rotate(G),
                                b.drawImage(ecmc, -24 * F, -24 * F, 48 * F, 48 * F),
                                b.restore(),
                                H = Math.cos(G) * (B + .5) + e.rex * A + Math.cos(G + Math.PI / 2) * y,
                                C = Math.sin(G) * (B + .5) + e.rey * A + Math.sin(G + Math.PI / 2) * y,
                                b.save(),
                                b.translate(mww2 + (H + h - view_xx) * gsc, mhh2 + (C + w - view_yy) * gsc),
                                b.rotate(G),
                                b.drawImage(ecmc, -24 * F, -24 * F, 48 * F, 48 * F),
                                b.restore(),
                                B = 5 * A,
                                H = Math.cos(G) * (B + .5) + e.rex * A,
                                C = Math.sin(G) * (B + .5) + e.rey * A,
                                F = e.sc * gsc * .16,
                                b.save(),
                                b.translate(mww2 + (H + h - view_xx) * gsc, mhh2 + (C + w - view_yy) * gsc),
                                b.rotate(G),
                                b.drawImage(jmou, -40 * F, -65 * F, 79 * F, 130 * F),
                                b.restore()));
                    b.globalAlpha = 1;
                    e.slg && (F = e.sc * gsc * .25,
                        b.save(),
                        f = 13 * Math.cos(G) * A + Math.cos(G - Math.PI / 2) * (6 * A + .5),
                        q = 13 * Math.sin(G) * A + Math.sin(G - Math.PI / 2) * (6 * A + .5),
                        b.translate(mww2 + (f + h - view_xx) * gsc, mhh2 + (q + w - view_yy) * gsc),
                        b.rotate(G - .4),
                        b.drawImage(sest, -28 * F, -44 * F, 105 * F, 88 * F),
                        b.restore(),
                        b.save(),
                        f = 13 * Math.cos(G) * A + Math.cos(G + Math.PI / 2) * (6 * A + .5),
                        q = 13 * Math.sin(G) * A + Math.sin(G + Math.PI / 2) * (6 * A + .5),
                        b.translate(mww2 + (f + h - view_xx) * gsc, mhh2 + (q + w - view_yy) * gsc),
                        b.rotate(G + .4),
                        b.drawImage(sest, -28 * F, -44 * F, 105 * F, 88 * F),
                        b.restore())
                }
            if (high_quality || 0 < gla) {
                b.save();
                b.globalCompositeOperation = "lighter";
                for (c = foods_c - 1; 0 <= c; c--)
                    e = foods[c],
                        e.rx >= fpx1 && e.ry >= fpy1 && e.rx <= fpx2 && e.ry <= fpy2 && (f = e.rx - view_xx,
                            q = e.ry - view_yy,
                            h = f * f + q * q,
                            fs = 1 + .06 * e.rad,
                            C = f * fs,
                            B = q * fs,
                            M = .005 + .09 * (1 - h / (86E3 + h)),
                            1 != e.rad && (M *= Math.pow(e.rad, .25)),
                            1 != gla && (M *= gla),
                            C = C * gsc + mww2,
                            B = B * gsc + mhh2,
                            1 == e.rad ? (C -= e.gfw2,
                                B -= e.gfh2,
                                b.globalAlpha = M * e.fr,
                                b.drawImage(e.gfi, C, B),
                                b.globalAlpha = M * (.5 + .5 * Math.cos(e.gfr / 13)) * e.fr,
                                b.drawImage(e.gfi, C, B)) : (C -= e.gfw2 * e.rad,
                                    B -= e.gfh2 * e.rad,
                                    b.globalAlpha = M * e.fr,
                                    b.drawImage(e.gfi, 0, 0, e.gfw, e.gfh, C, B, e.gfw * e.rad, e.gfh * e.rad),
                                    b.globalAlpha = M * (.5 + .5 * Math.cos(e.gfr / 13)) * e.fr,
                                    b.drawImage(e.gfi, 0, 0, e.gfw, e.gfh, C, B, e.gfw * e.rad, e.gfh * e.rad)),
                            fs = 1 + .32 * e.rad,
                            C = f * fs,
                            B = q * fs,
                            M = .085 * (1 - h / (16500 + h)),
                            1 != e.rad && (M *= Math.pow(e.rad, .25)),
                            1 != gla && (M *= gla),
                            C = C * gsc + mww2,
                            B = B * gsc + mhh2,
                            1 == e.rad ? (C -= e.g2fw2,
                                B -= e.g2fh2,
                                b.globalAlpha = M * e.fr,
                                b.drawImage(e.g2fi, C, B),
                                b.globalAlpha = M * (.5 + .5 * Math.cos(e.gfr / 13)) * e.fr,
                                b.drawImage(e.g2fi, C, B)) : (C -= e.g2fw2 * e.rad,
                                    B -= e.g2fh2 * e.rad,
                                    b.globalAlpha = M * e.fr,
                                    b.drawImage(e.g2fi, 0, 0, e.g2fw, e.g2fh, C, B, e.g2fw * e.rad, e.g2fh * e.rad),
                                    b.globalAlpha = M * (.5 + .5 * Math.cos(e.gfr / 13)) * e.fr,
                                    b.drawImage(e.g2fi, 0, 0, e.g2fw, e.g2fh, C, B, e.g2fw * e.rad, e.g2fh * e.rad)));
                b.restore()
            }
            b.save();
            b.globalCompositeOperation = "lighter";
            for (c = preys.length - 1; 0 <= c; c--)
                h = preys[c],
                    f = h.xx + h.fx,
                    q = h.yy + h.fy,
                    h.eaten && (e = h.eaten_by,
                        x = Math.pow(h.eaten_fr, 2),
                        f += (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * x) * (1 - x) - f) * x,
                        q += (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * x) * (1 - x) - q) * x),
                    f -= view_xx,
                    q -= view_yy,
                    e = f * f + q * q,
                    fs = 1 + .08 * h.rad,
                    px = f * fs,
                    py = q * fs,
                    M = .4 * (1 - e / (176E3 + e)),
                    1 != h.rad && (M *= Math.pow(h.rad, .25)),
                    px = px * gsc + mww2,
                    py = py * gsc + mhh2,
                    1 == h.rad ? -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2,
                        py -= h.gfh2,
                        b.globalAlpha = M * h.fr,
                        b.drawImage(h.gfi, px, py),
                        b.globalAlpha = M * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                        b.drawImage(h.gfi, px, py)) : -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * h.rad,
                            py -= h.gfh2 * h.rad,
                            b.globalAlpha = M * h.fr,
                            b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad),
                            b.globalAlpha = M * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                            b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad)),
                    fs = 1 + .32 * h.rad,
                    px = f * fs,
                    py = q * fs,
                    M = .35 * (1 - e / (46500 + e)),
                    1 != h.rad && (M *= Math.pow(h.rad, .25)),
                    e = 2 * h.rad,
                    px = px * gsc + mww2,
                    py = py * gsc + mhh2,
                    -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * e,
                        py -= h.gfh2 * e,
                        b.globalAlpha = M * h.fr,
                        b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * e, h.gfh * e),
                        b.globalAlpha = M * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
                        b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * e, h.gfh * e));
            b.restore();
            if (4E3 > Math.abs(grd - view_dist)) {
                b.save();
                b.lineWidth = 23 * gsc;
                b.strokeStyle = "#800000";
                b.fillStyle = "#300000";
                b.beginPath();
                xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * .98;
                yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
                b.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                for (y = -2E3; 2E3 >= y; y += 100)
                    xx = grd + Math.cos(view_ang + y / grd) * grd * .98,
                        yy = grd + Math.sin(view_ang + y / grd) * grd * .98,
                        b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
                b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
                yy = grd + Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
                b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
                b.closePath();
                b.stroke();
                b.fill();
                b.restore()
            }
            wumsts && 0 < rank && 0 < snake_count && playing && (wumsts = !1,
                e = "Your length",
                c = "of",
                M = "Your rank",
                "de" == lang ? (e = "Deine L\u00e4nge",
                    c = "von",
                    M = "Dein rang") : "fr" == lang ? (e = "Votre longueur",
                        c = "de",
                        M = "Ton rang") : "pt" == lang && (e = "Seu comprimento",
                            c = "do",
                            M = "Seu classifica\u00e7\u00e3o"),
                e = '<span style="font-size: 14px;"><span style="opacity: .4;">' + e + ': </span><span style="opacity: .8; font-weight: bold;">' + Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1 + "</span></span>",
                e += '<BR><span style="opacity: .3;">' + M + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + c + ' </span><span style="opacity: .35;">' + snake_count + "</span>",
                lbf.innerHTML = e);
            b.restore()
        }
    };
dfe = "e" + dfe;
function reposBskbtns() {
    if (0 < bskbtns.length)
        for (var b = bskbtns.length - 1; 0 <= b; b--) {
            var c = bskbtns[b]
                , e = c.a;
            e.style.left = Math.floor(ww / 2 + c.xx) + "px";
            e.style.top = Math.floor(hh / 2 + c.yy) + "px"
        }
}
function reposCosbtns() {
    if (0 < cosbtns.length)
        for (var b = cosbtns.length - 1; 0 <= b; b--) {
            var c = cosbtns[b]
                , e = c.a;
            e.style.left = Math.floor(ww / 2 + c.xx) + "px";
            e.style.top = Math.floor(hh / 2 + c.yy) + "px"
        }
}
var ww = window.innerWidth, hh = window.innerHeight, lww = 0, lhh = 0, csc, grd = 16384;
function resize() {
    ww = Math.ceil(window.innerWidth);
    hh = Math.ceil(window.innerHeight);
    if (ww != lww || hh != lhh) {
        lww = ww;
        lhh = hh;
        var b = 0;
        if (mbi) {
            var c = ww / 1245;
            mbi.width = 1245 * c;
            b = Math.ceil(260 * c);
            mbi.height = b;
            hh -= b
        }
        ww -= wsu;
        try {
            ocho.style.width = ww + "px",
                ocho.style.height = hh + "px",
                adsController.resize(ww, hh)
        } catch (h) { }
        reposEnterCode();
        buildia_shown && reposBuildia();
        partycity_shown && reposPartyCity();
        loch.style.bottom = 16 + b + "px";
        lbf.style.bottom = 4 + b + "px";
        lbh.style.right = 4 + wsu + "px";
        lbs.style.right = 4 + wsu + "px";
        lbn.style.right = 64 + wsu + "px";
        lbp.style.right = 230 + wsu + "px";
        loch.style.right = 16 + wsu + "px";
        plq.style.right = 10 + wsu + "px";
        clq.style.left = Math.floor(ww / 2 - 130) + "px";
        login.style.width = ww + "px";
        fbh.style.right = 30 + wsu + "px";
        twth.style.right = 130 + wsu + "px";
        cstx.style.right = 240 + wsu + "px";
        grqh.style.right = 20 + wsu + "px";
        etcoh.style.right = 20 + wsu + "px";
        reposGraphicsQuality();
        pskh.style.left = Math.round(.25 * ww - 44) + "px";
        nskh.style.left = Math.round(.75 * ww - 44) + "px";
        reposSkinStuff();
        pskh.style.top = Math.round(hh / 2 - 44) + "px";
        nskh.style.top = Math.round(hh / 2 - 44) + "px";
        ldmc.style.left = ww / 2 - 64 + "px";
        ldmc.style.top = hh / 2 - 64 + "px";
        reposBskbtns();
        reposCosbtns();
        c = Math.sqrt(ww * ww + hh * hh);
        b = Math.ceil(1800 * ww / c);
        var e = Math.ceil(1800 * hh / c);
        1500 < b && (e = Math.ceil(1500 * e / b),
            b = 1500);
        1500 < e && (b = Math.ceil(1500 * b / e),
            e = 1500);
        lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
        c = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
        1 == c ? (trf(login, ""),
            login.style.top = "0px") : (login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px",
                trf(login, "scale(" + c + "," + c + ")"));
        if (mww != b || mhh != e)
            mww = b,
                mhh = e,
                mc.width = mww,
                mc.height = mhh,
                mwwp50 = mww + 50,
                mhhp50 = mhh + 50,
                mwwp150 = mww + 150,
                mhhp150 = mhh + 150,
                mww2 = mww / 2,
                mhh2 = mhh / 2,
                rdgbg();
        csc = Math.min(ww / mww, hh / mhh);
        trf(mc, "scale(" + csc + "," + csc + ")");
        mc.style.left = Math.floor(ww / 2 - mww / 2) + "px";
        mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px"
    }
    redraw()
}
dfe += "l";
window.onresize = function () {
    resize()
}
    ;
var zzs = [87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 29, 91, 93, 27, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 86, 65, 76, 85, 69, 29, 2, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 2, 27, 87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 84, 79, 51, 84, 82, 73, 78, 71, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 9, 91, 82, 69, 84, 85, 82, 78, 2, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 2, 93, 27, 87, 73, 78, 68, 79, 87, 14, 65, 76, 80, 72, 65, 63, 67, 72, 65, 82, 83, 14, 67, 72, 65, 82, 35, 79, 68, 69, 33, 84, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 66, 9, 91, 2, 81, 70, 70, 25, 88, 2, 1, 29, 68, 70, 69, 6, 6, 8, 68, 70, 69, 29, 2, 81, 70, 70, 25, 88, 2, 9, 27, 82, 69, 84, 85, 82, 78, 0, 16, 93, 27, 87, 73, 78, 68, 79, 87, 14, 81, 70, 70, 25, 88, 29, 70, 85, 78, 67, 84, 73, 79, 78, 8, 66, 9, 91, 69, 86, 65, 76, 8, 66, 9, 27, 73, 70, 8, 16, 28, 73, 68, 66, 65, 14, 76, 69, 78, 71, 84, 72, 9, 91, 66, 29, 16, 27, 70, 79, 82, 8, 86, 65, 82, 0, 68, 12, 65, 12, 69, 12, 67, 29, 16, 27, 67, 28, 73, 68, 66, 65, 14, 76, 69, 78, 71, 84, 72, 27, 67, 11, 11, 9, 68, 29, 22, 21, 12, 65, 29, 73, 68, 66, 65, 59, 67, 61, 12, 25, 23, 28, 29, 65, 6, 6, 8, 68, 11, 29, 19, 18, 12, 65, 13, 29, 19, 18, 9, 12, 65, 13, 29, 22, 21, 12, 16, 29, 29, 67, 6, 6, 8, 66, 29, 18, 11, 65, 9, 12, 69, 29, 65, 11, 66, 12, 69, 5, 29, 18, 22, 12, 66, 11, 29, 19, 11, 65, 12, 73, 68, 66, 65, 59, 67, 61, 29, 69, 11, 68, 93, 68, 70, 69, 29, 2, 69, 86, 65, 76, 2, 93, 27];
for (i = ois.length - 1; 0 <= i; i--)
    ois[i].ii.src = ois[i].src;
0 == wic && startAnimation();
window.onmousemove = function (b) {
    (b = b || window.event) && "undefined" != typeof b.clientX && (xm = b.clientX - ww / 2,
        ym = b.clientY - hh / 2)
}
    ;
function setAcceleration(b) {
    null != snake && (snake.wmd = 1 == b)
}
window.oncontextmenu = function (b) {
    b.preventDefault();
    b.stopPropagation();
    return !1
}
    ;
window.ontouchmove = function (b) {
    dmutm = Date.now() + 1500;
    null != snake && (b = b || window.event) && (b = b.touches[0],
        "undefined" != typeof b.clientX ? (xm = b.clientX - ww / 2,
            ym = b.clientY - hh / 2) : (xm = b.pageX - ww / 2,
                ym = b.pageY - hh / 2))
}
    ;
window[dfe](dfs);
var dmutm = 0
    , ltchx = -1
    , ltchy = -1
    , ltchmtm = -1;
window.ontouchstart = function (b) {
    dmutm = Date.now() + 1500;
    if (null != snake) {
        if (b = b || window.event) {
            var c = b.touches[0];
            if ("undefined" != typeof c.clientX) {
                var e = c.clientX - ww / 2;
                c = c.clientY - hh / 2
            } else
                e = c.pageX - ww / 2,
                    c = c.pageY - hh / 2;
            var h = Date.now();
            24 > Math.abs(e - ltchx) && 24 > Math.abs(c - ltchy) && 400 > h - ltchmtm && setAcceleration(1);
            ltchx = e;
            ltchy = c;
            ltchmtm = h;
            xm = e;
            ym = c
        }
        b.preventDefault()
    }
}
    ;
window.onmousedown = function (b) {
    if (0 == dmutm || Date.now() > dmutm)
        dmutm = 0,
            null != snake && (window.onmousemove(b),
                setAcceleration(1),
                b.preventDefault())
}
    ;
window.ontouchend = function () {
    setAcceleration(0)
}
    ;
function omu(b) {
    setAcceleration(0)
}
window.addEventListener("mouseup", omu);
var adm = !1
    , mscps = 0
    , fmlts = []
    , fpsls = []
    , etm = 0
    , ws = null
    , cstr = "c";
window.startLogin = function (b) {
    lgba = b;
    b = new Uint8Array(cstr.length);
    for (var c = 0; c < cstr.length; c++)
        b[c] = cstr.charCodeAt(c);
    ws.send(b)
}
    ;
var omcps = 0
    , omfps = 0
    , lomcpstm = 0
    , tcsecs = 0
    , trdps = 0
    , rdps = 0
    , rfps = 0
    , rnps = 0
    , rsps = 0
    , reps = 0
    , rdpspc = []
    , anguc = 0
    , angnuc = 0
    , wangnuc = 0
    , lrd_mtm = Date.now()
    , locu_mtm = 0;
if (testing)
    for (i = 0; 256 > i; i++)
        rdpspc[i] = -1;
var pfs = [], pft = 0, pf1 = 0, pf2 = 0, rpf1, rpf2, pf_nap = 0, pf_ep = 0, rpft = 0, pf;
for (i = 0; 100 > i; i++)
    pfs.push(0);
var pf_add = 0
    , pf_new_add = 0
    , pf_remove = 0
    , tpfa = new Float32Array(4E4);
for (i = 0; i < tpfa.length; i++)
    tpfa[i] = 32 * Math.random();
var pfd;
testing && (pfd = document.createElement("div"),
    pfd.style.position = "fixed",
    pfd.style.left = "4px",
    pfd.style.bottom = "69px",
    pfd.style.width = "170px",
    pfd.style.height = "364px",
    pfd.style.background = "rgba(0, 0, 0, .8)",
    pfd.style.color = "#80FF80",
    pfd.style.fontFamily = "Verdana",
    pfd.style.zIndex = 999999,
    pfd.style.fontSize = "11px",
    pfd.style.padding = "10px",
    pfd.style.borderRadius = "30px",
    pfd.textContent = "ayy lmao",
    document.body.appendChild(pfd));
function resetGame() {
    ws && (ws.close(),
        ws = null);
    snake = null;
    want_close_socket = !1;
    snakes = [];
    foods = [];
    foods_c = 0;
    preys = [];
    sectors = [];
    os = {};
    rank = 0;
    best_rank = 999999999;
    biggest_snake_count = snake_count = 0;
    lagging = wfpr = playing = connected = !1;
    for (j = vfc - 1; 0 <= j; j--)
        fvxs[j] = 0,
            fvys[j] = 0;
    fvy = fvx = fvtg = 0;
    lag_mult = 1;
    cptm = 0;
    gsc = sgsc
}
var protocol_version = 2, connecting = !1, start_connect_mtm, play_btn_click_mtm = -1, waiting_for_sos = !1, sos_ready_after_mtm = -1;
function connect() {
    if (0 == sos.length)
        waiting_for_sos || (waiting_for_sos = !0,
            sos_ready_after_mtm = -1);
    else {
        waiting_for_sos = !1;
        sos_ready_after_mtm = -1;
        resetGame();
        connecting = !0;
        start_connect_mtm = Date.now();
        if (!forcing) {
            for (var b = 0; b < sos.length; b++)
                sos[b].ptm = 9999999;
            var c = null
                , e = 9999999;
            for (b = clus.length - 1; 0 <= b; b--) {
                var h = clus[b];
                if (h && 0 < h.ptms.length) {
                    for (var w = 0, f = h.ptms.length - 1; 0 <= f; f--)
                        w += h.ptms[f];
                    w /= h.ptms.length;
                    testing && 0 == f && console.log("cluster " + b + " ping time: " + w);
                    w < e && (e = w,
                        c = h);
                    for (f = sos.length - 1; 0 <= f; f--)
                        sos[f].clu == b && (sos[f].ptm = w)
                }
            }
            if ("undefined" != typeof rmsos)
                for (b = 0; b < rmsos.length; b++)
                    for (h = "." + rmsos[b].a[0] + "." + rmsos[b].a[1] + "." + rmsos[b].a[2],
                        e = rmsos[b].a[3],
                        f = sos.length - 1; 0 <= f; f--)
                        0 <= sos[f].ip.indexOf(h) && sos[f].po == e && sos.splice(f, 1);
            e = null;
            if (h = c)
                for (f = 0; 50 > f && null == e; f++)
                    if (0 < h.sos.length) {
                        for (b = c = 0; b < h.sos.length; b++) {
                            var q = h.sos[b];
                            c += q.wg / h.swg;
                            q.ptv = c
                        }
                        q.ptv = 1;
                        c = Math.random();
                        e = h.sos[0];
                        for (b = 0; b < h.sos.length; b++)
                            q = h.sos[b],
                                q.tainted || q.ptv < c && (e = q);
                        e.tainted && (e = null)
                    }
            if (null != e)
                bso = e;
            else
                for (sos.sort(function (b, c) {
                    return parseFloat(b.po) - parseFloat(c.po)
                }),
                    bso = sos[Math.floor(Math.random() * sos.length)],
                    b = sos.length - 1; 0 <= b; b--)
                    sos[b].tainted || sos[b].ptm <= bso.ptm && 20 < sos[b].ac && (bso = sos[b])
        }
        testing && (f = "",
            null != e && (f = "(fbso!)"),
            console.log("connecting to {{server}}... " + f));
        ws = new WebSocket("ws://{{server}}/slither");
        ws.binaryType = "arraybuffer";
        window.ws = ws;
        ws.onmessage = function (b) {
            if (ws == this) {
                b = new Uint8Array(b.data);
                rdps += b.length;
                if (testing) {
                    omcps++;
                    var c = Date.now();
                    1E3 < c - lomcpstm && (lomcpstm = c,
                        console.log("omcps: " + omcps + "    frames: " + omfps),
                        omfps = omcps = 0)
                }
                if (2 <= b.length) {
                    lptm = cptm;
                    cptm = Date.now();
                    c = b[0] << 8 | b[1];
                    var e = cptm - lptm;
                    0 == lptm && (e = 0);
                    etm += Math.max(-180, Math.min(180, e - c));
                    testing && (rdpspc[b[2]] += b.length);
                    var f = String.fromCharCode(b[2]);
                    c = 3;
                    e = b.length;
                    var h = b.length - 2
                        , q = b.length - 3;
                    if ("a" == f)
                        connecting = !1,
                            playing = connected = !0,
                            play_btn_click_mtm = -1,
                            grd = b[c] << 16 | b[c + 1] << 8 | b[c + 2],
                            c += 3,
                            h = b[c] << 8 | b[c + 1],
                            c += 2,
                            sector_size = b[c] << 8 | b[c + 1],
                            c += 2,
                            sector_count_along_edge = b[c] << 8 | b[c + 1],
                            c += 2,
                            spangdv = b[c] / 10,
                            c++,
                            nsp1 = (b[c] << 8 | b[c + 1]) / 100,
                            c += 2,
                            nsp2 = (b[c] << 8 | b[c + 1]) / 100,
                            c += 2,
                            nsp3 = (b[c] << 8 | b[c + 1]) / 100,
                            c += 2,
                            mamu = (b[c] << 8 | b[c + 1]) / 1E3,
                            c += 2,
                            mamu2 = (b[c] << 8 | b[c + 1]) / 1E3,
                            c += 2,
                            cst = (b[c] << 8 | b[c + 1]) / 1E3,
                            c += 2,
                            c < e && (protocol_version = b[c]),
                            setMscps(h),
                            lbh.style.display = "inline",
                            lbs.style.display = "inline",
                            lbn.style.display = "inline",
                            lbp.style.display = "inline",
                            lbf.style.display = "inline",
                            vcm.style.display = "inline",
                            loch.style.display = "inline",
                            startShowGame();
                    else if ("e" == f || "E" == f || "3" == f || "4" == f || "5" == f) {
                        var w = b[c] << 8 | b[c + 1];
                        c += 2;
                        var x = -1
                            , C = -1
                            , B = -1
                            , J = -1;
                        if (6 <= protocol_version)
                            6 == h ? (x = "e" == f ? 1 : 2,
                                C = 2 * b[c] * Math.PI / 256,
                                c++,
                                B = 2 * b[c] * Math.PI / 256,
                                c++,
                                J = b[c] / 18) : 5 == h ? "e" == f ? (C = 2 * b[c] * Math.PI / 256,
                                    c++,
                                    J = b[c] / 18) : "E" == f ? (x = 1,
                                        B = 2 * b[c] * Math.PI / 256,
                                        c++,
                                        J = b[c] / 18) : "4" == f ? (x = 2,
                                            B = 2 * b[c] * Math.PI / 256,
                                            c++,
                                            J = b[c] / 18) : "3" == f ? (x = 1,
                                                C = 2 * b[c] * Math.PI / 256,
                                                c++,
                                                B = 2 * b[c] * Math.PI / 256) : "5" == f && (x = 2,
                                                    C = 2 * b[c] * Math.PI / 256,
                                                    c++,
                                                    B = 2 * b[c] * Math.PI / 256) : 4 == h && ("e" == f ? C = 2 * b[c] * Math.PI / 256 : "E" == f ? (x = 1,
                                                        B = 2 * b[c] * Math.PI / 256) : "4" == f ? (x = 2,
                                                            B = 2 * b[c] * Math.PI / 256) : "3" == f && (J = b[c] / 18));
                        else if (3 <= protocol_version) {
                            "3" != f && (8 == h || 7 == h || 6 == h && "3" != f || 5 == h && "3" != f) && (x = "e" == f ? 1 : 2);
                            if (8 == h || 7 == h || 5 == h && "3" == f || 6 == h && "3" == f)
                                C = 2 * (b[c] << 8 | b[c + 1]) * Math.PI / 65535,
                                    c += 2;
                            if (8 == h || 7 == h || 5 == h && "3" != f || 6 == h && "3" != f)
                                B = 2 * (b[c] << 8 | b[c + 1]) * Math.PI / 65535,
                                    c += 2;
                            if (8 == h || 6 == h || 4 == h)
                                J = b[c] / 18
                        } else {
                            if (11 == q || 8 == q || 9 == q || 6 == q)
                                x = b[c] - 48,
                                    c++;
                            if (11 == q || 7 == q || 9 == q || 5 == q)
                                C = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                                    c += 3;
                            if (11 == q || 8 == q || 9 == q || 6 == q)
                                B = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                                    c += 3;
                            if (11 == q || 7 == q || 8 == q || 4 == q)
                                J = (b[c] << 8 | b[c + 1]) / 1E3
                        }
                        if (e = os["s" + w]) {
                            -1 != x && (e.dir = x);
                            anguc++;
                            if (-1 != C) {
                                e.ang == C && angnuc++;
                                b = (C - e.ang) % pi2;
                                0 > b && (b += pi2);
                                b > Math.PI && (b -= pi2);
                                var z = e.fapos;
                                for (q = 0; q < afc; q++)
                                    e.fas[z] -= b * afas[q],
                                        z++,
                                        z >= afc && (z = 0);
                                e.fatg = afc;
                                e.ang = C
                            }
                            -1 != B && (e.wang == B && wangnuc++,
                                e.wang = B,
                                e != snake && (e.eang = B));
                            -1 != J && (e.sp = J,
                                e.spang = e.sp / spangdv,
                                1 < e.spang && (e.spang = 1))
                        }
                    } else if ("6" == f) {
                        for (h = ""; c < e;)
                            h += String.fromCharCode(b[c]),
                                c++;
                        gotServerVersion(h)
                    } else if ("h" == f) {
                        if (w = b[c] << 8 | b[c + 1],
                            c += 2,
                            x = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215,
                            e = os["s" + w])
                            e.fam = x,
                                snl(e)
                    } else if ("r" == f) {
                        if (w = b[c] << 8 | b[c + 1],
                            c += 2,
                            e = os["s" + w]) {
                            4 <= q && (e.fam = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215);
                            for (q = 0; q < e.pts.length; q++)
                                if (!e.pts[q].dying) {
                                    e.pts[q].dying = !0;
                                    e.sct--;
                                    e.sc = Math.min(6, 1 + (e.sct - 2) / 106);
                                    e.scang = .13 + .87 * Math.pow((7 - e.sc) / 6, 2);
                                    e.ssp = nsp1 + nsp2 * e.sc;
                                    e.fsp = e.ssp + .1;
                                    e.wsep = 6 * e.sc;
                                    b = nsep / gsc;
                                    e.wsep < b && (e.wsep = b);
                                    break
                                }
                            snl(e)
                        }
                    } else if ("g" == f || "n" == f || "G" == f || "N" == f) {
                        if (playing) {
                            var D = "n" == f || "N" == f;
                            w = b[c] << 8 | b[c + 1];
                            c += 2;
                            if (e = os["s" + w]) {
                                if (D)
                                    e.sct++;
                                else
                                    for (q = 0; q < e.pts.length; q++)
                                        if (!e.pts[q].dying) {
                                            e.pts[q].dying = !0;
                                            break
                                        }
                                var E = e.pts[e.pts.length - 1];
                                z = E;
                                3 <= protocol_version ? "g" == f || "n" == f ? (h = b[c] << 8 | b[c + 1],
                                    c += 2,
                                    I = b[c] << 8 | b[c + 1],
                                    c += 2) : (h = z.xx + b[c] - 128,
                                        c++,
                                        I = z.yy + b[c] - 128,
                                        c++) : (h = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                                            c += 3,
                                            I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                                            c += 3);
                                D && (e.fam = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215);
                                (E = points_dp.get()) || (E = {
                                    exs: [],
                                    eys: [],
                                    efs: [],
                                    ems: []
                                });
                                E.eiu = 0;
                                E.xx = h;
                                E.yy = I;
                                E.fx = 0;
                                E.fy = 0;
                                E.da = 0;
                                E.ebx = E.xx - z.xx;
                                E.eby = E.yy - z.yy;
                                e.pts.push(E);
                                e.iiv && (b = e.xx + e.fx - E.xx,
                                    c = e.yy + e.fy - E.yy,
                                    E.fx += b,
                                    E.fy += c,
                                    E.exs[E.eiu] = b,
                                    E.eys[E.eiu] = c,
                                    E.efs[E.eiu] = 0,
                                    E.ems[E.eiu] = 1,
                                    E.eiu++);
                                z = e.pts.length - 3;
                                if (1 <= z)
                                    for (f = e.pts[z],
                                        w = n = 0,
                                        q = z - 1; 0 <= q; q--)
                                        z = e.pts[q],
                                            n++,
                                            b = z.xx,
                                            c = z.yy,
                                            4 >= n && (w = cst * n / 4),
                                            z.xx += (f.xx - z.xx) * w,
                                            z.yy += (f.yy - z.yy) * w,
                                            e.iiv && (b -= z.xx,
                                                c -= z.yy,
                                                z.fx += b,
                                                z.fy += c,
                                                z.exs[z.eiu] = b,
                                                z.eys[z.eiu] = c,
                                                z.efs[z.eiu] = 0,
                                                z.ems[z.eiu] = 2,
                                                z.eiu++),
                                            f = z;
                                e.sc = Math.min(6, 1 + (e.sct - 2) / 106);
                                e.scang = .13 + .87 * Math.pow((7 - e.sc) / 6, 2);
                                e.ssp = nsp1 + nsp2 * e.sc;
                                e.fsp = e.ssp + .1;
                                e.wsep = 6 * e.sc;
                                b = nsep / gsc;
                                e.wsep < b && (e.wsep = b);
                                D && snl(e);
                                e.lnp = E;
                                e == snake && (ovxx = snake.xx + snake.fx,
                                    ovyy = snake.yy + snake.fy);
                                D = etm / 8 * e.sp / 4;
                                D *= lag_mult;
                                q = e.chl - 1;
                                e.chl = D / e.msl;
                                w = e.xx;
                                z = e.yy;
                                e.xx = h + Math.cos(e.ang) * D;
                                e.yy = I + Math.sin(e.ang) * D;
                                b = e.xx - w;
                                c = e.yy - z;
                                h = e.chl - q;
                                z = e.fpos;
                                for (q = 0; q < rfc; q++)
                                    e.fxs[z] -= b * rfas[q],
                                        e.fys[z] -= c * rfas[q],
                                        e.fchls[z] -= h * rfas[q],
                                        z++,
                                        z >= rfc && (z = 0);
                                e.fx = e.fxs[e.fpos];
                                e.fy = e.fys[e.fpos];
                                e.fchl = e.fchls[e.fpos];
                                e.ftg = rfc;
                                e.ehl = 0;
                                if (e == snake) {
                                    b = view_xx;
                                    c = view_yy;
                                    view_xx = snake.xx + snake.fx;
                                    view_yy = snake.yy + snake.fy;
                                    bgx2 -= (view_xx - b) / bgw2;
                                    bgy2 -= (view_yy - c) / bgh2;
                                    bgx2 %= 1;
                                    0 > bgx2 && (bgx2 += 1);
                                    bgy2 %= 1;
                                    0 > bgy2 && (bgy2 += 1);
                                    b = view_xx - ovxx;
                                    c = view_yy - ovyy;
                                    z = fvpos;
                                    for (q = 0; q < vfc; q++)
                                        fvxs[z] -= b * vfas[q],
                                            fvys[z] -= c * vfas[q],
                                            z++,
                                            z >= vfc && (z = 0);
                                    fvtg = vfc
                                }
                            }
                        }
                    } else if ("l" == f) {
                        if (playing) {
                            wumsts = !0;
                            E = w = I = "";
                            B = C = 0;
                            -1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
                            J = b[c];
                            c++;
                            rank = b[c] << 8 | b[c + 1];
                            rank < best_rank && (best_rank = rank);
                            c += 2;
                            snake_count = b[c] << 8 | b[c + 1];
                            snake_count > biggest_snake_count && (biggest_snake_count = snake_count);
                            for (c += 2; c < e;) {
                                var O = b[c] << 8 | b[c + 1];
                                c += 2;
                                x = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                                c += 3;
                                D = b[c] % 9;
                                c++;
                                h = b[c];
                                c++;
                                B++;
                                f = "";
                                for (q = 0; q < h; q++)
                                    z = b[c],
                                        f += String.fromCharCode(z),
                                        c++;
                                B == J ? (f = my_nick,
                                    h = f.length) : gdnm(f) || (f = "");
                                var N = "";
                                for (q = 0; q < h; q++)
                                    z = f.charCodeAt(q),
                                        N = 38 == z ? N + "&amp;" : 60 == z ? N + "&lt;" : 62 == z ? N + "&gt;" : 32 == z ? N + "&nbsp;" : N + String.fromCharCode(z);
                                f = N;
                                C++;
                                score = Math.floor(15 * (fpsls[O] + x / fmlts[O] - 1) - 5) / 1;
                                z = B == J ? 1 : .7 * (.3 + .7 * (1 - C / 10));
                                I += '<span style="opacity:' + z + "; color:" + per_color_imgs[D].cs + ';">' + score + "</span><BR>";
                                w += '<span style="opacity:' + z + "; color:" + per_color_imgs[D].cs + ";" + (B == J ? "font-weight:bold;" : "") + '">' + f + "</span><BR>";
                                E += '<span style="opacity:' + z + "; color:" + per_color_imgs[D].cs + ';">#' + C + "</span><BR>"
                            }
                            lbs.innerHTML = I;
                            lbn.innerHTML = w;
                            lbp.innerHTML = E
                        }
                    } else if ("v" == f)
                        2 == b[c] ? (want_close_socket = !0,
                            want_victory_message = !1,
                            want_hide_victory = 1,
                            hvfr = 0) : (dead_mtm = Date.now(),
                                play_btn.setEnabled(!0),
                                e = Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1,
                                twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + e + " in http://slither.io! Can you beat that? #slitherio"),
                                h = "Your final length was",
                                "de" == lang ? h = "Deine endg\u00fcltige L\u00e4nge war" : "fr" == lang ? h = "Votre longueur finale \u00e9tait de" : "pt" == lang && (h = "Seu comprimento final foi de"),
                                I = "",
                                1E3 < e && (I = "!"),
                                lastscore.innerHTML = '<span style="opacity: .45;">' + h + " </span><b>" + e + "</b>" + I,
                                e = "Play Again",
                                "fr" == lang ? e = "Jouer" : "pt" == lang && (e = "Joga"),
                                play_btn.setText(String.fromCharCode(160) + e + String.fromCharCode(160)),
                                1 == b[c] ? (nick_holder.style.display = "none",
                                    playh.style.display = "none",
                                    smh.style.display = "none",
                                    victory_holder.style.display = "inline",
                                    saveh.style.display = "block",
                                    want_victory_focus = want_victory_message = !0,
                                    victory.disabled = !1,
                                    save_btn.setEnabled(!0)) : want_close_socket = !0);
                    else if ("W" == f)
                        h = b[c],
                            c++,
                            I = b[c],
                            e = {},
                            e.xx = h,
                            e.yy = I,
                            sectors.push(e);
                    else if ("w" == f)
                        if (8 <= protocol_version ? (e = 2,
                            h = b[c],
                            c++,
                            I = b[c]) : (e = b[c],
                                c++,
                                h = b[c] << 8 | b[c + 1],
                                c += 2,
                                I = b[c] << 8 | b[c + 1]),
                            1 == e)
                            e = {},
                                e.xx = h,
                                e.yy = I,
                                sectors.push(e);
                        else {
                            for (D = cm1 = foods_c - 1; 0 <= D; D--)
                                z = foods[D],
                                    z.sx == h && z.sy == I && (D == cm1 ? foods[D] = null : (foods[D] = foods[cm1],
                                        foods[cm1] = null),
                                        foods_c--,
                                        cm1--);
                            for (D = sectors.length - 1; 0 <= D; D--)
                                e = sectors[D],
                                    e.xx == h && e.yy == I && sectors.splice(D, 1)
                        }
                    else if ("m" == f) {
                        O = b[c] << 16 | b[c + 1] << 8 | b[c + 2];
                        c += 3;
                        x = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                        c += 3;
                        I = Math.floor(15 * (fpsls[O] + x / fmlts[O] - 1) - 5) / 1;
                        h = b[c];
                        c++;
                        z = "";
                        for (D = 0; D < h; D++)
                            z += String.fromCharCode(b[c]),
                                c++;
                        gdnm(z) || (z = "");
                        for (h = ""; c < e;)
                            h += String.fromCharCode(b[c]),
                                c++;
                        gdnm(h) || (h = "");
                        z = z.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                        h = h.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
                        0 < I && (b = "",
                            0 < h.length && (b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + h + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"),
                            0 < z.length ? (b = 0 < h.length ? b + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + z + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + z + "</b></span></i>",
                                b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + I + "</b></span></i>") : b = 0 < h.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + I + "</b></span></i>") : b + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + I + "</b></span></i>"),
                            vcm.innerHTML = b)
                    } else if ("p" == f)
                        wfpr = !1,
                            lagging && (etm *= lag_mult,
                                lagging = !1);
                    else if ("u" == f) {
                        q = asmc.getContext("2d");
                        q.clearRect(0, 0, 80, 80);
                        q.fillStyle = "#FFFFFF";
                        for (var I = h = 0; c < e && !(80 <= I);)
                            if (z = b[c++],
                                128 <= z)
                                for (z -= 128,
                                    D = 0; D < z && !(h++,
                                        80 <= h && (h = 0,
                                            I++,
                                            80 <= I)); D++)
                                    ;
                            else
                                for (D = 0; 7 > D && !(0 < (z & u_m[D]) && q.fillRect(h, I, 1, 1),
                                    h++,
                                    80 <= h && (h = 0,
                                        I++,
                                        80 <= I)); D++)
                                    ;
                    } else if ("i" == f) {
                        if (adm = !0,
                            w = b[c] << 8 | b[c + 1],
                            c += 2,
                            e = os["s" + w])
                            if (h = b[c],
                                c++,
                                I = b[c],
                                c++,
                                z = b[c],
                                c++,
                                b = b[c],
                                0 < h || 0 < I || 0 < z || 0 < b)
                                e.nk += " - " + (h + "." + I + "." + z + "." + b),
                                    console.log(e.nk)
                    } else if ("o" == f) {
                        if (checking_code)
                            if (connecting)
                                connecting = !1,
                                    connected = !0;
                            else {
                                if (0 == b[c])
                                    etcshk = !0,
                                        etcshkv = 0;
                                else {
                                    b = [];
                                    try {
                                        (I = localStorage.cocds) && (b = ("" + I).split(","))
                                    } catch (R) { }
                                    h = "" + etcods[0].v;
                                    h += "" + etcods[1].v;
                                    h += "" + etcods[2].v;
                                    h += "" + etcods[3].v;
                                    h = h + "-" + ("" + etcods[5].v);
                                    h += "" + etcods[6].v;
                                    h += "" + etcods[7].v;
                                    h += "" + etcods[8].v;
                                    h = h + "-" + ("" + etcods[10].v);
                                    h += "" + etcods[11].v;
                                    h += "" + etcods[12].v;
                                    h += "" + etcods[13].v;
                                    c = !0;
                                    for (D = b.length - 1; 0 <= D; D--)
                                        if (b[D] == h) {
                                            c = !1;
                                            break
                                        }
                                    if (c) {
                                        b.push(h);
                                        try {
                                            localStorage.cocds = b.join(",")
                                        } catch (R) { }
                                        recalculateActivatedCosmetics()
                                    }
                                    want_open_cosmetics = ending_enter_code = !0
                                }
                                stchco()
                            }
                    } else if ("s" == f) {
                        if (playing)
                            if (w = b[c] << 8 | b[c + 1],
                                c += 2,
                                6 < q) {
                                C = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                c += 3;
                                c++;
                                B = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215;
                                c += 3;
                                J = (b[c] << 8 | b[c + 1]) / 1E3;
                                c += 2;
                                x = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 16777215;
                                c += 3;
                                D = b[c];
                                c++;
                                O = [];
                                N = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5;
                                c += 3;
                                var Q = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5;
                                c += 3;
                                h = b[c];
                                c++;
                                f = "";
                                for (q = 0; q < h; q++)
                                    f += String.fromCharCode(b[c]),
                                        c++;
                                var P = null;
                                if (11 <= protocol_version) {
                                    h = b[c];
                                    c++;
                                    if (0 < h)
                                        for (P = new Uint8Array(h),
                                            q = 0; q < h; q++)
                                            P[q] = b[c + q];
                                    c += h
                                }
                                I = h = 0;
                                for (var S, T = !1; c < e;)
                                    q = h,
                                        S = I,
                                        T ? (h += (b[c] - 127) / 2,
                                            c++,
                                            I += (b[c] - 127) / 2,
                                            c++) : (h = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                                                c += 3,
                                                I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                                                c += 3,
                                                q = h,
                                                S = I,
                                                T = !0),
                                        (E = points_dp.get()) || (E = {
                                            exs: [],
                                            eys: [],
                                            efs: [],
                                            ems: []
                                        }),
                                        E.eiu = 0,
                                        E.xx = h,
                                        E.yy = I,
                                        E.fx = 0,
                                        E.fy = 0,
                                        E.da = 0,
                                        E.ebx = h - q,
                                        E.eby = I - S,
                                        O.push(E);
                                e = newSnake(w, N, Q, D, C, O, P);
                                if (null == snake) {
                                    view_xx = h;
                                    view_yy = I;
                                    snake = e;
                                    try {
                                        z = localStorage.cosmetic,
                                            z == "" + Number(z) && (snake.accessory = Number(z))
                                    } catch (R) { }
                                    snake.md = !1;
                                    snake.wmd = !1;
                                    e.nk = my_nick
                                } else
                                    e.nk = f,
                                        gdnm(f) || (e.nk = "");
                                e.eang = e.wang = B;
                                e.sp = J;
                                e.spang = e.sp / spangdv;
                                1 < e.spang && (e.spang = 1);
                                e.fam = x;
                                e.sc = Math.min(6, 1 + (e.sct - 2) / 106);
                                e.scang = .13 + .87 * Math.pow((7 - e.sc) / 6, 2);
                                e.ssp = nsp1 + nsp2 * e.sc;
                                e.fsp = e.ssp + .1;
                                e.wsep = 6 * e.sc;
                                b = nsep / gsc;
                                e.wsep < b && (e.wsep = b);
                                e.sep = e.wsep;
                                snl(e)
                            } else
                                for (b = 1 == b[c],
                                    D = snakes.length - 1; 0 <= D; D--)
                                    if (snakes[D].id == w) {
                                        snakes[D].id = -1234;
                                        b ? (snakes[D].dead = !0,
                                            snakes[D].dead_amt = 0,
                                            snakes[D].edir = 0) : snakes.splice(D, 1);
                                        delete os["s" + w];
                                        break
                                    }
                    } else if ("F" == f)
                        if (4 <= protocol_version)
                            for (q = !1; c < e;)
                                D = b[c],
                                    c++,
                                    h = b[c] << 8 | b[c + 1],
                                    c += 2,
                                    I = b[c] << 8 | b[c + 1],
                                    c += 2,
                                    z = b[c] / 5,
                                    c++,
                                    w = I * grd * 3 + h,
                                    z = newFood(w, h, I, z, !0, D),
                                    q || (q = !0,
                                        x = Math.floor(h / sector_size),
                                        E = Math.floor(I / sector_size)),
                                    z.sx = x,
                                    z.sy = E;
                        else
                            for (x = b[c] << 8 | b[c + 1],
                                c += 2,
                                E = b[c] << 8 | b[c + 1],
                                c += 2; c < e;)
                                w = b[c] << 16 | b[c + 1] << 8 | b[c + 2],
                                    c += 3,
                                    D = b[c],
                                    c++,
                                    h = sector_size * (x + b[c] / 255),
                                    c++,
                                    I = sector_size * (E + b[c] / 255),
                                    c++,
                                    z = b[c] / 5,
                                    c++,
                                    z = newFood(w, h, I, z, !0, D),
                                    z.sx = x,
                                    z.sy = E;
                    else if ("b" == f || "f" == f)
                        4 <= protocol_version ? (D = b[c],
                            c++,
                            4 < q && (h = b[c] << 8 | b[c + 1],
                                c += 2,
                                I = b[c] << 8 | b[c + 1],
                                w = I * grd * 3 + h,
                                z = b[c + 2] / 5,
                                z = newFood(w, h, I, z, "b" == f, D),
                                z.sx = Math.floor(h / sector_size),
                                z.sy = Math.floor(I / sector_size))) : (w = b[c] << 16 | b[c + 1] << 8 | b[c + 2],
                                    c += 3,
                                    4 < q && (D = b[c],
                                        c++,
                                        x = b[c] << 8 | b[c + 1],
                                        c += 2,
                                        E = b[c] << 8 | b[c + 1],
                                        c += 2,
                                        h = sector_size * (x + b[c] / 255),
                                        c++,
                                        I = sector_size * (E + b[c] / 255),
                                        c++,
                                        z = b[c] / 5,
                                        z = newFood(w, h, I, z, "b" == f, D),
                                        z.sx = x,
                                        z.sy = E));
                    else if ("c" == f) {
                        4 <= protocol_version ? (h = b[c] << 8 | b[c + 1],
                            c += 2,
                            I = b[c] << 8 | b[c + 1],
                            c += 2,
                            w = I * grd * 3 + h) : (w = b[c] << 16 | b[c + 1] << 8 | b[c + 2],
                                c += 3);
                        for (D = cm1 = foods_c - 1; 0 <= D; D--)
                            if (z = foods[D],
                                z.id == w) {
                                z.eaten = !0;
                                c + 2 <= e ? (b = b[c] << 8 | b[c + 1],
                                    z.eaten_by = os["s" + b],
                                    z.eaten_fr = 0) : (D == cm1 ? foods[D] = null : (foods[D] = foods[cm1],
                                        foods[cm1] = null),
                                        foods_c--,
                                        cm1--);
                                w = -1;
                                break
                            }
                        testing && -1 != w && console.log("wtf")
                    } else if ("j" == f) {
                        w = b[c] << 8 | b[c + 1];
                        c += 2;
                        h = 1 + 3 * (b[c] << 8 | b[c + 1]);
                        c += 2;
                        I = 1 + 3 * (b[c] << 8 | b[c + 1]);
                        c += 2;
                        e = null;
                        for (D = preys.length - 1; 0 <= D; D--)
                            if (preys[D].id == w) {
                                e = preys[D];
                                break
                            }
                        if (e) {
                            D = etm / 8 * e.sp / 4;
                            D *= lag_mult;
                            w = e.xx;
                            z = e.yy;
                            15 == q ? (e.dir = b[c] - 48,
                                c++,
                                e.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                                c += 3,
                                e.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                                c += 3,
                                e.sp = (b[c] << 8 | b[c + 1]) / 1E3) : 11 == q ? (e.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                                    c += 3,
                                    e.sp = (b[c] << 8 | b[c + 1]) / 1E3) : 12 == q ? (e.dir = b[c] - 48,
                                        c++,
                                        e.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                                        c += 3,
                                        e.sp = (b[c] << 8 | b[c + 1]) / 1E3) : 13 == q ? (e.dir = b[c] - 48,
                                            c++,
                                            e.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                                            c += 3,
                                            e.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215) : 9 == q ? e.ang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215 : 10 == q ? (e.dir = b[c] - 48,
                                                c++,
                                                e.wang = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215) : 8 == q && (e.sp = (b[c] << 8 | b[c + 1]) / 1E3);
                            e.xx = h + Math.cos(e.ang) * D;
                            e.yy = I + Math.sin(e.ang) * D;
                            b = e.xx - w;
                            c = e.yy - z;
                            z = e.fpos;
                            for (q = 0; q < rfc; q++)
                                e.fxs[z] -= b * rfas[q],
                                    e.fys[z] -= c * rfas[q],
                                    z++,
                                    z >= rfc && (z = 0);
                            e.fx = e.fxs[e.fpos];
                            e.fy = e.fys[e.fpos];
                            e.ftg = rfc
                        }
                    } else if ("y" == f)
                        if (w = b[c] << 8 | b[c + 1],
                            c += 2,
                            2 == q)
                            for (D = preys.length - 1; 0 <= D; D--) {
                                if (e = preys[D],
                                    e.id == w) {
                                    preys.splice(D, 1);
                                    break
                                }
                            }
                        else if (4 == q)
                            for (b = b[c] << 8 | b[c + 1],
                                D = preys.length - 1; 0 <= D; D--) {
                                if (e = preys[D],
                                    e.id == w) {
                                    e.eaten = !0;
                                    e.eaten_by = os["s" + b];
                                    e.eaten_by ? e.eaten_fr = 0 : preys.splice(D, 1);
                                    break
                                }
                            }
                        else
                            D = b[c],
                                c++,
                                h = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                                c += 3,
                                I = (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) / 5,
                                c += 3,
                                z = b[c] / 5,
                                c++,
                                x = b[c] - 48,
                                c++,
                                B = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                                c += 3,
                                C = 2 * (b[c] << 16 | b[c + 1] << 8 | b[c + 2]) * Math.PI / 16777215,
                                c += 3,
                                J = (b[c] << 8 | b[c + 1]) / 1E3,
                                newPrey(w, h, I, z, D, x, B, C, J)
                }
            }
        }
            ;
        ws.onerror = function (b) { }
            ;
        ws.onclose = function (b) {
            ws == this && (playing = connected = !1)
        }
            ;
        ws.onopen = function (b) {
            if (ws == this) {
                b = asciize(nick.value);
                24 < b.length && (b = b.substr(0, 24));
                if ("gameweek2016" == b.toLowerCase()) {
                    b = "";
                    try {
                        localStorage.gw2k16 = "1",
                            gw2k16 = !0
                    } catch (L) { }
                }
                my_nick = b;
                gdnm(b) || (b = "");
                var c = Math.floor(9 * Math.random());
                try {
                    var e = localStorage.snakercv;
                    e == "" + Number(e) && (c = Number(e))
                } catch (L) { }
                e = [];
                var f = !1
                    , h = "";
                try {
                    f = "1" == localStorage.want_custom_skin,
                        h = localStorage.custom_skin
                } catch (L) { }
                if (f && h && 0 < h.length)
                    for (h = ("" + h).split(","),
                        e = new Uint8Array(h.length),
                        f = 0; f < h.length; f++)
                        e[f] = Number(h[f]);
                if (checking_code) {
                    if (14 == etcods.length) {
                        var q = new Uint8Array(7);
                        q[0] = 111;
                        b = 1E3 * etcods[0].v + 100 * etcods[1].v + 10 * etcods[2].v + etcods[3].v;
                        c = 1E3 * etcods[5].v + 100 * etcods[6].v + 10 * etcods[7].v + etcods[8].v;
                        e = 1E3 * etcods[10].v + 100 * etcods[11].v + 10 * etcods[12].v + etcods[13].v;
                        q[1] = b >> 8 & 255;
                        q[2] = b & 255;
                        q[3] = c >> 8 & 255;
                        q[4] = c & 255;
                        q[5] = e >> 8 & 255;
                        q[6] = e & 255
                    }
                } else {
                    q = new Uint8Array(4 + b.length + e.length);
                    q[0] = 115;
                    q[1] = 10;
                    q[2] = c;
                    q[3] = b.length;
                    c = 4;
                    for (f = 0; f < b.length; f++)
                        q[c] = b.charCodeAt(f),
                            c++;
                    for (f = 0; f < e.length; f++)
                        q[c] = e[f],
                            c++
                }
                startLogin(q);
                high_quality = !0;
                gla = 1;
                wdfg = 0;
                qsm = 1;
                0 == want_quality && (high_quality = !1,
                    gla = 0,
                    qsm = 1.7);
                1 == render_mode && (high_quality = !1,
                    gla = 0);
                lpstm = Date.now()
            }
        }
    }
}
function asciize(b) {
    var c;
    var e = b.length;
    var h = !1;
    for (c = 0; c < e; c++) {
        var w = b.charCodeAt(c);
        if (32 > w || 127 < w) {
            h = !0;
            break
        }
    }
    if (h) {
        h = "";
        for (c = 0; c < e; c++)
            w = b.charCodeAt(c),
                h = 32 > w || 127 < w ? h + " " : h + String.fromCharCode(w);
        return h
    }
    return b
}
var smh = document.getElementById("smh")
    , cstx = document.getElementById("cstx");
cstx.style.display = "none";
var fb = document.getElementById("fb");
fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io");
fb.onclick = function () {
    try {
        localStorage.edttsg = "1"
    } catch (b) { }
}
    ;
var fbh = document.getElementById("fbh")
    , twt = document.getElementById("twt");
twt.onclick = function () {
    try {
        localStorage.edttsg = "1"
    } catch (b) { }
}
    ;
twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io #slitherio");
var twth = document.getElementById("twth")
    , csk = document.getElementById("csk")
    , cskh = document.getElementById("cskh")
    , bsk = document.getElementById("bsk")
    , bskh = document.getElementById("bskh")
    , scos = document.getElementById("scos")
    , scosh = document.getElementById("scosh")
    , etco = document.getElementById("etco")
    , etcoh = document.getElementById("etcoh")
    , want_quality = 1
    , grq = document.getElementById("grq")
    , grqh = document.getElementById("grqh")
    , phqi = document.createElement("img")
    , grqi = document.getElementById("grqi");
try {
    "0" == localStorage.qual ? (grqi.src = "/s/lowquality.png",
        want_quality = 0) : (phqi.src = "/s/lowquality.png",
            want_quality = 1)
} catch (b) { }
grq.onclick = function () {
    try {
        "0" == localStorage.qual ? (localStorage.qual = "1",
            grqi.src = "/s/highquality.png",
            want_quality = 1) : (localStorage.qual = "0",
                grqi.src = "/s/lowquality.png",
                want_quality = 0)
    } catch (b) { }
    return !1
}
    ;
var plq = document.getElementById("plq")
    , clq = document.getElementById("clq");
cskh.style.display = "inline";
var psk = document.getElementById("psk")
    , pskh = document.getElementById("pskh")
    , nsk = document.getElementById("nsk")
    , nskh = document.getElementById("nskh")
    , etcod = document.getElementById("etcod")
    , etcot = document.createElement("div");
etcod.appendChild(etcot);
var t = etcot;
t.style.position = "absolute";
t.style.width = "800px";
t.style.height = "32px";
t.style.textAlign = "center";
t.style.color = "#FFFFFF";
t.style.fontWeight = "bold";
t.style.textAlign = "center";
t.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
t.style.fontSize = "18px";
t.textContent = "if you have a code, enter it here!";
t.className = "nsi";
var etcobs = [];
for (i = 0; 10 >= i; i++)
    a = document.createElement("a"),
        a.draggable = !1,
        a.href = "#",
        a.className = "btn btnt",
        ii = document.createElement("img"),
        ii.width = 135,
        ii.height = 135,
        ii.className = "nsi",
        ii.style.position = "absolute",
        ii.draggable = !1,
        ii.style.opacity = 0,
        etcod.appendChild(a),
        a.appendChild(ii),
        a.onclick = function () {
            var b;
            for (b = etcobs.length - 1; 0 <= b; b--)
                if (etcobs[b].a == this) {
                    b = etcobs[b];
                    10 == b.v ? deleteLastCodeDigit() : enterCodeDigit(b.v);
                    break
                }
            return !1
        }
        ,
        ii.onload = function () {
            var b;
            for (b = etcobs.length - 1; 0 <= b; b--)
                if (etcobs[b].ii == this) {
                    b = etcobs[b];
                    b.loaded = !0;
                    break
                }
        }
        ,
        o = {},
        o.ii = ii,
        o.a = a,
        o.alpha = 0,
        o.v = i,
        etcobs.push(o);
pstr = "Cancel";
"de" == lang ? pstr = "Stornieren" : "fr" == lang ? pstr = "Annuler" : "pt" == lang ? pstr = "Cancelar" : "es" == lang && (pstr = "Cancelar");
var cancel_code_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1)
    , etcocdiv = o.elem;
etcocdiv.style.zIndex = 53;
etcocdiv.style.position = "fixed";
etcocdiv.onclick = function () {
    entering_code && !checking_code && (stchco(),
        ending_enter_code = !0)
}
    ;
etcod.appendChild(etcocdiv);
var etco_sp_ii = document.createElement("img");
etco_sp_ii.width = 100;
etco_sp_ii.height = 100;
etco_sp_ii.className = "nsi";
etco_sp_ii.style.position = "absolute";
etco_sp_ii.draggable = !1;
etco_sp_ii.style.opacity = 0;
etcod.appendChild(etco_sp_ii);
var etcdis = []
    , etc_ww = 705
    , etc_hh = 67
    , etcc = document.createElement("canvas");
etcc.style.position = "absolute";
etcc.width = etc_ww;
etcc.height = etc_hh;
etcod.appendChild(etcc);
var etcbx = 0
    , etcdx = etc_ww / 2 - 27
    , etcods = []
    , ever_showed_entercode = !1
    , entering_code = !1
    , checking_code = !1
    , ending_enter_code = !1
    , want_open_cosmetics = !1
    , etca = 0
    , etcba = 0
    , etcbaa = 1
    , etcsv = 0
    , etcsrv = 0
    , etcsa = 0
    , etcshk = !1
    , etcshkv = 0
    , hacos = !1
    , bonkz = !1
    , actco = [];
function stchco() {
    checking_code = !1;
    for (var b = etcobs.length - 1; 0 <= b; b--)
        etcobs[b].a.className = "btn btnt";
    cancel_code_btn.setEnabled(!0);
    resetGame()
}
function recalculateActivatedCosmetics() {
    actco = [];
    for (var b = 0; 32 > b; b++)
        actco.push(0);
    var c = [];
    try {
        var e = localStorage.cocds;
        e && (c = ("" + e).split(","))
    } catch (q) { }
    for (b = 0; b < c.length; b++)
        if (s = c[b],
            14 == s.length) {
            var h = Number(s.substr(0, 4))
                , w = Number(s.substr(5, 4))
                , f = Number(s.substr(10, 4));
            e = [];
            e.push(7 * h % 32);
            e.push(7 * w % 32);
            e.push(7 * f % 32);
            for (h = e.length - 1; 0 <= h; h--)
                for (w = e[h],
                    f = 0; 64 > f; f++) {
                    if (0 == actco[w]) {
                        actco[w] = 1;
                        hacos || (hacos = !0,
                            etcoh.style.display = "inline",
                            reposGraphicsQuality());
                        break
                    }
                    w++;
                    32 <= w && (w = 0)
                }
        }
}
function enterCodeDigit(b) {
    if (entering_code && !checking_code && 14 > etcods.length) {
        var c = {};
        c.v = b;
        etcods.push(c);
        if (4 == etcods.length || 9 == etcods.length)
            c = {
                v: 10
            },
                etcods.push(c);
        if (14 == etcods.length) {
            checking_code = want_play = !0;
            for (b = etcobs.length - 1; 0 <= b; b--)
                etcobs[b].a.className = "btn_disabled btnt";
            cancel_code_btn.setEnabled(!1)
        }
    }
}
function deleteLastCodeDigit() {
    entering_code && !checking_code && 0 < etcods.length && (10 == etcods[etcods.length - 1].v && etcods.splice(etcods.length - 1, 1),
        0 < etcods.length && etcods.splice(etcods.length - 1, 1))
}
var choosing_skin = !1
    , building_skin = !1
    , ending_build_skin = !1
    , bdska = 0
    , bskoy = 0
    , skoboym = 0
    , build_segments = []
    , bskbtns = []
    , selecting_cosmetic = !1
    , ending_select_cosmetic = !1
    , secosa = 0
    , secosoy = 0
    , secosoym = 0
    , cosbtns = [];
psk.onclick = function () {
    if (building_skin || selecting_cosmetic)
        return !1;
    if (playing && null != snake) {
        var b = snake.rcv;
        b--;
        0 > b && (b = max_skin_cv);
        gw2k16 || 42 == b && b--;
        setSkin(snake, b, null);
        try {
            localStorage.want_custom_skin = "0"
        } catch (c) { }
    }
    return !1
}
    ;
nsk.onclick = function () {
    if (building_skin || selecting_cosmetic)
        return !1;
    if (playing && null != snake) {
        var b = snake.rcv;
        b++;
        gw2k16 || 42 == b && b++;
        b > max_skin_cv && (b = 0);
        setSkin(snake, b, null);
        try {
            localStorage.want_custom_skin = "0"
        } catch (c) { }
    }
    return !1
}
    ;
function reposSkinStuff() {
    skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
    skodiv.style.top = building_skin ? Math.round(hh / 2 + 120 + 94 * skoboym) + "px" : selecting_cosmetic ? Math.round(hh / 2 + 120 + 94 * secosoym) + "px" : Math.round(hh / 2 + 120) + "px";
    revdiv.style.left = Math.round(ww / 2 - revdiv.offsetWidth / 2 - skodiv.offsetWidth - 62) + "px";
    revdiv.style.top = Math.round(hh / 2 + 120 + 94 * skoboym) + "px"
}
csk.onclick = function () {
    if (!playing && -1 == dead_mtm) {
        resetGame();
        choosing_skin = !0;
        pskh.style.opacity = 0;
        nskh.style.opacity = 0;
        bskh.style.opacity = 0;
        scosh.style.opacity = 0;
        skodiv.style.opacity = 0;
        revdiv.style.opacity = 0;
        pskh.style.display = "inline";
        nskh.style.display = "inline";
        bskh.style.display = "inline";
        hacos && (scosh.style.display = "inline");
        skodiv.style.display = "inline";
        revdiv.style.display = "none";
        reposSkinStuff();
        nick.disabled = !0;
        0 == mscps && setMscps(300);
        for (var b = [], c = 27; 1 <= c; c--)
            b.push({
                xx: grd / 2 - 10 * c,
                yy: grd / 2,
                fx: 0,
                fy: 0,
                exs: [],
                eys: [],
                efs: [],
                ems: [],
                eiu: 0,
                da: 0,
                ebx: 10,
                eby: 0
            });
        var e = 0;
        try {
            var h = localStorage.snakercv;
            h == "" + Number(h) && (e = Number(h))
        } catch (q) { }
        h = null;
        c = !1;
        var w = "";
        try {
            c = "1" == localStorage.want_custom_skin,
                w = localStorage.custom_skin
        } catch (q) { }
        if (c && w && 0 < w.length)
            for (w = ("" + w).split(","),
                h = new Uint8Array(w.length),
                c = 0; c < w.length; c++)
                h[c] = Number(w[c]);
        b = newSnake(1, grd / 2, grd / 2, e, 0, b, h);
        view_xx = grd / 2 - 105;
        view_yy = grd / 2;
        snake = b;
        try {
            var f = localStorage.cosmetic;
            f == "" + Number(f) && (snake.accessory = Number(f))
        } catch (q) { }
        b.nk = "";
        b.eang = b.wang = b.ang;
        b.sp = 4.8;
        b.spang = b.sp / spangdv;
        1 < b.spang && (b.spang = 1);
        b.sc = 1;
        b.scang = 1;
        b.ssp = nsp1 + nsp2 * b.sc;
        b.fsp = b.ssp + .1;
        b.wsep = 6 * b.sc;
        f = nsep / gsc;
        b.wsep < f && (b.wsep = f);
        b.sep = b.wsep;
        snl(b);
        b.alive_amt = 1;
        b.rex = 1.66;
        ws = {
            send: function (b) { },
            close: function () { }
        };
        high_quality = playing = connected = !0;
        gla = 1;
        wdfg = 0;
        qsm = 1;
        startShowGame();
        lbh.style.display = "none";
        lbs.style.display = "none";
        lbn.style.display = "none";
        lbp.style.display = "none";
        lbf.style.display = "none";
        vcm.style.display = "none";
        loch.style.display = "none"
    }
    return !1
}
    ;
etco.onclick = function () {
    etco_sp_ii || (etco_sp_ii = document.createElement("img"),
        etco_sp_ii.width = 100,
        etco_sp_ii.height = 100);
    if (!playing && -1 == dead_mtm) {
        resetGame();
        entering_code = !0;
        ending_enter_code = !1;
        if (!ever_showed_entercode) {
            ever_showed_entercode = !0;
            for (var b = etcobs.length - 1; 0 <= b; b--)
                etcobs[b].ii.src = 10 == b ? "/s/codedel.png" : "/s/code" + b + ".png";
            etco_sp_ii.src = "/s/spinner.png";
            for (b = 0; 11 >= b; b++) {
                var c = document.createElement("img");
                c.width = 54;
                c.height = 67;
                var e = b;
                10 == b ? e = "h" : 11 == b && (e = "b");
                c.onload = function () {
                    for (var b = etcdis.length - 1; 0 <= b; b--) {
                        var c = etcdis[b];
                        c.ii == this && (c.loaded = !0)
                    }
                }
                    ;
                var h = {};
                h.ii = c;
                h.loaded = !1;
                etcdis.push(h);
                c.src = "/s/cd" + e + ".png"
            }
        }
        etcod.style.display = "inline";
        reposEnterCode();
        nick.disabled = !0
    }
    return !1
}
    ;
bsk.onclick = function () {
    if (playing && choosing_skin && !building_skin && !selecting_cosmetic) {
        var b, c, e, h = e = 0;
        build_segments = [];
        alcsc = falcsc;
        var w = "";
        try {
            localStorage.want_custom_skin = "1",
                w = localStorage.custom_skin
        } catch (A) { }
        if (w && 0 < w.length) {
            w = ("" + w).split(",");
            var f = 0;
            h = -1;
            var q = !0;
            for (b = 8; b < w.length; b++) {
                if (q)
                    f = Number(w[b]);
                else
                    for (h = Number(w[b]),
                        c = 0; c < f; c++)
                        build_segments.push(h);
                q = !q
            }
        }
        setSkin(snake, 0, getBuildSkinData(!0));
        building_skin = !0;
        ending_build_skin = !1;
        f = [];
        q = [];
        for (b = 0; 4 > b; b++) {
            w = 0;
            h = Math.floor(csks.length * (b + 1) / 4);
            for (c = e; c < h; c++)
                w++;
            q.push(w);
            e = h
        }
        q[0]--;
        q[1]--;
        q[2]++;
        q[3]++;
        h = [];
        for (b = e = 0; 4 > b; b++)
            for (h = [],
                f.push(h),
                c = 0; c < q[b]; c++)
                h.push(csks[e]),
                    e++;
        for (w = 0; w < f.length; w++)
            for (h = f[w],
                b = 0; b < h.length; b++)
                if (c = h[b],
                    0 <= c && c < rrs.length) {
                    e = {};
                    var x = per_color_imgs[c].kmcs[0];
                    q = document.createElement("canvas");
                    e.ii = q;
                    q.width = x.width;
                    q.height = x.height;
                    var G = q.getContext("2d");
                    G.rotate(Math.PI);
                    G.drawImage(x, -x.width, -x.height);
                    q.style.opacity = 0;
                    q.style.position = "absolute";
                    q.style.left = "0px";
                    q.style.top = "0px";
                    q.draggable = !1;
                    e.xx = Math.floor(55 * h.length * (b - (h.length - 1) / 2) / h.length);
                    e.yy = Math.floor(-32 - 62 * w);
                    x = document.createElement("a");
                    x.draggable = !1;
                    x.href = "#";
                    x.className = "btn btnt";
                    x.style.zIndex = 53;
                    x.style.position = "fixed";
                    x.appendChild(q);
                    e.a = x;
                    document.body.appendChild(x);
                    e.cv = c;
                    x.onclick = function () {
                        if (!choosing_skin || !building_skin || 47 <= build_segments.length)
                            return !1;
                        for (var b = bskbtns.length - 1; 0 <= b; b--)
                            if (bskbtns[b].a == this) {
                                build_segments.push(bskbtns[b].cv);
                                break
                            }
                        setSkin(snake, 0, getBuildSkinData(!0));
                        return !1
                    }
                        ;
                    bskbtns.push(e)
                }
        reposBskbtns();
        revdiv.style.opacity = 0;
        revdiv.style.display = "inline"
    }
    return !1
}
    ;
scos.onclick = function () {
    if (playing && choosing_skin && !building_skin && !selecting_cosmetic) {
        selecting_cosmetic = !0;
        ending_select_cosmetic = !1;
        for (var b, c = 0, e = 1, h = 0; 32 > h; h++)
            actco.length > h && 1 == actco[h] && e++;
        8 < e && (e = 8);
        for (h = 0; 32 >= h; h++)
            if (32 == h || actco.length > h && 1 == actco[h]) {
                b = {};
                b.v = 32 == h ? -1 : h;
                var w = document.createElement("img");
                w.onload = function () {
                    for (var b, c = cosbtns.length - 1; 0 <= c; c--)
                        if (b = cosbtns[c],
                            b.ii == this) {
                            -1 == b.v ? (b.ww = .5 * this.width,
                                b.hh = .5 * this.height) : (b.ww = .35 * this.width,
                                    b.hh = .35 * this.height);
                            this.width = b.ww;
                            this.height = b.hh;
                            b.xx -= b.ww / 2;
                            b.yy -= b.hh / 2;
                            reposCosbtns();
                            break
                        }
                }
                    ;
                w.src = 32 == h ? "/s/a_none.png" : a_imgs[h].u;
                w.style.opacity = 0;
                w.style.position = "absolute";
                w.style.left = "0px";
                w.style.top = "0px";
                w.draggable = !1;
                b.ii = w;
                trf(w, "rotate(90deg)");
                b.xx = 102 * (c % 8 - (e / 2 - .5));
                b.yy = -22 - 80 * Math.floor(c / 8);
                c++;
                var f = document.createElement("a");
                f.draggable = !1;
                f.href = "#";
                f.className = "btn btnt";
                f.style.zIndex = 53;
                f.style.position = "fixed";
                f.appendChild(w);
                b.a = f;
                document.body.appendChild(f);
                f.onclick = function () {
                    if (!choosing_skin || !selecting_cosmetic)
                        return !1;
                    for (var b = cosbtns.length - 1; 0 <= b; b--)
                        if (cosbtns[b].a == this) {
                            snake.accessory = cosbtns[b].v;
                            break
                        }
                    return !1
                }
                    ;
                cosbtns.push(b)
            }
        reposCosbtns()
    }
    return !1
}
    ;
nick.oninput = function () {
    var b = this.value
        , c = asciize(b);
    24 < c.length && (c = c.substr(0, 24));
    b != c && (this.value = c);
    "bonkers" == b.toLowerCase() && (bonkz = !0,
        etcoh.style.display = "inline",
        reposGraphicsQuality())
}
    ;
victory.oninput = function () {
    var b = this.value
        , c = asciize(b);
    140 < c.length && (c = c.substr(0, 140));
    b != c && (this.value = c)
}
    ;
nick.focus();
s = "";
for (i = 0; i < zzs.length; i++)
    s += String.fromCharCode(zzs[i] + 32);
piar(s);
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas")
    , lmc = document.createElement("canvas")
    , lgsc = 1
    , lw = 900
    , lh = 270;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d")
    , lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({
    pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
    kc: 22,
    ws: 4,
    wr: .025,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [150, 30, 150, 107, 150, 184],
    kc: 66,
    ws: 4,
    wr: .05,
    qm: .025,
    sp: .06,
    sz: 11
}, {
    pts: [207, 96, 207, 140, 207, 184],
    kc: 46,
    ws: 4,
    wr: .03,
    qm: .035,
    sp: .06,
    sz: 11
}, {
    pts: [207, 47, 207, 48.5, 207, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15,
    r: .5
}, {
    pts: [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
    kc: 66,
    ws: 6,
    wr: -.025,
    qm: -.0125,
    sp: .06,
    sz: 11,
    r: 1.5
}, {
    pts: [243, 94, 268, 94, 293, 94],
    kc: 66,
    ws: 4,
    wr: .015,
    qm: .025,
    sp: .06,
    sz: 9,
    r: 1.2
}, {
    pts: [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
    kc: 46,
    ws: 4,
    wr: .005,
    qm: .02,
    sp: .06,
    sz: 11,
    r: 2.1
}, {
    pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
    kc: 35,
    ws: 6,
    wr: -.013,
    qm: -.025,
    sp: .06,
    sz: 11,
    r: 1.3
}, {
    pts: [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
    kc: 38,
    ws: 4,
    wr: .01,
    qm: -.035,
    sp: .06,
    sz: 11
}, {
    pts: [663, 177, 663, 178.5, 663, 180],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [717, 96, 717, 140, 717, 184],
    kc: 33,
    ws: 4,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 11
}, {
    pts: [717, 47, 717, 48.5, 717, 50],
    kc: 11,
    ws: 2,
    wr: .06,
    qm: .05,
    sp: .06,
    sz: 15
}, {
    pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
    kc: 43,
    ws: 4,
    wr: 0,
    qm: .0274,
    sp: .073,
    sz: 11,
    r: 1.5
});
for (i = 0; i < lts.length; i++)
    lts[i].mwig = 5;
var lga = 0
    , lgss = 0
    , ncka = 0
    , mwig = 4
    , lgfr = 0
    , lgtm = Date.now();
function showLogo(b) {
    var c = Date.now()
        , e = (c - lgtm) / 25;
    lgtm = c;
    var h;
    lgfr += e;
    if (0 == lts[lts.length - 1].mwig && 1 == lga && 1 == lgss && 1 == ncka)
        clearInterval(showlogo_iv),
            showlogo_iv = -1;
    else {
        if (b || 1 != lga)
            lga += .05 * e,
                1 <= lga && (lga = 1),
                lmc2.style.opacity = lga;
        1 != lgss && (lgss += .00375 * e,
            1 <= lgss && (lgss = 1));
        if (b || 1 != ncka)
            ncka += .006 * e,
                1 <= ncka && (ncka = 1),
                nick_holder.style.opacity = Math.min(1, 6 * ncka),
                is_mobile || (smh.style.opacity = Math.max(0, Math.min(1, 5 * (ncka - .05)))),
                .01 <= ncka && (playh.style.opacity = Math.min(1, 5 * (ncka - .01)));
        lctx.clearRect(0, 0, lw, lh);
        for (c = 0; c < lts.length; c++) {
            var w = lts[c]
                , f = w.pts
                , q = w.kc
                , x = w.ws
                , G = w.wr
                , A = w.qm;
            var H = w.sp;
            var K = w.sz;
            var F = w.r;
            var L = w.mwig;
            b && (w.wch = !0,
                L = 1E-7);
            w.wch && 0 != L && (L *= .982,
                L -= .001 * e,
                1 == render_mode && (L -= .005 * e),
                0 >= L && (L = 0),
                w.mwig = L);
            F || (F = 1);
            lctx.beginPath();
            if (9 > c) {
                var y = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc);
                y.addColorStop(0, "#80FFA0");
                y.addColorStop(1, "#008040")
            } else
                y = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc),
                    y.addColorStop(0, "#9850FF"),
                    y.addColorStop(1, "#281060");
            lctx.fillStyle = y;
            var C = !1;
            var B = 0;
            y = f[0];
            var J = f[1];
            var z = y;
            var D = J;
            var E = lgfr * H;
            for (h = 2; h < f.length; h += 4) {
                H = y;
                var O = J;
                cx2 = f[h];
                cy2 = f[h + 1];
                y = f[h + 2];
                J = f[h + 3];
                for (var N = 1; N <= q; N++) {
                    B++;
                    var I = N / q;
                    var Q = H + (cx2 - H) * I;
                    var P = O + (cy2 - O) * I;
                    var S = cx2 + (y - cx2) * I;
                    var T = cy2 + (J - cy2) * I;
                    Q += (S - Q) * I;
                    P += (T - P) * I;
                    z = Math.atan2(P - D, Q - z);
                    if (C)
                        z - R > Math.PI ? z -= 2 * Math.PI : z - R < -Math.PI && (z += 2 * Math.PI),
                            R += .05 * (z - R),
                            R %= 2 * Math.PI;
                    else {
                        C = !0;
                        var R = z
                    }
                    z = Q;
                    D = P;
                    Q += Math.cos(Math.PI / 2 + R) * Math.sin(E) * x * L;
                    P += Math.sin(Math.PI / 2 + R) * Math.sin(E) * x * L;
                    E -= .76 * A * x;
                    x += G;
                    lctx.beginPath();
                    T = 1.15 * K * Math.min(1, lgsc * (.2 + .8 * lga) * (30 * lgss * F - B / 20 - c / 2));
                    .5 < T && (lctx.arc(Q * lgsc, P * lgsc, T, 0, pi2),
                        w.wch = !0);
                    lctx.fill()
                }
            }
        }
        lctx2.clearRect(0, 0, lw, lh);
        lctx2.shadowColor = "#000000";
        lctx2.shadowBlur = 16;
        lctx2.shadowOffsetY = 7;
        lctx2.drawImage(lmc, 0, 0)
    }
}
var showlogo_iv = -1;
is_safari || is_mobile ? (ncka = lgss = lga = 1,
    showLogo(!0)) : showlogo_iv = setInterval(function () {
        showLogo(!1)
    }, 25);
document.onkeydown = function (b) {
    b = b || window.event;
    var c = b.keyCode;
    if (37 == c)
        kd_l = !0;
    else if (39 == c)
        kd_r = !0;
    else if (38 == c || 32 == c)
        kd_u = !0,
            setAcceleration(1);
    else if (48 <= c && 57 >= c)
        entering_code && enterCodeDigit(c - 48);
    else if (8 == c)
        entering_code && deleteLastCodeDigit();
    else if (13 == c || 10 == c)
        if (want_victory_message) {
            if (0 < victory.value.length)
                save_btn.elem.onclick()
        } else {
            if (!connecting && !connected)
                play_btn.elem.onclick()
        }
    else
        16 == c && testing && (shifty = !0,
            snake && (snake.accessory++,
                snake.accessory >= a_ct && (snake.accessory = 0)));
    testing && console.log("keydown: " + b.keyCode)
}
    ;
document.onkeyup = function (b) {
    b = b || window.event;
    b = b.keyCode;
    37 == b ? kd_l = !1 : 39 == b ? kd_r = !1 : 38 == b || 32 == b ? (kd_u = !1,
        setAcceleration(0)) : 16 == b && testing && (shifty = !1)
}
    ;
function loadSos(b) {
    if (!forcing && 0 < b.length) {
        sos = [];
        clus = [];
        b.charAt(0);
        var c = 1
            , e = {}
            , h = 0;
        e = h = 0;
        for (var w, f = 0, q = 0, x = [], G = [], A = [], H = []; c < b.length;)
            if (w = (b.charCodeAt(c++) - 97 - q) % 26,
                0 > w && (w += 26),
                f *= 16,
                f += w,
                q += 7,
                1 == e) {
                if (0 == h)
                    x.push(f),
                        4 == x.length && h++;
                else if (1 == h)
                    G.push(f),
                        3 == G.length && h++;
                else if (2 == h)
                    A.push(f),
                        3 == A.length && h++;
                else if (3 == h && (H.push(f),
                    1 == H.length)) {
                    e = {};
                    for (h = w = 0; h < G.length; h++)
                        w *= 256,
                            w += G[h];
                    for (h = G = 0; h < A.length; h++)
                        G *= 256,
                            G += A[h];
                    e.ip = x.join(".");
                    e.po = w;
                    e.ac = G;
                    e.wg = G + 5;
                    e.clu = H[0];
                    clus[e.clu] ? x = clus[e.clu] : (x = {},
                        clus[e.clu] = x,
                        x.sis = [],
                        x.ptms = [],
                        x.swg = 0,
                        x.tac = 0,
                        x.sos = []);
                    e.cluo = x;
                    x.swg += e.wg;
                    x.sos.push(e);
                    x.tac += G;
                    sos.push(e);
                    x = [];
                    G = [];
                    A = [];
                    H = [];
                    h = 0
                }
                e = f = 0
            } else
                e++;
        for (c = sos.length - 1; 0 <= c; c--)
            if (e = 1,
                x = sos[c].cluo) {
                for (h = x.sis.length - 1; 0 <= h; h--)
                    if (x.sis[h].ip == sos[c].ip) {
                        e = 0;
                        break
                    }
                1 == e && x.sis.push({
                    ip: sos[c].ip
                })
            }
        for (c = clus.length - 1; 0 <= c; c--)
            if ((x = clus[c]) && 0 < x.sis.length) {
                h = Math.floor(Math.random() * x.sis.length);
                b = x.sis[h].ip;
                q = null;
                try {
                    q = new WebSocket("ws://" + b + ":80/ptc")
                } catch (K) {
                    q = null
                }
                q && (q.binaryType = "arraybuffer",
                    q.onerror = function (b) { }
                    ,
                    q.onmessage = function (b) {
                        b = new Uint8Array(b.data);
                        if (1 == b.length && 112 == b[0])
                            for (b = clus.length - 1; 0 <= b; b--) {
                                var c = clus[b];
                                if (c && c.ps == this) {
                                    var e = Date.now() - c.stm;
                                    testing && console.log(" ping time for cluster " + b + ": " + e);
                                    c.ptms.push(e);
                                    4 > c.ptms.length ? (c.stm = Date.now(),
                                        b = new Uint8Array(1),
                                        b[0] = 112,
                                        this.send(b)) : (waiting_for_sos && -1 == sos_ready_after_mtm && (sos_ready_after_mtm = Date.now() + 2E3),
                                            this.close(),
                                            c.ps = null);
                                    break
                                }
                            }
                    }
                    ,
                    q.onopen = function (b) {
                        b = !1;
                        for (var c = clus.length - 1; 0 <= c; c--) {
                            var e = clus[c];
                            if (e && e.ps == this) {
                                e.stm = Date.now();
                                b = new Uint8Array(1);
                                b[0] = 112;
                                this.send(b);
                                b = !0;
                                break
                            }
                        }
                        b || this.close()
                    }
                    ,
                    x.ps = q)
            }
    }
}
function adjustCodeSpinner() {
    var b = hh / 1500;
    1 < b && (b = 1);
    trf(etco_sp_ii, "scale(" + b + "," + b + ") rotate(" + Math.round(36E3 * etcsrv / 12) / 100 + "deg)")
}
function reposGraphicsQuality() {
    grqh.style.top = hacos || bonkz ? "160px" : "16px"
}
function reposEnterCode() {
    var b = hh / 1500;
    1 < b && (b = 1);
    etcod.style.width = Math.ceil(ww) + "px";
    etcod.style.height = Math.ceil(hh) + "px";
    var c = Math.round(Math.max(42, .2 * (hh - 222)))
        , e = Math.round(Math.max(60, .5 * c + .5 * (hh / 2 + 100 * b - 67.5 + -155 * b) - 33))
        , h = Math.round(.45 * e + .55 * (hh / 2 + 100 * b - 67.5 + -155 * b) - 33);
    etcot.style.left = Math.round(ww / 2 - 400) + "px";
    etcot.style.top = c + "px";
    etcc.style.left = Math.round(ww / 2 - etc_ww / 2) + "px";
    etcc.style.top = e + "px";
    etco_sp_ii.style.left = Math.round(ww / 2 - 50) + "px";
    etco_sp_ii.style.top = h + "px";
    adjustCodeSpinner();
    for (c = etcobs.length - 1; 0 <= c; c--) {
        e = etcobs[c];
        var w = h = 0
            , f = b;
        0 == c ? (h = 0,
            w = 2) : 1 == c ? w = h = -1 : 2 == c ? (h = 0,
                w = -1) : 3 == c ? (h = 1,
                    w = -1) : 4 == c ? (h = -1,
                        w = 0) : 5 == c ? w = h = 0 : 6 == c ? (h = 1,
                            w = 0) : 7 == c ? (h = -1,
                                w = 1) : 8 == c ? (h = 0,
                                    w = 1) : 9 == c ? w = h = 1 : 10 == c && (h = 1,
                                        w = 2,
                                        f *= .75);
        e.ii.style.left = Math.round(ww / 2 - 67.5 + h * b * 155) + "px";
        e.ii.style.top = Math.round(hh / 2 + 100 * b - 67.5 + w * b * 155) + "px";
        trf(e.ii, "scale(" + f + "," + f + ")")
    }
    b = hh / 750;
    1 < b && (b = 1);
    trf(etcc, "scale(" + b + "," + b + ")");
    etcocdiv.style.left = Math.round(ww / 2 - etcocdiv.offsetWidth / 2) + "px";
    etcocdiv.style.bottom = Math.round(64 * b) + "px"
}
var buildia_shown = !1
    , build_v = document.createElement("video")
    , bv_width = 1095
    , bv_height = 616
    , buildia_close_after_tm = -1;
function reposBuildia() {
    if (build_v) {
        var b = Math.min(ww / bv_width, hh / bv_height)
            , c = Math.ceil(bv_width * b);
        b = Math.ceil(bv_height * b);
        build_v.style.width = c + "px";
        build_v.style.height = b + "px";
        build_v.style.left = Math.floor(ww / 2 - c / 2) + "px";
        build_v.style.top = Math.floor(hh / 2 - b / 2) + "px"
    }
}
function trySkipBuildia() {
    buildia_shown && window.ut_csk && (shoa = buildia_shown = !1,
        ut_d.removeChild(build_v),
        document.body.removeChild(ut_d),
        document.body.removeChild(ut_sk),
        clearInterval(ut_cd_iv),
        build_v = null)
}
window.buildia = function () {
    buildia_shown = !0;
    window.ut_ldt = Date.now();
    var b = document.createElement("div");
    b.style.zIndex = 2147483632;
    b.style.width = "100%";
    b.style.height = "100%";
    b.style.textAlign = "center";
    b.style.background = "rgba(0, 0, 0, .85)";
    b.style.margin = "0px";
    b.style.overflow = "hidden";
    b.style.position = "fixed";
    b.style.opacity = 1;
    window.ut_d = b;
    document.body.appendChild(b);
    var c = build_v;
    c.width = bv_width;
    c.height = bv_height;
    c.style.position = "absolute";
    b.appendChild(c);
    c.currentTime = 4;
    c.play();
    buildia_close_after_tm = Date.now() + 11E3;
    reposBuildia();
    b = document.createElement("div");
    window.ut_sk = b;
    b.style.width = "115px";
    b.style.height = "20px";
    b.style.background = "rgba(0, 0, 0, 1)";
    b.style.border = "1px solid rgba(255, 255, 255, .5)";
    b.style.fontFamily = "Verdana";
    b.style.color = "#ffffff";
    b.style.position = "fixed";
    b.style.right = "10px";
    b.style.bottom = "10px";
    b.textContent = "Skip Ad " + String.fromCharCode(9654);
    b.style.cursor = "pointer";
    b.style.textAlign = "center";
    b.style.padding = "8px";
    b.style.fontSize = "16px";
    b.style.borderRadius = "4px";
    b.style.opacity = .75;
    b.className = "nsi";
    b.style.zIndex = 2147483633;
    b.onmouseenter = function () {
        ut_sk.style.opacity = 1
    }
        ;
    b.onmouseleave = function () {
        ut_sk.style.opacity = .75
    }
        ;
    b.onclick = function () {
        trySkipBuildia()
    }
        ;
    document.body.appendChild(b);
    window.ut_skf = function () {
        Date.now();
        var b = -1;
        "1" == window.ut_dpr && (b = 0);
        0 >= b ? (ut_sk.textContent = "Skip Ad " + String.fromCharCode(9654),
            window.ut_csk = !0) : (b = Math.ceil(5 * Math.pow(b / 5E3, 1)),
                ut_sk.textContent = "Skip in " + b)
    }
        ;
    window.ut_cd_iv = setInterval("ut_skf()", 250);
    ut_skf()
}
    ;
var fifth_iv = -1;
window.fifthia = function () {
    window.ut_ldt = Date.now();
    var b = document.createElement("div");
    b.style.zIndex = 2147483632;
    b.style.width = "100%";
    b.style.height = "100%";
    b.style.textAlign = "center";
    b.style.background = "rgba(0, 0, 0, .85)";
    b.style.margin = "0px";
    b.style.overflow = "hidden";
    b.style.position = "fixed";
    window.ut_d = b;
    document.body.appendChild(b);
    var c = document.createElement("div");
    c.style.background = 'url("/s/fifthsun3.jpg")';
    c.style.width = "1100px";
    c.style.height = "800px";
    c.style.marginTop = "30px";
    c.style.marginLeft = c.style.marginRight = "auto";
    c.style.position = "relative";
    c.style.border = "3px solid #CCDDFF";
    window.ut_v = c;
    b.appendChild(c);
    b = document.createElement("div");
    b.style.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
    b.style.position = "absolute";
    b.style.left = "320px";
    b.style.top = "126px";
    b.style.width = "150px";
    b.style.padding = "18px";
    b.style.textAlign = "center";
    b.style.color = "#000000";
    b.style.fontWeight = "bold";
    b.style.textAlign = "center";
    b.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    b.style.fontSize = "23px";
    b.style.cursor = "pointer";
    b.textContent = "Shop Now";
    b.className = "nsi shbtn";
    var e = document.createElement("a");
    e.className = "btnt";
    e.draggable = !1;
    e.href = "https://www.fifthsun.com/brands/video-games/slither-io";
    e.target = "_blank";
    e.appendChild(b);
    c.appendChild(e);
    window.ut_sn = b;
    c = document.createElement("div");
    window.ut_sk = c;
    c.style.width = "115px";
    c.style.height = "20px";
    c.style.background = "rgba(0, 0, 0, 1)";
    c.style.border = "1px solid rgba(255, 255, 255, .5)";
    c.style.fontFamily = "Verdana";
    c.style.color = "#ffffff";
    c.style.position = "fixed";
    c.style.right = "10px";
    c.style.bottom = "10px";
    c.textContent = "Skip Ad " + String.fromCharCode(9654);
    c.style.cursor = "pointer";
    c.style.textAlign = "center";
    c.style.padding = "8px";
    c.style.fontSize = "16px";
    c.style.borderRadius = "4px";
    c.style.opacity = .75;
    c.className = "nsi";
    c.style.zIndex = 2147483633;
    c.onclick = function () {
        window.ut_csk && (shoa = !1,
            ut_d.removeChild(ut_v),
            document.body.removeChild(ut_d),
            document.body.removeChild(ut_sk),
            clearInterval(ut_cd_iv))
    }
        ;
    c.onmouseenter = function () {
        ut_sk.style.opacity = 1
    }
        ;
    c.onmouseleave = function () {
        ut_sk.style.opacity = .75
    }
        ;
    document.body.appendChild(c);
    window.ut_skf = function () {
        Date.now();
        var b = -1;
        "1" == window.ut_dpr && (b = 0);
        0 >= b ? (ut_sk.textContent = "Skip Ad " + String.fromCharCode(160, 9654),
            window.ut_csk = !0) : (b = Math.ceil(5 * Math.pow(b / 5E3, 1)),
                ut_sk.textContent = "Skip in " + b)
    }
        ;
    window.ut_cd_iv = setInterval("ut_skf()", 250);
    ut_skf()
}
    ;
var partycity_shown = !1
    , pcy_width = 1132
    , pcy_height = 832
    , partycity_iv = -1;
window.partycityia = function () {
    window.ut_ldt = Date.now();
    var b = document.createElement("div");
    b.style.zIndex = 2147483632;
    b.style.width = "100%";
    b.style.height = "100%";
    b.style.textAlign = "center";
    b.style.background = "rgba(0, 0, 0, .85)";
    b.style.margin = "0px";
    b.style.overflow = "hidden";
    b.style.position = "fixed";
    window.ut_d = b;
    document.body.appendChild(b);
    var c = document.createElement("div");
    c.style.background = 'url("/s/partycity2.jpg")';
    c.style.width = "1100px";
    c.style.height = "800px";
    c.style.position = "absolute";
    c.style.border = "3px solid #CCDDFF";
    c.style.borderRadius = "42px";
    window.ut_v = c;
    b.appendChild(c);
    b = document.createElement("div");
    b.style.boxShadow = "0px 3px 20px rgba(0,0,0, .75)";
    b.style.position = "absolute";
    b.style.left = "410px";
    b.style.top = "707px";
    b.style.width = "244px";
    b.style.padding = "18px";
    b.style.textAlign = "center";
    b.style.color = "#000000";
    b.style.fontWeight = "bold";
    b.style.textAlign = "center";
    b.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    b.style.fontSize = "36px";
    b.style.cursor = "pointer";
    b.style.borderRadius = "12px";
    b.textContent = "Shop Now";
    b.className = "nsi shbtn";
    var e = document.createElement("a");
    e.className = "btnt";
    e.draggable = !1;
    e.href = testing ? "https://www.zombo.com/" : "https://www.partycity.com/slither-party-supplies?extcmp=dsp|banner|slither.io|slitherpartysupplies";
    e.target = "_blank";
    e.appendChild(b);
    c.appendChild(e);
    window.ut_sn = b;
    c = document.createElement("div");
    window.ut_sk = c;
    c.style.width = "115px";
    c.style.height = "20px";
    c.style.background = "rgba(0, 0, 0, 1)";
    c.style.border = "1px solid rgba(255, 255, 255, .5)";
    c.style.fontFamily = "Verdana";
    c.style.color = "#ffffff";
    c.style.position = "fixed";
    c.style.right = "10px";
    c.style.bottom = "10px";
    c.textContent = "Skip Ad " + String.fromCharCode(9654);
    c.style.cursor = "pointer";
    c.style.textAlign = "center";
    c.style.padding = "8px";
    c.style.fontSize = "16px";
    c.style.borderRadius = "4px";
    c.style.opacity = .75;
    c.className = "nsi";
    c.style.zIndex = 2147483633;
    c.onclick = function () {
        window.ut_csk && (shoa = !1,
            ut_d.removeChild(ut_v),
            document.body.removeChild(ut_d),
            document.body.removeChild(ut_sk),
            clearInterval(ut_cd_iv),
            partycity_shown = !1)
    }
        ;
    c.onmouseenter = function () {
        ut_sk.style.opacity = 1
    }
        ;
    c.onmouseleave = function () {
        ut_sk.style.opacity = .75
    }
        ;
    document.body.appendChild(c);
    window.ut_skf = function () {
        Date.now();
        var b = -1;
        "1" == window.ut_dpr && (b = 0);
        0 >= b ? (ut_sk.textContent = "Skip Ad " + String.fromCharCode(160, 9654),
            window.ut_csk = !0) : (b = Math.ceil(5 * Math.pow(b / 5E3, 1)),
                ut_sk.textContent = "Skip in " + b)
    }
        ;
    window.ut_cd_iv = setInterval("ut_skf()", 250);
    ut_skf();
    partycity_shown = !0;
    reposPartyCity()
}
    ;
function reposPartyCity() {
    if (partycity_shown) {
        var b = Math.min(ww / pcy_width, hh / pcy_height);
        1 < b && (b = 1);
        var c = Math.ceil(pcy_width * b)
            , e = Math.ceil(pcy_height * b);
        trf(ut_v, "scale(" + b + "," + b + ")");
        trfo(ut_v, "0% 0%");
        ut_v.style.left = Math.floor(ww / 2 - c / 2) + "px";
        ut_v.style.top = Math.floor(hh / 2 - e / 2) + "px"
    }
}
var mba = null
    , mbi = null;
if (is_ios || is_android)
    mba = document.createElement("a"),
        mbi = document.createElement("img"),
        mbi.border = 0,
        mbi.draggable = !1,
        mbi.className = "nsi",
        mbi.width = 1245,
        mbi.height = 260,
        mbi.style.position = "fixed",
        mbi.style.left = "0px",
        mbi.style.bottom = "0px",
        mbi.style.zIndex = 70,
        mbi.src = "/s/n2.jpg",
        mba.appendChild(mbi),
        document.body.appendChild(mba),
        is_ios ? mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8" : is_android && (mba.href = is_amazon ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" : "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither");
resize();
recalculateActivatedCosmetics();
o = {
    f: function (b, c, e) {
        "success" == c && loadSos(b)
    }
};
getData("/i33628.txt", o);
