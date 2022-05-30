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
      function withDefault2(value, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return maybeValue.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault2;
      function map4(func, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return Just2(func(maybeValue.value));
          default:
            return maybeValue;
        }
      }
      exports.map = map4;
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
      function andThen2(func, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return func(maybeValue.value);
          default:
            return Nothing2();
        }
      }
      exports.andThen = andThen2;
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
      var Maybe5 = __importStar(require_maybe());
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
      function withDefault2(value, result) {
        switch (result.kind) {
          case "ok":
            return result.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault2;
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
            return Maybe5.Just(result.value);
          default:
            return Maybe5.Nothing();
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
      function map4(func, result) {
        switch (result.kind) {
          case "ok":
            return Ok(func(result.value));
          default:
            return result;
        }
      }
      exports.map = map4;
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
      function andThen2(func, result) {
        switch (result.kind) {
          case "ok":
            return func(result.value);
          default:
            return result;
        }
      }
      exports.andThen = andThen2;
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
      exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.program = exports.map = exports.triggerEvent = exports.buildTree = exports.hydrateNode = exports.hydrate = exports.flatRender = exports.render = exports.voidNode = exports.node = exports.text = exports.onInput = exports.on = exports.booleanAttribute = exports.attribute = exports.none = exports.style_ = exports.class_ = void 0;
      exports.rtc = exports.rt = exports.rp = exports.rb = exports.q = exports.progress = exports.pre = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map_ = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = exports.footer = exports.figure = exports.fieldset = exports.embed = void 0;
      exports.wbr = exports.video = exports.var_ = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = void 0;
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
      function attribute4(key, value) {
        if (key === "style")
          return style_2(value.split(":")[0], value.split(":")[1]);
        return {
          kind: "string",
          key,
          value
        };
      }
      exports.attribute = attribute4;
      function booleanAttribute3(key, value) {
        return {
          kind: "boolean",
          key,
          value
        };
      }
      exports.booleanAttribute = booleanAttribute3;
      function on3(name, tagger, stopPropagation = true, preventDefault = true) {
        return {
          name,
          tagger: (event) => {
            if (stopPropagation) {
              event.stopPropagation();
            }
            if (preventDefault) {
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
        attributes.forEach((attribute5) => {
          switch (attribute5.kind) {
            case "string":
              if (!knownStringAttributes[attribute5.key]) {
                knownStringAttributes[attribute5.key] = [];
              }
              knownStringAttributes[attribute5.key].push(attribute5);
              break;
            case "style":
              knownStyleAttributes.push(attribute5);
              break;
            default:
              otherAttributes.push(attribute5);
          }
        });
        const combinedAttributes = otherAttributes.filter((attribute5) => attribute5.kind !== "none");
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
          }, attribute4("style", "")));
        }
        return combinedAttributes;
      }
      function renderAttribute(attribute5) {
        switch (attribute5.kind) {
          case "string":
            if (attribute5.value.indexOf('"') > 0) {
              return `${attribute5.key}='${attribute5.value}'`;
            }
            return `${attribute5.key}="${attribute5.value}"`;
          case "number":
            return `${attribute5.key}=${attribute5.value}`;
          case "style":
            return "";
          case "boolean":
            return attribute5.value ? `${attribute5.key}="${attribute5.key}"` : "";
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
            const renderedAttributes = node3.attributes.map(renderAttribute).join(" ");
            const attributes = (renderedAttributes.length > 0 ? " " : "") + renderedAttributes;
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
      function flatRender2(node3) {
        switch (node3.kind) {
          case "text":
            return node3.text;
          case "void":
          case "regular":
            const attributes = (node3.attributes.length > 0 ? " " : "") + node3.attributes.map(renderAttribute).join(" ");
            switch (node3.kind) {
              case "void":
                return `<${node3.tag}${attributes}>`;
              case "regular": {
                if (node3.children.length > 0) {
                  return `<${node3.tag}${attributes}>${node3.children.map((child) => flatRender2(child)).join("")}</${node3.tag}>`;
                }
                return `<${node3.tag}${attributes}></${node3.tag}>`;
              }
            }
        }
      }
      exports.flatRender = flatRender2;
      function hydrate2(program4, root2) {
        program4.program.root = root2;
        const node3 = program4.program.view(program4.program.initialModel);
        hydrateNode(node3, program4.send, root2);
      }
      exports.hydrate = hydrate2;
      function hydrateNode(node3, listener, root2) {
        switch (node3.kind) {
          case "text": {
            return;
          }
          case "void":
          case "regular": {
            node3.events.forEach((event) => {
              const listenerFunction = (data3) => {
                listener(event.tagger(data3));
              };
              root2.addEventListener(event.name, listenerFunction, {
                once: true
              });
              node3._eventListeners.push({
                event,
                listener: listenerFunction
              });
            });
          }
        }
        if (node3.kind === "regular") {
          node3.children.forEach((child, i3) => {
            const newRoot = root2.children[i3];
            hydrateNode(child, listener, newRoot);
          });
        }
      }
      exports.hydrateNode = hydrateNode;
      function buildTree(listener, node3) {
        switch (node3.kind) {
          case "text":
            return document.createTextNode(node3.text);
          case "void":
          case "regular": {
            const element = document.createElement(node3.tag);
            node3.attributes.forEach((attribute5) => {
              setAttributeOnElement(element, attribute5);
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
        payload = Object.assign({ stopPropagation: () => void 0, preventDefault: () => void 0 }, payload);
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
      function map4(tagger, tree) {
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
              return map4(tagger, child);
            }));
        }
      }
      exports.map = map4;
      function setAttributeOnElement(element, attribute5) {
        switch (attribute5.kind) {
          case "string":
          case "number":
            const hasSameAttributeAlready = element.getAttribute(attribute5.key) === attribute5.value;
            if (hasSameAttributeAlready)
              return true;
            element[attribute5.key] = attribute5.value;
            element.setAttribute(attribute5.key, attribute5.value);
            return true;
          case "style":
            element.removeAttribute("style");
            const styles = attribute5.value.split(";");
            for (var i3 = 0; i3 < styles.length; i3++) {
              const styleName = styles[i3].split(":")[0];
              const styleValue = styles[i3].split(":")[1];
              element.style[styleName] = styleValue;
            }
            return true;
          case "boolean": {
            if (attribute5.value) {
              const hasSameAttributeAlready2 = element[attribute5.key] === true || element.getAttribute(attribute5.key) === attribute5.key;
              if (hasSameAttributeAlready2)
                return true;
              element.setAttribute(attribute5.key, attribute5.key);
            } else {
              if (element.getAttribute(attribute5.key) === attribute5.key) {
                element.removeAttribute(attribute5.key);
              }
            }
            return true;
          }
          case "none":
            return true;
        }
      }
      function patchFacts(previousTree, nextTree, elements) {
        switch (nextTree.kind) {
          case "void":
          case "regular": {
            if (previousTree.kind === nextTree.kind) {
              previousTree.attributes.filter((attribute5) => {
                for (const nextAttribute of nextTree.attributes) {
                  let seen = false;
                  if (attribute5.kind === nextAttribute.kind) {
                    switch (nextAttribute.kind) {
                      case "number":
                      case "string": {
                        seen = nextAttribute.key === attribute5.key;
                        break;
                      }
                      case "boolean":
                      case "style":
                        seen = true;
                    }
                  }
                  if (seen)
                    return false;
                }
                return true;
              }).forEach((attribute5) => {
                switch (attribute5.kind) {
                  case "number":
                    elements.removeAttribute(attribute5.key);
                  case "string":
                    elements.removeAttribute(attribute5.key);
                  case "boolean":
                    elements.removeAttribute(attribute5.key);
                  case "style":
                    elements.removeAttribute("style");
                }
              });
            }
            nextTree.attributes.forEach((attribute5) => {
              setAttributeOnElement(elements, attribute5);
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
        var _a, _b;
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
            const currentTreeId = (_a = currentTree.attributes.filter((x) => x.kind === "string" && x.key === "id")[0]) === null || _a === void 0 ? void 0 : _a.value;
            const nextTreeId = (_b = nextTree.attributes.filter((x) => x.kind === "string" && x.key === "id")[0]) === null || _b === void 0 ? void 0 : _b.value;
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
      function program3(program4) {
        let model = program4.initialModel;
        let previousView = program4.view(program4.initialModel);
        let currentTree = null;
        const listener = (msg) => {
          if (currentTree === null) {
            currentTree = buildTree(listener, previousView);
            if (program4.root !== "hydration") {
              while (program4.root.firstChild) {
                program4.root.removeChild(program4.root.firstChild);
              }
              program4.root.appendChild(currentTree);
            }
          }
          model = program4.update(msg, model, listener);
          const nextView = program4.view(model);
          patch(listener, previousView, nextView, currentTree);
          previousView = nextView;
        };
        if (program4.root !== "hydration") {
          currentTree = buildTree(listener, previousView);
          program4.root.appendChild(currentTree);
        }
        return {
          program: program4,
          send: listener
        };
      }
      exports.program = program3;
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
      function footer3(events, attributes, children) {
        return node2("footer", events, attributes, children);
      }
      exports.footer = footer3;
      function form2(events, attributes, children) {
        return node2("form", events, attributes, children);
      }
      exports.form = form2;
      function h13(events, attributes, children) {
        return node2("h1", events, attributes, children);
      }
      exports.h1 = h13;
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
      function header3(events, attributes, children) {
        return node2("header", events, attributes, children);
      }
      exports.header = header3;
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
      function label3(events, attributes, children) {
        return node2("label", events, attributes, children);
      }
      exports.label = label3;
      function legend2(events, attributes, children) {
        return node2("legend", events, attributes, children);
      }
      exports.legend = legend2;
      function li3(events, attributes, children) {
        return node2("li", events, attributes, children);
      }
      exports.li = li3;
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
      function section3(events, attributes, children) {
        return node2("section", events, attributes, children);
      }
      exports.section = section3;
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
      function span3(events, attributes, children) {
        return node2("span", events, attributes, children);
      }
      exports.span = span3;
      function strong3(events, attributes, children) {
        return node2("strong", events, attributes, children);
      }
      exports.strong = strong3;
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
      function ul3(events, attributes, children) {
        return node2("ul", events, attributes, children);
      }
      exports.ul = ul3;
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
  function onWithOptions(name, tagger, stopPropgation, preventDefault) {
    return coed.on(name, tagger, stopPropgation, preventDefault);
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
  function booleanAttribute2(name, value) {
    return coed.booleanAttribute(name, value);
  }
  function a2(events, attributes, children) {
    return coed.a(events, attributes, children);
  }
  function button2(events, attributes, children) {
    return coed.button(events, attributes, children);
  }
  function div2(events, attributes, children) {
    return coed.div(events, attributes, children);
  }
  function footer2(events, attributes, children) {
    return coed.footer(events, attributes, children);
  }
  function h12(events, attributes, children) {
    return coed.h1(events, attributes, children);
  }
  function header2(events, attributes, children) {
    return coed.header(events, attributes, children);
  }
  function input2(events, attributes) {
    return coed.input(events, attributes);
  }
  function label2(events, attributes, children) {
    return coed.label(events, attributes, children);
  }
  function li2(events, attributes, children) {
    return coed.li(events, attributes, children);
  }
  function section2(events, attributes, children) {
    return coed.section(events, attributes, children);
  }
  function span2(events, attributes, children) {
    return coed.span(events, attributes, children);
  }
  function strong2(events, attributes, children) {
    return coed.strong(events, attributes, children);
  }
  function ul2(events, attributes, children) {
    return coed.ul(events, attributes, children);
  }

  // derw-packages/derw-lang/stdlib/src/List_kernel.ts
  function kernelEmptyList() {
    return [];
  }

  // derw-packages/derw-lang/stdlib/src/List.ts
  function map2(fn, xs) {
    return xs.map(fn);
  }
  function filter(fn, xs) {
    return xs.filter(fn);
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

  // derw-packages/derw-lang/stdlib/src/String.ts
  function split(char, str) {
    return str.split(char);
  }
  function join(char, xs) {
    return xs.join(char);
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
  function withDefault(defaultValue, maybe) {
    const _res103672936 = maybe;
    switch (_res103672936.kind) {
      case "Just": {
        const { value } = _res103672936;
        return value;
      }
      case "Nothing": {
        return defaultValue;
      }
    }
  }

  // derw-packages/derw-lang/stdlib/src/Number_kernel.ts
  function parseInt(str, radix) {
    try {
      return Just({ value: globalThis.parseInt(str, radix) });
    } catch (e) {
      return Nothing({});
    }
  }

  // derw-packages/derw-lang/stdlib/src/Number.ts
  function parseInt2(str, radix) {
    return parseInt(str, radix);
  }

  // derw-packages/derw-lang/stdlib/src/Task_kernel.ts
  function runTask(task) {
    task.promise.then();
  }
  function after(fn, time2) {
    return {
      promise: new Promise((resolve, reject) => {
        setTimeout(() => resolve(fn()), time2);
      })
    };
  }

  // derw-packages/derw-lang/stdlib/src/Task.ts
  function runTask2(task) {
    return runTask(task);
  }
  function after2(fn, time2) {
    return after(fn, time2);
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

  // src/Main.ts
  function All(args) {
    return __spreadValues({
      kind: "All"
    }, args);
  }
  function Active(args) {
    return __spreadValues({
      kind: "Active"
    }, args);
  }
  function Completed(args) {
    return __spreadValues({
      kind: "Completed"
    }, args);
  }
  var initialModel = {
    list: loadListItems(0),
    input: "",
    filterMode: All({}),
    editing: Nothing({})
  };
  function ToggleAll(args) {
    return __spreadValues({
      kind: "ToggleAll"
    }, args);
  }
  function ToggleCompleted(args) {
    return __spreadValues({
      kind: "ToggleCompleted"
    }, args);
  }
  function DestroyItem(args) {
    return __spreadValues({
      kind: "DestroyItem"
    }, args);
  }
  function AddItem(args) {
    return __spreadValues({
      kind: "AddItem"
    }, args);
  }
  function SetNewItemInput(args) {
    return __spreadValues({
      kind: "SetNewItemInput"
    }, args);
  }
  function SetFilterMode(args) {
    return __spreadValues({
      kind: "SetFilterMode"
    }, args);
  }
  function ClearCompleted(args) {
    return __spreadValues({
      kind: "ClearCompleted"
    }, args);
  }
  function Edit(args) {
    return __spreadValues({
      kind: "Edit"
    }, args);
  }
  function CancelEdit(args) {
    return __spreadValues({
      kind: "CancelEdit"
    }, args);
  }
  function Save(args) {
    return __spreadValues({
      kind: "Save"
    }, args);
  }
  function Focus(args) {
    return __spreadValues({
      kind: "Focus"
    }, args);
  }
  function toggleListItem(itemToToggle, maybeItem) {
    if (itemToToggle.id === maybeItem.id) {
      return __spreadProps(__spreadValues({}, maybeItem), { completed: !maybeItem.completed });
    } else {
      return maybeItem;
    }
  }
  function storeListItems(items) {
    const encodedItems = join("&", map2(function(item) {
      return `${item.id}-${item.completed}-${item.label}`;
    }, items));
    setItem("todomvc-derw", encodedItems);
    return void 0;
  }
  function decodeItem(str) {
    const _res654347064 = split("-", str);
    switch (_res654347064.length) {
      case _res654347064.length: {
        if (_res654347064.length >= 1) {
          const [id, ...rest] = _res654347064;
          const _res3496916 = rest;
          switch (_res3496916.length) {
            case _res3496916.length: {
              if (_res3496916.length >= 1) {
                const [completed, ...ys] = _res3496916;
                const _res3417780 = parseInt2(id, 10);
                switch (_res3417780.kind) {
                  case "Nothing": {
                    return Nothing({});
                  }
                  case "Just": {
                    const { value } = _res3417780;
                    return Just({ value: {
                      id: value,
                      completed: completed === "true",
                      label: join("-", ys)
                    } });
                  }
                }
                ;
              }
            }
            default: {
              return Nothing({});
            }
          }
          ;
        }
      }
      default: {
        return Nothing({});
      }
    }
  }
  function loadListItems(_) {
    const stored = withDefault("", getItem("todomvc-derw"));
    const decodedItems = filterMap(decodeItem, split("&", stored));
    return decodedItems;
  }
  function max(start, xs) {
    const _res3835 = xs;
    switch (_res3835.length) {
      case _res3835.length: {
        if (_res3835.length >= 1) {
          const [x, ...ys] = _res3835;
          if (start < x) {
            return max(x, ys);
          } else {
            return max(start, ys);
          }
          ;
        }
      }
      default: {
        return start;
      }
    }
  }
  function filteredItems(filterMode, items) {
    const _res1553269445 = filterMode;
    switch (_res1553269445.kind) {
      case "All": {
        return items;
      }
      case "Active": {
        return filter(function(item) {
          return !item.completed;
        }, items);
      }
      case "Completed": {
        return filter(function(item) {
          return item.completed;
        }, items);
      }
    }
  }
  function update(msg, model, send) {
    const _res108417 = msg;
    switch (_res108417.kind) {
      case "Noop": {
        return model;
      }
      case "ToggleAll": {
        const { state } = _res108417;
        const updatedItems = map2(function(x) {
          return __spreadProps(__spreadValues({}, x), { completed: state });
        }, model.list);
        const store = storeListItems(updatedItems);
        return __spreadProps(__spreadValues({}, model), { list: updatedItems });
      }
      case "ToggleCompleted": {
        const { item } = _res108417;
        const updatedItems = map2(function(x) {
          return toggleListItem(item, x);
        }, model.list);
        const store = storeListItems(updatedItems);
        return __spreadProps(__spreadValues({}, model), { list: updatedItems });
      }
      case "DestroyItem": {
        const { item } = _res108417;
        const withoutItem = filter(function(x) {
          return x.id !== item.id;
        }, model.list);
        const store = storeListItems(withoutItem);
        return __spreadProps(__spreadValues({}, model), { list: withoutItem });
      }
      case "AddItem": {
        const { label: label3 } = _res108417;
        if (label3.trim() === "") {
          return model;
        } else {
          const newId = function(x) {
            return x + 1;
          }(max(0, map2(function(item) {
            return item.id;
          }, model.list)));
          const newItem = {
            id: newId,
            label: label3,
            completed: false
          };
          const updatedItems = [newItem, ...model.list];
          const store = storeListItems(updatedItems);
          return __spreadProps(__spreadValues({}, model), {
            list: updatedItems,
            input: ""
          });
        }
        ;
      }
      case "SetNewItemInput": {
        const { input: input3 } = _res108417;
        return __spreadProps(__spreadValues({}, model), { input: input3 });
      }
      case "SetFilterMode": {
        const { mode } = _res108417;
        return __spreadProps(__spreadValues({}, model), { filterMode: mode });
      }
      case "ClearCompleted": {
        const updatedItems = filteredItems(Active({}), model.list);
        const store = storeListItems(updatedItems);
        return __spreadProps(__spreadValues({}, model), { list: updatedItems });
      }
      case "Edit": {
        const { item } = _res108417;
        const focus = runTask2(after2(function(_) {
          return send(Focus({}));
        }, 30));
        return __spreadProps(__spreadValues({}, model), { editing: Just({ value: item }) });
      }
      case "CancelEdit": {
        return __spreadProps(__spreadValues({}, model), { editing: Nothing({}) });
      }
      case "Focus": {
        const element = document.getElementById("editor");
        const focus = element.focus();
        return model;
      }
      case "Save": {
        let updater = function(currentItem) {
          if (currentItem.id === item.id) {
            return item;
          } else {
            return currentItem;
          }
        };
        const { item } = _res108417;
        const updatedItems = map2(updater, model.list);
        const maybeWithoutItem = item.label.trim() === "" ? filter(function(x) {
          return x.id !== item.id;
        }, updatedItems) : updatedItems;
        const store = storeListItems(maybeWithoutItem);
        return __spreadProps(__spreadValues({}, model), {
          editing: Nothing({}),
          list: maybeWithoutItem
        });
      }
    }
  }
  function viewHeader(model) {
    function onKeydown(event) {
      if (event.key === "Enter") {
        return AddItem({ label: event.target.value });
      } else {
        return SetNewItemInput({ input: event.target.value });
      }
    }
    return header2([], [class_2("header")], [h12([], [], [text2("todos")]), input2([onWithOptions("keydown", onKeydown, false, false)], [class_2("new-todo"), attribute2("placeholder", "What needs to be done?"), attribute2("autofocus", "true"), attribute2("value", model.input)])]);
  }
  function viewListItem(model, item) {
    const className = function() {
      const _res887932883 = model.editing;
      switch (_res887932883.kind) {
        case "Just": {
          const { value } = _res887932883;
          if (value.id === item.id) {
            return "editing";
          } else {
            if (item.completed) {
              return "completed";
            } else {
              return "";
            }
            ;
          }
          ;
        }
        case "Nothing": {
          if (item.completed) {
            return "completed";
          } else {
            return "";
          }
          ;
        }
      }
    }();
    const editingText = function() {
      const _res887932883 = model.editing;
      switch (_res887932883.kind) {
        case "Just": {
          const { value } = _res887932883;
          return value.label;
        }
        case "Nothing": {
          return "";
        }
      }
    }();
    function onEdit(event) {
      return Edit({ item: __spreadProps(__spreadValues({}, item), { label: event.target.value }) });
    }
    function onSave(event) {
      const _res887932883 = model.editing;
      switch (_res887932883.kind) {
        case "Nothing": {
          return Save({ item });
        }
        case "Just": {
          const { value } = _res887932883;
          return Save({ item: __spreadProps(__spreadValues({}, value), { label: event.target.value }) });
        }
      }
    }
    function onKeydown(event) {
      if (event.key === "Enter") {
        return onSave(event);
      } else {
        return Edit({ item: __spreadProps(__spreadValues({}, item), { label: event.target.value }) });
      }
    }
    const viewItemLabel = label2([onWithOptions("dblclick", function(_) {
      return Edit({ item });
    }, false, false)], [], [text2(item.label)]);
    return li2([], [class_2(className)], [div2([], [class_2("view")], [input2([onWithOptions("click", function(_) {
      return ToggleCompleted({ item });
    }, false, false)], [class_2("toggle"), attribute2("type", "checkbox"), booleanAttribute2("checked", item.completed)]), viewItemLabel, button2([onClick(function(_) {
      return DestroyItem({ item });
    })], [class_2("destroy")], [])]), input2([onWithOptions("keydown", onKeydown, false, false), on2("blur", onSave)], [class_2("edit"), attribute2("id", "editor"), attribute2("value", editingText)])]);
  }
  function viewList(model) {
    const items = filteredItems(model.filterMode, model.list);
    return ul2([], [class_2("todo-list")], map2(function(item) {
      return viewListItem(model, item);
    }, items));
  }
  function viewMain(model) {
    return section2([], [class_2("main")], [input2([onWithOptions("click", function(event) {
      return ToggleAll({ state: event.target.checked });
    }, false, false)], [attribute2("id", "toggle-all"), class_2("toggle-all"), attribute2("type", "checkbox")]), label2([], [attribute2("for", "toggle-all")], [text2("Mark all as complete")]), viewList(model)]);
  }
  function viewFooter(model) {
    const activeItems = filteredItems(Active({}), model.list);
    const completedItems = filteredItems(Completed({}), model.list);
    const maybeClearButton = completedItems.length === 0 ? text2("") : button2([onClick(function(_) {
      return ClearCompleted({});
    })], [class_2("clear-completed")], [text2("Clear completed")]);
    function setModeEventHandler(mode) {
      return onWithOptions("click", function(_) {
        return SetFilterMode({ mode });
      }, false, false);
    }
    const itemsLeftText = activeItems.length === 1 ? `${activeItems.length} item left` : `${activeItems.length} items left`;
    const allClass = function() {
      const _res116933344 = model.filterMode;
      switch (_res116933344.kind) {
        case "All": {
          return "selected";
        }
        default: {
          return "";
        }
      }
    }();
    const activeClass = function() {
      const _res116933344 = model.filterMode;
      switch (_res116933344.kind) {
        case "Active": {
          return "selected";
        }
        default: {
          return "";
        }
      }
    }();
    const completedClass = function() {
      const _res116933344 = model.filterMode;
      switch (_res116933344.kind) {
        case "Completed": {
          return "selected";
        }
        default: {
          return "";
        }
      }
    }();
    return footer2([], [class_2("footer")], [span2([], [class_2("todo-count")], [strong2([], [], [text2(itemsLeftText)])]), ul2([], [class_2("filters")], [li2([], [], [a2([setModeEventHandler(All({}))], [class_2(allClass), attribute2("href", "#/")], [text2("All")])]), li2([], [], [a2([setModeEventHandler(Active({}))], [class_2(activeClass), attribute2("href", "#/active")], [text2("Active")])]), li2([], [], [a2([setModeEventHandler(Completed({}))], [class_2(completedClass), attribute2("href", "#/completed")], [text2("Completed")])])]), maybeClearButton]);
  }
  function view(model) {
    if (model.list.length === 0) {
      return section2([], [class_2("todoapp")], [viewHeader(model)]);
    } else {
      return section2([], [class_2("todoapp")], [viewHeader(model), viewMain(model), viewFooter(model)]);
    }
  }
  var root = document.getElementById("root");
  var main2 = function() {
    const filterMode = urlParser(window.location.hash);
    const p2 = program2({
      initialModel: __spreadProps(__spreadValues({}, initialModel), { filterMode }),
      view,
      update,
      root
    });
    function canceller(event) {
      if (event.key === "Escape") {
        return p2.send(CancelEdit({}));
      } else {
        return void 0;
      }
    }
    const attach = document.addEventListener("keydown", canceller);
    return p2;
  }();
  function urlParser(path) {
    const _res3433509 = path;
    switch (_res3433509) {
      case "#/completed": {
        return Completed({});
      }
      case "#/active": {
        return Active({});
      }
      default: {
        return All({});
      }
    }
  }
})();
