// ==UserScript==
// @name         Diep.io KOREA TOOL
// @description  Diep.io extension (sectored-minimap, zoom, play-with-friends, custom-theming, kill counter)
// @version      3.1
// @author       MungBo, Ganggroid
// @match        http://diep.io/
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      diep.io
// @namespace    https://raw.githubusercontent.com/happyhg3927/Diep.io/master/xdiep.user.js
// ==/UserScript==

window.stop();

GM_xmlhttpRequest({
    method: "GET",
    url: "http://diep.io",
    onload: function(e) {
         document.open(), document.write("<script src='https://raw.githubusercontent.com/happyhg3927/Diep.io/master/head.js'></script>" + e.responseText), document.close();
    }
});
