parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"+3VO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n="\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n*::after,*::before{box-sizing: border-box}\n\n#pikachu{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 4em;\n    height: 4em;\n    transform: translateX(-50%) translateY(-50%);\n}\n.eye{\n    width: .8em;\n    height: .8em;\n    background-color:#2e2e2e;\n    border: 0.02em solid #000;\n    border-radius: 50%;\n\n}\n\n.eye.left,\n.eye.right{\n    position: absolute;\n    top: 1.2em;\n}\n.eye.left:before,\n.eye.right:before{\n    content: \"\";\n    width: .35em;\n    height: .35em;\n    display: block;\n    background-color: #fff;\n    border-radius: 50%;\n    position: absolute;\n    top: 0.02em;\n    left: 0.1em;\n\n}\n.eye.left{\n    left:0;\n}\n.eye.right{\n    right: 0;\n}\n.nose{\n    position: absolute;\n    top: 1.5em;\n    margin: 0.38em calc(50% - 0.11em) 0.3em;\n    width: 0;\n    height: 0;\n    z-index: 1;\n    border-top: 0.09em solid black;\n    border-left: 0.11em solid transparent;\n    border-right: 0.11em solid transparent;\n    box-shadow: 0 -0.01em 0 black;\n\n}\n.nose:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: .22em;\n    height: .05em;\n    background: black;\n    border-top-left-radius: .11em .05em;\n    border-top-right-radius: .11em .05em;\n    margin-top: -.14em;\n    margin-left: -.11em;\n    transform-origin: center;\n}\n.nose:hover{\n    animation:nose .23s infinite linear;\n}\n@keyframes nose {\n    0%{transform: rotate(0deg)}\n    33%{transform: rotate(-5deg)}\n    67%{transform: rotate(5deg)}\n    100%{transform: rotate(0deg)}\n}\n.mouth {\n    position: absolute;\n    width: 2.28em;\n    height: 1.8em;\n    margin-top: 2.2em;\n    margin-left: calc(50% - 1.18em);\n    overflow: hidden;\n}\n.mouth:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: .8em;\n    height: .25em;\n    background: #FFE600;\n    border: .03em solid black;\n    border-top: none;\n    border-left: none;\n    right: .31em;\n    top: -.05em;\n    transform:rotate(25deg);\n    border-bottom-right-radius: .6em .3em;\n    box-shadow: 0 -.1em 0 #FFE600, -.05em -.03em 0 #FFE600;\n}\n.mouth:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: .8em;\n    height: .25em;\n    background: #FFE600;\n    border: .03em solid black;\n    border-top: none;\n    border-right: none;\n    left: .35em;\n    top: -.05em;\n    transform:rotate(-25deg);\n    border-bottom-left-radius: .6em .3em;\n    box-shadow: 0 -.1em 0 #FFE600, .05em -.03em 0 #FFE600;\n    z-index: 1;\n}\n.mouth > div {\n    position: absolute;\n    background: #FF485F;\n    width: 2.28em;\n    height: 8em;\n    border: .04em solid black;\n    border-bottom-left-radius: 1.18em 8em;\n    border-bottom-right-radius: 1.18em 8em;\n    margin-top: -6.37em;\n    overflow: hidden;\n}\n.mouth > div:after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 1.3em;\n    height: 1em;\n    box-shadow: 0 -.7em 0 #9B000A;\n    bottom: .35em;\n    margin-left: .475em;\n    border-top-left-radius: 100%;\n    border-top-right-radius: 100%;\n}\n\n\n.face{\n    width: .82em;\n    height: .82em;\n    border: 3px solid #000;\n    position: absolute;\n    border-radius: 50%;\n    margin-top: 0.5em;\n    background-color: #F00;\n}\n\n.face.left{\n    left: 0;\n    top: 50%;\n    margin-left: -0.30em;\n\n}\n\n.face.right{\n    right: 0;\n    top: 50%;\n    margin-right: -0.30em;\n}";exports.default=n;
},{}],"w/WB":[function(require,module,exports) {
"use strict";var e=require("./style.js"),n=t(e);function t(e){return e&&e.__esModule?e:{default:e}}var r=document.querySelector("#content"),c=document.querySelector("#content2"),o=document.querySelector(".stop"),u=document.querySelector(".play"),i=document.querySelector(".slow"),l=document.querySelector(".normal"),s=document.querySelector(".fast"),d=n.default,a=1,f=100;r.innerText=d.substring(0,a),c.innerHTML=d.substring(0,a);var v=function(){(a+=1)>=d.length?window.clearInterval(m):(r.innerText=d.substring(0,a),c.innerHTML=d.substring(0,a),r.scrollTop=r.scrollHeight)},y=function(){return setInterval(v,f)},m=y(),q=function(){window.clearInterval(m)};o.addEventListener("click",function(){q()}),u.addEventListener("click",function(){m=y()}),i.addEventListener("click",function(){q(),f=300,m=y()}),l.addEventListener("click",function(){q(),f=150,m=y()}),s.addEventListener("click",function(){q(),f=0,m=y()});
},{"./style.js":"+3VO"}]},{},["w/WB"], null)
//# sourceMappingURL=test.685431d6.map