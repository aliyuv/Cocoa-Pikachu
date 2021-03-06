// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"test.685431d6.js":[function(require,module,exports) {
var define;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

parcelRequire = function (e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
      o = "function" == typeof require && require;function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;if (!t && f) return f(n, !0);if (i) return i(n, !0);if (o && "string" == typeof n) return o(n);var c = new Error("Cannot find module '" + n + "'");throw c.code = "MODULE_NOT_FOUND", c;
      }p.resolve = function (r) {
        return e[n][1][r] || r;
      };var l = r[n] = new u.Module(n);e[n][0].call(l.exports, p, l, l.exports, this);
    }return r[n].exports;function p(e) {
      return u(p.resolve(e));
    }
  }u.isParcelRequire = !0, u.Module = function (e) {
    this.id = e, this.bundle = u, this.exports = {};
  }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
    e[r] = [function (e, r) {
      r.exports = n;
    }, {}];
  };for (var f = 0; f < n.length; f++) {
    u(n[f]);
  }if (n.length) {
    var c = u(n[n.length - 1]);"object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
      return c;
    }) : t && (this[t] = c);
  }return u;
}({ "+3VO": [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });var n = "\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n*::after,*::before{box-sizing: border-box}\n\n#pikachu{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 4em;\n    height: 4em;\n    transform: translateX(-50%) translateY(-50%);\n}\n.eye{\n    width: .8em;\n    height: .8em;\n    background-color:#2e2e2e;\n    border: 0.02em solid #000;\n    border-radius: 50%;\n\n}\n\n.eye.left,\n.eye.right{\n    position: absolute;\n    top: 1.2em;\n}\n.eye.left:before,\n.eye.right:before{\n    content: \"\";\n    width: .35em;\n    height: .35em;\n    display: block;\n    background-color: #fff;\n    border-radius: 50%;\n    position: absolute;\n    top: 0.02em;\n    left: 0.1em;\n\n}\n.eye.left{\n    left:0;\n}\n.eye.right{\n    right: 0;\n}\n.nose{\n    position: absolute;\n    top: 1.5em;\n    margin: 0.38em calc(50% - 0.11em) 0.3em;\n    width: 0;\n    height: 0;\n    z-index: 1;\n    border-top: 0.09em solid black;\n    border-left: 0.11em solid transparent;\n    border-right: 0.11em solid transparent;\n    box-shadow: 0 -0.01em 0 black;\n\n}\n.nose:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: .22em;\n    height: .05em;\n    background: black;\n    border-top-left-radius: .11em .05em;\n    border-top-right-radius: .11em .05em;\n    margin-top: -.14em;\n    margin-left: -.11em;\n    transform-origin: center;\n}\n.nose:hover{\n    animation:nose .23s infinite linear;\n}\n@keyframes nose {\n    0%{transform: rotate(0deg)}\n    33%{transform: rotate(-5deg)}\n    67%{transform: rotate(5deg)}\n    100%{transform: rotate(0deg)}\n}\n.mouth {\n    position: absolute;\n    width: 2.28em;\n    height: 1.8em;\n    margin-top: 2.2em;\n    margin-left: calc(50% - 1.18em);\n    overflow: hidden;\n}\n.mouth:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: .8em;\n    height: .25em;\n    background: #FFE600;\n    border: .03em solid black;\n    border-top: none;\n    border-left: none;\n    right: .31em;\n    top: -.05em;\n    transform:rotate(25deg);\n    border-bottom-right-radius: .6em .3em;\n    box-shadow: 0 -.1em 0 #FFE600, -.05em -.03em 0 #FFE600;\n}\n.mouth:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: .8em;\n    height: .25em;\n    background: #FFE600;\n    border: .03em solid black;\n    border-top: none;\n    border-right: none;\n    left: .35em;\n    top: -.05em;\n    transform:rotate(-25deg);\n    border-bottom-left-radius: .6em .3em;\n    box-shadow: 0 -.1em 0 #FFE600, .05em -.03em 0 #FFE600;\n    z-index: 1;\n}\n.mouth > div {\n    position: absolute;\n    background: #FF485F;\n    width: 2.28em;\n    height: 8em;\n    border: .04em solid black;\n    border-bottom-left-radius: 1.18em 8em;\n    border-bottom-right-radius: 1.18em 8em;\n    margin-top: -6.37em;\n    overflow: hidden;\n}\n.mouth > div:after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 1.3em;\n    height: 1em;\n    box-shadow: 0 -.7em 0 #9B000A;\n    bottom: .35em;\n    margin-left: .475em;\n    border-top-left-radius: 100%;\n    border-top-right-radius: 100%;\n}\n\n\n.face{\n    width: .82em;\n    height: .82em;\n    border: 3px solid #000;\n    position: absolute;\n    border-radius: 50%;\n    margin-top: 0.5em;\n    background-color: #F00;\n}\n\n.face.left{\n    left: 0;\n    top: 50%;\n    margin-left: -0.30em;\n\n}\n\n.face.right{\n    right: 0;\n    top: 50%;\n    margin-right: -0.30em;\n}";exports.default = n;
  }, {}], "w/WB": [function (require, module, exports) {
    "use strict";
    var e = require("./style.js"),
        n = t(e);function t(e) {
      return e && e.__esModule ? e : { default: e };
    }var r = document.querySelector("#content"),
        c = document.querySelector("#content2"),
        o = document.querySelector(".stop"),
        u = document.querySelector(".play"),
        i = document.querySelector(".slow"),
        l = document.querySelector(".normal"),
        s = document.querySelector(".fast"),
        d = n.default,
        a = 1,
        f = 100;r.innerText = d.substring(0, a), c.innerHTML = d.substring(0, a);var v = function v() {
      (a += 1) >= d.length ? window.clearInterval(m) : (r.innerText = d.substring(0, a), c.innerHTML = d.substring(0, a), r.scrollTop = r.scrollHeight);
    },
        y = function y() {
      return setInterval(v, f);
    },
        m = y(),
        q = function q() {
      window.clearInterval(m);
    };o.addEventListener("click", function () {
      q();
    }), u.addEventListener("click", function () {
      m = y();
    }), i.addEventListener("click", function () {
      q(), f = 300, m = y();
    }), l.addEventListener("click", function () {
      q(), f = 150, m = y();
    }), s.addEventListener("click", function () {
      q(), f = 0, m = y();
    });
  }, { "./style.js": "+3VO" }] }, {}, ["w/WB"], null);
//# sourceMappingURL=test.685431d6.map
},{}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '54286' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","test.685431d6.js"], null)
//# sourceMappingURL=/test.685431d6.0ab02a1b.map