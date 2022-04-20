(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a3, prop, b2[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b2) => __defProps(a3, __getOwnPropDescs(b2));
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
      function withDefault4(value, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return maybeValue.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault4;
      function map6(func, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return Just2(func(maybeValue.value));
          default:
            return maybeValue;
        }
      }
      exports.map = map6;
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
      var Maybe10 = __importStar(require_maybe());
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
      function withDefault4(value, result) {
        switch (result.kind) {
          case "ok":
            return result.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault4;
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
            return Maybe10.Just(result.value);
          default:
            return Maybe10.Nothing();
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
      function map6(func, result) {
        switch (result.kind) {
          case "ok":
            return Ok(func(result.value));
          default:
            return result;
        }
      }
      exports.map = map6;
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
      function class_4(str) {
        return {
          kind: "string",
          key: "class",
          value: str
        };
      }
      exports.class_ = class_4;
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
      function attribute3(key, value) {
        if (key === "style")
          return style_2(value.split(":")[0], value.split(":")[1]);
        return {
          kind: "string",
          key,
          value
        };
      }
      exports.attribute = attribute3;
      function on4(name, tagger) {
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
      exports.on = on4;
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
        attributes.forEach((attribute4) => {
          switch (attribute4.kind) {
            case "string":
              if (!knownStringAttributes[attribute4.key]) {
                knownStringAttributes[attribute4.key] = [];
              }
              knownStringAttributes[attribute4.key].push(attribute4);
              break;
            case "style":
              knownStyleAttributes.push(attribute4);
              break;
            default:
              otherAttributes.push(attribute4);
          }
        });
        const combinedAttributes = otherAttributes.filter((attribute4) => attribute4.kind !== "none");
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
          }, attribute3("style", "")));
        }
        return combinedAttributes;
      }
      function renderAttribute(attribute4) {
        switch (attribute4.kind) {
          case "string":
            if (attribute4.value.indexOf('"') > 0) {
              return `${attribute4.key}='${attribute4.value}'`;
            }
            return `${attribute4.key}="${attribute4.value}"`;
          case "number":
            return `${attribute4.key}=${attribute4.value}`;
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
            node3.attributes.forEach((attribute4) => {
              setAttributeOnElement(element, attribute4);
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
      function map6(tagger, tree) {
        switch (tree.kind) {
          case "text":
            return tree;
          case "void":
            return voidNode(tree.tag, tree.events.map((event) => {
              return on4(event.name, (data3) => tagger(event.tagger(data3)));
            }), tree.attributes);
          case "regular":
            return node2(tree.tag, tree.events.map((event) => {
              return on4(event.name, (data3) => tagger(event.tagger(data3)));
            }), tree.attributes, tree.children.map((child) => {
              return map6(tagger, child);
            }));
        }
      }
      exports.map = map6;
      function setAttributeOnElement(element, attribute4) {
        switch (attribute4.kind) {
          case "string":
          case "number":
            element[attribute4.key] = attribute4.value;
            element.setAttribute(attribute4.key, attribute4.value);
            return;
          case "style":
            element.removeAttribute("style");
            const styles = attribute4.value.split(";");
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
      function patchFacts(previousTree, nextTree, elements) {
        switch (nextTree.kind) {
          case "void":
          case "regular": {
            if (previousTree.kind === nextTree.kind) {
              previousTree.attributes.filter((attribute4) => {
                for (const nextAttribute of nextTree.attributes) {
                  let seen = false;
                  if (attribute4.kind === nextAttribute.kind) {
                    switch (nextAttribute.kind) {
                      case "number":
                      case "string": {
                        seen = nextAttribute.key === attribute4.key;
                        break;
                      }
                      case "style":
                        seen = true;
                    }
                  }
                  if (seen)
                    return false;
                }
                return true;
              }).forEach((attribute4) => {
                switch (attribute4.kind) {
                  case "number":
                    elements.removeAttribute(attribute4.key);
                  case "string":
                    elements.removeAttribute(attribute4.key);
                  case "style":
                    elements.removeAttribute("style");
                }
              });
            }
            nextTree.attributes.forEach((attribute4) => {
              setAttributeOnElement(elements, attribute4);
            });
            return;
          }
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
              patchFacts(currentTree, nextTree, elements);
              patchEvents(listener, currentTree, nextTree, elements);
              const htmlElements = elements;
            }
            return nextTree;
          }
          case "regular":
            currentTree = currentTree;
            nextTree = nextTree;
            const currentTreeId = currentTree.attributes.filter((x) => x.kind === "string" && x.key === "id")[0];
            const nextTreeId = nextTree.attributes.filter((x) => x.kind === "string" && x.key === "id")[0];
            if (currentTree.tag !== nextTree.tag || currentTreeId !== nextTreeId) {
              elements.replaceWith(buildTree(listener, nextTree));
              return nextTree;
            } else {
              patchFacts(currentTree, nextTree, elements);
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
              for (var i3 = htmlElements.childNodes.length - 1; i3 > nextTree.children.length - 1; i3--) {
                const node3 = htmlElements.childNodes[i3];
                htmlElements.removeChild(node3);
              }
            }
            return nextTree;
        }
      }
      function program2(program3) {
        let model = program3.initialModel;
        let previousView = program3.view(program3.initialModel);
        const listener = (msg) => {
          model = program3.update(msg, model, listener);
          const nextView = program3.view(model);
          patch(listener, previousView, nextView, currentTree);
          previousView = nextView;
        };
        let currentTree = buildTree(listener, previousView);
        program3.root.appendChild(currentTree);
        return {
          program: program3,
          send: listener
        };
      }
      exports.program = program2;
      function a3(events, attributes, children) {
        return node2("a", events, attributes, children);
      }
      exports.a = a3;
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
      function button2(events, attributes, children) {
        return node2("button", events, attributes, children);
      }
      exports.button = button2;
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
      function img3(events, attributes) {
        return voidNode("img", events, attributes);
      }
      exports.img = img3;
      function input3(events, attributes) {
        return voidNode("input", events, attributes);
      }
      exports.input = input3;
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
      function p3(events, attributes, children) {
        return node2("p", events, attributes, children);
      }
      exports.p = p3;
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
  function programWithSend(p3) {
    return coed.program(p3);
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
  function attribute2(name, value) {
    return coed.attribute(name, value);
  }
  function a2(events, attributes, children) {
    return coed.a(events, attributes, children);
  }
  function div2(events, attributes, children) {
    return coed.div(events, attributes, children);
  }
  function img2(events, attributes) {
    return coed.img(events, attributes);
  }
  function input2(events, attributes) {
    return coed.input(events, attributes);
  }
  function p2(events, attributes, children) {
    return coed.p(events, attributes, children);
  }

  // derw-packages/derw-lang/stdlib/src/List_kernel.ts
  function kernelEmptyList() {
    return [];
  }
  function kernelSortBy(fn, xs) {
    const ys = [...xs];
    ys.sort(fn);
    return ys;
  }

  // derw-packages/derw-lang/stdlib/src/List.ts
  function map2(fn, xs) {
    return xs.map(fn);
  }
  function foldl(fn, init, xs) {
    return xs.reduce(function(a3, b2) {
      return fn(b2, a3);
    }, init);
  }
  function filterMapHelp(fn, a3, xs) {
    const maybe = fn(a3);
    const _res103672936 = maybe;
    switch (_res103672936.kind) {
      case "Just": {
        const { value } = _res103672936;
        return append(xs, [value]);
      }
      case "Nothing": {
        return xs;
      }
    }
  }
  function filterMap(fn, xs) {
    return foldl(function(y, ys) {
      return filterMapHelp(fn, y, ys);
    }, [], xs);
  }
  function append(xs, ys) {
    return function(x) {
      return x.concat(xs, ys);
    }(kernelEmptyList());
  }
  function sortBy(fn, xs) {
    return kernelSortBy(fn, xs);
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
  function map3(fn, maybe) {
    const _res103672936 = maybe;
    switch (_res103672936.kind) {
      case "Just": {
        const { value } = _res103672936;
        return Just({ value: fn(value) });
      }
      case "Nothing": {
        return Nothing({});
      }
    }
  }

  // derw-packages/derw-lang/web/src/FileReader_kernel.ts
  function toBase64(file, onFinish) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var _a;
      return onFinish(((_a = reader.result) == null ? void 0 : _a.toString()) || "");
    };
  }

  // derw-packages/derw-lang/web/src/FileReader.ts
  function toBase642(file, onFinish) {
    return toBase64(file, onFinish);
  }

  // derw-packages/derw-lang/web/src/Geolocation_kernel.ts
  var options = {
    enableHighAccuracy: true,
    timeout: 5e3,
    maximumAge: 0
  };
  function getCurrentPosition(onFinish, onError) {
    navigator.geolocation.getCurrentPosition((position) => onFinish({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }), onError, options);
  }

  // derw-packages/derw-lang/web/src/Geolocation.ts
  function getCurrentPosition2(onFinish, onError) {
    return getCurrentPosition(onFinish, onError);
  }

  // derw-packages/derw-lang/web/src/IndexedDB_kernel.ts
  function Field(args) {
    return __spreadValues({}, args);
  }
  function Row(args) {
    return __spreadValues({}, args);
  }
  function Table(args) {
    return __spreadValues({}, args);
  }
  function open(name, table2, onFinish) {
    const request = indexedDB.open(name);
    let database = null;
    request.onupgradeneeded = () => {
      database = request.result;
      const store = database.createObjectStore(table2.name, {
        keyPath: table2.key
      });
      for (const field of table2.row.fields) {
        store.createIndex(`by_${field.name}`, name);
      }
    };
    request.onsuccess = function() {
      database = request.result;
      onFinish({
        request,
        database
      });
    };
  }
  function insert(database, table2, row, onFinish) {
    if (database.database === null)
      return;
    const tx = database.database.transaction(table2.name, "readwrite");
    const store = tx.objectStore(table2.name);
    const obj = {};
    for (const field of row.fields) {
      obj[field.name] = field.value;
    }
    store.put(obj);
    tx.oncomplete = function() {
      onFinish();
    };
  }
  function fetchOne(database, table2, field, onFinish) {
    if (database.database === null) {
      onFinish(null);
      return;
    }
    const tx = database.database.transaction(table2.name, "readonly");
    const store = tx.objectStore(table2.name);
    const request = store.get(field.value);
    request.onsuccess = function() {
      const matching = request.result;
      if (matching !== void 0) {
        const row = __spreadValues({}, table2.row);
        for (const fieldName of Object.keys(matching)) {
          let i2 = 0;
          for (const innerField of table2.row.fields) {
            if (innerField.name === fieldName) {
              row.fields.splice(i2, 1, Field({ name: fieldName, value: matching[fieldName] }));
              break;
            }
            i2++;
          }
        }
        onFinish(row);
      } else {
        onFinish(null);
      }
    };
  }
  function fetchAll(database, table2, onFinish) {
    if (database.database === null) {
      onFinish([]);
      return;
    }
    const tx = database.database.transaction(table2.name, "readonly");
    const store = tx.objectStore(table2.name);
    const request = store.getAll();
    request.onsuccess = function() {
      const requestMatch = request.result;
      if (requestMatch !== void 0) {
        const rows = [];
        for (const matching of requestMatch) {
          const row = { fields: [] };
          for (const fieldName of Object.keys(matching)) {
            row.fields.push(Field({ name: fieldName, value: matching[fieldName] }));
          }
          rows.push(row);
        }
        onFinish(rows);
      } else {
        onFinish([]);
      }
    };
  }
  function deleteOne(database, table2, field, onFinish) {
    if (database.database === null) {
      onFinish();
      return;
    }
    const tx = database.database.transaction(table2.name, "readwrite");
    const store = tx.objectStore(table2.name);
    const request = store.delete(field.value);
    request.onsuccess = () => {
      onFinish();
    };
    request.onerror = () => {
      onFinish();
    };
  }

  // derw-packages/derw-lang/web/src/IndexedDB.ts
  function open2(name, table2, onFinish) {
    return open(name, table2, onFinish);
  }
  function insert2(database, table2, row, onFinish) {
    return insert(database, table2, row, onFinish);
  }
  function fetchOne2(database, table2, field, onFinish) {
    function onFinishHelper(x) {
      if (x === null) {
        return onFinish(Nothing({}));
      } else {
        return onFinish(Just({ value: x }));
      }
    }
    return fetchOne(database, table2, field, onFinishHelper);
  }
  function fetchAll2(database, table2, onFinish) {
    return fetchAll(database, table2, onFinish);
  }
  function deleteOne2(database, table2, field, onFinish) {
    return deleteOne(database, table2, field, onFinish);
  }
  function getFieldHelper(fields, field) {
    const _res1274708295 = fields;
    switch (_res1274708295.length) {
      case 0: {
        return Nothing({});
      }
      case _res1274708295.length: {
        if (_res1274708295.length >= 1) {
          const [firstField, ...rest] = _res1274708295;
          if (firstField.name === field.name) {
            return Just({ value: firstField });
          } else {
            return getFieldHelper(rest, field);
          }
          ;
        }
      }
      default: {
        return Nothing({});
      }
    }
  }
  function getField(field, row) {
    return getFieldHelper(row.fields, field);
  }

  // derw-packages/derw-lang/zipper/src/Zipper.ts
  function ZipperNode(args) {
    return __spreadValues({
      kind: "ZipperNode"
    }, args);
  }
  function from(previous, head2, next2) {
    return ZipperNode({
      head: head2,
      next: next2,
      previous
    });
  }
  function current(zipper) {
    return zipper.head;
  }
  function next(zipper) {
    const _res464151365 = zipper.next;
    switch (_res464151365.length) {
      case _res464151365.length: {
        if (_res464151365.length >= 1) {
          const [x, ...rest] = _res464151365;
          return function(x2) {
            return Just({ value: x2 });
          }(ZipperNode({
            head: x,
            previous: append(zipper.previous, [zipper.head]),
            next: rest
          }));
        }
      }
      default: {
        return Nothing({});
      }
    }
  }

  // src/Instructions.ts
  var viewWelcome = div2([], [], [text2("Welcome to the Oslo scavenger hunt, by "), a2([], [attribute2("href", "https://twitter.com/eeue56")], [text2("Noah!")]), p2([], [], [text2("Written in "), a2([], [attribute2("href", "https://derw-lang.github.io/")], [text2("Derw")])])]);
  var viewHowToPlay = div2([], [], [text2("You'll be presented with a series of locations near by you in Oslo. Your mission is to find the point of interest, then take a picture of yourself there.")]);
  var viewEnd = div2([], [], [text2("Your pictures will be stored locally on your device, and once you have visited all locations, you'll see a collage! You can leave and revisit this page, if you want to play over several days.")]);
  var viewGoal = div2([], [], [text2("The goal is to take the most interesting pictures you can at as many of the locations possible. You will likely need public transport, so download Ruter!")]);
  var instructions = from([], viewWelcome, [viewHowToPlay, viewEnd, viewGoal]);

  // src/Location_kernel.ts
  function getDistanceBetweenTwoPoints(cord1, cord2) {
    if (cord1.lat == cord2.lat && cord1.lon == cord2.lon) {
      return 0;
    }
    const radlat1 = Math.PI * cord1.lat / 180;
    const radlat2 = Math.PI * cord2.lat / 180;
    const theta = cord1.lon - cord2.lon;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist;
  }

  // src/Location.ts
  var locations = [{
    name: "Astrup Fearnley Museum of Modern Art",
    lat: 59.906043,
    lon: 10.7237666,
    clue: "",
    hint: ""
  }, {
    name: "Opera behind the scenes",
    lat: 59.906575,
    lon: 10.754384,
    clue: "Find the coolest costume",
    hint: "The back of the opera"
  }, {
    name: "Floating saunas",
    lat: 59.9072864,
    lon: 10.7512378,
    clue: "Find the tallest sauna",
    hint: "They should be in the water next to the path"
  }, {
    name: "Opera",
    lat: 59.9077674,
    lon: 10.750342,
    clue: "Find the highest spot to take a picture from",
    hint: "Walk up the sloping roof"
  }, {
    name: "The fortress",
    lat: 59.9057124,
    lon: 10.742349,
    clue: "Search the fortress for the best ocean view",
    hint: "You should be able to see Aker Brygge and the city hall"
  }, {
    name: "Cityhall (R\xE5dhuset)",
    lat: 59.9101988,
    lon: 10.7341092,
    clue: "Find the secret button",
    hint: "It's near the hanging bell"
  }, {
    name: "The Royal Palace",
    lat: 59.913149,
    lon: 10.7271355,
    clue: "",
    hint: ""
  }, {
    name: "Schibsted offices",
    lat: 59.91496,
    lon: 10.7428963,
    clue: "Take a moment to sit down and read a paper",
    hint: "Near the entrance to the Aftenposten and VG offices."
  }, {
    name: "Grass Roots Square",
    lat: 59.915751,
    lon: 10.74262,
    clue: "Stand on the tiny people",
    hint: "Look on the floor near the security"
  }, {
    name: "Vigelandsparken",
    lat: 59.925749,
    lon: 10.7056845,
    clue: "Find the angry baby",
    hint: "It's on the bridge"
  }, {
    name: "Monolitten",
    lat: 59.926706,
    lon: 10.702541,
    clue: "Find the most expressive face",
    hint: "Take your pick"
  }, {
    name: "Oslo Western Civil Cemetery",
    lat: 59.930472,
    lon: 10.6981636,
    clue: "Find the most interesting name",
    hint: "Or the oldest gravestone"
  }, {
    name: "Ekebergparken",
    lat: 59.898681,
    lon: 10.7575776,
    clue: "Find the most interesting sculpture",
    hint: "There's a talking lamppost if you look hard enough"
  }, {
    name: "Santa skulptur",
    lat: 59.902763,
    lon: 10.7661672,
    clue: "Find the inappropriate Santa statue",
    hint: "It's in the middle of a roundabout"
  }, {
    name: "A lonely duck",
    lat: 59.913097,
    lon: 10.7734306,
    clue: "Find the lonely duck leaving the nest",
    hint: "Look on the side of buildings near Kiwi"
  }, {
    name: "An odd future",
    lat: 59.9137662,
    lon: 10.7718388,
    clue: "Find the mouthless giant",
    hint: "Look on the side of buildings"
  }, {
    name: "Nedre Foss",
    lat: 59.922,
    lon: 10.753203,
    clue: "Find the closest spot to the waterfall you can find",
    hint: "Cross the bridge and find a secret path to the platform nearby"
  }, {
    name: "Upper waterfall",
    lat: 59.9306,
    lon: 10.7574489,
    clue: "Stand above the waterfall to gain its power",
    hint: "There's an elephant nearby"
  }, {
    name: "Your nearest store",
    lat: 59.9306,
    lon: 10.7574489,
    clue: "Find 5 things you've never tried before",
    hint: "Try an Asian store if you can't find anything in Kiwi"
  }, {
    name: "The Tiger",
    lat: 59.910437,
    lon: 10.7509402,
    clue: "A giant metal tiger guards the city",
    hint: "It's really hard to miss"
  }];
  function findLocationPicture(xs, location) {
    const _res3835 = xs;
    switch (_res3835.length) {
      case 0: {
        return Nothing({});
      }
      case _res3835.length: {
        if (_res3835.length >= 1) {
          const [x, ...rest] = _res3835;
          if (x.name === location.name) {
            return Just({ value: x });
          } else {
            return findLocationPicture(rest, location);
          }
          ;
        }
      }
      default: {
        return Nothing({});
      }
    }
  }
  function firstLocationWithoutPicture(locations2, pictures, length) {
    const _res1197189282 = locations2;
    switch (_res1197189282.length) {
      case 0: {
        return length;
      }
      case _res1197189282.length: {
        if (_res1197189282.length >= 1) {
          const [location, ...rest] = _res1197189282;
          const _res1379241267 = findLocationPicture(pictures, location);
          switch (_res1379241267.kind) {
            case "Nothing": {
              return length;
            }
            case "Just": {
              const picture = _res1379241267;
              const index = length + 1;
              return firstLocationWithoutPicture(rest, pictures, index);
            }
          }
          ;
        }
      }
      default: {
        return length;
      }
    }
  }
  function intoLocationPairs(pictures, locations2) {
    const _res1197189282 = locations2;
    switch (_res1197189282.length) {
      case 0: {
        return [];
      }
      case _res1197189282.length: {
        if (_res1197189282.length >= 1) {
          const [location, ...rest] = _res1197189282;
          const _res1379241267 = findLocationPicture(pictures, location);
          switch (_res1379241267.kind) {
            case "Nothing": {
              return [Nothing({}), ...intoLocationPairs(pictures, rest)];
            }
            case "Just": {
              const { value } = _res1379241267;
              return [Just({ value: {
                picture: value,
                location
              } }), ...intoLocationPairs(pictures, rest)];
            }
          }
          ;
        }
      }
      default: {
        return [];
      }
    }
  }
  function withoutLocationPictures(pictures, locations2) {
    const _res1197189282 = locations2;
    switch (_res1197189282.length) {
      case 0: {
        return [];
      }
      case _res1197189282.length: {
        if (_res1197189282.length >= 1) {
          const [location, ...rest] = _res1197189282;
          const _res1379241267 = findLocationPicture(pictures, location);
          switch (_res1379241267.kind) {
            case "Nothing": {
              return [location, ...withoutLocationPictures(pictures, rest)];
            }
            case "Just": {
              const { value } = _res1379241267;
              return withoutLocationPictures(pictures, rest);
            }
          }
          ;
        }
      }
      default: {
        return [];
      }
    }
  }
  function locationsWithDistance(coord, locations2) {
    return map2(function(location) {
      return {
        distance: getDistanceBetweenTwoPoints(coord, {
          lat: location.lat,
          lon: location.lon
        }),
        location
      };
    }, locations2);
  }
  function sortingFunction(x, y) {
    if (x.distance === y.distance) {
      return 0;
    } else {
      if (x.distance < y.distance) {
        return -1;
      } else {
        return 1;
      }
      ;
    }
  }
  function sortLocationsByDistance(coord, xs) {
    return map2(function(x) {
      return x.location;
    }, sortBy(sortingFunction, locationsWithDistance(coord, xs)));
  }

  // derw-packages/derw-lang/web/src/History.ts
  function pushState(state) {
    return globalThis.history.pushState(state, "");
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

  // src/PageMode.ts
  function LoadingGpsMode(args) {
    return __spreadValues({
      kind: "LoadingGpsMode"
    }, args);
  }
  function InstructionsMode(args) {
    return __spreadValues({
      kind: "InstructionsMode"
    }, args);
  }
  function PreferencesMode(args) {
    return __spreadValues({
      kind: "PreferencesMode"
    }, args);
  }
  function GameMode(args) {
    return __spreadValues({
      kind: "GameMode"
    }, args);
  }
  function SummaryMode(args) {
    return __spreadValues({
      kind: "SummaryMode"
    }, args);
  }
  function getNextPageMode(mode) {
    const _res3357091 = mode;
    switch (_res3357091.kind) {
      case "LoadingGpsMode": {
        return InstructionsMode({});
      }
      case "InstructionsMode": {
        return PreferencesMode({});
      }
      case "PreferencesMode": {
        return GameMode({});
      }
      case "GameMode": {
        return SummaryMode({});
      }
      case "SummaryMode": {
        return SummaryMode({});
      }
    }
  }
  function nextPageMode(mode) {
    const next2 = getNextPageMode(mode);
    const push = pushPageMode(next2);
    const store = storePageMode(next2);
    return next2;
  }
  function toMode(mode) {
    const store = storePageMode(mode);
    const push = pushPageMode(mode);
    return mode;
  }
  function toModeWithoutPush(mode) {
    const store = storePageMode(mode);
    return mode;
  }
  function toSummaryPageMode(_) {
    const next2 = SummaryMode({});
    const store = storePageMode(next2);
    const push = pushPageMode(next2);
    return next2;
  }
  var defaultPageMode = LoadingGpsMode({});
  function serializePageMode(pageMode) {
    return `${pageMode.kind}`;
  }
  function deserializePageMode(str) {
    const _res114225 = str;
    switch (_res114225) {
      case "LoadingGpsMode": {
        return Just({ value: LoadingGpsMode({}) });
      }
      case "InstructionsMode": {
        return Just({ value: InstructionsMode({}) });
      }
      case "PreferencesMode": {
        return Just({ value: PreferencesMode({}) });
      }
      case "GameMode": {
        return Just({ value: GameMode({}) });
      }
      case "SummaryMode": {
        return Just({ value: SummaryMode({}) });
      }
      default: {
        return Nothing({});
      }
    }
  }
  function getStoredPageMode(any_) {
    return getItem("pageMode");
  }
  function pushPageMode(pageMode) {
    return pushState(serializePageMode(pageMode));
  }
  function storePageMode(pageMode) {
    return setItem("pageMode", serializePageMode(pageMode));
  }
  function loadPageModeFromLocalStorage(_any) {
    const _res761439818 = getStoredPageMode(0);
    switch (_res761439818.kind) {
      case "Just": {
        const { value } = _res761439818;
        const _res1535511663 = deserializePageMode(value);
        switch (_res1535511663.kind) {
          case "Nothing": {
            return defaultPageMode;
          }
          case "Just": {
            const { value: value2 } = _res1535511663;
            return value2;
          }
        }
        ;
      }
      case "Nothing": {
        return defaultPageMode;
      }
    }
  }

  // src/Photo.ts
  var photoRow = Row({ fields: [Field({
    name: "name",
    value: ""
  }), Field({
    name: "binary",
    value: ""
  })] });
  var photoTable = Table({
    name: "photos",
    key: "name",
    row: photoRow
  });
  function photoRowFromPicture(picture) {
    return Row({ fields: [Field({
      name: "name",
      value: picture.name
    }), Field({
      name: "binary",
      value: picture.binary
    })] });
  }
  function pictureFromPhotoRow(row) {
    const name = map3(function(field) {
      return field.value;
    }, getField(Field({
      name: "name",
      value: ""
    }), row));
    const binary = map3(function(field) {
      return field.value;
    }, getField(Field({
      name: "binary",
      value: ""
    }), row));
    const _res1725459294 = [name, binary];
    switch (_res1725459294.length) {
      case _res1725459294.length: {
        if (_res1725459294.length >= 2) {
          const [_0, _1, ...rest] = _res1725459294;
          if (_0.kind === "Just" && _1.kind === "Just") {
            const { value: name2 } = _0;
            const { value: binary2 } = _1;
            return Just({ value: {
              name: name2,
              binary: binary2
            } });
          }
        }
      }
      default: {
        return Nothing({});
      }
    }
  }
  function photoName(name) {
    return Field({
      name: "name",
      value: name
    });
  }

  // derw-packages/derw-lang/stdlib/src/String.ts
  function split(char, str) {
    return str.split(char);
  }
  function join(char, xs) {
    return xs.join(char);
  }

  // src/Preferences.ts
  function serializePreference(preference) {
    return `${preference.question}=${preference.value}`;
  }
  function deserializePreference(str) {
    const split2 = split("=", str);
    if (split2.length === 2) {
      return function(x) {
        return Just({ value: x });
      }({
        question: split2[0],
        value: split2[1] === "true"
      });
    } else {
      return Nothing({});
    }
  }
  function getStoredPreferences(any_) {
    return getItem("preferences");
  }
  var hasAlreadySetPreferences = function() {
    const _res547605794 = getStoredPreferences(0);
    switch (_res547605794.kind) {
      case "Just": {
        const { value } = _res547605794;
        return true;
      }
      case "Nothing": {
        return false;
      }
    }
  }();
  function storePreferences(preferences) {
    return setItem("preferences", join("&", map2(serializePreference, preferences)));
  }
  function loadPreferencesFromLocalStorage(_any) {
    const _res547605794 = getStoredPreferences(0);
    switch (_res547605794.kind) {
      case "Just": {
        const { value } = _res547605794;
        return filterMap(deserializePreference, split("&", value));
      }
      case "Nothing": {
        return initialPreferences;
      }
    }
  }
  var initialPreferences = [{
    question: "Is it raining?",
    value: false
  }, {
    question: "Do you like taking pictures or selfies?",
    value: false
  }];

  // src/Main.ts
  var databaseName = "tour";
  var initialModel = {
    pageMode: loadPageModeFromLocalStorage(0),
    instructions,
    preferences: loadPreferencesFromLocalStorage(0),
    preferenceIndex: 0,
    hasSetPreferences: hasAlreadySetPreferences,
    currentLocation: Nothing({}),
    locations,
    locationPictures: [],
    database: Nothing({}),
    showHint: false,
    position: Nothing({})
  };
  function Noop(args) {
    return __spreadValues({
      kind: "Noop"
    }, args);
  }
  function NextInstruction(args) {
    return __spreadValues({
      kind: "NextInstruction"
    }, args);
  }
  function SetPreference(args) {
    return __spreadValues({
      kind: "SetPreference"
    }, args);
  }
  function SetHasSetPreferences(args) {
    return __spreadValues({
      kind: "SetHasSetPreferences"
    }, args);
  }
  function LoadDatabase(args) {
    return __spreadValues({
      kind: "LoadDatabase"
    }, args);
  }
  function DatabaseLoaded(args) {
    return __spreadValues({
      kind: "DatabaseLoaded"
    }, args);
  }
  function UploadLocationPicture(args) {
    return __spreadValues({
      kind: "UploadLocationPicture"
    }, args);
  }
  function InsertLocationPicture(args) {
    return __spreadValues({
      kind: "InsertLocationPicture"
    }, args);
  }
  function FetchAll(args) {
    return __spreadValues({
      kind: "FetchAll"
    }, args);
  }
  function RowFetched(args) {
    return __spreadValues({
      kind: "RowFetched"
    }, args);
  }
  function RowsFetched(args) {
    return __spreadValues({
      kind: "RowsFetched"
    }, args);
  }
  function DeleteRow(args) {
    return __spreadValues({
      kind: "DeleteRow"
    }, args);
  }
  function RowDeleted(args) {
    return __spreadValues({
      kind: "RowDeleted"
    }, args);
  }
  function ShowHint(args) {
    return __spreadValues({
      kind: "ShowHint"
    }, args);
  }
  function GotPosition(args) {
    return __spreadValues({
      kind: "GotPosition"
    }, args);
  }
  function ViewSummary(args) {
    return __spreadValues({
      kind: "ViewSummary"
    }, args);
  }
  function GoToLocation(args) {
    return __spreadValues({
      kind: "GoToLocation"
    }, args);
  }
  function SaveLocation(args) {
    return __spreadValues({
      kind: "SaveLocation"
    }, args);
  }
  function PopState(args) {
    return __spreadValues({
      kind: "PopState"
    }, args);
  }
  function ResetPosition(args) {
    return __spreadValues({
      kind: "ResetPosition"
    }, args);
  }
  function update(msg, model, send) {
    const _res108417 = msg;
    switch (_res108417.kind) {
      case "Noop": {
        return model;
      }
      case "NextInstruction": {
        const _res2104310345 = next(model.instructions);
        switch (_res2104310345.kind) {
          case "Nothing": {
            return __spreadProps(__spreadValues({}, model), { pageMode: nextPageMode(model.pageMode) });
          }
          case "Just": {
            const { value } = _res2104310345;
            return __spreadProps(__spreadValues({}, model), { instructions: value });
          }
        }
        ;
      }
      case "SetPreference": {
        let updatePreference = function(x) {
          if (x.question === preference.question) {
            return {
              question: preference.question,
              value
            };
          } else {
            return x;
          }
        };
        const { preference, value } = _res108417;
        const newPreferences = map2(updatePreference, model.preferences);
        return __spreadProps(__spreadValues({}, model), {
          preferences: newPreferences,
          preferenceIndex: model.preferenceIndex + 1
        });
      }
      case "SetHasSetPreferences": {
        const saveToLocalStorage = storePreferences(model.preferences);
        return __spreadProps(__spreadValues({}, model), {
          hasSetPreferences: true,
          pageMode: nextPageMode(model.pageMode)
        });
      }
      case "LoadDatabase": {
        let sendDatabase = function(database) {
          return send(DatabaseLoaded({ database }));
        };
        const opener = open2(databaseName, photoTable, sendDatabase);
        return model;
      }
      case "DatabaseLoaded": {
        const { database } = _res108417;
        const fetchAll3 = fetchAll2(database, photoTable, function(rows) {
          return send(RowsFetched({ rows }));
        });
        return __spreadProps(__spreadValues({}, model), { database: Just({ value: database }) });
      }
      case "UploadLocationPicture": {
        const { file, location } = _res108417;
        const base64 = toBase642(file, function(encoded) {
          return send(InsertLocationPicture({ picture: {
            name: location.name,
            binary: encoded
          } }));
        });
        return __spreadProps(__spreadValues({}, model), { currentLocation: Just({ value: location }) });
      }
      case "InsertLocationPicture": {
        const { picture } = _res108417;
        const row = photoRowFromPicture(picture);
        const inserter = function() {
          const _res1942914720 = model.database;
          switch (_res1942914720.kind) {
            case "Nothing": {
              return null;
            }
            case "Just": {
              const { value } = _res1942914720;
              return insert2(value, photoTable, row, function(_) {
                return send(FetchAll({}));
              });
            }
          }
        }();
        return model;
      }
      case "RowInserted": {
        return model;
      }
      case "FetchRow": {
        const { name } = _res108417;
        const fetcher = function() {
          const _res1942914720 = model.database;
          switch (_res1942914720.kind) {
            case "Nothing": {
              return null;
            }
            case "Just": {
              const { value } = _res1942914720;
              return fetchOne2(value, photoTable, photoName(name), function(row) {
                return send(RowFetched({ row }));
              });
            }
          }
        }();
        return model;
      }
      case "FetchAll": {
        const fetcher = function() {
          const _res1942914720 = model.database;
          switch (_res1942914720.kind) {
            case "Nothing": {
              return null;
            }
            case "Just": {
              const { value } = _res1942914720;
              return fetchAll2(value, photoTable, function(rows) {
                return send(RowsFetched({ rows }));
              });
            }
          }
        }();
        return model;
      }
      case "RowFetched": {
        const { row } = _res108417;
        return model;
      }
      case "RowsFetched": {
        const { rows } = _res108417;
        return function(x) {
          return __spreadProps(__spreadValues({}, model), {
            showHint: false,
            locationPictures: x
          });
        }(filterMap(pictureFromPhotoRow, rows));
      }
      case "DeleteRow": {
        const { picture } = _res108417;
        const deleter = function() {
          const _res1942914720 = model.database;
          switch (_res1942914720.kind) {
            case "Nothing": {
              return null;
            }
            case "Just": {
              const { value } = _res1942914720;
              return deleteOne2(value, photoTable, photoName(picture.name), function(_) {
                return send(RowDeleted({}));
              });
            }
          }
        }();
        return model;
      }
      case "RowDeleted": {
        const reload = send(FetchAll({}));
        return model;
      }
      case "ShowHint": {
        return __spreadProps(__spreadValues({}, model), { showHint: true });
      }
      case "GotPosition": {
        const { position } = _res108417;
        const _res1012704759 = model.pageMode;
        switch (_res1012704759.kind) {
          case "LoadingGpsMode": {
            return __spreadProps(__spreadValues({}, model), {
              position: Just({ value: position }),
              pageMode: nextPageMode(model.pageMode)
            });
          }
          default: {
            return model;
          }
        }
        ;
      }
      case "ViewSummary": {
        return __spreadProps(__spreadValues({}, model), {
          pageMode: toSummaryPageMode(0),
          showHint: false
        });
      }
      case "GoToLocation": {
        const { location } = _res108417;
        return __spreadProps(__spreadValues({}, model), {
          currentLocation: Just({ value: location }),
          pageMode: toMode(GameMode({})),
          showHint: false
        });
      }
      case "SaveLocation": {
        return __spreadProps(__spreadValues({}, model), {
          currentLocation: Nothing({}),
          showHint: false
        });
      }
      case "PopState": {
        const { state } = _res108417;
        const _res1466842447 = deserializePageMode(state);
        switch (_res1466842447.kind) {
          case "Nothing": {
            return model;
          }
          case "Just": {
            const { value } = _res1466842447;
            return __spreadProps(__spreadValues({}, model), { pageMode: toModeWithoutPush(value) });
          }
        }
        ;
      }
      case "ResetPosition": {
        const get = getCurrentPosition2(function(pos) {
          return main2.send(GotPosition({ position: pos }));
        }, function(_) {
          return Noop({});
        });
        return model;
      }
    }
  }
  function viewGoogleMapLink(location) {
    return a2([], [attribute2("href", `https://maps.google.com/?q=${location.lat},${location.lon}`), attribute2("target", "_blank")], [text2(`${location.lat}, ${location.lon}`)]);
  }
  var viewSummaryLink = div2([onClick(function(_) {
    return ViewSummary({});
  })], [class_2("button button-summary")], [text2("View summary")]);
  function viewLocation(showHint, locationPictures, location) {
    const picture = function() {
      const _res1343619266 = findLocationPicture(locationPictures, location);
      switch (_res1343619266.kind) {
        case "Nothing": {
          return div2([], [], []);
        }
        case "Just": {
          const { value } = _res1343619266;
          return div2([], [], [div2([onClick(function(_) {
            return DeleteRow({ picture: value });
          })], [class_2("location-picture-delete")], [text2("\u274C")]), img2([], [class_2("location-picture"), attribute2("src", `${value.binary}`)])]);
        }
      }
    }();
    function uploadPicture(x) {
      return UploadLocationPicture({
        location,
        file: x.target.files[0]
      });
    }
    const hint = showHint ? div2([], [], [text2(`Hint: ${location.hint}`)]) : div2([onClick(function(_) {
      return ShowHint({});
    })], [class_2("button hint")], [text2("Show hint")]);
    const save = function() {
      const _res1343619266 = findLocationPicture(locationPictures, location);
      switch (_res1343619266.kind) {
        case "Nothing": {
          return div2([], [], []);
        }
        case "Just": {
          const { value } = _res1343619266;
          return div2([onClick(function(_) {
            return SaveLocation({});
          })], [class_2("button save")], [text2("Save location")]);
        }
      }
    }();
    return div2([], [], [viewSummaryLink, picture, div2([], [], [text2(location.name)]), viewGoogleMapLink(location), div2([], [], [text2(location.clue)]), div2([on2("change", uploadPicture)], [attribute2("id", "file-upload")], [input2([], [attribute2("type", "file"), attribute2("capture", "file")])]), hint, save]);
  }
  function viewLocationSummary(pair) {
    return div2([], [class_2("location-summary")], [a2([], [class_2("location-image-container"), attribute2("href", `${pair.picture.binary}`), attribute2("download", pair.location.name)], [img2([], [attribute2("src", `${pair.picture.binary}`)])]), div2([onClick(function(_) {
      return GoToLocation({ location: pair.location });
    })], [class_2("location-name-container")], [div2([], [class_2("location-name")], [text2(pair.location.name)])])]);
  }
  function viewLocationSummaryToBe(location) {
    return div2([onClick(function(_) {
      return GoToLocation({ location });
    })], [class_2("location-summary")], [div2([], [class_2("location-image-container")], []), div2([], [class_2("location-name-container")], [div2([], [class_2("location-name")], [text2(location.name)])])]);
  }
  function viewLocationsSummary(pictures, locations2) {
    const pairs = filterMap(function(x) {
      return x;
    }, intoLocationPairs(pictures, locations2));
    const summaries = map2(viewLocationSummary, pairs);
    const without = withoutLocationPictures(pictures, locations2);
    const summariesToBe = map2(viewLocationSummaryToBe, without);
    return div2([], [], [div2([onClick(function(_) {
      return ResetPosition({});
    })], [class_2("button reset-position")], [text2("Click here to reset your current position")]), div2([], [class_2("location-summaries-instruction")], [text2("Click the picture to download it. Click the location name to go to that location's page.")]), div2([], [class_2("location-summaries")], append(summaries, summariesToBe))]);
  }
  function viewPreference(preference) {
    return div2([], [], [text2(preference.question), div2([onClick(function(_) {
      return SetPreference({
        preference,
        value: true
      });
    })], [class_2("button"), class_2("yes")], [text2("Yes")]), div2([onClick(function(_) {
      return SetPreference({
        preference,
        value: false
      });
    })], [class_2("button"), class_2("no")], [text2("No")])]);
  }
  function viewPreferenceSummary(preference) {
    const preferenceValueAsString = preference.value ? "Yes" : "No";
    return div2([], [class_2(preferenceValueAsString)], [text2(`${preference.question} ${preferenceValueAsString}`)]);
  }
  function viewPreferencesSummary(preferences) {
    return function(x) {
      return function(x2) {
        return div2([], [], [text2("Summary"), ...x2]);
      }(append(x, [div2([onClick(function(_) {
        return SetHasSetPreferences({});
      })], [class_2("button")], [text2("Next")])]));
    }(map2(viewPreferenceSummary, preferences));
  }
  function viewInstructions(instructions2) {
    return div2([], [class_2("instructions")], [div2([], [class_2("instruction")], [current(instructions2), div2([onClick(function(_) {
      return NextInstruction({});
    })], [class_2("button"), class_2("next")], [text2("Next")])])]);
  }
  function view(model) {
    const _res1012704759 = model.pageMode;
    switch (_res1012704759.kind) {
      case "LoadingGpsMode": {
        return div2([], [], [text2("Loading location info")]);
      }
      case "InstructionsMode": {
        return viewInstructions(model.instructions);
      }
      case "PreferencesMode": {
        if (model.preferenceIndex < model.preferences.length) {
          return div2([], [class_2("preference")], [viewPreference(model.preferences[model.preferenceIndex])]);
        } else {
          return div2([], [class_2("summary")], [viewPreferencesSummary(model.preferences)]);
        }
        ;
      }
      case "SummaryMode": {
        return div2([], [], [viewLocationsSummary(model.locationPictures, model.locations)]);
      }
      default: {
        const _res938057609 = model.currentLocation;
        switch (_res938057609.kind) {
          case "Nothing": {
            const sortedLocations = function() {
              const _res901254734 = model.position;
              switch (_res901254734.kind) {
                case "Nothing": {
                  return model.locations;
                }
                case "Just": {
                  const { value } = _res901254734;
                  return sortLocationsByDistance(value, model.locations);
                }
              }
            }();
            const index = firstLocationWithoutPicture(sortedLocations, model.locationPictures, 0);
            if (index < model.locations.length) {
              return div2([], [class_2("location")], [viewLocation(model.showHint, model.locationPictures, sortedLocations[index])]);
            } else {
              return div2([], [], [viewLocationsSummary(model.locationPictures, model.locations)]);
            }
            ;
          }
          case "Just": {
            const { value: location } = _res938057609;
            return div2([], [class_2("location")], [viewLocation(model.showHint, model.locationPictures, location)]);
          }
        }
        ;
      }
    }
  }
  var root = document.getElementById("root");
  var main2 = programWithSend({
    root,
    initialModel,
    update,
    view
  });
  var afterMain = main2.send(LoadDatabase({}));
  var getPosition = getCurrentPosition2(function(pos) {
    return main2.send(GotPosition({ position: pos }));
  }, function(_) {
    return main2.send(GotPosition({ position: {
      lat: 50,
      lon: 50
    } }));
  });
  var popState = globalThis.window.addEventListener("popstate", function(event) {
    return main2.send(PopState({ state: event.state }));
  });
})();
