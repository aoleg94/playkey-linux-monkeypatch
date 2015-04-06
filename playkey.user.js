// ==UserScript==
// @name Playkey monkeypatch
// @description Playkey monkeypatch
// @author Alexandrov Oleg
// @license MIT
// @version 1.0
// @include http://playkey.net/*
// @grant *
// ==/UserScript==
/*(function (window, undefined) {
    var w;
    if (typeof unsafeWindow !== undefined) {
        w = unsafeWindow;
    } else {
        w = window;
    }
    if (w.self != w.top) {
        return;
    }
    if (/http:\/\/playkey\.net/.test(w.location.href)) {*/
pk_isInstallApp = function() { return true; };
pk_runByUrl = function(url) { location.href = "http://localhost:13131/" + url; };
console.log("Playkey-monkeypatch activated");
/*    }
})(window);*/
