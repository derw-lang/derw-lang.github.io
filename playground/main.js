(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/derw/build/stdlib/List_kernel.js
  var require_List_kernel = __commonJS({
    "node_modules/derw/build/stdlib/List_kernel.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.kernelStatefulFold = exports.kernelSortBy = exports.kernelSort = exports.kernelEmptyList = exports.kernelLength = void 0;
      function kernelLength(xs) {
        return xs.length;
      }
      exports.kernelLength = kernelLength;
      function kernelEmptyList() {
        return [];
      }
      exports.kernelEmptyList = kernelEmptyList;
      function kernelSort(xs) {
        const ys = [...xs];
        ys.sort();
        return ys;
      }
      exports.kernelSort = kernelSort;
      function kernelSortBy(fn, xs) {
        const ys = [...xs];
        ys.sort(fn);
        return ys;
      }
      exports.kernelSortBy = kernelSortBy;
      function kernelStatefulFold(fn, init, items) {
        let currentState = init;
        for (const item of items) {
          currentState = fn(item, currentState);
        }
        return currentState;
      }
      exports.kernelStatefulFold = kernelStatefulFold;
    }
  });

  // node_modules/derw/build/stdlib/List.js
  var require_List = __commonJS({
    "node_modules/derw/build/stdlib/List.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sortBy = exports.sort = exports.drop = exports.take = exports.length = exports.reverse = exports.append = exports.filterMap = exports.foldr = exports.statefulFold = exports.foldl = exports.filter = exports.indexedMap = exports.map = exports.emptyList = void 0;
      var List_kernel_1 = require_List_kernel();
      var emptyList = [];
      exports.emptyList = emptyList;
      function map(fn, xs) {
        return xs.map(fn);
      }
      exports.map = map;
      function indexedMap(fn, xs) {
        return xs.map(fn);
      }
      exports.indexedMap = indexedMap;
      function filter(fn, xs) {
        return xs.filter(fn);
      }
      exports.filter = filter;
      function foldl(fn, init, xs) {
        return xs.reduce(function(a, b) {
          return fn(b, a);
        }, init);
      }
      exports.foldl = foldl;
      function statefulFold(fn, init, xs) {
        return (0, List_kernel_1.kernelStatefulFold)(fn, init, xs);
      }
      exports.statefulFold = statefulFold;
      function foldr(fn, init, xs) {
        return xs.reduceRight(function(a, b) {
          return fn(b, a);
        }, init);
      }
      exports.foldr = foldr;
      function filterMapHelp(fn, a, xs) {
        const maybe = fn(a);
        switch (maybe.kind) {
          case "Just": {
            const { value } = maybe;
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
      exports.filterMap = filterMap;
      function append(xs, ys) {
        return function(x) {
          return x.concat(xs, ys);
        }((0, List_kernel_1.kernelEmptyList)());
      }
      exports.append = append;
      function reverse(xs) {
        return xs.reverse();
      }
      exports.reverse = reverse;
      function length(xs) {
        return (0, List_kernel_1.kernelLength)(xs);
      }
      exports.length = length;
      function take(n, xs) {
        return xs.slice(0, n);
      }
      exports.take = take;
      function drop(n, xs) {
        return xs.slice(n, xs.length);
      }
      exports.drop = drop;
      function sort(xs) {
        return (0, List_kernel_1.kernelSort)(xs);
      }
      exports.sort = sort;
      function sortBy(fn, xs) {
        return (0, List_kernel_1.kernelSortBy)(fn, xs);
      }
      exports.sortBy = sortBy;
    }
  });

  // node_modules/derw/build/types.js
  var require_types = __commonJS({
    "node_modules/derw/build/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Function = exports.isLeftPipeableExpression = exports.isSimpleValue = exports.GreaterThanOrEqual = exports.GreaterThan = exports.LessThanOrEqual = exports.LessThan = exports.InEquality = exports.Equality = exports.CaseStatement = exports.Branch = exports.ListDestructure = exports.EmptyList = exports.Default = exports.LambdaCall = exports.Lambda = exports.FunctionCall = exports.ModuleReference = exports.RightPipe = exports.LeftPipe = exports.ListPrepend = exports.Or = exports.And = exports.Mod = exports.Division = exports.Multiplication = exports.Subtraction = exports.Addition = exports.IfStatement = exports.Constructor = exports.Destructure = exports.FormatStringValue = exports.ListRange = exports.ListValue = exports.StringValue = exports.ObjectLiteral = exports.Field = exports.Value = exports.AnonFunctionArg = exports.FunctionArg = exports.TypeAlias = exports.Property = exports.UnionUntaggedType = exports.UnionType = exports.Tag = exports.TagArg = exports.FunctionType = exports.ObjectLiteralType = exports.FixedType = exports.GenericType = void 0;
      exports.contextModuleToModule = exports.ContextModule = exports.Module = exports.DoBlock = exports.UnparsedBlock = exports.MultilineComment = exports.Comment = exports.Export = exports.Import = exports.ImportModule = exports.Const = void 0;
      function GenericType(name) {
        return {
          kind: "GenericType",
          name
        };
      }
      exports.GenericType = GenericType;
      function FixedType(name, args) {
        return {
          kind: "FixedType",
          name,
          args
        };
      }
      exports.FixedType = FixedType;
      function ObjectLiteralType(properties) {
        return {
          kind: "ObjectLiteralType",
          properties
        };
      }
      exports.ObjectLiteralType = ObjectLiteralType;
      function FunctionType(args) {
        return {
          kind: "FunctionType",
          args
        };
      }
      exports.FunctionType = FunctionType;
      function TagArg(name, type) {
        return {
          kind: "TagArg",
          name,
          type
        };
      }
      exports.TagArg = TagArg;
      function Tag(name, args) {
        return {
          kind: "Tag",
          name,
          args
        };
      }
      exports.Tag = Tag;
      function UnionType(type, tags) {
        return {
          kind: "UnionType",
          type,
          tags
        };
      }
      exports.UnionType = UnionType;
      function UnionUntaggedType(type, values) {
        return {
          kind: "UnionUntaggedType",
          type,
          values
        };
      }
      exports.UnionUntaggedType = UnionUntaggedType;
      function Property(name, type) {
        return {
          kind: "Property",
          name,
          type
        };
      }
      exports.Property = Property;
      function TypeAlias(type, properties) {
        return {
          kind: "TypeAlias",
          type,
          properties
        };
      }
      exports.TypeAlias = TypeAlias;
      function FunctionArg(name, type) {
        return {
          kind: "FunctionArg",
          name,
          type
        };
      }
      exports.FunctionArg = FunctionArg;
      function AnonFunctionArg(index, type) {
        return {
          kind: "AnonFunctionArg",
          index,
          type
        };
      }
      exports.AnonFunctionArg = AnonFunctionArg;
      function Value(body) {
        return {
          kind: "Value",
          body
        };
      }
      exports.Value = Value;
      function Field(name, value) {
        return {
          kind: "Field",
          name,
          value
        };
      }
      exports.Field = Field;
      function ObjectLiteral(base, fields) {
        return {
          kind: "ObjectLiteral",
          base,
          fields
        };
      }
      exports.ObjectLiteral = ObjectLiteral;
      function StringValue(body) {
        return {
          kind: "StringValue",
          body
        };
      }
      exports.StringValue = StringValue;
      function ListValue(items) {
        return {
          kind: "ListValue",
          items
        };
      }
      exports.ListValue = ListValue;
      function ListRange(start, end) {
        return {
          kind: "ListRange",
          start,
          end
        };
      }
      exports.ListRange = ListRange;
      function FormatStringValue(body) {
        return {
          kind: "FormatStringValue",
          body
        };
      }
      exports.FormatStringValue = FormatStringValue;
      function Destructure(constructor, pattern) {
        return {
          kind: "Destructure",
          constructor,
          pattern
        };
      }
      exports.Destructure = Destructure;
      function Constructor(constructor, pattern) {
        return {
          kind: "Constructor",
          constructor,
          pattern
        };
      }
      exports.Constructor = Constructor;
      function IfStatement(predicate, ifBody, ifLetBody, elseBody, elseLetBody) {
        return {
          kind: "IfStatement",
          predicate,
          ifBody,
          ifLetBody,
          elseBody,
          elseLetBody
        };
      }
      exports.IfStatement = IfStatement;
      function Addition(left, right) {
        return {
          kind: "Addition",
          left,
          right
        };
      }
      exports.Addition = Addition;
      function Subtraction(left, right) {
        return {
          kind: "Subtraction",
          left,
          right
        };
      }
      exports.Subtraction = Subtraction;
      function Multiplication(left, right) {
        return {
          kind: "Multiplication",
          left,
          right
        };
      }
      exports.Multiplication = Multiplication;
      function Division(left, right) {
        return {
          kind: "Division",
          left,
          right
        };
      }
      exports.Division = Division;
      function Mod(left, right) {
        return {
          kind: "Mod",
          left,
          right
        };
      }
      exports.Mod = Mod;
      function And(left, right) {
        return {
          kind: "And",
          left,
          right
        };
      }
      exports.And = And;
      function Or(left, right) {
        return {
          kind: "Or",
          left,
          right
        };
      }
      exports.Or = Or;
      function ListPrepend(left, right) {
        return {
          kind: "ListPrepend",
          left,
          right
        };
      }
      exports.ListPrepend = ListPrepend;
      function LeftPipe(left, right) {
        return {
          kind: "LeftPipe",
          left,
          right
        };
      }
      exports.LeftPipe = LeftPipe;
      function RightPipe(left, right) {
        return {
          kind: "RightPipe",
          left,
          right
        };
      }
      exports.RightPipe = RightPipe;
      function ModuleReference(path, value) {
        return {
          kind: "ModuleReference",
          path,
          value
        };
      }
      exports.ModuleReference = ModuleReference;
      function FunctionCall(name, args) {
        return {
          kind: "FunctionCall",
          name,
          args
        };
      }
      exports.FunctionCall = FunctionCall;
      function Lambda(args, body) {
        return {
          kind: "Lambda",
          args,
          body
        };
      }
      exports.Lambda = Lambda;
      function LambdaCall(lambda, args) {
        return {
          kind: "LambdaCall",
          lambda,
          args
        };
      }
      exports.LambdaCall = LambdaCall;
      function Default() {
        return {
          kind: "Default"
        };
      }
      exports.Default = Default;
      function EmptyList() {
        return {
          kind: "EmptyList"
        };
      }
      exports.EmptyList = EmptyList;
      function ListDestructure(parts) {
        return {
          kind: "ListDestructure",
          parts
        };
      }
      exports.ListDestructure = ListDestructure;
      function Branch(pattern, body, letBody) {
        return {
          kind: "Branch",
          pattern,
          body,
          letBody
        };
      }
      exports.Branch = Branch;
      function CaseStatement(predicate, branches) {
        return {
          kind: "CaseStatement",
          predicate,
          branches
        };
      }
      exports.CaseStatement = CaseStatement;
      function Equality(left, right) {
        return {
          kind: "Equality",
          left,
          right
        };
      }
      exports.Equality = Equality;
      function InEquality(left, right) {
        return {
          kind: "InEquality",
          left,
          right
        };
      }
      exports.InEquality = InEquality;
      function LessThan(left, right) {
        return {
          kind: "LessThan",
          left,
          right
        };
      }
      exports.LessThan = LessThan;
      function LessThanOrEqual(left, right) {
        return {
          kind: "LessThanOrEqual",
          left,
          right
        };
      }
      exports.LessThanOrEqual = LessThanOrEqual;
      function GreaterThan(left, right) {
        return {
          kind: "GreaterThan",
          left,
          right
        };
      }
      exports.GreaterThan = GreaterThan;
      function GreaterThanOrEqual(left, right) {
        return {
          kind: "GreaterThanOrEqual",
          left,
          right
        };
      }
      exports.GreaterThanOrEqual = GreaterThanOrEqual;
      function isSimpleValue(kind) {
        return [
          "StringValue",
          "FormatStringValue",
          "ListValue",
          "ListRange",
          "Value",
          "Addition",
          "Subtraction",
          "Multiplication",
          "Division",
          "Mod",
          "Lambda",
          "Equality",
          "InEquality",
          "LessThan",
          "LessThanOrEqual",
          "GreaterThan",
          "GreaterThanOrEqual",
          "And",
          "Or",
          "ListPrepend",
          "ModuleReference",
          "FunctionCall",
          "LeftPipe",
          "ObjectLiteral",
          "Constructor"
        ].indexOf(kind) > -1;
      }
      exports.isSimpleValue = isSimpleValue;
      function isLeftPipeableExpression(expression) {
        return [
          "LeftPipe",
          "ModuleReference",
          "FunctionCall",
          "Lambda",
          "Value"
        ].indexOf(expression.kind) > -1;
      }
      exports.isLeftPipeableExpression = isLeftPipeableExpression;
      function Function(name, returnType, args, letBody, body, doBody) {
        return {
          kind: "Function",
          name,
          returnType,
          args,
          letBody,
          body,
          doBody: doBody ? doBody : null
        };
      }
      exports.Function = Function;
      function Const(name, type, letBody, value) {
        return {
          kind: "Const",
          name,
          type,
          letBody,
          value
        };
      }
      exports.Const = Const;
      function ImportModule(name, alias, exposing, namespace) {
        return {
          kind: "ImportModule",
          name,
          alias,
          exposing,
          namespace
        };
      }
      exports.ImportModule = ImportModule;
      function Import(modules) {
        return {
          kind: "Import",
          modules
        };
      }
      exports.Import = Import;
      function Export(names) {
        return {
          kind: "Export",
          names
        };
      }
      exports.Export = Export;
      function Comment(body) {
        return {
          kind: "Comment",
          body
        };
      }
      exports.Comment = Comment;
      function MultilineComment(body) {
        return {
          kind: "MultilineComment",
          body
        };
      }
      exports.MultilineComment = MultilineComment;
      function UnparsedBlock(kind, lineStart, lines) {
        return {
          kind,
          lineStart,
          lines
        };
      }
      exports.UnparsedBlock = UnparsedBlock;
      function DoBlock(expressions) {
        return {
          kind: "DoBlock",
          expressions
        };
      }
      exports.DoBlock = DoBlock;
      function Module(name, body, errors) {
        return {
          kind: "Module",
          name,
          body,
          errors
        };
      }
      exports.Module = Module;
      function ContextModule(name, body, unparsedBody, errors) {
        return {
          kind: "ContextModule",
          name,
          body,
          unparsedBody,
          errors
        };
      }
      exports.ContextModule = ContextModule;
      function contextModuleToModule(module2) {
        return Module(module2.name, module2.body, module2.errors);
      }
      exports.contextModuleToModule = contextModuleToModule;
    }
  });

  // node_modules/derw/build/generators/Common.js
  var require_Common = __commonJS({
    "node_modules/derw/build/generators/Common.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.patternHasGaps = exports.patternGapPositions = exports.destructureLength = exports.prefixLines = void 0;
      var List = __importStar(require_List());
      function prefixLines(body, indent) {
        function lineFn(line) {
          if (line.trim() === "") {
            return line;
          } else {
            return `${" ".repeat(indent)}${line}`;
          }
        }
        return function(y) {
          return y.join("\n");
        }(List.map(lineFn, body.split("\n")));
      }
      exports.prefixLines = prefixLines;
      function partLength(part, index) {
        switch (part.kind) {
          case "Destructure": {
            return 1;
          }
          case "StringValue": {
            return 1;
          }
          case "FormatStringValue": {
            return 1;
          }
          case "EmptyList": {
            return 0;
          }
          case "Value": {
            if (index === 0) {
              return 1;
            } else {
              return 0;
            }
            ;
          }
        }
      }
      function destructureLength(pattern) {
        return List.foldl(function(x, y) {
          return x + y;
        }, 0, List.indexedMap(partLength, pattern.parts));
      }
      exports.destructureLength = destructureLength;
      function patternGapPositions(pattern) {
        function folder(part, info) {
          switch (part.kind) {
            case "Value": {
              if (info.i > 0) {
                return {
                  i: info.i - 1,
                  positions: [info.i, ...info.positions]
                };
              } else {
                return Object.assign(Object.assign({}, info), { i: info.i - 1 });
              }
              ;
            }
            default: {
              return Object.assign(Object.assign({}, info), { i: info.i - 1 });
            }
          }
        }
        return function(y) {
          return y.positions;
        }(List.foldr(folder, {
          i: pattern.parts.length - 1,
          positions: []
        }, pattern.parts));
      }
      exports.patternGapPositions = patternGapPositions;
      function patternHasGaps(pattern) {
        function hasGap(index, xs) {
          switch (xs.length) {
            case xs.length: {
              if (xs.length >= 1) {
                const [x, ...ys] = xs;
                switch (x.kind) {
                  case "Value": {
                    if (index > 0) {
                      return true;
                    } else {
                      return hasGap(index + 1, ys);
                    }
                    ;
                  }
                  default: {
                    return hasGap(index + 1, ys);
                  }
                }
                ;
              }
            }
            default: {
              return false;
            }
          }
        }
        return hasGap(0, pattern.parts);
      }
      exports.patternHasGaps = patternHasGaps;
    }
  });

  // node_modules/derw/build/generators/Derw.js
  var require_Derw = __commonJS({
    "node_modules/derw/build/generators/Derw.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.generateExpression = exports.generateDerw = void 0;
      var List = __importStar(require_List());
      var types_1 = require_types();
      var Common_1 = require_Common();
      function generateTag(tag) {
        function generateTypeArg(arg) {
          return function(type_) {
            return arg.name + ": " + type_;
          }(generateType(arg.type));
        }
        const typeDefArgs = function(y) {
          return y.join(",\n    ");
        }(List.map(generateTypeArg, tag.args));
        const funcDefArgsStr = tag.args.length > 0 ? ` { ${typeDefArgs} }` : "";
        return function(y) {
          return y + funcDefArgsStr;
        }(generateType({
          kind: "FixedType",
          name: tag.name,
          args: []
        }));
      }
      function generateUnionType(syntax) {
        const tags = function(y) {
          return y.join("\n| ");
        }(List.map(generateTag, syntax.tags));
        const prefixed = (0, Common_1.prefixLines)(tags, 4);
        return `type ${generateType(syntax.type)} =
${prefixed}`;
      }
      function generateUnionUntaggedType(syntax) {
        const values = function(y) {
          return y.join("\n| ");
        }(List.map(generateStringValue, syntax.values));
        const prefixed = (0, Common_1.prefixLines)(values, 4);
        return `type ${generateType(syntax.type)} =
${prefixed}`;
      }
      function generateProperty(syntax) {
        const generatedType = generateTopLevelType(syntax.type);
        switch (syntax.type.kind) {
          case "FunctionType": {
            return `${syntax.name}: ${generatedType.slice(1, -1)}`;
          }
          default: {
            return `${syntax.name}: ${generatedType}`;
          }
        }
      }
      function generateTypeAlias(syntax) {
        const properties = function(y) {
          return y.join(",\n    ");
        }(List.map(generateProperty, syntax.properties));
        const typeDef = generateType(syntax.type);
        if (syntax.properties.length === 0) {
          return `type alias ${typeDef} = {
}`;
        } else {
          return `type alias ${typeDef} = {
    ${properties}
}`;
        }
      }
      function generateListType(args) {
        if (args.length > 0 && args[0].kind === "GenericType") {
          return `List ${generateType(args[0])}`;
        } else {
          const fixedArgs = List.filter(function(type_) {
            return type_.kind === "FixedType";
          }, args);
          switch (fixedArgs.length) {
            case 0: {
              return "List any";
            }
            case fixedArgs.length: {
              if (fixedArgs.length === 1) {
                const [x] = fixedArgs;
                if (x.kind === "FixedType" && x.args.length > 0) {
                  return `List (${generateType(x)})`;
                } else {
                  return `List ${generateType(x)}`;
                }
                ;
              }
            }
            default: {
              return `List (${fixedArgs.map(generateType).join(" | ")})`;
            }
          }
          ;
        }
      }
      function generateTopLevelType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return generateType(type_);
          }
          case "FixedType": {
            const { name, args } = type_;
            if (args.length > 0 && args[0].kind === "FixedType" && args[0].args.length > 0) {
              return `${name} (${args.map(generateTopLevelType).join(" ")})`;
            } else {
              const genericArgs = List.filter(function(type_2) {
                return type_2.kind === "GenericType" || type_2.kind === "FixedType";
              }, args);
              if (genericArgs.length === 0) {
                return name;
              } else {
                let wrapper = function(newType) {
                  switch (newType.kind) {
                    case "FixedType": {
                      const { args: args2 } = newType;
                      if (args2.length > 0) {
                        return `(${generateTopLevelType(newType)})`;
                      } else {
                        return `${generateTopLevelType(newType)}`;
                      }
                      ;
                    }
                    default: {
                      return `${generateTopLevelType(newType)}`;
                    }
                  }
                };
                const wrappedArgs = genericArgs.map(wrapper);
                return `${name} ${wrappedArgs.join(" ")}`;
              }
              ;
            }
            ;
          }
          case "FunctionType": {
            const { args } = type_;
            return `(${args.map(generateTopLevelType).join(" -> ")})`;
          }
          case "ObjectLiteralType": {
            return ``;
          }
        }
      }
      function generateType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            const { name } = type_;
            return name;
          }
          case "FixedType": {
            const { name, args } = type_;
            if (name === "List") {
              return generateListType(args);
            } else {
              const genericArgs = List.filter(function(type_2) {
                return type_2.kind === "GenericType";
              }, args);
              if (genericArgs.length === 0) {
                return name;
              } else {
                return `${name} ${genericArgs.map(generateType).join(" ")}`;
              }
              ;
            }
            ;
          }
          case "FunctionType": {
            const { args } = type_;
            return `(${args.map(generateType).join(" -> ")})`;
          }
          case "ObjectLiteralType": {
            return ``;
          }
        }
      }
      function generateField(field) {
        const value = generateExpression(field.value);
        return `${field.name}: ${value}`;
      }
      function generateObjectLiteral(literal) {
        const fields = function(y) {
          return y.join(",\n");
        }(literal.fields.map(generateField));
        const maybePrefixed = (0, Common_1.prefixLines)(fields, 4);
        if (literal.base === null) {
          if (literal.fields.length === 1) {
            return `{ ${fields} }`;
          } else {
            return `{
${maybePrefixed}
}`;
          }
          ;
        } else {
          if (literal.fields.length === 1) {
            return `{ ${literal.base.body}, ${fields} }`;
          } else {
            return `{
    ${literal.base.body},
${maybePrefixed}
}`;
          }
          ;
        }
      }
      function generateValue(value) {
        return value.body;
      }
      function generateStringValue(string) {
        return `"${string.body}"`;
      }
      function generateFormatStringValue(string) {
        return "`" + string.body + "`";
      }
      function generateListValue(list) {
        switch (list.items.length) {
          case 0: {
            return "[ ]";
          }
          case list.items.length: {
            if (list.items.length === 1) {
              const [x] = list.items;
              return `[ ${generateExpression(x)} ]`;
            }
          }
          default: {
            return `[
${(0, Common_1.prefixLines)(list.items.map(generateExpression).join(",\n"), 4)}
]`;
          }
        }
      }
      function generateListRange(list) {
        return `[ ${list.start.body}..${list.end.body} ]`;
      }
      function generateLetBlock(body) {
        switch (body.length) {
          case 0: {
            return "";
          }
          case body.length: {
            if (body.length >= 1) {
              const [x, ...ys] = body;
              const prefixedLet = (0, Common_1.prefixLines)("\nlet", 4);
              const prefixedBody = function(y) {
                return y.join("\n\n");
              }(List.map(generateBlock, body));
              const prefixedLines = (0, Common_1.prefixLines)(prefixedBody, 8);
              const prefixedIn = (0, Common_1.prefixLines)("\nin", 4);
              return `${prefixedLet}
${prefixedLines}${prefixedIn}${(0, Common_1.prefixLines)("", 8)}`;
            }
          }
          default: {
            return "";
          }
        }
      }
      function generateIfStatement(ifStatement) {
        const maybeIfLetBody = generateLetBlock(ifStatement.ifLetBody);
        const maybeElseLetBody = generateLetBlock(ifStatement.elseLetBody);
        const predicate = generateExpression(ifStatement.predicate);
        const ifIndent = maybeIfLetBody === "" ? 4 : 8;
        const ifBody = function(lines) {
          return (0, Common_1.prefixLines)(lines, ifIndent);
        }(generateExpression(ifStatement.ifBody));
        const elseIndent = maybeElseLetBody === "" ? 4 : 8;
        const elseBody = function(lines) {
          return (0, Common_1.prefixLines)(lines, elseIndent);
        }(generateExpression(ifStatement.elseBody));
        return `if ${predicate} then${maybeIfLetBody}
${ifBody}
else${maybeElseLetBody}
${elseBody}`;
      }
      function generateConstructor(constructor) {
        switch (constructor.pattern.fields.length) {
          case 0: {
            return constructor.constructor;
          }
          default: {
            return `${constructor.constructor} ${generateObjectLiteral(constructor.pattern)}`;
          }
        }
      }
      function generateListDestructurePart(part) {
        switch (part.kind) {
          case "EmptyList": {
            return "[]";
          }
          case "StringValue": {
            const { body } = part;
            return `"${body}"`;
          }
          case "FormatStringValue": {
            const { body } = part;
            return "`" + body + "`";
          }
          case "Value": {
            const { body } = part;
            return body;
          }
          case "Destructure": {
            const { pattern } = part;
            if (pattern.length === 0) {
              return part.constructor;
            } else {
              return `${part.constructor} ${pattern}`;
            }
            ;
          }
        }
      }
      function generateBranchPattern(branchPattern) {
        switch (branchPattern.kind) {
          case "Destructure": {
            const { pattern } = branchPattern;
            if (pattern.length === 0) {
              return branchPattern.constructor;
            } else {
              return `${branchPattern.constructor} ${pattern}`;
            }
            ;
          }
          case "StringValue": {
            const { body } = branchPattern;
            return `"${body}"`;
          }
          case "FormatStringValue": {
            const { body } = branchPattern;
            return "`" + body + "`";
          }
          case "EmptyList": {
            return "[]";
          }
          case "ListDestructure": {
            const { parts } = branchPattern;
            return function(y) {
              return y.join(" :: ");
            }(List.map(generateListDestructurePart, parts));
          }
          case "Default": {
            return "default";
          }
        }
      }
      function generateBranch(branch) {
        const maybeLetBody = generateLetBlock(branch.letBody);
        const bodyIndent = maybeLetBody === "" ? 4 : 8;
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(branch.body));
        const pattern = generateBranchPattern(branch.pattern);
        return `${pattern} ->${maybeLetBody}
${body}`;
      }
      function generateCaseStatement(caseStatement) {
        const predicate = generateExpression(caseStatement.predicate);
        const branches = function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(function(y) {
          return y.join("\n\n");
        }(List.map(generateBranch, caseStatement.branches)));
        return `case ${predicate} of
${branches}`;
      }
      function needsBrackets(expression) {
        switch (expression.kind) {
          case "FunctionCall": {
            return true;
          }
          default: {
            return false;
          }
        }
      }
      function applyBrackets(needsBrackets2, generated) {
        if (needsBrackets2) {
          return "(" + generated + ")";
        } else {
          return generated;
        }
      }
      function generateAddition(addition) {
        const left = applyBrackets(needsBrackets(addition.left), generateExpression(addition.left));
        const right = applyBrackets(needsBrackets(addition.right), generateExpression(addition.right));
        return `${left} + ${right}`;
      }
      function generateSubtraction(subtraction) {
        const left = applyBrackets(needsBrackets(subtraction.left), generateExpression(subtraction.left));
        const right = applyBrackets(needsBrackets(subtraction.right), generateExpression(subtraction.right));
        return `${left} - ${right}`;
      }
      function generateMultiplication(multiplication) {
        const left = applyBrackets(needsBrackets(multiplication.left), generateExpression(multiplication.left));
        const right = applyBrackets(needsBrackets(multiplication.right), generateExpression(multiplication.right));
        return `${left} * ${right}`;
      }
      function generateDivision(division) {
        const left = applyBrackets(needsBrackets(division.left), generateExpression(division.left));
        const right = applyBrackets(needsBrackets(division.right), generateExpression(division.right));
        return `${left} / ${right}`;
      }
      function generateMod(mod) {
        const left = applyBrackets(needsBrackets(mod.left), generateExpression(mod.left));
        const right = applyBrackets(needsBrackets(mod.right), generateExpression(mod.right));
        return `${left} % ${right}`;
      }
      function generateLeftPipe(leftPipe) {
        const left = generateExpression(leftPipe.left);
        const right = generateExpression(leftPipe.right);
        return `${left}
    |> ${right}`;
      }
      function generateRightPipe(rightPipe) {
        const left = generateExpression(rightPipe.left);
        const right = generateExpression(rightPipe.right);
        return `${left}
    <| ${right}`;
      }
      function generateModuleReference(moduleReference) {
        if (moduleReference.path.length === 0) {
          return `.${generateExpression(moduleReference.value)}`;
        } else {
          const left = moduleReference.path.join(".");
          const right = generateExpression(moduleReference.value);
          return `${left}.${right}`;
        }
      }
      function generateFunctionCallArg(arg) {
        switch (arg.kind) {
          case "Constructor": {
            const { pattern } = arg;
            switch (pattern.fields.length) {
              case 0: {
                return generateExpression(arg);
              }
              default: {
                return `(${generateExpression(arg)})`;
              }
            }
            ;
          }
          case "FunctionCall": {
            const { args } = arg;
            switch (args.length) {
              case 0: {
                return generateExpression(arg);
              }
              default: {
                return `(${generateExpression(arg)})`;
              }
            }
            ;
          }
          case "ModuleReference": {
            const { value } = arg;
            switch (value.kind) {
              case "Constructor": {
                return `(${generateExpression(arg)})`;
              }
              case "FunctionCall": {
                return `(${generateExpression(arg)})`;
              }
              default: {
                return generateExpression(arg);
              }
            }
            ;
          }
          case "ListPrepend": {
            return `(${generateExpression(arg)})`;
          }
          case "Addition": {
            return `(${generateExpression(arg)})`;
          }
          case "Subtraction": {
            return `(${generateExpression(arg)})`;
          }
          case "Multiplication": {
            return `(${generateExpression(arg)})`;
          }
          case "Division": {
            return `(${generateExpression(arg)})`;
          }
          case "Equality": {
            return `(${generateExpression(arg)})`;
          }
          case "InEquality": {
            return `(${generateExpression(arg)})`;
          }
          case "LessThan": {
            return `(${generateExpression(arg)})`;
          }
          case "GreaterThan": {
            return `(${generateExpression(arg)})`;
          }
          case "LessThanOrEqual": {
            return `(${generateExpression(arg)})`;
          }
          case "GreaterThanOrEqual": {
            return `(${generateExpression(arg)})`;
          }
          case "LeftPipe": {
            return `(${generateExpression(arg)})`;
          }
          case "RightPipe": {
            return `(${generateExpression(arg)})`;
          }
          default: {
            return generateExpression(arg);
          }
        }
      }
      function generateFunctionCall(functionCall) {
        if (functionCall.args.length === 0) {
          return `${functionCall.name}()`;
        } else {
          const args = function(y) {
            return y.join(" ");
          }(List.map(generateFunctionCallArg, functionCall.args));
          return `${functionCall.name} ${args}`;
        }
      }
      function generateLambda(lambda) {
        const args = function(y) {
          return y.join(" ");
        }(List.map(function(arg) {
          return arg;
        }, lambda.args));
        const body = generateExpression(lambda.body);
        const indent = (0, types_1.isSimpleValue)(lambda.body.kind) ? ` ${body}` : function(y) {
          return "\n" + y;
        }((0, Common_1.prefixLines)(body, 4));
        return `(\\${args} ->${indent})`;
      }
      function generateLambdaCall(lambdaCall) {
        const args = function(y) {
          return y.join(", ");
        }(List.map(function(arg) {
          return `${arg}: any`;
        }, lambdaCall.args));
        const argsValues = function(y) {
          return y.join(", ");
        }(List.map(generateExpression, lambdaCall.args));
        const body = generateExpression(lambdaCall.lambda.body);
        return `(function(${args}) {
    return ${body};
})(${argsValues})`;
      }
      function generateEquality(equality) {
        const left = generateExpression(equality.left);
        const right = generateExpression(equality.right);
        return `${left} == ${right}`;
      }
      function generateInEquality(inEquality) {
        const left = generateExpression(inEquality.left);
        const right = generateExpression(inEquality.right);
        return `${left} != ${right}`;
      }
      function generateLessThan(lessThan) {
        const left = generateExpression(lessThan.left);
        const right = generateExpression(lessThan.right);
        return `${left} < ${right}`;
      }
      function generateLessThanOrEqual(lessThanOrEqual) {
        const left = generateExpression(lessThanOrEqual.left);
        const right = generateExpression(lessThanOrEqual.right);
        return `${left} <= ${right}`;
      }
      function generateGreaterThan(greaterThan) {
        const left = generateExpression(greaterThan.left);
        const right = generateExpression(greaterThan.right);
        return `${left} > ${right}`;
      }
      function generateGreaterThanOrEqual(greaterThanOrEqual) {
        const left = generateExpression(greaterThanOrEqual.left);
        const right = generateExpression(greaterThanOrEqual.right);
        return `${left} >= ${right}`;
      }
      function generateAnd(and) {
        const left = generateExpression(and.left);
        const right = generateExpression(and.right);
        return `${left} && ${right}`;
      }
      function generateOr(or) {
        const left = generateExpression(or.left);
        const right = generateExpression(or.right);
        return `${left} || ${right}`;
      }
      function generateListPrepend(prepend) {
        const left = generateExpression(prepend.left);
        const right = generateExpression(prepend.right);
        return `${left} :: ${right}`;
      }
      function generateExpression(expression) {
        switch (expression.kind) {
          case "Value": {
            return generateValue(expression);
          }
          case "StringValue": {
            return generateStringValue(expression);
          }
          case "FormatStringValue": {
            return generateFormatStringValue(expression);
          }
          case "ListValue": {
            return generateListValue(expression);
          }
          case "ListRange": {
            return generateListRange(expression);
          }
          case "ObjectLiteral": {
            return generateObjectLiteral(expression);
          }
          case "IfStatement": {
            return generateIfStatement(expression);
          }
          case "CaseStatement": {
            return generateCaseStatement(expression);
          }
          case "Addition": {
            return generateAddition(expression);
          }
          case "Subtraction": {
            return generateSubtraction(expression);
          }
          case "Multiplication": {
            return generateMultiplication(expression);
          }
          case "Division": {
            return generateDivision(expression);
          }
          case "Mod": {
            return generateMod(expression);
          }
          case "And": {
            return generateAnd(expression);
          }
          case "Or": {
            return generateOr(expression);
          }
          case "ListPrepend": {
            return generateListPrepend(expression);
          }
          case "LeftPipe": {
            return generateLeftPipe(expression);
          }
          case "RightPipe": {
            return generateRightPipe(expression);
          }
          case "ModuleReference": {
            return generateModuleReference(expression);
          }
          case "FunctionCall": {
            return generateFunctionCall(expression);
          }
          case "Lambda": {
            return generateLambda(expression);
          }
          case "LambdaCall": {
            return generateLambdaCall(expression);
          }
          case "Constructor": {
            return generateConstructor(expression);
          }
          case "Equality": {
            return generateEquality(expression);
          }
          case "InEquality": {
            return generateInEquality(expression);
          }
          case "LessThan": {
            return generateLessThan(expression);
          }
          case "LessThanOrEqual": {
            return generateLessThanOrEqual(expression);
          }
          case "GreaterThan": {
            return generateGreaterThan(expression);
          }
          case "GreaterThanOrEqual": {
            return generateGreaterThanOrEqual(expression);
          }
        }
      }
      exports.generateExpression = generateExpression;
      function generateDoExpression(expression) {
        switch (expression.kind) {
          case "Const": {
            return generateConst(expression);
          }
          case "Function": {
            return generateFunction(expression);
          }
          case "FunctionCall": {
            return generateFunctionCall(expression);
          }
          case "ModuleReference": {
            return generateModuleReference(expression);
          }
          case "IfStatement": {
            return generateIfStatement(expression);
          }
        }
      }
      function generateDoBlock(doBody) {
        return function(y) {
          return `do
${y}
return`;
        }(function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(function(y) {
          return y.join("\n\n");
        }(List.map(function(expression) {
          return generateDoExpression(expression);
        }, doBody.expressions))));
      }
      function generateFunctionArg(arg) {
        switch (arg.kind) {
          case "FunctionArg": {
            return arg.name;
          }
          case "AnonFunctionArg": {
            return `_${arg.index}`;
          }
        }
      }
      function generateFunctionArgType(arg) {
        switch (arg.kind) {
          case "FunctionArg": {
            return generateTopLevelType(arg.type);
          }
          case "AnonFunctionArg": {
            return generateTopLevelType(arg.type);
          }
        }
      }
      function generateFunction(function_) {
        const argsTypes = function(y) {
          return y.join(" -> ");
        }(List.map(generateFunctionArgType, function_.args));
        const args = function(y) {
          return y.join(" ");
        }(List.map(generateFunctionArg, function_.args));
        const maybeLetBody = generateLetBlock(function_.letBody);
        const maybeDoBody = function_.doBody === null ? "" : `
${(0, Common_1.prefixLines)(generateDoBlock(function_.doBody), 4)}`;
        const returnType = generateTopLevelType(function_.returnType);
        const bodyIndent = maybeLetBody === "" && maybeDoBody === "" ? 4 : 8;
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(function_.body));
        return function(y) {
          return y.join("\n");
        }([`${function_.name}: ${argsTypes} -> ${returnType}`, `${function_.name} ${args} =${maybeLetBody}${maybeDoBody}`, `${body}`]);
      }
      function generateConst(constDef) {
        const maybeLetBody = generateLetBlock(constDef.letBody);
        const bodyIndent = maybeLetBody === "" ? 4 : 8;
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(constDef.value));
        const typeDef = generateTopLevelType(constDef.type);
        return function(y) {
          return y.join("\n");
        }([`${constDef.name}: ${typeDef}`, `${constDef.name} =${maybeLetBody}`, `${body}`]);
      }
      function generateImportModule(module2) {
        const partExposing = module2.exposing.length === 0 ? "" : ` exposing ( ${module2.exposing.join(", ")} )`;
        switch (module2.alias.kind) {
          case "Just": {
            const { value } = module2.alias;
            return `import ${module2.name} as ${value}${partExposing}`;
          }
          case "Nothing": {
            return `import ${module2.name}${partExposing}`;
          }
        }
      }
      function generateImportBlock(imports) {
        return function(y) {
          return y.join("\n");
        }(List.map(generateImportModule, imports.modules));
      }
      function generateExportBlock(exports2) {
        return `exposing ( ${exports2.names.join(", ")} )`;
      }
      function generateComment(comment) {
        return `-- ${comment.body}`;
      }
      function generateMultilineComment(comment) {
        return `{-
${comment.body}
-}`;
      }
      function generateBlock(syntax) {
        switch (syntax.kind) {
          case "Import": {
            return generateImportBlock(syntax);
          }
          case "Export": {
            return generateExportBlock(syntax);
          }
          case "UnionType": {
            return generateUnionType(syntax);
          }
          case "UnionUntaggedType": {
            return generateUnionUntaggedType(syntax);
          }
          case "TypeAlias": {
            return generateTypeAlias(syntax);
          }
          case "Function": {
            return generateFunction(syntax);
          }
          case "Const": {
            return generateConst(syntax);
          }
          case "Comment": {
            return generateComment(syntax);
          }
          case "MultilineComment": {
            return generateMultilineComment(syntax);
          }
        }
      }
      function joinBlocks(blocks) {
        switch (blocks.length) {
          case blocks.length: {
            if (blocks.length >= 1) {
              const [block, ...rest] = blocks;
              const generated = generateBlock(block);
              const next = joinBlocks(rest);
              if (generated.trim().length === 0) {
                return next;
              } else {
                switch (block.kind) {
                  case "Comment": {
                    return generated + "\n" + next;
                  }
                  case "MultilineComment": {
                    return generated + "\n" + next;
                  }
                  default: {
                    return generated + "\n\n" + next;
                  }
                }
                ;
              }
              ;
            }
          }
          default: {
            return "";
          }
        }
      }
      function generateDerw2(module2) {
        const onlyImports = List.filter(function(block) {
          return block.kind === "Import";
        }, module2.body);
        function sorter(a, b) {
          if (a === b) {
            return 0;
          } else {
            if (a < b) {
              return -1;
            } else {
              return 1;
            }
            ;
          }
        }
        const sortedImports = function(y) {
          return y.join("\n");
        }(function(y) {
          return y.sort(sorter);
        }(List.filter(function(line) {
          return line.length > 0;
        }, List.map(generateBlock, onlyImports))));
        const maybeNewlines = onlyImports.length === 0 ? "" : "\n\n";
        const withoutImports = function(y) {
          return y.trim();
        }(function(y) {
          return joinBlocks(y);
        }(List.filter(function(block) {
          return block.kind !== "Import";
        }, module2.body)));
        return function(y) {
          return y.join("");
        }([sortedImports, maybeNewlines, withoutImports]);
      }
      exports.generateDerw = generateDerw2;
    }
  });

  // node_modules/derw/build/generators/Elm.js
  var require_Elm = __commonJS({
    "node_modules/derw/build/generators/Elm.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.generateElm = void 0;
      var List = __importStar(require_List());
      var types_1 = require_types();
      var Common_1 = require_Common();
      function generateTag(tag) {
        function generateTypeArg(arg) {
          return function(type_) {
            return arg.name + ": " + type_;
          }(generateType(arg.type));
        }
        const typeDefArgs = function(y) {
          return y.join(",\n    ");
        }(List.map(generateTypeArg, tag.args));
        const funcDefArgsStr = tag.args.length > 0 ? ` { ${typeDefArgs} }` : "";
        return function(y) {
          return y + funcDefArgsStr;
        }(generateType({
          kind: "FixedType",
          name: tag.name,
          args: []
        }));
      }
      function generateUnionType(syntax) {
        const tags = function(y) {
          return y.join("\n| ");
        }(List.map(generateTag, syntax.tags));
        const prefixed = (0, Common_1.prefixLines)(tags, 4);
        return `type ${generateType(syntax.type)} =
${prefixed}`;
      }
      function generateUnionUntaggedType(syntax) {
        const values = function(y) {
          return y.join("\n| ");
        }(List.map(generateStringValue, syntax.values));
        const prefixed = (0, Common_1.prefixLines)(values, 4);
        return `type ${generateType(syntax.type)} =
${prefixed}`;
      }
      function generateProperty(syntax) {
        const generatedType = generateTopLevelType(syntax.type);
        switch (syntax.type.kind) {
          case "FunctionType": {
            return `${syntax.name}: ${generatedType.slice(1, -1)}`;
          }
          default: {
            return `${syntax.name}: ${generatedType}`;
          }
        }
      }
      function generateTypeAlias(syntax) {
        const properties = function(y) {
          return y.join(",\n    ");
        }(List.map(generateProperty, syntax.properties));
        const typeDef = generateType(syntax.type);
        if (syntax.properties.length === 0) {
          return `type alias ${typeDef} = {
}`;
        } else {
          return `type alias ${typeDef} = {
    ${properties}
}`;
        }
      }
      function generateListType(args) {
        if (args.length > 0 && args[0].kind === "GenericType") {
          return `List ${generateType(args[0])}`;
        } else {
          const fixedArgs = List.filter(function(type_) {
            return type_.kind === "FixedType";
          }, args);
          switch (fixedArgs.length) {
            case 0: {
              return "List any";
            }
            case fixedArgs.length: {
              if (fixedArgs.length === 1) {
                const [x] = fixedArgs;
                if (x.kind === "FixedType" && x.args.length > 0) {
                  return `List (${generateType(x)})`;
                } else {
                  return `List ${generateType(x)}`;
                }
                ;
              }
            }
            default: {
              return `List (${fixedArgs.map(generateType).join(" | ")})`;
            }
          }
          ;
        }
      }
      var typeMap = {
        boolean: "Bool",
        number: "Float",
        string: "String",
        void: "String"
      };
      function typeMapNameLookup(name) {
        if (typeMap[name]) {
          return typeMap[name];
        } else {
          return name;
        }
      }
      function generateTopLevelType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return generateType(type_);
          }
          case "FixedType": {
            const { name, args } = type_;
            if (args.length > 0 && args[0].kind === "FixedType" && args[0].args.length > 0) {
              return `${name} (${args.map(generateTopLevelType).join(" ")})`;
            } else {
              const genericArgs = List.filter(function(type_2) {
                return type_2.kind === "GenericType" || type_2.kind === "FixedType";
              }, args);
              if (genericArgs.length === 0) {
                return typeMapNameLookup(name);
              } else {
                return `${name} ${genericArgs.map(generateType).join(" ")}`;
              }
              ;
            }
            ;
          }
          case "FunctionType": {
            const { args } = type_;
            return `(${args.map(generateTopLevelType).join(" -> ")})`;
          }
          case "ObjectLiteralType": {
            return ``;
          }
        }
      }
      function generateType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            const { name } = type_;
            return typeMapNameLookup(name);
          }
          case "FixedType": {
            const { name, args } = type_;
            if (name === "List") {
              return generateListType(args);
            } else {
              const genericArgs = List.filter(function(type_2) {
                return type_2.kind === "GenericType";
              }, args);
              if (genericArgs.length === 0) {
                return typeMapNameLookup(name);
              } else {
                return `${name} ${genericArgs.map(generateType).join(" ")}`;
              }
              ;
            }
            ;
          }
          case "FunctionType": {
            const { args } = type_;
            return `(${args.map(generateType).join(" -> ")})`;
          }
          case "ObjectLiteralType": {
            return ``;
          }
        }
      }
      function generateField(field) {
        const value = generateExpression(field.value);
        return `${field.name} = ${value}`;
      }
      function generateObjectLiteral(literal) {
        const fields = function(y) {
          return y.join(",\n    ");
        }(literal.fields.map(generateField));
        if (literal.base === null) {
          if (literal.fields.length === 1) {
            return `{ ${fields} }`;
          } else {
            return `{
    ${fields}
}`;
          }
          ;
        } else {
          const baseWithoutDots = `${literal.base.body.split("...")[1]}`;
          if (literal.fields.length === 1) {
            return `{ ${baseWithoutDots} | ${fields} }`;
          } else {
            return `{
    ${baseWithoutDots} |
    ${fields}
}`;
          }
          ;
        }
      }
      function generateValue(value) {
        switch (value.body) {
          case "true": {
            return "True";
          }
          case "false": {
            return "False";
          }
          default: {
            return value.body;
          }
        }
      }
      function generateStringValue(string) {
        return `"${string.body}"`;
      }
      function generateFormatStringValue(string) {
        return `"${string.body}"`;
      }
      function generateListValue(list) {
        switch (list.items.length) {
          case 0: {
            return "[ ]";
          }
          case list.items.length: {
            if (list.items.length === 1) {
              const [x] = list.items;
              return `[ ${generateExpression(x)} ]`;
            }
          }
          default: {
            return `[
${(0, Common_1.prefixLines)(list.items.map(generateExpression).join(",\n"), 4)}
]`;
          }
        }
      }
      function generateListRange(list) {
        return `[ ${list.start.body}..${list.end.body} ]`;
      }
      function generateLetBlock(body) {
        switch (body.length) {
          case 0: {
            return "";
          }
          case body.length: {
            if (body.length >= 1) {
              const [x, ...ys] = body;
              const prefixedLet = (0, Common_1.prefixLines)("\nlet", 4);
              const prefixedBody = function(y) {
                return y.join("\n\n");
              }(List.map(generateBlock, body));
              const prefixedLines = (0, Common_1.prefixLines)(prefixedBody, 8);
              const prefixedIn = (0, Common_1.prefixLines)("\nin", 4);
              return `${prefixedLet}
${prefixedLines}${prefixedIn}${(0, Common_1.prefixLines)("", 8)}`;
            }
          }
          default: {
            return "";
          }
        }
      }
      function generateIfStatement(ifStatement) {
        const maybeIfLetBody = generateLetBlock(ifStatement.ifLetBody);
        const maybeElseLetBody = generateLetBlock(ifStatement.elseLetBody);
        const predicate = generateExpression(ifStatement.predicate);
        const ifIndent = maybeIfLetBody === "" ? 4 : 8;
        const ifBody = function(lines) {
          return (0, Common_1.prefixLines)(lines, ifIndent);
        }(generateExpression(ifStatement.ifBody));
        const elseIndent = maybeElseLetBody === "" ? 4 : 8;
        const elseBody = function(lines) {
          return (0, Common_1.prefixLines)(lines, elseIndent);
        }(generateExpression(ifStatement.elseBody));
        return `if ${predicate} then${maybeIfLetBody}
${ifBody}
else${maybeElseLetBody}
${elseBody}`;
      }
      function generateConstructor(constructor) {
        switch (constructor.pattern.fields.length) {
          case 0: {
            return constructor.constructor;
          }
          default: {
            return `${constructor.constructor} ${generateObjectLiteral(constructor.pattern)}`;
          }
        }
      }
      function generateListDestructurePart(part) {
        switch (part.kind) {
          case "EmptyList": {
            return "[]";
          }
          case "StringValue": {
            const { body } = part;
            return `"${body}"`;
          }
          case "FormatStringValue": {
            const { body } = part;
            return "`" + body + "`";
          }
          case "Value": {
            const { body } = part;
            return body;
          }
          case "Destructure": {
            const { pattern } = part;
            if (pattern.length === 0) {
              return part.constructor;
            } else {
              return `${part.constructor} ${pattern}`;
            }
            ;
          }
        }
      }
      function generateBranchPattern(branchPattern) {
        switch (branchPattern.kind) {
          case "Destructure": {
            const { pattern } = branchPattern;
            if (pattern.length === 0) {
              return branchPattern.constructor;
            } else {
              return `${branchPattern.constructor} ${pattern}`;
            }
            ;
          }
          case "StringValue": {
            const { body } = branchPattern;
            return `"${body}"`;
          }
          case "FormatStringValue": {
            const { body } = branchPattern;
            return "`" + body + "`";
          }
          case "EmptyList": {
            return "[]";
          }
          case "ListDestructure": {
            const { parts } = branchPattern;
            return function(y) {
              return y.join(" :: ");
            }(List.map(generateListDestructurePart, parts));
          }
          case "Default": {
            return "default";
          }
        }
      }
      function generateBranch(branch) {
        const maybeLetBody = generateLetBlock(branch.letBody);
        const bodyIndent = maybeLetBody === "" ? 4 : 8;
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(branch.body));
        const pattern = generateBranchPattern(branch.pattern);
        return `${pattern} ->${maybeLetBody}
${body}`;
      }
      function generateCaseStatement(caseStatement) {
        const predicate = generateExpression(caseStatement.predicate);
        const branches = function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(function(y) {
          return y.join("\n\n");
        }(List.map(generateBranch, caseStatement.branches)));
        return `case ${predicate} of
${branches}`;
      }
      function needsBrackets(expression) {
        switch (expression.kind) {
          case "FunctionCall": {
            return true;
          }
          default: {
            return false;
          }
        }
      }
      function applyBrackets(needsBrackets2, generated) {
        if (needsBrackets2) {
          return "(" + generated + ")";
        } else {
          return generated;
        }
      }
      function generateAddition(addition) {
        const left = applyBrackets(needsBrackets(addition.left), generateExpression(addition.left));
        const right = applyBrackets(needsBrackets(addition.right), generateExpression(addition.right));
        if (addition.left.kind === "StringValue" || addition.right.kind === "StringValue") {
          return `${left} ++ ${right}`;
        } else {
          return `${left} + ${right}`;
        }
      }
      function generateSubtraction(subtraction) {
        const left = applyBrackets(needsBrackets(subtraction.left), generateExpression(subtraction.left));
        const right = applyBrackets(needsBrackets(subtraction.right), generateExpression(subtraction.right));
        return `${left} - ${right}`;
      }
      function generateMultiplication(multiplication) {
        const left = applyBrackets(needsBrackets(multiplication.left), generateExpression(multiplication.left));
        const right = applyBrackets(needsBrackets(multiplication.right), generateExpression(multiplication.right));
        return `${left} * ${right}`;
      }
      function generateDivision(division) {
        const left = applyBrackets(needsBrackets(division.left), generateExpression(division.left));
        const right = applyBrackets(needsBrackets(division.right), generateExpression(division.right));
        return `${left} / ${right}`;
      }
      function generateMod(mod) {
        const left = applyBrackets(needsBrackets(mod.left), generateExpression(mod.left));
        const right = applyBrackets(needsBrackets(mod.right), generateExpression(mod.right));
        return `${left} % ${right}`;
      }
      function generateLeftPipe(leftPipe) {
        const left = generateExpression(leftPipe.left);
        const right = generateExpression(leftPipe.right);
        return `${left}
    |> ${right}`;
      }
      function generateRightPipe(rightPipe) {
        const left = generateExpression(rightPipe.left);
        const right = generateExpression(rightPipe.right);
        return `${left}
    <| ${right}`;
      }
      function generateModuleReference(moduleReference) {
        if (moduleReference.path.length === 0) {
          return `.${generateExpression(moduleReference.value)}`;
        } else {
          const left = moduleReference.path.join(".");
          const right = generateExpression(moduleReference.value);
          const value = `${left}.${right}`;
          if (value === "console.log") {
            return `Debug.log ""`;
          } else {
            return value;
          }
          ;
        }
      }
      function generateFunctionCallArg(arg) {
        switch (arg.kind) {
          case "Constructor": {
            const { pattern } = arg;
            switch (pattern.fields.length) {
              case 0: {
                return generateExpression(arg);
              }
              default: {
                return `(${generateExpression(arg)})`;
              }
            }
            ;
          }
          case "FunctionCall": {
            const { args } = arg;
            switch (args.length) {
              case 0: {
                return generateExpression(arg);
              }
              default: {
                return `(${generateExpression(arg)})`;
              }
            }
            ;
          }
          case "ModuleReference": {
            const { value } = arg;
            switch (value.kind) {
              case "Constructor": {
                return `(${generateExpression(arg)})`;
              }
              case "FunctionCall": {
                return `(${generateExpression(arg)})`;
              }
              default: {
                return generateExpression(arg);
              }
            }
            ;
          }
          case "ListPrepend": {
            return `(${generateExpression(arg)})`;
          }
          case "Addition": {
            return `(${generateExpression(arg)})`;
          }
          case "Subtraction": {
            return `(${generateExpression(arg)})`;
          }
          case "Multiplication": {
            return `(${generateExpression(arg)})`;
          }
          case "Division": {
            return `(${generateExpression(arg)})`;
          }
          case "Equality": {
            return `(${generateExpression(arg)})`;
          }
          case "InEquality": {
            return `(${generateExpression(arg)})`;
          }
          case "LessThan": {
            return `(${generateExpression(arg)})`;
          }
          case "GreaterThan": {
            return `(${generateExpression(arg)})`;
          }
          case "LessThanOrEqual": {
            return `(${generateExpression(arg)})`;
          }
          case "GreaterThanOrEqual": {
            return `(${generateExpression(arg)})`;
          }
          case "LeftPipe": {
            return `(${generateExpression(arg)})`;
          }
          case "RightPipe": {
            return `(${generateExpression(arg)})`;
          }
          default: {
            return generateExpression(arg);
          }
        }
      }
      function generateFunctionCall(functionCall) {
        if (functionCall.args.length === 0) {
          return `${functionCall.name}()`;
        } else {
          const args = function(y) {
            return y.join(" ");
          }(List.map(generateFunctionCallArg, functionCall.args));
          return `${functionCall.name} ${args}`;
        }
      }
      function generateLambda(lambda) {
        const args = function(y) {
          return y.join(" ");
        }(List.map(function(arg) {
          return arg;
        }, lambda.args));
        const body = generateExpression(lambda.body);
        const indent = (0, types_1.isSimpleValue)(lambda.body.kind) ? ` ${body}` : function(y) {
          return "\n" + y;
        }((0, Common_1.prefixLines)(body, 4));
        return `\\${args} ->${indent}`;
      }
      function generateLambdaCall(lambdaCall) {
        const args = function(y) {
          return y.join(", ");
        }(List.map(function(arg) {
          return `${arg}: any`;
        }, lambdaCall.args));
        const argsValues = function(y) {
          return y.join(", ");
        }(List.map(generateExpression, lambdaCall.args));
        const body = generateExpression(lambdaCall.lambda.body);
        return `(function(${args}) {
    return ${body};
})(${argsValues})`;
      }
      function generateEquality(equality) {
        const left = generateExpression(equality.left);
        const right = generateExpression(equality.right);
        return `${left} == ${right}`;
      }
      function generateInEquality(inEquality) {
        const left = generateExpression(inEquality.left);
        const right = generateExpression(inEquality.right);
        return `${left} != ${right}`;
      }
      function generateLessThan(lessThan) {
        const left = generateExpression(lessThan.left);
        const right = generateExpression(lessThan.right);
        return `${left} < ${right}`;
      }
      function generateLessThanOrEqual(lessThanOrEqual) {
        const left = generateExpression(lessThanOrEqual.left);
        const right = generateExpression(lessThanOrEqual.right);
        return `${left} <= ${right}`;
      }
      function generateGreaterThan(greaterThan) {
        const left = generateExpression(greaterThan.left);
        const right = generateExpression(greaterThan.right);
        return `${left} > ${right}`;
      }
      function generateGreaterThanOrEqual(greaterThanOrEqual) {
        const left = generateExpression(greaterThanOrEqual.left);
        const right = generateExpression(greaterThanOrEqual.right);
        return `${left} >= ${right}`;
      }
      function generateAnd(and) {
        const left = generateExpression(and.left);
        const right = generateExpression(and.right);
        return `${left} && ${right}`;
      }
      function generateOr(or) {
        const left = generateExpression(or.left);
        const right = generateExpression(or.right);
        return `${left} || ${right}`;
      }
      function generateListPrepend(prepend) {
        const left = generateExpression(prepend.left);
        const right = generateExpression(prepend.right);
        return `${left} :: ${right}`;
      }
      function generateExpression(expression) {
        switch (expression.kind) {
          case "Value": {
            return generateValue(expression);
          }
          case "StringValue": {
            return generateStringValue(expression);
          }
          case "FormatStringValue": {
            return generateFormatStringValue(expression);
          }
          case "ListValue": {
            return generateListValue(expression);
          }
          case "ListRange": {
            return generateListRange(expression);
          }
          case "ObjectLiteral": {
            return generateObjectLiteral(expression);
          }
          case "IfStatement": {
            return generateIfStatement(expression);
          }
          case "CaseStatement": {
            return generateCaseStatement(expression);
          }
          case "Addition": {
            return generateAddition(expression);
          }
          case "Subtraction": {
            return generateSubtraction(expression);
          }
          case "Multiplication": {
            return generateMultiplication(expression);
          }
          case "Division": {
            return generateDivision(expression);
          }
          case "Mod": {
            return generateMod(expression);
          }
          case "And": {
            return generateAnd(expression);
          }
          case "Or": {
            return generateOr(expression);
          }
          case "ListPrepend": {
            return generateListPrepend(expression);
          }
          case "LeftPipe": {
            return generateLeftPipe(expression);
          }
          case "RightPipe": {
            return generateRightPipe(expression);
          }
          case "ModuleReference": {
            return generateModuleReference(expression);
          }
          case "FunctionCall": {
            return generateFunctionCall(expression);
          }
          case "Lambda": {
            return generateLambda(expression);
          }
          case "LambdaCall": {
            return generateLambdaCall(expression);
          }
          case "Constructor": {
            return generateConstructor(expression);
          }
          case "Equality": {
            return generateEquality(expression);
          }
          case "InEquality": {
            return generateInEquality(expression);
          }
          case "LessThan": {
            return generateLessThan(expression);
          }
          case "LessThanOrEqual": {
            return generateLessThanOrEqual(expression);
          }
          case "GreaterThan": {
            return generateGreaterThan(expression);
          }
          case "GreaterThanOrEqual": {
            return generateGreaterThanOrEqual(expression);
          }
        }
      }
      function generateFunctionArg(arg) {
        switch (arg.kind) {
          case "FunctionArg": {
            return arg.name;
          }
          case "AnonFunctionArg": {
            return `_${arg.index}`;
          }
        }
      }
      function generateFunctionArgType(arg) {
        switch (arg.kind) {
          case "FunctionArg": {
            return generateTopLevelType(arg.type);
          }
          case "AnonFunctionArg": {
            return generateTopLevelType(arg.type);
          }
        }
      }
      function generateFunction(function_) {
        const argsTypes = function(y) {
          return y.join(" -> ");
        }(List.map(generateFunctionArgType, function_.args));
        const args = function(y) {
          return y.join(" ");
        }(List.map(generateFunctionArg, function_.args));
        const maybeLetBody = generateLetBlock(function_.letBody);
        const returnType = generateTopLevelType(function_.returnType);
        const bodyIndent = maybeLetBody === "" ? 4 : 8;
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(function_.body));
        return function(y) {
          return y.join("\n");
        }([`${function_.name}: ${argsTypes} -> ${returnType}`, `${function_.name} ${args} =${maybeLetBody}`, `${body}`]);
      }
      function generateConst(constDef) {
        const maybeLetBody = generateLetBlock(constDef.letBody);
        const bodyIndent = maybeLetBody === "" ? 4 : 8;
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(constDef.value));
        const typeDef = generateTopLevelType(constDef.type);
        return function(y) {
          return y.join("\n");
        }([`${constDef.name}: ${typeDef}`, `${constDef.name} =${maybeLetBody}`, `${body}`]);
      }
      function generateImportModule(module2) {
        const moduleName = module2.namespace === "Global" ? module2.name : function(y) {
          return y.join("");
        }(function(y) {
          return y.split(`"`);
        }(function(y) {
          return y.join(".");
        }(function(y) {
          return y.split("/");
        }(function(y) {
          return y.replace("./", "");
        }(module2.name)))));
        const partExposing = module2.exposing.length === 0 ? "" : ` exposing ( ${module2.exposing.join(", ")} )`;
        switch (module2.alias.kind) {
          case "Just": {
            const { value } = module2.alias;
            return `import ${moduleName} as ${value}${partExposing}`;
          }
          case "Nothing": {
            return `import ${moduleName}${partExposing}`;
          }
        }
      }
      function generateImportBlock(imports) {
        return function(y) {
          return y.join("\n");
        }(List.map(generateImportModule, imports.modules));
      }
      function generateExportBlock(moduleName, names) {
        const toUpper = `${moduleName.toUpperCase()[0] + moduleName.slice(1)}`;
        const withoutDerw = `${toUpper.split("/").join(".").replace(".derw", "")}`;
        if (names.length === 0) {
          return `module ${withoutDerw} exposing (..)`;
        } else {
          return `module ${withoutDerw} exposing (${names.join(", ")})`;
        }
      }
      function generateBlock(syntax) {
        switch (syntax.kind) {
          case "Import": {
            return generateImportBlock(syntax);
          }
          case "Export": {
            return "";
          }
          case "UnionType": {
            return generateUnionType(syntax);
          }
          case "UnionUntaggedType": {
            return generateUnionUntaggedType(syntax);
          }
          case "TypeAlias": {
            return generateTypeAlias(syntax);
          }
          case "Function": {
            return generateFunction(syntax);
          }
          case "Const": {
            return generateConst(syntax);
          }
          case "Comment": {
            return "";
          }
          case "MultilineComment": {
            return "";
          }
        }
      }
      function generateElm2(module2) {
        const onlyExports = List.foldl(function(block, names) {
          return List.append(names, block.names);
        }, [], List.filter(function(block) {
          return block.kind === "Export";
        }, module2.body));
        const generatedExports = generateExportBlock(module2.name, onlyExports);
        const blocks = List.map(generateBlock, module2.body);
        return function(y) {
          return y.join("\n\n");
        }(List.filter(function(line) {
          return line.trim().length > 0;
        }, [generatedExports, ...blocks]));
      }
      exports.generateElm = generateElm2;
    }
  });

  // node_modules/derw/build/generators/English.js
  var require_English = __commonJS({
    "node_modules/derw/build/generators/English.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.generateEnglish = void 0;
      var List = __importStar(require_List());
      var Common_1 = require_Common();
      function generateTag(tag) {
        function generateTypeArg(arg) {
          return function(type_) {
            return arg.name + ": " + type_;
          }(generateType(arg.type));
        }
        const typeDefArgs = function(y) {
          return y.join(",\n    ");
        }(List.map(generateTypeArg, tag.args));
        const funcDefArgsStr = tag.args.length > 0 ? `{ ${typeDefArgs} }` : "";
        return function(y) {
          return y + funcDefArgsStr;
        }(generateType({
          kind: "FixedType",
          name: tag.name,
          args: []
        }));
      }
      function generateUnionType(syntax) {
        const tags = function(y) {
          return y.join("\n| ");
        }(List.map(generateTag, syntax.tags));
        const prefixed = (0, Common_1.prefixLines)(tags, 4);
        return `type ${generateType(syntax.type)} =
${tags}`;
      }
      function generateUnionUntaggedType(syntax) {
        const values = function(y) {
          return y.join("\n| ");
        }(List.map(generateStringValue, syntax.values));
        const prefixed = (0, Common_1.prefixLines)(values, 4);
        return `type ${generateType(syntax.type)} =
${prefixed}`;
      }
      function generateProperty(syntax) {
        return `${syntax.name}: ${generateType(syntax.type)}`;
      }
      function generateTypeAlias(syntax) {
        const properties = function(y) {
          return y.join(",\n    ");
        }(List.map(generateProperty, syntax.properties));
        const typeDef = generateType(syntax.type);
        return `type alias ${typeDef} = {
    ${properties}
}`;
      }
      function generateListType(args) {
        if (args.length > 0 && args[0].kind === "GenericType") {
          return `List ${generateType(args[0])}`;
        } else {
          const fixedArgs = List.filter(function(type_) {
            return type_.kind === "FixedType";
          }, args);
          switch (fixedArgs.length) {
            case 0: {
              return "List any";
            }
            case fixedArgs.length: {
              if (fixedArgs.length === 1) {
                const [x] = fixedArgs;
                if (x.kind === "FixedType" && x.args.length > 0) {
                  return `List (${generateType(x)})`;
                } else {
                  return `List ${generateType(x)}`;
                }
                ;
              }
            }
            default: {
              return `List (${fixedArgs.map(generateType).join(" | ")})`;
            }
          }
          ;
        }
      }
      function generateTopLevelType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return generateType(type_);
          }
          case "FixedType": {
            const { name, args } = type_;
            if (name === "List") {
              return generateType(type_);
            } else {
              const genericArgs = List.filter(function(type_2) {
                return type_2.kind === "GenericType" || type_2.kind === "FixedType";
              }, args);
              if (genericArgs.length === 0) {
                return name;
              } else {
                return `${name} ${genericArgs.map(generateType).join(" ")}`;
              }
              ;
            }
            ;
          }
          case "FunctionType": {
            return generateType(type_);
          }
          case "ObjectLiteralType": {
            return ``;
          }
        }
      }
      function generateType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            const { name } = type_;
            return name;
          }
          case "FixedType": {
            const { name, args } = type_;
            if (name === "List") {
              return generateListType(args);
            } else {
              const genericArgs = List.filter(function(type_2) {
                return type_2.kind === "GenericType";
              }, args);
              if (genericArgs.length === 0) {
                return name;
              } else {
                return `${name} ${genericArgs.map(generateType).join(" ")}`;
              }
              ;
            }
            ;
          }
          case "FunctionType": {
            const { args } = type_;
            return `(${args.map(generateType).join(" -> ")})`;
          }
          case "ObjectLiteralType": {
            return ``;
          }
        }
      }
      function generateField(field) {
        const value = generateExpression(field.value);
        return `${field.name}: ${value}`;
      }
      function generateObjectLiteral(literal) {
        const fields = function(y) {
          return y.join(",\n    ");
        }(literal.fields.map(generateField));
        if (literal.base === null) {
          if (literal.fields.length === 1) {
            return `{ ${fields} }`;
          } else {
            return `{
   ${fields}
}`;
          }
          ;
        } else {
          if (literal.fields.length === 1) {
            return `{ ${literal.base.body}, ${fields} }`;
          } else {
            return `{
    ${literal.base.body},
    ${fields}
}`;
          }
          ;
        }
      }
      function generateValue(value) {
        return value.body;
      }
      function generateStringValue(string) {
        return `"${string.body}"`;
      }
      function generateFormatStringValue(string) {
        return "`" + string.body + "`";
      }
      function generateListValue(list) {
        switch (list.items.length) {
          case 0: {
            return "An empty list";
          }
          case list.items.length: {
            if (list.items.length === 1) {
              const [x] = list.items;
              return `A list containing ${generateExpression(x)} only`;
            }
          }
          default: {
            return `A list containing:
${(0, Common_1.prefixLines)(list.items.map(generateExpression).join(",\n"), 4)}`;
          }
        }
      }
      function generateListRange(list) {
        return `[ ${list.start.body}..${list.end.body} ]`;
      }
      function generateLetBlock(body) {
        switch (body.length) {
          case 0: {
            return "";
          }
          case body.length: {
            if (body.length >= 1) {
              const [x, ...ys] = body;
              const prefixedLet = (0, Common_1.prefixLines)("\nlet", 4);
              const prefixedBody = function(y) {
                return y.join("\n\n");
              }(List.map(generateBlock, body));
              const prefixedLines = (0, Common_1.prefixLines)(prefixedBody, 8);
              const prefixedIn = (0, Common_1.prefixLines)("\nin", 4);
              return `${prefixedLet}
${prefixedLines}${prefixedIn}${(0, Common_1.prefixLines)("", 8)}`;
            }
          }
          default: {
            return "";
          }
        }
      }
      function generateIfStatement(ifStatement) {
        const maybeIfLetBody = generateLetBlock(ifStatement.ifLetBody);
        const maybeElseLetBody = generateLetBlock(ifStatement.elseLetBody);
        const predicate = generateExpression(ifStatement.predicate);
        const ifIndent = maybeIfLetBody === "" ? 4 : 8;
        const ifBody = function(lines) {
          return (0, Common_1.prefixLines)(lines, ifIndent);
        }(generateExpression(ifStatement.ifBody));
        const elseIndent = maybeElseLetBody === "" ? 4 : 8;
        const elseBody = function(lines) {
          return (0, Common_1.prefixLines)(lines, elseIndent);
        }(generateExpression(ifStatement.elseBody));
        return `if ${predicate} then${maybeIfLetBody}
${ifBody}
else${maybeElseLetBody}
${elseBody}
`;
      }
      function generateConstructor(constructor) {
        switch (constructor.pattern.fields.length) {
          case 0: {
            return constructor.constructor;
          }
          default: {
            return `${constructor.constructor} ${generateObjectLiteral(constructor.pattern)}`;
          }
        }
      }
      function generateListDestructurePart(part) {
        switch (part.kind) {
          case "EmptyList": {
            return "An empty list";
          }
          case "StringValue": {
            const { body } = part;
            return `"${body}"`;
          }
          case "FormatStringValue": {
            const { body } = part;
            return "`" + body + "`";
          }
          case "Value": {
            const { body } = part;
            return body;
          }
          case "Destructure": {
            const { pattern } = part;
            if (pattern.length === 0) {
              return part.constructor;
            } else {
              return `${part.constructor} ${pattern}`;
            }
            ;
          }
        }
      }
      function generateBranchPattern(branchPattern) {
        switch (branchPattern.kind) {
          case "Destructure": {
            const { pattern } = branchPattern;
            if (pattern.length === 0) {
              return branchPattern.constructor;
            } else {
              return `${branchPattern.constructor} ${pattern}`;
            }
            ;
          }
          case "StringValue": {
            const { body } = branchPattern;
            return `"${body}"`;
          }
          case "FormatStringValue": {
            const { body } = branchPattern;
            return "`" + body + "`";
          }
          case "EmptyList": {
            return "An empty list";
          }
          case "ListDestructure": {
            const { parts } = branchPattern;
            return function(y) {
              return y.join(" is in a list element from ");
            }(List.map(generateListDestructurePart, parts));
          }
          case "Default": {
            return "Nothing else matches";
          }
        }
      }
      function generateBranch(branch) {
        const maybeLetBody = generateLetBlock(branch.letBody);
        const bodyIndent = maybeLetBody === "" ? 4 : 9;
        const body = function(y) {
          return (0, Common_1.prefixLines)(`return ${y}`, bodyIndent);
        }(generateExpression(branch.body));
        const pattern = generateBranchPattern(branch.pattern);
        return `Is it ${pattern}? ->${maybeLetBody}
${body}`;
      }
      function generateCaseStatement(caseStatement) {
        const predicate = generateExpression(caseStatement.predicate);
        const branches = function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(function(y) {
          return y.join("\n\n");
        }(List.map(generateBranch, caseStatement.branches)));
        return `Check the value of ${predicate}
${branches}`;
      }
      function generateAddition(addition) {
        const left = generateExpression(addition.left);
        const right = generateExpression(addition.right);
        return `${left} plus ${right}`;
      }
      function generateSubtraction(subtraction) {
        const left = generateExpression(subtraction.left);
        const right = generateExpression(subtraction.right);
        return `${left} subtracts ${right}`;
      }
      function generateMultiplication(multiplication) {
        const left = generateExpression(multiplication.left);
        const right = generateExpression(multiplication.right);
        return `${left} multiplied by ${right}`;
      }
      function generateDivision(division) {
        const left = generateExpression(division.left);
        const right = generateExpression(division.right);
        return `${left} divided by ${right}`;
      }
      function generateMod(mod) {
        const left = generateExpression(mod.left);
        const right = generateExpression(mod.right);
        return `${left} mod ${right}`;
      }
      function generateLeftPipe(leftPipe) {
        const left = generateExpression(leftPipe.left);
        const right = generateExpression(leftPipe.right);
        return `Send ${left} as the last argument to ${right}`;
      }
      function generateRightPipe(rightPipe) {
        const left = generateExpression(rightPipe.left);
        const right = generateExpression(rightPipe.right);
        return `Send ${right} as the last argument to ${left}`;
      }
      function generateModuleReference(moduleReference) {
        const left = moduleReference.path.join(".");
        const right = generateExpression(moduleReference.value);
        return `${left}.${right}`;
      }
      function generateFunctionCallArg(arg) {
        switch (arg.kind) {
          case "Constructor": {
            return `(${generateExpression(arg)})`;
          }
          case "FunctionCall": {
            return `(${generateExpression(arg)})`;
          }
          case "ModuleReference": {
            const { value } = arg;
            switch (value.kind) {
              case "Constructor": {
                return `(${generateExpression(arg)})`;
              }
              case "FunctionCall": {
                return `(${generateExpression(arg)})`;
              }
              default: {
                return generateExpression(arg);
              }
            }
            ;
          }
          case "ListPrepend": {
            return `(${generateExpression(arg)})`;
          }
          default: {
            return generateExpression(arg);
          }
        }
      }
      function generateFunctionCall(functionCall) {
        if (functionCall.args.length === 0) {
          return `${functionCall.name}()`;
        } else {
          const args = function(y) {
            return y.join(" ");
          }(List.map(generateFunctionCallArg, functionCall.args));
          return `${functionCall.name} ${args}`;
        }
      }
      function generateLambda(lambda) {
        const args = function(y) {
          return y.join(" ");
        }(List.map(function(arg) {
          return arg;
        }, lambda.args));
        const body = generateExpression(lambda.body);
        return `(\\${args} -> ${body})`;
      }
      function generateLambdaCall(lambdaCall) {
        const args = function(y) {
          return y.join(", ");
        }(List.map(function(arg) {
          return `${arg}: any`;
        }, lambdaCall.args));
        const argsValues = function(y) {
          return y.join(", ");
        }(List.map(generateExpression, lambdaCall.args));
        const body = generateExpression(lambdaCall.lambda.body);
        return `(function(${args}) {
    return ${body};
})(${argsValues})`;
      }
      function generateEquality(equality) {
        const left = generateExpression(equality.left);
        const right = generateExpression(equality.right);
        return `${left} is equal to ${right}`;
      }
      function generateInEquality(inEquality) {
        const left = generateExpression(inEquality.left);
        const right = generateExpression(inEquality.right);
        return `${left} is not equal to ${right}`;
      }
      function generateLessThan(lessThan) {
        const left = generateExpression(lessThan.left);
        const right = generateExpression(lessThan.right);
        return `${left} is less than ${right}`;
      }
      function generateLessThanOrEqual(lessThanOrEqual) {
        const left = generateExpression(lessThanOrEqual.left);
        const right = generateExpression(lessThanOrEqual.right);
        return `${left} is less than or equal to ${right}`;
      }
      function generateGreaterThan(greaterThan) {
        const left = generateExpression(greaterThan.left);
        const right = generateExpression(greaterThan.right);
        return `${left} is greater than ${right}`;
      }
      function generateGreaterThanOrEqual(greaterThanOrEqual) {
        const left = generateExpression(greaterThanOrEqual.left);
        const right = generateExpression(greaterThanOrEqual.right);
        return `${left} is greater than or equal to ${right}`;
      }
      function generateAnd(and) {
        const left = generateExpression(and.left);
        const right = generateExpression(and.right);
        return `${left} and ${right}`;
      }
      function generateOr(or) {
        const left = generateExpression(or.left);
        const right = generateExpression(or.right);
        return `${left} or ${right}`;
      }
      function generateListPrepend(prepend) {
        const left = generateExpression(prepend.left);
        const right = generateExpression(prepend.right);
        return `Add ${left} as a list item to the front of ${right}`;
      }
      function generateExpression(expression) {
        switch (expression.kind) {
          case "Value": {
            return generateValue(expression);
          }
          case "StringValue": {
            return generateStringValue(expression);
          }
          case "FormatStringValue": {
            return generateFormatStringValue(expression);
          }
          case "ListValue": {
            return generateListValue(expression);
          }
          case "ListRange": {
            return generateListRange(expression);
          }
          case "ObjectLiteral": {
            return generateObjectLiteral(expression);
          }
          case "IfStatement": {
            return generateIfStatement(expression);
          }
          case "CaseStatement": {
            return generateCaseStatement(expression);
          }
          case "Addition": {
            return generateAddition(expression);
          }
          case "Subtraction": {
            return generateSubtraction(expression);
          }
          case "Multiplication": {
            return generateMultiplication(expression);
          }
          case "Division": {
            return generateDivision(expression);
          }
          case "Mod": {
            return generateMod(expression);
          }
          case "And": {
            return generateAnd(expression);
          }
          case "Or": {
            return generateOr(expression);
          }
          case "ListPrepend": {
            return generateListPrepend(expression);
          }
          case "LeftPipe": {
            return generateLeftPipe(expression);
          }
          case "RightPipe": {
            return generateRightPipe(expression);
          }
          case "ModuleReference": {
            return generateModuleReference(expression);
          }
          case "FunctionCall": {
            return generateFunctionCall(expression);
          }
          case "Lambda": {
            return generateLambda(expression);
          }
          case "LambdaCall": {
            return generateLambdaCall(expression);
          }
          case "Constructor": {
            return generateConstructor(expression);
          }
          case "Equality": {
            return generateEquality(expression);
          }
          case "InEquality": {
            return generateInEquality(expression);
          }
          case "LessThan": {
            return generateLessThan(expression);
          }
          case "LessThanOrEqual": {
            return generateLessThanOrEqual(expression);
          }
          case "GreaterThan": {
            return generateGreaterThan(expression);
          }
          case "GreaterThanOrEqual": {
            return generateGreaterThanOrEqual(expression);
          }
        }
      }
      function generateFunctionArg(arg) {
        switch (arg.kind) {
          case "FunctionArg": {
            const { name, type } = arg;
            return `${name} with the type ${generateType(type)}`;
          }
          case "AnonFunctionArg": {
            const { index, type } = arg;
            return `_${index} with the type ${generateType(type)}`;
          }
        }
      }
      function generateFunction(function_) {
        const args = function(y) {
          return y.join("\n");
        }(List.map(generateFunctionArg, function_.args));
        const maybeLetBody = generateLetBlock(function_.letBody);
        const returnType = generateTopLevelType(function_.returnType);
        const bodyIndent = maybeLetBody === "" ? 4 : 8;
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(function_.body));
        return function(y) {
          return y.join("\n");
        }([`${function_.name} is a function with the arguments:`, (0, Common_1.prefixLines)(args, 4), `${function_.name} returns a value of the type ${returnType}`, `${function_.name} is defined as: ${maybeLetBody}`, `${body}`]);
      }
      function generateConst(constDef) {
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(generateExpression(constDef.value));
        const typeDef = generateTopLevelType(constDef.type);
        return function(y) {
          return y.join("\n");
        }([`${constDef.name} is a constant with the type ${typeDef}`, `${constDef.name} is assigned to:`, `${body}`]);
      }
      function generateImportModule(module2) {
        const partExposing = module2.exposing.length === 0 ? "" : ` exposing (${module2.exposing.join(", ")} )`;
        switch (module2.alias.kind) {
          case "Just": {
            const { value } = module2.alias;
            return `import ${module2.name} as ${value}${partExposing}`;
          }
          case "Nothing": {
            return `import ${module2.name}${partExposing}`;
          }
        }
      }
      function generateImportBlock(imports) {
        return function(y) {
          return y.join("\n");
        }(List.map(generateImportModule, imports.modules));
      }
      function generateExportBlock(exports2) {
        return `exposing (${exports2.names.join(", ")})`;
      }
      function generateBlock(syntax) {
        switch (syntax.kind) {
          case "Import": {
            return generateImportBlock(syntax);
          }
          case "Export": {
            return generateExportBlock(syntax);
          }
          case "UnionType": {
            return generateUnionType(syntax);
          }
          case "UnionUntaggedType": {
            return generateUnionUntaggedType(syntax);
          }
          case "TypeAlias": {
            return generateTypeAlias(syntax);
          }
          case "Function": {
            return generateFunction(syntax);
          }
          case "Const": {
            return generateConst(syntax);
          }
          case "Comment": {
            return "";
          }
          case "MultilineComment": {
            return "";
          }
        }
      }
      function generateEnglish2(module2) {
        return function(y) {
          return y.join("\n\n");
        }(List.filter(function(line) {
          return line.length > 0;
        }, List.map(generateBlock, module2.body)));
      }
      exports.generateEnglish = generateEnglish2;
    }
  });

  // node_modules/derw/build/stdlib/Bitwise_kernel.js
  var require_Bitwise_kernel = __commonJS({
    "node_modules/derw/build/stdlib/Bitwise_kernel.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.or = exports.leftShift = void 0;
      function leftShift(a, b) {
        return a << b;
      }
      exports.leftShift = leftShift;
      function or(a, b) {
        return a | b;
      }
      exports.or = or;
    }
  });

  // node_modules/derw/build/Utils.js
  var require_Utils = __commonJS({
    "node_modules/derw/build/Utils.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.hashCode = exports.isTestFile = exports.getNameFromPath = void 0;
      var Bitwise = __importStar(require_Bitwise_kernel());
      var List = __importStar(require_List());
      function getNameFromPath(path) {
        const splitByPathSymbol = path.split("/");
        const lastElement = function() {
          const _res118108815 = splitByPathSymbol.slice(-1);
          switch (_res118108815.length) {
            case _res118108815.length: {
              if (_res118108815.length === 1) {
                const [x] = _res118108815;
                return function(y) {
                  return y[0];
                }(x.split("."));
              }
            }
            default: {
              return "";
            }
          }
        }();
        return lastElement;
      }
      exports.getNameFromPath = getNameFromPath;
      function isTestFile(name) {
        return name.endsWith("_test.derw");
      }
      exports.isTestFile = isTestFile;
      function hashCodeStep(charCode, hash) {
        const added = hash + charCode;
        const shift = Bitwise.leftShift(hash, 5);
        const subtracted = shift - added;
        return Bitwise.or(subtracted, 0);
      }
      function hashCode(str) {
        return function(y) {
          return Math.abs(y);
        }(List.foldl(hashCodeStep, 0, List.map(function(letter) {
          return letter.charCodeAt(0);
        }, str.split(""))));
      }
      exports.hashCode = hashCode;
    }
  });

  // node_modules/derw/build/Blocks.js
  var require_Blocks = __commonJS({
    "node_modules/derw/build/Blocks.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.exportTests = exports.typeBlocks = exports.intoBlocks = exports.createUnparsedBlock = exports.blockKind = void 0;
      var Utils_1 = require_Utils();
      var List = __importStar(require_List());
      function Ok(args) {
        return Object.assign({ kind: "Ok" }, args);
      }
      function Err(args) {
        return Object.assign({ kind: "Err" }, args);
      }
      function ImportBlock(args) {
        return Object.assign({ kind: "ImportBlock" }, args);
      }
      function ExportBlock(args) {
        return Object.assign({ kind: "ExportBlock" }, args);
      }
      function UnionTypeBlock(args) {
        return Object.assign({ kind: "UnionTypeBlock" }, args);
      }
      function UnionUntaggedTypeBlock(args) {
        return Object.assign({ kind: "UnionUntaggedTypeBlock" }, args);
      }
      function TypeAliasBlock(args) {
        return Object.assign({ kind: "TypeAliasBlock" }, args);
      }
      function FunctionBlock(args) {
        return Object.assign({ kind: "FunctionBlock" }, args);
      }
      function ConstBlock(args) {
        return Object.assign({ kind: "ConstBlock" }, args);
      }
      function CommentBlock(args) {
        return Object.assign({ kind: "CommentBlock" }, args);
      }
      function MultilineCommentBlock(args) {
        return Object.assign({ kind: "MultilineCommentBlock" }, args);
      }
      function UnknownBlock(args) {
        return Object.assign({ kind: "UnknownBlock" }, args);
      }
      function hasTypeLine(block) {
        const _res1328002030 = block.split(":");
        switch (_res1328002030.length) {
          case _res1328002030.length: {
            if (_res1328002030.length === 1) {
              const [x] = _res1328002030;
              return false;
            }
          }
          case _res1328002030.length: {
            if (_res1328002030.length >= 1) {
              const [x, ...xs] = _res1328002030;
              const trimmed = x.trim();
              const split = trimmed.split(" ");
              const length = split.length;
              return length === 1;
            }
          }
          default: {
            return false;
          }
        }
      }
      function isAFunction(block) {
        const _res1780524276 = block.split("\n");
        switch (_res1780524276.length) {
          case _res1780524276.length: {
            if (_res1780524276.length >= 1) {
              const [firstLine, ...xs] = _res1780524276;
              return function(y) {
                return y.length > 1;
              }(firstLine.split("->"));
            }
          }
          default: {
            return false;
          }
        }
      }
      var validators = [{
        test: function(x) {
          return x.startsWith("--");
        },
        blockKind: "Comment"
      }, {
        test: function(x) {
          return x.startsWith("{-");
        },
        blockKind: "MultilineComment"
      }, {
        test: function(x) {
          return x.startsWith("type alias");
        },
        blockKind: "TypeAlias"
      }, {
        test: function(x) {
          return x.startsWith("type ") && x.includes(`"`);
        },
        blockKind: "UnionUntaggedType"
      }, {
        test: function(x) {
          return x.startsWith("type ");
        },
        blockKind: "UnionType"
      }, {
        test: function(x) {
          return x.startsWith(" ") || x.startsWith("}");
        },
        blockKind: "Indent"
      }, {
        test: function(x) {
          return x.startsWith("import");
        },
        blockKind: "Import"
      }, {
        test: function(x) {
          return x.startsWith("exposing");
        },
        blockKind: "Export"
      }, {
        test: function(x) {
          return hasTypeLine(x) && isAFunction(x);
        },
        blockKind: "Function"
      }, {
        test: function(x) {
          return hasTypeLine(x);
        },
        blockKind: "Const"
      }, {
        test: function(x) {
          return function(y) {
            return y.length > 1;
          }(x.split("="));
        },
        blockKind: "Definition"
      }];
      function blockKindStep(block, validators2) {
        switch (validators2.length) {
          case validators2.length: {
            if (validators2.length >= 1) {
              const [validator, ...ys] = validators2;
              if (validator.test(block)) {
                return Ok({ value: validator.blockKind });
              } else {
                return blockKindStep(block, ys);
              }
              ;
            }
          }
          default: {
            return Err({ error: "Unknown block type" });
          }
        }
      }
      function blockKind(block) {
        return blockKindStep(block, validators);
      }
      exports.blockKind = blockKind;
      function createUnparsedBlock(blockKind2, lineStart, lines) {
        switch (blockKind2) {
          case "Import": {
            return ImportBlock({
              lineStart,
              lines
            });
          }
          case "Export": {
            return ExportBlock({
              lineStart,
              lines
            });
          }
          case "Const": {
            return ConstBlock({
              lineStart,
              lines
            });
          }
          case "Function": {
            return FunctionBlock({
              lineStart,
              lines
            });
          }
          case "UnionType": {
            return UnionTypeBlock({
              lineStart,
              lines
            });
          }
          case "UnionUntaggedType": {
            return UnionUntaggedTypeBlock({
              lineStart,
              lines
            });
          }
          case "TypeAlias": {
            return TypeAliasBlock({
              lineStart,
              lines
            });
          }
          case "Indent": {
            return UnknownBlock({
              lineStart,
              lines
            });
          }
          case "Definition": {
            return UnknownBlock({
              lineStart,
              lines
            });
          }
          case "Comment": {
            return CommentBlock({
              lineStart,
              lines
            });
          }
          case "MultilineComment": {
            return MultilineCommentBlock({
              lineStart,
              lines
            });
          }
          case "Unknown": {
            return UnknownBlock({
              lineStart,
              lines
            });
          }
        }
      }
      exports.createUnparsedBlock = createUnparsedBlock;
      function stepMultilineComment(lineNumber, info, line, lines) {
        if (line === "-}") {
          const infoWithCurrentLine = Object.assign(Object.assign({}, info), { previousLine: line, currentBlock: List.append(info.currentBlock, [line]) });
          const block = createUnparsedBlock("MultilineComment", infoWithCurrentLine.lineStart, infoWithCurrentLine.currentBlock);
          const nextInfo = {
            currentBlock: [],
            previousLine: line,
            lineStart: lineNumber,
            currentBlockKind: Err({ error: "Nothing" })
          };
          return [block, ...intoBlocksStep(lineNumber + 1, nextInfo, lines)];
        } else {
          const infoWithCurrentLine = Object.assign(Object.assign({}, info), { previousLine: line, currentBlock: List.append(info.currentBlock, [line]) });
          return intoBlocksStep(lineNumber + 1, infoWithCurrentLine, lines);
        }
      }
      function indentOrDefinitionStep(lineNumber, info, line, lines) {
        const nextLines = lineNumber > 0 && info.previousLine.trim() === "" ? [info.previousLine, line] : [line];
        const nextInfo = Object.assign(Object.assign({}, info), { currentBlock: List.append(info.currentBlock, nextLines), previousLine: line });
        return intoBlocksStep(lineNumber + 1, nextInfo, lines);
      }
      function intoBlocksStep(lineNumber, info, lines) {
        switch (lines.length) {
          case lines.length: {
            if (lines.length >= 1) {
              const [line, ...xs] = lines;
              if (line.trim().length === 0) {
                const nextInfo = Object.assign(Object.assign({}, info), { previousLine: line });
                return intoBlocksStep(lineNumber + 1, nextInfo, xs);
              } else {
                switch (info.currentBlock.length) {
                  case 0: {
                    const nextInfo = {
                      previousLine: line,
                      currentBlock: [line],
                      lineStart: lineNumber,
                      currentBlockKind: blockKind(line)
                    };
                    return intoBlocksStep(lineNumber + 1, nextInfo, xs);
                  }
                  default: {
                    const isInMultilineComment = info.currentBlockKind.kind === "Ok" && info.currentBlockKind.value === "MultilineComment";
                    if (isInMultilineComment) {
                      return stepMultilineComment(lineNumber, info, line, xs);
                    } else {
                      const currentLineBlockKind = blockKind(line);
                      const isIndent = currentLineBlockKind.kind === "Ok" && currentLineBlockKind.value === "Indent";
                      const isDefinition = currentLineBlockKind.kind === "Ok" && currentLineBlockKind.value === "Definition";
                      if (isIndent || isDefinition) {
                        return indentOrDefinitionStep(lineNumber, info, line, xs);
                      } else {
                        switch (info.currentBlockKind.kind) {
                          case "Ok": {
                            const { value } = info.currentBlockKind;
                            const hasSpeech = function(y) {
                              return y.length > 0;
                            }(info.currentBlock.filter(function(line2) {
                              return line2.indexOf(`"`) > -1;
                            }));
                            const kind = function() {
                              switch (value) {
                                case "UnionType": {
                                  if (hasSpeech) {
                                    return "UnionUntaggedType";
                                  } else {
                                    return value;
                                  }
                                  ;
                                }
                                default: {
                                  return value;
                                }
                              }
                            }();
                            const block = createUnparsedBlock(kind, info.lineStart, info.currentBlock);
                            const nextInfo = {
                              previousLine: line,
                              currentBlock: [line],
                              lineStart: lineNumber,
                              currentBlockKind: currentLineBlockKind
                            };
                            return [block, ...intoBlocksStep(lineNumber + 1, nextInfo, xs)];
                          }
                          case "Err": {
                            const nextInfo = Object.assign(Object.assign({}, info), { previousLine: line, currentBlock: List.append(info.currentBlock, [line]) });
                            return intoBlocksStep(lineNumber + 1, nextInfo, xs);
                          }
                        }
                        ;
                      }
                      ;
                    }
                    ;
                  }
                }
                ;
              }
              ;
            }
          }
          default: {
            if (info.currentBlock.length > 0) {
              switch (info.currentBlockKind.kind) {
                case "Ok": {
                  const { value } = info.currentBlockKind;
                  const hasSpeech = function(y) {
                    return y.length > 0;
                  }(info.currentBlock.filter(function(line) {
                    return line.indexOf(`"`) > -1;
                  }));
                  const kind = function() {
                    switch (value) {
                      case "UnionType": {
                        if (hasSpeech) {
                          return "UnionUntaggedType";
                        } else {
                          return value;
                        }
                        ;
                      }
                      default: {
                        return value;
                      }
                    }
                  }();
                  return [createUnparsedBlock(kind, info.lineStart, info.currentBlock)];
                }
                case "Err": {
                  return [createUnparsedBlock("Unknown", info.lineStart, info.currentBlock)];
                }
              }
              ;
            } else {
              return [];
            }
            ;
          }
        }
      }
      function intoBlocks(body) {
        const lines = body.split("\n");
        return intoBlocksStep(0, {
          previousLine: "",
          currentBlock: [],
          currentBlockKind: Err({ error: "Nothing" }),
          lineStart: 0
        }, lines);
      }
      exports.intoBlocks = intoBlocks;
      function typeBlocks(blocks) {
        return List.filter(function(block) {
          return block.kind === "UnionType" || block.kind === "TypeAlias" || block.kind === "UnionUntaggedType";
        }, blocks);
      }
      exports.typeBlocks = typeBlocks;
      function Export(args) {
        return Object.assign({ kind: "Export" }, args);
      }
      function exportTests(module2) {
        const isTest = (0, Utils_1.isTestFile)(module2.name);
        const namesToExpose = isTest ? List.filter(function(name) {
          return name.startsWith("test");
        }, List.map(function(block) {
          return block.name;
        }, List.filter(function(block) {
          return block.kind === "Function" || block.kind === "Const";
        }, module2.body))) : [];
        const exports2 = List.filter(function(block) {
          return block.kind === "Export";
        }, module2.body);
        const exportNames = List.foldl(function(export_, allNames) {
          return List.append(export_.names, allNames);
        }, [], exports2);
        const exposeWithoutDuplicates = List.filter(function(name) {
          return !exportNames.includes(name);
        }, namesToExpose);
        return Export({ names: exposeWithoutDuplicates });
      }
      exports.exportTests = exportTests;
    }
  });

  // node_modules/derw/build/generators/CommonToEcma.js
  var require_CommonToEcma = __commonJS({
    "node_modules/derw/build/generators/CommonToEcma.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.generateExportBlock = exports.generateImportBlock = exports.flattenLeftPipe = exports.generateListDestructurePart = exports.generateListRange = exports.generateFormatStringValue = exports.generateStringValue = exports.generateValue = void 0;
      var Utils_1 = require_Utils();
      var List = __importStar(require_List());
      function FunctionCall(args) {
        return Object.assign({ kind: "FunctionCall" }, args);
      }
      function LambdaCall(args) {
        return Object.assign({ kind: "LambdaCall" }, args);
      }
      function generateValue(value) {
        return value.body;
      }
      exports.generateValue = generateValue;
      function generateStringValue(string) {
        return `"${string.body}"`;
      }
      exports.generateStringValue = generateStringValue;
      function generateFormatStringValue(string) {
        return "`" + string.body + "`";
      }
      exports.generateFormatStringValue = generateFormatStringValue;
      function generateListRange(list) {
        const gap = `${list.end.body} - ${list.start.body} + 1`;
        return `Array.from({ length: ${gap} }, (_ReservedX, _ReservedI) => _ReservedI + ${list.start.body})`;
      }
      exports.generateListRange = generateListRange;
      function generateListDestructurePart(part) {
        switch (part.kind) {
          case "EmptyList": {
            return "[]";
          }
          case "StringValue": {
            const { body } = part;
            return body;
          }
          case "FormatStringValue": {
            const { body } = part;
            return body;
          }
          case "Value": {
            const { body } = part;
            return body;
          }
          case "Destructure": {
            const { constructor, pattern } = part;
            const generatedPattern = pattern ? ` ${pattern}` : "";
            return `${constructor}${pattern}`;
          }
        }
      }
      exports.generateListDestructurePart = generateListDestructurePart;
      function addArgsToModuleReference(moduleReference, newArgs) {
        switch (moduleReference.value.kind) {
          case "FunctionCall": {
            const { args, name } = moduleReference.value;
            return Object.assign(Object.assign({}, moduleReference), { value: FunctionCall({
              name,
              args: List.append(args, newArgs)
            }) });
          }
          case "Value": {
            const { body } = moduleReference.value;
            return Object.assign(Object.assign({}, moduleReference), { value: FunctionCall({
              name: body,
              args: newArgs
            }) });
          }
          default: {
            return moduleReference;
          }
        }
      }
      function flattenLeftPipe(leftPipe) {
        const left = leftPipe.left;
        const right = leftPipe.right;
        switch (right.kind) {
          case "FunctionCall": {
            const { name, args } = right;
            return FunctionCall({
              name,
              args: List.append(args, [left])
            });
          }
          case "Value": {
            const { body } = right;
            return FunctionCall({
              name: body,
              args: [left]
            });
          }
          case "ModuleReference": {
            return addArgsToModuleReference(right, [left]);
          }
          case "Lambda": {
            return LambdaCall({
              lambda: right,
              args: [left]
            });
          }
          case "LeftPipe": {
            switch (right.left.kind) {
              case "FunctionCall": {
                const { args, name } = right.left;
                const fn = FunctionCall({
                  name,
                  args: List.append(args, [left])
                });
                return flattenLeftPipe({
                  kind: "LeftPipe",
                  left: fn,
                  right: right.right
                });
              }
              case "Value": {
                const { body } = right.left;
                const fn = FunctionCall({
                  name: body,
                  args: [left]
                });
                return flattenLeftPipe({
                  kind: "LeftPipe",
                  left: fn,
                  right: right.right
                });
              }
              case "ModuleReference": {
                const fn = addArgsToModuleReference(right.left, [left]);
                return flattenLeftPipe({
                  kind: "LeftPipe",
                  left: fn,
                  right: right.right
                });
              }
              case "Lambda": {
                const fn = LambdaCall({
                  lambda: right.left,
                  args: [left]
                });
                return flattenLeftPipe({
                  kind: "LeftPipe",
                  left: fn,
                  right: right.right
                });
              }
              case "LeftPipe": {
                return right;
              }
              default: {
                return right.left;
              }
            }
            ;
          }
        }
      }
      exports.flattenLeftPipe = flattenLeftPipe;
      function generateModule(module2) {
        if (module2.namespace === "Relative") {
          const withoutQuotes = module2.name.slice(1, -1);
          const name = function() {
            switch (module2.alias.kind) {
              case "Just": {
                const { value } = module2.alias;
                return value;
              }
              case "Nothing": {
                return (0, Utils_1.getNameFromPath)(withoutQuotes);
              }
            }
          }();
          const filteredExposing = function() {
            switch (module2.alias.kind) {
              case "Just": {
                const { value } = module2.alias;
                return List.filter(function(expose) {
                  return expose !== value;
                }, module2.exposing);
              }
              case "Nothing": {
                return module2.exposing;
              }
            }
          }();
          const exposed = `import { ${filteredExposing.join(", ")} } from ${module2.name};`;
          if (module2.exposing.length === 0) {
            return `import * as ${name} from ${module2.name};`;
          } else {
            switch (module2.alias.kind) {
              case "Just": {
                return `import * as ${name} from ${module2.name};
${exposed}`;
              }
              case "Nothing": {
                return exposed;
              }
            }
            ;
          }
          ;
        } else {
          const name = function() {
            switch (module2.alias.kind) {
              case "Just": {
                const { value } = module2.alias;
                return value;
              }
              case "Nothing": {
                return module2.name;
              }
            }
          }();
          const exposed = `import { ${module2.exposing.join(", ")} } from "${module2.name}";`;
          if (module2.exposing.length === 0) {
            return `import * as ${name} from "${module2.name}";`;
          } else {
            switch (module2.alias.kind) {
              case "Just": {
                return `import * as ${name} from "${module2.name}";
${exposed}`;
              }
              case "Nothing": {
                return exposed;
              }
            }
            ;
          }
          ;
        }
      }
      function generateImportBlock(imports) {
        return function(y) {
          return y.join("\n");
        }(List.map(generateModule, List.filter(function(module2) {
          return module2.name !== "globalThis";
        }, imports.modules)));
      }
      exports.generateImportBlock = generateImportBlock;
      function generateExportBlock(exports2) {
        return function(x) {
          return x.join("\n");
        }(List.map(function(name) {
          return `export { ${name} };`;
        }, exports2.names));
      }
      exports.generateExportBlock = generateExportBlock;
    }
  });

  // node_modules/derw/build/generators/Js.js
  var require_Js = __commonJS({
    "node_modules/derw/build/generators/Js.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.generateJavascript = void 0;
      var Blocks_1 = require_Blocks();
      var Utils_1 = require_Utils();
      var List = __importStar(require_List());
      var types_1 = require_types();
      var Common_1 = require_Common();
      var CommonToEcma_1 = require_CommonToEcma();
      function generateTagCreator(tag) {
        return function(y) {
          return y.join("\n");
        }([`function ${tag.name}(args) {`, "    return {", `        kind: "${tag.name}",`, `        ...args,`, `    };`, "}"]);
      }
      function generateUnionType(syntax) {
        return function(y) {
          return y.join("\n\n");
        }(List.map(function(tag) {
          return generateTagCreator(tag);
        }, syntax.tags));
      }
      function generateTypeAlias(syntax) {
        const typeDef = syntax.type.name;
        return function(y) {
          return y.join("\n");
        }([`function ${typeDef}(args) {`, "    return {", "        ...args,", "    };", "}"]);
      }
      function generateField(field) {
        const value = generateExpression(field.value);
        if (field.name === value) {
          return field.name;
        } else {
          return `${field.name}: ${value}`;
        }
      }
      function generateObjectLiteral(literal) {
        const fields = function(y) {
          return y.join(",\n    ");
        }(literal.fields.map(generateField));
        if (literal.base === null) {
          switch (literal.fields.length) {
            case 0: {
              return "{ }";
            }
            case literal.fields.length: {
              if (literal.fields.length === 1) {
                const [x] = literal.fields;
                return `{ ${fields} }`;
              }
            }
            default: {
              return `{
    ${fields}
}`;
            }
          }
          ;
        } else {
          switch (literal.fields.length) {
            case 0: {
              return `{ ${literal.base.body} }`;
            }
            case literal.fields.length: {
              if (literal.fields.length === 1) {
                const [x] = literal.fields;
                return `{ ${literal.base.body}, ${fields} }`;
              }
            }
            default: {
              return `{
    ${literal.base.body},
    ${fields}
}`;
            }
          }
          ;
        }
      }
      function generateListValue(list) {
        function generator(expression) {
          switch (expression.kind) {
            case "IfStatement": {
              return generateInlineIf(expression);
            }
            case "CaseStatement": {
              return generateInlineCase(expression);
            }
            default: {
              return generateExpression(expression);
            }
          }
        }
        const items = List.map(generator, list.items);
        switch (items.length) {
          case 0: {
            return "[ ]";
          }
          case items.length: {
            if (items.length === 1) {
              const [x] = items;
              return `[ ${x} ]`;
            }
          }
          default: {
            return `[ ${items.join(", ")} ]`;
          }
        }
      }
      function generateLetBlock(body) {
        switch (body.length) {
          case 0: {
            return "";
          }
          case body.length: {
            if (body.length >= 1) {
              const [x, ...ys] = body;
              const prefixedBody = function(y) {
                return y.join("\n");
              }(List.map(function(block) {
                return generateBlock(block);
              }, body));
              const prefixedLines = (0, Common_1.prefixLines)(prefixedBody, 4);
              return `
${prefixedLines}`;
            }
          }
          default: {
            return "";
          }
        }
      }
      function generateIfStatement(ifStatement, isAsync, neverSimple) {
        const isSimpleIfBody = neverSimple ? false : (0, types_1.isSimpleValue)(ifStatement.ifBody.kind);
        const isSimpleElseBody = neverSimple ? false : (0, types_1.isSimpleValue)(ifStatement.elseBody.kind);
        const ifBodyPrefix = isSimpleIfBody ? "return " : "";
        const elseBodyPrefix = isSimpleElseBody ? "return " : "";
        const asyncPrefix = isAsync ? "await " : "";
        const maybeIfLetBody = generateLetBlock(ifStatement.ifLetBody);
        const maybeElseLetBody = generateLetBlock(ifStatement.elseLetBody);
        const predicate = generateExpression(ifStatement.predicate);
        const ifBody = generateExpression(ifStatement.ifBody);
        const indentedIfBody = function() {
          const _res1668698078 = ifBody.split("\n");
          switch (_res1668698078.length) {
            case 0: {
              return ifBody;
            }
            case _res1668698078.length: {
              if (_res1668698078.length === 1) {
                const [x] = _res1668698078;
                return ifBody;
              }
            }
            case _res1668698078.length: {
              if (_res1668698078.length >= 1) {
                const [x, ...xs] = _res1668698078;
                return function(y) {
                  return y.join("\n");
                }([x, (0, Common_1.prefixLines)(xs.join("\n"), 4)]);
              }
            }
            default: {
              return ifBody;
            }
          }
        }();
        const elseBody = generateExpression(ifStatement.elseBody);
        const indentedElseBody = function() {
          const _res415623174 = elseBody.split("\n");
          switch (_res415623174.length) {
            case 0: {
              return elseBody;
            }
            case _res415623174.length: {
              if (_res415623174.length === 1) {
                const [x] = _res415623174;
                return elseBody;
              }
            }
            case _res415623174.length: {
              if (_res415623174.length >= 1) {
                const [x, ...xs] = _res415623174;
                return function(y) {
                  return y.join("\n");
                }([x, (0, Common_1.prefixLines)(xs.join("\n"), 4)]);
              }
            }
            default: {
              return elseBody;
            }
          }
        }();
        return `if (${predicate}) {${maybeIfLetBody}
    ${ifBodyPrefix}${asyncPrefix}${indentedIfBody};
} else {${maybeElseLetBody}
    ${elseBodyPrefix}${asyncPrefix}${indentedElseBody};
}`;
      }
      function generateConstructor(constructor) {
        switch (constructor.pattern.fields.length) {
          case 0: {
            return `${constructor.constructor}({ })`;
          }
          default: {
            return `${constructor.constructor}(${generateObjectLiteral(constructor.pattern)})`;
          }
        }
      }
      var replaceKey = "$REPLACE_ME";
      function generateListDestructurePartWithGaps(predicate, parts, part, info) {
        if (info.partIndex < info.currentIndex) {
          return Object.assign(Object.assign({}, info), { partIndex: info.partIndex + 1 });
        } else {
          const index = info.currentIndex;
          const output = info.output;
          const isLastValue = index === parts.length - 1;
          switch (part.kind) {
            case "Destructure": {
              const isNextAValue = isLastValue ? false : parts[index + 1].kind === "Value";
              const hasADestructureAfter = index < parts.length - 2 ? parts[index + 2].kind === "Destructure" : false;
              if (isNextAValue && hasADestructureAfter) {
                const nextValue = function(y) {
                  return y;
                }(parts[index + 1]);
                const destructorAfter = function(y) {
                  return y;
                }(parts[index + 2]);
                return function(y) {
                  return Object.assign(Object.assign({}, info), { output: y, partIndex: info.partIndex + 1, currentIndex: info.currentIndex + 2 });
                }(function(y) {
                  return (0, Common_1.prefixLines)(y, 8);
                }(function(y) {
                  return y.join("\n");
                }([`const [ _0, ..._rest ] = ${predicate};`, `if (_0.kind === "${part.constructor}") {`, `    let _foundIndex = -1;`, `    for (let _i = 0; _i < _rest.length; _i++) {`, `        if (_rest[_i].kind === "${destructorAfter.constructor}") {`, `            _foundIndex = _i;`, `            break;`, `        }`, `    }`, ``, `    if (_foundIndex > -1) {`, `        const ${nextValue.body} = _rest.slice(0, _foundIndex);`, `        ${replaceKey}`, `    }`, `}`])));
              } else {
                return Object.assign(Object.assign({}, info), { partIndex: info.partIndex + 1 });
              }
              ;
            }
            case "Value": {
              const newOutput = output.length === 0 ? `
const ${part.body} = _rest;
                    ` : parts[info.partIndex - 1].kind === "Destructure" ? output.replace(replaceKey, `const ${part.body} = _rest.slice(_foundIndex, _rest.length);
${replaceKey}`) : output.replace(replaceKey, `const ${part.body} = _rest;
${replaceKey}`);
              return Object.assign(Object.assign({}, info), { output: newOutput, partIndex: info.partIndex + 1, currentIndex: info.currentIndex + 1 });
            }
            default: {
              return Object.assign(Object.assign({}, info), { currentIndex: info.currentIndex + 1, partIndex: info.partIndex + 1 });
            }
          }
          ;
        }
      }
      function generateListDestructureWithGaps(predicate, branch, pattern) {
        const isFinalEmptyList = pattern.parts[pattern.parts.length - 1].kind === "EmptyList";
        const partsWithLength = (0, Common_1.destructureLength)(pattern);
        const startingInfo = {
          output: "",
          partIndex: 0,
          currentIndex: 0
        };
        const parts = function(y) {
          return y.output;
        }(List.foldl(function(x, info) {
          return generateListDestructurePartWithGaps(predicate, pattern.parts, x, info);
        }, startingInfo, pattern.parts));
        const conditional = isFinalEmptyList ? `${predicate}.length === ${partsWithLength}` : `${predicate}.length >= ${partsWithLength}`;
        const isSimpleBody = (0, types_1.isSimpleValue)(branch.body.kind);
        const wrapper = isSimpleBody ? `    return ` : "";
        const bodyIndent = isSimpleBody ? 0 : 4;
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(branch.body));
        const inner = (0, Common_1.prefixLines)(`${wrapper}${body};`, 12);
        return `case ${predicate}.length: {
    if (${conditional}) {
${parts.replace(replaceKey, inner)}
    }
}`;
      }
      function generateBranch(predicate, branch) {
        const isSimpleBody = (0, types_1.isSimpleValue)(branch.body.kind);
        const wrapper = isSimpleBody ? "    return " : "";
        const maybeLetBody = generateLetBlock(branch.letBody);
        const bodyIndent = isSimpleBody ? 0 : 4;
        const branchBody = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(branch.body));
        switch (branch.pattern.kind) {
          case "Destructure": {
            const { pattern } = branch.pattern;
            const generatedPattern = pattern.trim().length > 0 ? `
    const ${pattern} = ${predicate};` : "";
            return `case "${branch.pattern.constructor}": {${generatedPattern}${maybeLetBody}
${wrapper}${branchBody};
}`;
          }
          case "StringValue": {
            const { body } = branch.pattern;
            return `case "${body}": {${maybeLetBody}
${wrapper}${branchBody};
}`;
          }
          case "FormatStringValue": {
            const { body } = branch.pattern;
            return `case \`` + body + `\`: {${maybeLetBody}
${wrapper}${branchBody};
}`;
          }
          case "EmptyList": {
            return `case 0: {${maybeLetBody}
${wrapper}${branchBody};
}`;
          }
          case "ListDestructure": {
            let not = function(value) {
              if (value) {
                return false;
              } else {
                return true;
              }
            };
            const { parts } = branch.pattern;
            const length = parts.length;
            const isFinalEmptyList = parts[length - 1].kind === "EmptyList";
            const partsWithLength = (0, Common_1.destructureLength)(branch.pattern);
            const hasGaps = (0, Common_1.patternHasGaps)(branch.pattern);
            const gapPositions = (0, Common_1.patternGapPositions)(branch.pattern);
            const isOnlyFinalGap = gapPositions.length === 1 && gapPositions[0] === length - 1;
            const conditional = isFinalEmptyList && not(hasGaps) ? `${predicate}.length === ${partsWithLength}` : `${predicate}.length >= ${partsWithLength}`;
            const firstPart = parts[0];
            const isFirstDestructure = firstPart.kind === "Destructure";
            if (hasGaps && not(isOnlyFinalGap)) {
              return generateListDestructureWithGaps(predicate, branch, branch.pattern);
            } else {
              if (isFirstDestructure) {
                let unpackFn = function(destructor, index) {
                  if (destructor.pattern.length === 0) {
                    return "";
                  } else {
                    return `
            const ${destructor.pattern} = _${index};`;
                  }
                };
                const destructors = List.filter(function(t) {
                  return t.kind === "Destructure";
                }, parts);
                const destructorParts = List.indexedMap(function(_, i) {
                  return `_${i}`;
                }, destructors);
                const allButFinalPart = List.map(CommonToEcma_1.generateListDestructurePart, parts.slice(destructorParts.length, -1));
                const generatedParts = List.append(destructorParts, allButFinalPart);
                const joinedGeneratedParts = generatedParts.join(", ");
                const partsString = isFinalEmptyList ? joinedGeneratedParts : `${joinedGeneratedParts}, ...${(0, CommonToEcma_1.generateListDestructurePart)(parts[length - 1])}`;
                const conditionals = List.indexedMap(function(destructor, index) {
                  return `_${index}.kind === "${destructor.constructor}"`;
                }, destructors);
                const joinedConditionals = conditionals.join(" && ");
                const unpacked = List.indexedMap(unpackFn, destructors);
                const joinedUnpacked = unpacked.length === 0 ? "" : unpacked.join("");
                return function(y) {
                  return y.join("\n");
                }([`case ${predicate}.length: {`, `    if (${conditional}) {`, `        const [ ${partsString} ] = ${predicate};`, `        if (${joinedConditionals}) {${joinedUnpacked}${maybeLetBody ? (0, Common_1.prefixLines)(maybeLetBody, 8) : ""}`, `        ${wrapper}${branchBody};`, `        }`, `    }`, `}`]);
              } else {
                const isFirstValue = firstPart.kind === "StringValue" || firstPart.kind === "FormatStringValue";
                const partsToGenerate = isFirstValue ? [{
                  kind: "Value",
                  body: "_temp"
                }, ...branch.pattern.parts.slice(1, -1)] : branch.pattern.parts.slice(0, -1);
                const generatedParts = List.map(CommonToEcma_1.generateListDestructurePart, partsToGenerate);
                const joinedParts = generatedParts.join(", ");
                const partsString = isFinalEmptyList ? joinedParts : `${joinedParts}, ...${(0, CommonToEcma_1.generateListDestructurePart)(branch.pattern.parts[length - 1])}`;
                if (isFirstValue) {
                  const tempConditional = function() {
                    switch (firstPart.kind) {
                      case "StringValue": {
                        const { body } = firstPart;
                        return `"${body}"`;
                      }
                      case "FormatStringValue": {
                        const { body } = firstPart;
                        return "`" + body + "`";
                      }
                      default: {
                        return "";
                      }
                    }
                  }();
                  return function(y) {
                    return y.join("\n");
                  }([`case ${predicate}.length: {`, `    if (${conditional}) {`, `        const [ ${partsString} ] = ${predicate};${maybeLetBody ? (0, Common_1.prefixLines)(maybeLetBody, 4) : ""}`, `        if (_temp === ${tempConditional}) {`, `        ${wrapper}${branchBody};`, `        }`, `    }`, `}`]);
                } else {
                  return function(y) {
                    return y.join("\n");
                  }([`case ${predicate}.length: {`, `    if (${conditional}) {`, `        const [ ${partsString} ] = ${predicate};${maybeLetBody ? (0, Common_1.prefixLines)(maybeLetBody, 4) : ""}`, `    ${wrapper}${branchBody};`, `    }`, `}`]);
                }
                ;
              }
              ;
            }
            ;
          }
          case "Default": {
            return `default: {${maybeLetBody}
${wrapper}${branchBody};
}`;
          }
        }
      }
      function isModuleReferenceToAValue(moduleReference) {
        return moduleReference.value.kind === "Value";
      }
      function generateCaseStatement(caseStatement) {
        const predicate = generateExpression(caseStatement.predicate);
        const isValue = function() {
          switch (caseStatement.predicate.kind) {
            case "Value": {
              return true;
            }
            case "ModuleReference": {
              return isModuleReferenceToAValue(caseStatement.predicate);
            }
            default: {
              return false;
            }
          }
        }();
        const name = isValue ? predicate : `_res${(0, Utils_1.hashCode)(predicate)}`;
        const maybePredicateAssignment = isValue ? "" : `const ${name} = ${predicate};
`;
        const branches = function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(function(y) {
          return y.join("\n");
        }(List.map(function(branch) {
          return generateBranch(name, branch);
        }, caseStatement.branches)));
        const isString = function(y) {
          return y.length > 0;
        }(List.filter(function(branch) {
          return branch.pattern.kind === "StringValue";
        }, caseStatement.branches));
        const isList = function(y) {
          return y.length > 0;
        }(List.filter(function(branch) {
          return branch.pattern.kind === "EmptyList" || branch.pattern.kind === "ListDestructure";
        }, caseStatement.branches));
        if (isString) {
          return `${maybePredicateAssignment}switch (${name}) {
${branches}
}`;
        } else {
          if (isList) {
            return `${maybePredicateAssignment}switch (${name}.length) {
${branches}
}`;
          } else {
            return `${maybePredicateAssignment}switch (${name}.kind) {
${branches}
}`;
          }
          ;
        }
      }
      function generateAddition(addition) {
        const left = generateExpression(addition.left);
        const right = generateExpression(addition.right);
        return `${left} + ${right}`;
      }
      function generateSubtraction(subtraction) {
        const left = generateExpression(subtraction.left);
        const right = generateExpression(subtraction.right);
        return `${left} - ${right}`;
      }
      function generateMultiplication(multiplication) {
        const left = generateExpression(multiplication.left);
        const right = generateExpression(multiplication.right);
        return `${left} * ${right}`;
      }
      function generateDivision(division) {
        const left = generateExpression(division.left);
        const right = generateExpression(division.right);
        return `${left} / ${right}`;
      }
      function generateMod(mod) {
        const left = generateExpression(mod.left);
        const right = generateExpression(mod.right);
        return `${left} % ${right}`;
      }
      function generateLeftPipe(leftPipe) {
        return generateExpression((0, CommonToEcma_1.flattenLeftPipe)(leftPipe));
      }
      function generateRightPipe(rightPipe) {
        const left = generateExpression(rightPipe.left);
        const right = generateExpression(rightPipe.right);
        return `${left}(${right})`;
      }
      function generateModuleReference(moduleReference) {
        switch (moduleReference.path.length) {
          case 0: {
            return `(arg0) => arg0.${generateExpression(moduleReference.value)}`;
          }
          default: {
            const left = moduleReference.path.join(".");
            const right = generateExpression(moduleReference.value);
            return `${left}.${right}`;
          }
        }
      }
      function generateFunctionCall(functionCall) {
        const args = function(y) {
          return y.join(", ");
        }(List.map(generateExpression, functionCall.args));
        return `${functionCall.name}(${args})`;
      }
      function generateLambda(lambda) {
        const isSimple = (0, types_1.isSimpleValue)(lambda.body.kind);
        const args = lambda.args.join(", ");
        const body = isSimple ? generateExpression(lambda.body) : function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(generateExpression(lambda.body));
        if (isSimple) {
          return `function(${args}) {
    return ${body};
}`;
        } else {
          return `function(${args}) {
${body}
}`;
        }
      }
      function generateLambdaCall(lambdaCall) {
        const args = lambdaCall.lambda.args.join(", ");
        const argsValues = function(y) {
          return y.join(", ");
        }(List.map(generateExpression, lambdaCall.args));
        const body = generateExpression(lambdaCall.lambda.body);
        return `(function(${args}) {
    return ${body};
})(${argsValues})`;
      }
      function generateEquality(equality) {
        const left = generateExpression(equality.left);
        const right = generateExpression(equality.right);
        return `${left} === ${right}`;
      }
      function generateInEquality(inEquality) {
        const left = generateExpression(inEquality.left);
        const right = generateExpression(inEquality.right);
        return `${left} !== ${right}`;
      }
      function generateLessThan(lessThan) {
        const left = generateExpression(lessThan.left);
        const right = generateExpression(lessThan.right);
        return `${left} < ${right}`;
      }
      function generateLessThanOrEqual(lessThanOrEqual) {
        const left = generateExpression(lessThanOrEqual.left);
        const right = generateExpression(lessThanOrEqual.right);
        return `${left} <= ${right}`;
      }
      function generateGreaterThan(greaterThan) {
        const left = generateExpression(greaterThan.left);
        const right = generateExpression(greaterThan.right);
        return `${left} > ${right}`;
      }
      function generateGreaterThanOrEqual(greaterThanOrEqual) {
        const left = generateExpression(greaterThanOrEqual.left);
        const right = generateExpression(greaterThanOrEqual.right);
        return `${left} >= ${right}`;
      }
      function generateAnd(and) {
        const left = generateExpression(and.left);
        const right = generateExpression(and.right);
        return `${left} && ${right}`;
      }
      function generateOr(or) {
        const left = generateExpression(or.left);
        const right = generateExpression(or.right);
        return `${left} || ${right}`;
      }
      function generateListPrepend(prepend) {
        const left = generateExpression(prepend.left);
        const right = generateExpression(prepend.right);
        return `[ ${left}, ...${right} ]`;
      }
      function generateExpression(expression) {
        switch (expression.kind) {
          case "Value": {
            return (0, CommonToEcma_1.generateValue)(expression);
          }
          case "StringValue": {
            return (0, CommonToEcma_1.generateStringValue)(expression);
          }
          case "FormatStringValue": {
            return (0, CommonToEcma_1.generateFormatStringValue)(expression);
          }
          case "ListValue": {
            return generateListValue(expression);
          }
          case "ListRange": {
            return (0, CommonToEcma_1.generateListRange)(expression);
          }
          case "ObjectLiteral": {
            return generateObjectLiteral(expression);
          }
          case "IfStatement": {
            return generateIfStatement(expression, false, false);
          }
          case "CaseStatement": {
            return generateCaseStatement(expression);
          }
          case "Addition": {
            return generateAddition(expression);
          }
          case "Subtraction": {
            return generateSubtraction(expression);
          }
          case "Multiplication": {
            return generateMultiplication(expression);
          }
          case "Division": {
            return generateDivision(expression);
          }
          case "Mod": {
            return generateMod(expression);
          }
          case "And": {
            return generateAnd(expression);
          }
          case "Or": {
            return generateOr(expression);
          }
          case "ListPrepend": {
            return generateListPrepend(expression);
          }
          case "LeftPipe": {
            return generateLeftPipe(expression);
          }
          case "RightPipe": {
            return generateRightPipe(expression);
          }
          case "ModuleReference": {
            return generateModuleReference(expression);
          }
          case "FunctionCall": {
            return generateFunctionCall(expression);
          }
          case "Lambda": {
            return generateLambda(expression);
          }
          case "LambdaCall": {
            return generateLambdaCall(expression);
          }
          case "Constructor": {
            return generateConstructor(expression);
          }
          case "Equality": {
            return generateEquality(expression);
          }
          case "InEquality": {
            return generateInEquality(expression);
          }
          case "LessThan": {
            return generateLessThan(expression);
          }
          case "LessThanOrEqual": {
            return generateLessThanOrEqual(expression);
          }
          case "GreaterThan": {
            return generateGreaterThan(expression);
          }
          case "GreaterThanOrEqual": {
            return generateGreaterThanOrEqual(expression);
          }
        }
      }
      function generateDoExpression(expression) {
        switch (expression.kind) {
          case "Const": {
            return generateConst(expression, true);
          }
          case "Function": {
            return generateFunction(expression);
          }
          case "FunctionCall": {
            return function(y) {
              return "await " + y + ";";
            }(generateFunctionCall(expression));
          }
          case "ModuleReference": {
            return function(y) {
              return "await " + y + ";";
            }(generateModuleReference(expression));
          }
          case "IfStatement": {
            return generateIfStatement(expression, true, true);
          }
        }
      }
      function generateDoBlock(doBody) {
        return function(y) {
          return y.join("\n");
        }(List.map(function(expression) {
          return generateDoExpression(expression);
        }, doBody.expressions));
      }
      function generateFunctionArg(arg) {
        switch (arg.kind) {
          case "FunctionArg": {
            const { name } = arg;
            return name;
          }
          case "AnonFunctionArg": {
            const { index } = arg;
            return `_${index}`;
          }
        }
      }
      function generateFunction(function_) {
        const args = function(y) {
          return y.join(", ");
        }(List.map(function(arg) {
          return generateFunctionArg(arg);
        }, function_.args));
        const maybeLetBody = generateLetBlock(function_.letBody);
        const isAsync = function_.doBody !== null;
        const maybeAsyncPrefix = isAsync ? "async " : "";
        const maybeDoBody = function_.doBody === null ? "" : function(y) {
          return `
${(0, Common_1.prefixLines)(y, 4)}`;
        }(generateDoBlock(function_.doBody));
        const isSimpleBody = (0, types_1.isSimpleValue)(function_.body.kind);
        const bodyPrefix = isSimpleBody ? "return " : "";
        const bodySuffix = isSimpleBody ? ";" : "";
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(function(y) {
          return bodyPrefix + y + bodySuffix;
        }(generateExpression(function_.body)));
        return function(y) {
          return y.join("\n");
        }([`${maybeAsyncPrefix}function ${function_.name}(${args}) {${maybeLetBody}${maybeDoBody}`, `${body}`, `}`]);
      }
      function generateInlineIf(expression) {
        const ifBody = function() {
          switch (expression.ifBody.kind) {
            case "IfStatement": {
              return `( ${generateInlineIf(expression.ifBody)} )`;
            }
            default: {
              return generateExpression(expression.ifBody);
            }
          }
        }();
        const elseBody = function() {
          switch (expression.elseBody.kind) {
            case "IfStatement": {
              return `( ${generateInlineIf(expression.elseBody)} )`;
            }
            default: {
              return generateExpression(expression.elseBody);
            }
          }
        }();
        return `${generateExpression(expression.predicate)} ? ${ifBody} : ${elseBody}`;
      }
      function generateInlineCase(expression) {
        return `(function () {
${(0, Common_1.prefixLines)(generateExpression(expression), 4)}
})()`;
      }
      function generateNestedConst(constDef, body) {
        const generatedBlocks = List.map(function(block) {
          return generateBlock(block);
        }, constDef.letBody);
        const joinedBlocks = function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(generatedBlocks.join("\n"));
        return `(function() {
${joinedBlocks}
    return ${body};
})()`;
      }
      function generateConst(constDef, isAsync) {
        const body = function() {
          switch (constDef.value.kind) {
            case "IfStatement": {
              if (constDef.letBody.length === 0) {
                return generateInlineIf(constDef.value);
              } else {
                return generateNestedConst(constDef, generateInlineIf(constDef.value));
              }
              ;
            }
            case "CaseStatement": {
              if (constDef.letBody.length === 0) {
                return generateInlineCase(constDef.value);
              } else {
                return generateNestedConst(constDef, generateInlineCase(constDef.value));
              }
              ;
            }
            default: {
              if (constDef.letBody.length === 0) {
                return generateExpression(constDef.value);
              } else {
                return generateNestedConst(constDef, generateExpression(constDef.value));
              }
              ;
            }
          }
        }();
        const maybeAsyncPrefix = isAsync ? "await " : "";
        return `const ${constDef.name} = ${maybeAsyncPrefix}${body};`;
      }
      function generateBlock(syntax, unionTypeNames) {
        switch (syntax.kind) {
          case "Import": {
            return (0, CommonToEcma_1.generateImportBlock)(syntax);
          }
          case "Export": {
            const actualUnionTypeNames = unionTypeNames || [];
            const exportingBlock = Object.assign(Object.assign({}, syntax), { names: syntax.names.filter(function(name) {
              return !actualUnionTypeNames.includes(name);
            }) });
            return (0, CommonToEcma_1.generateExportBlock)(exportingBlock);
          }
          case "UnionType": {
            return generateUnionType(syntax);
          }
          case "UnionUntaggedType": {
            return "";
          }
          case "TypeAlias": {
            return generateTypeAlias(syntax);
          }
          case "Function": {
            return generateFunction(syntax);
          }
          case "Const": {
            return generateConst(syntax, false);
          }
          case "Comment": {
            return "";
          }
          case "MultilineComment": {
            return "";
          }
        }
      }
      function generateJavascript2(module2) {
        const unionTypeNames = List.map(function(block) {
          return block.type.name;
        }, List.filter(function(block) {
          return block.kind === "UnionType";
        }, module2.body));
        const testExports = (0, Blocks_1.exportTests)(module2);
        const withTestExports = [testExports, ...module2.body];
        return function(y) {
          return y.join("\n\n");
        }(List.filter(function(line) {
          return line.length > 0;
        }, List.map(function(block) {
          return generateBlock(block, unionTypeNames);
        }, withTestExports)));
      }
      exports.generateJavascript = generateJavascript2;
    }
  });

  // node_modules/derw/build/builtins.js
  var require_builtins = __commonJS({
    "node_modules/derw/build/builtins.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isReservedName = exports.isBuiltinType = void 0;
      function isBuiltinType(potentialType) {
        return ["boolean", "number", "string", "void", "any", "Promise"].indexOf(potentialType) > -1;
      }
      exports.isBuiltinType = isBuiltinType;
      function isReservedName(potentialName) {
        return ["Object", "Function"].indexOf(potentialName.trim()) > -1;
      }
      exports.isReservedName = isReservedName;
    }
  });

  // node_modules/derw/build/generators/Ts.js
  var require_Ts = __commonJS({
    "node_modules/derw/build/generators/Ts.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.generateTypescript = void 0;
      var Blocks_1 = require_Blocks();
      var Utils_1 = require_Utils();
      var builtins_1 = require_builtins();
      var List = __importStar(require_List());
      var types_1 = require_types();
      var Common_1 = require_Common();
      var CommonToEcma_1 = require_CommonToEcma();
      function generateTypeArg(arg, imports) {
        return `${arg.name}: ${generateType(arg.type, imports)};`;
      }
      function generateTagCreator(tag, imports) {
        const typeDefArgs = function(y) {
          return y.join("\n    ");
        }(List.map(function(arg) {
          return generateTypeArg(arg, imports);
        }, tag.args));
        const funcDefArgs = function(y) {
          return y.join(", ");
        }(List.map(function(arg) {
          return `${arg.name}: ${generateType(arg.type, imports)}`;
        }, tag.args));
        function filterTypes(arg) {
          const isBuiltin = function() {
            switch (arg.kind) {
              case "FixedType": {
                const { name } = arg;
                return (0, builtins_1.isBuiltinType)(name);
              }
              case "GenericType": {
                const { name } = arg;
                return (0, builtins_1.isBuiltinType)(name);
              }
              case "FunctionType": {
                return false;
              }
            }
          }();
          if (isBuiltin) {
            return false;
          } else {
            return true;
          }
        }
        const newArgs = List.filter(filterTypes, List.map(function(arg) {
          return arg.type;
        }, tag.args));
        const tagType = function(y) {
          return generateType(y, imports);
        }({
          kind: "FixedType",
          name: tag.name,
          args: newArgs
        });
        const funcDefArgsStr = tag.args.length === 0 ? "{}" : `{ ${funcDefArgs} }`;
        const typeDefStr = typeDefArgs === "" ? "" : "\n    " + typeDefArgs;
        return function(y) {
          return y.join("\n");
        }([`type ${tagType} = {`, `    kind: "${tag.name}";${typeDefStr}`, "};", "", `function ${tagType}(args: ${funcDefArgsStr}): ${tagType} {`, "    return {", `        kind: "${tag.name}",`, `        ...args,`, `    };`, "}"]);
      }
      function generateTag(tag, imports) {
        function filterTypes(arg) {
          const isBuiltin = function() {
            switch (arg.kind) {
              case "FixedType": {
                const { name } = arg;
                return (0, builtins_1.isBuiltinType)(name);
              }
              case "GenericType": {
                const { name } = arg;
                return (0, builtins_1.isBuiltinType)(name);
              }
              case "FunctionType": {
                return false;
              }
            }
          }();
          if (isBuiltin) {
            return false;
          } else {
            return true;
          }
        }
        const newArgs = List.filter(filterTypes, List.map(function(arg) {
          return arg.type;
        }, tag.args));
        const tagType = function(y) {
          return generateType(y, imports);
        }({
          kind: "FixedType",
          name: tag.name,
          args: newArgs
        });
        return tagType;
      }
      function generateUnionType(syntax, imports) {
        const tagCreators = function(y) {
          return y.join("\n\n");
        }(List.map(function(tag) {
          return generateTagCreator(tag, imports);
        }, syntax.tags));
        const tags = function(y) {
          return y.join(" | ");
        }(List.map(function(tag) {
          return generateTag(tag, imports);
        }, syntax.tags));
        return function(y) {
          return y.join("\n");
        }([tagCreators, "", `type ${generateType(syntax.type, imports)} = ${tags};`]);
      }
      function generateUnionUntaggedType(syntax) {
        const values = function(y) {
          return y.join(" | ");
        }(List.map(function(y) {
          return `"${y.body}"`;
        }, syntax.values));
        return `type ${generateType(syntax.type, [])} = ${values};`;
      }
      function generateProperty(syntax, imports) {
        return `${syntax.name}: ${generateTopLevelType(syntax.type, imports)}`;
      }
      function generateTypeAlias(syntax, imports) {
        const generatedProperties = List.map(function(prop) {
          return generateProperty(prop, imports);
        }, syntax.properties);
        const properties = generatedProperties.length === 0 ? "" : `    ${generatedProperties.join(";\n    ")};`;
        const typeDef = generateType(syntax.type, imports);
        const args = generatedProperties.length === 0 ? " " : ` ${generatedProperties.join(", ")} `;
        return function(y) {
          return y.join("\n");
        }([`type ${typeDef} = {`, properties, "}", "", `function ${typeDef}(args: {${args}}): ${typeDef} {`, "    return {", "        ...args,", "    };", "}"]);
      }
      function generateListType(args, imports) {
        if (args.length > 0 && args[0].kind === "GenericType") {
          return `${generateType(args[0], imports)}[]`;
        } else {
          const fixedArgs = List.filter(function(type_) {
            return type_.kind === "FixedType";
          }, args);
          const generatedArgs = List.map(function(arg) {
            return generateType(arg, imports);
          }, fixedArgs);
          switch (fixedArgs.length) {
            case 0: {
              return "any[]";
            }
            case fixedArgs.length: {
              if (fixedArgs.length === 1) {
                const [x] = fixedArgs;
                return `${generateType(x, imports)}[]`;
              }
            }
            default: {
              return `(${generatedArgs.join(" | ")})[]`;
            }
          }
          ;
        }
      }
      function generateListTopLevelType(args, imports) {
        if (args.length > 0 && args[0].kind === "GenericType") {
          return `${generateTopLevelType(args[0], imports)}[]`;
        } else {
          const fixedArgs = List.filter(function(type_) {
            return type_.kind === "FixedType";
          }, args);
          const generatedArgs = List.map(function(arg) {
            return generateTopLevelType(arg, imports);
          }, fixedArgs);
          switch (fixedArgs.length) {
            case 0: {
              return "any[]";
            }
            case fixedArgs.length: {
              if (fixedArgs.length === 1) {
                const [x] = fixedArgs;
                return `${generateTopLevelType(x, imports)}[]`;
              }
            }
            default: {
              return `(${generatedArgs.join(" | ")})[]`;
            }
          }
          ;
        }
      }
      function getGenericTypesFromFunctionType(type_) {
        return List.filter(function(arg) {
          return arg.kind === "GenericType";
        }, type_.args);
      }
      function modulesHasOverlap(type_, modules) {
        switch (modules.length) {
          case 0: {
            return false;
          }
          case modules.length: {
            if (modules.length >= 1) {
              const [module_, ...xs] = modules;
              switch (module_.alias.kind) {
                case "Just": {
                  const { value } = module_.alias;
                  if (value === type_.name) {
                    return true;
                  } else {
                    return modulesHasOverlap(type_, xs);
                  }
                  ;
                }
                case "Nothing": {
                  return modulesHasOverlap(type_, xs);
                }
              }
              ;
            }
          }
          default: {
            return false;
          }
        }
      }
      function typeHasOverlapWithImportedModule(type_, imports) {
        switch (imports.length) {
          case 0: {
            return false;
          }
          case imports.length: {
            if (imports.length >= 1) {
              const [import_, ...xs] = imports;
              if (modulesHasOverlap(type_, import_.modules)) {
                return true;
              } else {
                return typeHasOverlapWithImportedModule(type_, xs);
              }
              ;
            }
          }
          default: {
            return false;
          }
        }
      }
      function generateTopLevelType(type_, imports) {
        switch (type_.kind) {
          case "GenericType": {
            return generateType(type_, imports);
          }
          case "FixedType": {
            const { name, args } = type_;
            if (name === "List") {
              return generateListTopLevelType(args, imports);
            } else {
              if (args.length > 0 && args[0].kind === "FixedType" && args[0].args.length > 0) {
                const generatedArgs = List.map(function(arg) {
                  return generateTopLevelType(arg, imports);
                }, args);
                return `${name}<${generatedArgs.join(", ")}>`;
              } else {
                let getGenericArgs = function(type_2) {
                  switch (type_2.kind) {
                    case "GenericType": {
                      return [type_2];
                    }
                    case "FunctionType": {
                      return getGenericTypesFromFunctionType(type_2);
                    }
                    case "FixedType": {
                      return [type_2];
                    }
                    case "ObjectLiteralType": {
                      return [];
                    }
                  }
                };
                const genericArgs = List.foldl(function(arg, xs) {
                  return List.append(xs, getGenericArgs(arg));
                }, [], args);
                const generatedGenericArgs = List.map(function(arg) {
                  return generateType(arg, imports);
                }, genericArgs);
                const qualifiedName = typeHasOverlapWithImportedModule(type_, imports) ? `${type_.name}.${type_.name}` : type_.name;
                if (genericArgs.length === 0) {
                  return qualifiedName;
                } else {
                  return `${qualifiedName}<${generatedGenericArgs.join(", ")}>`;
                }
                ;
              }
              ;
            }
            ;
          }
          case "FunctionType": {
            const { args } = type_;
            const typeToReturn = generateType(args[args.length - 1], imports);
            const parts = List.indexedMap(function(arg, index) {
              return `arg${index}: ${generateTopLevelType(arg, imports)}`;
            }, args.slice(0, -1));
            return `(${parts.join(", ")}) => ${typeToReturn}`;
          }
          case "ObjectLiteralType": {
            return ``;
          }
        }
      }
      function getGenericTypes(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return [type_];
          }
          case "FunctionType": {
            return getGenericTypesFromFunctionType(type_);
          }
          case "FixedType": {
            const { args } = type_;
            return List.foldl(function(newType, collection) {
              return List.append(collection, getGenericTypes(newType));
            }, [], args);
          }
          case "ObjectLiteralType": {
            return [];
          }
        }
      }
      function removeDuplicateTypes(xs) {
        switch (xs.length) {
          case 0: {
            return [];
          }
          case xs.length: {
            if (xs.length >= 1) {
              const [x, ...rest] = xs;
              const restNames = List.map(function(y) {
                return y.name;
              }, rest);
              if (restNames.includes(x.name)) {
                return removeDuplicateTypes(rest);
              } else {
                return [x, ...removeDuplicateTypes(rest)];
              }
              ;
            }
          }
          default: {
            return [];
          }
        }
      }
      function generateType(type_, imports) {
        switch (type_.kind) {
          case "GenericType": {
            const { name } = type_;
            return name;
          }
          case "FixedType": {
            const { name, args } = type_;
            if (name === "List") {
              return generateListType(args, imports);
            } else {
              const genericArgs = removeDuplicateTypes(List.foldl(function(arg, xs) {
                return List.append(xs, getGenericTypes(arg));
              }, [], args));
              const generatedGenericArgs = List.map(function(arg) {
                return generateType(arg, imports);
              }, genericArgs);
              const qualifiedName = typeHasOverlapWithImportedModule(type_, imports) ? `${type_.name}.${type_.name}` : type_.name;
              if (genericArgs.length === 0) {
                return qualifiedName;
              } else {
                return `${qualifiedName}<${generatedGenericArgs.join(", ")}>`;
              }
              ;
            }
            ;
          }
          case "FunctionType": {
            const { args } = type_;
            const typeToReturn = generateType(args[args.length - 1], imports);
            const parts = List.indexedMap(function(arg, index) {
              return `arg${index}: ${generateType(arg, imports)}`;
            }, args.slice(0, -1));
            return `(${parts.join(", ")}) => ${typeToReturn}`;
          }
          case "ObjectLiteralType": {
            return ``;
          }
        }
      }
      function generateField(field) {
        const value = generateExpression(field.value);
        if (field.name === value) {
          return field.name;
        } else {
          return `${field.name}: ${value}`;
        }
      }
      function generateObjectLiteral(literal) {
        const fields = function(y) {
          return y.join(",\n    ");
        }(literal.fields.map(generateField));
        if (literal.base === null) {
          switch (literal.fields.length) {
            case 0: {
              return "{ }";
            }
            case literal.fields.length: {
              if (literal.fields.length === 1) {
                const [x] = literal.fields;
                return `{ ${fields} }`;
              }
            }
            default: {
              return `{
    ${fields}
}`;
            }
          }
          ;
        } else {
          switch (literal.fields.length) {
            case 0: {
              return `{ ${literal.base.body} }`;
            }
            case literal.fields.length: {
              if (literal.fields.length === 1) {
                const [x] = literal.fields;
                return `{ ${literal.base.body}, ${fields} }`;
              }
            }
            default: {
              return `{
    ${literal.base.body},
    ${fields}
}`;
            }
          }
          ;
        }
      }
      function generateListValue(list) {
        function generator(expression) {
          switch (expression.kind) {
            case "IfStatement": {
              return generateInlineIf(expression);
            }
            case "CaseStatement": {
              return generateInlineCase(expression);
            }
            default: {
              return generateExpression(expression);
            }
          }
        }
        const items = List.map(generator, list.items);
        switch (items.length) {
          case 0: {
            return "[ ]";
          }
          case items.length: {
            if (items.length === 1) {
              const [x] = items;
              return `[ ${x} ]`;
            }
          }
          default: {
            return `[ ${items.join(", ")} ]`;
          }
        }
      }
      function generateLetBlock(body, parentTypeArguments, imports) {
        switch (body.length) {
          case 0: {
            return "";
          }
          case body.length: {
            if (body.length >= 1) {
              const [x, ...ys] = body;
              const prefixedBody = function(y) {
                return y.join("\n");
              }(List.map(function(block) {
                return generateBlock(block, parentTypeArguments, [], imports);
              }, body));
              const prefixedLines = (0, Common_1.prefixLines)(prefixedBody, 4);
              return `
${prefixedLines}`;
            }
          }
          default: {
            return "";
          }
        }
      }
      function generateIfStatement(ifStatement, parentTypeArguments, isAsync, neverSimple) {
        const isSimpleIfBody = neverSimple ? false : (0, types_1.isSimpleValue)(ifStatement.ifBody.kind);
        const isSimpleElseBody = neverSimple ? false : (0, types_1.isSimpleValue)(ifStatement.elseBody.kind);
        const ifBodyPrefix = isSimpleIfBody ? "return " : "";
        const asyncPrefix = isAsync ? "await " : "";
        const elseBodyPrefix = isSimpleElseBody ? "return " : "";
        const maybeIfLetBody = generateLetBlock(ifStatement.ifLetBody, parentTypeArguments, []);
        const maybeElseLetBody = generateLetBlock(ifStatement.elseLetBody, parentTypeArguments, []);
        const predicate = generateExpression(ifStatement.predicate);
        const ifBody = generateExpression(ifStatement.ifBody, parentTypeArguments);
        const indentedIfBody = function() {
          const _res1668698078 = ifBody.split("\n");
          switch (_res1668698078.length) {
            case 0: {
              return ifBody;
            }
            case _res1668698078.length: {
              if (_res1668698078.length === 1) {
                const [x] = _res1668698078;
                return ifBody;
              }
            }
            case _res1668698078.length: {
              if (_res1668698078.length >= 1) {
                const [x, ...xs] = _res1668698078;
                return function(y) {
                  return y.join("\n");
                }([x, (0, Common_1.prefixLines)(xs.join("\n"), 4)]);
              }
            }
            default: {
              return ifBody;
            }
          }
        }();
        const elseBody = generateExpression(ifStatement.elseBody, parentTypeArguments);
        const indentedElseBody = function() {
          const _res415623174 = elseBody.split("\n");
          switch (_res415623174.length) {
            case 0: {
              return elseBody;
            }
            case _res415623174.length: {
              if (_res415623174.length === 1) {
                const [x] = _res415623174;
                return elseBody;
              }
            }
            case _res415623174.length: {
              if (_res415623174.length >= 1) {
                const [x, ...xs] = _res415623174;
                return function(y) {
                  return y.join("\n");
                }([x, (0, Common_1.prefixLines)(xs.join("\n"), 4)]);
              }
            }
            default: {
              return elseBody;
            }
          }
        }();
        return `if (${predicate}) {${maybeIfLetBody}
    ${ifBodyPrefix}${asyncPrefix}${indentedIfBody};
} else {${maybeElseLetBody}
    ${elseBodyPrefix}${asyncPrefix}${indentedElseBody};
}`;
      }
      function generateConstructor(constructor) {
        switch (constructor.pattern.fields.length) {
          case 0: {
            return `${constructor.constructor}({ })`;
          }
          default: {
            return `${constructor.constructor}(${generateObjectLiteral(constructor.pattern)})`;
          }
        }
      }
      var replaceKey = "$REPLACE_ME";
      function generateListDestructurePartWithGaps(predicate, parts, part, info) {
        if (info.partIndex < info.currentIndex) {
          return Object.assign(Object.assign({}, info), { partIndex: info.partIndex + 1 });
        } else {
          const index = info.currentIndex;
          const output = info.output;
          const isLastValue = index === parts.length - 1;
          switch (part.kind) {
            case "Destructure": {
              const isNextAValue = isLastValue ? false : parts[index + 1].kind === "Value";
              const hasADestructureAfter = index < parts.length - 2 ? parts[index + 2].kind === "Destructure" : false;
              if (isNextAValue && hasADestructureAfter) {
                const nextValue = function(y) {
                  return y;
                }(parts[index + 1]);
                const destructorAfter = function(y) {
                  return y;
                }(parts[index + 2]);
                return function(y) {
                  return Object.assign(Object.assign({}, info), { output: y, partIndex: info.partIndex + 1, currentIndex: info.currentIndex + 2 });
                }(function(y) {
                  return (0, Common_1.prefixLines)(y, 8);
                }(function(y) {
                  return y.join("\n");
                }([`const [ _0, ..._rest ] = ${predicate};`, `if (_0.kind === "${part.constructor}") {`, `    let _foundIndex: number = -1;`, `    for (let _i = 0; _i < _rest.length; _i++) {`, `        if (_rest[_i].kind === "${destructorAfter.constructor}") {`, `            _foundIndex = _i;`, `            break;`, `        }`, `    }`, ``, `    if (_foundIndex > -1) {`, `        const ${nextValue.body} = _rest.slice(0, _foundIndex);`, `        ${replaceKey}`, `    }`, `}`])));
              } else {
                return Object.assign(Object.assign({}, info), { partIndex: info.partIndex + 1 });
              }
              ;
            }
            case "Value": {
              const newOutput = output.length === 0 ? `
const ${part.body} = _rest;
                    ` : parts[info.partIndex - 1].kind === "Destructure" ? output.replace(replaceKey, `const ${part.body} = _rest.slice(_foundIndex, _rest.length);
${replaceKey}`) : output.replace(replaceKey, `const ${part.body} = _rest;
${replaceKey}`);
              return Object.assign(Object.assign({}, info), { output: newOutput, partIndex: info.partIndex + 1, currentIndex: info.currentIndex + 1 });
            }
            default: {
              return Object.assign(Object.assign({}, info), { currentIndex: info.currentIndex + 1, partIndex: info.partIndex + 1 });
            }
          }
          ;
        }
      }
      function generateListDestructureWithGaps(predicate, branch, pattern) {
        const isFinalEmptyList = pattern.parts[pattern.parts.length - 1].kind === "EmptyList";
        const partsWithLength = (0, Common_1.destructureLength)(pattern);
        const startingInfo = {
          output: "",
          partIndex: 0,
          currentIndex: 0
        };
        const parts = function(y) {
          return y.output;
        }(List.foldl(function(x, info) {
          return generateListDestructurePartWithGaps(predicate, pattern.parts, x, info);
        }, startingInfo, pattern.parts));
        const conditional = isFinalEmptyList ? `${predicate}.length === ${partsWithLength}` : `${predicate}.length >= ${partsWithLength}`;
        const isSimpleBody = (0, types_1.isSimpleValue)(branch.body.kind);
        const wrapper = isSimpleBody ? `    return ` : "";
        const bodyIndent = isSimpleBody ? 0 : 4;
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(branch.body));
        const inner = (0, Common_1.prefixLines)(`${wrapper}${body};`, 12);
        return `case ${predicate}.length: {
    if (${conditional}) {
${parts.replace(replaceKey, inner)}
    }
}`;
      }
      function generateBranch(predicate, branch, parentTypeArguments) {
        const isSimpleBody = (0, types_1.isSimpleValue)(branch.body.kind);
        const wrapper = isSimpleBody ? "    return " : "";
        const maybeLetBody = generateLetBlock(branch.letBody, parentTypeArguments, []);
        const bodyIndent = isSimpleBody ? 0 : 4;
        const branchBody = function(y) {
          return (0, Common_1.prefixLines)(y, bodyIndent);
        }(generateExpression(branch.body, parentTypeArguments));
        switch (branch.pattern.kind) {
          case "Destructure": {
            const { pattern } = branch.pattern;
            const generatedPattern = pattern.trim().length > 0 ? `
    const ${pattern} = ${predicate};` : "";
            return `case "${branch.pattern.constructor}": {${generatedPattern}${maybeLetBody}
${wrapper}${branchBody};
}`;
          }
          case "StringValue": {
            const { body } = branch.pattern;
            return `case "${body}": {${maybeLetBody}
${wrapper}${branchBody};
}`;
          }
          case "FormatStringValue": {
            const { body } = branch.pattern;
            return `case \`` + body + `\`: {${maybeLetBody}
${wrapper}${branchBody};
}`;
          }
          case "EmptyList": {
            return `case 0: {${maybeLetBody}
${wrapper}${branchBody};
}`;
          }
          case "ListDestructure": {
            let not = function(value) {
              if (value) {
                return false;
              } else {
                return true;
              }
            };
            const { parts } = branch.pattern;
            const length = parts.length;
            const isFinalEmptyList = parts[length - 1].kind === "EmptyList";
            const partsWithLength = (0, Common_1.destructureLength)(branch.pattern);
            const hasGaps = (0, Common_1.patternHasGaps)(branch.pattern);
            const gapPositions = (0, Common_1.patternGapPositions)(branch.pattern);
            const isOnlyFinalGap = gapPositions.length === 1 && gapPositions[0] === length - 1;
            const conditional = isFinalEmptyList && not(hasGaps) ? `${predicate}.length === ${partsWithLength}` : `${predicate}.length >= ${partsWithLength}`;
            const firstPart = parts[0];
            const isFirstDestructure = firstPart.kind === "Destructure";
            if (hasGaps && not(isOnlyFinalGap)) {
              return generateListDestructureWithGaps(predicate, branch, branch.pattern);
            } else {
              if (isFirstDestructure) {
                let unpackFn = function(destructor, index) {
                  if (destructor.pattern.length === 0) {
                    return "";
                  } else {
                    return `
            const ${destructor.pattern} = _${index};`;
                  }
                };
                const destructors = List.filter(function(t) {
                  return t.kind === "Destructure";
                }, parts);
                const destructorParts = List.indexedMap(function(_, i) {
                  return `_${i}`;
                }, destructors);
                const allButFinalPart = List.map(CommonToEcma_1.generateListDestructurePart, parts.slice(destructorParts.length, -1));
                const generatedParts = List.append(destructorParts, allButFinalPart);
                const joinedGeneratedParts = generatedParts.join(", ");
                const partsString = isFinalEmptyList ? joinedGeneratedParts : `${joinedGeneratedParts}, ...${(0, CommonToEcma_1.generateListDestructurePart)(parts[length - 1])}`;
                const conditionals = List.indexedMap(function(destructor, index) {
                  return `_${index}.kind === "${destructor.constructor}"`;
                }, destructors);
                const joinedConditionals = conditionals.join(" && ");
                const unpacked = List.indexedMap(unpackFn, destructors);
                const joinedUnpacked = unpacked.length === 0 ? "" : unpacked.join("");
                return function(y) {
                  return y.join("\n");
                }([`case ${predicate}.length: {`, `    if (${conditional}) {`, `        const [ ${partsString} ] = ${predicate};`, `        if (${joinedConditionals}) {${joinedUnpacked}${maybeLetBody ? (0, Common_1.prefixLines)(maybeLetBody, 8) : ""}`, `        ${wrapper}${branchBody};`, `        }`, `    }`, `}`]);
              } else {
                const isFirstValue = firstPart.kind === "StringValue" || firstPart.kind === "FormatStringValue";
                const partsToGenerate = isFirstValue ? [{
                  kind: "Value",
                  body: "_temp"
                }, ...branch.pattern.parts.slice(1, -1)] : branch.pattern.parts.slice(0, -1);
                const generatedParts = List.map(CommonToEcma_1.generateListDestructurePart, partsToGenerate);
                const joinedParts = generatedParts.join(", ");
                const partsString = isFinalEmptyList ? joinedParts : `${joinedParts}, ...${(0, CommonToEcma_1.generateListDestructurePart)(branch.pattern.parts[length - 1])}`;
                if (isFirstValue) {
                  const tempConditional = function() {
                    switch (firstPart.kind) {
                      case "StringValue": {
                        const { body } = firstPart;
                        return `"${body}"`;
                      }
                      case "FormatStringValue": {
                        const { body } = firstPart;
                        return "`" + body + "`";
                      }
                      default: {
                        return "";
                      }
                    }
                  }();
                  return function(y) {
                    return y.join("\n");
                  }([`case ${predicate}.length: {`, `    if (${conditional}) {`, `        const [ ${partsString} ] = ${predicate};${maybeLetBody ? (0, Common_1.prefixLines)(maybeLetBody, 4) : ""}`, `        if (_temp === ${tempConditional}) {`, `        ${wrapper}${branchBody};`, `        }`, `    }`, `}`]);
                } else {
                  return function(y) {
                    return y.join("\n");
                  }([`case ${predicate}.length: {`, `    if (${conditional}) {`, `        const [ ${partsString} ] = ${predicate};${maybeLetBody ? (0, Common_1.prefixLines)(maybeLetBody, 4) : ""}`, `    ${wrapper}${branchBody};`, `    }`, `}`]);
                }
                ;
              }
              ;
            }
            ;
          }
          case "Default": {
            return `default: {${maybeLetBody}
${wrapper}${branchBody};
}`;
          }
        }
      }
      function isModuleReferenceToAValue(moduleReference) {
        return moduleReference.value.kind === "Value";
      }
      function generateCaseStatement(caseStatement, parentTypeArguments) {
        const predicate = generateExpression(caseStatement.predicate);
        const isValue = function() {
          switch (caseStatement.predicate.kind) {
            case "Value": {
              return true;
            }
            case "ModuleReference": {
              return isModuleReferenceToAValue(caseStatement.predicate);
            }
            default: {
              return false;
            }
          }
        }();
        const name = isValue ? predicate : `_res${(0, Utils_1.hashCode)(predicate)}`;
        const maybePredicateAssignment = isValue ? "" : `const ${name} = ${predicate};
`;
        const branches = function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(function(y) {
          return y.join("\n");
        }(List.map(function(branch) {
          return generateBranch(name, branch, parentTypeArguments);
        }, caseStatement.branches)));
        const isString = function(y) {
          return y.length > 0;
        }(List.filter(function(branch) {
          return branch.pattern.kind === "StringValue";
        }, caseStatement.branches));
        const isList = function(y) {
          return y.length > 0;
        }(List.filter(function(branch) {
          return branch.pattern.kind === "EmptyList" || branch.pattern.kind === "ListDestructure";
        }, caseStatement.branches));
        if (isString) {
          return `${maybePredicateAssignment}switch (${name}) {
${branches}
}`;
        } else {
          if (isList) {
            return `${maybePredicateAssignment}switch (${name}.length) {
${branches}
}`;
          } else {
            return `${maybePredicateAssignment}switch (${name}.kind) {
${branches}
}`;
          }
          ;
        }
      }
      function generateAddition(addition) {
        const left = generateExpression(addition.left);
        const right = generateExpression(addition.right);
        return `${left} + ${right}`;
      }
      function generateSubtraction(subtraction) {
        const left = generateExpression(subtraction.left);
        const right = generateExpression(subtraction.right);
        return `${left} - ${right}`;
      }
      function generateMultiplication(multiplication) {
        const left = generateExpression(multiplication.left);
        const right = generateExpression(multiplication.right);
        return `${left} * ${right}`;
      }
      function generateDivision(division) {
        const left = generateExpression(division.left);
        const right = generateExpression(division.right);
        return `${left} / ${right}`;
      }
      function generateMod(mod) {
        const left = generateExpression(mod.left);
        const right = generateExpression(mod.right);
        return `${left} % ${right}`;
      }
      function generateLeftPipe(leftPipe) {
        return generateExpression((0, CommonToEcma_1.flattenLeftPipe)(leftPipe));
      }
      function generateRightPipe(rightPipe) {
        const left = generateExpression(rightPipe.left);
        const right = generateExpression(rightPipe.right);
        return `${left}(${right})`;
      }
      function generateModuleReference(moduleReference) {
        switch (moduleReference.path.length) {
          case 0: {
            return `(arg0) => arg0.${generateExpression(moduleReference.value)}`;
          }
          default: {
            const left = moduleReference.path.join(".");
            const right = generateExpression(moduleReference.value);
            return `${left}.${right}`;
          }
        }
      }
      function generateFunctionCall(functionCall) {
        const args = function(y) {
          return y.join(", ");
        }(List.map(generateExpression, functionCall.args));
        return `${functionCall.name}(${args})`;
      }
      function generateLambda(lambda) {
        const isSimple = (0, types_1.isSimpleValue)(lambda.body.kind);
        const args = function(y) {
          return y.join(", ");
        }(List.map(function(arg) {
          return `${arg}: any`;
        }, lambda.args));
        const body = isSimple ? generateExpression(lambda.body) : function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(generateExpression(lambda.body));
        if (isSimple) {
          return `function(${args}) {
    return ${body};
}`;
        } else {
          return `function(${args}) {
${body}
}`;
        }
      }
      function generateLambdaCall(lambdaCall) {
        const args = function(y) {
          return y.join(", ");
        }(List.map(function(arg) {
          return `${arg}: any`;
        }, lambdaCall.lambda.args));
        const argsValues = function(y) {
          return y.join(", ");
        }(List.map(generateExpression, lambdaCall.args));
        const body = generateExpression(lambdaCall.lambda.body);
        return `(function(${args}) {
    return ${body};
})(${argsValues})`;
      }
      function generateEquality(equality) {
        const left = generateExpression(equality.left);
        const right = generateExpression(equality.right);
        return `${left} === ${right}`;
      }
      function generateInEquality(inEquality) {
        const left = generateExpression(inEquality.left);
        const right = generateExpression(inEquality.right);
        return `${left} !== ${right}`;
      }
      function generateLessThan(lessThan) {
        const left = generateExpression(lessThan.left);
        const right = generateExpression(lessThan.right);
        return `${left} < ${right}`;
      }
      function generateLessThanOrEqual(lessThanOrEqual) {
        const left = generateExpression(lessThanOrEqual.left);
        const right = generateExpression(lessThanOrEqual.right);
        return `${left} <= ${right}`;
      }
      function generateGreaterThan(greaterThan) {
        const left = generateExpression(greaterThan.left);
        const right = generateExpression(greaterThan.right);
        return `${left} > ${right}`;
      }
      function generateGreaterThanOrEqual(greaterThanOrEqual) {
        const left = generateExpression(greaterThanOrEqual.left);
        const right = generateExpression(greaterThanOrEqual.right);
        return `${left} >= ${right}`;
      }
      function generateAnd(and) {
        const left = generateExpression(and.left);
        const right = generateExpression(and.right);
        return `${left} && ${right}`;
      }
      function generateOr(or) {
        const left = generateExpression(or.left);
        const right = generateExpression(or.right);
        return `${left} || ${right}`;
      }
      function generateListPrepend(prepend) {
        const left = generateExpression(prepend.left);
        const right = generateExpression(prepend.right);
        return `[ ${left}, ...${right} ]`;
      }
      function generateExpression(expression, parentTypeArguments, parentTypes) {
        switch (expression.kind) {
          case "Value": {
            return (0, CommonToEcma_1.generateValue)(expression);
          }
          case "StringValue": {
            return (0, CommonToEcma_1.generateStringValue)(expression);
          }
          case "FormatStringValue": {
            return (0, CommonToEcma_1.generateFormatStringValue)(expression);
          }
          case "ListValue": {
            return generateListValue(expression);
          }
          case "ListRange": {
            return (0, CommonToEcma_1.generateListRange)(expression);
          }
          case "ObjectLiteral": {
            return generateObjectLiteral(expression);
          }
          case "IfStatement": {
            const actualParentTypeArguments = parentTypeArguments || [];
            return generateIfStatement(expression, actualParentTypeArguments, false, false);
          }
          case "CaseStatement": {
            const actualParentTypeArguments = parentTypeArguments || [];
            return generateCaseStatement(expression, actualParentTypeArguments);
          }
          case "Addition": {
            return generateAddition(expression);
          }
          case "Subtraction": {
            return generateSubtraction(expression);
          }
          case "Multiplication": {
            return generateMultiplication(expression);
          }
          case "Division": {
            return generateDivision(expression);
          }
          case "Mod": {
            return generateMod(expression);
          }
          case "And": {
            return generateAnd(expression);
          }
          case "Or": {
            return generateOr(expression);
          }
          case "ListPrepend": {
            return generateListPrepend(expression);
          }
          case "LeftPipe": {
            return generateLeftPipe(expression);
          }
          case "RightPipe": {
            return generateRightPipe(expression);
          }
          case "ModuleReference": {
            return generateModuleReference(expression);
          }
          case "FunctionCall": {
            return generateFunctionCall(expression);
          }
          case "Lambda": {
            return generateLambda(expression);
          }
          case "LambdaCall": {
            return generateLambdaCall(expression);
          }
          case "Constructor": {
            return generateConstructor(expression);
          }
          case "Equality": {
            return generateEquality(expression);
          }
          case "InEquality": {
            return generateInEquality(expression);
          }
          case "LessThan": {
            return generateLessThan(expression);
          }
          case "LessThanOrEqual": {
            return generateLessThanOrEqual(expression);
          }
          case "GreaterThan": {
            return generateGreaterThan(expression);
          }
          case "GreaterThanOrEqual": {
            return generateGreaterThanOrEqual(expression);
          }
        }
      }
      function collectTypeArguments(type_) {
        switch (type_.kind) {
          case "GenericType": {
            const { name } = type_;
            if ((0, builtins_1.isBuiltinType)(name)) {
              return [];
            } else {
              return [name];
            }
            ;
          }
          case "FixedType": {
            const { name, args } = type_;
            if ((0, builtins_1.isBuiltinType)(name)) {
              return [];
            } else {
              return List.foldl(function(xs, ys) {
                return List.append(ys, xs);
              }, [], List.map(collectTypeArguments, args));
            }
            ;
          }
          case "FunctionType": {
            const { args } = type_;
            return List.foldl(function(xs, ys) {
              return List.append(ys, xs);
            }, [], List.map(collectTypeArguments, args));
          }
          case "ObjectLiteralType": {
            return [];
          }
        }
      }
      function generateDoExpression(expression, parentTypeArguments, parentTypes, imports) {
        switch (expression.kind) {
          case "Const": {
            return generateConst(expression, imports, true);
          }
          case "Function": {
            return generateFunction(expression, parentTypeArguments, parentTypes, imports);
          }
          case "FunctionCall": {
            return function(y) {
              return "await " + y + ";";
            }(generateFunctionCall(expression));
          }
          case "ModuleReference": {
            return function(y) {
              return "await " + y + ";";
            }(generateModuleReference(expression));
          }
          case "IfStatement": {
            return generateIfStatement(expression, parentTypeArguments, true, true);
          }
        }
      }
      function generateDoBlock(doBody, parentTypeArguments, parentTypes, imports) {
        return function(y) {
          return y.join("\n");
        }(List.map(function(expression) {
          return generateDoExpression(expression, parentTypeArguments, parentTypes, imports);
        }, doBody.expressions));
      }
      function generateFunctionArg(arg, imports) {
        switch (arg.kind) {
          case "FunctionArg": {
            const { name, type } = arg;
            return `${name}: ${generateTopLevelType(type, imports)}`;
          }
          case "AnonFunctionArg": {
            const { index, type } = arg;
            return `_${index}: ${generateTopLevelType(type, imports)}`;
          }
        }
      }
      function generateFunction(function_, parentTypeArguments, parentTypes, imports) {
        const args = function(y) {
          return y.join(", ");
        }(List.map(function(arg) {
          return generateFunctionArg(arg, imports);
        }, function_.args));
        const flattenedArgTypeArguments = List.foldl(function(xs, ys) {
          return List.append(ys, xs);
        }, [], List.map(function(arg) {
          return collectTypeArguments(arg.type);
        }, function_.args));
        const typeArguments = List.append(flattenedArgTypeArguments, collectTypeArguments(function_.returnType));
        const filteredTypeArguments = typeArguments.filter(function(value, index, arr) {
          return arr.indexOf(value) === index && parentTypeArguments.indexOf(value) === -1;
        });
        const maybeLetBody = generateLetBlock(function_.letBody, List.append(filteredTypeArguments, parentTypeArguments), imports);
        const isAsync = function_.doBody !== null;
        const maybeAsyncPrefix = isAsync ? "async " : "";
        const maybeDoBody = function_.doBody !== null ? function(y) {
          return `
${(0, Common_1.prefixLines)(y, 4)}`;
        }(generateDoBlock(function_.doBody, parentTypeArguments, parentTypes, imports)) : "";
        const returnType = isAsync ? generateTopLevelType({
          kind: "FixedType",
          name: "Promise",
          args: [function_.returnType]
        }, imports) : generateTopLevelType(function_.returnType, imports);
        const isSimpleBody = (0, types_1.isSimpleValue)(function_.body.kind);
        const bodyPrefix = isSimpleBody ? "return " : "";
        const bodySuffix = isSimpleBody ? ";" : "";
        const joinedTypeArguments = List.append(typeArguments, parentTypeArguments);
        const allParentTypes = List.append(parentTypes, [function_.returnType]);
        const body = function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(function(y) {
          return bodyPrefix + y + bodySuffix;
        }(generateExpression(function_.body, joinedTypeArguments, allParentTypes)));
        const typeArgumentsString = filteredTypeArguments.length === 0 ? "" : `<${filteredTypeArguments.join(", ")}>`;
        return function(y) {
          return y.join("\n");
        }([`${maybeAsyncPrefix}function ${function_.name}${typeArgumentsString}(${args}): ${returnType} {${maybeLetBody}${maybeDoBody}`, `${body}`, `}`]);
      }
      function generateInlineIf(expression) {
        const ifBody = function() {
          switch (expression.ifBody.kind) {
            case "IfStatement": {
              return `( ${generateInlineIf(expression.ifBody)} )`;
            }
            default: {
              return generateExpression(expression.ifBody);
            }
          }
        }();
        const elseBody = function() {
          switch (expression.elseBody.kind) {
            case "IfStatement": {
              return `( ${generateInlineIf(expression.elseBody)} )`;
            }
            default: {
              return generateExpression(expression.elseBody);
            }
          }
        }();
        return `${generateExpression(expression.predicate)} ? ${ifBody} : ${elseBody}`;
      }
      function generateInlineCase(expression) {
        return `(function (): any {
${(0, Common_1.prefixLines)(generateExpression(expression), 4)}
})()`;
      }
      function generateNestedConst(constDef, body, imports) {
        const typeDef = generateTopLevelType(constDef.type, imports);
        const generatedBlocks = List.map(function(block) {
          return generateBlock(block, [], [], imports);
        }, constDef.letBody);
        const joinedBlocks = function(y) {
          return (0, Common_1.prefixLines)(y, 4);
        }(generatedBlocks.join("\n"));
        return `(function(): ${typeDef} {
${joinedBlocks}
    return ${body};
})()`;
      }
      function generateConst(constDef, imports, isAsync) {
        const body = function() {
          switch (constDef.value.kind) {
            case "IfStatement": {
              if (constDef.letBody.length === 0) {
                return generateInlineIf(constDef.value);
              } else {
                return generateNestedConst(constDef, generateInlineIf(constDef.value), imports);
              }
              ;
            }
            case "CaseStatement": {
              if (constDef.letBody.length === 0) {
                return generateInlineCase(constDef.value);
              } else {
                return generateNestedConst(constDef, generateInlineCase(constDef.value), imports);
              }
              ;
            }
            default: {
              if (constDef.letBody.length === 0) {
                return generateExpression(constDef.value);
              } else {
                return generateNestedConst(constDef, generateExpression(constDef.value), imports);
              }
              ;
            }
          }
        }();
        const maybeAsyncPrefix = isAsync ? "await " : "";
        const typeDef = generateTopLevelType(constDef.type, imports);
        return `const ${constDef.name}: ${typeDef} = ${maybeAsyncPrefix}${body};`;
      }
      function generateBlock(syntax, parentTypeArguments, parentTypes, imports) {
        const actualParentTypeArguments = parentTypeArguments || [];
        const actualParentTypes = parentTypes || [];
        const actualImports = imports || [];
        switch (syntax.kind) {
          case "Import": {
            return (0, CommonToEcma_1.generateImportBlock)(syntax);
          }
          case "Export": {
            return (0, CommonToEcma_1.generateExportBlock)(syntax);
          }
          case "UnionType": {
            return generateUnionType(syntax, actualImports);
          }
          case "UnionUntaggedType": {
            return generateUnionUntaggedType(syntax);
          }
          case "TypeAlias": {
            return generateTypeAlias(syntax, actualImports);
          }
          case "Function": {
            return generateFunction(syntax, actualParentTypeArguments, actualParentTypes, actualImports);
          }
          case "Const": {
            return generateConst(syntax, actualImports, false);
          }
          case "Comment": {
            return "";
          }
          case "MultilineComment": {
            return "";
          }
        }
      }
      function generateTypescript2(module2) {
        const onlyImports = List.filter(function(block) {
          return block.kind === "Import";
        }, module2.body);
        const testExports = (0, Blocks_1.exportTests)(module2);
        const withTestExports = [testExports, ...module2.body];
        return function(y) {
          return y.join("\n\n");
        }(List.filter(function(line) {
          return line.length > 0;
        }, List.map(function(block) {
          return generateBlock(block, [], [], onlyImports);
        }, withTestExports)));
      }
      exports.generateTypescript = generateTypescript2;
    }
  });

  // node_modules/@eeue56/ts-core/build/main/lib/maybe.js
  var require_maybe = __commonJS({
    "node_modules/@eeue56/ts-core/build/main/lib/maybe.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.andThen = exports.map3 = exports.map2 = exports.map = exports.withDefault = exports.isNothing = exports.isJust = exports.Nothing = exports.Just = void 0;
      function Just(value) {
        return {
          kind: "Just",
          value
        };
      }
      exports.Just = Just;
      function Nothing() {
        return {
          kind: "Nothing"
        };
      }
      exports.Nothing = Nothing;
      function isJust(maybe) {
        switch (maybe.kind) {
          case "Just":
            return true;
          default:
            return false;
        }
      }
      exports.isJust = isJust;
      function isNothing(maybe) {
        switch (maybe.kind) {
          case "Nothing":
            return true;
          default:
            return false;
        }
      }
      exports.isNothing = isNothing;
      function withDefault(value, maybeValue) {
        switch (maybeValue.kind) {
          case "Just":
            return maybeValue.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault;
      function map(func, maybeValue) {
        switch (maybeValue.kind) {
          case "Just":
            return Just(func(maybeValue.value));
          default:
            return maybeValue;
        }
      }
      exports.map = map;
      function map2(func, firstMaybeValue, secondMaybeValue) {
        switch (firstMaybeValue.kind) {
          case "Just":
            switch (secondMaybeValue.kind) {
              case "Just":
                return Just(func(firstMaybeValue.value, secondMaybeValue.value));
              default:
                return Nothing();
            }
          default:
            return Nothing();
        }
      }
      exports.map2 = map2;
      function map3(func, firstMaybeValue, secondMaybeValue, thirdMaybeValue) {
        switch (firstMaybeValue.kind) {
          case "Just":
            switch (secondMaybeValue.kind) {
              case "Just":
                switch (thirdMaybeValue.kind) {
                  case "Just":
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
      exports.map3 = map3;
      function andThen(func, maybeValue) {
        switch (maybeValue.kind) {
          case "Just":
            return func(maybeValue.value);
          default:
            return Nothing();
        }
      }
      exports.andThen = andThen;
    }
  });

  // node_modules/@eeue56/ts-core/build/main/lib/result.js
  var require_result = __commonJS({
    "node_modules/@eeue56/ts-core/build/main/lib/result.js"(exports) {
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
      var Maybe = __importStar(require_maybe());
      function Ok(value) {
        return {
          kind: "Ok",
          value
        };
      }
      exports.Ok = Ok;
      function Err(error) {
        return {
          kind: "Err",
          error
        };
      }
      exports.Err = Err;
      function withDefault(value, result) {
        switch (result.kind) {
          case "Ok":
            return result.value;
          default:
            return value;
        }
      }
      exports.withDefault = withDefault;
      function either(result) {
        switch (result.kind) {
          case "Ok":
            return result.value;
          default:
            return result.error;
        }
      }
      exports.either = either;
      function toMaybe(result) {
        switch (result.kind) {
          case "Ok":
            return Maybe.Just(result.value);
          default:
            return Maybe.Nothing();
        }
      }
      exports.toMaybe = toMaybe;
      function fromMaybe(error, maybe) {
        switch (maybe.kind) {
          case "Just":
            return Ok(maybe.value);
          default:
            return Err(error);
        }
      }
      exports.fromMaybe = fromMaybe;
      function map(func, result) {
        switch (result.kind) {
          case "Ok":
            return Ok(func(result.value));
          default:
            return result;
        }
      }
      exports.map = map;
      function map2(func, firstResult, secondResult) {
        switch (firstResult.kind) {
          case "Ok":
            switch (secondResult.kind) {
              case "Ok":
                return Ok(func(firstResult.value, secondResult.value));
              default:
                return secondResult;
            }
          default:
            return firstResult;
        }
      }
      exports.map2 = map2;
      function map3(func, firstResult, secondResult, thirdResult) {
        switch (firstResult.kind) {
          case "Ok":
            switch (secondResult.kind) {
              case "Ok":
                switch (thirdResult.kind) {
                  case "Ok":
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
      exports.map3 = map3;
      function mapError(func, result) {
        switch (result.kind) {
          case "Err":
            return Err(func(result.error));
          default:
            return result;
        }
      }
      exports.mapError = mapError;
      function andThen(func, result) {
        switch (result.kind) {
          case "Ok":
            return func(result.value);
          default:
            return result;
        }
      }
      exports.andThen = andThen;
    }
  });

  // node_modules/derw/build/stdlib/Maybe.js
  var require_Maybe = __commonJS({
    "node_modules/derw/build/stdlib/Maybe.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.andThen = exports.withDefault = exports.map = exports.Nothing = exports.Just = void 0;
      function Just(args) {
        return Object.assign({ kind: "Just" }, args);
      }
      exports.Just = Just;
      function Nothing(args) {
        return Object.assign({ kind: "Nothing" }, args);
      }
      exports.Nothing = Nothing;
      function map(fn, maybe) {
        switch (maybe.kind) {
          case "Just": {
            const { value } = maybe;
            return Just({ value: fn(value) });
          }
          case "Nothing": {
            return Nothing({});
          }
        }
      }
      exports.map = map;
      function withDefault(defaultValue, maybe) {
        switch (maybe.kind) {
          case "Just": {
            const { value } = maybe;
            return value;
          }
          case "Nothing": {
            return defaultValue;
          }
        }
      }
      exports.withDefault = withDefault;
      function andThen(fn, maybe) {
        switch (maybe.kind) {
          case "Just": {
            const { value } = maybe;
            return fn(value);
          }
          case "Nothing": {
            return Nothing({});
          }
        }
      }
      exports.andThen = andThen;
    }
  });

  // node_modules/derw/build/Collisions.js
  var require_Collisions = __commonJS({
    "node_modules/derw/build/Collisions.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.collisions = exports.Collision = void 0;
      var List = __importStar(require_List());
      var Maybe_1 = require_Maybe();
      function Collision(args) {
        return Object.assign({}, args);
      }
      exports.Collision = Collision;
      function moduleNames(index, module2) {
        const moduleName = function() {
          switch (module2.alias.kind) {
            case "Just": {
              const { value } = module2.alias;
              return value;
            }
            case "Nothing": {
              return module2.name;
            }
          }
        }();
        return {
          modules: [{
            name: moduleName,
            indexes: [index]
          }],
          values: List.map(function(name) {
            return {
              indexes: [index],
              name
            };
          }, module2.exposing)
        };
      }
      function blockNames(block, index) {
        switch (block.kind) {
          case "Function": {
            const { name } = block;
            return {
              modules: [],
              values: [{
                name,
                indexes: [index]
              }]
            };
          }
          case "Const": {
            const { name } = block;
            return {
              modules: [],
              values: [{
                name,
                indexes: [index]
              }]
            };
          }
          case "UnionType": {
            const { type } = block;
            return {
              modules: [],
              values: [{
                name: type.name,
                indexes: [index]
              }]
            };
          }
          case "TypeAlias": {
            const { type } = block;
            return {
              modules: [],
              values: [{
                name: type.name,
                indexes: [index]
              }]
            };
          }
          case "Import": {
            let step = function(module2, names) {
              const modNames = moduleNames(index, module2);
              return {
                modules: List.append(names.modules, modNames.modules),
                values: List.append(names.values, modNames.values)
              };
            };
            const { modules } = block;
            return List.foldr(step, {
              modules: [],
              values: []
            }, modules);
          }
          default: {
            return {
              modules: [],
              values: []
            };
          }
        }
      }
      function mergeSeen(seen, seens) {
        const hasBeenSeen = function(x) {
          return x.length > 0;
        }(List.filter(function(x) {
          return x.name === seen.name;
        }, seens));
        function mapper(innerSeen) {
          if (innerSeen.name === seen.name) {
            return {
              name: innerSeen.name,
              indexes: List.append(seen.indexes, innerSeen.indexes)
            };
          } else {
            return innerSeen;
          }
        }
        if (hasBeenSeen) {
          return List.map(mapper, seens);
        } else {
          return [seen, ...seens];
        }
      }
      function mergeNames(first, second) {
        const modules = List.foldr(mergeSeen, [], List.append(first.modules, second.modules));
        const values = List.foldr(mergeSeen, [], List.append(first.values, second.values));
        return {
          modules,
          values
        };
      }
      function flattenNames(names) {
        return List.foldr(function(currentNames, finalNames) {
          return mergeNames(currentNames, finalNames);
        }, {
          modules: [],
          values: []
        }, names);
      }
      function seenToCollision(seen) {
        if (seen.indexes.length > 1) {
          return (0, Maybe_1.Just)({ value: {
            name: seen.name,
            indexes: seen.indexes
          } });
        } else {
          return (0, Maybe_1.Nothing)({});
        }
      }
      function namesToCollisions(names) {
        function collisionStep(seen, collisions2) {
          const _res311046558 = seenToCollision(seen);
          switch (_res311046558.kind) {
            case "Nothing": {
              return collisions2;
            }
            case "Just": {
              const { value } = _res311046558;
              return [{
                name: value.name,
                indexes: value.indexes
              }, ...collisions2];
            }
          }
        }
        const moduleCollisions = List.foldr(collisionStep, [], names.modules);
        const valueCollisions = List.foldr(collisionStep, [], names.values);
        return List.append(moduleCollisions, valueCollisions);
      }
      function collisions(blocks) {
        return namesToCollisions(flattenNames(List.indexedMap(blockNames, blocks)));
      }
      exports.collisions = collisions;
    }
  });

  // node_modules/derw/build/Tokens_types_kernel.js
  var require_Tokens_types_kernel = __commonJS({
    "node_modules/derw/build/Tokens_types_kernel.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FunctionTypeToken = exports.BaseTypeToken = void 0;
      function BaseTypeToken(args) {
        return Object.assign({ kind: "BaseTypeToken" }, args);
      }
      exports.BaseTypeToken = BaseTypeToken;
      function FunctionTypeToken(args) {
        return Object.assign({ kind: "FunctionTypeToken" }, args);
      }
      exports.FunctionTypeToken = FunctionTypeToken;
    }
  });

  // node_modules/derw/build/Tokens.js
  var require_Tokens = __commonJS({
    "node_modules/derw/build/Tokens.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
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
      exports.rootTypeTokensToString = exports.tokensToString = exports.tokenizeType = exports.tokenize = exports.checkKeywordToken = exports.FunctionTypeToken = exports.BaseTypeToken = exports.WhitespaceToken = exports.OperatorToken = exports.PipeToken = exports.CloseBracketToken = exports.OpenBracketToken = exports.CloseCurlyBracesToken = exports.OpenCurlyBracesToken = exports.CommaToken = exports.AssignToken = exports.MultilineCommentToken = exports.CommentToken = exports.ArrowToken = exports.ColonToken = exports.LiteralToken = exports.IdentifierToken = exports.KeywordToken = exports.FormatStringToken = exports.StringToken = void 0;
      var Tokens_types_kernel_1 = require_Tokens_types_kernel();
      Object.defineProperty(exports, "BaseTypeToken", { enumerable: true, get: function() {
        return Tokens_types_kernel_1.BaseTypeToken;
      } });
      Object.defineProperty(exports, "FunctionTypeToken", { enumerable: true, get: function() {
        return Tokens_types_kernel_1.FunctionTypeToken;
      } });
      var List = __importStar(require_List());
      function Empty(args) {
        return Object.assign({ kind: "Empty" }, args);
      }
      function InString(args) {
        return Object.assign({ kind: "InString" }, args);
      }
      function InFormatString(args) {
        return Object.assign({ kind: "InFormatString" }, args);
      }
      function InBracket(args) {
        return Object.assign({ kind: "InBracket" }, args);
      }
      function InSquareBracket(args) {
        return Object.assign({ kind: "InSquareBracket" }, args);
      }
      function InWhitespace(args) {
        return Object.assign({ kind: "InWhitespace" }, args);
      }
      function Keyword(args) {
        return Object.assign({ kind: "Keyword" }, args);
      }
      var keywords = ["if", "then", "else", "type", "alias", "import", "exposing", "as", "let", "in", "case", "of", "do", "return"];
      function StringToken(args) {
        return Object.assign({ kind: "StringToken" }, args);
      }
      exports.StringToken = StringToken;
      function FormatStringToken(args) {
        return Object.assign({ kind: "FormatStringToken" }, args);
      }
      exports.FormatStringToken = FormatStringToken;
      function KeywordToken(args) {
        return Object.assign({ kind: "KeywordToken" }, args);
      }
      exports.KeywordToken = KeywordToken;
      function IdentifierToken(args) {
        return Object.assign({ kind: "IdentifierToken" }, args);
      }
      exports.IdentifierToken = IdentifierToken;
      function LiteralToken(args) {
        return Object.assign({ kind: "LiteralToken" }, args);
      }
      exports.LiteralToken = LiteralToken;
      function ColonToken(args) {
        return Object.assign({ kind: "ColonToken" }, args);
      }
      exports.ColonToken = ColonToken;
      function ArrowToken(args) {
        return Object.assign({ kind: "ArrowToken" }, args);
      }
      exports.ArrowToken = ArrowToken;
      function CommentToken(args) {
        return Object.assign({ kind: "CommentToken" }, args);
      }
      exports.CommentToken = CommentToken;
      function MultilineCommentToken(args) {
        return Object.assign({ kind: "MultilineCommentToken" }, args);
      }
      exports.MultilineCommentToken = MultilineCommentToken;
      function AssignToken(args) {
        return Object.assign({ kind: "AssignToken" }, args);
      }
      exports.AssignToken = AssignToken;
      function CommaToken(args) {
        return Object.assign({ kind: "CommaToken" }, args);
      }
      exports.CommaToken = CommaToken;
      function OpenCurlyBracesToken(args) {
        return Object.assign({ kind: "OpenCurlyBracesToken" }, args);
      }
      exports.OpenCurlyBracesToken = OpenCurlyBracesToken;
      function CloseCurlyBracesToken(args) {
        return Object.assign({ kind: "CloseCurlyBracesToken" }, args);
      }
      exports.CloseCurlyBracesToken = CloseCurlyBracesToken;
      function OpenBracketToken(args) {
        return Object.assign({ kind: "OpenBracketToken" }, args);
      }
      exports.OpenBracketToken = OpenBracketToken;
      function CloseBracketToken(args) {
        return Object.assign({ kind: "CloseBracketToken" }, args);
      }
      exports.CloseBracketToken = CloseBracketToken;
      function PipeToken(args) {
        return Object.assign({ kind: "PipeToken" }, args);
      }
      exports.PipeToken = PipeToken;
      function OperatorToken(args) {
        return Object.assign({ kind: "OperatorToken" }, args);
      }
      exports.OperatorToken = OperatorToken;
      function WhitespaceToken(args) {
        return Object.assign({ kind: "WhitespaceToken" }, args);
      }
      exports.WhitespaceToken = WhitespaceToken;
      function isLiteral(body) {
        if (body === "true" || body === "false") {
          return true;
        } else {
          if (isNaN(parseFloat(body))) {
            return false;
          } else {
            return true;
          }
          ;
        }
      }
      var operators = ["<", "<=", ">", ">=", "==", "!=", "-", "+", "*", "/", "%", "|>", "<|", "&&", "||"];
      function isOperator(body) {
        if (operators.indexOf(body) === -1) {
          return false;
        } else {
          return true;
        }
      }
      function checkKeywordToken(currentToken) {
        switch (currentToken) {
          case "=": {
            return [AssignToken({})];
          }
          case "{": {
            return [OpenCurlyBracesToken({})];
          }
          case "}": {
            return [CloseCurlyBracesToken({})];
          }
          case "{}": {
            return [OpenCurlyBracesToken({}), CloseCurlyBracesToken({})];
          }
          case "--": {
            return [CommentToken({})];
          }
          case "{-": {
            return [MultilineCommentToken({ body: "{-" })];
          }
          case "-}": {
            return [MultilineCommentToken({ body: "-}" })];
          }
          default: {
            if (keywords.indexOf(currentToken) > -1) {
              return [KeywordToken({ body: currentToken })];
            } else {
              if (isLiteral(currentToken)) {
                return [LiteralToken({ body: currentToken })];
              } else {
                if (isOperator(currentToken)) {
                  return [OperatorToken({ body: currentToken })];
                } else {
                  return [IdentifierToken({ body: currentToken })];
                }
                ;
              }
              ;
            }
            ;
          }
        }
      }
      exports.checkKeywordToken = checkKeywordToken;
      function isEscape(char) {
        return char.charCodeAt(0) === 92;
      }
      function not(a) {
        if (a) {
          return false;
        } else {
          return true;
        }
      }
      function tokenizeHelpInWhitespaceOrEmpty(initialInfo) {
        const char = initialInfo.body[initialInfo.index];
        const info = char !== " " && char !== "\n" && initialInfo.currentToken.length > 0 ? Object.assign(Object.assign({}, initialInfo), { currentToken: "", state: Empty({}), tokens: List.append(initialInfo.tokens, [WhitespaceToken({ body: initialInfo.currentToken })]) }) : initialInfo;
        const previousChar = info.index === 0 ? "" : info.body[info.index - 1];
        const isLast = info.body.length - 1 === info.index;
        const nextInfo = function() {
          switch (char) {
            case `"`: {
              return Object.assign(Object.assign({}, info), { state: InString({}), currentToken: info.currentToken + char });
            }
            case "`": {
              return Object.assign(Object.assign({}, info), { state: InFormatString({}), currentToken: info.currentToken + char });
            }
            case "(": {
              return Object.assign(Object.assign({}, info), { state: InBracket({ depth: 0 }), tokens: List.append(info.tokens, [OpenBracketToken({})]) });
            }
            case ")": {
              return Object.assign(Object.assign({}, info), { state: Empty({}), tokens: List.append(info.tokens, [CloseBracketToken({})]) });
            }
            case "[": {
              return Object.assign(Object.assign({}, info), { state: InSquareBracket({ depth: 0 }), currentToken: info.currentToken + char });
            }
            case "\n": {
              return Object.assign(Object.assign({}, info), { state: InWhitespace({}), currentToken: info.currentToken + char });
            }
            case " ": {
              return Object.assign(Object.assign({}, info), { state: InWhitespace({}), currentToken: info.currentToken + char });
            }
            case ":": {
              if (info.body[info.index + 1] === ":") {
                const token = OperatorToken({ body: "::" });
                return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, [token]), index: info.index + 1 });
              } else {
                return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, [ColonToken({})]) });
              }
              ;
            }
            case "-": {
              if (info.body[info.index + 1] === ">") {
                return info;
              } else {
                return Object.assign(Object.assign({}, info), { state: Keyword({}), currentToken: info.currentToken + char });
              }
              ;
            }
            case ">": {
              switch (previousChar) {
                case "-": {
                  return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, [ArrowToken({})]), currentToken: "" });
                }
                case "|": {
                  return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, [OperatorToken({ body: "|>" })]), currentToken: "" });
                }
                default: {
                  return Object.assign(Object.assign({}, info), { state: Keyword({}), currentToken: info.currentToken + char });
                }
              }
              ;
            }
            case ",": {
              return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, [CommaToken({})]) });
            }
            case "|": {
              if (info.body[info.index + 1] === ">" || info.body[info.index + 1] === "|") {
                return info;
              } else {
                if (previousChar === "|") {
                  return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, [OperatorToken({ body: "||" })]), currentToken: "" });
                } else {
                  return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, [PipeToken({})]) });
                }
                ;
              }
              ;
            }
            case "{": {
              if (info.body[info.index + 1] === "-") {
                return Object.assign(Object.assign({}, info), { currentToken: info.currentToken + char, state: Keyword({}) });
              } else {
                return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, [OpenCurlyBracesToken({})]), currentToken: "" });
              }
              ;
            }
            case "}": {
              return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, [CloseCurlyBracesToken({})]), currentToken: "" });
            }
            default: {
              if (isEscape(char)) {
                return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, [OperatorToken({ body: char })]), currentToken: "" });
              } else {
                const otherTokens = isLast ? checkKeywordToken(info.currentToken + char) : [];
                return Object.assign(Object.assign({}, info), { tokens: List.append(info.tokens, otherTokens), currentToken: info.currentToken + char, state: Keyword({}) });
              }
              ;
            }
          }
        }();
        return Object.assign(Object.assign({}, nextInfo), { index: nextInfo.index + 1 });
      }
      function tokenizeHelp(info) {
        const char = info.body[info.index];
        const previousChar = info.index === 0 ? "" : info.body[info.index - 1];
        const isLast = info.body.length - 1 === info.index;
        if (info.index >= info.body.length) {
          return info;
        } else {
          switch (info.state.kind) {
            case "InWhitespace": {
              return tokenizeHelpInWhitespaceOrEmpty(info);
            }
            case "Empty": {
              return tokenizeHelpInWhitespaceOrEmpty(info);
            }
            case "InString": {
              if (char === `"` && not(isEscape(previousChar))) {
                const token = StringToken({ body: info.currentToken + `"` });
                return Object.assign(Object.assign({}, info), { state: Empty({}), currentToken: "", tokens: List.append(info.tokens, [token]), index: info.index + 1 });
              } else {
                return Object.assign(Object.assign({}, info), { currentToken: info.currentToken + char, index: info.index + 1 });
              }
              ;
            }
            case "InFormatString": {
              if (char === "`" && not(isEscape(previousChar))) {
                const token = FormatStringToken({ body: info.currentToken + "`" });
                return Object.assign(Object.assign({}, info), { state: Empty({}), currentToken: "", tokens: List.append(info.tokens, [token]), index: info.index + 1 });
              } else {
                return Object.assign(Object.assign({}, info), { currentToken: info.currentToken + char, index: info.index + 1 });
              }
              ;
            }
            case "InBracket": {
              const { depth } = info.state;
              if (char === ")") {
                if (depth === 0) {
                  const otherTokens = tokenize(info.currentToken);
                  const allTokens = function(x) {
                    return List.append(x, [CloseBracketToken({})]);
                  }(List.append(info.tokens, otherTokens));
                  return Object.assign(Object.assign({}, info), { state: Empty({}), currentToken: "", tokens: allTokens, index: info.index + 1 });
                } else {
                  return Object.assign(Object.assign({}, info), { state: InBracket({ depth: depth - 1 }), currentToken: info.currentToken + ")", index: info.index + 1 });
                }
                ;
              } else {
                if (char === "(") {
                  return Object.assign(Object.assign({}, info), { state: InBracket({ depth: depth + 1 }), currentToken: info.currentToken + "(", index: info.index + 1 });
                } else {
                  return Object.assign(Object.assign({}, info), { currentToken: info.currentToken + char, index: info.index + 1 });
                }
                ;
              }
              ;
            }
            case "InSquareBracket": {
              const { depth } = info.state;
              if (char === "]") {
                if (depth === 0) {
                  const newToken = LiteralToken({ body: info.currentToken + "]" });
                  const allTokens = List.append(info.tokens, [newToken]);
                  return Object.assign(Object.assign({}, info), { state: Empty({}), currentToken: "", tokens: allTokens, index: info.index + 1 });
                } else {
                  return Object.assign(Object.assign({}, info), { state: InSquareBracket({ depth: depth - 1 }), currentToken: info.currentToken + char, index: info.index + 1 });
                }
                ;
              } else {
                if (char === "[") {
                  return Object.assign(Object.assign({}, info), { state: InSquareBracket({ depth: depth + 1 }), currentToken: info.currentToken + char, index: info.index + 1 });
                } else {
                  return Object.assign(Object.assign({}, info), { currentToken: info.currentToken + char, index: info.index + 1 });
                }
                ;
              }
              ;
            }
            case "Keyword": {
              const isWhitespace = char === "\n" || char === " ";
              if (isLast) {
                if (char === ")") {
                  const otherTokens = checkKeywordToken(info.currentToken);
                  const allTokens = function(x) {
                    return List.append(x, [CloseBracketToken({})]);
                  }(List.append(info.tokens, otherTokens));
                  return Object.assign(Object.assign({}, info), { state: Empty({}), currentToken: "", tokens: allTokens, index: info.index + 1 });
                } else {
                  const currentToken = isWhitespace ? info.currentToken : info.currentToken + char;
                  const otherTokens = checkKeywordToken(currentToken);
                  const maybeWhiteSpaceToken = isLast && isWhitespace ? [WhitespaceToken({ body: char })] : [];
                  const allTokens = function(x) {
                    return List.append(x, maybeWhiteSpaceToken);
                  }(List.append(info.tokens, otherTokens));
                  return Object.assign(Object.assign({}, info), { state: Empty({}), currentToken: "", tokens: allTokens, index: info.index + 1 });
                }
                ;
              } else {
                if (isWhitespace) {
                  const otherTokens = checkKeywordToken(info.currentToken);
                  const maybeWhiteSpaceToken = isLast ? [WhitespaceToken({ body: char })] : [];
                  const allTokens = function(x) {
                    return List.append(x, maybeWhiteSpaceToken);
                  }(List.append(info.tokens, otherTokens));
                  const currentToken = isLast ? "" : char;
                  return Object.assign(Object.assign({}, info), { state: Empty({}), currentToken, tokens: allTokens, index: info.index + 1 });
                } else {
                  switch (char) {
                    case ":": {
                      if (info.body[info.index + 1] === ":") {
                        const allTokens = List.append(info.tokens, [IdentifierToken({ body: info.currentToken }), OperatorToken({ body: "::" })]);
                        return Object.assign(Object.assign({}, info), { currentToken: "", tokens: allTokens, state: Empty({}), index: info.index + 2 });
                      } else {
                        const allTokens = List.append(info.tokens, [IdentifierToken({ body: info.currentToken }), ColonToken({})]);
                        return Object.assign(Object.assign({}, info), { currentToken: "", tokens: allTokens, state: Empty({}), index: info.index + 1 });
                      }
                      ;
                    }
                    case ",": {
                      const allTokens = List.append(info.tokens, [IdentifierToken({ body: info.currentToken }), CommaToken({})]);
                      return Object.assign(Object.assign({}, info), { currentToken: "", tokens: allTokens, state: Empty({}), index: info.index + 1 });
                    }
                    case "(": {
                      const otherTokens = checkKeywordToken(info.currentToken);
                      const allTokens = function(x) {
                        return List.append(x, [OpenBracketToken({})]);
                      }(List.append(info.tokens, otherTokens));
                      return Object.assign(Object.assign({}, info), { currentToken: "", tokens: allTokens, state: Empty({}), index: info.index + 1 });
                    }
                    case ")": {
                      const allTokens = List.append(info.tokens, [IdentifierToken({ body: info.currentToken }), CloseBracketToken({})]);
                      return Object.assign(Object.assign({}, info), { currentToken: "", tokens: allTokens, state: Empty({}), index: info.index + 1 });
                    }
                    default: {
                      return Object.assign(Object.assign({}, info), { currentToken: info.currentToken + char, index: info.index + 1 });
                    }
                  }
                  ;
                }
                ;
              }
              ;
            }
          }
          ;
        }
      }
      function tokenize(body) {
        const initialState = {
          state: Empty({}),
          currentToken: "",
          tokens: [],
          body,
          index: 0
        };
        const chars = body.split("");
        const calculatedState = List.statefulFold(function(item, state) {
          return tokenizeHelp(state);
        }, initialState, chars);
        return calculatedState.tokens;
      }
      exports.tokenize = tokenize;
      function tokenToString(token) {
        switch (token.kind) {
          case "ArrowToken": {
            return "->";
          }
          case "AssignToken": {
            return "=";
          }
          case "CloseBracketToken": {
            return ")";
          }
          case "CloseCurlyBracesToken": {
            return "}";
          }
          case "ColonToken": {
            return ":";
          }
          case "CommaToken": {
            return ",";
          }
          case "CommentToken": {
            return "--";
          }
          case "FormatStringToken": {
            const { body } = token;
            return body;
          }
          case "IdentifierToken": {
            const { body } = token;
            return body;
          }
          case "MultilineCommentToken": {
            const { body } = token;
            return body;
          }
          case "KeywordToken": {
            const { body } = token;
            return body;
          }
          case "LiteralToken": {
            const { body } = token;
            return body;
          }
          case "OpenBracketToken": {
            return "(";
          }
          case "OpenCurlyBracesToken": {
            return "{";
          }
          case "OperatorToken": {
            const { body } = token;
            return body;
          }
          case "PipeToken": {
            return "|";
          }
          case "StringToken": {
            const { body } = token;
            return body;
          }
          case "WhitespaceToken": {
            const { body } = token;
            return body;
          }
        }
      }
      function tokensToString(tokens) {
        return function(x) {
          return x.join("");
        }(List.map(tokenToString, tokens));
      }
      exports.tokensToString = tokensToString;
      function Ok(args) {
        return Object.assign({ kind: "Ok" }, args);
      }
      function Err(args) {
        return Object.assign({ kind: "Err" }, args);
      }
      function finalCompose(info) {
        if (info.error.length > 0) {
          return Err({ error: info.error[0] });
        } else {
          const flattened = List.foldl(function(x, xs) {
            return xs.concat(x);
          }, [], info.collectedInners);
          return Ok({ value: [(0, Tokens_types_kernel_1.BaseTypeToken)({ body: [info.buffer[0], ...flattened] })] });
        }
      }
      function composeType(info) {
        if (info.index >= info.buffer.length || info.error.length > 0) {
          return info;
        } else {
          const t = info.buffer[info.index];
          switch (t.kind) {
            case "OpenBracketToken": {
              if (info.depth > 0) {
                return composeType(Object.assign(Object.assign({}, info), { inner: List.append(info.inner, [t]), depth: info.depth + 1, index: info.index + 1 }));
              } else {
                return composeType(Object.assign(Object.assign({}, info), { depth: info.depth + 1, index: info.index + 1 }));
              }
              ;
            }
            case "CloseBracketToken": {
              if (info.depth === 1) {
                const innerTokenized = tokenizeType(info.inner);
                switch (innerTokenized.kind) {
                  case "Err": {
                    const { error } = innerTokenized;
                    return composeType(Object.assign(Object.assign({}, info), { error: [error] }));
                  }
                  case "Ok": {
                    const { value } = innerTokenized;
                    return composeType(Object.assign(Object.assign({}, info), { collectedInners: List.append(info.collectedInners, [value]), inner: [], depth: 0, index: info.index + 1 }));
                  }
                }
                ;
              } else {
                if (info.depth === 0) {
                  return composeType(Object.assign(Object.assign({}, info), { index: info.index + 1 }));
                } else {
                  return composeType(Object.assign(Object.assign({}, info), { index: info.index + 1, inner: List.append(info.inner, [t]), depth: info.depth - 1 }));
                }
                ;
              }
              ;
            }
            case "IdentifierToken": {
              const { body } = t;
              if (info.depth === 0) {
                const tokenized = tokenizeType(tokenize(body));
                switch (tokenized.kind) {
                  case "Err": {
                    const { error } = tokenized;
                    return composeType(Object.assign(Object.assign({}, info), { error: [error] }));
                  }
                  case "Ok": {
                    const { value } = tokenized;
                    return composeType(Object.assign(Object.assign({}, info), { index: info.index + 1, collectedInners: List.append(info.collectedInners, [value]) }));
                  }
                }
                ;
              } else {
                return composeType(Object.assign(Object.assign({}, info), { index: info.index + 1, inner: List.append(info.inner, [t]) }));
              }
              ;
            }
            case "ArrowToken": {
              if (info.depth === 0) {
                return composeType(Object.assign(Object.assign({}, info), { index: info.index + 1 }));
              } else {
                return composeType(Object.assign(Object.assign({}, info), { index: info.index + 1, inner: List.append(info.inner, [t]) }));
              }
              ;
            }
            default: {
              return composeType(Object.assign(Object.assign({}, info), { index: info.index + 1 }));
            }
          }
          ;
        }
      }
      function processTokenizeTypeInfo(info) {
        const hasOpenBracketToken = info.currentBuffer.find(function(t) {
          return t.kind === "OpenBracketToken";
        }) ? true : false;
        const isFunction = info.currentBuffer.find(function(t) {
          return t.kind === "ArrowToken";
        }) ? true : false;
        switch (info.currentBuffer.length) {
          case info.currentBuffer.length: {
            if (info.currentBuffer.length >= 1) {
              const [first, ...rest] = info.currentBuffer;
              if (hasOpenBracketToken) {
                const tokenized = first.kind === "IdentifierToken" && not(isFunction) ? finalCompose(composeType({
                  buffer: info.currentBuffer,
                  index: 1,
                  depth: 0,
                  inner: [],
                  collectedInners: [],
                  error: []
                })) : tokenizeType(info.currentBuffer);
                switch (tokenized.kind) {
                  case "Err": {
                    const { error } = tokenized;
                    return Err({ error });
                  }
                  case "Ok": {
                    const { value } = tokenized;
                    if (isFunction) {
                      return Ok({ value: List.append(info.rootTypeTokens, [(0, Tokens_types_kernel_1.FunctionTypeToken)({ body: value })]) });
                    } else {
                      return Ok({ value: List.append(info.rootTypeTokens, value) });
                    }
                    ;
                  }
                }
                ;
              } else {
                if (isFunction) {
                  const tokenized = tokenizeType(info.currentBuffer);
                  switch (tokenized.kind) {
                    case "Err": {
                      const { error } = tokenized;
                      return Err({ error });
                    }
                    case "Ok": {
                      const { value } = tokenized;
                      return Ok({ value: List.append(info.rootTypeTokens, [(0, Tokens_types_kernel_1.FunctionTypeToken)({ body: value })]) });
                    }
                  }
                  ;
                } else {
                  let innerHelp = function(tokens) {
                    switch (tokens.length) {
                      case 0: {
                        return Ok({ value: [] });
                      }
                      case tokens.length: {
                        if (tokens.length >= 1) {
                          const [x, ...rest2] = tokens;
                          const tokenized = tokenizeType([x]);
                          switch (tokenized.kind) {
                            case "Err": {
                              const { error } = tokenized;
                              return Err({ error });
                            }
                            case "Ok": {
                              const { value } = tokenized;
                              const _res832456996 = innerHelp(rest2);
                              switch (_res832456996.kind) {
                                case "Ok": {
                                  const { value: other } = _res832456996;
                                  return Ok({ value: List.append(value, other) });
                                }
                                case "Err": {
                                  const { error } = _res832456996;
                                  return Err({ error });
                                }
                              }
                              ;
                            }
                          }
                          ;
                        }
                      }
                      default: {
                        return Ok({ value: [] });
                      }
                    }
                  };
                  const inner = info.currentBuffer.length > 1 ? innerHelp(info.currentBuffer.slice(1)) : Ok({ value: [] });
                  const otherTokens = function() {
                    switch (inner.kind) {
                      case "Ok": {
                        const { value } = inner;
                        return (0, Tokens_types_kernel_1.BaseTypeToken)({ body: List.append([info.currentBuffer[0]], value) });
                      }
                      case "Err": {
                        const { error } = inner;
                        return [];
                      }
                    }
                  }();
                  switch (inner.kind) {
                    case "Err": {
                      const { error } = inner;
                      return inner;
                    }
                    case "Ok": {
                      const { value } = inner;
                      return function(x) {
                        return Ok({ value: x });
                      }(List.append(info.rootTypeTokens, otherTokens));
                    }
                  }
                  ;
                }
                ;
              }
              ;
            }
          }
          default: {
            return Ok({ value: info.rootTypeTokens });
          }
        }
      }
      function finalTokenizeType(info) {
        if (info.error.length > 0) {
          return Err({ error: info.error[0] });
        } else {
          return processTokenizeTypeInfo(info);
        }
      }
      function tokenizeTypeHelp(info) {
        if (info.index >= info.tokens.length || info.error.length > 0) {
          return info;
        } else {
          const token = info.tokens[info.index];
          const nextInfo = function() {
            switch (token.kind) {
              case "OpenBracketToken": {
                if (info.indent > 0 || info.currentBuffer.length > 0) {
                  return Object.assign(Object.assign({}, info), { index: info.index + 1, indent: info.indent + 1, currentBuffer: List.append(info.currentBuffer, [token]) });
                } else {
                  return Object.assign(Object.assign({}, info), { index: info.index + 1, indent: info.indent + 1 });
                }
                ;
              }
              case "CloseBracketToken": {
                if (info.indent > 0) {
                  return Object.assign(Object.assign({}, info), { indent: info.indent - 1, index: info.index + 1, currentBuffer: List.append(info.currentBuffer, [token]) });
                } else {
                  return Object.assign(Object.assign({}, info), { indent: info.indent - 1, index: info.index + 1 });
                }
                ;
              }
              case "ArrowToken": {
                if (info.indent === 0) {
                  const isFunction = info.currentBuffer.find(function(t) {
                    return t.kind === "ArrowToken";
                  }) ? true : false;
                  const tokenized = tokenizeType(info.currentBuffer);
                  switch (tokenized.kind) {
                    case "Err": {
                      const { error } = tokenized;
                      return Object.assign(Object.assign({}, info), { error: [error] });
                    }
                    case "Ok": {
                      const { value } = tokenized;
                      if (isFunction) {
                        return Object.assign(Object.assign({}, info), { index: info.index + 1, rootTypeTokens: List.append(info.rootTypeTokens, [(0, Tokens_types_kernel_1.FunctionTypeToken)({ body: value })]), currentBuffer: [] });
                      } else {
                        return Object.assign(Object.assign({}, info), { index: info.index + 1, rootTypeTokens: List.append(info.rootTypeTokens, value), currentBuffer: [] });
                      }
                      ;
                    }
                  }
                  ;
                } else {
                  return Object.assign(Object.assign({}, info), { index: info.index + 1, currentBuffer: List.append(info.currentBuffer, [token]) });
                }
                ;
              }
              case "IdentifierToken": {
                return Object.assign(Object.assign({}, info), { index: info.index + 1, currentBuffer: List.append(info.currentBuffer, [token]) });
              }
              case "StringToken": {
                return Object.assign(Object.assign({}, info), { index: info.index + 1, currentBuffer: List.append(info.currentBuffer, [token]) });
              }
              default: {
                return Object.assign(Object.assign({}, info), { index: info.index + 1 });
              }
            }
          }();
          return nextInfo;
        }
      }
      function tokenizeType(tokens) {
        const initialState = {
          rootTypeTokens: [],
          currentBuffer: [],
          indent: 0,
          index: 0,
          tokens,
          error: []
        };
        const calculatedState = List.statefulFold(function(item, state) {
          return tokenizeTypeHelp(state);
        }, initialState, tokens);
        return finalTokenizeType(calculatedState);
      }
      exports.tokenizeType = tokenizeType;
      function typeTokenToString(token) {
        switch (token.kind) {
          case "ArrowToken": {
            return "->";
          }
          case "BaseTypeToken": {
            return rootTypeTokensToString([token]);
          }
          case "CloseBracketToken": {
            return ")";
          }
          case "FunctionTypeToken": {
            return rootTypeTokensToString([token]);
          }
          case "IdentifierToken": {
            return token.body;
          }
          case "OpenBracketToken": {
            return "(";
          }
          case "StringToken": {
            return `${token.body}`;
          }
        }
      }
      function isNested(token) {
        switch (token.kind) {
          case "BaseTypeToken": {
            const { body } = token;
            return body.length !== 1;
          }
          case "FunctionTypeToken": {
            return true;
          }
        }
      }
      function rootTypeTokenToString(token) {
        switch (token.kind) {
          case "BaseTypeToken": {
            let valueToString = function(value) {
              switch (value.kind) {
                case "BaseTypeToken": {
                  const { body } = value;
                  const inner = List.map(typeTokenToString, body);
                  if (isNested(value)) {
                    return function(x) {
                      return x.join(" ");
                    }(function(x) {
                      return List.append(x, [typeTokenToString(CloseBracketToken({}))]);
                    }(List.append([typeTokenToString(OpenBracketToken({}))], inner)));
                  } else {
                    return function(x) {
                      return x.join(" ");
                    }(inner);
                  }
                  ;
                }
                default: {
                  return typeTokenToString(value);
                }
              }
            };
            return function(x) {
              return x.join(" ");
            }(List.map(valueToString, token.body));
          }
          case "FunctionTypeToken": {
            let valueToString = function(value, index) {
              if (index < token.body.length - 1) {
                return function(x) {
                  return x.join(" ");
                }([typeTokenToString(value), typeTokenToString(ArrowToken({}))]);
              } else {
                return function(x) {
                  return x.join(" ");
                }([typeTokenToString(value)]);
              }
            };
            const mapped = List.indexedMap(valueToString, token.body);
            return function(xs) {
              return xs.join(" ");
            }(function(xs) {
              return List.append(xs, [typeTokenToString(CloseBracketToken({}))]);
            }(List.append([typeTokenToString(OpenBracketToken({}))], mapped)));
          }
        }
      }
      function rootTypeTokensToString(tokens) {
        const arrow = typeTokenToString(ArrowToken({}));
        return function(x) {
          return x.join(` ${arrow} `);
        }(List.map(rootTypeTokenToString, tokens));
      }
      exports.rootTypeTokensToString = rootTypeTokensToString;
    }
  });

  // node_modules/derw/build/errors/distance.js
  var require_distance = __commonJS({
    "node_modules/derw/build/errors/distance.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.suggestName = void 0;
      function levDistance(a, b) {
        if (a.length === 0)
          return b.length;
        if (b.length === 0)
          return a.length;
        if (a.toLowerCase() === b.toLowerCase())
          return 0;
        const matrix = [];
        let i;
        for (i = 0; i <= b.length; i += 1) {
          matrix[i] = [i];
        }
        let j;
        for (j = 0; j <= a.length; j += 1) {
          matrix[0][j] = j;
        }
        for (i = 1; i <= b.length; i += 1) {
          for (j = 1; j <= a.length; j += 1) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
              matrix[i][j] = matrix[i - 1][j - 1];
            } else {
              matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
            }
          }
        }
        return matrix[b.length][a.length];
      }
      function sortByDistance(list) {
        return list.slice(0).sort((a, b) => {
          return a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0;
        });
      }
      function suggestName(nameToFind, alternatives) {
        const possibleMatches = alternatives.map((name) => ({
          name,
          distance: levDistance(name, nameToFind)
        })).filter((alternative) => alternative.distance < 3);
        return sortByDistance(possibleMatches).map((alternative) => alternative.name);
      }
      exports.suggestName = suggestName;
    }
  });

  // node_modules/derw/build/type_checking.js
  var require_type_checking = __commonJS({
    "node_modules/derw/build/type_checking.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.validateType = exports.getValuesInTopLevelScope = exports.findReplacement = exports.validateObjectLiteralType = exports.validateAllCasesCovered = exports.getCasesFromFunction = exports.inferType = exports.isSameType = void 0;
      var result_1 = require_result();
      var builtins_1 = require_builtins();
      var distance_1 = require_distance();
      var types_1 = require_types();
      function isSameGenericType(first, second, topLevel) {
        if (topLevel)
          return true;
        return true;
      }
      function isSameFixedType(first, second, topLevel) {
        if (first.name === "any" && first.args.length === 0 || second.name === "any" && second.args.length === 0) {
          return true;
        }
        if (first.args.length !== second.args.length) {
          return false;
        }
        if (first.name !== second.name)
          return false;
        for (var i = 0; i < first.args.length; i++) {
          if (!isSameType(first.args[i], second.args[i], topLevel)) {
            return false;
          }
        }
        return true;
      }
      function isSameFunctionType(first, second, topLevel) {
        if (first.args.length !== second.args.length) {
          return false;
        }
        for (var i = 0; i < first.args.length; i++) {
          if (!isSameType(first.args[i], second.args[i], topLevel)) {
            return false;
          }
        }
        return true;
      }
      function doesFunctionTypeContainType(first, second, topLevel) {
        switch (second.kind) {
          case "GenericType": {
            for (const arg of first.args) {
              if (isSameType(arg, second, topLevel)) {
                return true;
              }
            }
          }
          case "FixedType": {
            for (const arg of first.args) {
              if (isSameType(arg, second, topLevel)) {
                return true;
              }
            }
          }
        }
        return false;
      }
      function isSameObjectLiteralType(first, second) {
        const processedNames = [];
        for (const firstPropertyName of Object.keys(first.properties)) {
          if (second.properties[firstPropertyName]) {
            if (!isSameType(first.properties[firstPropertyName], second.properties[firstPropertyName], false)) {
              return false;
            }
            processedNames.push(firstPropertyName);
          } else {
            return false;
          }
        }
        for (const secondPropertyName of Object.keys(second.properties)) {
          if (!processedNames.includes(secondPropertyName)) {
            return false;
          }
        }
        return true;
      }
      function isSameObjectLiteralTypeAlias(objectLiteral, expectedType, typedBlocks) {
        const expectedTypeAlias = getTypeAlias(expectedType, typedBlocks);
        if (expectedTypeAlias.kind === "Err")
          return false;
        const typeAlias = expectedTypeAlias.value;
        const processedNames = [];
        for (const property of typeAlias.properties) {
          if (objectLiteral.properties[property.name]) {
            if (!isSameType(property.type, objectLiteral.properties[property.name], false)) {
              return false;
            } else {
              processedNames.push(property.name);
            }
          } else {
            return false;
          }
        }
        for (const property of Object.keys(objectLiteral.properties)) {
          if (!processedNames.includes(property)) {
            return false;
          }
        }
        return true;
      }
      function tagToFixedType(tag) {
        return (0, types_1.FixedType)(tag.name, tag.args.filter((tag2) => tag2.type.kind === "GenericType").map((arg) => arg.type));
      }
      function isATag(type_, typedBlocks) {
        for (const block of typedBlocks) {
          switch (block.kind) {
            case "UnionType": {
              for (const tag of block.tags) {
                const tagType = tagToFixedType(tag);
                if (isSameType(type_, tagType, false))
                  return (0, result_1.Ok)(block.type);
              }
            }
          }
        }
        return (0, result_1.Err)(null);
      }
      function isSameType(first, second, topLevel, typedBlocks = []) {
        if (first.kind === "ObjectLiteralType" && second.kind === "ObjectLiteralType") {
          return isSameObjectLiteralType(first, second);
        }
        if (first.kind !== "FunctionType" && first.kind !== "ObjectLiteralType" && first.name === "any" || second.kind !== "FunctionType" && second.kind !== "ObjectLiteralType" && second.name === "any") {
          return true;
        }
        if (first.kind === "ObjectLiteralType" && second.kind === "GenericType" || second.kind === "ObjectLiteralType" && first.kind === "GenericType") {
          return true;
        }
        if (first.kind === "ObjectLiteralType" || second.kind === "ObjectLiteralType") {
          return false;
        }
        if (first.kind !== second.kind) {
          if (first.kind === "FunctionType" && second.kind !== "FunctionType") {
            return doesFunctionTypeContainType(first, second, topLevel);
          }
          if (first.kind === "FixedType" && second.kind === "GenericType") {
            return true;
          }
          if (second.kind === "FixedType" && first.kind === "GenericType") {
            return true;
          }
          return false;
        }
        switch (first.kind) {
          case "FixedType": {
            if (first.name.indexOf(".") > -1) {
              const split = first.name.split(".");
              first = Object.assign(Object.assign({}, first), { name: split[split.length - 1] });
            }
            second = second;
            if (second.name.indexOf(".") > -1) {
              const split = second.name.split(".");
              second = Object.assign(Object.assign({}, second), { name: split[split.length - 1] });
            }
            if (isSameFixedType(first, second, topLevel)) {
              return true;
            }
            const isFirstATag = isATag(first, typedBlocks);
            const isSecondATag = isATag(second, typedBlocks);
            if (isFirstATag.kind === "Ok") {
              if (isSameType(isFirstATag.value, second, topLevel, typedBlocks)) {
                return true;
              }
            }
            if (isSecondATag.kind === "Ok") {
              if (isSameType(first, isSecondATag.value, topLevel, typedBlocks)) {
                return true;
              }
            }
            return false;
          }
          case "GenericType": {
            return isSameGenericType(first, second, topLevel);
          }
          case "FunctionType": {
            return isSameFunctionType(first, second, topLevel);
          }
        }
      }
      exports.isSameType = isSameType;
      function inferValue(value, expectedType, typedBlocks, imports, valuesInScope) {
        if (parseInt(value.body, 10)) {
          return (0, types_1.FixedType)("number", []);
        }
        if (value.body === "true" || value.body === "false") {
          return (0, types_1.FixedType)("boolean", []);
        }
        if (value.body === "toString") {
          if (valuesInScope[`_${value.body}`]) {
            return valuesInScope[`_${value.body}`];
          }
        } else {
          if (valuesInScope[value.body]) {
            return valuesInScope[value.body];
          }
        }
        return (0, types_1.FixedType)("any", []);
      }
      function inferStringValue(value) {
        return (0, types_1.FixedType)("string", []);
      }
      function inferFormatStringValue(value) {
        return (0, types_1.FixedType)("string", []);
      }
      function reduceTypes(types) {
        return types.reduce((uniques, type) => {
          if (uniques.filter((unique) => isSameType(unique, type, false)).length === 0) {
            uniques.push(type);
          }
          return uniques;
        }, []);
      }
      function inferListValue(value, expectedType, typedBlocks, imports, valuesInScope) {
        if (value.items.length === 0)
          return (0, result_1.Ok)((0, types_1.FixedType)("List", [(0, types_1.FixedType)("any", [])]));
        let types = [];
        let actualExpectedType = (0, types_1.FixedType)("_Inferred", []);
        if (expectedType.kind === "FixedType" && expectedType.name === "List" && expectedType.args.length > 0) {
          actualExpectedType = expectedType.args[0];
        }
        for (const item of value.items) {
          const inferred = inferType(item, actualExpectedType, typedBlocks, imports, valuesInScope);
          if (inferred.kind === "Err")
            return inferred;
          types.push(inferred.value);
        }
        const uniqueTypes = reduceTypes(types);
        return (0, result_1.Ok)((0, types_1.FixedType)("List", uniqueTypes));
      }
      function inferListRange(value) {
        return (0, types_1.FixedType)("List", [(0, types_1.FixedType)("number", [])]);
      }
      function objectLiteralTypeAlias(value, expectedType, typedBlocks, imports, valuesInScope) {
        const expectedTypeAlias = getTypeAlias(expectedType, typedBlocks);
        const typeAlias = (0, types_1.TypeAlias)((0, types_1.FixedType)("Inferred", []), value.fields.map((field) => {
          const listOfExpected = expectedTypeAlias.kind === "Ok" ? expectedTypeAlias.value.properties.filter((prop) => prop.name === field.name) : [];
          const expected = listOfExpected.length === 0 ? (0, types_1.FixedType)("_Inferred", []) : listOfExpected[0].type;
          const inferred = inferType(field.value, expected, typedBlocks, imports, valuesInScope);
          if (inferred.kind === "Err") {
            return (0, types_1.Property)(field.name, (0, types_1.GenericType)("any"));
          }
          return (0, types_1.Property)(field.name, inferred.value);
        }));
        return typeAlias;
      }
      function objectLiteralType(typeAlias) {
        const fields = {};
        for (const prop of typeAlias.properties) {
          fields[prop.name] = prop.type;
        }
        return (0, types_1.ObjectLiteralType)(fields);
      }
      function typeAliasFromObjectLiteralType(objectLiteral) {
        const fields = [];
        for (const name of Object.keys(objectLiteral.properties)) {
          const type_ = objectLiteral.properties[name];
          fields.push((0, types_1.Property)(name, type_));
        }
        return (0, types_1.TypeAlias)((0, types_1.FixedType)("Inferred", []), fields);
      }
      function inferObjectLiteral(value, expectedType, typedBlocks, imports, valuesInScope) {
        if (value.base !== null) {
          return (0, result_1.Ok)((0, types_1.FixedType)("any", []));
        }
        const typeAlias = objectLiteralTypeAlias(value, expectedType, typedBlocks, imports, valuesInScope);
        if (expectedType.kind !== "FixedType" || expectedType.name === "_Inferred") {
          return (0, result_1.Ok)(objectLiteralType(typeAlias));
        }
        for (const block of typedBlocks) {
          if (block.kind != "TypeAlias" || block.properties.length !== typeAlias.properties.length || expectedType.name !== block.type.name) {
            continue;
          }
          let blockMatches = true;
          for (const inferredProperty of typeAlias.properties) {
            const hasMatchingBlockProperty = block.properties.filter((prop) => {
              return prop.name === inferredProperty.name && isSameType(prop.type, inferredProperty.type, false);
            }).length > 0;
            if (!hasMatchingBlockProperty) {
              blockMatches = false;
              break;
            }
          }
          if (blockMatches) {
            return (0, result_1.Ok)(block.type);
          }
        }
        return (0, result_1.Ok)(objectLiteralType(typeAlias));
      }
      function inferIfStatement(value, expectedType, typedBlocks, imports, valuesInScope) {
        const ifBranch = inferType(value.ifBody, expectedType, typedBlocks, imports, valuesInScope);
        const elseBranch = inferType(value.elseBody, expectedType, typedBlocks, imports, valuesInScope);
        if (ifBranch.kind === "Err")
          return ifBranch;
        if (elseBranch.kind === "Err")
          return elseBranch;
        if (isSameType(ifBranch.value, elseBranch.value, false))
          return (0, result_1.Ok)(ifBranch.value);
        return (0, result_1.Err)(`Conflicting types: ${typeToString(ifBranch.value)}, ${typeToString(elseBranch.value)}`);
      }
      function inferBranch(value, expectedType, typedBlocks, imports, valuesInScope) {
        return inferType(value.body, expectedType, typedBlocks, imports, valuesInScope);
      }
      function inferCaseStatement(value, expectedType, typedBlocks, imports, valuesInScope) {
        const typesToReduce = [];
        for (const branch of value.branches) {
          const inf = inferBranch(branch, expectedType, typedBlocks, imports, valuesInScope);
          if (inf.kind === "Err")
            return inf;
          typesToReduce.push(inf.value);
        }
        const branches = reduceTypes(typesToReduce);
        if (branches.length === 1)
          return (0, result_1.Ok)(branches[0]);
        return (0, result_1.Err)(`Conflicting types: ${branches.map(typeToString).join(", ")}`);
      }
      function inferAddition(value, expectedType, typedBlocks, imports, valuesInScope) {
        const left = inferType(value.left, expectedType, typedBlocks, imports, valuesInScope);
        const right = inferType(value.right, expectedType, typedBlocks, imports, valuesInScope);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        if (!isSameType(left.value, right.value, false))
          return (0, result_1.Err)(`Mismatching types between ${typeToString(left.value)} and ${typeToString(right.value)}`);
        return left;
      }
      function inferSubtraction(value, expectedType, typedBlocks, imports, valuesInScope) {
        const left = inferType(value.left, expectedType, typedBlocks, imports, valuesInScope);
        const right = inferType(value.right, expectedType, typedBlocks, imports, valuesInScope);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        if (!isSameType(left.value, right.value, false))
          return (0, result_1.Err)(`Mismatching types between ${typeToString(left.value)} and ${typeToString(right.value)}`);
        return left;
      }
      function inferMultiplication(value, expectedType, typedBlocks, imports, valuesInScope) {
        const left = inferType(value.left, expectedType, typedBlocks, imports, valuesInScope);
        const right = inferType(value.right, expectedType, typedBlocks, imports, valuesInScope);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        if (!isSameType(left.value, right.value, false))
          return (0, result_1.Err)(`Mismatching types between ${typeToString(left.value)} and ${typeToString(right.value)}`);
        return left;
      }
      function inferDivision(value, expectedType, typedBlocks, imports, valuesInScope) {
        const left = inferType(value.left, expectedType, typedBlocks, imports, valuesInScope);
        const right = inferType(value.right, expectedType, typedBlocks, imports, valuesInScope);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        if (!isSameType(left.value, right.value, false))
          return (0, result_1.Err)(`Mismatching types between ${typeToString(left.value)} and ${typeToString(right.value)}`);
        return left;
      }
      function inferMod(value, expectedType, typedBlocks, imports, valuesInScope) {
        const left = inferType(value.left, expectedType, typedBlocks, imports, valuesInScope);
        const right = inferType(value.right, expectedType, typedBlocks, imports, valuesInScope);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        if (!isSameType(left.value, right.value, false))
          return (0, result_1.Err)(`Mismatching types between ${typeToString(left.value)} and ${typeToString(right.value)}`);
        return left;
      }
      function inferLeftPipe(value, expectedType, typedBlocks, imports, valuesInScope) {
        const right = inferType(value.right, expectedType, typedBlocks, imports, valuesInScope);
        return right;
      }
      function inferRightPipe(value, expectedType, typedBlocks, imports, valuesInScope) {
        const left = inferType(value.left, expectedType, typedBlocks, imports, valuesInScope);
        return left;
      }
      function getTypeAliasAtPath(value, expectedType, typedBlocks, imports, valuesInScope) {
        let currentType = valuesInScope[value.path[0]];
        if (!currentType)
          return (0, result_1.Err)("");
        let currentTypeAlias = getTypeAlias(currentType, typedBlocks);
        for (const path of value.path.slice(1)) {
          if (currentTypeAlias.kind === "Err")
            return (0, result_1.Err)("");
          let found = false;
          for (const prop of currentTypeAlias.value.properties) {
            if (prop.name === path) {
              currentType = prop.type;
              found = true;
              break;
            }
          }
          if (!found) {
            return (0, result_1.Err)("");
          }
          currentTypeAlias = getTypeAlias(currentType, typedBlocks);
        }
        if (currentTypeAlias.kind === "Err")
          return (0, result_1.Err)("");
        return (0, result_1.Ok)(currentTypeAlias.value);
      }
      function inferModuleReference(value, expectedType, typedBlocks, imports, valuesInScope) {
        if (value.path.length > 0) {
          const isAVariablePath = value.path[0][0].toLowerCase() === value.path[0][0];
          if (isAVariablePath && value.value.kind === "Value") {
            const typeAlias = getTypeAliasAtPath(value, expectedType, typedBlocks, imports, valuesInScope);
            if (typeAlias.kind === "Ok") {
              for (const prop of typeAlias.value.properties) {
                if (prop.name === value.value.body) {
                  return (0, result_1.Ok)(prop.type);
                }
              }
            }
          }
        }
        return (0, result_1.Ok)((0, types_1.FixedType)("any", []));
      }
      function inferFunctionCall(value) {
        return (0, types_1.FixedType)("any", []);
      }
      function inferLambda(value) {
        return (0, types_1.FixedType)("any", []);
      }
      function inferLambdaCall(value) {
        return (0, types_1.FixedType)("any", []);
      }
      function tagNames(typedBlocks) {
        const names = [];
        for (const block of typedBlocks) {
          switch (block.kind) {
            case "TypeAlias": {
              break;
            }
            case "UnionType": {
              for (const tag of block.tags) {
                names.push(tag.name);
              }
              break;
            }
            case "UnionUntaggedType": {
              break;
            }
          }
        }
        return names;
      }
      function replaceGenerics(type_, replacements) {
        if (type_.kind === "FunctionType" || type_.kind === "ObjectLiteralType" || type_.kind === "GenericType") {
          return type_;
        }
        return Object.assign(Object.assign({}, type_), { args: type_.args.map((arg) => {
          if (arg.kind === "GenericType" && arg.name in replacements) {
            return replacements[arg.name];
          } else {
            return arg;
          }
        }) });
      }
      function inferConstructor(value, expectedType, typedBlocks, imports, valuesInScope) {
        let seenNameInOtherBlock = false;
        for (const block of typedBlocks) {
          if (block.kind === "UnionType") {
            for (const tag of block.tags) {
              if (value.constructor === tag.name) {
                const valid = validateConstructor(value.pattern, expectedType, tag, block, typedBlocks, imports, valuesInScope);
                const inferredGenericTypes = {};
                for (const arg of tag.args) {
                  if (arg.type.kind === "GenericType") {
                    for (const field of value.pattern.fields) {
                      if (arg.name === field.name) {
                        const fieldIsValid = inferType(field.value, arg.type, typedBlocks, imports, valuesInScope);
                        if (fieldIsValid.kind === "Ok") {
                          if (inferredGenericTypes[arg.type.name] !== fieldIsValid.value) {
                            inferredGenericTypes[arg.type.name] = fieldIsValid.value;
                          }
                        }
                      }
                    }
                  }
                }
                if (valid.kind === "Err")
                  return valid;
                return (0, result_1.Ok)(replaceGenerics(block.type, inferredGenericTypes));
              }
            }
          } else if (block.kind === "TypeAlias") {
            if (value.constructor === block.type.name) {
              seenNameInOtherBlock = true;
            }
          }
        }
        if (isImportedConstructor(value, imports)) {
          return (0, result_1.Ok)((0, types_1.GenericType)("any"));
        }
        const suggestions = (0, distance_1.suggestName)(value.constructor, tagNames(typedBlocks));
        const suggestionsErrorMessage = suggestions.length === 0 ? "" : `
Perhaps you meant one of these? ${suggestions.join(", ")}`;
        const hasBeenSeenErrorMesssage = seenNameInOtherBlock ? `
${value.constructor} refers to a type alias, not a union type constructor.` : "";
        return (0, result_1.Err)(`Did not find constructor ${value.constructor} in scope.${hasBeenSeenErrorMesssage}${suggestionsErrorMessage}`);
      }
      function inferEquality(value) {
        return (0, types_1.FixedType)("boolean", []);
      }
      function inferInEquality(value) {
        return (0, types_1.FixedType)("boolean", []);
      }
      function inferLessThan(value) {
        return (0, types_1.FixedType)("boolean", []);
      }
      function inferLessThanOrEqual(value) {
        return (0, types_1.FixedType)("boolean", []);
      }
      function inferGreaterThan(value) {
        return (0, types_1.FixedType)("boolean", []);
      }
      function inferGreaterThanOrEqual(value) {
        return (0, types_1.FixedType)("boolean", []);
      }
      function inferAnd(value) {
        return (0, types_1.FixedType)("boolean", []);
      }
      function inferOr(value) {
        return (0, types_1.FixedType)("boolean", []);
      }
      function inferListPrepend(value, expectedType, typedBlocks, imports, valuesInScope) {
        const leftInfer = inferType(value.left, expectedType, typedBlocks, imports, valuesInScope);
        const rightInfer = inferType(value.right, expectedType, typedBlocks, imports, valuesInScope);
        if (leftInfer.kind === "Err") {
          if (value.left.kind === "ObjectLiteral") {
            const err = validateObjectLiteral(value.left, (0, types_1.FixedType)("_Inferred", []), typedBlocks, imports, valuesInScope);
            if (err.kind === "Err")
              return err;
          }
          return leftInfer;
        }
        if (rightInfer.kind === "Err")
          return rightInfer;
        if (rightInfer.value.kind === "GenericType" || rightInfer.value.kind === "FixedType" && rightInfer.value.name === "any")
          return (0, result_1.Ok)((0, types_1.FixedType)("List", [(0, types_1.GenericType)("any")]));
        if (rightInfer.value.kind === "FunctionType") {
          return (0, result_1.Err)("Inferred list on right hand side of :: to be a function, not a list");
        }
        if (rightInfer.value.kind === "ObjectLiteralType") {
          return (0, result_1.Err)("Inferred list on right hand side of :: to be an object literal, not a list");
        }
        if (rightInfer.value.name === "List" && rightInfer.value.args.length > 0) {
          const isEmptyList = value.right.kind === "ListValue" && value.right.items.length === 0;
          if (isEmptyList) {
            return (0, result_1.Ok)((0, types_1.FixedType)("List", [leftInfer.value]));
          }
          const listElementType = rightInfer.value.args[0];
          if (isSameType(leftInfer.value, listElementType, false)) {
            return (0, result_1.Ok)(rightInfer.value);
          }
          return (0, result_1.Err)(`Invalid types in :: - lefthand (${typeToString(leftInfer.value)}) must match elements of righthand (${typeToString(listElementType)})`);
        }
        return (0, result_1.Err)(`Expected list on righthand side of :: but got ${typeToString(rightInfer.value)}.`);
      }
      function inferType(expression, expectedType, typedBlocks, imports, valuesInScope) {
        switch (expression.kind) {
          case "Value":
            return (0, result_1.Ok)(inferValue(expression, expectedType, typedBlocks, imports, valuesInScope));
          case "StringValue":
            return (0, result_1.Ok)(inferStringValue(expression));
          case "FormatStringValue":
            return (0, result_1.Ok)(inferFormatStringValue(expression));
          case "ListValue":
            return inferListValue(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "ListRange":
            return (0, result_1.Ok)(inferListRange(expression));
          case "ObjectLiteral":
            return inferObjectLiteral(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "IfStatement":
            return inferIfStatement(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "CaseStatement":
            return inferCaseStatement(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "Addition":
            return inferAddition(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "Subtraction":
            return inferSubtraction(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "Multiplication":
            return inferMultiplication(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "Division":
            return inferDivision(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "Mod":
            return inferMod(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "And":
            return (0, result_1.Ok)(inferAnd(expression));
          case "Or":
            return (0, result_1.Ok)(inferOr(expression));
          case "ListPrepend":
            return inferListPrepend(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "LeftPipe":
            return inferLeftPipe(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "RightPipe":
            return inferRightPipe(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "ModuleReference":
            return inferModuleReference(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "FunctionCall":
            return (0, result_1.Ok)(inferFunctionCall(expression));
          case "Lambda":
            return (0, result_1.Ok)(inferLambda(expression));
          case "LambdaCall":
            return (0, result_1.Ok)(inferLambdaCall(expression));
          case "Constructor":
            return inferConstructor(expression, expectedType, typedBlocks, imports, valuesInScope);
          case "Equality":
            return (0, result_1.Ok)(inferEquality(expression));
          case "InEquality":
            return (0, result_1.Ok)(inferInEquality(expression));
          case "LessThan":
            return (0, result_1.Ok)(inferLessThan(expression));
          case "LessThanOrEqual":
            return (0, result_1.Ok)(inferLessThanOrEqual(expression));
          case "GreaterThan":
            return (0, result_1.Ok)(inferGreaterThan(expression));
          case "GreaterThanOrEqual":
            return (0, result_1.Ok)(inferGreaterThanOrEqual(expression));
        }
      }
      exports.inferType = inferType;
      function typeToString(type) {
        switch (type.kind) {
          case "GenericType": {
            return type.name;
          }
          case "FixedType": {
            const typeArgs = type.args.length === 0 ? "" : " (" + type.args.map(typeToString).join(" ") + ")";
            return `${type.name}${typeArgs}`.trim();
          }
          case "FunctionType": {
            return type.args.map(typeToString).join("->");
          }
          case "ObjectLiteralType": {
            const out = [];
            for (const name of Object.keys(type.properties)) {
              out.push(`${name}: ${typeToString(type.properties[name])}`);
            }
            return "{ " + out.join(", ") + " }";
          }
        }
      }
      function typeExistsInNamespace(type, blocks, imports) {
        if (type.kind === "FunctionType")
          return true;
        if (type.kind === "ObjectLiteralType")
          return true;
        if ((0, builtins_1.isBuiltinType)(type.name))
          return true;
        if (type.name === "List")
          return true;
        if (type.kind === "GenericType")
          return true;
        for (const block of blocks) {
          if (isSameType(type, block.type, true))
            return true;
          switch (block.kind) {
            case "UnionType": {
              for (const tag of block.tags) {
                if (isSameType(type, tagToFixedType(tag), true))
                  return true;
              }
            }
          }
        }
        for (const import_ of imports) {
          for (const module2 of import_.modules) {
            for (const exposed of module2.exposing) {
              if (type.name === exposed)
                return true;
            }
            if (type.name.indexOf(".") > -1 && module2.alias.kind === "Just" && type.name.split(".")[0] === module2.alias.value) {
              return true;
            }
          }
        }
        return false;
      }
      function finalExpressions(expression) {
        switch (expression.kind) {
          case "Value":
            return [];
          case "StringValue":
            return [expression.body];
          case "FormatStringValue":
            return [];
          case "ListValue":
            return [];
          case "ListRange":
            return [];
          case "ObjectLiteral":
            return [];
          case "IfStatement":
            return finalExpressions(expression.ifBody).concat(finalExpressions(expression.elseBody));
          case "CaseStatement":
            let expressions = [];
            for (const branch of expression.branches) {
              expressions = expressions.concat(finalExpressions(branch.body));
            }
            return expressions;
          case "Addition":
            return [];
          case "Subtraction":
            return [];
          case "Multiplication":
            return [];
          case "Division":
            return [];
          case "Mod":
            return [];
          case "And":
            return [];
          case "Or":
            return [];
          case "ListPrepend":
            return [];
          case "LeftPipe":
            return [];
          case "RightPipe":
            return [];
          case "ModuleReference":
            return [];
          case "FunctionCall":
            return [];
          case "Lambda":
            return [];
          case "LambdaCall":
            return [];
          case "Constructor":
            return [];
          case "Equality":
            return [];
          case "InEquality":
            return [];
          case "LessThan":
            return [];
          case "LessThanOrEqual":
            return [];
          case "GreaterThan":
            return [];
          case "GreaterThanOrEqual":
            return [];
        }
      }
      function allFinalExpressions(block) {
        switch (block.kind) {
          case "Const": {
            return finalExpressions(block.value);
          }
          case "Function": {
            return finalExpressions(block.body);
          }
          default: {
            return [];
          }
        }
      }
      function validateAllBranchesCovered(typedBlocks, containingBlock, expression) {
        const hasDefault = expression.branches.filter((b) => b.pattern.kind === "Default").length > 0;
        const casePattern = expression.predicate;
        let predicateType = null;
        if (casePattern.kind === "Value") {
          if (containingBlock.kind === "Function") {
            for (const arg of containingBlock.args) {
              if (arg.kind === "FunctionArg") {
                if (arg.name === casePattern.body) {
                  predicateType = arg.type;
                }
              }
            }
          }
        }
        if (predicateType && (predicateType === null || predicateType === void 0 ? void 0 : predicateType.kind) === "FixedType") {
          const matchingBlocks = typedBlocks.filter((b) => isSameType(b.type, predicateType, false));
          if (matchingBlocks.length > 0) {
            const matchingBlock = matchingBlocks[0];
            if (matchingBlock.kind === "UnionUntaggedType") {
              const strings = matchingBlock.values.map((s) => s.body);
              const seenStrings = [];
              for (const branch of expression.branches) {
                if (branch.pattern.kind === "StringValue") {
                  seenStrings.push(branch.pattern.body);
                }
              }
              const missingBranches = strings.filter((s) => seenStrings.indexOf(s) === -1);
              const extraBranches = seenStrings.filter((s) => strings.indexOf(s) === -1);
              let errors = [];
              if (missingBranches.length > 0 && !hasDefault) {
                errors.push(`All possible branches of a untagged union must be covered. I expected a branch for ${missingBranches.map((s) => `"${s}"`).join(" | ")} but they were missing. If you don't need one, have a default branch`);
              }
              if (extraBranches.length > 0) {
                errors.push(`I got too many branches. The branches for ${extraBranches.map((s) => `"${s}"`).join(" | ")} aren't part of the untagged union so will never be true. Remove them.`);
              }
              if (errors.length > 0) {
                errors = [
                  `The case statement did not match the untagged union ${typeToString(predicateType)}`,
                  ...errors
                ];
                return (0, result_1.Err)(errors.join("\n"));
              }
              return (0, result_1.Ok)(true);
            } else if (matchingBlock.kind === "UnionType") {
              const names = matchingBlock.tags.map((t) => t.name);
              const seenNames = [];
              for (const branch of expression.branches) {
                if (branch.pattern.kind === "Destructure") {
                  seenNames.push(branch.pattern.constructor);
                }
              }
              const missingBranches = names.filter((s) => seenNames.indexOf(s) === -1);
              const extraBranches = seenNames.filter((s) => names.indexOf(s) === -1);
              let errors = [];
              if (missingBranches.length > 0 && !hasDefault) {
                errors.push(`All possible branches of a union must be covered. I expected a branch for ${missingBranches.join(" | ")} but they were missing. If you don't need one, have a default branch`);
              }
              if (extraBranches.length > 0) {
                errors.push(`I got too many branches. The branches for ${extraBranches.join(" | ")} aren't part of the union so will never be true. Remove them.`);
              }
              if (errors.length > 0) {
                errors = [
                  `The case statement did not match the union ${typeToString(predicateType)}`,
                  ...errors
                ];
                return (0, result_1.Err)(errors.join("\n"));
              }
              return (0, result_1.Ok)(true);
            }
          }
        }
        return (0, result_1.Ok)(true);
      }
      function getCasesFromFunction(block) {
        const body = block.body;
        const statements = [];
        if (body.kind === "CaseStatement")
          statements.push(body);
        return statements;
      }
      exports.getCasesFromFunction = getCasesFromFunction;
      function validateAllCasesCovered(block, typedBlocks) {
        if (block.kind !== "Function") {
          return [];
        }
        const cases = getCasesFromFunction(block);
        const invalidBranches = [];
        for (const case_ of cases) {
          const valid = validateAllBranchesCovered(typedBlocks, block, case_);
          if (valid.kind === "Err") {
            invalidBranches.push(valid.error);
          }
        }
        return invalidBranches;
      }
      exports.validateAllCasesCovered = validateAllCasesCovered;
      function validateObjectLiteralType(objectLiteralType2, expectedType, typedBlocks, imports) {
        const typeAlias = typeAliasFromObjectLiteralType(objectLiteralType2);
        if (expectedType.kind !== "FixedType")
          return (0, result_1.Ok)(null);
        for (const typeBlock of typedBlocks) {
          if (typeBlock.kind === "UnionType" || typeBlock.kind === "UnionUntaggedType" || typeBlock.type.name !== expectedType.name)
            continue;
          const missingPropertyFromTypeAlias = [];
          const addedProperties = [];
          const incorrectProperties = [];
          for (const property of typeAlias.properties) {
            let found = false;
            for (const typeProperty of typeBlock.properties) {
              if (property.name === typeProperty.name) {
                if (isImportedType(typeProperty.type, imports) || isImportedType(property.type, imports)) {
                  found = true;
                  continue;
                } else if (!isSameType(property.type, typeProperty.type, false)) {
                  incorrectProperties.push(`${property.name}: Expected ${typeToString(typeProperty.type)} but got ${typeToString(property.type)}`);
                }
                found = true;
                break;
              }
            }
            if (!found) {
              addedProperties.push(property);
            }
          }
          for (const typeProperty of typeBlock.properties) {
            let found = false;
            for (const property of typeAlias.properties) {
              if (property.name === typeProperty.name) {
                found = true;
                break;
              }
            }
            if (!found) {
              missingPropertyFromTypeAlias.push(typeProperty);
            }
          }
          if (missingPropertyFromTypeAlias.length > 0 || addedProperties.length > 0 || incorrectProperties.length > 0) {
            let errorMessage = "";
            if (missingPropertyFromTypeAlias.length > 0) {
              if (errorMessage.length > 0)
                errorMessage += "\n";
              errorMessage += `The type alias had these properties which are missing in this object literal: ${missingPropertyFromTypeAlias.map((prop) => `${prop.name}: ${typeToString(prop.type)}`).join(" | ")}`;
            }
            if (addedProperties.length > 0) {
              if (errorMessage.length > 0)
                errorMessage += "\n";
              errorMessage += `The object literal had these properties which aren't in the type alias: ${addedProperties.map((prop) => `${prop.name}: ${typeToString(prop.type)}`).join(" | ")}`;
            }
            if (incorrectProperties.length > 0) {
              if (errorMessage.length > 0)
                errorMessage += "\n";
              errorMessage += `Invalid properties: ${incorrectProperties.join(" | ")}`;
            }
            return (0, result_1.Err)(`Object literal type alias ${typeToString(typeBlock.type)} did not match the value due to:
${errorMessage}`);
          }
        }
        return (0, result_1.Ok)(null);
      }
      exports.validateObjectLiteralType = validateObjectLiteralType;
      function getUntaggedUnion(type_, typedBlocks) {
        if (type_.kind !== "FixedType")
          return (0, result_1.Err)(null);
        for (const block of typedBlocks) {
          if (block.kind !== "UnionUntaggedType")
            continue;
          if (block.type.name === type_.name) {
            return (0, result_1.Ok)(block);
          }
        }
        return (0, result_1.Err)(null);
      }
      function getTypeAlias(type_, typedBlocks) {
        if (type_.kind !== "FixedType")
          return (0, result_1.Err)(null);
        for (const block of typedBlocks) {
          if (block.kind !== "TypeAlias")
            continue;
          if (block.type.name === type_.name) {
            return (0, result_1.Ok)(block);
          }
        }
        return (0, result_1.Err)(null);
      }
      function validateObjectLiteral(objectLiteral, expectedType, typedBlocks, imports, valuesInScope) {
        if (objectLiteral.base !== null) {
          return (0, result_1.Ok)(null);
        }
        if (expectedType.kind !== "FixedType")
          return (0, result_1.Ok)(null);
        const typeAlias = objectLiteralTypeAlias(objectLiteral, expectedType, typedBlocks, imports, valuesInScope);
        for (const typeBlock of typedBlocks) {
          if (typeBlock.kind === "UnionType" || typeBlock.kind === "UnionUntaggedType" || typeBlock.type.name !== expectedType.name)
            continue;
          const missingPropertyFromTypeAlias = [];
          const addedProperties = [];
          const incorrectProperties = [];
          for (const property of typeAlias.properties) {
            let found = false;
            for (const typeProperty of typeBlock.properties) {
              if (property.name === typeProperty.name) {
                const maybeUntaggedUnionBlock = getUntaggedUnion(typeProperty.type, typedBlocks);
                if (maybeUntaggedUnionBlock.kind === "Ok") {
                  const fieldValue = objectLiteral.fields.filter((field) => field.name === property.name)[0];
                  if (!fieldValue)
                    continue;
                  if (fieldValue.value.kind !== "StringValue")
                    continue;
                  const stringFieldValue = fieldValue.value.body;
                  const isCovered = maybeUntaggedUnionBlock.value.values.filter((v) => v.body === stringFieldValue).length > 0;
                  if (!isCovered) {
                    incorrectProperties.push(`${fieldValue.name}: Expected ${typeToString(maybeUntaggedUnionBlock.value.type)}, composed of ${maybeUntaggedUnionBlock.value.values.map((v) => `"${v.body}"`).join(" | ")}\` but got "${stringFieldValue}"`);
                  }
                } else if (!isSameType(property.type, typeProperty.type, false)) {
                  incorrectProperties.push(`${property.name}: Expected ${typeToString(typeProperty.type)} but got ${typeToString(property.type)}`);
                }
                found = true;
                break;
              }
            }
            if (!found) {
              addedProperties.push(property);
            }
          }
          for (const typeProperty of typeBlock.properties) {
            let found = false;
            for (const property of typeAlias.properties) {
              if (property.name === typeProperty.name) {
                found = true;
                break;
              }
            }
            if (!found) {
              missingPropertyFromTypeAlias.push(typeProperty);
            }
          }
          if (missingPropertyFromTypeAlias.length > 0 || addedProperties.length > 0 || incorrectProperties.length > 0) {
            let errorMessage = "";
            if (missingPropertyFromTypeAlias.length > 0) {
              if (errorMessage.length > 0)
                errorMessage += "\n";
              errorMessage += `The type alias had these properties which are missing in this object literal: ${missingPropertyFromTypeAlias.map((prop) => `${prop.name}: ${typeToString(prop.type)}`).join(" | ")}`;
            }
            if (addedProperties.length > 0) {
              if (errorMessage.length > 0)
                errorMessage += "\n";
              errorMessage += `The object literal had these properties which aren't in the type alias: ${addedProperties.map((prop) => `${prop.name}: ${typeToString(prop.type)}`).join(" | ")}`;
            }
            if (incorrectProperties.length > 0) {
              if (errorMessage.length > 0)
                errorMessage += "\n";
              errorMessage += `Invalid properties: ${incorrectProperties.join(" | ")}`;
            }
            return (0, result_1.Err)(`Mismatching type for type alias ${typeToString(typeBlock.type)}
${errorMessage}`);
          }
        }
        return (0, result_1.Ok)(null);
      }
      function unifyType(type_, typeReplacements) {
        switch (type_.kind) {
          case "FixedType": {
            return Object.assign(Object.assign({}, type_), { args: type_.args.map((arg) => {
              return unifyType(arg, typeReplacements);
            }) });
          }
          case "FunctionType": {
            return Object.assign(Object.assign({}, type_), { args: type_.args.map((arg) => {
              return unifyType(arg, typeReplacements);
            }) });
          }
          case "GenericType": {
            return typeReplacements[type_.name] || type_;
          }
          case "ObjectLiteralType": {
            const newProperties = {};
            for (const propName of Object.keys(type_.properties)) {
              const propValue = type_.properties[propName];
              newProperties[propName] = unifyType(propValue, typeReplacements);
            }
            return Object.assign(Object.assign({}, type_), { properties: newProperties });
          }
        }
      }
      function unifyTag(tag, typeReplacements) {
        return Object.assign(Object.assign({}, tag), { args: tag.args.map((arg) => {
          return Object.assign(Object.assign({}, arg), { type: unifyType(arg.type, typeReplacements) });
        }) });
      }
      function unifyUnionType(unionType, expectedType) {
        if (expectedType.kind !== "FixedType")
          return unionType;
        if (unionType.type.name !== expectedType.name) {
          return unionType;
        }
        const toBeReplaced = {};
        for (var i = 0; i < expectedType.args.length; i++) {
          const currentGenericArg = unionType.type.args[i];
          if (currentGenericArg.kind !== "GenericType") {
            continue;
          }
          const actualFixedArg = expectedType.args[i];
          toBeReplaced[currentGenericArg.name] = actualFixedArg;
        }
        return Object.assign(Object.assign({}, unionType), { tags: unionType.tags.map((tag) => {
          return unifyTag(tag, toBeReplaced);
        }) });
      }
      function tagTypeAlias(tag, genericUnionType, expectedType, typedBlocks) {
        const unionType = unifyUnionType(genericUnionType, expectedType);
        const tagToUse = unionType.tags.filter((localTag) => localTag.name === tag.name)[0] || tag;
        const typeAlias = (0, types_1.TypeAlias)((0, types_1.FixedType)("Inferred", []), tagToUse.args.map((arg) => {
          return (0, types_1.Property)(arg.name, arg.type);
        }));
        return typeAlias;
      }
      function findReplacement(inferredType, expectedType, typedBlocks) {
        switch (inferredType.kind) {
          case "FixedType": {
            if (expectedType.kind !== "FixedType" || expectedType.name !== inferredType.name || expectedType.args.length !== inferredType.args.length) {
              return inferredType;
            }
            const args = [];
            for (let i = 0; i < inferredType.args.length; i++) {
              const inferredArg = inferredType.args[i];
              const expectedArg = expectedType.args[i];
              args.push(findReplacement(inferredArg, expectedArg, typedBlocks));
            }
            return Object.assign(Object.assign({}, inferredType), { args });
          }
          case "FunctionType": {
            return inferredType;
          }
          case "GenericType": {
            return expectedType;
          }
          case "ObjectLiteralType": {
            if (expectedType.kind !== "FixedType")
              return inferredType;
            let original = null;
            for (const block of typedBlocks) {
              if (block.type.name === expectedType.name) {
                original = block;
                break;
              }
            }
            if (original === null)
              return inferredType;
            switch (original.kind) {
              case "UnionUntaggedType": {
                return inferredType;
              }
              case "UnionType": {
                return inferredType;
              }
              case "TypeAlias": {
                const seenNames = [];
                for (const originalProperty of original.properties) {
                  seenNames.push(originalProperty.name);
                  const property = inferredType.properties[originalProperty.name];
                  if (!property)
                    return inferredType;
                  if (!isSameType(originalProperty.type, property, false)) {
                    return inferredType;
                  }
                }
                for (const name of Object.keys(inferredType.properties)) {
                  if (seenNames.indexOf(name) === -1) {
                    return inferredType;
                  }
                }
                return expectedType;
              }
            }
          }
        }
      }
      exports.findReplacement = findReplacement;
      function validateConstructor(objectLiteral, expectedType, tag, unionType, typedBlocks, imports, valuesInScope) {
        const typeAlias = objectLiteralTypeAlias(objectLiteral, expectedType, typedBlocks, imports, valuesInScope);
        const typeBlock = tagTypeAlias(tag, unionType, expectedType, typedBlocks);
        const missingPropertyFromTypeAlias = [];
        const addedProperties = [];
        const incorrectProperties = [];
        for (const property of typeAlias.properties) {
          let found = false;
          for (const typeProperty of typeBlock.properties) {
            if (property.name === typeProperty.name) {
              const maybeUntaggedUnionBlock = getUntaggedUnion(typeProperty.type, typedBlocks);
              if (maybeUntaggedUnionBlock.kind === "Ok") {
                const fieldValue = objectLiteral.fields.filter((field) => field.name === property.name)[0];
                if (!fieldValue)
                  continue;
                if (fieldValue.value.kind !== "StringValue")
                  continue;
                const stringFieldValue = fieldValue.value.body;
                const isCovered = maybeUntaggedUnionBlock.value.values.filter((v) => v.body === stringFieldValue).length > 0;
                if (!isCovered) {
                  incorrectProperties.push(`${fieldValue.name}: Expected ${typeToString(maybeUntaggedUnionBlock.value.type)}, composed of ${maybeUntaggedUnionBlock.value.values.map((v) => `"${v.body}"`).join(" | ")}\` but got "${stringFieldValue}"`);
                }
              } else if (!isSameType(findReplacement(property.type, typeProperty.type, typedBlocks), typeProperty.type, false) || property.type.kind === "ObjectLiteralType" && !isSameObjectLiteralTypeAlias(property.type, typeProperty.type, typedBlocks)) {
                incorrectProperties.push(`${property.name}: Expected ${typeToString(typeProperty.type)} but got ${typeToString(property.type)}`);
              }
              found = true;
              break;
            }
          }
          if (!found) {
            addedProperties.push(property);
          }
        }
        for (const typeProperty of typeBlock.properties) {
          let found = false;
          for (const property of typeAlias.properties) {
            if (property.name === typeProperty.name) {
              found = true;
              break;
            }
          }
          if (!found) {
            missingPropertyFromTypeAlias.push(typeProperty);
          }
        }
        if (missingPropertyFromTypeAlias.length > 0 || addedProperties.length > 0 || incorrectProperties.length > 0) {
          let errorMessage = "";
          if (missingPropertyFromTypeAlias.length > 0) {
            if (errorMessage.length > 0)
              errorMessage += "\n";
            errorMessage += `The tag ${tag.name} had these properties which are missing in this constructor object literal: ${missingPropertyFromTypeAlias.map((prop) => `${prop.name}: ${typeToString(prop.type)}`).join(" | ")}`;
          }
          if (addedProperties.length > 0) {
            if (errorMessage.length > 0)
              errorMessage += "\n";
            errorMessage += `The constructor object literal had these properties which aren't in the tag ${tag.name}: ${addedProperties.map((prop) => `${prop.name}: ${typeToString(prop.type)}`).join(" | ")}`;
          }
          if (incorrectProperties.length > 0) {
            if (errorMessage.length > 0)
              errorMessage += "\n";
            errorMessage += `Invalid properties: ${incorrectProperties.join(" | ")}`;
          }
          return (0, result_1.Err)(errorMessage);
        }
        return (0, result_1.Ok)(null);
      }
      function isImportedType(type_, imports) {
        if (type_.kind !== "FixedType")
          return false;
        for (const import_ of imports) {
          for (const module2 of import_.modules) {
            for (const importedType of module2.exposing) {
              if (type_.name === importedType) {
                return true;
              }
            }
          }
        }
        return false;
      }
      function isInTypeBlockType(type_, typedBlocks) {
        if (type_.kind !== "FixedType")
          return false;
        for (const block of typedBlocks) {
          if (isSameType(block.type, type_, true)) {
            return true;
          }
        }
        return false;
      }
      function isImportedConstructor(constructor, imports) {
        for (const import_ of imports) {
          for (const module2 of import_.modules) {
            for (const importedName of module2.exposing) {
              if (constructor.constructor === importedName) {
                return true;
              }
            }
          }
        }
        return false;
      }
      function getValuesInTopLevelScope(blocks) {
        const valuesInScope = {};
        for (const block of blocks) {
          switch (block.kind) {
            case "Const": {
              valuesInScope[block.name === "toString" ? `_${block.name}` : block.name] = block.type;
              continue;
            }
            case "Function": {
              valuesInScope[block.name === "toString" ? `_${block.name}` : block.name] = block.returnType;
            }
            case "UnionType":
            case "UnionUntaggedType":
            case "TypeAlias": {
              continue;
            }
            case "MultilineComment":
            case "Comment":
            case "Export":
            case "Import": {
              continue;
            }
          }
        }
        return valuesInScope;
      }
      exports.getValuesInTopLevelScope = getValuesInTopLevelScope;
      function isImportedTypeScriptType(type_, typedBlocks, imports) {
        return isImportedType(type_, imports) && !isInTypeBlockType(type_, typedBlocks);
      }
      function getValuesInBlockScope(block, typedBlocks, imports) {
        const valuesInScope = {};
        switch (block.kind) {
          case "Const": {
            for (const letBlock of block.letBody) {
              switch (letBlock.kind) {
                case "Const": {
                  if (isImportedTypeScriptType(letBlock.type, typedBlocks, imports)) {
                    break;
                  }
                  valuesInScope[letBlock.name === "toString" ? `_${letBlock.name}` : letBlock.name] = letBlock.type;
                  break;
                }
                case "Function": {
                  if (isImportedTypeScriptType(letBlock.returnType, typedBlocks, imports)) {
                    break;
                  }
                  valuesInScope[letBlock.name === "toString" ? `_${letBlock.name}` : letBlock.name] = letBlock.returnType;
                  break;
                }
              }
            }
            break;
          }
          case "Function": {
            for (const arg of block.args) {
              switch (arg.kind) {
                case "AnonFunctionArg": {
                  break;
                }
                case "FunctionArg": {
                  if (isImportedTypeScriptType(arg.type, typedBlocks, imports)) {
                    break;
                  }
                  valuesInScope[arg.name === "toString" ? `_${arg.name}` : arg.name] = arg.type;
                  break;
                }
              }
            }
            for (const letBlock of block.letBody) {
              switch (letBlock.kind) {
                case "Const": {
                  if (isImportedTypeScriptType(letBlock.type, typedBlocks, imports)) {
                    break;
                  }
                  valuesInScope[letBlock.name === "toString" ? `_${letBlock.name}` : letBlock.name] = letBlock.type;
                  break;
                }
                case "Function": {
                  if (isImportedTypeScriptType(letBlock.returnType, typedBlocks, imports)) {
                    break;
                  }
                  valuesInScope[letBlock.name === "toString" ? `_${letBlock.name}` : letBlock.name] = letBlock.returnType;
                  break;
                }
              }
            }
            break;
          }
          case "UnionType":
          case "UnionUntaggedType":
          case "TypeAlias": {
            break;
          }
          case "MultilineComment":
          case "Comment":
          case "Export":
          case "Import": {
            break;
          }
        }
        return valuesInScope;
      }
      function validateConst(block, typedBlocks, imports, valuesInTopLevelScope) {
        if (!typeExistsInNamespace(block.type, typedBlocks, imports)) {
          return (0, result_1.Err)(`Type ${typeToString(block.type)} did not exist in the namespace`);
        }
        const valuesInScope = Object.assign(Object.assign({}, valuesInTopLevelScope), getValuesInBlockScope(block, typedBlocks, imports));
        const inferredRes = inferType(block.value, block.type, typedBlocks, imports, valuesInScope);
        if (inferredRes.kind === "Err")
          return inferredRes;
        const inferred = inferredRes.value;
        if (isSameType(block.type, inferred, false, typedBlocks)) {
          return (0, result_1.Ok)(block.type);
        }
        if (inferred.kind === "FixedType") {
          if (inferred.name === "string") {
            if (block.type.kind === "FixedType") {
              const matchingBlocks = typedBlocks.filter((b) => isSameType(b.type, block.type, false));
              if (matchingBlocks.length > 0) {
                const matchingBlock = matchingBlocks[0];
                if (matchingBlock.kind === "UnionUntaggedType") {
                  const finalExpressions2 = allFinalExpressions(block);
                  for (const finalExpression of finalExpressions2) {
                    const isCovered = matchingBlock.values.filter((v) => v.body === finalExpression).length > 0;
                    if (!isCovered) {
                      return (0, result_1.Err)(`Expected \`${typeToString(block.type)}, composed of ${matchingBlock.values.map((v) => `"${v.body}"`).join(" | ")}\` but got \`${finalExpression}\` in the body of the const`);
                    }
                  }
                  return (0, result_1.Ok)(block.type);
                }
              }
            }
          } else if (inferred.args.length > 0) {
            if (inferred.args[0].kind === "ObjectLiteralType") {
              const maybeNestedType = block.type.kind === "FixedType" && block.type.args.length > 0 ? block.type.args[0] : block.type;
              const valid = validateObjectLiteralType(inferred.args[0], maybeNestedType, typedBlocks, imports);
              if (valid.kind === "Err") {
                return (0, result_1.Err)(`Expected ${typeToString(block.type)} but ${valid.error.slice(0, 1).toLowerCase()}${valid.error.slice(1)}`);
              }
              return (0, result_1.Ok)(block.type);
            }
          }
        } else if (inferred.kind === "ObjectLiteralType") {
          if (isImportedType(block.type, imports)) {
            return (0, result_1.Ok)(block.type);
          }
          const maybeNestedType = block.type.kind === "FixedType" && block.type.name === "List" ? block.type.args[0] : block.type;
          const validation = validateObjectLiteral(block.value, maybeNestedType, typedBlocks, imports, valuesInScope);
          if (validation.kind === "Err") {
            return validation;
          }
        }
        const replacement = findReplacement(inferredRes.value, block.type, typedBlocks);
        if (isSameType(replacement, block.type, false)) {
          return (0, result_1.Ok)(replacement);
        }
        return (0, result_1.Err)(`Expected \`${typeToString(block.type)}\` but got \`${typeToString(inferred)}\``);
      }
      function validateFunction(block, typedBlocks, imports, valuesInTopLevelScope) {
        const notExistingErrors = [];
        if (!typeExistsInNamespace(block.returnType, typedBlocks, imports)) {
          notExistingErrors.push(`Type ${typeToString(block.returnType)} did not exist in the namespace`);
        }
        for (const arg of block.args) {
          if (!typeExistsInNamespace(arg.type, typedBlocks, imports)) {
            notExistingErrors.push(`Type ${typeToString(arg.type)} did not exist in the namespace`);
          }
        }
        if (notExistingErrors.length > 0) {
          return (0, result_1.Err)(notExistingErrors.join("\n"));
        }
        const valuesInScope = Object.assign(Object.assign({}, valuesInTopLevelScope), getValuesInBlockScope(block, typedBlocks, imports));
        const inferredRes = inferType(block.body, block.returnType, typedBlocks, imports, valuesInScope);
        if (inferredRes.kind === "Err")
          return inferredRes;
        const inferred = inferredRes.value;
        if (inferred.kind === "FixedType" && inferred.name === "string") {
          if (block.returnType.kind === "FixedType") {
            const matchingBlocks = typedBlocks.filter((b) => isSameType(b.type, block.returnType, false));
            if (matchingBlocks.length > 0) {
              const matchingBlock = matchingBlocks[0];
              if (matchingBlock.kind === "UnionUntaggedType") {
                const finalExpressions2 = allFinalExpressions(block);
                for (const finalExpression of finalExpressions2) {
                  const isCovered = matchingBlock.values.filter((v) => v.body === finalExpression).length > 0;
                  if (!isCovered) {
                    return (0, result_1.Err)(`Expected \`${typeToString(block.returnType)}, composed of ${matchingBlock.values.map((v) => `"${v.body}"`).join(" | ")}\` but got \`${finalExpression}\` in the body of the function`);
                  }
                }
                return (0, result_1.Ok)(block.returnType);
              }
            }
          }
        } else if (inferred.kind === "ObjectLiteralType") {
          if (isImportedType(block.returnType, imports)) {
            return (0, result_1.Ok)(block.returnType);
          }
          if (block.body.kind === "ObjectLiteral") {
            const maybeNestedType = block.returnType.kind === "FixedType" && block.returnType.name === "List" ? block.returnType.args[0] : block.returnType;
            const validation = validateObjectLiteral(block.body, maybeNestedType, typedBlocks, imports, valuesInScope);
            if (validation.kind === "Err") {
              return validation;
            }
            return (0, result_1.Ok)(block.returnType);
          }
        }
        const replacement = findReplacement(inferredRes.value, block.returnType, typedBlocks);
        if (!isSameType(replacement, block.returnType, false, typedBlocks) && !isSameType(block.returnType, inferred, false, typedBlocks)) {
          return (0, result_1.Err)(`Expected \`${typeToString(block.returnType)}\` but got \`${typeToString(inferred)}\` in the body of the function`);
        }
        return (0, result_1.Ok)(block.returnType);
      }
      function validateType(block, typedBlocks, imports, valuesInScope = {}) {
        switch (block.kind) {
          case "Const": {
            return validateConst(block, typedBlocks, imports, valuesInScope);
          }
          case "Function": {
            return validateFunction(block, typedBlocks, imports, valuesInScope);
          }
          case "UnionType":
          case "UnionUntaggedType":
          case "TypeAlias": {
            return (0, result_1.Ok)(block.type);
          }
          case "MultilineComment":
          case "Comment":
          case "Export":
          case "Import": {
            return (0, result_1.Ok)((0, types_1.FixedType)("any", []));
          }
        }
      }
      exports.validateType = validateType;
    }
  });

  // node_modules/derw/build/parser.js
  var require_parser = __commonJS({
    "node_modules/derw/build/parser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseWithContext = exports.addTypeErrors = exports.parse = exports.stripComments = exports.parseBlock = exports.parseExpression = void 0;
      var maybe_1 = require_maybe();
      var result_1 = require_result();
      var Blocks_1 = require_Blocks();
      var builtins_1 = require_builtins();
      var Collisions_1 = require_Collisions();
      var Tokens_1 = require_Tokens();
      var types_1 = require_types();
      var type_checking_1 = require_type_checking();
      function afterArrow(tokens) {
        let index = 0;
        while (index < tokens.length) {
          if (tokens[index].kind !== "ArrowToken")
            break;
          index++;
        }
        return tokens.slice(index);
      }
      function splitOnArrowTokens(tokens) {
        const results = [];
        let lastIndex = 0;
        let index = 0;
        while (index < tokens.length) {
          if (tokens[index].kind === "ArrowToken") {
            results.push(tokens.slice(lastIndex, index));
            lastIndex = index + 1;
          }
          index++;
        }
        if (index > lastIndex) {
          results.push(tokens.slice(lastIndex, index));
        }
        return results;
      }
      function parseTypeToken(token) {
        switch (token.kind) {
          case "ArrowToken": {
            return (0, result_1.Err)("Unexpected arrow in type");
          }
          case "BaseTypeToken": {
            const rootType = token.body[0];
            if (rootType.kind === "IdentifierToken") {
              const parsedTypes = afterArrow(token.body.slice(1)).map(parseTypeToken);
              if (parsedTypes.length === 0) {
                if ((0, builtins_1.isBuiltinType)(rootType.body) && rootType.body !== "any") {
                  return (0, result_1.Ok)((0, types_1.FixedType)(rootType.body, []));
                } else if (rootType.body.toLowerCase() === rootType.body) {
                  return (0, result_1.Ok)((0, types_1.GenericType)(rootType.body));
                }
              }
              const errors = [];
              const correct = [];
              for (const parsed of parsedTypes) {
                if (parsed.kind === "Ok") {
                  correct.push(parsed.value);
                } else {
                  errors.push(parsed.error);
                }
              }
              if (errors.length > 0) {
                return (0, result_1.Err)(errors.join("\n"));
              }
              return (0, result_1.Ok)((0, types_1.FixedType)(rootType.body, correct));
            }
            return (0, result_1.Err)(`Invalid root type ${rootType.kind}`);
          }
          case "CloseBracketToken": {
            return (0, result_1.Err)("Unexpected close bracket in type");
          }
          case "FunctionTypeToken": {
            const parsedTypes = token.body.map((x) => {
              return parseTypeToken(x);
            });
            const errors = [];
            const correct = [];
            for (const parsed of parsedTypes) {
              if (parsed.kind === "Ok") {
                correct.push(parsed.value);
              } else {
                errors.push(parsed.error);
              }
            }
            if (errors.length > 0) {
              return (0, result_1.Err)(errors.join("\n"));
            }
            return (0, result_1.Ok)((0, types_1.FunctionType)(correct));
          }
          case "IdentifierToken": {
            if ((0, builtins_1.isBuiltinType)(token.body) && token.body !== "any") {
              return (0, result_1.Ok)((0, types_1.FixedType)(token.body, []));
            } else if (token.body.toLowerCase() === token.body) {
              return (0, result_1.Ok)((0, types_1.GenericType)(token.body));
            }
            return (0, result_1.Ok)((0, types_1.FixedType)(token.body, []));
          }
          case "OpenBracketToken": {
            return (0, result_1.Err)("Unexected open bracket in type");
          }
          case "StringToken": {
            return (0, result_1.Err)("Unexpected string token");
          }
        }
      }
      function parseRootTypeTokens(token) {
        switch (token.kind) {
          case "BaseTypeToken": {
            return parseTypeToken(token);
          }
          case "FunctionTypeToken": {
            return parseTypeToken(token);
          }
        }
      }
      function parseType(tokens) {
        const tokenizedTypes = (0, Tokens_1.tokenizeType)(tokens);
        if (tokenizedTypes.kind === "Err")
          return tokenizedTypes;
        if (tokenizedTypes.value.length < 1) {
          return (0, result_1.Err)("Expected a type but couldn't find one");
        }
        return parseRootTypeTokens(tokenizedTypes.value[0]);
      }
      function parseUnionUntaggedType(tokens) {
        if (tokens[0].kind === "KeywordToken") {
          if (tokens[0].body !== "type") {
            return (0, result_1.Err)("Expected `type` but got " + tokens[0].body);
          }
        }
        const assignIndex = tokens.findIndex((t) => t.kind === "AssignToken");
        const parsedType = parseType(tokens.slice(1, assignIndex - 1));
        if (parsedType.kind === "Err") {
          return (0, result_1.Err)("Failed to parse untagged union type name " + parsedType.error);
        }
        if (parsedType.value.kind === "GenericType") {
          return (0, result_1.Err)("Expected a fixed type but got a generic type for a union type. Maybe you missed a captal letter?");
        }
        if (parsedType.value.kind === "FunctionType") {
          return (0, result_1.Err)("Expected a fixed type but got a function type for a union type. Maybe you missed a captal letter?");
        }
        if (parsedType.value.kind === "ObjectLiteralType") {
          return (0, result_1.Err)("Expected a fixed type but got a object lieral type for a union type. Maybe you missed a captal letter?");
        }
        const branches = [];
        for (const token of tokens.slice(assignIndex + 1)) {
          switch (token.kind) {
            case "StringToken": {
              const value = parseStringValue([token]);
              if (value.kind === "Err")
                return (0, result_1.Err)("Failed to parse string in untagged union type definiton: " + value.error);
              branches.push(value.value);
              break;
            }
            case "WhitespaceToken": {
              continue;
            }
            case "PipeToken": {
              continue;
            }
            default: {
              return (0, result_1.Err)(`Expected string, whitespace, or pipe but got ${token.kind} in untagged union type definition.`);
            }
          }
        }
        return (0, result_1.Ok)((0, types_1.UnionUntaggedType)(parsedType.value, branches));
      }
      function parseUnionType(tokens) {
        if (tokens[0].kind === "KeywordToken") {
          if (tokens[0].body !== "type") {
            return (0, result_1.Err)("Expected `type` but got " + tokens[0].body);
          }
        }
        let typeLine = [];
        let isInBranches = false;
        let branches = [];
        let currentBranch = [];
        let inBrackets = false;
        for (var i = 1; i < tokens.length; i++) {
          const token = tokens[i];
          switch (token.kind) {
            case "IdentifierToken": {
              if (isInBranches) {
                currentBranch.push(token.body);
              } else {
                typeLine.push(token);
              }
              break;
            }
            case "PipeToken": {
              branches.push(currentBranch.join(" "));
              currentBranch = [];
              break;
            }
            case "WhitespaceToken": {
              typeLine.push(token);
              break;
            }
            case "OpenBracketToken":
            case "CloseBracketToken": {
              if (isInBranches) {
                if (currentBranch[currentBranch.length - 1] === ":" && !inBrackets) {
                } else {
                  currentBranch.push(token.kind === "OpenBracketToken" ? "(" : ")");
                  inBrackets = token.kind === "OpenBracketToken";
                }
              }
              continue;
            }
            case "CommaToken": {
              currentBranch.push(",");
              break;
            }
            case "ColonToken": {
              currentBranch.push(":");
              break;
            }
            case "OpenCurlyBracesToken": {
              if (isInBranches) {
                currentBranch.push("{");
                break;
              }
            }
            case "CloseCurlyBracesToken": {
              if (isInBranches) {
                currentBranch.push(" }");
                break;
              }
            }
            case "AssignToken": {
              isInBranches = true;
              break;
            }
            case "ArrowToken": {
              currentBranch.push("->");
              break;
            }
            default: {
              return (0, result_1.Err)("Unexpected token parsing a union type. Got " + token.kind);
            }
          }
        }
        if (currentBranch) {
          branches.push(currentBranch.join(" "));
        }
        const parsedType = parseType(typeLine);
        if (parsedType.kind === "Err")
          return parsedType;
        const tags = branches.map((tag) => {
          if (tag.startsWith("|")) {
            tag = tag.slice(1);
          }
          tag = tag.trim();
          const tagName = tag.split(" ")[0];
          if (tagName.length === 0) {
            return (0, result_1.Err)(`Missing expected tag name for union type \`${(0, Tokens_1.tokensToString)(typeLine)}\``);
          }
          if ((0, builtins_1.isReservedName)(tagName)) {
            return (0, result_1.Err)(`Redefining ${tagName.trim()} will cause problems. Try renaming it to ${tagName.trim()}Value`);
          }
          let argsAsJson = tag.split(" ").slice(1).join(" ");
          const args = argsAsJson.split(" ").filter((j) => j !== "{" && j !== "}").join(" ").split(",").filter((arg) => arg.trim().length > 0).map((arg) => {
            const property = parseProperty((0, Tokens_1.tokenize)(arg));
            if (property.kind === "Err")
              return property;
            return (0, result_1.Ok)((0, types_1.TagArg)(property.value.name, property.value.type));
          });
          if (args.filter((maybeTag) => maybeTag.kind === "Ok").length === args.length) {
            return (0, result_1.Ok)((0, types_1.Tag)(tagName, args.map((arg) => arg.value)));
          }
          return (0, result_1.Err)("Error parsing args due to:\n" + args.filter((arg) => arg.kind === "Err").map((err) => err.error));
        });
        if (tags.length === 0) {
          return (0, result_1.Err)("Not enough tags given.");
        }
        for (var i = 0; i < tags.length; i++) {
          const tag = tags[i];
          if (tag.kind === "Err") {
            return tag;
          }
        }
        if (parsedType.value.kind === "GenericType") {
          return (0, result_1.Err)("Expected a fixed type but got a generic type for a union type. Maybe you missed a captal letter?");
        }
        if (parsedType.value.kind === "FunctionType") {
          return (0, result_1.Err)("Expected a fixed type but got a function type for a union type. Maybe you missed a captal letter?");
        }
        if (parsedType.value.kind === "ObjectLiteralType") {
          return (0, result_1.Err)("Expected a fixed type but got a object literal type for a union type. Maybe you missed a captal letter?");
        }
        return (0, result_1.Ok)((0, types_1.UnionType)(parsedType.value, tags.filter((tag) => tag.kind === "Ok").map((tag) => tag.value)));
      }
      function parseProperty(tokens) {
        let index = 0;
        let name = null;
        while (index < tokens.length) {
          const token = tokens[index];
          if (token.kind === "WhitespaceToken") {
          } else if (token.kind === "IdentifierToken") {
            if (name) {
              return (0, result_1.Err)("Got too many identifiers for property name");
            }
            name = token.body;
          } else if (token.kind === "ColonToken") {
            break;
          } else if (token.kind === "KeywordToken" && token.body === "type") {
            if (name) {
              return (0, result_1.Err)("Got too many identifiers for property name");
            }
            name = token.body;
          } else {
            return (0, result_1.Err)(`Expected identifier in property name but got ${token.kind}`);
          }
          index++;
        }
        index++;
        if (name === null) {
          return (0, result_1.Err)("Expected identifier for property name but found nothing");
        }
        let bitsAfterName = tokens.slice(index);
        if (tokens.find((token) => token.kind === "ArrowToken")) {
          bitsAfterName = [
            (0, Tokens_1.OpenBracketToken)({}),
            ...bitsAfterName,
            (0, Tokens_1.CloseBracketToken)({})
          ];
        }
        const tokenizedTypes = (0, Tokens_1.tokenizeType)(bitsAfterName);
        if (tokenizedTypes.kind === "Err")
          return tokenizedTypes;
        const types = tokenizedTypes.value;
        if (types.length > 1) {
          return (0, result_1.Err)("Too many types found in property");
        }
        if (types.length < 1)
          return (0, result_1.Err)("Failed to find type");
        const type = parseRootTypeTokens(types[0]);
        if (type.kind === "Err")
          return type;
        return (0, result_1.Ok)((0, types_1.Property)(name, type.value));
      }
      function isRootProperty(line) {
        if (line.match(/    .+/)) {
          return true;
        }
        return false;
      }
      function parseTypeAlias(tokens) {
        let index = 0;
        let hasSeenType = false;
        while (index < tokens.length) {
          const token = tokens[index];
          if (token.kind === "KeywordToken") {
            if (hasSeenType) {
              if (token.body === "alias") {
                break;
              }
            } else if (token.body === "type") {
              hasSeenType = true;
            } else {
              return (0, result_1.Err)("Expected `type alias` but got " + token);
            }
          }
          index++;
        }
        index += 2;
        let typeLine = [];
        let isInDefinition = false;
        let currentDefinition = [];
        let braceDepth = 0;
        for (var i = index; i < tokens.length; i++) {
          const token = tokens[i];
          switch (token.kind) {
            case "IdentifierToken": {
              if (isInDefinition) {
                currentDefinition.push(token.body);
              } else {
                typeLine.push(token);
              }
              break;
            }
            case "WhitespaceToken": {
              continue;
            }
            case "OpenBracketToken": {
              currentDefinition.push("(");
              break;
            }
            case "CloseBracketToken": {
              currentDefinition.push(")");
              break;
            }
            case "CommaToken": {
              currentDefinition.push(",");
              break;
            }
            case "ColonToken": {
              currentDefinition.push(":");
              break;
            }
            case "OpenCurlyBracesToken": {
              if (isInDefinition) {
                braceDepth += 1;
                currentDefinition.push("{");
                break;
              }
              break;
            }
            case "CloseCurlyBracesToken": {
              if (isInDefinition) {
                if (braceDepth > 0) {
                  currentDefinition.push(" }");
                }
                break;
              }
              braceDepth -= 1;
              break;
            }
            case "AssignToken": {
              isInDefinition = true;
              break;
            }
            case "ArrowToken": {
              currentDefinition.push("->");
              break;
            }
            default: {
              return (0, result_1.Err)("Unexpected token parsing a type alias. Got " + token.kind);
            }
          }
        }
        const parsedAliasName = parseType(typeLine);
        if (parsedAliasName.kind === "Err") {
          return parsedAliasName;
        }
        const aliasName = parsedAliasName.value;
        const recordDefinition = currentDefinition.join(" ");
        let lines = [];
        recordDefinition.split("\n").forEach((line) => {
          const hasComma = line.indexOf(",") > -1;
          if (hasComma) {
            const hasTextAfterComma = line.split(",")[1].trim().length > 0;
            if (hasTextAfterComma) {
              lines = lines.concat(...line.split(",").map((piece) => "    " + piece));
              return;
            }
          }
          lines.push(line);
        });
        let currentBuffer = [];
        const properties = [];
        lines.forEach((line, i2) => {
          const isOpeningBrace = line.trim() === "{" && i2 === 0;
          const isClosingBrace = line.trim() === "}" && i2 === lines.length - 1;
          const otherThanWhitespace = line.split("").filter((x) => x.trim().length > 0).join("");
          const isEmptyBody = otherThanWhitespace === "{}";
          if (isOpeningBrace || isClosingBrace || isEmptyBody) {
            return;
          }
          const hasInlineOpeningBrace = line.trim().startsWith("{") && i2 === 0;
          if (hasInlineOpeningBrace) {
            line = line.trim().slice(1);
          }
          const hasInlineClosingBrace = line.trim().endsWith("}") && i2 === lines.length - 1;
          if (hasInlineClosingBrace) {
            line = line.slice(0, -1);
          }
          if (isRootProperty(line)) {
            if (currentBuffer.length > 0) {
              properties.push(currentBuffer.join("\n"));
              currentBuffer = [line];
            } else {
              currentBuffer.push(line);
            }
          } else {
            currentBuffer.push(line);
          }
        });
        if (currentBuffer.length > 0) {
          properties.push(currentBuffer.join("\n"));
        }
        const parsedProperties = properties.map((x) => parseProperty((0, Tokens_1.tokenize)(x)));
        const errors = parsedProperties.filter((property) => property.kind === "Err");
        if (errors.length > 0) {
          return (0, result_1.Err)(errors.map((err) => err.error).join("\n"));
        }
        if (aliasName.kind === "GenericType") {
          return (0, result_1.Err)("Expected a fixed type but got a generic type for a type alias. Maybe you missed a captal letter?");
        }
        if (aliasName.kind === "FunctionType") {
          return (0, result_1.Err)("Expected a fixed type but got a function type for a type alias. Maybe you missed a captal letter?");
        }
        if (aliasName.kind === "ObjectLiteralType") {
          return (0, result_1.Err)("Expected a fixed type but got an object literal type for a type alias. Maybe you missed a captal letter?");
        }
        return (0, result_1.Ok)((0, types_1.TypeAlias)(aliasName, parsedProperties.map((property) => property.value)));
      }
      function parseObjectLiteral(tokens) {
        const fields = [];
        let currentName = "";
        let currentValue = null;
        let objectDepth = 0;
        let innermostBuffer = "";
        let base = null;
        let previousWasBase = false;
        let isInName = false;
        let index = 0;
        while (index < tokens.length) {
          const token = tokens[index];
          if (token.kind === "WhitespaceToken") {
            index++;
            continue;
          }
          break;
        }
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "OpenCurlyBracesToken": {
              objectDepth++;
              if (objectDepth === 1) {
                isInName = true;
              } else {
                innermostBuffer += "{";
              }
              break;
            }
            case "CloseCurlyBracesToken": {
              objectDepth--;
              if (objectDepth === 0) {
                if (innermostBuffer.trim().length === 0)
                  continue;
                const innerLiteral = parseExpression(innermostBuffer);
                if (innerLiteral.kind === "Err")
                  return innerLiteral;
                innermostBuffer = "";
                currentValue = innerLiteral.value;
                fields.push((0, types_1.Field)(currentName.trim(), currentValue));
                currentName = "";
                currentValue = null;
              } else {
                innermostBuffer += "}";
              }
              break;
            }
            case "ColonToken": {
              if (objectDepth === 1) {
                isInName = false;
              } else {
                innermostBuffer += ":";
              }
              break;
            }
            case "CommaToken": {
              if (previousWasBase) {
                previousWasBase = false;
                break;
              }
              if (objectDepth > 1) {
                innermostBuffer += ",";
              } else {
                const innerLiteral = parseExpression(innermostBuffer);
                if (innerLiteral.kind === "Err")
                  return innerLiteral;
                fields.push((0, types_1.Field)(currentName.trim(), innerLiteral.value));
                innermostBuffer = "";
                currentName = "";
                isInName = true;
              }
              break;
            }
            case "FormatStringToken":
            case "StringToken":
            case "LiteralToken":
            case "IdentifierToken": {
              if (isInName) {
                if (token.kind === "IdentifierToken") {
                  if (token.body.startsWith("...")) {
                    base = (0, types_1.Value)(token.body);
                    previousWasBase = true;
                    break;
                  }
                }
                currentName += token.body;
              } else {
                innermostBuffer += token.body;
              }
              break;
            }
            case "OperatorToken": {
              if (!isInName) {
                innermostBuffer += token.body;
              }
              break;
            }
            case "WhitespaceToken": {
              if (!isInName) {
                innermostBuffer += token.body;
              }
              break;
            }
            case "ArrowToken": {
              innermostBuffer += "->";
            }
          }
          index++;
        }
        return (0, result_1.Ok)((0, types_1.ObjectLiteral)(base, fields));
      }
      function parseValue(tokens) {
        const body = [];
        let index = 0;
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "WhitespaceToken": {
              break;
            }
            case "LiteralToken":
            case "IdentifierToken": {
              body.push(token.body);
              break;
            }
            case "OpenBracketToken": {
              body.push("(");
              break;
            }
            case "CloseBracketToken": {
              body.push(")");
              break;
            }
            default: {
              return (0, result_1.Err)(`Expected value but got ${token.kind}`);
            }
          }
          index++;
        }
        const firstChar = body.join("").slice(0, 1);
        if (firstChar !== "-" && firstChar.toUpperCase() === firstChar && isNaN(parseFloat(firstChar))) {
          return parseConstructor(tokens);
        }
        return (0, result_1.Ok)((0, types_1.Value)(body.join("")));
      }
      function parseStringValue(tokens) {
        if (tokens[0].kind === "StringToken")
          return (0, result_1.Ok)((0, types_1.StringValue)(tokens[0].body.slice(1, -1)));
        return (0, result_1.Err)(`Expected string literal, got ${tokens[0].kind}`);
      }
      function listRangeDotsNotWithinString(tokens) {
        let i = 0;
        for (const token of tokens) {
          if (token.kind !== "WhitespaceToken")
            break;
          i++;
        }
        if (i === tokens.length)
          return true;
        const firstToken = tokens[i];
        if (firstToken.kind === "LiteralToken" && firstToken.body.startsWith("[")) {
          const newTokens = (0, Tokens_1.tokenize)(firstToken.body.slice(1));
          for (const token of newTokens) {
            if ((token.kind === "LiteralToken" || token.kind === "IdentifierToken") && token.body.indexOf("..") > -1) {
              return true;
            }
          }
        }
        return false;
      }
      function parseListRange(tokens) {
        let index = 0;
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "WhitespaceToken": {
              break;
            }
            case "LiteralToken": {
              const trimmed = token.body.trim().slice(1).slice(0, -1);
              const pieces = trimmed.split("..");
              const start = parseValue((0, Tokens_1.tokenize)(pieces[0]));
              const end = parseValue((0, Tokens_1.tokenize)(pieces[1]));
              if (start.kind === "Err")
                return start;
              if (end.kind === "Err")
                return end;
              if (start.kind === "Ok" && start.value.kind === "Constructor")
                return (0, result_1.Err)("Expected variable but got constructor");
              if (end.kind === "Ok" && end.value.kind === "Constructor")
                return (0, result_1.Err)("Expected variable but got constructor");
              return (0, result_1.Ok)((0, types_1.ListRange)(start.value, end.value));
            }
            default: {
              return (0, result_1.Err)(`Unxpected ${token.kind}, expected whitespace or literal`);
            }
          }
          index++;
        }
        return (0, result_1.Err)("Failed to find list range. They should look like [1..2]");
      }
      function parseListValue(tokens) {
        let index = 0;
        let isFound = false;
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "LiteralToken": {
              isFound = true;
            }
          }
          if (isFound)
            break;
          index++;
        }
        const parsedValues = [];
        const body = (0, Tokens_1.tokensToString)(tokens.slice(index));
        const trimmed = body.trim();
        const innerBody = trimmed.slice(1, trimmed.length - 1).trim();
        if (innerBody.trim().length === 0)
          return (0, result_1.Ok)((0, types_1.ListValue)([]));
        const innerTokens = (0, Tokens_1.tokenize)(innerBody);
        let innerIndex = 0;
        let currentBuffer = [];
        let depth = 0;
        while (innerIndex < innerTokens.length) {
          const token = innerTokens[innerIndex];
          switch (token.kind) {
            case "OpenCurlyBracesToken": {
              currentBuffer.push((0, Tokens_1.OpenCurlyBracesToken)({}));
              depth++;
              break;
            }
            case "CloseCurlyBracesToken": {
              currentBuffer.push((0, Tokens_1.CloseCurlyBracesToken)({}));
              depth--;
              break;
            }
            case "CommaToken": {
              if (depth === 0) {
                parsedValues.push(parseExpression((0, Tokens_1.tokensToString)(currentBuffer)));
                currentBuffer = [];
                break;
              }
            }
            default: {
              currentBuffer.push(token);
            }
          }
          innerIndex++;
        }
        if (currentBuffer.length > 0) {
          parsedValues.push(parseExpression((0, Tokens_1.tokensToString)(currentBuffer)));
        }
        const errors = parsedValues.filter((part) => part.kind === "Err");
        const passedValues = parsedValues.filter((part) => part.kind === "Ok");
        if (errors.length > 0)
          return (0, result_1.Err)(`Invalid array: ${errors.map((error) => error.error).join(",")}`);
        if (passedValues.length === 0) {
          return (0, result_1.Ok)((0, types_1.ListValue)([]));
        } else {
          return (0, result_1.Ok)((0, types_1.ListValue)(passedValues.map((value) => value.value)));
        }
      }
      function parseFormatStringValue(tokens) {
        if (tokens[0].kind === "FormatStringToken")
          return (0, result_1.Ok)((0, types_1.FormatStringValue)(tokens[0].body.slice(1, -1)));
        return (0, result_1.Err)(`Expected string literal, got ${tokens[0].kind}`);
      }
      function parseDestructure(tokens) {
        let index = 0;
        let constructor = null;
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "WhitespaceToken": {
              break;
            }
            case "IdentifierToken": {
              constructor = token.body;
              break;
            }
            default: {
              return (0, result_1.Err)(`Expected identifier or whitespace but got ${token.kind} while parsing a destructure.`);
            }
          }
          if (constructor)
            break;
          index++;
        }
        index++;
        if (constructor === null)
          return (0, result_1.Err)("Expected identifer for a destructor but got nothing.");
        let patternParts = [];
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "WhitespaceToken": {
              if (patternParts.length === 0)
                break;
            }
            default: {
              patternParts.push(token);
              break;
            }
          }
          index++;
        }
        index++;
        const pattern = (0, Tokens_1.tokensToString)(patternParts).trim();
        return (0, result_1.Ok)((0, types_1.Destructure)(constructor, pattern));
      }
      function parseConstructor(tokens) {
        let index = 0;
        let constructor = null;
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "WhitespaceToken": {
              break;
            }
            case "IdentifierToken": {
              constructor = token.body;
              break;
            }
            default: {
              return (0, result_1.Err)(`Expected identifier or whitespace but got ${token.kind} while parsing constructor.`);
            }
          }
          if (constructor)
            break;
          index++;
        }
        index++;
        if (constructor === null)
          return (0, result_1.Err)("Expected identifer for a constructor but got nothing.");
        let patternParts = [];
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "WhitespaceToken": {
              if (patternParts.length === 0)
                break;
            }
            default: {
              patternParts.push(token);
              break;
            }
          }
          index++;
        }
        index++;
        const pattern = parseObjectLiteral(patternParts);
        if (pattern.kind === "Err")
          return pattern;
        return (0, result_1.Ok)((0, types_1.Constructor)(constructor, pattern.value));
      }
      function parseIfPredicate(tokens) {
        const inbetweenTokens = [];
        let state = "WaitingForIf";
        for (const token of tokens) {
          switch (token.kind) {
            case "KeywordToken": {
              if (token.body === "if") {
                state = "BetweenIfAndThen";
                break;
              } else if (token.body === "then") {
                state = "PastThen";
                break;
              }
            }
            default: {
              if (state === "BetweenIfAndThen") {
                inbetweenTokens.push(token);
              }
            }
          }
          if (state === "PastThen")
            break;
        }
        return parseExpression((0, Tokens_1.tokensToString)(inbetweenTokens));
      }
      function parseIfBody(tokens) {
        const inbetweenTokens = [];
        let state = "WaitingForThen";
        for (const token of tokens) {
          switch (token.kind) {
            case "KeywordToken": {
              if (token.body === "then") {
                state = "BetweenThenAndElse";
                break;
              } else if (token.body === "else") {
                state = "PastElse";
                break;
              }
            }
            default: {
              if (state === "BetweenThenAndElse") {
                inbetweenTokens.push(token);
              }
            }
          }
          if (state === "PastElse")
            break;
        }
        return parseExpression((0, Tokens_1.tokensToString)(inbetweenTokens));
      }
      function parseElseBody(tokens) {
        const inbetweenTokens = [];
        let state = "WaitingForElse";
        for (const token of tokens) {
          switch (token.kind) {
            case "KeywordToken": {
              if (token.body === "else") {
                state = "BetweenElseAndEnd";
                break;
              }
            }
            default: {
              if (state === "BetweenElseAndEnd") {
                inbetweenTokens.push(token);
              }
            }
          }
        }
        return parseExpression((0, Tokens_1.tokensToString)(inbetweenTokens));
      }
      function parseIfStatementSingleLine(body) {
        const parsedPredicate = parseIfPredicate((0, Tokens_1.tokenize)(body));
        const parsedIfBody = parseIfBody((0, Tokens_1.tokenize)(body));
        const parsedElseBody = parseElseBody((0, Tokens_1.tokenize)(body));
        const errors = [];
        if (parsedPredicate.kind === "Err")
          errors.push(parsedPredicate.error);
        if (parsedIfBody.kind === "Err")
          errors.push(parsedIfBody.error);
        if (parsedElseBody.kind === "Err")
          errors.push(parsedElseBody.error);
        if (errors.length > 0) {
          return (0, result_1.Err)(errors.join("\n"));
        }
        return (0, result_1.Ok)((0, types_1.IfStatement)(parsedPredicate.value, parsedIfBody.value, [], parsedElseBody.value, []));
      }
      function getIndentLevel(line) {
        return line.split("").reduce((previous, current) => {
          if (previous.seenText)
            return previous;
          if (current === " ") {
            return {
              seenText: previous.seenText,
              indentLevel: previous.indentLevel + 1
            };
          }
          return {
            seenText: true,
            indentLevel: previous.indentLevel
          };
        }, { seenText: false, indentLevel: 0 }).indentLevel;
      }
      function parseIfStatement(body) {
        const isSingleLine = body.trim().split("\n").length === 1;
        if (isSingleLine) {
          return parseIfStatementSingleLine(body);
        }
        const lines = body.split("\n").filter((line) => line.trim().length > 0);
        const parsedPredicate = parseIfPredicate((0, Tokens_1.tokenize)(body));
        const indentLevel = getIndentLevel(lines[0]);
        const elseIndex = lines.reduce((previous, current, index) => {
          if (previous.found)
            return previous;
          if (current.trimEnd() === " ".repeat(indentLevel) + "else") {
            return {
              found: true,
              index
            };
          } else {
            return previous;
          }
        }, { found: false, index: -1 }).index;
        if (elseIndex === -1) {
          return (0, result_1.Err)("Missing else block");
        }
        const ifBody = lines.slice(1, elseIndex);
        const ifLetStart = ifBody.findIndex((line) => line.startsWith(" ".repeat(indentLevel + 4) + "let") && line.endsWith("let"));
        const ifLetEnd = ifBody.findIndex((line) => line.startsWith(" ".repeat(indentLevel + 4) + "in") && line.endsWith("in"));
        let ifLetBlock = [];
        if (ifLetStart > -1 && ifLetEnd > -1) {
          const letLines = ifBody.slice(ifLetStart + 1, ifLetEnd).map((line) => line.slice(indentLevel + 8));
          const letBlocks = (0, Blocks_1.intoBlocks)(letLines.join("\n"));
          ifLetBlock = letBlocks.map(parseBlock).filter((block) => block.kind === "Ok").map((block) => block.value);
        }
        const elseBody = lines.slice(elseIndex + 1);
        const elseLetStart = elseBody.findIndex((line) => line.startsWith(" ".repeat(indentLevel + 4) + "let") && line.endsWith("let"));
        const elseLetEnd = elseBody.findIndex((line) => line.startsWith(" ".repeat(indentLevel + 4) + "in") && line.endsWith("in"));
        let elseLetBlock = [];
        if (elseLetStart > -1 && elseLetEnd > -1) {
          const letLines = elseBody.slice(elseLetStart + 1, elseLetEnd).map((line) => line.slice(indentLevel + 8));
          const letBlocks = (0, Blocks_1.intoBlocks)(letLines.join("\n"));
          elseLetBlock = letBlocks.map(parseBlock).filter((block) => block.kind === "Ok").map((block) => block.value);
        }
        const parsedIfBody = parseExpression(ifBody.slice(ifLetEnd === -1 ? 0 : ifLetEnd + 1).join("\n"));
        const parsedElseBody = parseExpression(elseBody.slice(elseLetEnd === -1 ? 0 : elseLetEnd + 1).join("\n"));
        const errors = [];
        if (parsedPredicate.kind === "Err")
          errors.push(parsedPredicate.error);
        if (parsedIfBody.kind === "Err")
          errors.push(parsedIfBody.error);
        if (parsedElseBody.kind === "Err")
          errors.push(parsedElseBody.error);
        if (errors.length > 0) {
          return (0, result_1.Err)(errors.join("\n"));
        }
        return (0, result_1.Ok)((0, types_1.IfStatement)(parsedPredicate.value, parsedIfBody.value, ifLetBlock, parsedElseBody.value, elseLetBlock));
      }
      function isConstructor(str) {
        return str[0].toUpperCase() === str[0] && isNaN(parseInt(str, 10));
      }
      function parseEmptyList(tokens) {
        const withoutWhitespace = tokens.filter((t) => t.kind !== "WhitespaceToken");
        if (withoutWhitespace.length > 1) {
          return (0, result_1.Err)("Too many values for empty list.");
        } else if (withoutWhitespace.length === 0) {
          return (0, result_1.Err)("Expected [] but didn't find one.");
        }
        if (withoutWhitespace[0].kind === "LiteralToken" && withoutWhitespace[0].body === "[]") {
          return (0, result_1.Ok)((0, types_1.EmptyList)());
        }
        return (0, result_1.Err)(`Expected empty list [] but got ${withoutWhitespace[0].kind}`);
      }
      function parseListDestructure(tokens) {
        const parts = [];
        let isInDestructor = false;
        let destructorParts = [];
        for (const token of tokens) {
          switch (token.kind) {
            case "WhitespaceToken":
            case "OpenCurlyBracesToken":
            case "CloseCurlyBracesToken":
            case "ColonToken": {
              if (isInDestructor) {
                destructorParts.push(token);
              }
              break;
            }
            case "LiteralToken": {
              parts.push((0, types_1.EmptyList)());
              break;
            }
            case "OperatorToken": {
              if (token.body !== "::") {
                return (0, result_1.Err)(`Expected ::, [], or identifier but got ${token.body}`);
              }
              if (isInDestructor) {
                const destructure = parseDestructure(destructorParts);
                if (destructure.kind === "Err")
                  return destructure;
                parts.push(destructure.value);
                isInDestructor = false;
                destructorParts = [];
              }
              break;
            }
            case "IdentifierToken": {
              if (isConstructor(token.body)) {
                isInDestructor = true;
                destructorParts.push(token);
              } else if (isInDestructor) {
                destructorParts.push(token);
              } else {
                parts.push((0, types_1.Value)(token.body));
              }
              break;
            }
            case "StringToken": {
              parts.push((0, types_1.StringValue)(token.body.slice(1, -1)));
              break;
            }
            case "FormatStringToken": {
              parts.push((0, types_1.FormatStringValue)(token.body.slice(1, -1)));
              break;
            }
          }
        }
        return (0, result_1.Ok)((0, types_1.ListDestructure)(parts));
      }
      function parseBranchPattern(tokens) {
        let index = 0;
        while (index < tokens.length) {
          if (tokens[index].kind !== "WhitespaceToken")
            break;
          index++;
        }
        const firstToken = tokens[index];
        if (!firstToken)
          return (0, result_1.Err)("Failed to find token in branch.");
        if (hasTopLevelOperator("::", tokens)) {
          return parseListDestructure(tokens);
        }
        switch (firstToken.kind) {
          case "IdentifierToken": {
            if (isConstructor(firstToken.body)) {
              return parseDestructure(tokens);
            }
            if (firstToken.body === "default") {
              return (0, result_1.Ok)((0, types_1.Default)());
            } else {
              return (0, result_1.Err)("Expected a string or a destructure, but got an identifier. Try using an if statement instead");
            }
          }
          case "OpenCurlyBracesToken": {
            return parseDestructure(tokens);
          }
          case "StringToken": {
            return parseStringValue(tokens.slice(index));
          }
          case "FormatStringToken": {
            return parseFormatStringValue(tokens.slice(index));
          }
          case "LiteralToken": {
            const emptyList = parseEmptyList(tokens);
            if (emptyList.kind === "Ok")
              return emptyList;
          }
        }
        return (0, result_1.Err)(`Expected destructure or string but got ${firstToken.kind}`);
      }
      function parseCasePredicate(tokens) {
        const inbetweenTokens = [];
        let state = "WaitingForCase";
        for (const token of tokens) {
          switch (token.kind) {
            case "KeywordToken": {
              if (token.body === "case") {
                state = "BetweenCaseAndOr";
                break;
              } else if (token.body === "of") {
                state = "PastOf";
                break;
              }
            }
            default: {
              inbetweenTokens.push(token);
            }
          }
          if (state === "PastOf")
            break;
        }
        return parseExpression((0, Tokens_1.tokensToString)(inbetweenTokens));
      }
      function parseCaseStatement(body) {
        body = body.split("\n").filter((l) => l.trim().length > 0).join("\n");
        const rootIndentLevel = getIndentLevel(body.split("\n")[0]);
        const casePredicate = parseCasePredicate((0, Tokens_1.tokenize)(body));
        let firstIndexOfOf = 0;
        for (const line of body.split("\n")) {
          if (line.endsWith(" of")) {
            break;
          }
          firstIndexOfOf++;
        }
        const lines = body.split("\n");
        let branches = [];
        let branchPattern = "";
        let branchLines = [];
        for (var i = firstIndexOfOf + 1; i < lines.length; i++) {
          const line = lines[i];
          const indent = getIndentLevel(line);
          let wasReset = false;
          if (rootIndentLevel + 4 === indent) {
            if (branchPattern === "") {
              const split = splitOnArrowTokens((0, Tokens_1.tokenize)(line));
              if (split.length === 1) {
                branchPattern = (0, Tokens_1.tokensToString)(split[0]);
              } else if (split.length === 2) {
                branchPattern = (0, Tokens_1.tokensToString)(split[0]);
                branchLines.push((0, Tokens_1.tokensToString)(split[1]));
              } else {
                branches.push((0, result_1.Err)(`Failed to parse branch on line ${i}`));
              }
              wasReset = true;
            }
            if (!branchLines.join("").trim()) {
              continue;
            }
            const spaces = " ".repeat(8 + rootIndentLevel);
            const letStart = branchLines.findIndex((line2) => line2.startsWith(spaces + "let") && line2.endsWith("let"));
            const letEnd = branchLines.findIndex((line2) => line2.startsWith(spaces + "in") && line2.endsWith("in"));
            let letBlock = [];
            if (letStart > -1 && letEnd > -1) {
              const letLines = branchLines.slice(letStart + 1, letEnd).map((line2) => line2.slice(8 + rootIndentLevel + 4));
              const letBlocks = (0, Blocks_1.intoBlocks)(letLines.join("\n"));
              letBlock = letBlocks.map(parseBlock).filter((block) => block.kind === "Ok").map((block) => block.value);
            }
            const branchExpression = parseExpression(branchLines.slice(letEnd + 1).join("\n"));
            const parsedBranchPattern = parseBranchPattern((0, Tokens_1.tokenize)(branchPattern));
            const maybeLetAndDoErrorMessage = letAndDoErrorMessage(letStart, letEnd);
            if (branchExpression.kind === "Err" || parsedBranchPattern.kind === "Err" || maybeLetAndDoErrorMessage) {
              if (maybeLetAndDoErrorMessage)
                branches.push((0, result_1.Err)(maybeLetAndDoErrorMessage));
              if (branchExpression.kind === "Err")
                branches.push(branchExpression);
              if (parsedBranchPattern.kind === "Err")
                branches.push(parsedBranchPattern);
            } else {
              branches.push((0, result_1.Ok)((0, types_1.Branch)(parsedBranchPattern.value, branchExpression.value, letBlock)));
            }
            if (!wasReset) {
              const split = splitOnArrowTokens((0, Tokens_1.tokenize)(line));
              if (split.length === 1) {
                branchPattern = (0, Tokens_1.tokensToString)(split[0]);
                branchLines = [];
              } else if (split.length === 2) {
                branchPattern = (0, Tokens_1.tokensToString)(split[0]);
                branchLines = [(0, Tokens_1.tokensToString)(split[1])];
              } else {
                branches.push((0, result_1.Err)(`Failed to parse branch on line ${i}`));
              }
            } else {
              branchPattern = "";
              branchLines = [];
            }
          } else {
            branchLines.push(line);
          }
        }
        if (branchLines.length > 0) {
          const indent = 8;
          const spaces = " ".repeat(indent + rootIndentLevel);
          const letStart = branchLines.findIndex((line) => line.startsWith(spaces + "let") && line.endsWith("let"));
          const letEnd = branchLines.findIndex((line) => line.startsWith(spaces + "in") && line.endsWith("in"));
          let letBlock = [];
          if (letStart > -1 && letEnd > -1) {
            const letLines = branchLines.slice(letStart + 1, letEnd).map((line) => line.slice(8 + rootIndentLevel + 4));
            const letBlocks = (0, Blocks_1.intoBlocks)(letLines.join("\n"));
            letBlock = letBlocks.map(parseBlock).filter((block) => block.kind === "Ok").map((block) => block.value);
          }
          const branchExpression = parseExpression(branchLines.slice(letEnd + 1).join("\n"));
          const parsedBranchPattern = parseBranchPattern((0, Tokens_1.tokenize)(branchPattern));
          const maybeLetAndDoErrorMessage = letAndDoErrorMessage(letStart, letEnd);
          if (branchExpression.kind === "Err" || parsedBranchPattern.kind === "Err" || maybeLetAndDoErrorMessage) {
            if (maybeLetAndDoErrorMessage)
              branches.push((0, result_1.Err)(maybeLetAndDoErrorMessage));
            if (branchExpression.kind === "Err")
              branches.push(branchExpression);
            if (parsedBranchPattern.kind === "Err")
              branches.push(parsedBranchPattern);
          } else {
            branches.push((0, result_1.Ok)((0, types_1.Branch)(parsedBranchPattern.value, branchExpression.value, letBlock)));
          }
        }
        const errors = [];
        if (casePredicate.kind === "Err")
          errors.push(casePredicate.error);
        branches.forEach((branch, i2) => {
          if (branch.kind === "Err") {
            errors.push(branch.error);
          } else {
            if (branch.value.pattern.kind === "Default" && i2 < branches.length - 1) {
              errors.push("default case must come last in the case..of");
            }
          }
        });
        if (errors.length > 0) {
          return (0, result_1.Err)(errors.join("\n"));
        }
        const validBranches = branches.map((value) => value.value);
        const needsDefault = validBranches.filter((t) => t.pattern.kind === "ListDestructure" || t.pattern.kind === "EmptyList").length > 0;
        const hasDefault = validBranches.filter((t) => t.pattern.kind === "Default").length > 0;
        const hasWildcardDestructure = validBranches.filter((t) => t.pattern.kind === "ListDestructure" && t.pattern.parts.length == 2 && t.pattern.parts[0].kind === "Value" && (t.pattern.parts[1].kind === "Value" || t.pattern.parts[1].kind === "EmptyList")).length > 0;
        const hasEmptyList = validBranches.filter((t) => t.pattern.kind === "EmptyList").length > 0;
        const isSimpleDestructure = hasWildcardDestructure && hasEmptyList;
        if (needsDefault && !hasDefault && !isSimpleDestructure) {
          return (0, result_1.Err)("You must provide a default case when using list destructoring");
        }
        return (0, result_1.Ok)((0, types_1.CaseStatement)(casePredicate.value, validBranches));
      }
      function parseAddition(tokens) {
        const operator = "+";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.Addition)(left.value, right.value));
      }
      function parseSubtraction(tokens) {
        const operator = "-";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.Subtraction)(left.value, right.value));
      }
      function parseMultiplcation(tokens) {
        const operator = "*";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.Multiplication)(left.value, right.value));
      }
      function parseDivision(tokens) {
        const operator = "/";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.Division)(left.value, right.value));
      }
      function parseMod(tokens) {
        const operator = "%";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.Mod)(left.value, right.value));
      }
      function parseLeftPipe(tokens) {
        const operator = "|>";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        if (!(0, types_1.isLeftPipeableExpression)(right.value))
          return (0, result_1.Err)(`Could not pipe to ${right.value}`);
        return (0, result_1.Ok)((0, types_1.LeftPipe)(left.value, right.value));
      }
      function parseRightPipe(tokens) {
        const operator = "<|";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.RightPipe)(left.value, right.value));
      }
      function parseModuleReference(tokens) {
        const body = (0, Tokens_1.tokensToString)(tokens);
        const trimmedBody = body.trim();
        const firstPart = trimmedBody.split(" ")[0];
        const possibleModuleParts = firstPart.split(".");
        const moduleName = possibleModuleParts.slice(0, possibleModuleParts.length - 1);
        const value = possibleModuleParts[possibleModuleParts.length - 1] + " " + trimmedBody.split(" ").slice(1).join(" ");
        const expression = parseExpression(value, true);
        if (expression.kind === "Err")
          return expression;
        return (0, result_1.Ok)((0, types_1.ModuleReference)(moduleName.length === 1 && moduleName[0].trim().length === 0 ? [] : moduleName, expression.value));
      }
      function parseFunctionCall(tokens) {
        let functionName = null;
        let index = 0;
        while (index < tokens.length) {
          const token = tokens[index];
          if (token.kind === "WhitespaceToken") {
          } else if (token.kind === "IdentifierToken") {
            functionName = token.body;
            break;
          } else {
            return (0, result_1.Err)(`Expected identifier but got ${token.kind}: ${(0, Tokens_1.tokensToString)([
              token
            ])}`);
          }
          index++;
        }
        index++;
        if (!functionName) {
          return (0, result_1.Err)(`Expected identifier but got nothing.`);
        }
        if (functionName[0].toUpperCase() === functionName[0]) {
          return parseConstructor(tokens);
        }
        while (index < tokens.length) {
          if (tokens[index].kind === "WhitespaceToken") {
            index++;
          } else {
            break;
          }
        }
        const args = [];
        let currentArg = [];
        let bracketDepth = 0;
        let colonDepth = 0;
        let curlyBracketDepth = 0;
        for (var i = index; i < tokens.length; i++) {
          const token = tokens[i];
          switch (token.kind) {
            case "LiteralToken":
            case "StringToken":
            case "FormatStringToken":
            case "IdentifierToken": {
              if (currentArg.join().trim().length > 0) {
                currentArg.push(token.body);
              } else {
                if (bracketDepth === 0 && colonDepth === 0) {
                  args.push(currentArg.join(""));
                  if (tokens[i + 1] && tokens[i + 1].kind === "OpenBracketToken" && tokens[i + 2] && tokens[i + 2].kind === "CloseBracketToken") {
                    args.push(`${token.body}()`);
                    i += 2;
                  } else {
                    args.push(token.body);
                  }
                  currentArg = [];
                } else {
                  currentArg.push(token.body);
                }
              }
              break;
            }
            case "OpenBracketToken": {
              if (bracketDepth === 0 && colonDepth === 0) {
                if (currentArg.join().trim().length > 0) {
                  args.push(currentArg.join(""));
                }
                currentArg = [];
              } else {
                currentArg.push("(");
              }
              bracketDepth++;
              break;
            }
            case "CloseBracketToken": {
              bracketDepth--;
              if (bracketDepth <= 0 && colonDepth === 0) {
                args.push(currentArg.join(""));
                currentArg = [];
              } else {
                currentArg.push(")");
              }
              break;
            }
            case "OpenCurlyBracesToken": {
              curlyBracketDepth++;
              currentArg.push("{");
              break;
            }
            case "CloseCurlyBracesToken": {
              curlyBracketDepth--;
              currentArg.push("}");
              if (colonDepth > 0)
                colonDepth--;
              if (bracketDepth === 0 && curlyBracketDepth === 0) {
                args.push(currentArg.join(""));
                currentArg = [];
              }
              break;
            }
            case "ColonToken": {
              currentArg.push(":");
              colonDepth++;
              break;
            }
            case "CommaToken": {
              currentArg.push(",");
              if (colonDepth === 1) {
                colonDepth--;
              }
              break;
            }
            case "OperatorToken": {
              currentArg.push(token.body);
              break;
            }
            case "WhitespaceToken": {
              currentArg.push(token.body);
              break;
            }
            case "ArrowToken": {
              currentArg.push("->");
              break;
            }
            case "KeywordToken": {
              currentArg.push(token.body);
              break;
            }
          }
        }
        if (currentArg.length > 0) {
          args.push(currentArg.join(""));
        }
        const parsedArgs = args.filter((arg) => arg.trim().length > 0).map((arg) => {
          return parseExpression(arg);
        });
        const errors = parsedArgs.filter((arg) => arg.kind === "Err");
        if (errors.length > 0) {
          return (0, result_1.Err)("Failed to parse function call due to:\n" + errors.map((error) => error.error).join("\n"));
        }
        const correctArgs = parsedArgs.filter((arg) => arg.kind === "Ok").map((arg) => arg.value);
        return (0, result_1.Ok)((0, types_1.FunctionCall)(functionName, correctArgs));
      }
      function parseLambda(tokens) {
        let index = 0;
        let isDone = false;
        const args = [];
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "IdentifierToken": {
              args.push(token.body);
              break;
            }
            case "ArrowToken": {
              isDone = true;
              break;
            }
            case "WhitespaceToken": {
              break;
            }
          }
          if (isDone)
            break;
          index++;
        }
        index++;
        const lambdaBody = (0, Tokens_1.tokensToString)(tokens.slice(index));
        const parsedBody = parseExpression(lambdaBody);
        if (parsedBody.kind === "Err") {
          return (0, result_1.Err)("Failed to parse lambda definiton due to:\n" + parsedBody.error);
        }
        return (0, result_1.Ok)((0, types_1.Lambda)(args, parsedBody.value));
      }
      function parseOperator(operator, tokens) {
        let seenOperator = false;
        let index = 0;
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "OperatorToken": {
              if (token.body === operator) {
                seenOperator = true;
              }
            }
          }
          if (seenOperator)
            break;
          index++;
        }
        const left = parseExpression((0, Tokens_1.tokensToString)(tokens.slice(0, index)));
        const right = parseExpression((0, Tokens_1.tokensToString)(tokens.slice(index + 1)));
        return { left, right };
      }
      function AllOperators() {
        return {
          kind: "AllOperators"
        };
      }
      function hasTopLevelOperator(operator, tokens) {
        let bracketDepth = 0;
        let curlyBracketDepth = 0;
        for (const token of tokens) {
          switch (token.kind) {
            case "OpenBracketToken": {
              bracketDepth++;
              break;
            }
            case "CloseBracketToken": {
              bracketDepth--;
              break;
            }
            case "OpenCurlyBracesToken": {
              curlyBracketDepth++;
              break;
            }
            case "CloseCurlyBracesToken": {
              curlyBracketDepth--;
              break;
            }
            case "OperatorToken": {
              if (bracketDepth === 0 && curlyBracketDepth === 0) {
                if (typeof operator === "string" && token.body === operator || operator.kind === "AllOperators") {
                  return true;
                }
              }
            }
          }
        }
        return false;
      }
      function getFirstTopLevelOperator(tokens) {
        let bracketDepth = 0;
        let curlyBracketDepth = 0;
        for (const token of tokens) {
          switch (token.kind) {
            case "OpenBracketToken": {
              bracketDepth++;
              break;
            }
            case "CloseBracketToken": {
              bracketDepth--;
              break;
            }
            case "OpenCurlyBracesToken": {
              curlyBracketDepth++;
              break;
            }
            case "CloseCurlyBracesToken": {
              curlyBracketDepth--;
              break;
            }
            case "OperatorToken": {
              if (bracketDepth === 0 && curlyBracketDepth === 0) {
                return token;
              }
            }
          }
        }
        return null;
      }
      function parseEquality(tokens) {
        const operator = "==";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.Equality)(left.value, right.value));
      }
      function parseInEquality(tokens) {
        const operator = "!=";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.InEquality)(left.value, right.value));
      }
      function parseLessThan(tokens) {
        const operator = "<";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.LessThan)(left.value, right.value));
      }
      function parseLessThanOrEqual(tokens) {
        const operator = "<=";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.LessThanOrEqual)(left.value, right.value));
      }
      function parseGreaterThan(tokens) {
        const operator = ">";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.GreaterThan)(left.value, right.value));
      }
      function parseGreaterThanOrEqual(tokens) {
        const operator = ">=";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.GreaterThanOrEqual)(left.value, right.value));
      }
      function parseAnd(tokens) {
        const operator = "&&";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.And)(left.value, right.value));
      }
      function parseOr(tokens) {
        const operator = "||";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.Or)(left.value, right.value));
      }
      function parseListPrepend(tokens) {
        const operator = "::";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "Err")
          return left;
        if (right.kind === "Err")
          return right;
        return (0, result_1.Ok)((0, types_1.ListPrepend)(left.value, right.value));
      }
      function dropSurroundingBrackets(tokens) {
        let start = 0;
        let end = tokens.length - 1;
        let seenOpen = false;
        while (start < tokens.length) {
          if (tokens[start].kind === "OpenBracketToken") {
            seenOpen = true;
            break;
          } else if (tokens[start].kind !== "WhitespaceToken") {
            break;
          }
          start++;
        }
        if (!seenOpen)
          return tokens;
        let seenClose = false;
        while (end > start) {
          if (tokens[end].kind === "CloseBracketToken") {
            seenClose = true;
            break;
          } else if (tokens[end].kind !== "WhitespaceToken") {
            break;
          }
          end--;
        }
        if (!seenClose)
          return tokens;
        return tokens.slice(start + 1, end);
      }
      function letAndDoErrorMessage(letIndex, inIndex, doIndex, doReturnIndex) {
        const isMissingLet = letIndex === -1;
        const isMissingIn = inIndex === -1;
        const hasCompleteLetIn = !isMissingLet && !isMissingIn || isMissingLet && isMissingIn;
        const isMissingDo = doIndex === -1;
        const isMissingReturn = doReturnIndex === -1;
        const hasCompleteDoReturn = !isMissingDo && !isMissingReturn || isMissingDo && isMissingReturn;
        if (hasCompleteLetIn && hasCompleteDoReturn)
          return null;
        if (!hasCompleteLetIn) {
          if (isMissingLet) {
            if (hasCompleteDoReturn) {
              return `Missing let before in.`;
            }
            if (isMissingDo) {
              return `Missing let before in, but found return without do. Did you mean to do let..in instead of in..return?`;
            }
            if (isMissingReturn) {
              return `Missing let before in, missing return after do. Did you mean to do let..in or do..return instead of do..in?`;
            }
          } else {
            if (hasCompleteDoReturn) {
              return `Missing in after let. let should be followed by in.`;
            }
            if (isMissingDo) {
              return `Missing in after let, but found return without do. Did you mean to do let..in or do..return instead of let..return?`;
            }
            if (isMissingReturn) {
              return `Missing in after let, missing return after do. let should be followed by in, and do followed by return.`;
            }
          }
        }
        if (!hasCompleteDoReturn) {
          if (isMissingDo) {
            return `Missing do before return.`;
          } else {
            return `Missing return after do.`;
          }
        }
        return null;
      }
      function parseExpression(body, isModuleReference = false) {
        const preTokens = (0, Tokens_1.tokenize)(body);
        const tokens = hasTopLevelOperator(AllOperators(), preTokens) ? preTokens : dropSurroundingBrackets(preTokens);
        let index = 0;
        while (index < tokens.length) {
          if (tokens[index].kind !== "WhitespaceToken")
            break;
          index++;
        }
        const firstToken = tokens[index];
        if (!firstToken) {
          return (0, result_1.Err)(`Expected a token but got "${tokens}"`);
        }
        if (isModuleReference && firstToken.kind === "KeywordToken") {
          tokens[index] = (0, Tokens_1.IdentifierToken)({ body: firstToken.body });
        }
        const isKeyword = firstToken.kind === "KeywordToken";
        if (firstToken.kind === "OperatorToken" && firstToken.body === "\\") {
          return parseLambda(tokens);
        } else if (!isKeyword && hasTopLevelOperator("|>", tokens)) {
          return parseLeftPipe(tokens);
        } else if (!isKeyword && hasTopLevelOperator("<|", tokens)) {
          return parseRightPipe(tokens);
        }
        switch (firstToken.kind) {
          case "KeywordToken": {
            if (firstToken.body === "if") {
              return parseIfStatement(body);
            } else if (firstToken.body === "case") {
              return parseCaseStatement(body);
            }
            break;
          }
          case "OperatorToken": {
            if (firstToken.body === "\\") {
              return parseLambda(tokens);
            }
            break;
          }
          case "OpenCurlyBracesToken": {
            if (hasTopLevelOperator("::", tokens)) {
              return parseListPrepend(tokens);
            }
            const tokensOtherThanWhitespace = tokens.slice(index + 1).filter((token) => token.kind !== "WhitespaceToken");
            if (tokensOtherThanWhitespace.filter((token) => token.kind === "IdentifierToken" || token.kind === "CommaToken" || token.kind === "CloseCurlyBracesToken").length === tokensOtherThanWhitespace.length) {
            }
            return parseObjectLiteral(tokens);
          }
          case "IdentifierToken": {
            if (hasTopLevelOperator(AllOperators(), tokens)) {
              break;
            }
            const tokensOtherThanWhitespace = tokens.slice(index + 1).filter((token) => token.kind !== "WhitespaceToken");
            if (firstToken.body.indexOf(".") > -1) {
              const possibleModuleParts = firstToken.body.split(".");
              if (possibleModuleParts.length > 1) {
                if (hasTopLevelOperator("::", tokens)) {
                  return parseListPrepend(tokens);
                }
                return parseModuleReference(tokens.slice(index));
              }
            }
            if (tokensOtherThanWhitespace.length > 0) {
              if (hasTopLevelOperator("::", tokens)) {
                return parseListPrepend(tokens);
              }
              return parseFunctionCall(tokens.slice(index));
            }
            break;
          }
        }
        const maybeOperator = getFirstTopLevelOperator(tokens);
        if (maybeOperator !== null) {
          switch (maybeOperator.body) {
            case "==": {
              return parseEquality(tokens);
            }
            case "!=": {
              return parseInEquality(tokens);
            }
            case "<": {
              return parseLessThan(tokens);
            }
            case "<=": {
              return parseLessThanOrEqual(tokens);
            }
            case ">": {
              return parseGreaterThan(tokens);
            }
            case ">=": {
              return parseGreaterThanOrEqual(tokens);
            }
            case "&&": {
              return parseAnd(tokens);
            }
            case "||": {
              return parseOr(tokens);
            }
            case "::": {
              return parseListPrepend(tokens);
            }
            case "+": {
              return parseAddition(tokens);
            }
            case "-": {
              return parseSubtraction(tokens);
            }
            case "*": {
              return parseMultiplcation(tokens);
            }
            case "/": {
              return parseDivision(tokens);
            }
            case "%": {
              return parseMod(tokens);
            }
          }
        }
        let isDone = false;
        while (index < tokens.length) {
          const token = tokens[index];
          isDone = true;
          switch (token.kind) {
            case "ArrowToken": {
              break;
            }
            case "AssignToken": {
              break;
            }
            case "CloseBracketToken": {
              break;
            }
            case "CloseCurlyBracesToken": {
              break;
            }
            case "ColonToken": {
              break;
            }
            case "CommaToken": {
              break;
            }
            case "FormatStringToken": {
              return parseFormatStringValue(tokens.slice(index));
            }
            case "IdentifierToken": {
              break;
            }
            case "KeywordToken": {
              break;
            }
            case "LiteralToken": {
              if (token.body.startsWith("[")) {
                if (listRangeDotsNotWithinString(tokens)) {
                  return parseListRange(tokens);
                }
                return parseListValue(tokens);
              }
              break;
            }
            case "OpenBracketToken": {
              break;
            }
            case "OpenCurlyBracesToken": {
              break;
            }
            case "OperatorToken": {
              if (token.body === "\\") {
                return parseLambda(tokens.slice(index));
              }
              break;
            }
            case "PipeToken": {
              break;
            }
            case "StringToken": {
              return parseStringValue(tokens.slice(index));
            }
            case "WhitespaceToken": {
              index++;
              isDone = false;
              break;
            }
          }
          if (isDone)
            break;
        }
        const trimmedBody = body.trim();
        if (trimmedBody.split(" ").length === 1 || !isNaN(parseInt(trimmedBody, 10))) {
          return parseValue(tokens);
        } else {
          const firstPart = trimmedBody.split(" ")[0];
          const possibleModuleParts = firstPart.split(".");
          if (possibleModuleParts.length > 1) {
            return parseModuleReference(tokens);
          }
          const firstChar = trimmedBody.slice(0, 1);
          if (firstChar.toUpperCase() === firstChar) {
            return parseConstructor(tokens);
          }
          if (trimmedBody.split(" ").length > 1) {
            return parseFunctionCall(tokens);
          }
        }
        return (0, result_1.Err)(`No expression found: '${body}'`);
      }
      exports.parseExpression = parseExpression;
      function deIndent(string, amount) {
        return string.split("\n").map((part) => part.slice(amount)).join("\n");
      }
      function parseDoBlock(tokens) {
        const expressions = [];
        function parseDoExpression(currentBuffer2) {
          const asString = deIndent((0, Tokens_1.tokensToString)(currentBuffer2), 8);
          const asBlock = (0, Blocks_1.intoBlocks)(asString);
          if (asBlock.length > 0 && asBlock[0].kind !== "UnknownBlock") {
            for (const block of asBlock) {
              if (block.kind === "CommentBlock") {
                continue;
              }
              if (block.kind === "ConstBlock" || block.kind === "FunctionBlock") {
                expressions.push(parseBlock(block));
              } else {
                expressions.push((0, result_1.Err)(`Got unexpected block in do: ${block.kind}`));
              }
            }
          } else {
            const expression = parseExpression((0, Tokens_1.tokensToString)(currentBuffer2));
            if (expression.kind === "Ok" && (expression.value.kind === "FunctionCall" || expression.value.kind === "ModuleReference" || expression.value.kind === "IfStatement")) {
              expressions.push(expression);
            }
            if (expression.kind === "Err") {
              expressions.push(expression);
            }
          }
        }
        let currentBuffer = [(0, Tokens_1.WhitespaceToken)({ body: "        " })];
        const baseIndentLevel = 8;
        for (const token of tokens.slice(1)) {
          switch (token.kind) {
            case "IdentifierToken": {
              currentBuffer.push(token);
              break;
            }
            case "StringToken": {
              currentBuffer.push(token);
              break;
            }
            case "WhitespaceToken": {
              const intoLines = token.body.split("\n");
              const currentIndentLevel = intoLines[intoLines.length - 1].split("").filter((char) => char === " ").length;
              if (token.body.indexOf("\n\n") > -1 && currentIndentLevel === baseIndentLevel) {
                parseDoExpression(currentBuffer);
                currentBuffer = [(0, Tokens_1.WhitespaceToken)({ body: "        " })];
              } else {
                currentBuffer.push(token);
              }
              break;
            }
            default: {
              currentBuffer.push(token);
              break;
            }
          }
        }
        if (currentBuffer.filter((t) => t.kind !== "WhitespaceToken").length > 0) {
          parseDoExpression(currentBuffer);
        }
        const errors = expressions.filter((e) => e.kind === "Err").map((e) => e.error).join("\n");
        if (errors) {
          return (0, result_1.Err)(errors);
        }
        const values = expressions.filter((e) => e.kind === "Ok").map((e) => e.value);
        return (0, result_1.Ok)((0, types_1.DoBlock)(values));
      }
      function isTokenAtIndentLevel(currentToken, previousToken, tokenName, level) {
        if (previousToken.kind === "WhitespaceToken") {
          const lineSplits = previousToken.body.split("\n");
          const endsWithFourIndents = lineSplits[lineSplits.length - 1] === " ".repeat(level);
          return currentToken.kind === "KeywordToken" && currentToken.body === tokenName && endsWithFourIndents;
        }
        return false;
      }
      function parseFunction(tokens) {
        if (tokens[0].kind !== "IdentifierToken") {
          return (0, result_1.Err)("Expected identfier, got " + tokens[0].kind);
        }
        const functionName = tokens[0].body;
        let index = 1;
        while (index < tokens.length) {
          if (tokens[index].kind === "WhitespaceToken") {
          } else if (tokens[index].kind !== "ColonToken") {
            return (0, result_1.Err)("Expected `:`, got " + tokens[index].kind);
          } else if (tokens[index].kind === "ColonToken") {
            break;
          }
          index++;
        }
        const doIndex = tokens.findIndex((t) => t.kind === "KeywordToken" && t.body === "do");
        const doReturnIndex = tokens.findIndex((t) => t.kind === "KeywordToken" && t.body === "return");
        const doBody = doIndex > -1 ? parseDoBlock(tokens.slice(doIndex + 1, doReturnIndex)) : void 0;
        index++;
        const lastIndex = index;
        let currentType = [];
        let isDone = false;
        while (index < tokens.length) {
          const token = tokens[index];
          const previousToken = index > lastIndex ? tokens[index - 1] : null;
          switch (token.kind) {
            case "IdentifierToken": {
              if (previousToken && previousToken.kind === "WhitespaceToken" && previousToken.body.indexOf("\n") > -1) {
                isDone = true;
              } else {
                currentType.push(token);
              }
              break;
            }
            default: {
              currentType.push(token);
            }
          }
          if (isDone)
            break;
          index++;
        }
        if (doIndex > -1) {
          index = doReturnIndex + 1;
        }
        const tokenizedTypes = (0, Tokens_1.tokenizeType)(currentType);
        if (tokenizedTypes.kind === "Err")
          return tokenizedTypes;
        const types = tokenizedTypes.value;
        const letStart = tokens.findIndex((t, i) => {
          const previous = tokens[i - 1];
          if (!previous)
            return false;
          return isTokenAtIndentLevel(t, previous, "let", 4);
        });
        const letEnd = tokens.findIndex((t, i) => {
          const previous = tokens[i - 1];
          if (!previous)
            return false;
          return isTokenAtIndentLevel(t, previous, "in", 4);
        });
        const maybeLetAndDoErrorMessage = letAndDoErrorMessage(letStart, letEnd, doIndex, doReturnIndex);
        if (maybeLetAndDoErrorMessage)
          return (0, result_1.Err)(maybeLetAndDoErrorMessage);
        let letBlock = [];
        if (letStart > -1 && letEnd > -1) {
          const firstPastWhitespace = tokens.slice(letStart + 1).findIndex((t) => t.kind !== "WhitespaceToken");
          const letTokens = tokens.slice(letStart + firstPastWhitespace + 1, letEnd);
          const letLines = (" ".repeat(8) + (0, Tokens_1.tokensToString)(letTokens)).split("\n").map((line) => line.slice(8));
          const letBlocks = (0, Blocks_1.intoBlocks)(letLines.join("\n"));
          letBlock = letBlocks.map(parseBlock).filter((block) => block.kind === "Ok").map((block) => block.value);
        }
        const argumentLine = (0, Tokens_1.tokensToString)(tokens.slice(lastIndex)).split("\n")[1];
        if (!argumentLine) {
          return (0, result_1.Err)(`No arguments found in function definition.
Functions should look like:
\`\`\`
foo: string -> string
foo name =
    "Hi! " + name
\`\`\`
But I seemed to only find the \`foo: string -> string\` line.
`);
        }
        const argumentNames = argumentLine.slice(functionName.length).split("=")[0].split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
        const combinedArguments = types.slice(0, types.length - 1).map((type_, i) => {
          if (argumentNames.length <= i) {
            const parsedType = parseRootTypeTokens(type_);
            if (parsedType.kind === "Err")
              return (0, result_1.Err)(`Failed to parse argument ${i} due to ${parsedType.error}`);
            return (0, result_1.Ok)((0, types_1.AnonFunctionArg)(i, parsedType.value));
          } else {
            const name = argumentNames[i];
            const parsedType = parseRootTypeTokens(type_);
            if (parsedType.kind === "Err")
              return (0, result_1.Err)(`Failed to parse ${name} due to ${parsedType.error}`);
            return (0, result_1.Ok)((0, types_1.FunctionArg)(name, parsedType.value));
          }
        });
        const returnParts = types[types.length - 1];
        const returnType = parseRootTypeTokens(returnParts);
        let bodyStart = tokens.findIndex((t) => t.kind === "AssignToken") + 1;
        let body = (0, Tokens_1.tokensToString)(tokens.slice(bodyStart)).split("\n");
        if (letEnd > -1) {
          body = (0, Tokens_1.tokensToString)(tokens.slice(letEnd + 1)).split("\n");
        }
        if (doIndex > -1) {
          bodyStart = doReturnIndex + 1;
          body = (0, Tokens_1.tokensToString)(tokens.slice(bodyStart)).split("\n");
        }
        const parsedBody = parseExpression(body.join("\n"));
        if (parsedBody.kind === "Err") {
          return (0, result_1.Err)(`Failed to parse function body due to ${parsedBody.error}`);
        }
        if (returnType.kind === "Err") {
          return (0, result_1.Err)(`Failed to parse function return type due to ${returnType.error}`);
        }
        if (doBody !== void 0 && doBody.kind === "Err")
          return doBody;
        for (const arg of combinedArguments) {
          if (arg.kind === "Err")
            return arg;
        }
        return (0, result_1.Ok)((0, types_1.Function)(functionName, returnType.value, combinedArguments.map((arg) => arg.value), letBlock, parsedBody.value, doBody === void 0 ? void 0 : doBody.value));
      }
      function parseConst(tokens) {
        if (tokens[0].kind !== "IdentifierToken") {
          return (0, result_1.Err)("Expected identfier, got " + tokens[0].kind);
        }
        const constName = tokens[0].body;
        let index = 1;
        while (index < tokens.length) {
          const token = tokens[index];
          if (token.kind === "WhitespaceToken") {
          } else if (token.kind !== "ColonToken") {
            return (0, result_1.Err)("Expected `:`, got " + token.kind);
          } else if (token.kind === "ColonToken") {
            break;
          }
          index++;
        }
        index++;
        let constType = [];
        let isDoneReadingType = false;
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "WhitespaceToken": {
              if (token.body.indexOf("\n") > -1) {
                isDoneReadingType = true;
                break;
              }
              break;
            }
            case "IdentifierToken": {
              constType.push(token);
              break;
            }
            case "OpenBracketToken": {
              constType.push(token);
              break;
            }
            case "CloseBracketToken": {
              constType.push(token);
              break;
            }
          }
          if (isDoneReadingType)
            break;
          index++;
        }
        index++;
        let bodyParts = tokens.slice(index);
        let block = (0, Tokens_1.tokensToString)(bodyParts);
        const lines = block.split("\n");
        const letStart = lines.findIndex((line) => line.startsWith("    let") && line.endsWith("let"));
        const letEnd = lines.findIndex((line) => line.startsWith("    in") && line.endsWith("in"));
        const maybeLetAndDoErrorMessage = letAndDoErrorMessage(letStart, letEnd);
        if (maybeLetAndDoErrorMessage)
          return (0, result_1.Err)(maybeLetAndDoErrorMessage);
        let letBlock = [];
        if (letStart > -1 && letEnd > -1) {
          const letLines = lines.slice(letStart + 1, letEnd).map((line) => line.slice(8));
          const letBlocks = (0, Blocks_1.intoBlocks)(letLines.join("\n"));
          letBlock = letBlocks.map(parseBlock).filter((block2) => block2.kind === "Ok").map((block2) => block2.value);
        }
        const parsedType = parseType(constType);
        const body = [];
        const split = block.split("\n");
        const start = letEnd > -1 ? letEnd + 1 : 0;
        let seenEquals = false;
        for (let i = start; i < split.length; i++) {
          if (seenEquals) {
            body.push(split[i]);
          } else {
            if (split[i].indexOf("=") === -1) {
              body.push(split[i]);
            } else {
              body.push(split[i].split("=").slice(1).join("="));
              seenEquals = true;
            }
          }
        }
        const parsedBody = parseExpression(body.join("\n"));
        if (parsedBody.kind === "Err") {
          return (0, result_1.mapError)((error) => `Failed to parse body due to ${error}`, parsedBody);
        }
        if (parsedType.kind === "Err") {
          return (0, result_1.mapError)((error) => `Failed to parse type due to ${error}`, parsedType);
        }
        return (0, result_1.Ok)((0, types_1.Const)(constName, parsedType.value, letBlock, parsedBody.value));
      }
      function parseImport(tokens) {
        const imports = [];
        let isInExposing = false;
        let isInAlias = false;
        let moduleName = "";
        let alias = (0, maybe_1.Nothing)();
        const exposing = [];
        for (var i = 0; i < tokens.length; i++) {
          const token = tokens[i];
          switch (token.kind) {
            case "KeywordToken": {
              if (token.body === "import") {
                continue;
              } else if (token.body === "exposing") {
                isInExposing = true;
              } else if (token.body === "as") {
                isInExposing = false;
                isInAlias = true;
              } else {
                return (0, result_1.Err)("Expected `import` but got " + token.body);
              }
              break;
            }
            case "StringToken":
            case "IdentifierToken": {
              if (isInExposing) {
                exposing.push(token.body);
              } else if (isInAlias) {
                alias = (0, maybe_1.Just)(token.body);
              } else {
                moduleName = token.body;
              }
              break;
            }
            case "WhitespaceToken":
            case "CommaToken":
            case "OpenBracketToken":
            case "CloseBracketToken": {
              continue;
            }
            default: {
              return (0, result_1.Err)("Expected `import` but got " + token.kind);
            }
          }
        }
        const namespace = moduleName.startsWith('"') ? "Relative" : "Global";
        imports.push((0, types_1.ImportModule)(moduleName, alias, exposing, namespace));
        return (0, result_1.Ok)((0, types_1.Import)(imports));
      }
      function parseExport(tokens) {
        const exports2 = [];
        for (var i = 0; i < tokens.length; i++) {
          const token = tokens[i];
          switch (token.kind) {
            case "KeywordToken": {
              if (token.body === "exposing") {
                continue;
              } else {
                return (0, result_1.Err)("Expected `exposing` but got " + token.body);
              }
            }
            case "IdentifierToken": {
              exports2.push(token.body);
            }
            case "WhitespaceToken":
            case "OpenBracketToken":
            case "CloseBracketToken":
            case "CommaToken": {
              continue;
            }
            default: {
              return (0, result_1.Err)("Expected `exposing` but got " + token.kind);
            }
          }
        }
        return (0, result_1.Ok)((0, types_1.Export)(exports2));
      }
      function parseComment(tokens) {
        return (0, types_1.Comment)((0, Tokens_1.tokensToString)(tokens.slice(1)).trim());
      }
      function parseMultilineComment(tokens) {
        return (0, types_1.MultilineComment)((0, Tokens_1.tokensToString)(tokens.slice(1, -2)).trim());
      }
      function parseBlock(block) {
        const wrapError = (res) => {
          return (0, result_1.mapError)((err) => {
            return `Line ${block.lineStart}: ${err}
\`\`\`
${block.lines.join("\n")}
\`\`\``;
          }, res);
        };
        const tokens = stripComments((0, Tokens_1.tokenize)(block.lines.join("\n")));
        switch (block.kind) {
          case "ImportBlock": {
            return wrapError(parseImport(tokens));
          }
          case "ExportBlock": {
            return wrapError(parseExport(tokens));
          }
          case "UnionTypeBlock": {
            return wrapError(parseUnionType(tokens));
          }
          case "UnionUntaggedTypeBlock": {
            return wrapError(parseUnionUntaggedType(tokens));
          }
          case "TypeAliasBlock": {
            return wrapError(parseTypeAlias(tokens));
          }
          case "FunctionBlock": {
            return wrapError(parseFunction(tokens));
          }
          case "ConstBlock": {
            return wrapError(parseConst(tokens));
          }
          case "CommentBlock": {
            return (0, result_1.Ok)(parseComment((0, Tokens_1.tokenize)(block.lines.join("\n"))));
          }
          case "MultilineCommentBlock": {
            return (0, result_1.Ok)(parseMultilineComment((0, Tokens_1.tokenize)(block.lines.join("\n"))));
          }
          case "UnknownBlock": {
            return (0, result_1.Err)(`Not sure what the block starting on line ${block.lineStart} is. There's something wrong with the lines ${block.lineStart} - ${block.lineStart + block.lines.length}:
\`\`\`
${block.lines.join("\n")}
\`\`\``);
          }
        }
      }
      exports.parseBlock = parseBlock;
      function stripComments(tokens) {
        const returnTokens = [];
        let isInComment = false;
        let isInMultilineComment = false;
        for (const token of tokens) {
          if (isInComment) {
            if (token.kind === "WhitespaceToken") {
              if (token.body.indexOf("\n") > -1) {
                isInComment = false;
                returnTokens.push(token);
              }
            }
          } else if (isInMultilineComment) {
            if (token.kind === "MultilineCommentToken") {
              isInMultilineComment = false;
            }
          } else {
            if (token.kind === "CommentToken") {
              isInComment = true;
            } else if (token.kind === "MultilineCommentToken") {
              isInMultilineComment = true;
            } else {
              returnTokens.push(token);
            }
          }
        }
        return returnTokens;
      }
      exports.stripComments = stripComments;
      function getGap(blocks, index) {
        const rawBlock = blocks[index];
        const lineEnd = rawBlock.lineStart + rawBlock.lines.length;
        return `${blocks[index].lineStart} - ${lineEnd}`;
      }
      function reportBlock(block) {
        return `
\`\`\`
${block.lines.join("\n")}
\`\`\``.trim();
      }
      function parse2(body, filename = "main") {
        const blocks = (0, Blocks_1.intoBlocks)(body);
        const syntax = blocks.map(parseBlock);
        const errors = syntax.filter((syn) => syn.kind === "Err").map((syn) => syn.error);
        const successes = syntax.filter((syn) => syn.kind === "Ok").map((syn) => syn.value);
        const imports = syntax.filter((syn) => syn.kind === "Ok" && syn.value.kind === "Import").map((syn) => syn.kind === "Ok" && syn.value);
        const typeErrors = syntax.map((resultBlock, index) => {
          if (resultBlock.kind === "Err")
            return null;
          const block = resultBlock;
          const typedBlocks = (0, Blocks_1.typeBlocks)([...syntax.slice(0, index), ...syntax.slice(index)].filter((b) => b.kind === "Ok").map((b) => b.value));
          const valuesInScope = (0, type_checking_1.getValuesInTopLevelScope)(successes);
          let validatedType = (0, type_checking_1.validateType)(block.value, typedBlocks, imports, valuesInScope);
          const maybeUncoveredBranchErrors = (0, type_checking_1.validateAllCasesCovered)(block.value, typedBlocks);
          if (validatedType.kind === "Err") {
            validatedType = (0, result_1.mapError)((error) => maybeUncoveredBranchErrors.length === 0 ? error : error + "\n" + maybeUncoveredBranchErrors.join("\n"), validatedType);
          } else {
            if (maybeUncoveredBranchErrors.length > 0) {
              validatedType = (0, result_1.Err)(maybeUncoveredBranchErrors.join("\n"));
            }
          }
          const gap = getGap(blocks, index);
          return (0, result_1.mapError)((error) => `Error on lines ${gap}
${error}:
${reportBlock(blocks[index])}`, validatedType);
        }).filter((type) => type && type.kind === "Err").map((type) => type.error);
        const collidingNames = (0, Collisions_1.collisions)(successes).map(({ indexes, name }) => {
          const definitions = indexes.map((index) => {
            const gap = getGap(blocks, index);
            return `${gap}:
${reportBlock(blocks[index])}`;
          });
          return `
The name \`${name}\` has been used for different things.
${definitions.join("\n\n")}
        `.trim();
        });
        const moduleName = filename;
        return (0, types_1.Module)(moduleName, syntax.filter((syn) => syn.kind === "Ok").map((syn) => syn.value), [...errors, ...typeErrors, ...collidingNames]);
      }
      exports.parse = parse2;
      function addTypeErrors(module2, otherModules) {
        const imports = module2.body.filter((syn) => syn.kind === "Import");
        let allOtherTypeBlocks = [];
        for (const other of otherModules) {
          allOtherTypeBlocks = allOtherTypeBlocks.concat((0, Blocks_1.typeBlocks)(other.body));
        }
        const typeErrors = module2.body.map((block, index) => {
          const typedBlocks = [
            ...(0, Blocks_1.typeBlocks)([
              ...module2.body.slice(0, index),
              ...module2.body.slice(index)
            ]),
            ...allOtherTypeBlocks
          ];
          const valuesInScope = (0, type_checking_1.getValuesInTopLevelScope)(module2.body);
          let validatedType = (0, type_checking_1.validateType)(block, typedBlocks, imports, valuesInScope);
          const maybeUncoveredBranchErrors = (0, type_checking_1.validateAllCasesCovered)(block, typedBlocks);
          if (validatedType.kind === "Err") {
            validatedType = (0, result_1.mapError)((error) => maybeUncoveredBranchErrors.length === 0 ? error : error + "\n" + maybeUncoveredBranchErrors.join("\n"), validatedType);
          } else {
            if (maybeUncoveredBranchErrors.length > 0) {
              validatedType = (0, result_1.Err)(maybeUncoveredBranchErrors.join("\n"));
            }
          }
          const gap = getGap(module2.unparsedBody, index);
          return (0, result_1.mapError)((error) => `Error on lines ${gap}
${error}:
${reportBlock(module2.unparsedBody[index])}`, validatedType);
        }).filter((type) => type && type.kind === "Err").map((type) => type.error);
        module2.errors = module2.errors.concat(typeErrors);
        return module2;
      }
      exports.addTypeErrors = addTypeErrors;
      function parseWithContext(body, filename = "main") {
        const blocks = (0, Blocks_1.intoBlocks)(body);
        const syntax = blocks.map(parseBlock);
        const errors = syntax.filter((syn) => syn.kind === "Err").map((syn) => syn.error);
        const successes = syntax.filter((syn) => syn.kind === "Ok").map((syn) => syn.value);
        const collidingNames = (0, Collisions_1.collisions)(successes).map(({ indexes, name }) => {
          const definitions = indexes.map((index) => {
            const gap = getGap(blocks, index);
            return `${gap}:
${reportBlock(blocks[index])}`;
          });
          return `
The name \`${name}\` has been used for different things.
${definitions.join("\n\n")}
        `.trim();
        });
        const moduleName = filename;
        return (0, types_1.ContextModule)(moduleName, syntax.filter((syn) => syn.kind === "Ok").map((syn) => syn.value), blocks, [...errors, ...collidingNames]);
      }
      exports.parseWithContext = parseWithContext;
    }
  });

  // node_modules/codeflask/build/codeflask.module.js
  var BACKGROUND_COLOR = "#fff";
  var LINE_HEIGHT = "20px";
  var FONT_SIZE = "13px";
  var defaultCssTheme = "\n.codeflask {\n  background: " + BACKGROUND_COLOR + ";\n  color: #4f559c;\n}\n\n.codeflask .token.punctuation {\n  color: #4a4a4a;\n}\n\n.codeflask .token.keyword {\n  color: #8500ff;\n}\n\n.codeflask .token.operator {\n  color: #ff5598;\n}\n\n.codeflask .token.string {\n  color: #41ad8f;\n}\n\n.codeflask .token.comment {\n  color: #9badb7;\n}\n\n.codeflask .token.function {\n  color: #8500ff;\n}\n\n.codeflask .token.boolean {\n  color: #8500ff;\n}\n\n.codeflask .token.number {\n  color: #8500ff;\n}\n\n.codeflask .token.selector {\n  color: #8500ff;\n}\n\n.codeflask .token.property {\n  color: #8500ff;\n}\n\n.codeflask .token.tag {\n  color: #8500ff;\n}\n\n.codeflask .token.attr-value {\n  color: #8500ff;\n}\n";
  function cssSupports(e, t) {
    return typeof CSS != "undefined" ? CSS.supports(e, t) : typeof document != "undefined" && toCamelCase(e) in document.body.style;
  }
  function toCamelCase(e) {
    return (e = e.split("-").filter(function(e2) {
      return !!e2;
    }).map(function(e2) {
      return e2[0].toUpperCase() + e2.substr(1);
    }).join(""))[0].toLowerCase() + e.substr(1);
  }
  var FONT_FAMILY = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';
  var COLOR = cssSupports("caret-color", "#000") ? BACKGROUND_COLOR : "#ccc";
  var LINE_NUMBER_WIDTH = "40px";
  var editorCss = "\n  .codeflask {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  .codeflask, .codeflask * {\n    box-sizing: border-box;\n  }\n\n  .codeflask__pre {\n    pointer-events: none;\n    z-index: 3;\n    overflow: hidden;\n  }\n\n  .codeflask__textarea {\n    background: none;\n    border: none;\n    color: " + COLOR + ";\n    z-index: 1;\n    resize: none;\n    font-family: " + FONT_FAMILY + ";\n    -webkit-appearance: pre;\n    caret-color: #111;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n  }\n\n  .codeflask--has-line-numbers .codeflask__textarea {\n    width: calc(100% - " + LINE_NUMBER_WIDTH + ");\n  }\n\n  .codeflask__code {\n    display: block;\n    font-family: " + FONT_FAMILY + ";\n    overflow: hidden;\n  }\n\n  .codeflask__flatten {\n    padding: 10px;\n    font-size: " + FONT_SIZE + ";\n    line-height: " + LINE_HEIGHT + ";\n    white-space: pre;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: auto;\n    margin: 0 !important;\n    outline: none;\n    text-align: left;\n  }\n\n  .codeflask--has-line-numbers .codeflask__flatten {\n    width: calc(100% - " + LINE_NUMBER_WIDTH + ");\n    left: " + LINE_NUMBER_WIDTH + ";\n  }\n\n  .codeflask__line-highlight {\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 100%;\n    height: " + LINE_HEIGHT + ";\n    background: rgba(0,0,0,0.1);\n    z-index: 1;\n  }\n\n  .codeflask__lines {\n    padding: 10px 4px;\n    font-size: 12px;\n    line-height: " + LINE_HEIGHT + ";\n    font-family: 'Cousine', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: " + LINE_NUMBER_WIDTH + ";\n    height: 100%;\n    text-align: right;\n    color: #999;\n    z-index: 2;\n  }\n\n  .codeflask__lines__line {\n    display: block;\n  }\n\n  .codeflask.codeflask--has-line-numbers {\n    padding-left: " + LINE_NUMBER_WIDTH + ";\n  }\n\n  .codeflask.codeflask--has-line-numbers:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: " + LINE_NUMBER_WIDTH + ";\n    height: 100%;\n    background: #eee;\n    z-index: 1;\n  }\n";
  function injectCss(e, t, n) {
    var a = t || "codeflask-style", s = n || document.head;
    if (!e)
      return false;
    if (document.getElementById(a))
      return true;
    var o = document.createElement("style");
    return o.innerHTML = e, o.id = a, s.appendChild(o), true;
  }
  var entityMap = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };
  function escapeHtml(e) {
    return String(e).replace(/[&<>"'`=/]/g, function(e2) {
      return entityMap[e2];
    });
  }
  var commonjsGlobal = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
  function createCommonjsModule(e, t) {
    return e(t = { exports: {} }, t.exports), t.exports;
  }
  var prism = createCommonjsModule(function(e) {
    var t = function(e2) {
      var t2 = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, a = { manual: e2.Prism && e2.Prism.manual, disableWorkerMessageHandler: e2.Prism && e2.Prism.disableWorkerMessageHandler, util: { encode: function(e3) {
        return e3 instanceof s ? new s(e3.type, a.util.encode(e3.content), e3.alias) : Array.isArray(e3) ? e3.map(a.util.encode) : e3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      }, type: function(e3) {
        return Object.prototype.toString.call(e3).slice(8, -1);
      }, objId: function(e3) {
        return e3.__id || Object.defineProperty(e3, "__id", { value: ++n }), e3.__id;
      }, clone: function e3(t3, n2) {
        var s2, o2, i = a.util.type(t3);
        switch (n2 = n2 || {}, i) {
          case "Object":
            if (o2 = a.util.objId(t3), n2[o2])
              return n2[o2];
            for (var r in s2 = {}, n2[o2] = s2, t3)
              t3.hasOwnProperty(r) && (s2[r] = e3(t3[r], n2));
            return s2;
          case "Array":
            return o2 = a.util.objId(t3), n2[o2] ? n2[o2] : (s2 = [], n2[o2] = s2, t3.forEach(function(t4, a2) {
              s2[a2] = e3(t4, n2);
            }), s2);
          default:
            return t3;
        }
      } }, languages: { extend: function(e3, t3) {
        var n2 = a.util.clone(a.languages[e3]);
        for (var s2 in t3)
          n2[s2] = t3[s2];
        return n2;
      }, insertBefore: function(e3, t3, n2, s2) {
        var o2 = (s2 = s2 || a.languages)[e3], i = {};
        for (var r in o2)
          if (o2.hasOwnProperty(r)) {
            if (r == t3)
              for (var l in n2)
                n2.hasOwnProperty(l) && (i[l] = n2[l]);
            n2.hasOwnProperty(r) || (i[r] = o2[r]);
          }
        var c = s2[e3];
        return s2[e3] = i, a.languages.DFS(a.languages, function(t4, n3) {
          n3 === c && t4 != e3 && (this[t4] = i);
        }), i;
      }, DFS: function e3(t3, n2, s2, o2) {
        o2 = o2 || {};
        var i = a.util.objId;
        for (var r in t3)
          if (t3.hasOwnProperty(r)) {
            n2.call(t3, r, t3[r], s2 || r);
            var l = t3[r], c = a.util.type(l);
            c !== "Object" || o2[i(l)] ? c !== "Array" || o2[i(l)] || (o2[i(l)] = true, e3(l, n2, r, o2)) : (o2[i(l)] = true, e3(l, n2, null, o2));
          }
      } }, plugins: {}, highlightAll: function(e3, t3) {
        a.highlightAllUnder(document, e3, t3);
      }, highlightAllUnder: function(e3, t3, n2) {
        var s2 = { callback: n2, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
        a.hooks.run("before-highlightall", s2);
        for (var o2, i = s2.elements || e3.querySelectorAll(s2.selector), r = 0; o2 = i[r++]; )
          a.highlightElement(o2, t3 === true, s2.callback);
      }, highlightElement: function(n2, s2, o2) {
        for (var i, r, l = n2; l && !t2.test(l.className); )
          l = l.parentNode;
        l && (i = (l.className.match(t2) || [, ""])[1].toLowerCase(), r = a.languages[i]), n2.className = n2.className.replace(t2, "").replace(/\s+/g, " ") + " language-" + i, n2.parentNode && (l = n2.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(t2, "").replace(/\s+/g, " ") + " language-" + i));
        var c = { element: n2, language: i, grammar: r, code: n2.textContent }, d = function(e3) {
          c.highlightedCode = e3, a.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, a.hooks.run("after-highlight", c), a.hooks.run("complete", c), o2 && o2.call(c.element);
        };
        if (a.hooks.run("before-sanity-check", c), c.code)
          if (a.hooks.run("before-highlight", c), c.grammar)
            if (s2 && e2.Worker) {
              var u = new Worker(a.filename);
              u.onmessage = function(e3) {
                d(e3.data);
              }, u.postMessage(JSON.stringify({ language: c.language, code: c.code, immediateClose: true }));
            } else
              d(a.highlight(c.code, c.grammar, c.language));
          else
            d(a.util.encode(c.code));
        else
          a.hooks.run("complete", c);
      }, highlight: function(e3, t3, n2) {
        var o2 = { code: e3, grammar: t3, language: n2 };
        return a.hooks.run("before-tokenize", o2), o2.tokens = a.tokenize(o2.code, o2.grammar), a.hooks.run("after-tokenize", o2), s.stringify(a.util.encode(o2.tokens), o2.language);
      }, matchGrammar: function(e3, t3, n2, o2, i, r, l) {
        for (var c in n2)
          if (n2.hasOwnProperty(c) && n2[c]) {
            if (c == l)
              return;
            var d = n2[c];
            d = a.util.type(d) === "Array" ? d : [d];
            for (var u = 0; u < d.length; ++u) {
              var p = d[u], h = p.inside, g = !!p.lookbehind, f = !!p.greedy, m = 0, b = p.alias;
              if (f && !p.pattern.global) {
                var k = p.pattern.toString().match(/[imuy]*$/)[0];
                p.pattern = RegExp(p.pattern.source, k + "g");
              }
              p = p.pattern || p;
              for (var y = o2, C = i; y < t3.length; C += t3[y].length, ++y) {
                var F = t3[y];
                if (t3.length > e3.length)
                  return;
                if (!(F instanceof s)) {
                  if (f && y != t3.length - 1) {
                    if (p.lastIndex = C, !(T = p.exec(e3)))
                      break;
                    for (var v = T.index + (g ? T[1].length : 0), x = T.index + T[0].length, w = y, A = C, _ = t3.length; w < _ && (A < x || !t3[w].type && !t3[w - 1].greedy); ++w)
                      v >= (A += t3[w].length) && (++y, C = A);
                    if (t3[y] instanceof s)
                      continue;
                    E = w - y, F = e3.slice(C, A), T.index -= C;
                  } else {
                    p.lastIndex = 0;
                    var T = p.exec(F), E = 1;
                  }
                  if (T) {
                    g && (m = T[1] ? T[1].length : 0);
                    x = (v = T.index + m) + (T = T[0].slice(m)).length;
                    var L = F.slice(0, v), N = F.slice(x), S = [y, E];
                    L && (++y, C += L.length, S.push(L));
                    var I = new s(c, h ? a.tokenize(T, h) : T, b, T, f);
                    if (S.push(I), N && S.push(N), Array.prototype.splice.apply(t3, S), E != 1 && a.matchGrammar(e3, t3, n2, y, C, true, c), r)
                      break;
                  } else if (r)
                    break;
                }
              }
            }
          }
      }, tokenize: function(e3, t3) {
        var n2 = [e3], s2 = t3.rest;
        if (s2) {
          for (var o2 in s2)
            t3[o2] = s2[o2];
          delete t3.rest;
        }
        return a.matchGrammar(e3, n2, t3, 0, 0, false), n2;
      }, hooks: { all: {}, add: function(e3, t3) {
        var n2 = a.hooks.all;
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }, run: function(e3, t3) {
        var n2 = a.hooks.all[e3];
        if (n2 && n2.length)
          for (var s2, o2 = 0; s2 = n2[o2++]; )
            s2(t3);
      } }, Token: s };
      function s(e3, t3, n2, a2, s2) {
        this.type = e3, this.content = t3, this.alias = n2, this.length = 0 | (a2 || "").length, this.greedy = !!s2;
      }
      if (e2.Prism = a, s.stringify = function(e3, t3, n2) {
        if (typeof e3 == "string")
          return e3;
        if (Array.isArray(e3))
          return e3.map(function(n3) {
            return s.stringify(n3, t3, e3);
          }).join("");
        var o2 = { type: e3.type, content: s.stringify(e3.content, t3, n2), tag: "span", classes: ["token", e3.type], attributes: {}, language: t3, parent: n2 };
        if (e3.alias) {
          var i = Array.isArray(e3.alias) ? e3.alias : [e3.alias];
          Array.prototype.push.apply(o2.classes, i);
        }
        a.hooks.run("wrap", o2);
        var r = Object.keys(o2.attributes).map(function(e4) {
          return e4 + '="' + (o2.attributes[e4] || "").replace(/"/g, "&quot;") + '"';
        }).join(" ");
        return "<" + o2.tag + ' class="' + o2.classes.join(" ") + '"' + (r ? " " + r : "") + ">" + o2.content + "</" + o2.tag + ">";
      }, !e2.document)
        return e2.addEventListener ? (a.disableWorkerMessageHandler || e2.addEventListener("message", function(t3) {
          var n2 = JSON.parse(t3.data), s2 = n2.language, o2 = n2.code, i = n2.immediateClose;
          e2.postMessage(a.highlight(o2, a.languages[s2], s2)), i && e2.close();
        }, false), a) : a;
      var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
      return o && (a.filename = o.src, a.manual || o.hasAttribute("data-manual") || (document.readyState !== "loading" ? window.requestAnimationFrame ? window.requestAnimationFrame(a.highlightAll) : window.setTimeout(a.highlightAll, 16) : document.addEventListener("DOMContentLoaded", a.highlightAll))), a;
    }(typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope ? self : {});
    e.exports && (e.exports = t), commonjsGlobal !== void 0 && (commonjsGlobal.Prism = t), t.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: true }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.hooks.add("wrap", function(e2) {
      e2.type === "entity" && (e2.attributes.title = e2.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(t.languages.markup.tag, "addInlined", { value: function(e2, n) {
      var a = {};
      a["language-" + n] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: t.languages[n] }, a.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var s = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: a } };
      s["language-" + n] = { pattern: /[\s\S]+/, inside: t.languages[n] };
      var o = {};
      o[e2] = { pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, e2), "i"), lookbehind: true, greedy: true, inside: s }, t.languages.insertBefore("markup", "cdata", o);
    } }), t.languages.xml = t.languages.extend("markup", {}), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, function(e2) {
      var t2 = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      e2.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: RegExp("url\\((?:" + t2.source + "|.*?)\\)", "i"), selector: RegExp(`[^{}\\s](?:[^{};"']|` + t2.source + ")*?(?=\\s*\\{)"), string: { pattern: t2, greedy: true }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, e2.languages.css.atrule.inside.rest = e2.languages.css;
      var n = e2.languages.markup;
      n && (n.tag.addInlined("style", "css"), e2.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: n.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: e2.languages.css } }, alias: "language-css" } }, n.tag));
    }(t), t.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ }, t.languages.javascript = t.languages.extend("clike", { "class-name": [t.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: t.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: t.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: t.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: t.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), t.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/, greedy: true, inside: { interpolation: { pattern: /\${[^}]+}/, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: t.languages.javascript } }, string: /[\s\S]+/ } } }), t.languages.markup && t.languages.markup.tag.addInlined("script", "javascript"), t.languages.js = t.languages.javascript, typeof self != "undefined" && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function(e2) {
      e2 = e2 || document;
      var n = { js: "javascript", py: "python", rb: "ruby", ps1: "powershell", psm1: "powershell", sh: "bash", bat: "batch", h: "c", tex: "latex" };
      Array.prototype.slice.call(e2.querySelectorAll("pre[data-src]")).forEach(function(e3) {
        if (!e3.hasAttribute("data-src-loaded")) {
          for (var a, s = e3.getAttribute("data-src"), o = e3, i = /\blang(?:uage)?-([\w-]+)\b/i; o && !i.test(o.className); )
            o = o.parentNode;
          if (o && (a = (e3.className.match(i) || [, ""])[1]), !a) {
            var r = (s.match(/\.(\w+)$/) || [, ""])[1];
            a = n[r] || r;
          }
          var l = document.createElement("code");
          l.className = "language-" + a, e3.textContent = "", l.textContent = "Loading\u2026", e3.appendChild(l);
          var c = new XMLHttpRequest();
          c.open("GET", s, true), c.onreadystatechange = function() {
            c.readyState == 4 && (c.status < 400 && c.responseText ? (l.textContent = c.responseText, t.highlightElement(l), e3.setAttribute("data-src-loaded", "")) : c.status >= 400 ? l.textContent = "\u2716 Error " + c.status + " while fetching file: " + c.statusText : l.textContent = "\u2716 Error: File does not exist or is empty");
          }, c.send(null);
        }
      }), t.plugins.toolbar && t.plugins.toolbar.registerButton("download-file", function(e3) {
        var t2 = e3.element.parentNode;
        if (t2 && /pre/i.test(t2.nodeName) && t2.hasAttribute("data-src") && t2.hasAttribute("data-download-link")) {
          var n2 = t2.getAttribute("data-src"), a = document.createElement("a");
          return a.textContent = t2.getAttribute("data-download-link-label") || "Download", a.setAttribute("download", ""), a.href = n2, a;
        }
      });
    }, document.addEventListener("DOMContentLoaded", function() {
      self.Prism.fileHighlight();
    }));
  });
  var CodeFlask = function(e, t) {
    if (!e)
      throw Error("CodeFlask expects a parameter which is Element or a String selector");
    if (!t)
      throw Error("CodeFlask expects an object containing options as second parameter");
    if (e.nodeType)
      this.editorRoot = e;
    else {
      var n = document.querySelector(e);
      n && (this.editorRoot = n);
    }
    this.opts = t, this.startEditor();
  };
  CodeFlask.prototype.startEditor = function() {
    if (!injectCss(editorCss, null, this.opts.styleParent))
      throw Error("Failed to inject CodeFlask CSS.");
    this.createWrapper(), this.createTextarea(), this.createPre(), this.createCode(), this.runOptions(), this.listenTextarea(), this.populateDefault(), this.updateCode(this.code);
  }, CodeFlask.prototype.createWrapper = function() {
    this.code = this.editorRoot.innerHTML, this.editorRoot.innerHTML = "", this.elWrapper = this.createElement("div", this.editorRoot), this.elWrapper.classList.add("codeflask");
  }, CodeFlask.prototype.createTextarea = function() {
    this.elTextarea = this.createElement("textarea", this.elWrapper), this.elTextarea.classList.add("codeflask__textarea", "codeflask__flatten");
  }, CodeFlask.prototype.createPre = function() {
    this.elPre = this.createElement("pre", this.elWrapper), this.elPre.classList.add("codeflask__pre", "codeflask__flatten");
  }, CodeFlask.prototype.createCode = function() {
    this.elCode = this.createElement("code", this.elPre), this.elCode.classList.add("codeflask__code", "language-" + (this.opts.language || "html"));
  }, CodeFlask.prototype.createLineNumbers = function() {
    this.elLineNumbers = this.createElement("div", this.elWrapper), this.elLineNumbers.classList.add("codeflask__lines"), this.setLineNumber();
  }, CodeFlask.prototype.createElement = function(e, t) {
    var n = document.createElement(e);
    return t.appendChild(n), n;
  }, CodeFlask.prototype.runOptions = function() {
    this.opts.rtl = this.opts.rtl || false, this.opts.tabSize = this.opts.tabSize || 2, this.opts.enableAutocorrect = this.opts.enableAutocorrect || false, this.opts.lineNumbers = this.opts.lineNumbers || false, this.opts.defaultTheme = this.opts.defaultTheme !== false, this.opts.areaId = this.opts.areaId || null, this.opts.ariaLabelledby = this.opts.ariaLabelledby || null, this.opts.readonly = this.opts.readonly || null, typeof this.opts.handleTabs != "boolean" && (this.opts.handleTabs = true), typeof this.opts.handleSelfClosingCharacters != "boolean" && (this.opts.handleSelfClosingCharacters = true), typeof this.opts.handleNewLineIndentation != "boolean" && (this.opts.handleNewLineIndentation = true), this.opts.rtl === true && (this.elTextarea.setAttribute("dir", "rtl"), this.elPre.setAttribute("dir", "rtl")), this.opts.enableAutocorrect === false && (this.elTextarea.setAttribute("spellcheck", "false"), this.elTextarea.setAttribute("autocapitalize", "off"), this.elTextarea.setAttribute("autocomplete", "off"), this.elTextarea.setAttribute("autocorrect", "off")), this.opts.lineNumbers && (this.elWrapper.classList.add("codeflask--has-line-numbers"), this.createLineNumbers()), this.opts.defaultTheme && injectCss(defaultCssTheme, "theme-default", this.opts.styleParent), this.opts.areaId && this.elTextarea.setAttribute("id", this.opts.areaId), this.opts.ariaLabelledby && this.elTextarea.setAttribute("aria-labelledby", this.opts.ariaLabelledby), this.opts.readonly && this.enableReadonlyMode();
  }, CodeFlask.prototype.updateLineNumbersCount = function() {
    for (var e = "", t = 1; t <= this.lineNumber; t++)
      e = e + '<span class="codeflask__lines__line">' + t + "</span>";
    this.elLineNumbers.innerHTML = e;
  }, CodeFlask.prototype.listenTextarea = function() {
    var e = this;
    this.elTextarea.addEventListener("input", function(t) {
      e.code = t.target.value, e.elCode.innerHTML = escapeHtml(t.target.value), e.highlight(), setTimeout(function() {
        e.runUpdate(), e.setLineNumber();
      }, 1);
    }), this.elTextarea.addEventListener("keydown", function(t) {
      e.handleTabs(t), e.handleSelfClosingCharacters(t), e.handleNewLineIndentation(t);
    }), this.elTextarea.addEventListener("scroll", function(t) {
      e.elPre.style.transform = "translate3d(-" + t.target.scrollLeft + "px, -" + t.target.scrollTop + "px, 0)", e.elLineNumbers && (e.elLineNumbers.style.transform = "translate3d(0, -" + t.target.scrollTop + "px, 0)");
    });
  }, CodeFlask.prototype.handleTabs = function(e) {
    if (this.opts.handleTabs) {
      if (e.keyCode !== 9)
        return;
      e.preventDefault();
      var t = this.elTextarea, n = t.selectionDirection, a = t.selectionStart, s = t.selectionEnd, o = t.value, i = o.substr(0, a), r = o.substring(a, s), l = o.substring(s), c = " ".repeat(this.opts.tabSize);
      if (a !== s && r.length >= c.length) {
        var d = a - i.split("\n").pop().length, u = c.length, p = c.length;
        if (e.shiftKey)
          o.substr(d, c.length) === c ? (u = -u, d > a ? (r = r.substring(0, d) + r.substring(d + c.length), p = 0) : d === a ? (u = 0, p = 0, r = r.substring(c.length)) : (p = -p, i = i.substring(0, d) + i.substring(d + c.length))) : (u = 0, p = 0), r = r.replace(new RegExp("\n" + c.split("").join("\\"), "g"), "\n");
        else
          i = i.substr(0, d) + c + i.substring(d, a), r = r.replace(/\n/g, "\n" + c);
        t.value = i + r + l, t.selectionStart = a + u, t.selectionEnd = a + r.length + p, t.selectionDirection = n;
      } else
        t.value = i + c + l, t.selectionStart = a + c.length, t.selectionEnd = a + c.length;
      var h = t.value;
      this.updateCode(h), this.elTextarea.selectionEnd = s + this.opts.tabSize;
    }
  }, CodeFlask.prototype.handleSelfClosingCharacters = function(e) {
    if (this.opts.handleSelfClosingCharacters) {
      var t = e.key;
      if (["(", "[", "{", "<", "'", '"'].includes(t) || [")", "]", "}", ">", "'", '"'].includes(t))
        switch (t) {
          case "(":
          case ")":
            this.closeCharacter(t);
            break;
          case "[":
          case "]":
            this.closeCharacter(t);
            break;
          case "{":
          case "}":
            this.closeCharacter(t);
            break;
          case "<":
          case ">":
          case "'":
          case '"':
            this.closeCharacter(t);
        }
    }
  }, CodeFlask.prototype.setLineNumber = function() {
    this.lineNumber = this.code.split("\n").length, this.opts.lineNumbers && this.updateLineNumbersCount();
  }, CodeFlask.prototype.handleNewLineIndentation = function(e) {
    if (this.opts.handleNewLineIndentation && e.keyCode === 13) {
      e.preventDefault();
      var t = this.elTextarea, n = t.selectionStart, a = t.selectionEnd, s = t.value, o = s.substr(0, n), i = s.substring(a), r = s.lastIndexOf("\n", n - 1), l = r + s.slice(r + 1).search(/[^ ]|$/), c = l > r ? l - r : 0, d = o + "\n" + " ".repeat(c) + i;
      t.value = d, t.selectionStart = n + c + 1, t.selectionEnd = n + c + 1, this.updateCode(t.value);
    }
  }, CodeFlask.prototype.closeCharacter = function(e) {
    var t = this.elTextarea.selectionStart, n = this.elTextarea.selectionEnd;
    if (this.skipCloseChar(e)) {
      var a = this.code.substr(n, 1) === e, s = a ? n + 1 : n, o = !a && ["'", '"'].includes(e) ? e : "", i = "" + this.code.substring(0, t) + o + this.code.substring(s);
      this.updateCode(i), this.elTextarea.selectionEnd = ++this.elTextarea.selectionStart;
    } else {
      var r = e;
      switch (e) {
        case "(":
          r = String.fromCharCode(e.charCodeAt() + 1);
          break;
        case "<":
        case "{":
        case "[":
          r = String.fromCharCode(e.charCodeAt() + 2);
      }
      var l = this.code.substring(t, n), c = "" + this.code.substring(0, t) + l + r + this.code.substring(n);
      this.updateCode(c);
    }
    this.elTextarea.selectionEnd = t;
  }, CodeFlask.prototype.skipCloseChar = function(e) {
    var t = this.elTextarea.selectionStart, n = this.elTextarea.selectionEnd, a = Math.abs(n - t) > 0;
    return [")", "}", "]", ">"].includes(e) || ["'", '"'].includes(e) && !a;
  }, CodeFlask.prototype.updateCode = function(e) {
    this.code = e, this.elTextarea.value = e, this.elCode.innerHTML = escapeHtml(e), this.highlight(), this.setLineNumber(), setTimeout(this.runUpdate.bind(this), 1);
  }, CodeFlask.prototype.updateLanguage = function(e) {
    var t = this.opts.language;
    this.elCode.classList.remove("language-" + t), this.elCode.classList.add("language-" + e), this.opts.language = e, this.highlight();
  }, CodeFlask.prototype.addLanguage = function(e, t) {
    prism.languages[e] = t;
  }, CodeFlask.prototype.populateDefault = function() {
    this.updateCode(this.code);
  }, CodeFlask.prototype.highlight = function() {
    prism.highlightElement(this.elCode, false);
  }, CodeFlask.prototype.onUpdate = function(e) {
    if (e && {}.toString.call(e) !== "[object Function]")
      throw Error("CodeFlask expects callback of type Function");
    this.updateCallBack = e;
  }, CodeFlask.prototype.getCode = function() {
    return this.code;
  }, CodeFlask.prototype.runUpdate = function() {
    this.updateCallBack && this.updateCallBack(this.code);
  }, CodeFlask.prototype.enableReadonlyMode = function() {
    this.elTextarea.setAttribute("readonly", true);
  }, CodeFlask.prototype.disableReadonlyMode = function() {
    this.elTextarea.removeAttribute("readonly");
  };
  var codeflask_module_default = CodeFlask;

  // src/Codeflask_kernel.ts
  var import_Derw = __toESM(require_Derw());
  var import_Elm = __toESM(require_Elm());
  var import_English = __toESM(require_English());
  var import_Js = __toESM(require_Js());
  var import_Ts = __toESM(require_Ts());
  var import_parser = __toESM(require_parser());
  var CodeEditor = class extends HTMLElement {
    constructor() {
      super();
      this.mode = "typescript";
      this.attachShadow({ mode: "open" });
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML += `
<style>
    :host {
        display: block;
        position: relative;
        overflow-x: auto;
        width: 100%;
        height: 100%;
    }

    * {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
        font-size: 20px !important;
    }
</style>`;
      }
    }
    connectedCallback() {
      this.id = this.getAttribute("id") || "code-flask";
      this.container = document.createElement("div");
      this.container.style.width = "100%";
      this.container.style.height = "100%";
      this.container.style.position = "absolute";
      if (this.shadowRoot) {
        this.shadowRoot.appendChild(this.container);
      }
      this.editor = new codeflask_module_default(this.container, {
        language: "derw",
        rtl: false,
        tabSize: 4,
        enableAutocorrect: false,
        lineNumbers: true,
        defaultTheme: true,
        readonly: this.hasAttribute("readonly"),
        styleParent: this.shadowRoot ? this.shadowRoot : void 0
      });
      this.editor.addLanguage("derw", {
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          }
        ],
        string: {
          pattern: /(["'`])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        keyword: /import|as|exposing|let|in|do|return|if|then|else|type|alias/,
        boolean: /\b(?: true | false) \b /,
        function: null,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /=|=>|\|>|>>|\+|-|\*|\/|%|\^|==|!=|>|>=|<|<=|&&|\|\||\+\+|::/,
        punctuation: /[{}[\];(),.:]/
      });
      if (this.hasAttribute("value")) {
        this.editor.updateCode(this.getAttribute("value"));
      } else {
        this.setAttribute("value", "");
      }
      this.editor.onUpdate((code) => {
        if (this.getAttribute("value") !== code) {
          this.setAttribute("value", code);
          this.dispatchEvent(new Event("input"));
          if (this.id === "code-editor") {
            this.renderCode(code);
          }
        }
      });
    }
    renderCode(code) {
      const parsed = (0, import_parser.parse)(code, "Main");
      const output = document.getElementById("output");
      let generated = "";
      switch (this.mode) {
        case "javascript": {
          generated = (0, import_Js.generateJavascript)(parsed);
          break;
        }
        case "typescript": {
          generated = (0, import_Ts.generateTypescript)(parsed);
          break;
        }
        case "elm": {
          generated = (0, import_Elm.generateElm)(parsed);
          break;
        }
        case "derw": {
          generated = (0, import_Derw.generateDerw)(parsed);
          break;
        }
        case "english": {
          generated = (0, import_English.generateEnglish)(parsed);
          break;
        }
      }
      if (output) {
        if (parsed.errors.length > 0) {
          generated = `${parsed.errors.join("\n\n")}

${generated}`;
        }
        if (generated.length > 0) {
          output.setAttribute("language", "javascript");
          output.value = generated;
        }
      }
    }
    onModeUpdate() {
      this.renderCode(this.getAttribute("value") || "");
    }
    format() {
      const code = this.getAttribute("value") || "";
      const parsed = (0, import_parser.parse)(code, "Main");
      const generated = (0, import_Derw.generateDerw)(parsed);
      this.value = generated;
    }
    disconnectedCallback() {
      var _a;
      (_a = this.editor) == null ? void 0 : _a.destroy();
    }
    get value() {
      return this.getAttribute("value") || "";
    }
    set value(code) {
      this.setAttribute("value", code);
      if (this.editor && this.editor.getCode() !== code) {
        this.editor.updateCode(code);
      }
    }
  };
  function register(tag) {
    window.customElements.define(tag, CodeEditor);
  }
  function newEditor(root) {
    register("code-editor");
  }
  function clearActive() {
    for (const elem of document.getElementsByClassName("active")) {
      elem.classList.toggle("active");
    }
  }
  function setMode(mode) {
    var _a, _b, _c, _d, _e;
    const editor = document.getElementById("code-editor");
    if (editor) {
      editor.mode = mode;
      editor.onModeUpdate();
    }
    clearActive();
    switch (mode) {
      case "elm": {
        (_a = document.getElementById("view-elm")) == null ? void 0 : _a.classList.toggle("active");
        break;
      }
      case "javascript": {
        (_b = document.getElementById("view-js")) == null ? void 0 : _b.classList.toggle("active");
        break;
      }
      case "typescript": {
        (_c = document.getElementById("view-ts")) == null ? void 0 : _c.classList.toggle("active");
        break;
      }
      case "derw": {
        (_d = document.getElementById("view-derw")) == null ? void 0 : _d.classList.toggle("active");
        break;
      }
      case "english": {
        (_e = document.getElementById("view-english")) == null ? void 0 : _e.classList.toggle("active");
        break;
      }
    }
  }
  function format() {
    const editor = document.getElementById("code-editor");
    if (editor) {
      editor.format();
    }
  }
  window.view = (value) => setMode(value);
  window.format = format;

  // src/Main.ts
  var main = newEditor("root");
})();
