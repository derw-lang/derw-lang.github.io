(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/basics.js
  var require_basics = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/basics.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compose = exports.pipe = void 0;
      function pipe(value, ...functions) {
        return functions.reduce((currentValue, func) => {
          return func(currentValue);
        }, value);
      }
      exports.pipe = pipe;
      function compose(...functions) {
        return function(value) {
          return functions.reduce((currentValue, func) => {
            return func(currentValue);
          }, value);
        };
      }
      exports.compose = compose;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/debug.js
  var require_debug = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/debug.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.log = void 0;
      function log(message, value) {
        console.log(message, value);
        return value;
      }
      exports.log = log;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/maybe.js
  var require_maybe = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/maybe.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.andThen = exports.map3 = exports.map2 = exports.map = exports.withDefault = exports.isNothing = exports.isJust = exports.Nothing = exports.Just = void 0;
      function Just2(value) {
        return {
          kind: "just",
          value
        };
      }
      exports.Just = Just2;
      function Nothing2() {
        return {
          kind: "nothing"
        };
      }
      exports.Nothing = Nothing2;
      function isJust(maybe) {
        switch (maybe.kind) {
          case "just":
            return true;
          default:
            return false;
        }
      }
      exports.isJust = isJust;
      function isNothing(maybe) {
        switch (maybe.kind) {
          case "nothing":
            return true;
          default:
            return false;
        }
      }
      exports.isNothing = isNothing;
      function withDefault(value, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return maybeValue.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault;
      function map3(func, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return Just2(func(maybeValue.value));
          default:
            return maybeValue;
        }
      }
      exports.map = map3;
      function map22(func, firstMaybeValue, secondMaybeValue) {
        switch (firstMaybeValue.kind) {
          case "just":
            switch (secondMaybeValue.kind) {
              case "just":
                return Just2(func(firstMaybeValue.value, secondMaybeValue.value));
              default:
                return Nothing2();
            }
          default:
            return Nothing2();
        }
      }
      exports.map2 = map22;
      function map32(func, firstMaybeValue, secondMaybeValue, thirdMaybeValue) {
        switch (firstMaybeValue.kind) {
          case "just":
            switch (secondMaybeValue.kind) {
              case "just":
                switch (thirdMaybeValue.kind) {
                  case "just":
                    return Just2(func(firstMaybeValue.value, secondMaybeValue.value, thirdMaybeValue.value));
                  default:
                    return Nothing2();
                }
              default:
                return Nothing2();
            }
          default:
            return Nothing2();
        }
      }
      exports.map3 = map32;
      function andThen(func, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return func(maybeValue.value);
          default:
            return Nothing2();
        }
      }
      exports.andThen = andThen;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/result.js
  var require_result = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/result.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.andThen = exports.mapError = exports.map3 = exports.map2 = exports.map = exports.fromMaybe = exports.toMaybe = exports.either = exports.withDefault = exports.Err = exports.Ok = void 0;
      var Maybe6 = __importStar(require_maybe());
      function Ok(value) {
        return {
          kind: "ok",
          value
        };
      }
      exports.Ok = Ok;
      function Err(error) {
        return {
          kind: "err",
          error
        };
      }
      exports.Err = Err;
      function withDefault(value, result) {
        switch (result.kind) {
          case "ok":
            return result.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault;
      function either(result) {
        switch (result.kind) {
          case "ok":
            return result.value;
          default:
            return result.error;
        }
      }
      exports.either = either;
      function toMaybe(result) {
        switch (result.kind) {
          case "ok":
            return Maybe6.Just(result.value);
          default:
            return Maybe6.Nothing();
        }
      }
      exports.toMaybe = toMaybe;
      function fromMaybe(error, maybe) {
        switch (maybe.kind) {
          case "just":
            return Ok(maybe.value);
          default:
            return Err(error);
        }
      }
      exports.fromMaybe = fromMaybe;
      function map3(func, result) {
        switch (result.kind) {
          case "ok":
            return Ok(func(result.value));
          default:
            return result;
        }
      }
      exports.map = map3;
      function map22(func, firstResult, secondResult) {
        switch (firstResult.kind) {
          case "ok":
            switch (secondResult.kind) {
              case "ok":
                return Ok(func(firstResult.value, secondResult.value));
              default:
                return secondResult;
            }
          default:
            return firstResult;
        }
      }
      exports.map2 = map22;
      function map32(func, firstResult, secondResult, thirdResult) {
        switch (firstResult.kind) {
          case "ok":
            switch (secondResult.kind) {
              case "ok":
                switch (thirdResult.kind) {
                  case "ok":
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
      exports.map3 = map32;
      function mapError(func, result) {
        switch (result.kind) {
          case "err":
            return Err(func(result.error));
          default:
            return result;
        }
      }
      exports.mapError = mapError;
      function andThen(func, result) {
        switch (result.kind) {
          case "ok":
            return func(result.value);
          default:
            return result;
        }
      }
      exports.andThen = andThen;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/tuple.js
  var require_tuple = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/lib/tuple.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.mapBoth = exports.mapSecond = exports.mapFirst = exports.second = exports.first = exports.pair = void 0;
      function pair(first2, second2) {
        return {
          first: first2,
          second: second2
        };
      }
      exports.pair = pair;
      function first(tuple) {
        return tuple.first;
      }
      exports.first = first;
      function second(tuple) {
        return tuple.second;
      }
      exports.second = second;
      function mapFirst(func, tuple) {
        return {
          first: func(tuple.first),
          second: tuple.second
        };
      }
      exports.mapFirst = mapFirst;
      function mapSecond(func, tuple) {
        return {
          first: tuple.first,
          second: func(tuple.second)
        };
      }
      exports.mapSecond = mapSecond;
      function mapBoth(firstFunc, secondFunc, tuple) {
        return {
          first: firstFunc(tuple.first),
          second: secondFunc(tuple.second)
        };
      }
      exports.mapBoth = mapBoth;
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/index.js
  var require_main = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/ts-core/build/main/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tuple = exports.Result = exports.Maybe = exports.Debug = exports.Basics = void 0;
      exports.Basics = __importStar(require_basics());
      exports.Debug = __importStar(require_debug());
      exports.Maybe = __importStar(require_maybe());
      exports.Result = __importStar(require_result());
      exports.Tuple = __importStar(require_tuple());
    }
  });

  // derw-packages/derw-lang/html/node_modules/@eeue56/coed/build/coed.js
  var require_coed = __commonJS({
    "derw-packages/derw-lang/html/node_modules/@eeue56/coed/build/coed.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.footer = exports.figure = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.program = exports.map = exports.triggerEvent = exports.buildTree = exports.render = exports.voidNode = exports.node = exports.text = exports.onInput = exports.on = exports.attribute = exports.none = exports.style_ = exports.class_ = void 0;
      exports.script = exports.samp = exports.s = exports.ruby = exports.rtc = exports.rt = exports.rp = exports.rb = exports.q = exports.progress = exports.pre = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map_ = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = void 0;
      exports.wbr = exports.video = exports.var_ = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.select = exports.section = void 0;
      var ts_core_1 = require_main();
      function class_3(str) {
        return {
          kind: "string",
          key: "class",
          value: str
        };
      }
      exports.class_ = class_3;
      function style_2(key, value) {
        return {
          kind: "style",
          key,
          value
        };
      }
      exports.style_ = style_2;
      function none3() {
        return {
          kind: "none"
        };
      }
      exports.none = none3;
      function attribute2(key, value) {
        if (key === "style")
          return style_2(value.split(":")[0], value.split(":")[1]);
        return {
          kind: "string",
          key,
          value
        };
      }
      exports.attribute = attribute2;
      function on3(name, tagger) {
        return {
          name,
          tagger: (event) => {
            if (event.stopPropagation) {
              event.stopPropagation();
              event.preventDefault();
            }
            return tagger(event);
          }
        };
      }
      exports.on = on3;
      function onInput2(tagger) {
        return {
          name: "input",
          tagger: (event) => {
            event.stopPropagation();
            event.preventDefault();
            return tagger(event.target.value);
          }
        };
      }
      exports.onInput = onInput2;
      function text3(str) {
        return {
          kind: "text",
          text: str
        };
      }
      exports.text = text3;
      function node2(tag, events, attributes, children) {
        return {
          kind: "regular",
          tag,
          events,
          attributes: combineAttributes(attributes),
          children,
          _eventListeners: []
        };
      }
      exports.node = node2;
      function voidNode(tag, events, attributes) {
        return {
          kind: "void",
          tag,
          events,
          attributes: combineAttributes(attributes),
          _eventListeners: []
        };
      }
      exports.voidNode = voidNode;
      function combineAttributes(attributes) {
        const knownStringAttributes = {};
        const knownStyleAttributes = [];
        const otherAttributes = [];
        attributes.forEach((attribute3) => {
          switch (attribute3.kind) {
            case "string":
              if (!knownStringAttributes[attribute3.key]) {
                knownStringAttributes[attribute3.key] = [];
              }
              knownStringAttributes[attribute3.key].push(attribute3);
              break;
            case "style":
              knownStyleAttributes.push(attribute3);
              break;
            default:
              otherAttributes.push(attribute3);
          }
        });
        const combinedAttributes = otherAttributes.filter((attribute3) => attribute3.kind !== "none");
        Object.keys(knownStringAttributes).map((key) => {
          combinedAttributes.push(knownStringAttributes[key].reduce((acc, currentValue) => {
            if (key === "class") {
              acc.value += " " + currentValue.value;
            }
            return acc;
          }));
        });
        if (knownStyleAttributes.length > 0) {
          combinedAttributes.push(knownStyleAttributes.reduce((acc, currentValue) => {
            if (typeof acc.value === "undefined")
              acc.value = "";
            acc.value += currentValue.key + ":" + currentValue.value + ";";
            return acc;
          }, attribute2("style", "")));
        }
        return combinedAttributes;
      }
      function renderAttribute(attribute3) {
        switch (attribute3.kind) {
          case "string":
            if (attribute3.value.indexOf('"') > 0) {
              return `${attribute3.key}='${attribute3.value}'`;
            }
            return `${attribute3.key}="${attribute3.value}"`;
          case "number":
            return `${attribute3.key}=${attribute3.value}`;
          case "style":
            return "";
          case "none":
            return "";
        }
      }
      function render2(node3, depth = 0) {
        const whitespace = " ".repeat(depth * 4);
        switch (node3.kind) {
          case "text":
            return whitespace + node3.text;
          case "void":
          case "regular":
            const attributes = (node3.attributes.length > 0 ? " " : "") + node3.attributes.map(renderAttribute).join(" ");
            switch (node3.kind) {
              case "void":
                return whitespace + `<${node3.tag}${attributes}>`;
              case "regular": {
                if (node3.children.length > 0) {
                  return whitespace + `<${node3.tag}${attributes}>
${node3.children.map((child) => render2(child, depth + 1)).join("\n")}
${whitespace}</${node3.tag}>`;
                }
                return whitespace + `<${node3.tag}${attributes}></${node3.tag}>`;
              }
            }
        }
      }
      exports.render = render2;
      function buildTree(listener, node3) {
        switch (node3.kind) {
          case "text":
            return document.createTextNode(node3.text);
          case "void":
          case "regular": {
            const element = document.createElement(node3.tag);
            node3.attributes.forEach((attribute3) => {
              setAttributeOnElement(element, attribute3);
            });
            node3.events.forEach((event) => {
              const listenerFunction = (data3) => {
                listener(event.tagger(data3));
              };
              element.addEventListener(event.name, listenerFunction, {
                once: true
              });
              node3._eventListeners.push({
                event,
                listener: listenerFunction
              });
            });
            if (node3.kind === "regular") {
              const children = node3.children.map((child) => buildTree(listener, child));
              children.forEach((child) => {
                element.appendChild(child);
              });
            }
            return element;
          }
        }
      }
      exports.buildTree = buildTree;
      function triggerEvent(eventName, payload, node3) {
        switch (node3.kind) {
          case "text":
            return ts_core_1.Maybe.Nothing();
          case "void":
          case "regular":
            const events = node3.events.filter((event) => event.name === eventName);
            if (events.length > 0) {
              return ts_core_1.Maybe.Just(events[0].tagger(payload));
            } else {
              return ts_core_1.Maybe.Nothing();
            }
        }
      }
      exports.triggerEvent = triggerEvent;
      function map3(tagger, tree) {
        switch (tree.kind) {
          case "text":
            return tree;
          case "void":
            return voidNode(tree.tag, tree.events.map((event) => {
              return on3(event.name, (data3) => tagger(event.tagger(data3)));
            }), tree.attributes);
          case "regular":
            return node2(tree.tag, tree.events.map((event) => {
              return on3(event.name, (data3) => tagger(event.tagger(data3)));
            }), tree.attributes, tree.children.map((child) => {
              return map3(tagger, child);
            }));
        }
      }
      exports.map = map3;
      function setAttributeOnElement(element, attribute3) {
        switch (attribute3.kind) {
          case "string":
          case "number":
            element[attribute3.key] = attribute3.value;
            element.setAttribute(attribute3.key, attribute3.value);
            return;
          case "style":
            element.removeAttribute("style");
            const styles = attribute3.value.split(";");
            for (var i3 = 0; i3 < styles.length; i3++) {
              const styleName = styles[i3].split(":")[0];
              const styleValue = styles[i3].split(":")[1];
              element.style[styleName] = styleValue;
            }
            return;
          case "none":
            return;
        }
      }
      function patchFacts(nextTree, elements) {
        switch (nextTree.kind) {
          case "void":
          case "regular":
            nextTree.attributes.forEach((attribute3) => {
              setAttributeOnElement(elements, attribute3);
            });
            return;
          case "text":
            return;
        }
      }
      function patchEvents(listener, previousTree, nextTree, elements) {
        switch (nextTree.kind) {
          case "void":
          case "regular":
            previousTree._eventListeners.forEach((eventListeners) => {
              elements.removeEventListener(eventListeners.event.name, eventListeners.listener);
            });
            nextTree.events.forEach((event) => {
              const listenerFunction = (data3) => {
                listener(event.tagger(data3));
              };
              elements.addEventListener(event.name, listenerFunction, {
                once: true
              });
              nextTree._eventListeners.push({
                event,
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
        switch (currentTree.kind) {
          case "text":
            nextTree = nextTree;
            elements = elements;
            if (currentTree.text == nextTree.text) {
              return currentTree;
            } else {
              elements.replaceWith(document.createTextNode(nextTree.text));
              return nextTree;
            }
          case "void": {
            currentTree = currentTree;
            nextTree = nextTree;
            if (currentTree.tag != nextTree.tag) {
              elements.replaceWith(buildTree(listener, nextTree));
              return nextTree;
            } else {
              patchFacts(nextTree, elements);
              patchEvents(listener, currentTree, nextTree, elements);
              const htmlElements = elements;
            }
            return nextTree;
          }
          case "regular":
            currentTree = currentTree;
            nextTree = nextTree;
            if (currentTree.tag != nextTree.tag) {
              elements.replaceWith(buildTree(listener, nextTree));
              return nextTree;
            } else {
              patchFacts(nextTree, elements);
              patchEvents(listener, currentTree, nextTree, elements);
              const htmlElements = elements;
              for (var i3 = 0; i3 < nextTree.children.length; i3++) {
                const currentChild = currentTree.children[i3];
                const nextChild = nextTree.children[i3];
                const node3 = htmlElements.childNodes[i3];
                if (typeof node3 === "undefined") {
                  htmlElements.appendChild(buildTree(listener, nextChild));
                  continue;
                }
                switch (node3.nodeType) {
                  case Node.ELEMENT_NODE:
                    const element = node3;
                    patch(listener, currentChild, nextChild, element);
                    break;
                  case Node.TEXT_NODE:
                    const text4 = node3;
                    patch(listener, currentChild, nextChild, text4);
                    break;
                }
              }
              for (var i3 = nextTree.children.length; i3 < htmlElements.childNodes.length; i3++) {
                const node3 = htmlElements.childNodes[i3];
                htmlElements.removeChild(node3);
              }
            }
            return nextTree;
        }
      }
      function program3(program4) {
        let model = program4.initialModel;
        let previousView = program4.view(program4.initialModel);
        const listener = (msg) => {
          model = program4.update(msg, model, listener);
          const nextView = program4.view(model);
          patch(listener, previousView, nextView, currentTree);
          previousView = nextView;
        };
        let currentTree = buildTree(listener, previousView);
        program4.root.appendChild(currentTree);
        return {
          program: program4,
          send: listener
        };
      }
      exports.program = program3;
      function a2(events, attributes, children) {
        return node2("a", events, attributes, children);
      }
      exports.a = a2;
      function abbr2(events, attributes, children) {
        return node2("abbr", events, attributes, children);
      }
      exports.abbr = abbr2;
      function address2(events, attributes, children) {
        return node2("address", events, attributes, children);
      }
      exports.address = address2;
      function area2(events, attributes) {
        return voidNode("area", events, attributes);
      }
      exports.area = area2;
      function article2(events, attributes, children) {
        return node2("article", events, attributes, children);
      }
      exports.article = article2;
      function aside2(events, attributes, children) {
        return node2("aside", events, attributes, children);
      }
      exports.aside = aside2;
      function audio2(events, attributes, children) {
        return node2("audio", events, attributes, children);
      }
      exports.audio = audio2;
      function b2(events, attributes, children) {
        return node2("b", events, attributes, children);
      }
      exports.b = b2;
      function base2(events, attributes) {
        return voidNode("base", events, attributes);
      }
      exports.base = base2;
      function bdi2(events, attributes, children) {
        return node2("bdi", events, attributes, children);
      }
      exports.bdi = bdi2;
      function bdo2(events, attributes, children) {
        return node2("bdo", events, attributes, children);
      }
      exports.bdo = bdo2;
      function blockquote2(events, attributes, children) {
        return node2("blockquote", events, attributes, children);
      }
      exports.blockquote = blockquote2;
      function body2(events, attributes, children) {
        return node2("body", events, attributes, children);
      }
      exports.body = body2;
      function br2(events, attributes) {
        return voidNode("br", events, attributes);
      }
      exports.br = br2;
      function button3(events, attributes, children) {
        return node2("button", events, attributes, children);
      }
      exports.button = button3;
      function canvas2(events, attributes, children) {
        return node2("canvas", events, attributes, children);
      }
      exports.canvas = canvas2;
      function caption2(events, attributes, children) {
        return node2("caption", events, attributes, children);
      }
      exports.caption = caption2;
      function cite2(events, attributes, children) {
        return node2("cite", events, attributes, children);
      }
      exports.cite = cite2;
      function code2(events, attributes, children) {
        return node2("code", events, attributes, children);
      }
      exports.code = code2;
      function col2(events, attributes) {
        return voidNode("col", events, attributes);
      }
      exports.col = col2;
      function colgroup2(events, attributes, children) {
        return node2("colgroup", events, attributes, children);
      }
      exports.colgroup = colgroup2;
      function data2(events, attributes, children) {
        return node2("data", events, attributes, children);
      }
      exports.data = data2;
      function datalist2(events, attributes, children) {
        return node2("datalist", events, attributes, children);
      }
      exports.datalist = datalist2;
      function dd2(events, attributes, children) {
        return node2("dd", events, attributes, children);
      }
      exports.dd = dd2;
      function del2(events, attributes, children) {
        return node2("del", events, attributes, children);
      }
      exports.del = del2;
      function details2(events, attributes, children) {
        return node2("details", events, attributes, children);
      }
      exports.details = details2;
      function dfn2(events, attributes, children) {
        return node2("dfn", events, attributes, children);
      }
      exports.dfn = dfn2;
      function dialog2(events, attributes, children) {
        return node2("dialog", events, attributes, children);
      }
      exports.dialog = dialog2;
      function div3(events, attributes, children) {
        return node2("div", events, attributes, children);
      }
      exports.div = div3;
      function dl2(events, attributes, children) {
        return node2("dl", events, attributes, children);
      }
      exports.dl = dl2;
      function dt2(events, attributes, children) {
        return node2("dt", events, attributes, children);
      }
      exports.dt = dt2;
      function em2(events, attributes, children) {
        return node2("em", events, attributes, children);
      }
      exports.em = em2;
      function embed2(events, attributes) {
        return voidNode("embed", events, attributes);
      }
      exports.embed = embed2;
      function fieldset2(events, attributes, children) {
        return node2("fieldset", events, attributes, children);
      }
      exports.fieldset = fieldset2;
      function figure2(events, attributes, children) {
        return node2("figure", events, attributes, children);
      }
      exports.figure = figure2;
      function footer2(events, attributes, children) {
        return node2("footer", events, attributes, children);
      }
      exports.footer = footer2;
      function form2(events, attributes, children) {
        return node2("form", events, attributes, children);
      }
      exports.form = form2;
      function h12(events, attributes, children) {
        return node2("h1", events, attributes, children);
      }
      exports.h1 = h12;
      function h22(events, attributes, children) {
        return node2("h2", events, attributes, children);
      }
      exports.h2 = h22;
      function h32(events, attributes, children) {
        return node2("h3", events, attributes, children);
      }
      exports.h3 = h32;
      function h42(events, attributes, children) {
        return node2("h4", events, attributes, children);
      }
      exports.h4 = h42;
      function h52(events, attributes, children) {
        return node2("h5", events, attributes, children);
      }
      exports.h5 = h52;
      function h62(events, attributes, children) {
        return node2("h6", events, attributes, children);
      }
      exports.h6 = h62;
      function head2(events, attributes, children) {
        return node2("head", events, attributes, children);
      }
      exports.head = head2;
      function header2(events, attributes, children) {
        return node2("header", events, attributes, children);
      }
      exports.header = header2;
      function hgroup2(events, attributes, children) {
        return node2("hgroup", events, attributes, children);
      }
      exports.hgroup = hgroup2;
      function hr2(events, attributes) {
        return voidNode("hr", events, attributes);
      }
      exports.hr = hr2;
      function html2(events, attributes, children) {
        return node2("html", events, attributes, children);
      }
      exports.html = html2;
      function i2(events, attributes, children) {
        return node2("i", events, attributes, children);
      }
      exports.i = i2;
      function iframe2(events, attributes, children) {
        return node2("iframe", events, attributes, children);
      }
      exports.iframe = iframe2;
      function img2(events, attributes) {
        return voidNode("img", events, attributes);
      }
      exports.img = img2;
      function input2(events, attributes) {
        return voidNode("input", events, attributes);
      }
      exports.input = input2;
      function ins2(events, attributes, children) {
        return node2("ins", events, attributes, children);
      }
      exports.ins = ins2;
      function kbd2(events, attributes, children) {
        return node2("kbd", events, attributes, children);
      }
      exports.kbd = kbd2;
      function keygen2(events, attributes, children) {
        return node2("keygen", events, attributes, children);
      }
      exports.keygen = keygen2;
      function label2(events, attributes, children) {
        return node2("label", events, attributes, children);
      }
      exports.label = label2;
      function legend2(events, attributes, children) {
        return node2("legend", events, attributes, children);
      }
      exports.legend = legend2;
      function li2(events, attributes, children) {
        return node2("li", events, attributes, children);
      }
      exports.li = li2;
      function link2(events, attributes) {
        return voidNode("link", events, attributes);
      }
      exports.link = link2;
      function main3(events, attributes, children) {
        return node2("main", events, attributes, children);
      }
      exports.main = main3;
      function map_2(events, attributes, children) {
        return node2("map", events, attributes, children);
      }
      exports.map_ = map_2;
      function mark2(events, attributes, children) {
        return node2("mark", events, attributes, children);
      }
      exports.mark = mark2;
      function menu2(events, attributes, children) {
        return node2("menu", events, attributes, children);
      }
      exports.menu = menu2;
      function menuitem2(events, attributes, children) {
        return node2("menuitem", events, attributes, children);
      }
      exports.menuitem = menuitem2;
      function meta2(events, attributes) {
        return voidNode("meta", events, attributes);
      }
      exports.meta = meta2;
      function meter2(events, attributes, children) {
        return node2("meter", events, attributes, children);
      }
      exports.meter = meter2;
      function nav2(events, attributes, children) {
        return node2("nav", events, attributes, children);
      }
      exports.nav = nav2;
      function noscript2(events, attributes, children) {
        return node2("noscript", events, attributes, children);
      }
      exports.noscript = noscript2;
      function object2(events, attributes, children) {
        return node2("object", events, attributes, children);
      }
      exports.object = object2;
      function ol2(events, attributes, children) {
        return node2("ol", events, attributes, children);
      }
      exports.ol = ol2;
      function optgroup2(events, attributes, children) {
        return node2("optgroup", events, attributes, children);
      }
      exports.optgroup = optgroup2;
      function option2(events, attributes, children) {
        return node2("option", events, attributes, children);
      }
      exports.option = option2;
      function output2(events, attributes, children) {
        return node2("output", events, attributes, children);
      }
      exports.output = output2;
      function p2(events, attributes, children) {
        return node2("p", events, attributes, children);
      }
      exports.p = p2;
      function param2(events, attributes) {
        return voidNode("param", events, attributes);
      }
      exports.param = param2;
      function pre2(events, attributes, children) {
        return node2("pre", events, attributes, children);
      }
      exports.pre = pre2;
      function progress2(events, attributes, children) {
        return node2("progress", events, attributes, children);
      }
      exports.progress = progress2;
      function q2(events, attributes, children) {
        return node2("q", events, attributes, children);
      }
      exports.q = q2;
      function rb2(events, attributes, children) {
        return node2("rb", events, attributes, children);
      }
      exports.rb = rb2;
      function rp2(events, attributes, children) {
        return node2("rp", events, attributes, children);
      }
      exports.rp = rp2;
      function rt2(events, attributes, children) {
        return node2("rt", events, attributes, children);
      }
      exports.rt = rt2;
      function rtc2(events, attributes, children) {
        return node2("rtc", events, attributes, children);
      }
      exports.rtc = rtc2;
      function ruby2(events, attributes, children) {
        return node2("ruby", events, attributes, children);
      }
      exports.ruby = ruby2;
      function s2(events, attributes, children) {
        return node2("s", events, attributes, children);
      }
      exports.s = s2;
      function samp2(events, attributes, children) {
        return node2("samp", events, attributes, children);
      }
      exports.samp = samp2;
      function script2(events, attributes, children) {
        return node2("script", events, attributes, children);
      }
      exports.script = script2;
      function section2(events, attributes, children) {
        return node2("section", events, attributes, children);
      }
      exports.section = section2;
      function select2(events, attributes, children) {
        return node2("select", events, attributes, children);
      }
      exports.select = select2;
      function small2(events, attributes, children) {
        return node2("small", events, attributes, children);
      }
      exports.small = small2;
      function source2(events, attributes) {
        return voidNode("source", events, attributes);
      }
      exports.source = source2;
      function span2(events, attributes, children) {
        return node2("span", events, attributes, children);
      }
      exports.span = span2;
      function strong2(events, attributes, children) {
        return node2("strong", events, attributes, children);
      }
      exports.strong = strong2;
      function style2(events, attributes, children) {
        return node2("style", events, attributes, children);
      }
      exports.style = style2;
      function sub2(events, attributes, children) {
        return node2("sub", events, attributes, children);
      }
      exports.sub = sub2;
      function summary2(events, attributes, children) {
        return node2("summary", events, attributes, children);
      }
      exports.summary = summary2;
      function sup2(events, attributes, children) {
        return node2("sup", events, attributes, children);
      }
      exports.sup = sup2;
      function table2(events, attributes, children) {
        return node2("table", events, attributes, children);
      }
      exports.table = table2;
      function tbody2(events, attributes, children) {
        return node2("tbody", events, attributes, children);
      }
      exports.tbody = tbody2;
      function td2(events, attributes, children) {
        return node2("td", events, attributes, children);
      }
      exports.td = td2;
      function template2(events, attributes, children) {
        return node2("template", events, attributes, children);
      }
      exports.template = template2;
      function textarea2(events, attributes, children) {
        return node2("textarea", events, attributes, children);
      }
      exports.textarea = textarea2;
      function tfoot2(events, attributes, children) {
        return node2("tfoot", events, attributes, children);
      }
      exports.tfoot = tfoot2;
      function th2(events, attributes, children) {
        return node2("th", events, attributes, children);
      }
      exports.th = th2;
      function thead2(events, attributes, children) {
        return node2("thead", events, attributes, children);
      }
      exports.thead = thead2;
      function time2(events, attributes, children) {
        return node2("time", events, attributes, children);
      }
      exports.time = time2;
      function title2(events, attributes, children) {
        return node2("title", events, attributes, children);
      }
      exports.title = title2;
      function tr2(events, attributes, children) {
        return node2("tr", events, attributes, children);
      }
      exports.tr = tr2;
      function track2(events, attributes) {
        return voidNode("track", events, attributes);
      }
      exports.track = track2;
      function u2(events, attributes, children) {
        return node2("u", events, attributes, children);
      }
      exports.u = u2;
      function ul2(events, attributes, children) {
        return node2("ul", events, attributes, children);
      }
      exports.ul = ul2;
      function var_2(events, attributes, children) {
        return node2("var", events, attributes, children);
      }
      exports.var_ = var_2;
      function video2(events, attributes, children) {
        return node2("video", events, attributes, children);
      }
      exports.video = video2;
      function wbr2(events, attributes) {
        return voidNode("wbr", events, attributes);
      }
      exports.wbr = wbr2;
    }
  });

  // derw-packages/derw-lang/html/src/Html.ts
  var coed = __toESM(require_coed());
  var import_coed = __toESM(require_coed());
  function text2(str) {
    return coed.text(str);
  }
  function program2(p2) {
    return coed.program(p2);
  }
  function on2(name, tagger) {
    return coed.on(name, tagger);
  }
  function onClick(fn) {
    return on2("click", fn);
  }
  function class_2(name) {
    return coed.class_(name);
  }
  var none2 = coed.none();
  function button2(events, attributes, children) {
    return coed.button(events, attributes, children);
  }
  function div2(events, attributes, children) {
    return coed.div(events, attributes, children);
  }

  // derw-packages/derw-lang/stdlib/src/Maybe.ts
  function Just(args) {
    return __spreadValues({
      kind: "Just"
    }, args);
  }
  function Nothing(args) {
    return __spreadValues({
      kind: "Nothing"
    }, args);
  }

  // derw-packages/derw-lang/stdlib/src/Dict_kernel.ts
  function kernelUpdate(a2, fn, dict) {
    let updated = Nothing({});
    if (Object.keys(dict).indexOf(a2) === -1) {
      updated = fn(Nothing({}));
    } else {
      updated = fn(Just({ value: dict[a2] }));
    }
    if (updated.kind === "Nothing") {
      const newDict2 = {};
      for (const key of Object.keys(newDict2)) {
        if (key !== a2) {
          newDict2[key] = dict[key];
        }
      }
      return newDict2;
    }
    const newDict = __spreadValues({}, dict);
    newDict[a2] = updated.value;
    return newDict;
  }
  function kernelFromList(items) {
    const obj = {};
    for (const item of items) {
      obj[item.key] = item.value;
    }
    return obj;
  }
  function kernelToList(dict) {
    const items = [];
    for (const key of Object.keys(dict)) {
      items.push({ key, value: dict[key] });
    }
    return items;
  }

  // derw-packages/derw-lang/stdlib/src/Dict.ts
  function update(a2, fn, dict) {
    return kernelUpdate(a2, fn, dict);
  }
  function fromList(items) {
    return kernelFromList(items);
  }
  function toList(dict) {
    return kernelToList(dict);
  }

  // derw-packages/derw-lang/stdlib/src/List.ts
  var emptyList = [];
  function map2(fn, xs) {
    return xs.map(fn);
  }
  function indexedMap(fn, xs) {
    return xs.map(fn);
  }
  function filter(fn, xs) {
    return xs.filter(fn);
  }
  function append(xs, ys) {
    return emptyList.concat(xs, ys);
  }

  // derw-packages/derw-lang/stdlib/src/Random_kernel.ts
  function kernelChoice(n, xs) {
    const shuffled = [...xs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  // derw-packages/derw-lang/stdlib/src/Random.ts
  function choice(n, xs) {
    return kernelChoice(n, xs);
  }

  // derw-packages/derw-lang/stdlib/src/String.ts
  function split(char, str) {
    return str.split(char);
  }
  function join(char, xs) {
    return xs.join(char);
  }

  // derw-packages/derw-lang/web/src/LocalStorage.ts
  function setItem(name, value) {
    return globalThis.localStorage.setItem(name, value);
  }
  function getItem(name) {
    const item = globalThis.localStorage.getItem(name);
    if (item === null) {
      return Nothing({});
    } else {
      return Just({ value: item });
    }
  }
  function removeItem(name) {
    return globalThis.localStorage.removeItem(name);
  }

  // src/Main.ts
  var wordSet = ["agile", "innovation", "reorg", "sprint", "collaboration", "multi displine", "ambition", "empower", "team of teams", "core", "brands", "revolution", "impact", "reach", "audience", "personalization", "must win battles", "OKRs", "ideation", "javascript", "big data", "algorithm", "curation", "management", "sales", "adverts", "trust the process", "going forward", "growth", "the future", "stronger together"];
  function Unclicked(args) {
    return __spreadValues({
      kind: "Unclicked"
    }, args);
  }
  function Clicked(args) {
    return __spreadValues({
      kind: "Clicked"
    }, args);
  }
  var wordSetWithState = map2(function(x) {
    return {
      key: x,
      value: Unclicked({})
    };
  }, wordSet);
  function getStoredWords(any_) {
    return getItem("words");
  }
  function wordStateFromString(str) {
    const _res114225 = str;
    switch (_res114225) {
      case "clicked": {
        return Clicked({});
      }
      default: {
        return Unclicked({});
      }
    }
  }
  function listItemFromString(str) {
    const split2 = split("=", str);
    if (split2.length === 2) {
      return {
        key: split2[0],
        value: wordStateFromString(split2[1])
      };
    } else {
      return {
        key: "",
        value: Unclicked({})
      };
    }
  }
  function loadFromLocalStorage(_any) {
    const _res1841567377 = getStoredWords(0);
    switch (_res1841567377.kind) {
      case "Nothing": {
        const newWords = fromList(choice(25, wordSetWithState));
        const store = saveToLocalStorage(newWords);
        return newWords;
      }
      case "Just": {
        const { value } = _res1841567377;
        return fromList(map2(listItemFromString, split("&", value)));
      }
    }
  }
  var initialModel = { words: loadFromLocalStorage(0) };
  function Click(args) {
    return __spreadValues({
      kind: "Click"
    }, args);
  }
  function Regenerate(args) {
    return __spreadValues({
      kind: "Regenerate"
    }, args);
  }
  function click(maybeState) {
    const _res1004890377 = maybeState;
    switch (_res1004890377.kind) {
      case "Nothing": {
        return Nothing({});
      }
      case "Just": {
        const { value } = _res1004890377;
        const _res111972721 = value;
        switch (_res111972721.kind) {
          case "Unclicked": {
            return Just({ value: Clicked({}) });
          }
          case "Clicked": {
            return Just({ value: Unclicked({}) });
          }
        }
        ;
      }
    }
  }
  function wordToStorageFormat(item) {
    const _res942350038 = item.value;
    switch (_res942350038.kind) {
      case "Clicked": {
        return `${item.key}=clicked`;
      }
      case "Unclicked": {
        return `${item.key}=unclicked`;
      }
    }
  }
  function saveToLocalStorage(words) {
    return setItem("words", join("&", map2(wordToStorageFormat, toList(words))));
  }
  function update2(msg, model) {
    const _res108417 = msg;
    switch (_res108417.kind) {
      case "Noop": {
        return model;
      }
      case "Click": {
        const { key } = _res108417;
        const updatedWords = update(key, click, model.words);
        const blank = saveToLocalStorage(updatedWords);
        return { words: updatedWords };
      }
      case "Regenerate": {
        const emptyLocalStorage = removeItem("words");
        return { words: loadFromLocalStorage(0) };
      }
    }
  }
  function viewCell(item) {
    const className = function() {
      const _res942350038 = item.value;
      switch (_res942350038.kind) {
        case "Unclicked": {
          return "unclicked";
        }
        case "Clicked": {
          return "clicked";
        }
      }
    }();
    return div2([onClick(function(x) {
      return Click({ key: item.key });
    })], [class_2("cell"), class_2(className)], [div2([], [], [text2(item.key)])]);
  }
  function viewBingoCell(words, letter, index) {
    const winningClass = isColumnComplete(words, index) ? "you-got-it" : "";
    return div2([], [class_2("cell"), class_2("bingo"), class_2(winningClass)], [div2([], [], [text2(letter)])]);
  }
  function bingoRow(words) {
    return indexedMap(function(letter, index) {
      return viewBingoCell(words, letter, index);
    }, ["B", "I", "N", "G", "O"]);
  }
  function wordStateToBoolean(state) {
    const _res109757585 = state;
    switch (_res109757585.kind) {
      case "Clicked": {
        return true;
      }
      case "Unclicked": {
        return false;
      }
    }
  }
  function isColumnComplete(words, columnIndex) {
    const wordsAsList = toList(words);
    function sumColumn(x) {
      return x + columnIndex;
    }
    return function(x) {
      return x.length === 5;
    }(filter(function(item) {
      return wordStateToBoolean(item.value);
    }, map2(function(index) {
      return wordsAsList[index];
    }, map2(sumColumn, [0, 5, 10, 15, 20]))));
  }
  var viewRegenerate = div2([], [class_2("regenerate-div")], [button2([onClick(function(_) {
    return Regenerate({});
  })], [class_2("regenerate")], [text2("Generate a new bingo card")])]);
  function view(model) {
    const bingo = bingoRow(model.words);
    const wordGrid = map2(function(x) {
      return viewCell(x);
    }, toList(model.words));
    const grid = append(bingo, wordGrid);
    return div2([], [], [viewRegenerate, div2([], [class_2("grid")], grid)]);
  }
  var root = document.getElementById("root");
  var main2 = program2({
    initialModel,
    update: update2,
    view,
    root
  });
})();
