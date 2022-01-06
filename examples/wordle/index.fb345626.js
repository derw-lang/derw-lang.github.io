// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"a4mrK":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "4f8626a3fb345626";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2V94K":[function(require,module,exports) {
var _html = require("../derw-packages/derw-lang/html/src/Html");
var _list = require("../derw-packages/derw-lang/stdlib/src/List");
var _string = require("../derw-packages/derw-lang/stdlib/src/String");
function Model(args) {
    return {
        ...args
    };
}
function Noop(args) {
    return {
        kind: "Noop",
        ...args
    };
}
function ChangeGuess(args) {
    return {
        kind: "ChangeGuess",
        ...args
    };
}
function SubmitGuess(args) {
    return {
        kind: "SubmitGuess",
        ...args
    };
}
function isInWordHelper(guessedLetter, wordLetter, hasBeenSeen) {
    if (hasBeenSeen) return hasBeenSeen;
    else return wordLetter === guessedLetter;
}
function isInWord(char, word) {
    return _list.foldl(function(x, y) {
        return isInWordHelper(char, x, y);
    }, false, _string.split("", word));
}
function viewInTile(inner) {
    return _html.div([], [
        _html.class_("tile")
    ], [
        inner
    ]);
}
function viewLetter(correctLetter, guessedLetter, wholeWord) {
    const isInWholeWord = isInWord(guessedLetter, wholeWord);
    if (correctLetter === guessedLetter) return viewInTile(_html.div([], [
        _html.class_("correct-letter"),
        _html.class_("letter")
    ], [
        _html.text(guessedLetter)
    ]));
    else {
        if (isInWholeWord) return viewInTile(_html.div([], [
            _html.class_("incorrectly-placed-letter"),
            _html.class_("letter")
        ], [
            _html.text(guessedLetter)
        ]));
        else return viewInTile(_html.div([], [
            _html.class_("incorrect-letter"),
            _html.class_("letter")
        ], [
            _html.text(guessedLetter)
        ]));
    }
}
function viewRow(word, guess) {
    return _html.div([], [
        _html.class_("row")
    ], _list.map(function(i) {
        return viewLetter(word[i], guess[i], word);
    }, Array.from({
        length: 5
    }, (x, i)=>i + 0
    )));
}
const viewEmptyLetter = viewInTile(_html.div([], [
    _html.class_("letter"),
    _html.class_("empty-letter")
], []));
const viewEmptyRow = _html.div([], [
    _html.class_("row")
], _list.map(function(_) {
    return viewEmptyLetter;
}, Array.from({
    length: 5
}, (x, i)=>i + 0
)));
function viewGuessInput(word1) {
    return _html.input([
        _html.onInput(function(word) {
            return ChangeGuess({
                value: word
            });
        })
    ], [
        _html.attribute("value", word1),
        _html.attribute("type", "text")
    ]);
}
function viewSubmit(currentGuess) {
    if (currentGuess.length < 5) return _html.text("");
    else return _html.button([
        _html.onClick(function(_) {
            return SubmitGuess({
            });
        })
    ], [
        _html.class_("submit")
    ], [
        _html.text("Submit guess")
    ]);
}
function viewGame(model) {
    const rows = _list.map(function(guess) {
        return viewRow(model.word, guess);
    }, model.guesses);
    const remainingRowsToMake = 5 - model.guesses.length;
    const emptyRows = _list.map(function(_) {
        return viewEmptyRow;
    }, Array.from({
        length: remainingRowsToMake - 1 + 1
    }, (x, i)=>i + 1
    ));
    const joinedRows = _list.append(rows, emptyRows);
    return _html.div([], [
        _html.class_("game")
    ], [
        _html.a([], [
            _html.attribute("href", "https://www.powerlanguage.co.uk/wordle/")
        ], [
            _html.text("Wordle, but in Derw")
        ]),
        _html.a([], [
            _html.attribute("href", "https://github.com/derw-lang/wordle")
        ], [
            _html.text("Click here to check out the source")
        ]),
        _html.text("We have hidden a 5 letter word below"),
        _html.div([], [
            _html.class_("board")
        ], joinedRows),
        _html.div([], [
            _html.class_("guess-input")
        ], [
            _html.text("Enter your guess:"),
            viewGuessInput(model.currentGuess),
            viewSubmit(model.currentGuess)
        ])
    ]);
}
function view(model) {
    return _html.div([], [], [
        viewGame(model)
    ]);
}
function update(msg, model) {
    const _res = msg;
    switch(_res.kind){
        case "Noop":
            return model;
        case "ChangeGuess":
            {
                const { value  } = _res;
                return {
                    word: model.word,
                    guesses: model.guesses,
                    currentGuess: value
                };
            }
        case "SubmitGuess":
            return {
                word: model.word,
                guesses: _list.append(model.guesses, [
                    model.currentGuess
                ]),
                currentGuess: ""
            };
    }
}
const initialModel = {
    word: "hello",
    guesses: [],
    currentGuess: ""
};
const root = document.getElementById("root");
const main = _html.program({
    initialModel,
    view,
    update,
    root
});

},{"../derw-packages/derw-lang/html/src/Html":"lPFFF","../derw-packages/derw-lang/stdlib/src/List":"7kJwO","../derw-packages/derw-lang/stdlib/src/String":"6TBja"}],"lPFFF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HtmlNode", ()=>_coed.HtmlNode
);
parcelHelpers.export(exports, "Event", ()=>_coed.Event
);
parcelHelpers.export(exports, "Attribute", ()=>_coed.Attribute
);
parcelHelpers.export(exports, "Program", ()=>_coed.Program
);
parcelHelpers.export(exports, "RunningProgram", ()=>_coed.RunningProgram
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "on", ()=>on
);
parcelHelpers.export(exports, "onInput", ()=>onInput
);
parcelHelpers.export(exports, "onClick", ()=>onClick
);
parcelHelpers.export(exports, "program", ()=>program
);
parcelHelpers.export(exports, "a", ()=>a
);
parcelHelpers.export(exports, "abbr", ()=>abbr
);
parcelHelpers.export(exports, "address", ()=>address
);
parcelHelpers.export(exports, "area", ()=>area
);
parcelHelpers.export(exports, "article", ()=>article
);
parcelHelpers.export(exports, "aside", ()=>aside
);
parcelHelpers.export(exports, "audio", ()=>audio
);
parcelHelpers.export(exports, "b", ()=>b
);
parcelHelpers.export(exports, "base", ()=>base
);
parcelHelpers.export(exports, "bdi", ()=>bdi
);
parcelHelpers.export(exports, "bdo", ()=>bdo
);
parcelHelpers.export(exports, "blockquote", ()=>blockquote
);
parcelHelpers.export(exports, "body", ()=>body
);
parcelHelpers.export(exports, "br", ()=>br
);
parcelHelpers.export(exports, "button", ()=>button
);
parcelHelpers.export(exports, "canvas", ()=>canvas
);
parcelHelpers.export(exports, "caption", ()=>caption
);
parcelHelpers.export(exports, "cite", ()=>cite
);
parcelHelpers.export(exports, "code", ()=>code
);
parcelHelpers.export(exports, "col", ()=>col
);
parcelHelpers.export(exports, "colgroup", ()=>colgroup
);
parcelHelpers.export(exports, "data", ()=>data
);
parcelHelpers.export(exports, "datalist", ()=>datalist
);
parcelHelpers.export(exports, "dd", ()=>dd
);
parcelHelpers.export(exports, "del", ()=>del
);
parcelHelpers.export(exports, "details", ()=>details
);
parcelHelpers.export(exports, "dfn", ()=>dfn
);
parcelHelpers.export(exports, "dialog", ()=>dialog
);
parcelHelpers.export(exports, "div", ()=>div
);
parcelHelpers.export(exports, "dl", ()=>dl
);
parcelHelpers.export(exports, "dt", ()=>dt
);
parcelHelpers.export(exports, "em", ()=>em
);
parcelHelpers.export(exports, "embed", ()=>embed
);
parcelHelpers.export(exports, "fieldset", ()=>fieldset
);
parcelHelpers.export(exports, "figure", ()=>figure
);
parcelHelpers.export(exports, "footer", ()=>footer
);
parcelHelpers.export(exports, "form", ()=>form
);
parcelHelpers.export(exports, "h1", ()=>h1
);
parcelHelpers.export(exports, "h2", ()=>h2
);
parcelHelpers.export(exports, "h3", ()=>h3
);
parcelHelpers.export(exports, "h4", ()=>h4
);
parcelHelpers.export(exports, "h5", ()=>h5
);
parcelHelpers.export(exports, "h6", ()=>h6
);
parcelHelpers.export(exports, "head", ()=>head
);
parcelHelpers.export(exports, "header", ()=>header
);
parcelHelpers.export(exports, "hgroup", ()=>hgroup
);
parcelHelpers.export(exports, "hr", ()=>hr
);
parcelHelpers.export(exports, "html", ()=>html
);
parcelHelpers.export(exports, "i", ()=>i
);
parcelHelpers.export(exports, "iframe", ()=>iframe
);
parcelHelpers.export(exports, "img", ()=>img
);
parcelHelpers.export(exports, "input", ()=>input
);
parcelHelpers.export(exports, "ins", ()=>ins
);
parcelHelpers.export(exports, "kbd", ()=>kbd
);
parcelHelpers.export(exports, "keygen", ()=>keygen
);
parcelHelpers.export(exports, "label", ()=>label
);
parcelHelpers.export(exports, "legend", ()=>legend
);
parcelHelpers.export(exports, "li", ()=>li
);
parcelHelpers.export(exports, "link", ()=>link
);
parcelHelpers.export(exports, "main", ()=>main
);
parcelHelpers.export(exports, "map_", ()=>map_
);
parcelHelpers.export(exports, "mark", ()=>mark
);
parcelHelpers.export(exports, "menu", ()=>menu
);
parcelHelpers.export(exports, "menuitem", ()=>menuitem
);
parcelHelpers.export(exports, "meta", ()=>meta
);
parcelHelpers.export(exports, "meter", ()=>meter
);
parcelHelpers.export(exports, "nav", ()=>nav
);
parcelHelpers.export(exports, "noscript", ()=>noscript
);
parcelHelpers.export(exports, "object", ()=>object
);
parcelHelpers.export(exports, "ol", ()=>ol
);
parcelHelpers.export(exports, "optgroup", ()=>optgroup
);
parcelHelpers.export(exports, "option", ()=>option
);
parcelHelpers.export(exports, "output", ()=>output
);
parcelHelpers.export(exports, "p", ()=>p
);
parcelHelpers.export(exports, "param", ()=>param
);
parcelHelpers.export(exports, "pre", ()=>pre
);
parcelHelpers.export(exports, "progress", ()=>progress
);
parcelHelpers.export(exports, "q", ()=>q
);
parcelHelpers.export(exports, "rb", ()=>rb
);
parcelHelpers.export(exports, "rp", ()=>rp
);
parcelHelpers.export(exports, "rt", ()=>rt
);
parcelHelpers.export(exports, "rtc", ()=>rtc
);
parcelHelpers.export(exports, "ruby", ()=>ruby
);
parcelHelpers.export(exports, "s", ()=>s
);
parcelHelpers.export(exports, "samp", ()=>samp
);
parcelHelpers.export(exports, "script", ()=>script
);
parcelHelpers.export(exports, "section", ()=>section
);
parcelHelpers.export(exports, "select", ()=>select
);
parcelHelpers.export(exports, "small", ()=>small
);
parcelHelpers.export(exports, "source", ()=>source
);
parcelHelpers.export(exports, "span", ()=>span
);
parcelHelpers.export(exports, "strong", ()=>strong
);
parcelHelpers.export(exports, "style", ()=>style
);
parcelHelpers.export(exports, "sub", ()=>sub
);
parcelHelpers.export(exports, "summary", ()=>summary
);
parcelHelpers.export(exports, "sup", ()=>sup
);
parcelHelpers.export(exports, "table", ()=>table
);
parcelHelpers.export(exports, "tbody", ()=>tbody
);
parcelHelpers.export(exports, "td", ()=>td
);
parcelHelpers.export(exports, "template", ()=>template
);
parcelHelpers.export(exports, "textarea", ()=>textarea
);
parcelHelpers.export(exports, "tfoot", ()=>tfoot
);
parcelHelpers.export(exports, "th", ()=>th
);
parcelHelpers.export(exports, "thead", ()=>thead
);
parcelHelpers.export(exports, "time", ()=>time
);
parcelHelpers.export(exports, "title", ()=>title
);
parcelHelpers.export(exports, "tr", ()=>tr
);
parcelHelpers.export(exports, "track", ()=>track
);
parcelHelpers.export(exports, "u", ()=>u
);
parcelHelpers.export(exports, "ul", ()=>ul
);
parcelHelpers.export(exports, "var_", ()=>var_
);
parcelHelpers.export(exports, "video", ()=>video
);
parcelHelpers.export(exports, "wbr", ()=>wbr
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "class_", ()=>class_
);
parcelHelpers.export(exports, "style_", ()=>style_
);
parcelHelpers.export(exports, "attribute", ()=>attribute
);
parcelHelpers.export(exports, "none", ()=>none
);
parcelHelpers.export(exports, "node", ()=>node
);
parcelHelpers.export(exports, "render", ()=>render
);
var _coed = require("@eeue56/coed");
function text(str) {
    return _coed.text(str);
}
function node(tag, events, attributes, children) {
    return _coed.node(tag, events, attributes, children);
}
function map(fn, node1) {
    return _coed.map(fn, node1);
}
function program(p1) {
    return _coed.program(p1);
}
function render(node2) {
    return _coed.render(node2);
}
function on(name, tagger) {
    return _coed.on(name, tagger);
}
function onInput(fn) {
    return _coed.onInput(fn);
}
function onClick(fn) {
    return on("click", fn);
}
function class_(name) {
    return _coed.class_(name);
}
function style_(name, value) {
    return _coed.style_(name, value);
}
const none = _coed.none();
function attribute(name, value) {
    return _coed.attribute(name, value);
}
function a(events, attributes, children) {
    return _coed.a(events, attributes, children);
}
function abbr(events, attributes, children) {
    return _coed.abbr(events, attributes, children);
}
function address(events, attributes, children) {
    return _coed.address(events, attributes, children);
}
function area(events, attributes) {
    return _coed.area(events, attributes);
}
function article(events, attributes, children) {
    return _coed.article(events, attributes, children);
}
function aside(events, attributes, children) {
    return _coed.aside(events, attributes, children);
}
function audio(events, attributes, children) {
    return _coed.audio(events, attributes, children);
}
function b(events, attributes, children) {
    return _coed.b(events, attributes, children);
}
function base(events, attributes) {
    return _coed.base(events, attributes);
}
function bdi(events, attributes, children) {
    return _coed.bdi(events, attributes, children);
}
function bdo(events, attributes, children) {
    return _coed.bdo(events, attributes, children);
}
function blockquote(events, attributes, children) {
    return _coed.blockquote(events, attributes, children);
}
function body(events, attributes, children) {
    return _coed.body(events, attributes, children);
}
function br(events, attributes) {
    return _coed.br(events, attributes);
}
function button(events, attributes, children) {
    return _coed.button(events, attributes, children);
}
function canvas(events, attributes, children) {
    return _coed.canvas(events, attributes, children);
}
function caption(events, attributes, children) {
    return _coed.caption(events, attributes, children);
}
function cite(events, attributes, children) {
    return _coed.cite(events, attributes, children);
}
function code(events, attributes, children) {
    return _coed.code(events, attributes, children);
}
function col(events, attributes) {
    return _coed.col(events, attributes);
}
function colgroup(events, attributes, children) {
    return _coed.colgroup(events, attributes, children);
}
function data(events, attributes, children) {
    return _coed.data(events, attributes, children);
}
function datalist(events, attributes, children) {
    return _coed.datalist(events, attributes, children);
}
function dd(events, attributes, children) {
    return _coed.dd(events, attributes, children);
}
function del(events, attributes, children) {
    return _coed.del(events, attributes, children);
}
function details(events, attributes, children) {
    return _coed.details(events, attributes, children);
}
function dfn(events, attributes, children) {
    return _coed.dfn(events, attributes, children);
}
function dialog(events, attributes, children) {
    return _coed.dialog(events, attributes, children);
}
function div(events, attributes, children) {
    return _coed.div(events, attributes, children);
}
function dl(events, attributes, children) {
    return _coed.dl(events, attributes, children);
}
function dt(events, attributes, children) {
    return _coed.dt(events, attributes, children);
}
function em(events, attributes, children) {
    return _coed.em(events, attributes, children);
}
function embed(events, attributes) {
    return _coed.embed(events, attributes);
}
function fieldset(events, attributes, children) {
    return _coed.fieldset(events, attributes, children);
}
function figure(events, attributes, children) {
    return _coed.figure(events, attributes, children);
}
function footer(events, attributes, children) {
    return _coed.footer(events, attributes, children);
}
function form(events, attributes, children) {
    return _coed.form(events, attributes, children);
}
function h1(events, attributes, children) {
    return _coed.h1(events, attributes, children);
}
function h2(events, attributes, children) {
    return _coed.h2(events, attributes, children);
}
function h3(events, attributes, children) {
    return _coed.h3(events, attributes, children);
}
function h4(events, attributes, children) {
    return _coed.h4(events, attributes, children);
}
function h5(events, attributes, children) {
    return _coed.h5(events, attributes, children);
}
function h6(events, attributes, children) {
    return _coed.h6(events, attributes, children);
}
function head(events, attributes, children) {
    return _coed.head(events, attributes, children);
}
function header(events, attributes, children) {
    return _coed.header(events, attributes, children);
}
function hgroup(events, attributes, children) {
    return _coed.hgroup(events, attributes, children);
}
function hr(events, attributes) {
    return _coed.hr(events, attributes);
}
function html(events, attributes, children) {
    return _coed.html(events, attributes, children);
}
function i(events, attributes, children) {
    return _coed.i(events, attributes, children);
}
function iframe(events, attributes, children) {
    return _coed.iframe(events, attributes, children);
}
function img(events, attributes) {
    return _coed.img(events, attributes);
}
function input(events, attributes) {
    return _coed.input(events, attributes);
}
function ins(events, attributes, children) {
    return _coed.ins(events, attributes, children);
}
function kbd(events, attributes, children) {
    return _coed.kbd(events, attributes, children);
}
function keygen(events, attributes, children) {
    return _coed.keygen(events, attributes, children);
}
function label(events, attributes, children) {
    return _coed.label(events, attributes, children);
}
function legend(events, attributes, children) {
    return _coed.legend(events, attributes, children);
}
function li(events, attributes, children) {
    return _coed.li(events, attributes, children);
}
function link(events, attributes) {
    return _coed.link(events, attributes);
}
function main(events, attributes, children) {
    return _coed.main(events, attributes, children);
}
function map_(events, attributes, children) {
    return _coed.map_(events, attributes, children);
}
function mark(events, attributes, children) {
    return _coed.mark(events, attributes, children);
}
function menu(events, attributes, children) {
    return _coed.menu(events, attributes, children);
}
function menuitem(events, attributes, children) {
    return _coed.menuitem(events, attributes, children);
}
function meta(events, attributes) {
    return _coed.meta(events, attributes);
}
function meter(events, attributes, children) {
    return _coed.meter(events, attributes, children);
}
function nav(events, attributes, children) {
    return _coed.nav(events, attributes, children);
}
function noscript(events, attributes, children) {
    return _coed.noscript(events, attributes, children);
}
function object(events, attributes, children) {
    return _coed.object(events, attributes, children);
}
function ol(events, attributes, children) {
    return _coed.ol(events, attributes, children);
}
function optgroup(events, attributes, children) {
    return _coed.optgroup(events, attributes, children);
}
function option(events, attributes, children) {
    return _coed.option(events, attributes, children);
}
function output(events, attributes, children) {
    return _coed.output(events, attributes, children);
}
function p(events, attributes, children) {
    return _coed.p(events, attributes, children);
}
function param(events, attributes) {
    return _coed.param(events, attributes);
}
function pre(events, attributes, children) {
    return _coed.pre(events, attributes, children);
}
function progress(events, attributes, children) {
    return _coed.progress(events, attributes, children);
}
function q(events, attributes, children) {
    return _coed.q(events, attributes, children);
}
function rb(events, attributes, children) {
    return _coed.rb(events, attributes, children);
}
function rp(events, attributes, children) {
    return _coed.rp(events, attributes, children);
}
function rt(events, attributes, children) {
    return _coed.rt(events, attributes, children);
}
function rtc(events, attributes, children) {
    return _coed.rtc(events, attributes, children);
}
function ruby(events, attributes, children) {
    return _coed.ruby(events, attributes, children);
}
function s(events, attributes, children) {
    return _coed.s(events, attributes, children);
}
function samp(events, attributes, children) {
    return _coed.samp(events, attributes, children);
}
function script(events, attributes, children) {
    return _coed.script(events, attributes, children);
}
function section(events, attributes, children) {
    return _coed.section(events, attributes, children);
}
function select(events, attributes, children) {
    return _coed.select(events, attributes, children);
}
function small(events, attributes, children) {
    return _coed.small(events, attributes, children);
}
function source(events, attributes) {
    return _coed.source(events, attributes);
}
function span(events, attributes, children) {
    return _coed.span(events, attributes, children);
}
function strong(events, attributes, children) {
    return _coed.strong(events, attributes, children);
}
function style(events, attributes, children) {
    return _coed.style(events, attributes, children);
}
function sub(events, attributes, children) {
    return _coed.sub(events, attributes, children);
}
function summary(events, attributes, children) {
    return _coed.summary(events, attributes, children);
}
function sup(events, attributes, children) {
    return _coed.sup(events, attributes, children);
}
function table(events, attributes, children) {
    return _coed.table(events, attributes, children);
}
function tbody(events, attributes, children) {
    return _coed.tbody(events, attributes, children);
}
function td(events, attributes, children) {
    return _coed.td(events, attributes, children);
}
function template(events, attributes, children) {
    return _coed.template(events, attributes, children);
}
function textarea(events, attributes, children) {
    return _coed.textarea(events, attributes, children);
}
function tfoot(events, attributes, children) {
    return _coed.tfoot(events, attributes, children);
}
function th(events, attributes, children) {
    return _coed.th(events, attributes, children);
}
function thead(events, attributes, children) {
    return _coed.thead(events, attributes, children);
}
function time(events, attributes, children) {
    return _coed.time(events, attributes, children);
}
function title(events, attributes, children) {
    return _coed.title(events, attributes, children);
}
function tr(events, attributes, children) {
    return _coed.tr(events, attributes, children);
}
function track(events, attributes) {
    return _coed.track(events, attributes);
}
function u(events, attributes, children) {
    return _coed.u(events, attributes, children);
}
function ul(events, attributes, children) {
    return _coed.ul(events, attributes, children);
}
function var_(events, attributes, children) {
    return _coed.var_(events, attributes, children);
}
function video(events, attributes, children) {
    return _coed.video(events, attributes, children);
}
function wbr(events, attributes) {
    return _coed.wbr(events, attributes);
}

},{"@eeue56/coed":"8JhSt","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8JhSt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.footer = exports.figure = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.program = exports.map = exports.triggerEvent = exports.buildTree = exports.render = exports.voidNode = exports.node = exports.text = exports.onInput = exports.on = exports.attribute = exports.none = exports.style_ = exports.class_ = void 0;
exports.script = exports.samp = exports.s = exports.ruby = exports.rtc = exports.rt = exports.rp = exports.rb = exports.q = exports.progress = exports.pre = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map_ = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = void 0;
exports.wbr = exports.video = exports.var_ = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.select = exports.section = void 0;
const ts_core_1 = require("@eeue56/ts-core");
/**
Creates a class attribute - classes are combined by the html creator, so you can use it like:
```
html.div([ ], [ class_("one"), class_("two") ], [ ])
```
*/ function class_(str) {
    return {
        kind: "string",
        key: "class",
        value: str
    };
}
exports.class_ = class_;
/**
Creates a style attribute - styles are combined by the html creator, so you can use it like:
```
html.div([ ], [ style_("color", "red"), style_("background-color", "blue") ], [ ])
```
*/ function style_(key, value) {
    return {
        kind: "style",
        key: key,
        value: value
    };
}
exports.style_ = style_;
/**
An empty attribute - filtered by the html creator on creation. This is useful if you have a tenary
operator, e.g:
```
html.div([ ], [ somethingTruthy ? none() : class_("something") ], [ ])
```
*/ function none() {
    return {
        kind: "none"
    };
}
exports.none = none;
/**
Create an attribute with a given key and value. This is set via `setAttribute` at runtime.
*/ function attribute(key, value) {
    if (key === "style") return style_(value.split(":")[0], value.split(":")[1]);
    return {
        kind: "string",
        key: key,
        value: value
    };
}
exports.attribute = attribute;
/**
Creates an event handler for passing to a html node
*/ function on(name, tagger) {
    return {
        name: name,
        tagger: (event)=>{
            if (event.stopPropagation) {
                event.stopPropagation();
                event.preventDefault();
            }
            return tagger(event);
        }
    };
}
exports.on = on;
/**
Special-cased input handler
*/ function onInput(tagger) {
    return {
        name: "input",
        tagger: (event)=>{
            event.stopPropagation();
            event.preventDefault();
            return tagger(event.target.value);
        }
    };
}
exports.onInput = onInput;
/**
Creates a text node
*/ function text(str) {
    return {
        kind: "text",
        text: str
    };
}
exports.text = text;
/**
Creates a html node with a given tag name, any events, any attributes and any children.
*/ function node(tag, events, attributes, children) {
    return {
        kind: "regular",
        tag: tag,
        events: events,
        attributes: combineAttributes(attributes),
        children: children,
        _eventListeners: []
    };
}
exports.node = node;
/**
Creates a void html node with a given tag name, any events, any attributes.
*/ function voidNode(tag, events, attributes) {
    return {
        kind: "void",
        tag: tag,
        events: events,
        attributes: combineAttributes(attributes),
        _eventListeners: []
    };
}
exports.voidNode = voidNode;
function combineAttributes(attributes) {
    const knownStringAttributes = {
    };
    const knownStyleAttributes = [];
    const otherAttributes = [];
    // group attribute values
    attributes.forEach((attribute1)=>{
        switch(attribute1.kind){
            case "string":
                if (!knownStringAttributes[attribute1.key]) knownStringAttributes[attribute1.key] = [];
                knownStringAttributes[attribute1.key].push(attribute1);
                break;
            case "style":
                knownStyleAttributes.push(attribute1);
                break;
            default:
                otherAttributes.push(attribute1);
        }
    });
    const combinedAttributes = otherAttributes.filter((attribute2)=>attribute2.kind !== "none"
    );
    // actually combine attributes together
    Object.keys(knownStringAttributes).map((key)=>{
        combinedAttributes.push(knownStringAttributes[key].reduce((acc, currentValue)=>{
            if (key === "class") acc.value += " " + currentValue.value;
            return acc;
        }));
    });
    if (knownStyleAttributes.length > 0) // actually combine attributes together
    combinedAttributes.push(knownStyleAttributes.reduce((acc, currentValue)=>{
        if (typeof acc.value === "undefined") acc.value = "";
        acc.value += currentValue.key + ":" + currentValue.value + ";";
        return acc;
    }, attribute("style", "")));
    return combinedAttributes;
}
function renderAttribute(attribute3) {
    switch(attribute3.kind){
        case "string":
            if (attribute3.value.indexOf('"') > 0) return `${attribute3.key}='${attribute3.value}'`;
            return `${attribute3.key}="${attribute3.value}"`;
        case "number":
            return `${attribute3.key}=${attribute3.value}`;
        case "style":
            return "";
        case "none":
            return "";
    }
}
/**
Renders a HtmlNode tree as a string.
*/ function render(node1, depth = 0) {
    const whitespace = " ".repeat(depth * 4);
    switch(node1.kind){
        case "text":
            return whitespace + node1.text;
        case "void":
        case "regular":
            const attributes = (node1.attributes.length > 0 ? " " : "") + node1.attributes.map(renderAttribute).join(" ");
            switch(node1.kind){
                case "void":
                    return whitespace + `<${node1.tag}${attributes}>`;
                case "regular":
                    if (node1.children.length > 0) return whitespace + `<${node1.tag}${attributes}>
${node1.children.map((child)=>render(child, depth + 1)
                    ).join("\n")}
${whitespace}</${node1.tag}>`;
                    return whitespace + `<${node1.tag}${attributes}></${node1.tag}>`;
            }
    }
}
exports.render = render;
/**
Builds a HTMLElement tree from a HtmlNode tree, with event triggers being sent to the runner via the listener
This function should not be needed by most usage.
*/ function buildTree(listener, node2) {
    switch(node2.kind){
        case "text":
            return document.createTextNode(node2.text);
        case "void":
        case "regular":
            {
                const element = document.createElement(node2.tag);
                node2.attributes.forEach((attribute4)=>{
                    setAttributeOnElement(element, attribute4);
                });
                node2.events.forEach((event)=>{
                    const listenerFunction = (data1)=>{
                        listener(event.tagger(data1));
                    };
                    element.addEventListener(event.name, listenerFunction, {
                        once: true
                    });
                    node2._eventListeners.push({
                        event: event,
                        listener: listenerFunction
                    });
                });
                if (node2.kind === "regular") {
                    const children = node2.children.map((child)=>buildTree(listener, child)
                    );
                    children.forEach((child)=>{
                        element.appendChild(child);
                    });
                }
                return element;
            }
    }
}
exports.buildTree = buildTree;
/**
Triggers the event by name, passing it the payload provided.
This function is useful for testing but not much else
 */ function triggerEvent(eventName, payload, node3) {
    switch(node3.kind){
        case "text":
            return ts_core_1.Maybe.Nothing();
        case "void":
        case "regular":
            const events = node3.events.filter((event)=>event.name === eventName
            );
            if (events.length > 0) return ts_core_1.Maybe.Just(events[0].tagger(payload));
            else return ts_core_1.Maybe.Nothing();
    }
}
exports.triggerEvent = triggerEvent;
/**
Converts a `HtmlNode` of type `A` to a `HtmlNode` of type `B`, including children.
*/ function map(tagger, tree) {
    switch(tree.kind){
        case "text":
            return tree;
        case "void":
            return voidNode(tree.tag, tree.events.map((event)=>{
                return on(event.name, (data2)=>tagger(event.tagger(data2))
                );
            }), tree.attributes);
        case "regular":
            return node(tree.tag, tree.events.map((event)=>{
                return on(event.name, (data3)=>tagger(event.tagger(data3))
                );
            }), tree.attributes, tree.children.map((child)=>{
                return map(tagger, child);
            }));
    }
}
exports.map = map;
function setAttributeOnElement(element, attribute5) {
    switch(attribute5.kind){
        case "string":
        case "number":
            element[attribute5.key] = attribute5.value;
            element.setAttribute(attribute5.key, attribute5.value);
            return;
        case "style":
            element.removeAttribute("style");
            const styles = attribute5.value.split(";");
            for(var i1 = 0; i1 < styles.length; i1++){
                const styleName = styles[i1].split(":")[0];
                const styleValue = styles[i1].split(":")[1];
                element.style[styleName] = styleValue;
            }
            return;
        case "none":
            return;
    }
}
function patchFacts(nextTree, elements) {
    switch(nextTree.kind){
        case "void":
        case "regular":
            nextTree.attributes.forEach((attribute6)=>{
                setAttributeOnElement(elements, attribute6);
            });
            return;
        case "text":
            return;
    }
}
function patchEvents(listener, previousTree, nextTree, elements) {
    switch(nextTree.kind){
        case "void":
        case "regular":
            previousTree._eventListeners.forEach((eventListeners)=>{
                elements.removeEventListener(eventListeners.event.name, eventListeners.listener);
            });
            nextTree.events.forEach((event)=>{
                const listenerFunction = (data4)=>{
                    listener(event.tagger(data4));
                };
                elements.addEventListener(event.name, listenerFunction, {
                    once: true
                });
                nextTree._eventListeners.push({
                    event: event,
                    listener: listenerFunction
                });
            });
            return;
        case "text":
            return;
    }
}
function patch(listener, currentTree, nextTree, elements) {
    if (currentTree.kind != nextTree.kind) {
        elements.replaceWith(buildTree(listener, nextTree));
        return nextTree;
    }
    switch(currentTree.kind){
        case "text":
            if (currentTree.text == nextTree.text) return currentTree;
            else {
                elements.replaceWith(document.createTextNode(nextTree.text));
                return nextTree;
            }
        case "void":
            if (currentTree.tag != nextTree.tag) {
                elements.replaceWith(buildTree(listener, nextTree));
                return nextTree;
            } else {
                patchFacts(nextTree, elements);
                patchEvents(listener, currentTree, nextTree, elements);
                const htmlElements = elements;
            }
            return nextTree;
        case "regular":
            if (currentTree.tag != nextTree.tag) {
                elements.replaceWith(buildTree(listener, nextTree));
                return nextTree;
            } else {
                patchFacts(nextTree, elements);
                patchEvents(listener, currentTree, nextTree, elements);
                const htmlElements = elements;
                for(var i2 = 0; i2 < nextTree.children.length; i2++){
                    const currentChild = currentTree.children[i2];
                    const nextChild = nextTree.children[i2];
                    const node4 = htmlElements.childNodes[i2];
                    if (typeof node4 === "undefined") {
                        htmlElements.appendChild(buildTree(listener, nextChild));
                        continue;
                    }
                    switch(node4.nodeType){
                        case Node.ELEMENT_NODE:
                            const element = node4;
                            patch(listener, currentChild, nextChild, element);
                            break;
                        case Node.TEXT_NODE:
                            const text1 = node4;
                            patch(listener, currentChild, nextChild, text1);
                            break;
                    }
                }
                for(var i2 = nextTree.children.length; i2 < htmlElements.childNodes.length; i2++){
                    const node5 = htmlElements.childNodes[i2];
                    htmlElements.removeChild(node5);
                }
            }
            return nextTree;
    }
}
/**
Takes in a program, sets it up and runs it as a main loop
*/ function program(program1) {
    let model = program1.initialModel;
    let previousView = program1.view(program1.initialModel);
    const listener = (msg)=>{
        model = program1.update(msg, model, listener);
        const nextView = program1.view(model);
        patch(listener, previousView, nextView, currentTree);
        previousView = nextView;
    };
    let currentTree = buildTree(listener, previousView);
    program1.root.appendChild(currentTree);
    return {
        program: program1,
        send: listener
    };
}
exports.program = program;
// tags
function a(events, attributes, children) {
    return node("a", events, attributes, children);
}
exports.a = a;
function abbr(events, attributes, children) {
    return node("abbr", events, attributes, children);
}
exports.abbr = abbr;
function address(events, attributes, children) {
    return node("address", events, attributes, children);
}
exports.address = address;
function area(events, attributes) {
    return voidNode("area", events, attributes);
}
exports.area = area;
function article(events, attributes, children) {
    return node("article", events, attributes, children);
}
exports.article = article;
function aside(events, attributes, children) {
    return node("aside", events, attributes, children);
}
exports.aside = aside;
function audio(events, attributes, children) {
    return node("audio", events, attributes, children);
}
exports.audio = audio;
function b(events, attributes, children) {
    return node("b", events, attributes, children);
}
exports.b = b;
function base(events, attributes) {
    return voidNode("base", events, attributes);
}
exports.base = base;
function bdi(events, attributes, children) {
    return node("bdi", events, attributes, children);
}
exports.bdi = bdi;
function bdo(events, attributes, children) {
    return node("bdo", events, attributes, children);
}
exports.bdo = bdo;
function blockquote(events, attributes, children) {
    return node("blockquote", events, attributes, children);
}
exports.blockquote = blockquote;
function body(events, attributes, children) {
    return node("body", events, attributes, children);
}
exports.body = body;
function br(events, attributes) {
    return voidNode("br", events, attributes);
}
exports.br = br;
function button(events, attributes, children) {
    return node("button", events, attributes, children);
}
exports.button = button;
function canvas(events, attributes, children) {
    return node("canvas", events, attributes, children);
}
exports.canvas = canvas;
function caption(events, attributes, children) {
    return node("caption", events, attributes, children);
}
exports.caption = caption;
function cite(events, attributes, children) {
    return node("cite", events, attributes, children);
}
exports.cite = cite;
function code(events, attributes, children) {
    return node("code", events, attributes, children);
}
exports.code = code;
function col(events, attributes) {
    return voidNode("col", events, attributes);
}
exports.col = col;
function colgroup(events, attributes, children) {
    return node("colgroup", events, attributes, children);
}
exports.colgroup = colgroup;
function data(events, attributes, children) {
    return node("data", events, attributes, children);
}
exports.data = data;
function datalist(events, attributes, children) {
    return node("datalist", events, attributes, children);
}
exports.datalist = datalist;
function dd(events, attributes, children) {
    return node("dd", events, attributes, children);
}
exports.dd = dd;
function del(events, attributes, children) {
    return node("del", events, attributes, children);
}
exports.del = del;
function details(events, attributes, children) {
    return node("details", events, attributes, children);
}
exports.details = details;
function dfn(events, attributes, children) {
    return node("dfn", events, attributes, children);
}
exports.dfn = dfn;
function dialog(events, attributes, children) {
    return node("dialog", events, attributes, children);
}
exports.dialog = dialog;
function div(events, attributes, children) {
    return node("div", events, attributes, children);
}
exports.div = div;
function dl(events, attributes, children) {
    return node("dl", events, attributes, children);
}
exports.dl = dl;
function dt(events, attributes, children) {
    return node("dt", events, attributes, children);
}
exports.dt = dt;
function em(events, attributes, children) {
    return node("em", events, attributes, children);
}
exports.em = em;
function embed(events, attributes) {
    return voidNode("embed", events, attributes);
}
exports.embed = embed;
function fieldset(events, attributes, children) {
    return node("fieldset", events, attributes, children);
}
exports.fieldset = fieldset;
function figure(events, attributes, children) {
    return node("figure", events, attributes, children);
}
exports.figure = figure;
function footer(events, attributes, children) {
    return node("footer", events, attributes, children);
}
exports.footer = footer;
function form(events, attributes, children) {
    return node("form", events, attributes, children);
}
exports.form = form;
function h1(events, attributes, children) {
    return node("h1", events, attributes, children);
}
exports.h1 = h1;
function h2(events, attributes, children) {
    return node("h2", events, attributes, children);
}
exports.h2 = h2;
function h3(events, attributes, children) {
    return node("h3", events, attributes, children);
}
exports.h3 = h3;
function h4(events, attributes, children) {
    return node("h4", events, attributes, children);
}
exports.h4 = h4;
function h5(events, attributes, children) {
    return node("h5", events, attributes, children);
}
exports.h5 = h5;
function h6(events, attributes, children) {
    return node("h6", events, attributes, children);
}
exports.h6 = h6;
function head(events, attributes, children) {
    return node("head", events, attributes, children);
}
exports.head = head;
function header(events, attributes, children) {
    return node("header", events, attributes, children);
}
exports.header = header;
function hgroup(events, attributes, children) {
    return node("hgroup", events, attributes, children);
}
exports.hgroup = hgroup;
function hr(events, attributes) {
    return voidNode("hr", events, attributes);
}
exports.hr = hr;
function html(events, attributes, children) {
    return node("html", events, attributes, children);
}
exports.html = html;
function i(events, attributes, children) {
    return node("i", events, attributes, children);
}
exports.i = i;
function iframe(events, attributes, children) {
    return node("iframe", events, attributes, children);
}
exports.iframe = iframe;
function img(events, attributes) {
    return voidNode("img", events, attributes);
}
exports.img = img;
function input(events, attributes) {
    return voidNode("input", events, attributes);
}
exports.input = input;
function ins(events, attributes, children) {
    return node("ins", events, attributes, children);
}
exports.ins = ins;
function kbd(events, attributes, children) {
    return node("kbd", events, attributes, children);
}
exports.kbd = kbd;
function keygen(events, attributes, children) {
    return node("keygen", events, attributes, children);
}
exports.keygen = keygen;
function label(events, attributes, children) {
    return node("label", events, attributes, children);
}
exports.label = label;
function legend(events, attributes, children) {
    return node("legend", events, attributes, children);
}
exports.legend = legend;
function li(events, attributes, children) {
    return node("li", events, attributes, children);
}
exports.li = li;
function link(events, attributes) {
    return voidNode("link", events, attributes);
}
exports.link = link;
function main(events, attributes, children) {
    return node("main", events, attributes, children);
}
exports.main = main;
function map_(events, attributes, children) {
    return node("map", events, attributes, children);
}
exports.map_ = map_;
function mark(events, attributes, children) {
    return node("mark", events, attributes, children);
}
exports.mark = mark;
function menu(events, attributes, children) {
    return node("menu", events, attributes, children);
}
exports.menu = menu;
function menuitem(events, attributes, children) {
    return node("menuitem", events, attributes, children);
}
exports.menuitem = menuitem;
function meta(events, attributes) {
    return voidNode("meta", events, attributes);
}
exports.meta = meta;
function meter(events, attributes, children) {
    return node("meter", events, attributes, children);
}
exports.meter = meter;
function nav(events, attributes, children) {
    return node("nav", events, attributes, children);
}
exports.nav = nav;
function noscript(events, attributes, children) {
    return node("noscript", events, attributes, children);
}
exports.noscript = noscript;
function object(events, attributes, children) {
    return node("object", events, attributes, children);
}
exports.object = object;
function ol(events, attributes, children) {
    return node("ol", events, attributes, children);
}
exports.ol = ol;
function optgroup(events, attributes, children) {
    return node("optgroup", events, attributes, children);
}
exports.optgroup = optgroup;
function option(events, attributes, children) {
    return node("option", events, attributes, children);
}
exports.option = option;
function output(events, attributes, children) {
    return node("output", events, attributes, children);
}
exports.output = output;
function p(events, attributes, children) {
    return node("p", events, attributes, children);
}
exports.p = p;
function param(events, attributes) {
    return voidNode("param", events, attributes);
}
exports.param = param;
function pre(events, attributes, children) {
    return node("pre", events, attributes, children);
}
exports.pre = pre;
function progress(events, attributes, children) {
    return node("progress", events, attributes, children);
}
exports.progress = progress;
function q(events, attributes, children) {
    return node("q", events, attributes, children);
}
exports.q = q;
function rb(events, attributes, children) {
    return node("rb", events, attributes, children);
}
exports.rb = rb;
function rp(events, attributes, children) {
    return node("rp", events, attributes, children);
}
exports.rp = rp;
function rt(events, attributes, children) {
    return node("rt", events, attributes, children);
}
exports.rt = rt;
function rtc(events, attributes, children) {
    return node("rtc", events, attributes, children);
}
exports.rtc = rtc;
function ruby(events, attributes, children) {
    return node("ruby", events, attributes, children);
}
exports.ruby = ruby;
function s(events, attributes, children) {
    return node("s", events, attributes, children);
}
exports.s = s;
function samp(events, attributes, children) {
    return node("samp", events, attributes, children);
}
exports.samp = samp;
function script(events, attributes, children) {
    return node("script", events, attributes, children);
}
exports.script = script;
function section(events, attributes, children) {
    return node("section", events, attributes, children);
}
exports.section = section;
function select(events, attributes, children) {
    return node("select", events, attributes, children);
}
exports.select = select;
function small(events, attributes, children) {
    return node("small", events, attributes, children);
}
exports.small = small;
function source(events, attributes) {
    return voidNode("source", events, attributes);
}
exports.source = source;
function span(events, attributes, children) {
    return node("span", events, attributes, children);
}
exports.span = span;
function strong(events, attributes, children) {
    return node("strong", events, attributes, children);
}
exports.strong = strong;
function style(events, attributes, children) {
    return node("style", events, attributes, children);
}
exports.style = style;
function sub(events, attributes, children) {
    return node("sub", events, attributes, children);
}
exports.sub = sub;
function summary(events, attributes, children) {
    return node("summary", events, attributes, children);
}
exports.summary = summary;
function sup(events, attributes, children) {
    return node("sup", events, attributes, children);
}
exports.sup = sup;
function table(events, attributes, children) {
    return node("table", events, attributes, children);
}
exports.table = table;
function tbody(events, attributes, children) {
    return node("tbody", events, attributes, children);
}
exports.tbody = tbody;
function td(events, attributes, children) {
    return node("td", events, attributes, children);
}
exports.td = td;
function template(events, attributes, children) {
    return node("template", events, attributes, children);
}
exports.template = template;
function textarea(events, attributes, children) {
    return node("textarea", events, attributes, children);
}
exports.textarea = textarea;
function tfoot(events, attributes, children) {
    return node("tfoot", events, attributes, children);
}
exports.tfoot = tfoot;
function th(events, attributes, children) {
    return node("th", events, attributes, children);
}
exports.th = th;
function thead(events, attributes, children) {
    return node("thead", events, attributes, children);
}
exports.thead = thead;
function time(events, attributes, children) {
    return node("time", events, attributes, children);
}
exports.time = time;
function title(events, attributes, children) {
    return node("title", events, attributes, children);
}
exports.title = title;
function tr(events, attributes, children) {
    return node("tr", events, attributes, children);
}
exports.tr = tr;
function track(events, attributes) {
    return voidNode("track", events, attributes);
}
exports.track = track;
function u(events, attributes, children) {
    return node("u", events, attributes, children);
}
exports.u = u;
function ul(events, attributes, children) {
    return node("ul", events, attributes, children);
}
exports.ul = ul;
function var_(events, attributes, children) {
    return node("var", events, attributes, children);
}
exports.var_ = var_;
function video(events, attributes, children) {
    return node("video", events, attributes, children);
}
exports.video = video;
function wbr(events, attributes) {
    return voidNode("wbr", events, attributes);
}
exports.wbr = wbr;

},{"@eeue56/ts-core":"2x5HH"}],"2x5HH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Basics", ()=>_basics
);
parcelHelpers.export(exports, "Debug", ()=>_debug
);
parcelHelpers.export(exports, "Maybe", ()=>_maybe
);
parcelHelpers.export(exports, "Result", ()=>_result
);
parcelHelpers.export(exports, "Tuple", ()=>_tuple
);
var _basics = require("./lib/basics");
var _debug = require("./lib/debug");
var _maybe = require("./lib/maybe");
var _result = require("./lib/result");
var _tuple = require("./lib/tuple");

},{"./lib/basics":"8Lzb6","./lib/debug":"mUWNH","./lib/maybe":"azeB9","./lib/result":"gTagD","./lib/tuple":"81Guk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8Lzb6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable  @typescript-eslint/no-explicit-any */ /*
Takes a value, then passes it along the chain of functions.
Each return value is passed onwards to the next function.
*/ parcelHelpers.export(exports, "pipe", ()=>pipe
);
/*
Create a partial function from a list of functions
*/ parcelHelpers.export(exports, "compose", ()=>compose
);
function pipe(value, ...functions) {
    return functions.reduce((currentValue, func)=>{
        return func(currentValue);
    }, value);
}
function compose(...functions) {
    return function(value) {
        return functions.reduce((currentValue, func)=>{
            return func(currentValue);
        }, value);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"mUWNH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
Takes a message and a value - logs the message and value, then
return the value
*/ parcelHelpers.export(exports, "log", ()=>log
);
function log(message, value) {
    console.log(message, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"azeB9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
Create a Maybe with an actual value
*/ parcelHelpers.export(exports, "Just", ()=>Just
);
/*
Create a Maybe with no value
*/ parcelHelpers.export(exports, "Nothing", ()=>Nothing
);
parcelHelpers.export(exports, "isJust", ()=>isJust
);
parcelHelpers.export(exports, "isNothing", ()=>isNothing
);
/*
If a maybe has a value, return it.
Otherwise return the provided value
*/ parcelHelpers.export(exports, "withDefault", ()=>withDefault
);
/*
If a maybe has a value, apply a function to it and return a maybe containing the new value.
Otherwise return nothing.
*/ parcelHelpers.export(exports, "map", ()=>map
);
/*
If both maybes have a value, apply a function to them and return a maybe containing the new value.
Otherwise return nothing.
*/ parcelHelpers.export(exports, "map2", ()=>map2
);
/*
If all maybes have a value, apply a function to them and return a maybe containing the new value.
Otherwise return nothing.
*/ parcelHelpers.export(exports, "map3", ()=>map3
);
/*
If the maybe has a value, apply a function that turns things into a maybe to it.
Otherwise return nothing.
*/ parcelHelpers.export(exports, "andThen", ()=>andThen
);
function Just(value) {
    return {
        kind: 'just',
        value: value
    };
}
function Nothing() {
    return {
        kind: 'nothing'
    };
}
function isJust(maybe) {
    switch(maybe.kind){
        case 'just':
            return true;
        default:
            return false;
    }
}
function isNothing(maybe) {
    switch(maybe.kind){
        case 'nothing':
            return true;
        default:
            return false;
    }
}
function withDefault(value, maybeValue) {
    switch(maybeValue.kind){
        case 'just':
            return maybeValue.value;
        default:
            return value;
    }
}
function map(func, maybeValue) {
    switch(maybeValue.kind){
        case 'just':
            return Just(func(maybeValue.value));
        default:
            return maybeValue;
    }
}
function map2(func, firstMaybeValue, secondMaybeValue) {
    switch(firstMaybeValue.kind){
        case 'just':
            switch(secondMaybeValue.kind){
                case 'just':
                    return Just(func(firstMaybeValue.value, secondMaybeValue.value));
                default:
                    return Nothing();
            }
        default:
            return Nothing();
    }
}
function map3(func, firstMaybeValue, secondMaybeValue, thirdMaybeValue) {
    switch(firstMaybeValue.kind){
        case 'just':
            switch(secondMaybeValue.kind){
                case 'just':
                    switch(thirdMaybeValue.kind){
                        case 'just':
                            return Just(func(firstMaybeValue.value, secondMaybeValue.value, thirdMaybeValue.value));
                        default:
                            return Nothing();
                    }
                default:
                    return Nothing();
            }
        default:
            return Nothing();
    }
}
function andThen(func, maybeValue) {
    switch(maybeValue.kind){
        case 'just':
            return func(maybeValue.value);
        default:
            return Nothing();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gTagD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
Creates an Ok value
*/ parcelHelpers.export(exports, "Ok", ()=>Ok
);
/*
Creates an Err value
*/ parcelHelpers.export(exports, "Err", ()=>Err
);
/*
If result is Ok, return the value inside it.
Otherwise return the default value provided;
*/ parcelHelpers.export(exports, "withDefault", ()=>withDefault
);
/*
When both error and ok are the same value,
return the inner value of whichever is contained.
*/ parcelHelpers.export(exports, "either", ()=>either
);
/*
Turns Ok into Just, Err into Nothing
*/ parcelHelpers.export(exports, "toMaybe", ()=>toMaybe
);
/*
Turns Just into Ok, Nothing into Err with the default value provided.
*/ parcelHelpers.export(exports, "fromMaybe", ()=>fromMaybe
);
/*
If result is Ok, apply a function to it and return a Ok containing the new value.
Otherwise return Err.
*/ parcelHelpers.export(exports, "map", ()=>map
);
/*
If all results are Ok, apply a function to them and return a Ok containing the new value.
Otherwise return the first Err encountered.
*/ parcelHelpers.export(exports, "map2", ()=>map2
);
/*
If all results are Ok, apply a function to them and return a Ok containing the new value.
Otherwise return the first Err encountered.
*/ parcelHelpers.export(exports, "map3", ()=>map3
);
/*
If result is Err, apply a function to it and return a Err containing the new value.
Otherwise return Ok.
*/ parcelHelpers.export(exports, "mapError", ()=>mapError
);
/*
If the result is Ok, apply a function that turns things into a result to it.
Otherwise return Err.
*/ parcelHelpers.export(exports, "andThen", ()=>andThen
);
var _maybe = require("./maybe");
function Ok(value) {
    return {
        kind: 'ok',
        value: value
    };
}
function Err(error) {
    return {
        kind: 'err',
        error: error
    };
}
function withDefault(value, result) {
    switch(result.kind){
        case 'ok':
            return result.value;
        default:
            return value;
    }
}
function either(result) {
    switch(result.kind){
        case 'ok':
            return result.value;
        default:
            return result.error;
    }
}
function toMaybe(result) {
    switch(result.kind){
        case 'ok':
            return _maybe.Just(result.value);
        default:
            return _maybe.Nothing();
    }
}
function fromMaybe(error, maybe) {
    switch(maybe.kind){
        case 'just':
            return Ok(maybe.value);
        default:
            return Err(error);
    }
}
function map(func, result) {
    switch(result.kind){
        case 'ok':
            return Ok(func(result.value));
        default:
            return result;
    }
}
function map2(func, firstResult, secondResult) {
    switch(firstResult.kind){
        case 'ok':
            switch(secondResult.kind){
                case 'ok':
                    return Ok(func(firstResult.value, secondResult.value));
                default:
                    return secondResult;
            }
        default:
            return firstResult;
    }
}
function map3(func, firstResult, secondResult, thirdResult) {
    switch(firstResult.kind){
        case 'ok':
            switch(secondResult.kind){
                case 'ok':
                    switch(thirdResult.kind){
                        case 'ok':
                            return Ok(func(firstResult.value, secondResult.value, thirdResult.value));
                        default:
                            return thirdResult;
                    }
                default:
                    return secondResult;
            }
        default:
            return firstResult;
    }
}
function mapError(func, result) {
    switch(result.kind){
        case 'err':
            return Err(func(result.error));
        default:
            return result;
    }
}
function andThen(func, result) {
    switch(result.kind){
        case 'ok':
            return func(result.value);
        default:
            return result;
    }
}

},{"./maybe":"azeB9","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"81Guk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
Create a new tuple
*/ parcelHelpers.export(exports, "pair", ()=>pair
);
/*
First element of tuple
*/ parcelHelpers.export(exports, "first", ()=>first
);
/*
Second element of tuple
*/ parcelHelpers.export(exports, "second", ()=>second
);
/*
Apply a function to the first element of a tuple and save it
*/ parcelHelpers.export(exports, "mapFirst", ()=>mapFirst
);
/*
Apply a function to the second element of a tuple and save it
*/ parcelHelpers.export(exports, "mapSecond", ()=>mapSecond
);
/*
Apply two separate functions to the first and second elements of a tuple and save it
*/ parcelHelpers.export(exports, "mapBoth", ()=>mapBoth
);
function pair(first1, second1) {
    return {
        first: first1,
        second: second1
    };
}
function first(tuple) {
    return tuple.first;
}
function second(tuple) {
    return tuple.second;
}
function mapFirst(func, tuple) {
    return {
        first: func(tuple.first),
        second: tuple.second
    };
}
function mapSecond(func, tuple) {
    return {
        first: tuple.first,
        second: func(tuple.second)
    };
}
function mapBoth(firstFunc, secondFunc, tuple) {
    return {
        first: firstFunc(tuple.first),
        second: secondFunc(tuple.second)
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7kJwO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "emptyList", ()=>emptyList
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "filter", ()=>filter
);
parcelHelpers.export(exports, "foldl", ()=>foldl
);
parcelHelpers.export(exports, "filterMap", ()=>filterMap
);
parcelHelpers.export(exports, "append", ()=>append
);
parcelHelpers.export(exports, "reverse", ()=>reverse
);
const emptyList = [];
function map(fn, xs) {
    return xs.map(fn);
}
function filter(fn, xs) {
    return xs.filter(fn);
}
function foldl(fn, init, xs) {
    return xs.reduce(function(a, b) {
        return fn(b, a);
    }, init);
}
function filterMapHelp(fn, a, xs) {
    const maybe = fn(a);
    const _res = maybe;
    switch(_res.kind){
        case "Just":
            {
                const { value  } = _res;
                return append(xs, [
                    value
                ]);
            }
        case "Nothing":
            return xs;
    }
}
function filterMap(fn, xs) {
    return foldl(function(y, ys) {
        return filterMapHelp(fn, y, ys);
    }, [], xs);
}
function append(xs, ys) {
    return emptyList.concat(xs, ys);
}
function reverse(xs) {
    return xs.reverse();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6TBja":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromNumber", ()=>fromNumber
);
parcelHelpers.export(exports, "split", ()=>split
);
parcelHelpers.export(exports, "join", ()=>join
);
function fromNumber(x) {
    return x.toString();
}
function split(char, str) {
    return str.split(char);
}
function join(char, xs) {
    return xs.join(char);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["a4mrK","2V94K"], "2V94K", "parcelRequire5444")

//# sourceMappingURL=index.fb345626.js.map
