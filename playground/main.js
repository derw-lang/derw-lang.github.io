(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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

  // node_modules/derw/build/types.js
  var require_types = __commonJS({
    "node_modules/derw/build/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Import = exports.ImportModule = exports.Const = exports.Function = exports.isLeftPipeableExpression = exports.isSimpleValue = exports.GreaterThanOrEqual = exports.GreaterThan = exports.LessThanOrEqual = exports.LessThan = exports.InEquality = exports.Equality = exports.CaseStatement = exports.Branch = exports.ListDestructure = exports.EmptyList = exports.Default = exports.LambdaCall = exports.Lambda = exports.FunctionCall = exports.ModuleReference = exports.RightPipe = exports.LeftPipe = exports.ListPrepend = exports.Or = exports.And = exports.Division = exports.Multiplication = exports.Subtraction = exports.Addition = exports.IfStatement = exports.Constructor = exports.Destructure = exports.FormatStringValue = exports.ListRange = exports.ListValue = exports.StringValue = exports.ObjectLiteral = exports.Field = exports.Value = exports.AnonFunctionArg = exports.FunctionArg = exports.TypeAlias = exports.Property = exports.UnionType = exports.Tag = exports.TagArg = exports.FunctionType = exports.FixedType = exports.GenericType = void 0;
      exports.contextModuleToModule = exports.ContextModule = exports.Module = exports.UnparsedBlock = exports.MultilineComment = exports.Comment = exports.Export = void 0;
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
      function Function(name, returnType, args, letBody, body) {
        return {
          kind: "Function",
          name,
          returnType,
          args,
          letBody,
          body
        };
      }
      exports.Function = Function;
      function Const(name, type, value) {
        return {
          kind: "Const",
          name,
          type,
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
      function Comment() {
        return {
          kind: "Comment"
        };
      }
      exports.Comment = Comment;
      function MultilineComment() {
        return {
          kind: "MultilineComment"
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

  // node_modules/derw/build/generators/common.js
  var require_common = __commonJS({
    "node_modules/derw/build/generators/common.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.patternHasGaps = exports.patternGapPositions = exports.destructureLength = exports.prefixLines = void 0;
      function prefixLines(body, indent) {
        return body.split("\n").map((line) => line.trim().length === 0 ? line : " ".repeat(indent) + line).join("\n");
      }
      exports.prefixLines = prefixLines;
      function destructureLength(pattern) {
        let length = 0;
        for (let i = 0; i < pattern.parts.length; i++) {
          const part = pattern.parts[i];
          if (part.kind === "Destructure" || part.kind === "StringValue" || part.kind === "FormatStringValue") {
            length++;
          } else if (part.kind === "EmptyList") {
          } else if (part.kind === "Value") {
            if (i === 0)
              length++;
          }
        }
        return length;
      }
      exports.destructureLength = destructureLength;
      function patternGapPositions(pattern) {
        const positions = [];
        for (let i = 0; i < pattern.parts.length; i++) {
          const part = pattern.parts[i];
          if (part.kind === "Destructure" || part.kind === "StringValue" || part.kind === "FormatStringValue") {
          } else if (part.kind === "EmptyList") {
          } else if (part.kind === "Value") {
            if (i > 0)
              positions.push(i);
          }
        }
        return positions;
      }
      exports.patternGapPositions = patternGapPositions;
      function patternHasGaps(pattern) {
        for (let i = 0; i < pattern.parts.length; i++) {
          const part = pattern.parts[i];
          if (part.kind === "Destructure" || part.kind === "StringValue" || part.kind === "FormatStringValue") {
          } else if (part.kind === "EmptyList") {
          } else if (part.kind === "Value") {
            if (i > 0)
              return true;
          }
        }
        return false;
      }
      exports.patternHasGaps = patternHasGaps;
    }
  });

  // node_modules/derw/build/generators/derw.js
  var require_derw = __commonJS({
    "node_modules/derw/build/generators/derw.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generateDerw = exports.generateTypeAlias = void 0;
      var types_1 = require_types();
      var common_1 = require_common();
      function generateUnionType(syntax) {
        const tags = syntax.tags.map((tag) => {
          const typeDefArgs = tag.args.map((arg) => arg.name + ": " + generateType(arg.type)).join(",\n    ");
          const funcDefArgsStr = tag.args.length > 0 ? ` { ${typeDefArgs} }` : "";
          return generateType(types_1.FixedType(tag.name, [])) + funcDefArgsStr;
        }).join("\n| ");
        return `
type ${generateType(syntax.type)} =
${common_1.prefixLines(tags, 4)}
`.trim();
      }
      function generateProperty(syntax) {
        return `${syntax.name}: ${generateTopLevelType(syntax.type)}`;
      }
      function generateTypeAlias(syntax) {
        const generatedProperties = syntax.properties.map(generateProperty);
        const properties = generatedProperties.join(",\n    ");
        const type = generateType(syntax.type);
        return `
type alias ${type} = {
    ${properties}
}
`.trim();
      }
      exports.generateTypeAlias = generateTypeAlias;
      function generateField(field) {
        const value = generateExpression(field.value);
        if (field.name === value) {
          return `${field.name}: ${value}`;
        }
        return `${field.name}: ${value}`;
      }
      function generateObjectLiteralWithBase(literal) {
        const base = literal.base.body;
        let fields = literal.fields.map(generateField).join(",\n    ");
        if (literal.fields.length === 1)
          return `{ ${base}, ${fields} }`;
        return `{
    ${base},
    ${fields}
}`;
      }
      function generateObjectLiteral(literal) {
        if (literal.base)
          return generateObjectLiteralWithBase(literal);
        let fields = literal.fields.map(generateField).join(",\n    ");
        if (literal.fields.length === 1)
          return `{ ${fields} }`;
        return `{
    ${fields}
}`;
      }
      function generateValue(value) {
        return value.body;
      }
      function generateStringValue(string) {
        return `"${string.body}"`;
      }
      function generateFormatStringValue(string) {
        return `\`${string.body}\``;
      }
      function generateListValue(list) {
        if (list.items.length === 0)
          return `[ ]`;
        if (list.items.length === 1)
          return `[ ${generateExpression(list.items[0])} ]`;
        return `[
${common_1.prefixLines(list.items.map(generateExpression).join(",\n"), 4)}
]`;
      }
      function generateListRange(list) {
        return `[ ${list.start.body}..${list.end.body} ]`;
      }
      function generateIfStatement(ifStatement) {
        const maybeIfLetBody = ifStatement.ifLetBody.length > 0 ? common_1.prefixLines("\nlet", 4) + "\n" + common_1.prefixLines(ifStatement.ifLetBody.map(generateBlock).join("\n\n"), 8) + common_1.prefixLines("\nin", 4) + common_1.prefixLines("", 8) : "";
        const maybeElseLetBody = ifStatement.elseLetBody.length > 0 ? common_1.prefixLines("\nlet", 4) + "\n" + common_1.prefixLines(ifStatement.elseLetBody.map(generateBlock).join("\n\n"), 8) + common_1.prefixLines("\nin", 4) + common_1.prefixLines("", 8) : "";
        return `if ${generateExpression(ifStatement.predicate)} then${maybeIfLetBody}
${common_1.prefixLines(generateExpression(ifStatement.ifBody), maybeIfLetBody ? 8 : 4)}
else${maybeElseLetBody}
${common_1.prefixLines(generateExpression(ifStatement.elseBody), maybeElseLetBody ? 8 : 4)}
`;
      }
      function generateConstructor(constructor) {
        if (constructor.pattern.fields.length === 0)
          return `${constructor.constructor}`;
        return `${constructor.constructor} ${generateObjectLiteral(constructor.pattern)}`;
      }
      function generateListDestructurePart(part) {
        switch (part.kind) {
          case "EmptyList": {
            return "[]";
          }
          case "StringValue": {
            return `"` + part.body + `"`;
          }
          case "FormatStringValue": {
            return "`" + part.body + "`";
          }
          case "Value": {
            return part.body;
          }
          case "Destructure": {
            const pattern = part.pattern ? ` ${part.pattern}` : "";
            return `${part.constructor}${pattern}`;
          }
        }
      }
      function generateBranchPattern(branchPattern) {
        switch (branchPattern.kind) {
          case "Destructure": {
            const pattern = branchPattern.pattern ? ` ${branchPattern.pattern}` : "";
            return `${branchPattern.constructor}${pattern}`;
          }
          case "StringValue": {
            return `"` + branchPattern.body + `"`;
          }
          case "FormatStringValue": {
            return "`" + branchPattern.body + "`";
          }
          case "EmptyList": {
            return "[]";
          }
          case "ListDestructure": {
            return branchPattern.parts.map(generateListDestructurePart).join(" :: ");
          }
          case "Default": {
            return "default";
          }
        }
      }
      function generateBranch(branch) {
        const maybeLetBody = branch.letBody.length > 0 ? common_1.prefixLines("\nlet", 4) + "\n" + common_1.prefixLines(branch.letBody.map(generateBlock).join("\n\n"), 8) + common_1.prefixLines("\nin", 4) + common_1.prefixLines("", 8) : "";
        const body = common_1.prefixLines(generateExpression(branch.body), branch.letBody.length === 0 ? 4 : 8);
        return `${generateBranchPattern(branch.pattern)} ->${maybeLetBody}
${body}
`.trim();
      }
      function generateCaseStatement(caseStatement) {
        const predicate = generateExpression(caseStatement.predicate);
        const branches = caseStatement.branches.map((branch) => generateBranch(branch));
        return `case ${predicate} of
${common_1.prefixLines(branches.join("\n\n"), 4)}
`.trim();
      }
      function generateTopLevelType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return generateType(type_);
          }
          case "FixedType": {
            if (type_.args.length > 0 && type_.args[0].kind === "FixedType" && type_.args[0].args.length > 0) {
              return `${type_.name} (${type_.args.map(generateTopLevelType).join(" ")})`;
            }
            const args = type_.args.filter((type_2) => type_2.kind === "GenericType" || type_2.kind === "FixedType");
            if (args.length === 0) {
              return type_.name;
            }
            return `${type_.name} ${args.map(generateType).join(" ")}`;
          }
          case "FunctionType": {
            return "(" + type_.args.map(generateTopLevelType).join(" -> ") + ")";
          }
        }
      }
      function generateType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return type_.name;
          }
          case "FixedType": {
            if (type_.name === "List") {
              if (type_.args[0] && type_.args[0].kind === "GenericType") {
                return "List " + generateType(type_.args[0]);
              }
              const fixedArgs = type_.args.filter((type_2) => type_2.kind === "FixedType");
              if (fixedArgs.length === 0) {
                return "List any";
              } else if (fixedArgs.length === 1) {
                if (fixedArgs[0].kind === "FixedType" && fixedArgs[0].args.length > 0) {
                  return `List (${generateType(fixedArgs[0])})`;
                }
                return `List ${generateType(fixedArgs[0])}`;
              }
              return `List (${fixedArgs.map(generateType).join(" | ")})`;
            }
            const args = type_.args.filter((type_2) => type_2.kind === "GenericType");
            if (args.length === 0) {
              return type_.name;
            }
            return `${type_.name} ${args.map(generateType).join(" ")}`;
          }
          case "FunctionType": {
            return "(" + type_.args.map(generateType).join(" -> ") + ")";
          }
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
          const right2 = generateExpression(moduleReference.value);
          return `.${right2}`;
        }
        const left = moduleReference.path.join(".");
        const right = generateExpression(moduleReference.value);
        return `${left}.${right}`;
      }
      function generateFunctionCall(functionCall) {
        if (functionCall.args.length === 0)
          return `${functionCall.name}()`;
        let output = [];
        for (const arg of functionCall.args) {
          switch (arg.kind) {
            case "Constructor": {
              if (arg.pattern.fields.length === 0) {
                output.push(generateExpression(arg));
              } else {
                output.push("(" + generateExpression(arg) + ")");
              }
              break;
            }
            case "FunctionCall": {
              output.push("(" + generateExpression(arg) + ")");
              break;
            }
            case "ModuleReference": {
              switch (arg.value.kind) {
                case "Constructor":
                case "FunctionCall": {
                  output.push("(" + generateExpression(arg) + ")");
                  break;
                }
                default: {
                  output.push(generateExpression(arg));
                  break;
                }
              }
              break;
            }
            case "ListPrepend": {
              output.push("(" + generateExpression(arg) + ")");
              break;
            }
            default: {
              output.push(generateExpression(arg));
            }
          }
        }
        const right = output.join(" ");
        return `${functionCall.name} ${right}`;
      }
      function generateLambda(lambda) {
        const args = lambda.args.map((arg) => `${arg}`).join(" ");
        const body = generateExpression(lambda.body);
        return `
(\\${args} -> ${body})
`.trim();
      }
      function generateLambdaCall(lambdaCall) {
        const args = lambdaCall.lambda.args.map((arg) => `${arg}: any`).join(", ");
        const argsValues = lambdaCall.args.map(generateExpression).join(", ");
        const body = generateExpression(lambdaCall.lambda.body);
        return `
(function(${args}) {
    return ${body};
})(${argsValues})
`.trim();
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
          case "Value":
            return generateValue(expression);
          case "StringValue":
            return generateStringValue(expression);
          case "FormatStringValue":
            return generateFormatStringValue(expression);
          case "ListValue":
            return generateListValue(expression);
          case "ListRange":
            return generateListRange(expression);
          case "ObjectLiteral":
            return generateObjectLiteral(expression);
          case "IfStatement":
            return generateIfStatement(expression);
          case "CaseStatement":
            return generateCaseStatement(expression);
          case "Addition":
            return generateAddition(expression);
          case "Subtraction":
            return generateSubtraction(expression);
          case "Multiplication":
            return generateMultiplication(expression);
          case "Division":
            return generateDivision(expression);
          case "And":
            return generateAnd(expression);
          case "Or":
            return generateOr(expression);
          case "ListPrepend":
            return generateListPrepend(expression);
          case "LeftPipe":
            return generateLeftPipe(expression);
          case "RightPipe":
            return generateRightPipe(expression);
          case "ModuleReference":
            return generateModuleReference(expression);
          case "FunctionCall":
            return generateFunctionCall(expression);
          case "Lambda":
            return generateLambda(expression);
          case "LambdaCall":
            return generateLambdaCall(expression);
          case "Constructor":
            return generateConstructor(expression);
          case "Equality":
            return generateEquality(expression);
          case "InEquality":
            return generateInEquality(expression);
          case "LessThan":
            return generateLessThan(expression);
          case "LessThanOrEqual":
            return generateLessThanOrEqual(expression);
          case "GreaterThan":
            return generateGreaterThan(expression);
          case "GreaterThanOrEqual":
            return generateGreaterThanOrEqual(expression);
        }
      }
      function generateFunction(function_) {
        const functionArgumentsTypes = function_.args.map((arg) => {
          switch (arg.kind) {
            case "FunctionArg":
              return generateTopLevelType(arg.type);
            case "AnonFunctionArg":
              return generateTopLevelType(arg.type);
          }
        }).join(" -> ");
        const functionArguments = function_.args.map((arg) => {
          switch (arg.kind) {
            case "FunctionArg":
              return arg.name;
            case "AnonFunctionArg":
              return "_" + arg.index;
          }
        }).join(" ");
        const maybeLetBody = function_.letBody.length > 0 ? common_1.prefixLines("\nlet", 4) + "\n" + common_1.prefixLines(function_.letBody.map(generateBlock).join("\n\n"), 8) + common_1.prefixLines("\nin", 4) : "";
        const returnType = generateTopLevelType(function_.returnType);
        const body = generateExpression(function_.body);
        const prefixedBody = common_1.prefixLines(body, maybeLetBody === "" ? 4 : 8);
        return `
${function_.name}: ${functionArgumentsTypes} -> ${returnType}
${function_.name} ${functionArguments} =${maybeLetBody}
${prefixedBody}
`.trim();
      }
      function generateConst(constDef) {
        const body = common_1.prefixLines(generateExpression(constDef.value), 4);
        const typeDef = generateTopLevelType(constDef.type);
        return `
${constDef.name}: ${typeDef}
${constDef.name} =
${body}
`.trim();
      }
      function generateImportBlock(imports) {
        return imports.modules.map((module2) => {
          const exposingPart = module2.exposing.length > 0 ? ` exposing ( ${module2.exposing.join(", ")} )` : "";
          if (module2.alias.kind === "just")
            return `import ${module2.name} as ${module2.alias.value}${exposingPart}`;
          return `import ${module2.name}${exposingPart}`;
        }).join("\n");
      }
      function generateExportBlock(exports2) {
        return `exposing (${exports2.names.join(", ")})`;
      }
      function generateBlock(syntax) {
        switch (syntax.kind) {
          case "Import":
            return generateImportBlock(syntax);
          case "Export":
            return generateExportBlock(syntax);
          case "UnionType":
            return generateUnionType(syntax);
          case "TypeAlias":
            return generateTypeAlias(syntax);
          case "Function":
            return generateFunction(syntax);
          case "Const":
            return generateConst(syntax);
          case "Comment":
          case "MultilineComment":
            return "";
        }
      }
      function generateDerw2(module2) {
        const importBlocks = module2.body.filter((block) => block.kind === "Import");
        const nonImportBlocks = module2.body.filter((block) => block.kind !== "Import");
        return [
          ...importBlocks.map(generateBlock).filter((line) => line.length > 0).sort((a, b) => a === b ? 0 : a < b ? -1 : 1).join("\n"),
          importBlocks.length > 0 ? "\n\n" : "",
          ...nonImportBlocks.map(generateBlock).filter((line) => line.length > 0).join("\n\n")
        ].join("");
      }
      exports.generateDerw = generateDerw2;
    }
  });

  // node_modules/derw/build/generators/elm.js
  var require_elm = __commonJS({
    "node_modules/derw/build/generators/elm.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generateElm = void 0;
      var types_1 = require_types();
      var common_1 = require_common();
      function generateUnionType(syntax) {
        const tags = syntax.tags.map((tag) => {
          const typeDefArgs = tag.args.map((arg) => arg.name + ": " + generateType(arg.type)).join(",\n    ");
          const funcDefArgsStr = tag.args.length > 0 ? ` { ${typeDefArgs} }` : "";
          return generateType(types_1.FixedType(tag.name, [])) + funcDefArgsStr;
        }).join("\n| ");
        return `
type ${generateType(syntax.type)} =
${common_1.prefixLines(tags, 4)}
`.trim();
      }
      function generateProperty(syntax) {
        return `${syntax.name}: ${generateType(syntax.type)}`;
      }
      function generateTypeAlias(syntax) {
        const generatedProperties = syntax.properties.map(generateProperty);
        const properties = generatedProperties.join(",\n    ");
        const type = generateType(syntax.type);
        return `
type alias ${type} = {
    ${properties}
}
`.trim();
      }
      function generateField(field) {
        const value = generateExpression(field.value);
        if (field.name === value) {
          return `${field.name} = ${value}`;
        }
        return `${field.name} = ${value}`;
      }
      function generateObjectLiteralWithBase(literal) {
        const base = literal.base.body;
        const baseWithoutDots = base.split("...")[1];
        let fields = literal.fields.map(generateField).join(",\n    ");
        if (literal.fields.length === 1)
          return `{ ${baseWithoutDots} | ${fields} }`;
        return `{
    ${baseWithoutDots} |
    ${fields}
}`;
      }
      function generateObjectLiteral(literal) {
        if (literal.base)
          return generateObjectLiteralWithBase(literal);
        let fields = literal.fields.map(generateField).join(",\n    ");
        if (literal.fields.length === 1)
          return `{ ${fields} }`;
        return `{
    ${fields}
}`;
      }
      function generateValue(value) {
        if (value.body === `true`)
          return "True";
        if (value.body === "false")
          return "False";
        return value.body;
      }
      function generateStringValue(string) {
        return `"${string.body}"`;
      }
      function generateFormatStringValue(string) {
        return `"${string.body}"`;
      }
      function generateListValue(list) {
        if (list.items.length === 0)
          return `[ ]`;
        if (list.items.length === 1)
          return `[ ${generateExpression(list.items[0])} ]`;
        return `[
${common_1.prefixLines(list.items.map(generateExpression).join(",\n"), 4)}
]`;
      }
      function generateListRange(list) {
        return `[ ${list.start.body}..${list.end.body} ]`;
      }
      function generateIfStatement(ifStatement) {
        return `if ${generateExpression(ifStatement.predicate)} then
${common_1.prefixLines(generateExpression(ifStatement.ifBody), 4)}
else
${common_1.prefixLines(generateExpression(ifStatement.elseBody), 4)}
`;
      }
      function generateConstructor(constructor) {
        if (constructor.pattern.fields.length === 0)
          return `${constructor.constructor}`;
        return `${constructor.constructor} ${generateObjectLiteral(constructor.pattern)}`;
      }
      function generateListDestructurePart(part) {
        switch (part.kind) {
          case "EmptyList": {
            return "[]";
          }
          case "StringValue": {
            return `"` + part.body + `"`;
          }
          case "FormatStringValue": {
            return "`" + part.body + "`";
          }
          case "Value": {
            return part.body;
          }
          case "Destructure": {
            const pattern = part.pattern ? ` ${part.pattern}` : "";
            return `${part.constructor}${pattern}`;
          }
        }
      }
      function generateBranchPattern(branchPattern) {
        switch (branchPattern.kind) {
          case "Destructure": {
            const pattern = branchPattern.pattern ? ` ${branchPattern.pattern}` : "";
            return `${branchPattern.constructor}${pattern}`;
          }
          case "StringValue": {
            return `"` + branchPattern.body + `"`;
          }
          case "FormatStringValue": {
            return "`" + branchPattern.body + "`";
          }
          case "EmptyList": {
            return "case []";
          }
          case "ListDestructure": {
            return branchPattern.parts.map(generateListDestructurePart).join(" :: ");
          }
          case "Default": {
            return "default";
          }
        }
      }
      function generateBranch(branch) {
        const maybeLetBody = branch.letBody.length > 0 ? common_1.prefixLines("\nlet", 4) + "\n" + common_1.prefixLines(branch.letBody.map(generateBlock).join("\n\n"), 8) + common_1.prefixLines("\nin", 4) : "";
        const body = common_1.prefixLines(generateExpression(branch.body), branch.letBody.length === 0 ? 4 : 8);
        return `${generateBranchPattern(branch.pattern)} ->${maybeLetBody}
${body}
`.trim();
      }
      function generateCaseStatement(caseStatement) {
        const predicate = generateExpression(caseStatement.predicate);
        const branches = caseStatement.branches.map((branch) => generateBranch(branch));
        return `case ${predicate} of
${common_1.prefixLines(branches.join("\n"), 4)}
`.trim();
      }
      var typeMap = {
        boolean: "Bool",
        number: "Float",
        string: "String",
        void: "String"
      };
      function typeMapNameLookup(name) {
        if (Object.keys(typeMap).indexOf(name) === -1) {
          return name;
        }
        return typeMap[name];
      }
      function generateTopLevelType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return generateType(type_);
          }
          case "FixedType": {
            if (type_.args.length > 0 && type_.args[0].kind === "FixedType" && type_.args[0].args.length > 0) {
              return `${type_.name} (${type_.args.map(generateTopLevelType).join(" ")})`;
            }
            const args = type_.args.filter((type_2) => type_2.kind === "GenericType" || type_2.kind === "FixedType");
            if (args.length === 0) {
              return typeMapNameLookup(type_.name);
            }
            return `${type_.name} ${args.map(generateType).join(" ")}`;
          }
          case "FunctionType": {
            return "(" + type_.args.map(generateTopLevelType).join(" -> ") + ")";
          }
        }
      }
      function generateType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return typeMapNameLookup(type_.name);
          }
          case "FixedType": {
            if (type_.name === "List") {
              if (type_.args[0] && type_.args[0].kind === "GenericType") {
                return "List " + generateType(type_.args[0]);
              }
              const fixedArgs = type_.args.filter((type_2) => type_2.kind === "FixedType");
              if (fixedArgs.length === 0) {
                return "List any";
              } else if (fixedArgs.length === 1) {
                return `List ${generateType(fixedArgs[0])}`;
              }
              return `List (${fixedArgs.map(generateType).join(" | ")})`;
            }
            const args = type_.args.filter((type_2) => type_2.kind === "GenericType");
            if (args.length === 0) {
              return typeMapNameLookup(type_.name);
            }
            return `${type_.name} ${args.map(generateType).join(" ")}`;
          }
          case "FunctionType": {
            return "(" + type_.args.map(generateType).join(" -> ") + ")";
          }
        }
      }
      function generateAddition(addition) {
        const left = generateExpression(addition.left);
        const right = generateExpression(addition.right);
        if (addition.left.kind === "StringValue" || addition.right.kind === "StringValue") {
          return `${left} ++ ${right}`;
        }
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
      var moduleLookup = {
        "console.log": `Debug.log ""`
      };
      function generateModuleReference(moduleReference) {
        if (moduleReference.path.length === 0) {
          const right2 = generateExpression(moduleReference.value);
          return `.${right2}`;
        }
        const left = moduleReference.path.join(".");
        const right = generateExpression(moduleReference.value);
        const value = `${left}.${right}`;
        if (Object.keys(moduleLookup).indexOf(value) === -1) {
          return value;
        }
        return moduleLookup[value];
      }
      function generateFunctionCall(functionCall) {
        if (functionCall.args.length === 0)
          return `${functionCall.name}`;
        let output = [];
        for (const arg of functionCall.args) {
          switch (arg.kind) {
            case "Constructor":
            case "FunctionCall": {
              output.push("(" + generateExpression(arg) + ")");
              break;
            }
            case "ModuleReference": {
              switch (arg.value.kind) {
                case "Constructor":
                case "FunctionCall": {
                  output.push("(" + generateExpression(arg) + ")");
                  break;
                }
                default: {
                  output.push(generateExpression(arg));
                  break;
                }
              }
              break;
            }
            default: {
              output.push(generateExpression(arg));
            }
          }
        }
        const right = output.join(" ");
        return `${functionCall.name} ${right}`;
      }
      function generateLambda(lambda) {
        const args = lambda.args.map((arg) => `${arg}`).join(" ");
        const body = generateExpression(lambda.body);
        return `
\\${args} -> ${body}
`.trim();
      }
      function generateLambdaCall(lambdaCall) {
        const args = lambdaCall.lambda.args.map((arg) => `${arg}: any`).join(", ");
        const argsValues = lambdaCall.args.map(generateExpression).join(", ");
        const body = generateExpression(lambdaCall.lambda.body);
        return `
(function(${args}) {
    return ${body};
})(${argsValues})
`.trim();
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
          case "Value":
            return generateValue(expression);
          case "StringValue":
            return generateStringValue(expression);
          case "FormatStringValue":
            return generateFormatStringValue(expression);
          case "ListValue":
            return generateListValue(expression);
          case "ListRange":
            return generateListRange(expression);
          case "ObjectLiteral":
            return generateObjectLiteral(expression);
          case "IfStatement":
            return generateIfStatement(expression);
          case "CaseStatement":
            return generateCaseStatement(expression);
          case "Addition":
            return generateAddition(expression);
          case "Subtraction":
            return generateSubtraction(expression);
          case "Multiplication":
            return generateMultiplication(expression);
          case "Division":
            return generateDivision(expression);
          case "And":
            return generateAnd(expression);
          case "Or":
            return generateOr(expression);
          case "ListPrepend":
            return generateListPrepend(expression);
          case "LeftPipe":
            return generateLeftPipe(expression);
          case "RightPipe":
            return generateRightPipe(expression);
          case "ModuleReference":
            return generateModuleReference(expression);
          case "FunctionCall":
            return generateFunctionCall(expression);
          case "Lambda":
            return generateLambda(expression);
          case "LambdaCall":
            return generateLambdaCall(expression);
          case "Constructor":
            return generateConstructor(expression);
          case "Equality":
            return generateEquality(expression);
          case "InEquality":
            return generateInEquality(expression);
          case "LessThan":
            return generateLessThan(expression);
          case "LessThanOrEqual":
            return generateLessThanOrEqual(expression);
          case "GreaterThan":
            return generateGreaterThan(expression);
          case "GreaterThanOrEqual":
            return generateGreaterThanOrEqual(expression);
        }
      }
      function generateFunction(function_) {
        const functionArgumentsTypes = function_.args.map((arg) => {
          switch (arg.kind) {
            case "FunctionArg":
              return generateTopLevelType(arg.type);
            case "AnonFunctionArg":
              return generateTopLevelType(arg.type);
          }
        }).join(" -> ");
        const functionArguments = function_.args.map((arg) => {
          switch (arg.kind) {
            case "FunctionArg":
              return arg.name;
            case "AnonFunctionArg":
              return "_" + arg.index;
          }
        }).join(" ");
        const maybeLetBody = function_.letBody.length > 0 ? common_1.prefixLines("\nlet", 4) + "\n" + common_1.prefixLines(function_.letBody.map(generateBlock).join("\n\n"), 8) + common_1.prefixLines("\nin", 4) : "";
        const returnType = generateTopLevelType(function_.returnType);
        const body = generateExpression(function_.body);
        const prefixedBody = common_1.prefixLines(body, maybeLetBody === "" ? 4 : 8);
        return `
${function_.name}: ${functionArgumentsTypes} -> ${returnType}
${function_.name} ${functionArguments} =${maybeLetBody}
${prefixedBody}
`.trim();
      }
      function generateConst(constDef) {
        const body = common_1.prefixLines(generateExpression(constDef.value), 4);
        const typeDef = generateTopLevelType(constDef.type);
        return `
${constDef.name}: ${typeDef}
${constDef.name} =
${body}
`.trim();
      }
      function generateImportBlock(imports) {
        return imports.modules.map((module2) => {
          const moduleName = module2.namespace === "Global" ? module2.name : module2.name.replace("./", "").split("/").join(".").split(`"`).join("");
          const exposingPart = module2.exposing.length > 0 ? ` exposing ( ${module2.exposing.join(", ")} )` : "";
          if (module2.alias.kind === "just")
            return `import ${moduleName} as ${module2.alias.value}${exposingPart}`;
          return `import ${moduleName}${exposingPart}`;
        }).join("\n");
      }
      function generateExportBlock(moduleName, names) {
        moduleName = moduleName.toUpperCase()[0] + moduleName.slice(1);
        if (names.length === 0)
          return `module ${moduleName} exposing (..)`;
        return `module ${moduleName} exposing (${names.join(", ")})`;
      }
      function generateBlock(syntax) {
        switch (syntax.kind) {
          case "Import":
            return generateImportBlock(syntax);
          case "Export":
            return "";
          case "UnionType":
            return generateUnionType(syntax);
          case "TypeAlias":
            return generateTypeAlias(syntax);
          case "Function":
            return generateFunction(syntax);
          case "Const":
            return generateConst(syntax);
          case "Comment":
          case "MultilineComment":
            return "";
        }
      }
      function generateElm2(module2) {
        const exports2 = [];
        module2.body.filter((block) => block.kind === "Export").forEach((block) => exports2.push(...block.names));
        return [
          generateExportBlock(module2.name, exports2),
          ...module2.body.map(generateBlock)
        ].filter((line) => line.trim().length > 0).join("\n\n");
      }
      exports.generateElm = generateElm2;
    }
  });

  // node_modules/derw/build/generators/english.js
  var require_english = __commonJS({
    "node_modules/derw/build/generators/english.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generateEnglish = void 0;
      var types_1 = require_types();
      var common_1 = require_common();
      function generateUnionType(syntax) {
        const tags = syntax.tags.map((tag) => {
          const typeDefArgs = tag.args.map((arg) => arg.name + ": " + generateType(arg.type)).join(",\n    ");
          const funcDefArgsStr = tag.args.length > 0 ? ` { ${typeDefArgs} }` : "";
          return generateType(types_1.FixedType(tag.name, [])) + funcDefArgsStr;
        }).join("\n| ");
        return `
type ${generateType(syntax.type)} =
${common_1.prefixLines(tags, 4)}
`.trim();
      }
      function generateProperty(syntax) {
        return `${syntax.name}: ${generateType(syntax.type)}`;
      }
      function generateTypeAlias(syntax) {
        const generatedProperties = syntax.properties.map(generateProperty);
        const properties = generatedProperties.join(",\n    ");
        const type = generateType(syntax.type);
        return `
type alias ${type} = {
    ${properties}
}
`.trim();
      }
      function generateField(field) {
        const value = generateExpression(field.value);
        if (field.name === value) {
          return `${field.name}: ${value}`;
        }
        return `${field.name}: ${value}`;
      }
      function generateObjectLiteralWithBase(literal) {
        const base = literal.base.body;
        let fields = literal.fields.map(generateField).join(",\n    ");
        if (literal.fields.length === 1)
          return `{ ${base}, ${fields} }`;
        return `{
    ${base},
    ${fields}
}`;
      }
      function generateObjectLiteral(literal) {
        if (literal.base)
          return generateObjectLiteralWithBase(literal);
        let fields = literal.fields.map(generateField).join(",\n    ");
        if (literal.fields.length === 1)
          return `{ ${fields} }`;
        return `{
    ${fields}
}`;
      }
      function generateValue(value) {
        return value.body;
      }
      function generateStringValue(string) {
        return `"${string.body}"`;
      }
      function generateFormatStringValue(string) {
        return `\`${string.body}\``;
      }
      function generateListValue(list) {
        if (list.items.length === 0)
          return `An empty list`;
        if (list.items.length === 1)
          return `A list containing ${generateExpression(list.items[0])} only`;
        return `A list containing:
${common_1.prefixLines(list.items.map(generateExpression).join(",\n"), 4)}`;
      }
      function generateListRange(list) {
        return `[ ${list.start.body}..${list.end.body} ]`;
      }
      function generateIfStatement(ifStatement) {
        const maybeIfLetBody = ifStatement.ifLetBody.length > 0 ? common_1.prefixLines("\nlet", 4) + "\n" + common_1.prefixLines(ifStatement.ifLetBody.map(generateBlock).join("\n\n"), 8) + common_1.prefixLines("\nin", 4) + common_1.prefixLines("", 8) : "";
        const maybeElseLetBody = ifStatement.elseLetBody.length > 0 ? common_1.prefixLines("\nlet", 4) + "\n" + common_1.prefixLines(ifStatement.elseLetBody.map(generateBlock).join("\n\n"), 8) + common_1.prefixLines("\nin", 4) + common_1.prefixLines("", 8) : "";
        return `if ${generateExpression(ifStatement.predicate)} then${maybeIfLetBody}
${common_1.prefixLines(generateExpression(ifStatement.ifBody), maybeIfLetBody ? 8 : 4)}
else${maybeElseLetBody}
${common_1.prefixLines(generateExpression(ifStatement.elseBody), maybeElseLetBody ? 8 : 4)}
`;
      }
      function generateConstructor(constructor) {
        if (constructor.pattern.fields.length === 0)
          return `${constructor.constructor}`;
        return `${constructor.constructor} ${generateObjectLiteral(constructor.pattern)}`;
      }
      function generateListDestructurePart(part) {
        switch (part.kind) {
          case "EmptyList": {
            return "An empty list";
          }
          case "StringValue": {
            return `"` + part.body + `"`;
          }
          case "FormatStringValue": {
            return "`" + part.body + "`";
          }
          case "Value": {
            return part.body;
          }
          case "Destructure": {
            const pattern = part.pattern ? ` ${part.pattern}` : "";
            return `${part.constructor}${pattern}`;
          }
        }
      }
      function generateBranchPattern(branchPattern) {
        switch (branchPattern.kind) {
          case "Destructure": {
            const pattern = branchPattern.pattern ? ` ${branchPattern.pattern}` : "";
            return `${branchPattern.constructor}${pattern}`;
          }
          case "StringValue": {
            return `"` + branchPattern.body + `"`;
          }
          case "FormatStringValue": {
            return "`" + branchPattern.body + "`";
          }
          case "EmptyList": {
            return "An empty list";
          }
          case "ListDestructure": {
            return branchPattern.parts.map(generateListDestructurePart).join(" is in of a list element from ");
          }
          case "Default": {
            return "Nothing else matches";
          }
        }
      }
      function generateBranch(branch) {
        const maybeLetBody = branch.letBody.length > 0 ? common_1.prefixLines("\nlet", 4) + "\n" + common_1.prefixLines(branch.letBody.map(generateBlock).join("\n\n"), 8) + common_1.prefixLines("\nin", 4) + common_1.prefixLines("", 8) : "";
        const body = common_1.prefixLines("return " + generateExpression(branch.body), branch.letBody.length === 0 ? 4 : 8);
        return `Is it ${generateBranchPattern(branch.pattern)}? ->${maybeLetBody}
${body}
`.trim();
      }
      function generateCaseStatement(caseStatement) {
        const predicate = generateExpression(caseStatement.predicate);
        const branches = caseStatement.branches.map((branch) => generateBranch(branch));
        return `Check the value of ${predicate}.
${common_1.prefixLines(branches.join("\n\n"), 4)}
`.trim();
      }
      function generateTopLevelType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return generateType(type_);
          }
          case "FixedType": {
            if (type_.name === "List") {
              return generateType(type_);
            }
            const args = type_.args.filter((type_2) => type_2.kind === "GenericType" || type_2.kind === "FixedType");
            if (args.length === 0) {
              return type_.name;
            }
            return `${type_.name} ${args.map(generateType).join(" ")}`;
          }
          case "FunctionType": {
            return generateType(type_);
          }
        }
      }
      function generateType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return type_.name;
          }
          case "FixedType": {
            if (type_.name === "List") {
              if (type_.args[0] && type_.args[0].kind === "GenericType") {
                return "List " + generateType(type_.args[0]);
              }
              const fixedArgs = type_.args.filter((type_2) => type_2.kind === "FixedType");
              if (fixedArgs.length === 0) {
                return "List any";
              } else if (fixedArgs.length === 1) {
                if (fixedArgs[0].kind === "FixedType" && fixedArgs[0].args.length > 0) {
                  return `List (${generateType(fixedArgs[0])})`;
                }
                return `List ${generateType(fixedArgs[0])}`;
              }
              return `List (${fixedArgs.map(generateType).join(" | ")})`;
            }
            const args = type_.args.filter((type_2) => type_2.kind === "GenericType");
            if (args.length === 0) {
              return type_.name;
            }
            return `${type_.name} ${args.map(generateType).join(" ")}`;
          }
          case "FunctionType": {
            return "(" + type_.args.map(generateType).join(" -> ") + ")";
          }
        }
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
      function generateFunctionCall(functionCall) {
        if (functionCall.args.length === 0)
          return `${functionCall.name}()`;
        let output = [];
        for (const arg of functionCall.args) {
          switch (arg.kind) {
            case "Constructor":
            case "FunctionCall": {
              output.push("(" + generateExpression(arg) + ")");
              break;
            }
            case "ModuleReference": {
              switch (arg.value.kind) {
                case "Constructor":
                case "FunctionCall": {
                  output.push("(" + generateExpression(arg) + ")");
                  break;
                }
                default: {
                  output.push(generateExpression(arg));
                  break;
                }
              }
              break;
            }
            case "ListPrepend": {
              output.push("(" + generateExpression(arg) + ")");
              break;
            }
            default: {
              output.push(generateExpression(arg));
            }
          }
        }
        const right = output.join(" ");
        return `${functionCall.name} ${right}`;
      }
      function generateLambda(lambda) {
        const args = lambda.args.map((arg) => `${arg}`).join(" ");
        const body = generateExpression(lambda.body);
        return `
(\\${args} -> ${body})
`.trim();
      }
      function generateLambdaCall(lambdaCall) {
        const args = lambdaCall.lambda.args.map((arg) => `${arg}: any`).join(", ");
        const argsValues = lambdaCall.args.map(generateExpression).join(", ");
        const body = generateExpression(lambdaCall.lambda.body);
        return `
(function(${args}) {
    return ${body};
})(${argsValues})
`.trim();
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
          case "Value":
            return generateValue(expression);
          case "StringValue":
            return generateStringValue(expression);
          case "FormatStringValue":
            return generateFormatStringValue(expression);
          case "ListValue":
            return generateListValue(expression);
          case "ListRange":
            return generateListRange(expression);
          case "ObjectLiteral":
            return generateObjectLiteral(expression);
          case "IfStatement":
            return generateIfStatement(expression);
          case "CaseStatement":
            return generateCaseStatement(expression);
          case "Addition":
            return generateAddition(expression);
          case "Subtraction":
            return generateSubtraction(expression);
          case "Multiplication":
            return generateMultiplication(expression);
          case "Division":
            return generateDivision(expression);
          case "And":
            return generateAnd(expression);
          case "Or":
            return generateOr(expression);
          case "ListPrepend":
            return generateListPrepend(expression);
          case "LeftPipe":
            return generateLeftPipe(expression);
          case "RightPipe":
            return generateRightPipe(expression);
          case "ModuleReference":
            return generateModuleReference(expression);
          case "FunctionCall":
            return generateFunctionCall(expression);
          case "Lambda":
            return generateLambda(expression);
          case "LambdaCall":
            return generateLambdaCall(expression);
          case "Constructor":
            return generateConstructor(expression);
          case "Equality":
            return generateEquality(expression);
          case "InEquality":
            return generateInEquality(expression);
          case "LessThan":
            return generateLessThan(expression);
          case "LessThanOrEqual":
            return generateLessThanOrEqual(expression);
          case "GreaterThan":
            return generateGreaterThan(expression);
          case "GreaterThanOrEqual":
            return generateGreaterThanOrEqual(expression);
        }
      }
      function generateFunction(function_) {
        const functionArguments = function_.args.map((arg) => {
          switch (arg.kind) {
            case "FunctionArg":
              return `${arg.name} with the type ${generateType(arg.type)}`;
            case "AnonFunctionArg":
              return `_${arg.index} with the type ${generateType(arg.type)}`;
          }
        }).join("\n");
        const maybeLetBody = function_.letBody.length > 0 ? common_1.prefixLines("\nlet", 4) + "\n" + common_1.prefixLines(function_.letBody.map(generateBlock).join("\n\n"), 8) + common_1.prefixLines("\nin", 4) : "";
        const returnType = generateTopLevelType(function_.returnType);
        const body = generateExpression(function_.body);
        const prefixedBody = common_1.prefixLines(body, maybeLetBody === "" ? 4 : 8);
        return `
${function_.name} is a function with the arguments:
${common_1.prefixLines(functionArguments, 4)}
${function_.name} returns a value of the type ${returnType}
${function_.name} is defined as: ${maybeLetBody}
${prefixedBody}
`.trim();
      }
      function generateConst(constDef) {
        const body = common_1.prefixLines(generateExpression(constDef.value), 4);
        const typeDef = generateTopLevelType(constDef.type);
        return `
${constDef.name} is a constant with the type ${typeDef}
${constDef.name} is assigned to:
${body}
`.trim();
      }
      function generateImportBlock(imports) {
        return imports.modules.map((module2) => {
          const exposingPart = module2.exposing.length > 0 ? ` exposing ( ${module2.exposing.join(", ")} )` : "";
          if (module2.alias.kind === "just")
            return `import ${module2.name} as ${module2.alias.value}${exposingPart}`;
          return `import ${module2.name}${exposingPart}`;
        }).join("\n");
      }
      function generateExportBlock(exports2) {
        return `exposing (${exports2.names.join(", ")})`;
      }
      function generateBlock(syntax) {
        switch (syntax.kind) {
          case "Import":
            return generateImportBlock(syntax);
          case "Export":
            return generateExportBlock(syntax);
          case "UnionType":
            return generateUnionType(syntax);
          case "TypeAlias":
            return generateTypeAlias(syntax);
          case "Function":
            return generateFunction(syntax);
          case "Const":
            return generateConst(syntax);
          case "Comment":
          case "MultilineComment":
            return "";
        }
      }
      function generateEnglish2(module2) {
        return module2.body.map(generateBlock).filter((line) => line.length > 0).join("\n\n");
      }
      exports.generateEnglish = generateEnglish2;
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
          kind: "just",
          value
        };
      }
      exports.Just = Just;
      function Nothing() {
        return {
          kind: "nothing"
        };
      }
      exports.Nothing = Nothing;
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
      function map(func, maybeValue) {
        switch (maybeValue.kind) {
          case "just":
            return Just(func(maybeValue.value));
          default:
            return maybeValue;
        }
      }
      exports.map = map;
      function map2(func, firstMaybeValue, secondMaybeValue) {
        switch (firstMaybeValue.kind) {
          case "just":
            switch (secondMaybeValue.kind) {
              case "just":
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
          case "just":
            switch (secondMaybeValue.kind) {
              case "just":
                switch (thirdMaybeValue.kind) {
                  case "just":
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
          case "just":
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
            return Maybe.Just(result.value);
          default:
            return Maybe.Nothing();
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
      function map(func, result) {
        switch (result.kind) {
          case "ok":
            return Ok(func(result.value));
          default:
            return result;
        }
      }
      exports.map = map;
      function map2(func, firstResult, secondResult) {
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
      exports.map2 = map2;
      function map3(func, firstResult, secondResult, thirdResult) {
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
      exports.map3 = map3;
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

  // node_modules/derw/build/utils.js
  var require_utils = __commonJS({
    "node_modules/derw/build/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isTestFile = exports.hashCode = exports.getNameFromPath = void 0;
      function getNameFromPath(path) {
        return path.split("/").slice(-1)[0].split(".")[0];
      }
      exports.getNameFromPath = getNameFromPath;
      function hashCode(str) {
        let hash = 0;
        if (str.length === 0)
          return hash;
        for (let i = 0; i < str.length; i++) {
          const chr = str.charCodeAt(i);
          hash = (hash << 5) - hash + chr;
          hash |= 0;
        }
        return Math.abs(hash);
      }
      exports.hashCode = hashCode;
      function isTestFile(name) {
        return name.endsWith("_test.derw");
      }
      exports.isTestFile = isTestFile;
    }
  });

  // node_modules/derw/build/blocks.js
  var require_blocks = __commonJS({
    "node_modules/derw/build/blocks.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.exportTests = exports.typeBlocks = exports.intoBlocks = exports.blockKind = void 0;
      var result_1 = require_result();
      var types_1 = require_types();
      var utils_1 = require_utils();
      function blockKind(block) {
        if (block.startsWith("--")) {
          return result_1.Ok("Comment");
        }
        if (block.startsWith("{-")) {
          return result_1.Ok("MultilineComment");
        }
        if (block.startsWith("type alias")) {
          return result_1.Ok("TypeAlias");
        }
        if (block.startsWith("type ")) {
          return result_1.Ok("UnionType");
        }
        if (block.startsWith(" ") || block.startsWith("}")) {
          return result_1.Ok("Indent");
        }
        if (block.startsWith("import")) {
          return result_1.Ok("Import");
        }
        if (block.startsWith("exposing")) {
          return result_1.Ok("Export");
        }
        const hasTypeLine = block.split(":").length > 1 && block.split(":")[0].trim().split(" ").length === 1;
        const isAFunction = block.split("\n")[0].split("->").length > 1;
        if (hasTypeLine) {
          if (isAFunction) {
            return result_1.Ok("Function");
          } else {
            return result_1.Ok("Const");
          }
        }
        if (block.split("=").length > 1) {
          return result_1.Ok("Definition");
        }
        return result_1.Err("Unknown block type");
      }
      exports.blockKind = blockKind;
      function createUnparsedBlock(blockKind2, lineStart, lines) {
        switch (blockKind2) {
          case "Import": {
            return types_1.UnparsedBlock("ImportBlock", lineStart, lines);
          }
          case "Export": {
            return types_1.UnparsedBlock("ExportBlock", lineStart, lines);
          }
          case "Const": {
            return types_1.UnparsedBlock("ConstBlock", lineStart, lines);
          }
          case "Function": {
            return types_1.UnparsedBlock("FunctionBlock", lineStart, lines);
          }
          case "UnionType": {
            return types_1.UnparsedBlock("UnionTypeBlock", lineStart, lines);
          }
          case "TypeAlias": {
            return types_1.UnparsedBlock("TypeAliasBlock", lineStart, lines);
          }
          case "Indent": {
            return types_1.UnparsedBlock("UnknownBlock", lineStart, lines);
          }
          case "Definition": {
            return types_1.UnparsedBlock("UnknownBlock", lineStart, lines);
          }
          case "Comment": {
            return types_1.UnparsedBlock("CommentBlock", lineStart, lines);
          }
          case "MultilineComment": {
            return types_1.UnparsedBlock("MultilineCommentBlock", lineStart, lines);
          }
          case "Unknown": {
            return types_1.UnparsedBlock("UnknownBlock", lineStart, lines);
          }
        }
      }
      function intoBlocks(body) {
        const blocks = [];
        const lines = body.split("\n");
        let currentBlockKind = result_1.Err("Nothing");
        let currentBlock = [];
        let lineStart = 0;
        for (var i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (line.trim().length === 0)
            continue;
          if (currentBlock.length === 0) {
            currentBlockKind = blockKind(line);
            lineStart = i;
            currentBlock.push(line);
          } else {
            if (currentBlockKind.kind === "ok" && currentBlockKind.value === "MultilineComment") {
              if (line === "-}") {
                currentBlock.push(line);
                blocks.push(createUnparsedBlock(currentBlockKind.value, lineStart, currentBlock));
                currentBlock = [];
              } else {
                currentBlock.push(line);
              }
              continue;
            }
            const currentLineBlockKind = blockKind(line);
            const isIndent = currentLineBlockKind.kind === "ok" && currentLineBlockKind.value === "Indent";
            const isDefinition = currentLineBlockKind.kind === "ok" && currentLineBlockKind.value === "Definition";
            if (isIndent || isDefinition) {
              if (i > 0 && lines[i - 1].trim() === "") {
                currentBlock.push(lines[i - 1]);
              }
              currentBlock.push(line);
            } else {
              switch (currentBlockKind.kind) {
                case "ok": {
                  blocks.push(createUnparsedBlock(currentBlockKind.value, lineStart, currentBlock));
                  currentBlockKind = currentLineBlockKind;
                  currentBlock = [];
                  currentBlock.push(line);
                  lineStart = i;
                  break;
                }
                case "err": {
                  currentBlock.push(line);
                  break;
                }
              }
            }
          }
        }
        if (currentBlock.length > 0) {
          switch (currentBlockKind.kind) {
            case "ok": {
              blocks.push(createUnparsedBlock(currentBlockKind.value, lineStart, currentBlock));
              break;
            }
            case "err": {
              blocks.push(createUnparsedBlock("Unknown", lineStart, currentBlock));
              break;
            }
          }
        }
        return blocks;
      }
      exports.intoBlocks = intoBlocks;
      function typeBlocks(blocks) {
        return blocks.filter((block) => block.kind === "UnionType" || block.kind === "TypeAlias");
      }
      exports.typeBlocks = typeBlocks;
      function exportTests(module2) {
        const isTest = utils_1.isTestFile(module2.name);
        const namesToExpose = isTest ? module2.body.filter((block) => {
          return block.kind === "Function" || block.kind === "Const";
        }).map((block) => block.name).filter((name) => name.startsWith("test")) : [];
        const exports2 = module2.body.filter((block) => block.kind === "Export");
        const exposeWithoutDuplicates = namesToExpose.filter((name) => {
          for (const export_ of exports2) {
            if (export_.names.includes(name)) {
              return false;
            }
          }
          return true;
        });
        return types_1.Export(exposeWithoutDuplicates);
      }
      exports.exportTests = exportTests;
    }
  });

  // node_modules/derw/build/generators/common_to_ecma.js
  var require_common_to_ecma = __commonJS({
    "node_modules/derw/build/generators/common_to_ecma.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generateExportBlock = exports.generateImportBlock = exports.flattenLeftPipe = exports.generateListDestructurePart = exports.generateListRange = exports.generateFormatStringValue = exports.generateStringValue = exports.generateValue = void 0;
      var types_1 = require_types();
      var utils_1 = require_utils();
      function generateValue(value) {
        return value.body;
      }
      exports.generateValue = generateValue;
      function generateStringValue(string) {
        return `"${string.body}"`;
      }
      exports.generateStringValue = generateStringValue;
      function generateFormatStringValue(string) {
        return `\`${string.body}\``;
      }
      exports.generateFormatStringValue = generateFormatStringValue;
      function generateListRange(list) {
        const gap = `${list.end.body} - ${list.start.body} + 1`;
        return `Array.from({ length: ${gap} }, (x, i) => i + ${list.start.body})`;
      }
      exports.generateListRange = generateListRange;
      function generateListDestructurePart(part) {
        switch (part.kind) {
          case "EmptyList": {
            return "[]";
          }
          case "StringValue": {
            return part.body;
          }
          case "FormatStringValue": {
            return part.body;
          }
          case "Value": {
            return part.body;
          }
          case "Destructure": {
            const pattern = part.pattern ? ` ${part.pattern}` : "";
            return `${part.constructor}${pattern}`;
          }
        }
      }
      exports.generateListDestructurePart = generateListDestructurePart;
      function addArgsToModuleReference(moduleReference, newArgs) {
        switch (moduleReference.value.kind) {
          case "FunctionCall": {
            const args = [...moduleReference.value.args, ...newArgs];
            const innerFunction = types_1.FunctionCall(moduleReference.value.name, args);
            return types_1.ModuleReference(moduleReference.path, innerFunction);
          }
          case "Value": {
            const args = [...newArgs];
            const innerFunction = types_1.FunctionCall(moduleReference.value.body, args);
            return types_1.ModuleReference(moduleReference.path, innerFunction);
          }
        }
        return moduleReference;
      }
      function flattenLeftPipe(leftPipe) {
        const left = leftPipe.left;
        const right = leftPipe.right;
        switch (right.kind) {
          case "FunctionCall": {
            const args = [...right.args, left];
            return types_1.FunctionCall(right.name, args);
          }
          case "Value": {
            const args = [left];
            return types_1.FunctionCall(right.body, args);
          }
          case "ModuleReference": {
            return addArgsToModuleReference(right, [left]);
          }
          case "Lambda": {
            return types_1.LambdaCall(right, [left]);
          }
          case "LeftPipe": {
            let innerFunction = null;
            switch (right.left.kind) {
              case "FunctionCall": {
                const args = [...right.left.args, left];
                innerFunction = types_1.FunctionCall(right.left.name, args);
                break;
              }
              case "Value": {
                const args = [left];
                innerFunction = types_1.FunctionCall(right.left.body, args);
                break;
              }
              case "ModuleReference": {
                innerFunction = addArgsToModuleReference(right.left, [
                  left
                ]);
                break;
              }
              case "LeftPipe": {
                return right;
              }
            }
            if (innerFunction === null)
              return right.left;
            return flattenLeftPipe(types_1.LeftPipe(innerFunction, right.right));
          }
        }
      }
      exports.flattenLeftPipe = flattenLeftPipe;
      function generateImportBlock(imports) {
        return imports.modules.filter((module2) => module2.name !== "globalThis").map((module2) => {
          if (module2.namespace === "Relative") {
            const withoutQuotes = module2.name.slice(1, -1);
            const name2 = module2.alias.kind === "just" ? module2.alias.value : utils_1.getNameFromPath(withoutQuotes);
            const exposing2 = `import { ${module2.exposing.join(", ")} } from ${module2.name};`;
            if (module2.exposing.length === 0) {
              return `import * as ${name2} from ${module2.name};`;
            } else {
              if (module2.alias.kind === "just") {
                return `import * as ${name2} from ${module2.name};
${exposing2}`;
              }
              return exposing2;
            }
          }
          const name = module2.alias.kind === "just" ? module2.alias.value : module2.name;
          const exposing = `import { ${module2.exposing.join(", ")} } from "${module2.name}";`;
          if (module2.exposing.length === 0) {
            return `import * as ${name} from "${module2.name}";`;
          } else {
            if (module2.alias.kind === "just") {
              return `import * as ${name} from "${module2.name}";
${exposing}`;
            }
            return exposing;
          }
        }).join("\n");
      }
      exports.generateImportBlock = generateImportBlock;
      function generateExportBlock(exports2) {
        return exports2.names.map((name) => {
          return `export { ${name} };`;
        }).join("\n");
      }
      exports.generateExportBlock = generateExportBlock;
    }
  });

  // node_modules/derw/build/generators/js.js
  var require_js = __commonJS({
    "node_modules/derw/build/generators/js.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generateJavascript = void 0;
      var blocks_1 = require_blocks();
      var types_1 = require_types();
      var utils_1 = require_utils();
      var common_1 = require_common();
      var common_to_ecma_1 = require_common_to_ecma();
      function generateUnionType(syntax) {
        const tagCreators = syntax.tags.map((tag) => {
          const generatedType = tag.name;
          return `
function ${generatedType}(args) {
    return {
        kind: "${tag.name}",
        ...args,
    };
}
`.trim();
        }).join("\n\n");
        return tagCreators;
      }
      function generateField(field) {
        const value = generateExpression(field.value);
        if (field.name === value) {
          return `${field.name}`;
        }
        return `${field.name}: ${value}`;
      }
      function generateObjectLiteralWithBase(literal) {
        const base = literal.base.body;
        if (literal.fields.length === 0)
          return `{ ${base} }`;
        let fields = literal.fields.map(generateField).join(",\n    ");
        if (literal.fields.length === 1)
          return `{ ${base}, ${fields} }`;
        return `{
    ${base},
    ${fields}
}`;
      }
      function generateObjectLiteral(literal) {
        if (literal.base !== null)
          return generateObjectLiteralWithBase(literal);
        if (literal.fields.length === 0)
          return `{ }`;
        let fields = literal.fields.map(generateField).join(",\n    ");
        if (literal.fields.length === 1)
          return `{ ${fields} }`;
        return `{
    ${fields}
}`;
      }
      function generateListValue(list) {
        if (list.items.length === 0)
          return `[ ]`;
        if (list.items.length === 1)
          return `[ ${generateExpression(list.items[0])} ]`;
        return `[ ${list.items.map(generateExpression).join(", ")} ]`;
      }
      function generateIfStatement(ifStatement) {
        const isSimpleIfBody = types_1.isSimpleValue(ifStatement.ifBody.kind);
        const isSimpleElseBody = types_1.isSimpleValue(ifStatement.elseBody.kind);
        const ifBodyPrefix = isSimpleIfBody ? "return " : "";
        const elseBodyPrefix = isSimpleElseBody ? "return " : "";
        const maybeIfLetBody = ifStatement.ifLetBody.length > 0 ? "\n" + common_1.prefixLines(ifStatement.ifLetBody.map(generateBlock).join("\n"), 4) : "";
        const ifBody = generateExpression(ifStatement.ifBody);
        const indentedIfBody = ifBody.split("\n").length === 1 ? ifBody : [
          ifBody.split("\n")[0],
          common_1.prefixLines(ifBody.split("\n").slice(1).join("\n"), 4)
        ].join("\n");
        const maybeElseLetBody = ifStatement.elseLetBody.length > 0 ? "\n" + common_1.prefixLines(ifStatement.elseLetBody.map(generateBlock).join("\n"), 4) : "";
        const elseBody = generateExpression(ifStatement.elseBody);
        const indentedElseBody = elseBody.split("\n").length === 1 ? elseBody : [
          elseBody.split("\n")[0],
          common_1.prefixLines(elseBody.split("\n").slice(1).join("\n"), 4)
        ].join("\n");
        return `if (${generateExpression(ifStatement.predicate)}) {${maybeIfLetBody}
    ${ifBodyPrefix}${indentedIfBody};
} else {${maybeElseLetBody}
    ${elseBodyPrefix}${indentedElseBody};
}`;
      }
      function generateConstructor(constructor) {
        if (constructor.pattern.fields.length === 0)
          return `${constructor.constructor}({ })`;
        return `${constructor.constructor}(${generateObjectLiteral(constructor.pattern)})`;
      }
      function generateListDestructureWithGaps(predicate, branch, pattern) {
        const isFinalEmptyList = pattern.parts[pattern.parts.length - 1].kind === "EmptyList";
        const partsWithLength = common_1.destructureLength(pattern);
        let output = "";
        const REPLACE_KEY = "$REPLACE_ME";
        let indent = 0;
        for (let i = 0; i < pattern.parts.length; i++) {
          const part = pattern.parts[i];
          const isLastValue = i === pattern.parts.length - 1;
          switch (part.kind) {
            case "Destructure": {
              const isNextAValue = isLastValue ? false : pattern.parts[i + 1].kind === "Value";
              const hasADestructureAfter = i < pattern.parts.length - 2 ? pattern.parts[i + 2].kind === "Destructure" : false;
              if (isNextAValue && hasADestructureAfter) {
                const nextValue = pattern.parts[i + 1];
                const destructorAfter = pattern.parts[i + 2];
                output += common_1.prefixLines(`
const [ _0, ..._rest ] = _res868186726;
if (_0.kind === "${part.constructor}") {
    let _foundIndex = -1;
    for (let _i = 0; _i < _rest.length; _i++) {
        if (_rest[_i].kind === "${destructorAfter.constructor}") {
            _foundIndex = _i;
            break;
        }
    }

    if (_foundIndex > -1) {
        const ${nextValue.body} = _rest.slice(0, _foundIndex);
        ${REPLACE_KEY}
    }
}`, 8).trim();
                i += 1;
              }
              break;
            }
            case "Value": {
              if (output.length > 0) {
                if (pattern.parts[i - 1].kind === "Destructure") {
                  output = output.replace(REPLACE_KEY, `const ${part.body} = _rest.slice(_foundIndex, _rest.length);
${REPLACE_KEY}
    `.trim());
                } else {
                  output = output.replace(REPLACE_KEY, `const ${part.body} = _rest;
${REPLACE_KEY}
    `.trim());
                }
              } else {
                output += `
const ${part.body} = _rest;
                    `;
              }
              break;
            }
          }
          i++;
        }
        const conditional = isFinalEmptyList ? `${predicate}.length === ${partsWithLength}` : `${predicate}.length >= ${partsWithLength}`;
        const returnWrapper = types_1.isSimpleValue(branch.body.kind) ? "    return " : "";
        const body = common_1.prefixLines(generateExpression(branch.body), types_1.isSimpleValue(branch.body.kind) ? 0 : 4);
        const inner = common_1.prefixLines(`${returnWrapper}${body};`, 12);
        return `
case ${predicate}.length: {
    if (${conditional}) {
        ${output.replace(REPLACE_KEY, inner)}
    }
}`.trim();
      }
      function generateBranch(predicate, branch) {
        const returnWrapper = types_1.isSimpleValue(branch.body.kind) ? "    return " : "";
        const body = common_1.prefixLines(generateExpression(branch.body), types_1.isSimpleValue(branch.body.kind) ? 0 : 4);
        const maybeLetBody = branch.letBody.length > 0 ? "\n" + common_1.prefixLines(branch.letBody.map(generateBlock).join("\n"), 4) : "";
        switch (branch.pattern.kind) {
          case "Destructure": {
            const pattern = branch.pattern.pattern.trim().length > 0 ? `
    const ${branch.pattern.pattern} = ${predicate};` : "";
            return `case "${branch.pattern.constructor}": {${pattern}${maybeLetBody}
${returnWrapper}${body};
}`;
          }
          case "StringValue": {
            return `case "${branch.pattern.body}": {${maybeLetBody}
${returnWrapper}${body};
}`;
          }
          case "FormatStringValue": {
            return `case \`${branch.pattern.body}\`: {${maybeLetBody}
${returnWrapper}${body};
}`;
          }
          case "EmptyList": {
            return `case 0: {${maybeLetBody}
${returnWrapper}${body};
}`;
          }
          case "ListDestructure": {
            const length = branch.pattern.parts.length;
            const isFinalEmptyList = branch.pattern.parts[length - 1].kind === "EmptyList";
            const partsWithLength = common_1.destructureLength(branch.pattern);
            const hasGaps = common_1.patternHasGaps(branch.pattern);
            const gapPositions = common_1.patternGapPositions(branch.pattern);
            const isOnlyFinalGap = gapPositions.length === 1 && gapPositions[0] === branch.pattern.parts.length - 1;
            const conditional = isFinalEmptyList && !hasGaps ? `${predicate}.length === ${partsWithLength}` : `${predicate}.length >= ${partsWithLength}`;
            const firstPart = branch.pattern.parts[0];
            const isFirstDestructor = firstPart.kind === "Destructure";
            if (hasGaps && !isOnlyFinalGap) {
              return generateListDestructureWithGaps(predicate, branch, branch.pattern);
            } else if (isFirstDestructor) {
              const destructors = branch.pattern.parts.filter((t) => t.kind === "Destructure");
              const destructorParts = destructors.map((_, i) => `_${i}`);
              const generatedParts2 = [
                ...destructorParts,
                ...branch.pattern.parts.slice(destructorParts.length, -1).map(common_to_ecma_1.generateListDestructurePart)
              ];
              const parts2 = isFinalEmptyList ? generatedParts2.join(", ") : generatedParts2.join(", ") + ", ..." + common_to_ecma_1.generateListDestructurePart(branch.pattern.parts[length - 1]);
              const conditionals = destructors.map((destructor, i) => {
                return `_${i}.kind === "${destructor.constructor}"`;
              });
              const joinedConditionals = conditionals.join(" && ");
              const unpacked = destructors.map((destructor, i) => {
                return destructor.pattern.length > 0 ? `
            const ${destructor.pattern} = _${i};` : "";
              });
              const joinedUnpacked = unpacked.length === 0 ? "" : unpacked.join("");
              return `case ${predicate}.length: {
    if (${conditional}) {
        const [ ${parts2} ] = ${predicate};
        if (${joinedConditionals}) {${joinedUnpacked}${maybeLetBody ? common_1.prefixLines(maybeLetBody, 8) : ""}
        ${returnWrapper}${body};
        }
    }
}`;
            }
            const isFirstValue = firstPart.kind === "StringValue" || firstPart.kind === "FormatStringValue";
            const partsToGenerate = isFirstValue ? [types_1.Value("_temp"), ...branch.pattern.parts.slice(1, -1)] : branch.pattern.parts.slice(0, -1);
            const generatedParts = partsToGenerate.map(common_to_ecma_1.generateListDestructurePart);
            const parts = isFinalEmptyList ? generatedParts.join(", ") : generatedParts.join(", ") + ", ..." + common_to_ecma_1.generateListDestructurePart(branch.pattern.parts[length - 1]);
            if (isFirstValue) {
              const typeCheckedFirstPart = firstPart;
              const tempConditional = typeCheckedFirstPart.kind === "StringValue" ? `"${typeCheckedFirstPart.body}"` : `\`${typeCheckedFirstPart.body}\``;
              return `case ${predicate}.length: {
    if (${conditional}) {
        const [ ${parts} ] = ${predicate};${maybeLetBody ? common_1.prefixLines(maybeLetBody, 4) : ""}
        if (_temp === ${tempConditional}) {
        ${returnWrapper}${body};
        }
    }
}`;
            } else {
              return `case ${predicate}.length: {
    if (${conditional}) {
        const [ ${parts} ] = ${predicate};${maybeLetBody ? common_1.prefixLines(maybeLetBody, 4) : ""}
    ${returnWrapper}${body};
    }
}`;
            }
          }
          case "Default": {
            return `default: {${maybeLetBody}
${returnWrapper}${body};
}`;
          }
        }
      }
      function generateCaseStatement(caseStatement) {
        const predicate = generateExpression(caseStatement.predicate);
        const name = `_res${utils_1.hashCode(predicate)}`;
        const branches = caseStatement.branches.map((branch) => generateBranch(name, branch));
        const isString = caseStatement.branches.filter((branch) => branch.pattern.kind === "StringValue").length > 0;
        if (isString) {
          return `
const ${name} = ${predicate};
switch (${name}) {
${common_1.prefixLines(branches.join("\n"), 4)}
}`.trim();
        }
        const isList = caseStatement.branches.filter((branch) => branch.pattern.kind === "EmptyList" || branch.pattern.kind === "ListDestructure").length > 0;
        if (isList) {
          return `
const ${name} = ${predicate};
switch (${name}.length) {
${common_1.prefixLines(branches.join("\n"), 4)}
}`.trim();
        }
        return `
const ${name} = ${predicate};
switch (${name}.kind) {
${common_1.prefixLines(branches.join("\n"), 4)}
}`.trim();
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
      function generateLeftPipe(leftPipe) {
        return generateExpression(common_to_ecma_1.flattenLeftPipe(leftPipe));
      }
      function generateRightPipe(rightPipe) {
        const left = generateExpression(rightPipe.left);
        const right = generateExpression(rightPipe.right);
        return `${left}(${right})`;
      }
      function generateModuleReference(moduleReference) {
        if (moduleReference.path.length === 0) {
          const right2 = generateExpression(moduleReference.value);
          return `(arg0) => arg0.${right2}`;
        }
        const left = moduleReference.path.join(".");
        const right = generateExpression(moduleReference.value);
        return `${left}.${right}`;
      }
      function generateFunctionCall(functionCall) {
        const right = functionCall.args.map(generateExpression).join(", ");
        return `${functionCall.name}(${right})`;
      }
      function generateLambda(lambda) {
        const args = lambda.args.join(", ");
        const isSimple = types_1.isSimpleValue(lambda.body.kind);
        const body = common_1.prefixLines(generateExpression(lambda.body), isSimple ? 0 : 4);
        if (isSimple) {
          return `
function(${args}) {
    return ${body};
}
`.trim();
        }
        return `
function(${args}) {
${body}
}
`.trim();
      }
      function generateLambdaCall(lambdaCall) {
        const args = lambdaCall.lambda.args.join(", ");
        const argsValues = lambdaCall.args.map(generateExpression).join(", ");
        const body = generateExpression(lambdaCall.lambda.body);
        return `
(function(${args}) {
    return ${body};
})(${argsValues})
`.trim();
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
          case "Value":
            return common_to_ecma_1.generateValue(expression);
          case "StringValue":
            return common_to_ecma_1.generateStringValue(expression);
          case "FormatStringValue":
            return common_to_ecma_1.generateFormatStringValue(expression);
          case "ListValue":
            return generateListValue(expression);
          case "ListRange":
            return common_to_ecma_1.generateListRange(expression);
          case "ObjectLiteral":
            return generateObjectLiteral(expression);
          case "IfStatement":
            return generateIfStatement(expression);
          case "CaseStatement":
            return generateCaseStatement(expression);
          case "Addition":
            return generateAddition(expression);
          case "Subtraction":
            return generateSubtraction(expression);
          case "Multiplication":
            return generateMultiplication(expression);
          case "Division":
            return generateDivision(expression);
          case "And":
            return generateAnd(expression);
          case "Or":
            return generateOr(expression);
          case "ListPrepend":
            return generateListPrepend(expression);
          case "LeftPipe":
            return generateLeftPipe(expression);
          case "RightPipe":
            return generateRightPipe(expression);
          case "ModuleReference":
            return generateModuleReference(expression);
          case "FunctionCall":
            return generateFunctionCall(expression);
          case "Lambda":
            return generateLambda(expression);
          case "LambdaCall":
            return generateLambdaCall(expression);
          case "Constructor":
            return generateConstructor(expression);
          case "Equality":
            return generateEquality(expression);
          case "InEquality":
            return generateInEquality(expression);
          case "LessThan":
            return generateLessThan(expression);
          case "LessThanOrEqual":
            return generateLessThanOrEqual(expression);
          case "GreaterThan":
            return generateGreaterThan(expression);
          case "GreaterThanOrEqual":
            return generateGreaterThanOrEqual(expression);
        }
      }
      function generateFunction(function_) {
        const functionArguments = function_.args.map((arg) => {
          switch (arg.kind) {
            case "FunctionArg":
              return arg.name;
            case "AnonFunctionArg":
              return "_" + arg.index;
          }
        }).join(", ");
        const isSimpleBody = types_1.isSimpleValue(function_.body.kind);
        const maybeLetBody = function_.letBody.length > 0 ? "\n" + common_1.prefixLines(function_.letBody.map(generateBlock).join("\n"), 4) : "";
        const bodyPrefix = isSimpleBody ? "return " : "";
        const bodySuffix = isSimpleBody ? ";" : "";
        const body = bodyPrefix + generateExpression(function_.body) + bodySuffix;
        const prefixedBody = common_1.prefixLines(body, 4);
        return `
function ${function_.name}(${functionArguments}) {${maybeLetBody}
${prefixedBody}
}`.trim();
      }
      function generateInlineIf(expression) {
        const ifBody = expression.ifBody.kind === "IfStatement" ? "( " + generateInlineIf(expression.ifBody) + " )" : generateExpression(expression.ifBody);
        const elseBody = expression.elseBody.kind === "IfStatement" ? "( " + generateInlineIf(expression.elseBody) + " )" : generateExpression(expression.elseBody);
        return `${generateExpression(expression.predicate)} ? ${ifBody} : ${elseBody}`;
      }
      function generateInlineCase(expression) {
        return `(function () {
${common_1.prefixLines(generateExpression(expression), 4)}
})()`;
      }
      function generateConst(constDef) {
        let body = "";
        switch (constDef.value.kind) {
          case "IfStatement": {
            body = generateInlineIf(constDef.value);
            break;
          }
          case "CaseStatement": {
            body = generateInlineCase(constDef.value);
            break;
          }
          default: {
            body = generateExpression(constDef.value);
            break;
          }
        }
        return `
const ${constDef.name} = ${body};
`.trim();
      }
      function generateTypeAlias(syntax) {
        const type = syntax.type.name;
        return `
function ${type}(args) {
    return {
        ...args,
    };
}
    `.trim();
      }
      function generateBlock(syntax) {
        switch (syntax.kind) {
          case "Import":
            return common_to_ecma_1.generateImportBlock(syntax);
          case "Export":
            return common_to_ecma_1.generateExportBlock(syntax);
          case "UnionType":
            return generateUnionType(syntax);
          case "TypeAlias":
            return generateTypeAlias(syntax);
          case "Function":
            return generateFunction(syntax);
          case "Const":
            return generateConst(syntax);
          case "Comment":
          case "MultilineComment":
            return "";
        }
      }
      function generateJavascript2(module2) {
        return [blocks_1.exportTests(module2), ...module2.body].map(generateBlock).filter((line) => line.length > 0).join("\n\n");
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
        return ["boolean", "number", "string", "void", "any"].indexOf(potentialType) > -1;
      }
      exports.isBuiltinType = isBuiltinType;
      function isReservedName(potentialName) {
        return ["Object", "Function"].indexOf(potentialName.trim()) > -1;
      }
      exports.isReservedName = isReservedName;
    }
  });

  // node_modules/derw/build/generators/ts.js
  var require_ts = __commonJS({
    "node_modules/derw/build/generators/ts.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generateTypescript = void 0;
      var blocks_1 = require_blocks();
      var builtins_1 = require_builtins();
      var types_1 = require_types();
      var utils_1 = require_utils();
      var common_1 = require_common();
      var common_to_ecma_1 = require_common_to_ecma();
      function generateUnionType(syntax) {
        const tagCreators = syntax.tags.map((tag) => {
          const typeDefArgs = tag.args.map((arg) => arg.name + ": " + generateType(arg.type) + ";").join("\n    ");
          const funcDefArgs = tag.args.map((arg) => arg.name + ": " + generateType(arg.type)).join(", ");
          const generatedType = generateType(types_1.FixedType(tag.name, tag.args.map((arg) => arg.type).filter((arg) => {
            if (arg.kind === "FixedType") {
              if (builtins_1.isBuiltinType(arg.name))
                return false;
            }
            if (arg.kind === "GenericType") {
              if (builtins_1.isBuiltinType(arg.name))
                return false;
            }
            return true;
          })));
          const funcDefArgsStr = tag.args.length > 0 ? `{ ${funcDefArgs} }` : "{}";
          return `
type ${generatedType} = {
    kind: "${tag.name}";${typeDefArgs.length === 0 ? "" : "\n    " + typeDefArgs}
};

function ${generatedType}(args: ${funcDefArgsStr}): ${generatedType} {
    return {
        kind: "${tag.name}",
        ...args,
    };
}`;
        }).join("\n");
        const tags = syntax.tags.map((tag) => {
          return generateType(types_1.FixedType(tag.name, tag.args.map((arg) => arg.type).filter((arg) => {
            if (arg.kind === "FixedType") {
              if (builtins_1.isBuiltinType(arg.name))
                return false;
            }
            if (arg.kind === "GenericType") {
              if (builtins_1.isBuiltinType(arg.name))
                return false;
            }
            return true;
          })));
        }).join(" | ");
        return `
${tagCreators}

type ${generateType(syntax.type)} = ${tags};
`.trim();
      }
      function generateProperty(syntax) {
        return `${syntax.name}: ${generateTopLevelType(syntax.type)}`;
      }
      function generateTypeAlias(syntax) {
        const generatedProperties = syntax.properties.map(generateProperty);
        const properties = generatedProperties.length === 0 ? "" : "    " + generatedProperties.join(";\n    ") + ";";
        const type = generateType(syntax.type);
        const args = generatedProperties.length === 0 ? " " : " " + generatedProperties.join(", ") + " ";
        return `
type ${type} = {
${properties}
}

function ${type}(args: {${args}}): ${type} {
    return {
        ...args,
    };
}
`.trim();
      }
      function generateField(field) {
        const value = generateExpression(field.value);
        if (field.name === value) {
          return `${field.name}`;
        }
        return `${field.name}: ${value}`;
      }
      function generateObjectLiteralWithBase(literal) {
        const base = literal.base.body;
        if (literal.fields.length === 0)
          return `{ ${base} }`;
        let fields = literal.fields.map(generateField).join(",\n    ");
        if (literal.fields.length === 1)
          return `{ ${base}, ${fields} }`;
        return `{
    ${base},
    ${fields}
}`;
      }
      function generateObjectLiteral(literal) {
        if (literal.base !== null)
          return generateObjectLiteralWithBase(literal);
        if (literal.fields.length === 0)
          return `{ }`;
        let fields = literal.fields.map(generateField).join(",\n    ");
        if (literal.fields.length === 1)
          return `{ ${fields} }`;
        return `{
    ${fields}
}`;
      }
      function generateListValue(list) {
        if (list.items.length === 0)
          return `[ ]`;
        if (list.items.length === 1)
          return `[ ${generateExpression(list.items[0])} ]`;
        return `[ ${list.items.map((item) => generateExpression(item)).join(", ")} ]`;
      }
      function generateIfStatement(ifStatement, parentTypeArguments) {
        const isSimpleIfBody = types_1.isSimpleValue(ifStatement.ifBody.kind);
        const isSimpleElseBody = types_1.isSimpleValue(ifStatement.elseBody.kind);
        const ifBodyPrefix = isSimpleIfBody ? "return " : "";
        const elseBodyPrefix = isSimpleElseBody ? "return " : "";
        const maybeIfLetBody = ifStatement.ifLetBody.length > 0 ? "\n" + common_1.prefixLines(ifStatement.ifLetBody.map((block) => generateBlock(block, parentTypeArguments)).join("\n"), 4) : "";
        const ifBody = generateExpression(ifStatement.ifBody, parentTypeArguments);
        const indentedIfBody = ifBody.split("\n").length === 1 ? ifBody : [
          ifBody.split("\n")[0],
          common_1.prefixLines(ifBody.split("\n").slice(1).join("\n"), 4)
        ].join("\n");
        const maybeElseLetBody = ifStatement.elseLetBody.length > 0 ? "\n" + common_1.prefixLines(ifStatement.elseLetBody.map((block) => generateBlock(block, parentTypeArguments)).join("\n"), 4) : "";
        const elseBody = generateExpression(ifStatement.elseBody, parentTypeArguments);
        const indentedElseBody = elseBody.split("\n").length === 1 ? elseBody : [
          elseBody.split("\n")[0],
          common_1.prefixLines(elseBody.split("\n").slice(1).join("\n"), 4)
        ].join("\n");
        return `if (${generateExpression(ifStatement.predicate)}) {${maybeIfLetBody}
    ${ifBodyPrefix}${indentedIfBody};
} else {${maybeElseLetBody}
    ${elseBodyPrefix}${indentedElseBody};
}`;
      }
      function generateConstructor(constructor) {
        if (constructor.pattern.fields.length === 0)
          return `${constructor.constructor}({ })`;
        return `${constructor.constructor}(${generateObjectLiteral(constructor.pattern)})`;
      }
      function generateListDestructureWithGaps(predicate, branch, pattern) {
        const isFinalEmptyList = pattern.parts[pattern.parts.length - 1].kind === "EmptyList";
        const partsWithLength = common_1.destructureLength(pattern);
        let output = "";
        const REPLACE_KEY = "$REPLACE_ME";
        let indent = 0;
        for (let i = 0; i < pattern.parts.length; i++) {
          const part = pattern.parts[i];
          const isLastValue = i === pattern.parts.length - 1;
          switch (part.kind) {
            case "Destructure": {
              const isNextAValue = isLastValue ? false : pattern.parts[i + 1].kind === "Value";
              const hasADestructureAfter = i < pattern.parts.length - 2 ? pattern.parts[i + 2].kind === "Destructure" : false;
              if (isNextAValue && hasADestructureAfter) {
                const nextValue = pattern.parts[i + 1];
                const destructorAfter = pattern.parts[i + 2];
                output += common_1.prefixLines(`
const [ _0, ..._rest ] = _res868186726;
if (_0.kind === "${part.constructor}") {
    let _foundIndex: number = -1;
    for (let _i = 0; _i < _rest.length; _i++) {
        if (_rest[_i].kind === "${destructorAfter.constructor}") {
            _foundIndex = _i;
            break;
        }
    }

    if (_foundIndex > -1) {
        const ${nextValue.body} = _rest.slice(0, _foundIndex);
        ${REPLACE_KEY}
    }
}`, 8).trim();
                i += 1;
              }
              break;
            }
            case "Value": {
              if (output.length > 0) {
                if (pattern.parts[i - 1].kind === "Destructure") {
                  output = output.replace(REPLACE_KEY, `const ${part.body} = _rest.slice(_foundIndex, _rest.length);
${REPLACE_KEY}
    `.trim());
                } else {
                  output = output.replace(REPLACE_KEY, `const ${part.body} = _rest;
${REPLACE_KEY}
    `.trim());
                }
              } else {
                output += `
const ${part.body} = _rest;
                    `;
              }
              break;
            }
          }
          i++;
        }
        const conditional = isFinalEmptyList ? `${predicate}.length === ${partsWithLength}` : `${predicate}.length >= ${partsWithLength}`;
        const returnWrapper = types_1.isSimpleValue(branch.body.kind) ? "    return " : "";
        const body = common_1.prefixLines(generateExpression(branch.body), types_1.isSimpleValue(branch.body.kind) ? 0 : 4);
        const inner = common_1.prefixLines(`${returnWrapper}${body};`, 12);
        return `
case ${predicate}.length: {
    if (${conditional}) {
        ${output.replace(REPLACE_KEY, inner)}
    }
}`.trim();
      }
      function generateBranch(predicate, branch, parentTypeArguments) {
        const returnWrapper = types_1.isSimpleValue(branch.body.kind) ? "    return " : "";
        const body = common_1.prefixLines(generateExpression(branch.body, parentTypeArguments), types_1.isSimpleValue(branch.body.kind) ? 0 : 4);
        const maybeLetBody = branch.letBody.length > 0 ? "\n" + common_1.prefixLines(branch.letBody.map((block) => generateBlock(block, parentTypeArguments)).join("\n"), 4) : "";
        switch (branch.pattern.kind) {
          case "Destructure": {
            const pattern = branch.pattern.pattern.trim().length > 0 ? `
    const ${branch.pattern.pattern} = ${predicate};` : "";
            return `case "${branch.pattern.constructor}": {${pattern}${maybeLetBody}
${returnWrapper}${body};
}`;
          }
          case "StringValue": {
            return `case "${branch.pattern.body}": {${maybeLetBody}
${returnWrapper}${body};
}`;
          }
          case "FormatStringValue": {
            return `case \`${branch.pattern.body}\`: {${maybeLetBody}
${returnWrapper}${body};
}`;
          }
          case "EmptyList": {
            return `case 0: {${maybeLetBody}
${returnWrapper}${body};
}`;
          }
          case "ListDestructure": {
            const length = branch.pattern.parts.length;
            const isFinalEmptyList = branch.pattern.parts[length - 1].kind === "EmptyList";
            const partsWithLength = common_1.destructureLength(branch.pattern);
            const hasGaps = common_1.patternHasGaps(branch.pattern);
            const gapPositions = common_1.patternGapPositions(branch.pattern);
            const isOnlyFinalGap = gapPositions.length === 1 && gapPositions[0] === branch.pattern.parts.length - 1;
            const conditional = isFinalEmptyList && !hasGaps ? `${predicate}.length === ${partsWithLength}` : `${predicate}.length >= ${partsWithLength}`;
            const firstPart = branch.pattern.parts[0];
            const isFirstDestructor = firstPart.kind === "Destructure";
            if (hasGaps && !isOnlyFinalGap) {
              return generateListDestructureWithGaps(predicate, branch, branch.pattern);
            } else if (isFirstDestructor) {
              const destructors = branch.pattern.parts.filter((t) => t.kind === "Destructure");
              const destructorParts = destructors.map((_, i) => `_${i}`);
              const generatedParts2 = [
                ...destructorParts,
                ...branch.pattern.parts.slice(destructorParts.length, -1).map(common_to_ecma_1.generateListDestructurePart)
              ];
              const parts2 = isFinalEmptyList ? generatedParts2.join(", ") : generatedParts2.join(", ") + ", ..." + common_to_ecma_1.generateListDestructurePart(branch.pattern.parts[length - 1]);
              const conditionals = destructors.map((destructor, i) => {
                return `_${i}.kind === "${destructor.constructor}"`;
              });
              const joinedConditionals = conditionals.join(" && ");
              const unpacked = destructors.map((destructor, i) => {
                return destructor.pattern.length > 0 ? `
            const ${destructor.pattern} = _${i};` : "";
              });
              const joinedUnpacked = unpacked.length === 0 ? "" : unpacked.join("");
              return `case ${predicate}.length: {
    if (${conditional}) {
        const [ ${parts2} ] = ${predicate};
        if (${joinedConditionals}) {${joinedUnpacked}${maybeLetBody ? common_1.prefixLines(maybeLetBody, 8) : ""}
        ${returnWrapper}${body};
        }
    }
}`;
            }
            const isFirstValue = firstPart.kind === "StringValue" || firstPart.kind === "FormatStringValue";
            const partsToGenerate = isFirstValue ? [types_1.Value("_temp"), ...branch.pattern.parts.slice(1, -1)] : branch.pattern.parts.slice(0, -1);
            const generatedParts = partsToGenerate.map(common_to_ecma_1.generateListDestructurePart);
            const parts = isFinalEmptyList ? generatedParts.join(", ") : generatedParts.join(", ") + ", ..." + common_to_ecma_1.generateListDestructurePart(branch.pattern.parts[length - 1]);
            if (isFirstValue) {
              const typeCheckedFirstPart = firstPart;
              const tempConditional = typeCheckedFirstPart.kind === "StringValue" ? `"${typeCheckedFirstPart.body}"` : `\`${typeCheckedFirstPart.body}\``;
              return `case ${predicate}.length: {
    if (${conditional}) {
        const [ ${parts} ] = ${predicate};${maybeLetBody ? common_1.prefixLines(maybeLetBody, 4) : ""}
        if (_temp === ${tempConditional}) {
        ${returnWrapper}${body};
        }
    }
}`;
            } else {
              return `case ${predicate}.length: {
    if (${conditional}) {
        const [ ${parts} ] = ${predicate};${maybeLetBody ? common_1.prefixLines(maybeLetBody, 4) : ""}
    ${returnWrapper}${body};
    }
}`;
            }
          }
          case "Default": {
            return `default: {${maybeLetBody}
${returnWrapper}${body};
}`;
          }
        }
      }
      function generateCaseStatement(caseStatement, parentTypeArguments) {
        const predicate = generateExpression(caseStatement.predicate);
        const name = `_res${utils_1.hashCode(predicate)}`;
        const branches = caseStatement.branches.map((branch) => generateBranch(name, branch, parentTypeArguments || []));
        const isString = caseStatement.branches.filter((branch) => branch.pattern.kind === "StringValue").length > 0;
        if (isString) {
          return `
const ${name} = ${predicate};
switch (${name}) {
${common_1.prefixLines(branches.join("\n"), 4)}
}`.trim();
        }
        const isList = caseStatement.branches.filter((branch) => branch.pattern.kind === "EmptyList" || branch.pattern.kind === "ListDestructure").length > 0;
        if (isList) {
          return `
const ${name} = ${predicate};
switch (${name}.length) {
${common_1.prefixLines(branches.join("\n"), 4)}
}`.trim();
        }
        return `
const ${name} = ${predicate};
switch (${name}.kind) {
${common_1.prefixLines(branches.join("\n"), 4)}
}`.trim();
      }
      function getGenericTypesFromFunctionType(type_) {
        return type_.args.filter((arg) => arg.kind === "GenericType");
      }
      function generateTopLevelType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return generateType(type_);
          }
          case "FixedType": {
            if (type_.name === "List") {
              if (type_.args[0] && type_.args[0].kind === "GenericType") {
                return generateTopLevelType(type_.args[0]) + "[]";
              }
              const fixedArgs = type_.args.filter((type_2) => type_2.kind === "FixedType");
              if (fixedArgs.length === 0) {
                return "any[]";
              } else if (fixedArgs.length === 1) {
                return `${generateTopLevelType(fixedArgs[0])}[]`;
              }
              return `(${fixedArgs.map(generateTopLevelType).join(" | ")})[]`;
            }
            if (type_.args.length > 0 && type_.args[0].kind === "FixedType" && type_.args[0].args.length > 0) {
              return `${type_.name}<${type_.args.map(generateTopLevelType).join(", ")}>`;
            }
            const args = [];
            for (const arg of type_.args) {
              if (arg.kind === "GenericType" || arg.kind === "FixedType") {
                args.push(arg);
              } else {
                for (const generic of getGenericTypesFromFunctionType(arg)) {
                  args.push(generic);
                }
              }
            }
            if (args.length === 0) {
              return type_.name;
            }
            return `${type_.name}<${args.map(generateType).join(", ")}>`;
          }
          case "FunctionType": {
            const parts = [];
            let index = 0;
            for (const typePart of type_.args.slice(0, -1)) {
              parts.push(`arg${index}: ${generateTopLevelType(typePart)}`);
              index++;
            }
            return "(" + parts.join(", ") + ") => " + generateType(type_.args[type_.args.length - 1]);
          }
        }
      }
      function generateType(type_) {
        switch (type_.kind) {
          case "GenericType": {
            return type_.name;
          }
          case "FixedType": {
            if (type_.name === "List") {
              if (type_.args[0] && type_.args[0].kind === "GenericType") {
                return generateType(type_.args[0]) + "[]";
              }
              const fixedArgs = type_.args.filter((type_2) => type_2.kind === "FixedType");
              if (fixedArgs.length === 0) {
                return "any[]";
              } else if (fixedArgs.length === 1) {
                return `${generateType(fixedArgs[0])}[]`;
              }
              return `(${fixedArgs.map(generateType).join(" | ")})[]`;
            }
            const args = [];
            for (const arg of type_.args) {
              if (arg.kind === "GenericType") {
                args.push(arg);
              } else if (arg.kind === "FunctionType") {
                for (const generic of getGenericTypesFromFunctionType(arg)) {
                  args.push(generic);
                }
              }
            }
            if (args.length === 0) {
              return type_.name;
            }
            return `${type_.name}<${args.map(generateType).join(", ")}>`;
          }
          case "FunctionType": {
            const parts = [];
            let index = 0;
            for (const typePart of type_.args.slice(0, -1)) {
              parts.push(`arg${index}: ${generateType(typePart)}`);
              index++;
            }
            return "(" + parts.join(", ") + ") => " + generateType(type_.args[type_.args.length - 1]);
          }
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
      function generateLeftPipe(leftPipe) {
        return generateExpression(common_to_ecma_1.flattenLeftPipe(leftPipe));
      }
      function generateRightPipe(rightPipe) {
        const left = generateExpression(rightPipe.left);
        const right = generateExpression(rightPipe.right);
        return `${left}(${right})`;
      }
      function generateModuleReference(moduleReference) {
        if (moduleReference.path.length === 0) {
          const right2 = generateExpression(moduleReference.value);
          return `(arg0) => arg0.${right2}`;
        }
        const left = moduleReference.path.join(".");
        const right = generateExpression(moduleReference.value);
        return `${left}.${right}`;
      }
      function generateFunctionCall(functionCall, parentTypeArguments, parentTypes) {
        const right = functionCall.args.map((item) => generateExpression(item)).join(", ");
        return `${functionCall.name}(${right})`;
      }
      function generateLambda(lambda) {
        const args = lambda.args.map((arg) => `${arg}: any`).join(", ");
        const isSimple = types_1.isSimpleValue(lambda.body.kind);
        const body = common_1.prefixLines(generateExpression(lambda.body), isSimple ? 0 : 4);
        if (isSimple) {
          return `
function(${args}) {
    return ${body};
}
`.trim();
        }
        return `
function(${args}) {
${body}
}
`.trim();
      }
      function generateLambdaCall(lambdaCall) {
        const args = lambdaCall.lambda.args.map((arg) => `${arg}: any`).join(", ");
        const argsValues = lambdaCall.args.map((item) => generateExpression(item)).join(", ");
        const body = generateExpression(lambdaCall.lambda.body);
        return `
(function(${args}) {
    return ${body};
})(${argsValues})
`.trim();
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
          case "Value":
            return common_to_ecma_1.generateValue(expression);
          case "StringValue":
            return common_to_ecma_1.generateStringValue(expression);
          case "FormatStringValue":
            return common_to_ecma_1.generateFormatStringValue(expression);
          case "ListValue":
            return generateListValue(expression);
          case "ListRange":
            return common_to_ecma_1.generateListRange(expression);
          case "ObjectLiteral":
            return generateObjectLiteral(expression);
          case "IfStatement":
            return generateIfStatement(expression, parentTypeArguments || []);
          case "CaseStatement":
            return generateCaseStatement(expression, parentTypeArguments || []);
          case "Addition":
            return generateAddition(expression);
          case "Subtraction":
            return generateSubtraction(expression);
          case "Multiplication":
            return generateMultiplication(expression);
          case "Division":
            return generateDivision(expression);
          case "And":
            return generateAnd(expression);
          case "Or":
            return generateOr(expression);
          case "ListPrepend":
            return generateListPrepend(expression);
          case "LeftPipe":
            return generateLeftPipe(expression);
          case "RightPipe":
            return generateRightPipe(expression);
          case "ModuleReference":
            return generateModuleReference(expression);
          case "FunctionCall":
            return generateFunctionCall(expression, parentTypeArguments || [], parentTypes || []);
          case "Lambda":
            return generateLambda(expression);
          case "LambdaCall":
            return generateLambdaCall(expression);
          case "Constructor":
            return generateConstructor(expression);
          case "Equality":
            return generateEquality(expression);
          case "InEquality":
            return generateInEquality(expression);
          case "LessThan":
            return generateLessThan(expression);
          case "LessThanOrEqual":
            return generateLessThanOrEqual(expression);
          case "GreaterThan":
            return generateGreaterThan(expression);
          case "GreaterThanOrEqual":
            return generateGreaterThanOrEqual(expression);
        }
      }
      function collectTypeArguments(type_) {
        switch (type_.kind) {
          case "GenericType":
            if (builtins_1.isBuiltinType(type_.name))
              return [];
            return [type_.name];
          case "FixedType": {
            if (builtins_1.isBuiltinType(type_.name)) {
              return [];
            }
          }
          case "FunctionType": {
            const args = type_.args.map(collectTypeArguments);
            return [].concat(...args);
          }
        }
      }
      function generateFunction(function_, parentTypeArguments, parentTypes) {
        const functionArguments = function_.args.map((arg) => {
          switch (arg.kind) {
            case "FunctionArg":
              return arg.name + ": " + generateTopLevelType(arg.type);
            case "AnonFunctionArg":
              return "_" + arg.index + ": " + generateTopLevelType(arg.type);
          }
        }).join(", ");
        const typeArguments = [].concat(...function_.args.map((arg) => collectTypeArguments(arg.type)), collectTypeArguments(function_.returnType)).filter((value, index, arr) => arr.indexOf(value) === index && parentTypeArguments.indexOf(value) === -1);
        const maybeLetBody = function_.letBody.length > 0 ? "\n" + common_1.prefixLines(function_.letBody.map((block) => generateBlock(block, [
          ...typeArguments,
          ...parentTypeArguments
        ])).join("\n"), 4) : "";
        const returnType = generateTopLevelType(function_.returnType);
        const isSimpleBody = types_1.isSimpleValue(function_.body.kind);
        const bodyPrefix = isSimpleBody ? "return " : "";
        const bodySuffix = isSimpleBody ? ";" : "";
        const body = bodyPrefix + generateExpression(function_.body, [...typeArguments, ...parentTypeArguments], [...parentTypes, function_.returnType]) + bodySuffix;
        const prefixedBody = common_1.prefixLines(body, 4);
        const typeArgumentsString = typeArguments.length === 0 ? "" : `<${typeArguments.join(", ")}>`;
        return `
function ${function_.name}${typeArgumentsString}(${functionArguments}): ${returnType} {${maybeLetBody}
${prefixedBody}
}`.trim();
      }
      function generateInlineIf(expression) {
        const ifBody = expression.ifBody.kind === "IfStatement" ? "( " + generateInlineIf(expression.ifBody) + " )" : generateExpression(expression.ifBody);
        const elseBody = expression.elseBody.kind === "IfStatement" ? "( " + generateInlineIf(expression.elseBody) + " )" : generateExpression(expression.elseBody);
        return `${generateExpression(expression.predicate)} ? ${ifBody} : ${elseBody}`;
      }
      function generateInlineCase(expression) {
        return `(function (): any {
${common_1.prefixLines(generateExpression(expression), 4)}
})()`;
      }
      function generateConst(constDef) {
        let body = "";
        switch (constDef.value.kind) {
          case "IfStatement": {
            body = generateInlineIf(constDef.value);
            break;
          }
          case "CaseStatement": {
            body = generateInlineCase(constDef.value);
            break;
          }
          default: {
            body = generateExpression(constDef.value);
            break;
          }
        }
        const typeDef = generateTopLevelType(constDef.type);
        return `
const ${constDef.name}: ${typeDef} = ${body};
`.trim();
      }
      function generateBlock(syntax, parentTypeArguments, parentTypes) {
        switch (syntax.kind) {
          case "Import":
            return common_to_ecma_1.generateImportBlock(syntax);
          case "Export":
            return common_to_ecma_1.generateExportBlock(syntax);
          case "UnionType":
            return generateUnionType(syntax);
          case "TypeAlias":
            return generateTypeAlias(syntax);
          case "Function":
            return generateFunction(syntax, parentTypeArguments || [], parentTypes || []);
          case "Const":
            return generateConst(syntax);
          case "Comment":
          case "MultilineComment":
            return "";
        }
      }
      function generateTypescript2(module2) {
        return [blocks_1.exportTests(module2), ...module2.body].map((block) => generateBlock(block)).filter((line) => line.length > 0).join("\n\n");
      }
      exports.generateTypescript = generateTypescript2;
    }
  });

  // node_modules/derw/build/collisions.js
  var require_collisions = __commonJS({
    "node_modules/derw/build/collisions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.collisions = void 0;
      function Collision(name, indexes) {
        return {
          kind: "Collision",
          indexes,
          name
        };
      }
      function collisions(blocks) {
        let collisionsFound = [];
        let seenNames = {};
        let seenModules = {};
        blocks.forEach((block, i) => {
          function incrementTimesSeen(name2) {
            if (Object.keys(seenNames).indexOf(name2) === -1) {
              seenNames[name2] = [i];
            } else {
              seenNames[name2].push(i);
            }
          }
          function incrementTimesSeenModules(name2) {
            if (Object.keys(seenModules).indexOf(name2) === -1) {
              seenModules[name2] = [i];
            } else {
              seenModules[name2].push(i);
            }
          }
          let name;
          switch (block.kind) {
            case "Comment":
            case "MultilineComment":
            case "Export": {
              return;
            }
            case "Import": {
              for (const module2 of block.modules) {
                for (const exposed of module2.exposing) {
                  incrementTimesSeen(exposed);
                }
                if (module2.alias.kind === "just") {
                  incrementTimesSeenModules(module2.alias.value);
                } else {
                  incrementTimesSeenModules(module2.name);
                }
              }
              return;
            }
            case "Function":
            case "Const": {
              name = block.name;
              break;
            }
            case "UnionType":
            case "TypeAlias": {
              name = block.type.name;
              break;
            }
          }
          incrementTimesSeen(name);
        });
        for (const name of Object.keys(seenNames)) {
          const indexes = seenNames[name];
          if (indexes.length === 1)
            continue;
          collisionsFound.push(Collision(name, indexes));
        }
        for (const name of Object.keys(seenModules)) {
          const indexes = seenModules[name];
          if (indexes.length === 1)
            continue;
          collisionsFound.push(Collision(name, indexes));
        }
        return collisionsFound;
      }
      exports.collisions = collisions;
    }
  });

  // node_modules/derw/build/tokens.js
  var require_tokens = __commonJS({
    "node_modules/derw/build/tokens.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.nextNonWhitespace = exports.rootTypeTokensToString = exports.tokenizeType = exports.FunctionTypeToken = exports.BaseTypeToken = exports.tokensToString = exports.tokenize = exports.WhitespaceToken = exports.OperatorToken = exports.PipeToken = exports.CloseBracketToken = exports.OpenBracketToken = exports.CloseCurlyBracesToken = exports.OpenCurlyBracesToken = exports.CommaToken = exports.AssignToken = exports.MultilineCommentToken = exports.CommentToken = exports.ArrowToken = exports.ColonToken = exports.LiteralToken = exports.IdentifierToken = exports.KeywordToken = exports.FormatStringToken = exports.StringToken = void 0;
      var result_1 = require_result();
      function Empty() {
        return {
          kind: "Empty"
        };
      }
      function InString() {
        return {
          kind: "InString"
        };
      }
      function InFormatString() {
        return {
          kind: "InFormatString"
        };
      }
      function InBracket(depth) {
        return {
          kind: "InBracket",
          depth
        };
      }
      function InSquareBracket(depth) {
        return {
          kind: "InSquareBracket",
          depth
        };
      }
      function InWhitespace() {
        return {
          kind: "InWhitespace"
        };
      }
      function Keyword() {
        return {
          kind: "Keyword"
        };
      }
      var keywords = [
        "if",
        "then",
        "else",
        "type",
        "alias",
        "import",
        "exposing",
        "as",
        "let",
        "in",
        "case",
        "of"
      ];
      function StringToken(body) {
        return {
          kind: "StringToken",
          body
        };
      }
      exports.StringToken = StringToken;
      function FormatStringToken(body) {
        return {
          kind: "FormatStringToken",
          body
        };
      }
      exports.FormatStringToken = FormatStringToken;
      function KeywordToken(body) {
        return {
          kind: "KeywordToken",
          body
        };
      }
      exports.KeywordToken = KeywordToken;
      function IdentifierToken(body) {
        return {
          kind: "IdentifierToken",
          body
        };
      }
      exports.IdentifierToken = IdentifierToken;
      function LiteralToken(body) {
        return {
          kind: "LiteralToken",
          body
        };
      }
      exports.LiteralToken = LiteralToken;
      function isLiteral(body) {
        if (body === "true" || body === "false") {
          return true;
        } else if (!isNaN(parseFloat(body))) {
          return true;
        }
        return false;
      }
      function ColonToken() {
        return {
          kind: "ColonToken"
        };
      }
      exports.ColonToken = ColonToken;
      function ArrowToken() {
        return {
          kind: "ArrowToken"
        };
      }
      exports.ArrowToken = ArrowToken;
      function CommentToken() {
        return {
          kind: "CommentToken"
        };
      }
      exports.CommentToken = CommentToken;
      function MultilineCommentToken(body) {
        return {
          kind: "MultilineCommentToken",
          body
        };
      }
      exports.MultilineCommentToken = MultilineCommentToken;
      function AssignToken() {
        return {
          kind: "AssignToken"
        };
      }
      exports.AssignToken = AssignToken;
      function CommaToken() {
        return {
          kind: "CommaToken"
        };
      }
      exports.CommaToken = CommaToken;
      function OpenCurlyBracesToken() {
        return {
          kind: "OpenCurlyBracesToken"
        };
      }
      exports.OpenCurlyBracesToken = OpenCurlyBracesToken;
      function CloseCurlyBracesToken() {
        return {
          kind: "CloseCurlyBracesToken"
        };
      }
      exports.CloseCurlyBracesToken = CloseCurlyBracesToken;
      function OpenBracketToken() {
        return {
          kind: "OpenBracketToken"
        };
      }
      exports.OpenBracketToken = OpenBracketToken;
      function CloseBracketToken() {
        return {
          kind: "CloseBracketToken"
        };
      }
      exports.CloseBracketToken = CloseBracketToken;
      function PipeToken() {
        return {
          kind: "PipeToken"
        };
      }
      exports.PipeToken = PipeToken;
      function OperatorToken(body) {
        return {
          kind: "OperatorToken",
          body
        };
      }
      exports.OperatorToken = OperatorToken;
      function isOperator(body) {
        return [
          "<",
          "<=",
          ">",
          ">=",
          "==",
          "!=",
          "-",
          "+",
          "*",
          "/",
          "|>",
          "<|",
          "&&",
          "||",
          "\\"
        ].indexOf(body) > -1;
      }
      function WhitespaceToken(body) {
        return {
          kind: "WhitespaceToken",
          body
        };
      }
      exports.WhitespaceToken = WhitespaceToken;
      function checkKeywordToken(currentToken, tokens) {
        if (currentToken === "=") {
          tokens.push(AssignToken());
        } else if (currentToken === "{") {
          tokens.push(OpenCurlyBracesToken());
        } else if (currentToken === "}") {
          tokens.push(CloseCurlyBracesToken());
        } else if (currentToken === "{}") {
          tokens.push(OpenCurlyBracesToken());
          tokens.push(CloseCurlyBracesToken());
        } else if (keywords.indexOf(currentToken) > -1) {
          tokens.push(KeywordToken(currentToken));
        } else if (currentToken === "--") {
          tokens.push(CommentToken());
        } else if (currentToken === "{-" || currentToken === "-}") {
          tokens.push(MultilineCommentToken(currentToken));
        } else if (isLiteral(currentToken)) {
          tokens.push(LiteralToken(currentToken));
        } else if (isOperator(currentToken)) {
          tokens.push(OperatorToken(currentToken));
        } else {
          tokens.push(IdentifierToken(currentToken));
        }
      }
      function tokenize(body) {
        let state = Empty();
        let currentToken = "";
        let tokens = [];
        for (var i = 0; i < body.length; i++) {
          const char = body[i];
          const previousChar = i > 0 ? body[i - 1] : null;
          const isLast = i === body.length - 1;
          switch (state.kind) {
            case "InWhitespace":
            case "Empty": {
              if (char !== " " && char !== "\n" && currentToken.length > 0) {
                tokens.push(WhitespaceToken(currentToken));
                currentToken = "";
                state = Empty();
              }
              switch (char) {
                case '"': {
                  state = InString();
                  currentToken += char;
                  break;
                }
                case "`": {
                  state = InFormatString();
                  currentToken += char;
                  break;
                }
                case "(": {
                  state = InBracket(0);
                  tokens.push(OpenBracketToken());
                  break;
                }
                case ")": {
                  state = Empty();
                  tokens.push(CloseBracketToken());
                  break;
                }
                case "[": {
                  state = InSquareBracket(0);
                  currentToken += char;
                  break;
                }
                case "\n":
                case " ": {
                  state = InWhitespace();
                  currentToken += char;
                  break;
                }
                case ":": {
                  if (body[i + 1] === ":") {
                    tokens.push(OperatorToken("::"));
                    i++;
                  } else {
                    tokens.push(ColonToken());
                  }
                  break;
                }
                case "-": {
                  if (body[i + 1] === ">") {
                    break;
                  }
                  state = Keyword();
                  currentToken += char;
                  break;
                }
                case ">": {
                  if (previousChar === "-") {
                    tokens.push(ArrowToken());
                    currentToken = "";
                    break;
                  } else if (previousChar === "|") {
                    tokens.push(OperatorToken("|>"));
                    currentToken = "";
                    break;
                  }
                  state = Keyword();
                  currentToken += char;
                  break;
                }
                case ",": {
                  tokens.push(CommaToken());
                  currentToken = "";
                  break;
                }
                case "|": {
                  if (body[i + 1] === ">" || body[i + 1] === "|") {
                    break;
                  } else if (previousChar === "|") {
                    tokens.push(OperatorToken("||"));
                    currentToken = "";
                    break;
                  }
                  tokens.push(PipeToken());
                  currentToken = "";
                  break;
                }
                case "\\": {
                  tokens.push(OperatorToken("\\"));
                  currentToken = "";
                  break;
                }
                case "{": {
                  if (body[i + 1] === "-") {
                    currentToken += "{";
                    state = Keyword();
                    break;
                  }
                  tokens.push(OpenCurlyBracesToken());
                  currentToken = "";
                  break;
                }
                case "}": {
                  tokens.push(CloseCurlyBracesToken());
                  currentToken = "";
                  break;
                }
                default: {
                  state = Keyword();
                  currentToken += char;
                  if (isLast) {
                    checkKeywordToken(currentToken, tokens);
                  }
                  break;
                }
              }
              break;
            }
            case "InString": {
              currentToken += char;
              if (char === '"') {
                if (previousChar !== "\\") {
                  state = Empty();
                  tokens.push(StringToken(currentToken));
                  currentToken = "";
                }
              }
              break;
            }
            case "InFormatString": {
              currentToken += char;
              if (char === "`") {
                if (previousChar !== "\\") {
                  state = Empty();
                  tokens.push(FormatStringToken(currentToken));
                  currentToken = "";
                }
              }
              break;
            }
            case "InBracket": {
              if (char === ")") {
                if (state.depth === 0) {
                  state = Empty();
                  tokenize(currentToken).forEach((token) => {
                    tokens.push(token);
                  });
                  tokens.push(CloseBracketToken());
                  currentToken = "";
                  break;
                } else {
                  state.depth--;
                }
              } else if (char === "(") {
                state.depth++;
              }
              currentToken += char;
              break;
            }
            case "InSquareBracket": {
              if (char === "]") {
                if (state.depth === 0) {
                  state = Empty();
                  currentToken += char;
                  tokens.push(LiteralToken(currentToken));
                  currentToken = "";
                  break;
                } else {
                  state.depth--;
                }
              } else if (char === "[") {
                state.depth++;
              }
              currentToken += char;
              break;
            }
            case "Keyword": {
              const isWhitespace = char === "\n" || char === " ";
              if (isWhitespace || isLast) {
                if (char === ")") {
                  checkKeywordToken(currentToken, tokens);
                  tokens.push(CloseBracketToken());
                  currentToken = "";
                  state = Empty();
                  break;
                }
                if (isLast && !isWhitespace) {
                  currentToken += char;
                }
                checkKeywordToken(currentToken, tokens);
                currentToken = "";
                state = Empty();
                if (isWhitespace) {
                  if (!isLast) {
                    currentToken += char;
                  } else {
                    tokens.push(WhitespaceToken(char));
                  }
                }
                break;
              } else if (char === ":") {
                if (body[i + 1] === ":") {
                  tokens.push(IdentifierToken(currentToken));
                  tokens.push(OperatorToken("::"));
                  i++;
                  currentToken = "";
                  state = Empty();
                } else {
                  tokens.push(IdentifierToken(currentToken));
                  tokens.push(ColonToken());
                  currentToken = "";
                  state = Empty();
                }
                break;
              } else if (char === ",") {
                tokens.push(IdentifierToken(currentToken));
                tokens.push(CommaToken());
                currentToken = "";
                state = Empty();
                break;
              } else if (char === "(") {
                checkKeywordToken(currentToken, tokens);
                tokens.push(OpenBracketToken());
                currentToken = "";
                state = Empty();
                break;
              } else if (char === ")") {
                tokens.push(IdentifierToken(currentToken));
                tokens.push(CloseBracketToken());
                currentToken = "";
                state = Empty();
                break;
              }
              currentToken += char;
            }
          }
        }
        return tokens;
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
            return token.body;
          }
          case "IdentifierToken": {
            return token.body;
          }
          case "MultilineCommentToken": {
            return token.body;
          }
          case "KeywordToken": {
            return token.body;
          }
          case "LiteralToken": {
            return token.body;
          }
          case "OpenBracketToken": {
            return "(";
          }
          case "OpenCurlyBracesToken": {
            return "{";
          }
          case "OperatorToken": {
            return token.body;
          }
          case "PipeToken": {
            return "|";
          }
          case "StringToken": {
            return token.body;
          }
          case "WhitespaceToken": {
            return token.body;
          }
        }
      }
      function tokensToString(tokens) {
        return tokens.map(tokenToString).join("");
      }
      exports.tokensToString = tokensToString;
      function BaseTypeToken(body) {
        return {
          kind: "BaseTypeToken",
          body
        };
      }
      exports.BaseTypeToken = BaseTypeToken;
      function FunctionTypeToken(body) {
        return {
          kind: "FunctionTypeToken",
          body
        };
      }
      exports.FunctionTypeToken = FunctionTypeToken;
      function tokenizeType(tokens) {
        let rootTypeTokens = [];
        let currentBuffer = [];
        let indent = 0;
        for (const token of tokens) {
          switch (token.kind) {
            case "OpenBracketToken": {
              if (indent > 0 || currentBuffer.length > 0)
                currentBuffer.push(token);
              indent++;
              break;
            }
            case "CloseBracketToken": {
              if (indent > 0)
                currentBuffer.push(token);
              indent--;
              break;
            }
            case "ArrowToken": {
              if (indent === 0) {
                const isFunction = currentBuffer.find((t) => t.kind === "ArrowToken");
                const tokenized = tokenizeType(currentBuffer);
                if (tokenized.kind === "err")
                  return tokenized;
                if (isFunction) {
                  rootTypeTokens.push(FunctionTypeToken(tokenized.value));
                } else {
                  for (const t of tokenized.value) {
                    rootTypeTokens.push(t);
                  }
                }
                currentBuffer = [];
              } else {
                currentBuffer.push(token);
              }
              break;
            }
            case "IdentifierToken": {
              currentBuffer.push(token);
              break;
            }
            default:
              continue;
          }
        }
        if (currentBuffer.length === 0)
          return result_1.Ok(rootTypeTokens);
        if (currentBuffer.find((t) => t.kind === "OpenBracketToken")) {
          const isFunction = currentBuffer.find((t) => t.kind === "ArrowToken");
          let tokenized = result_1.Ok([]);
          if (currentBuffer[0].kind === "IdentifierToken" && !isFunction) {
            let depth = 0;
            let inner = [];
            let collectedInners = [];
            for (const t of currentBuffer.slice(1)) {
              switch (t.kind) {
                case "OpenBracketToken": {
                  if (depth > 0)
                    inner.push(t);
                  depth++;
                  break;
                }
                case "CloseBracketToken": {
                  if (depth > 1)
                    inner.push(t);
                  depth--;
                  if (depth === 0) {
                    const innerTokenized = tokenizeType(inner);
                    if (innerTokenized.kind === "err")
                      return innerTokenized;
                    collectedInners.push(innerTokenized.value);
                    inner = [];
                  }
                  break;
                }
                case "IdentifierToken": {
                  if (depth === 0) {
                    const tokenized2 = tokenizeType(tokenize(t.body));
                    if (tokenized2.kind === "err")
                      return tokenized2;
                    collectedInners.push(tokenized2.value);
                  } else {
                    inner.push(t);
                  }
                  break;
                }
                case "ArrowToken": {
                  if (depth === 0) {
                  } else {
                    inner.push(t);
                  }
                }
              }
              let flattened = [];
              for (const collected of collectedInners) {
                flattened = flattened.concat(collected);
              }
              tokenized = result_1.Ok([
                BaseTypeToken([currentBuffer[0], ...flattened])
              ]);
            }
          } else {
            tokenized = tokenizeType(currentBuffer);
          }
          if (tokenized.kind === "err")
            return tokenized;
          if (isFunction) {
            rootTypeTokens.push(FunctionTypeToken(tokenized.value));
          } else {
            for (const t of tokenized.value) {
              rootTypeTokens.push(t);
            }
          }
        } else if (currentBuffer.find((t) => t.kind === "ArrowToken")) {
          const tokenized = tokenizeType(currentBuffer);
          if (tokenized.kind === "err")
            return tokenized;
          rootTypeTokens.push(FunctionTypeToken(tokenized.value));
        } else {
          let inner = [];
          if (currentBuffer.length > 1) {
            for (const bufferPart of currentBuffer.slice(1)) {
              const tokenized = tokenizeType([bufferPart]);
              if (tokenized.kind === "err")
                return tokenized;
              inner = inner.concat(tokenized.value);
            }
          }
          rootTypeTokens.push(BaseTypeToken([currentBuffer[0], ...inner]));
        }
        return result_1.Ok(rootTypeTokens);
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
        }
      }
      function isNested(token) {
        switch (token.kind) {
          case "BaseTypeToken": {
            if (token.body.length === 1)
              return false;
            return true;
          }
          case "FunctionTypeToken": {
            return true;
          }
        }
      }
      function rootTypeTokensToString(tokens) {
        const output = [];
        let index = 0;
        for (const token of tokens) {
          switch (token.kind) {
            case "BaseTypeToken": {
              token.body.forEach((value) => {
                if (value.kind === "BaseTypeToken") {
                  if (isNested(value)) {
                    output.push(typeTokenToString(OpenBracketToken()));
                  }
                  value.body.forEach((v) => output.push(typeTokenToString(v)));
                  if (isNested(value)) {
                    output.push(typeTokenToString(CloseBracketToken()));
                  }
                } else {
                  output.push(typeTokenToString(value));
                }
              });
              break;
            }
            case "FunctionTypeToken": {
              output.push(typeTokenToString(OpenBracketToken()));
              token.body.forEach((value, i) => {
                output.push(typeTokenToString(value));
                if (i < token.body.length - 1) {
                  output.push(typeTokenToString(ArrowToken()));
                }
              });
              output.push(typeTokenToString(CloseBracketToken()));
              break;
            }
          }
          if (index < tokens.length - 1) {
            output.push(typeTokenToString(ArrowToken()));
          }
          index++;
        }
        return output.join(" ");
      }
      exports.rootTypeTokensToString = rootTypeTokensToString;
      function nextNonWhitespace(tokens) {
        for (const token of tokens) {
          if (token.kind !== "WhitespaceToken")
            return token;
        }
        return null;
      }
      exports.nextNonWhitespace = nextNonWhitespace;
    }
  });

  // node_modules/derw/build/type_checking.js
  var require_type_checking = __commonJS({
    "node_modules/derw/build/type_checking.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.validateType = exports.inferType = exports.isSameType = void 0;
      var result_1 = require_result();
      var builtins_1 = require_builtins();
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
      function isSameType(first, second, topLevel) {
        if (first.kind !== "FunctionType" && first.name === "any" || second.kind !== "FunctionType" && second.name === "any")
          return true;
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
            return isSameFixedType(first, second, topLevel);
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
      function inferValue(value) {
        if (parseInt(value.body, 10)) {
          return types_1.FixedType("number", []);
        }
        return types_1.FixedType("any", []);
      }
      function inferStringValue(value) {
        return types_1.FixedType("string", []);
      }
      function inferFormatStringValue(value) {
        return types_1.FixedType("string", []);
      }
      function reduceTypes(types) {
        return types.reduce((uniques, type) => {
          if (uniques.filter((unique) => isSameType(unique, type, false)).length === 0) {
            uniques.push(type);
          }
          return uniques;
        }, []);
      }
      function inferListValue(value, typedBlocks) {
        if (value.items.length === 0)
          return result_1.Ok(types_1.FixedType("List", [types_1.FixedType("any", [])]));
        let types = [];
        for (const item of value.items) {
          const inferred = inferType(item, typedBlocks);
          if (inferred.kind === "err")
            return inferred;
          types.push(inferred.value);
        }
        const uniqueTypes = reduceTypes(types);
        return result_1.Ok(types_1.FixedType("List", uniqueTypes));
      }
      function inferListRange(value) {
        return types_1.FixedType("List", [types_1.FixedType("number", [])]);
      }
      function inferObjectLiteral(value, typedBlocks) {
        const typeAlias = types_1.TypeAlias(types_1.FixedType("Inferred", []), value.fields.map((field) => {
          const inferred = inferType(field.value, typedBlocks);
          if (inferred.kind === "err") {
            return types_1.Property(field.name, types_1.GenericType("any"));
          }
          return types_1.Property(field.name, inferred.value);
        }));
        for (const block of typedBlocks) {
          if (block.kind != "TypeAlias" || block.properties.length !== typeAlias.properties.length) {
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
            return result_1.Ok(block.type);
          }
        }
        return result_1.Ok(types_1.FixedType("any", []));
      }
      function inferIfStatement(value, typedBlocks) {
        const ifBranch = inferType(value.ifBody, typedBlocks);
        const elseBranch = inferType(value.elseBody, typedBlocks);
        if (ifBranch.kind === "err")
          return ifBranch;
        if (elseBranch.kind === "err")
          return elseBranch;
        if (isSameType(ifBranch.value, elseBranch.value, false))
          return result_1.Ok(ifBranch.value);
        return result_1.Err(`Conflicting types: ${typeToString(ifBranch.value)}, ${typeToString(elseBranch.value)}`);
      }
      function inferBranch(value, typedBlocks) {
        return inferType(value.body, typedBlocks);
      }
      function inferCaseStatement(value, typedBlocks) {
        const typesToReduce = [];
        for (const branch of value.branches) {
          const inf = inferBranch(branch, typedBlocks);
          if (inf.kind === "err")
            return inf;
          typesToReduce.push(inf.value);
        }
        const branches = reduceTypes(typesToReduce);
        if (branches.length === 1)
          return result_1.Ok(branches[0]);
        return result_1.Err(`Conflicting types: ${branches.map(typeToString).join(", ")}`);
      }
      function inferAddition(value, typedBlocks) {
        const left = inferType(value.left, typedBlocks);
        const right = inferType(value.right, typedBlocks);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        if (!isSameType(left.value, right.value, false))
          return result_1.Err(`Mismatching types between ${typeToString(left.value)} and ${typeToString(right.value)}`);
        return left;
      }
      function inferSubtraction(value, typedBlocks) {
        const left = inferType(value.left, typedBlocks);
        const right = inferType(value.right, typedBlocks);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        if (!isSameType(left.value, right.value, false))
          return result_1.Err(`Mismatching types between ${typeToString(left.value)} and ${typeToString(right.value)}`);
        return left;
      }
      function inferMultiplication(value, typedBlocks) {
        const left = inferType(value.left, typedBlocks);
        const right = inferType(value.right, typedBlocks);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        if (!isSameType(left.value, right.value, false))
          return result_1.Err(`Mismatching types between ${typeToString(left.value)} and ${typeToString(right.value)}`);
        return left;
      }
      function inferDivision(value, typedBlocks) {
        const left = inferType(value.left, typedBlocks);
        const right = inferType(value.right, typedBlocks);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        if (!isSameType(left.value, right.value, false))
          return result_1.Err(`Mismatching types between ${typeToString(left.value)} and ${typeToString(right.value)}`);
        return left;
      }
      function inferLeftPipe(value, typedBlocks) {
        const right = inferType(value.right, typedBlocks);
        return right;
      }
      function inferRightPipe(value, typedBlocks) {
        const left = inferType(value.left, typedBlocks);
        return left;
      }
      function inferModuleReference(value, typedBlocks) {
        return inferType(value.value, typedBlocks);
      }
      function inferFunctionCall(value) {
        return types_1.FixedType("any", []);
      }
      function inferLambda(value) {
        return types_1.FixedType("any", []);
      }
      function inferLambdaCall(value) {
        return types_1.FixedType("any", []);
      }
      function inferConstructor(value, typedBlocks) {
        for (const block of typedBlocks) {
          if (block.kind === "UnionType") {
            for (const tag of block.tags) {
              if (value.constructor === tag.name) {
                return block.type;
              }
            }
          }
        }
        return types_1.FixedType("any", []);
      }
      function inferEquality(value) {
        return types_1.FixedType("boolean", []);
      }
      function inferInEquality(value) {
        return types_1.FixedType("boolean", []);
      }
      function inferLessThan(value) {
        return types_1.FixedType("boolean", []);
      }
      function inferLessThanOrEqual(value) {
        return types_1.FixedType("boolean", []);
      }
      function inferGreaterThan(value) {
        return types_1.FixedType("boolean", []);
      }
      function inferGreaterThanOrEqual(value) {
        return types_1.FixedType("boolean", []);
      }
      function inferAnd(value) {
        return types_1.FixedType("boolean", []);
      }
      function inferOr(value) {
        return types_1.FixedType("boolean", []);
      }
      function inferListPrepend(value, typedBlocks) {
        const leftInfer = inferType(value.left, typedBlocks);
        const rightInfer = inferType(value.right, typedBlocks);
        if (leftInfer.kind === "err")
          return leftInfer;
        if (rightInfer.kind === "err")
          return rightInfer;
        if (rightInfer.value.kind === "GenericType" || rightInfer.value.kind === "FixedType" && rightInfer.value.name === "any")
          return result_1.Ok(types_1.FixedType("List", [types_1.GenericType("any")]));
        if (rightInfer.value.kind === "FunctionType")
          return result_1.Err("Inferred list on right hand side of :: to be a function, not a list");
        if (rightInfer.value.name === "List" && rightInfer.value.args.length > 0) {
          const isEmptyList = value.right.kind === "ListValue" && value.right.items.length === 0;
          if (isEmptyList) {
            return result_1.Ok(types_1.FixedType("List", [leftInfer.value]));
          }
          const listElementType = rightInfer.value.args[0];
          if (isSameType(leftInfer.value, listElementType, false)) {
            return result_1.Ok(rightInfer.value);
          }
          return result_1.Err(`Invalid types in :: - lefthand (${typeToString(leftInfer.value)}) must match elements of righthand (${typeToString(listElementType)})`);
        }
        return result_1.Err(`Expected list on righthand side of :: but got ${typeToString(rightInfer.value)}.`);
      }
      function inferType(expression, typedBlocks) {
        switch (expression.kind) {
          case "Value":
            return result_1.Ok(inferValue(expression));
          case "StringValue":
            return result_1.Ok(inferStringValue(expression));
          case "FormatStringValue":
            return result_1.Ok(inferFormatStringValue(expression));
          case "ListValue":
            return inferListValue(expression, typedBlocks);
          case "ListRange":
            return result_1.Ok(inferListRange(expression));
          case "ObjectLiteral":
            return inferObjectLiteral(expression, typedBlocks);
          case "IfStatement":
            return inferIfStatement(expression, typedBlocks);
          case "CaseStatement":
            return inferCaseStatement(expression, typedBlocks);
          case "Addition":
            return inferAddition(expression, typedBlocks);
          case "Subtraction":
            return inferSubtraction(expression, typedBlocks);
          case "Multiplication":
            return inferMultiplication(expression, typedBlocks);
          case "Division":
            return inferDivision(expression, typedBlocks);
          case "And":
            return result_1.Ok(inferAnd(expression));
          case "Or":
            return result_1.Ok(inferOr(expression));
          case "ListPrepend":
            return inferListPrepend(expression, typedBlocks);
          case "LeftPipe":
            return inferLeftPipe(expression, typedBlocks);
          case "RightPipe":
            return inferRightPipe(expression, typedBlocks);
          case "ModuleReference":
            return inferModuleReference(expression, typedBlocks);
          case "FunctionCall":
            return result_1.Ok(inferFunctionCall(expression));
          case "Lambda":
            return result_1.Ok(inferLambda(expression));
          case "LambdaCall":
            return result_1.Ok(inferLambdaCall(expression));
          case "Constructor":
            return result_1.Ok(inferConstructor(expression, typedBlocks));
          case "Equality":
            return result_1.Ok(inferEquality(expression));
          case "InEquality":
            return result_1.Ok(inferInEquality(expression));
          case "LessThan":
            return result_1.Ok(inferLessThan(expression));
          case "LessThanOrEqual":
            return result_1.Ok(inferLessThanOrEqual(expression));
          case "GreaterThan":
            return result_1.Ok(inferGreaterThan(expression));
          case "GreaterThanOrEqual":
            return result_1.Ok(inferGreaterThanOrEqual(expression));
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
        }
      }
      function typeExistsInNamespace(type, blocks, imports) {
        if (type.kind === "FunctionType")
          return true;
        if (builtins_1.isBuiltinType(type.name))
          return true;
        if (type.name === "List")
          return true;
        if (type.kind === "GenericType")
          return true;
        for (const block of blocks) {
          if (isSameType(type, block.type, true))
            return true;
        }
        for (const import_ of imports) {
          for (const module2 of import_.modules) {
            for (const exposed of module2.exposing) {
              if (type.name === exposed)
                return true;
            }
            if (type.name.indexOf(".") > -1 && module2.alias.kind === "just" && type.name.split(".")[0] === module2.alias.value) {
              return true;
            }
          }
        }
        return false;
      }
      function validateType(block, typedBlocks, imports) {
        switch (block.kind) {
          case "Const": {
            if (!typeExistsInNamespace(block.type, typedBlocks, imports)) {
              return result_1.Err(`Type ${typeToString(block.type)} did not exist in the namespace`);
            }
            const inferredRes = inferType(block.value, typedBlocks);
            if (inferredRes.kind === "err")
              return inferredRes;
            const inferred = inferredRes.value;
            if (isSameType(block.type, inferred, false)) {
              return result_1.Ok(block.type);
            }
            return result_1.Err(`Expected \`${typeToString(block.type)}\` but got \`${typeToString(inferred)}\``);
          }
          case "Function": {
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
              return result_1.Err(notExistingErrors.join("\n"));
            }
            const inferredRes = inferType(block.body, typedBlocks);
            if (inferredRes.kind === "err")
              return inferredRes;
            const inferred = inferredRes.value;
            if (!isSameType(block.returnType, inferred, false)) {
              return result_1.Err(`Expected \`${typeToString(block.returnType)}\` but got \`${typeToString(inferred)}\` in the body of the function`);
            }
            return result_1.Ok(block.returnType);
          }
          case "UnionType":
          case "TypeAlias": {
            return result_1.Ok(block.type);
          }
          case "MultilineComment":
          case "Comment":
          case "Export":
          case "Import": {
            return result_1.Ok(types_1.FixedType("any", []));
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
      var blocks_1 = require_blocks();
      var builtins_1 = require_builtins();
      var collisions_1 = require_collisions();
      var tokens_1 = require_tokens();
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
            return result_1.Err("Unexpected arrow in type");
          }
          case "BaseTypeToken": {
            const rootType = token.body[0];
            if (rootType.kind === "IdentifierToken") {
              const parsedTypes = afterArrow(token.body.slice(1)).map(parseTypeToken);
              if (parsedTypes.length === 0) {
                if (builtins_1.isBuiltinType(rootType.body) && rootType.body !== "any") {
                  return result_1.Ok(types_1.FixedType(rootType.body, []));
                } else if (rootType.body.toLowerCase() === rootType.body) {
                  return result_1.Ok(types_1.GenericType(rootType.body));
                }
              }
              const errors = [];
              const correct = [];
              for (const parsed of parsedTypes) {
                if (parsed.kind === "ok") {
                  correct.push(parsed.value);
                } else {
                  errors.push(parsed.error);
                }
              }
              if (errors.length > 0) {
                return result_1.Err(errors.join("\n"));
              }
              return result_1.Ok(types_1.FixedType(rootType.body, correct));
            }
            return result_1.Err(`Invalid root type ${rootType.kind}`);
          }
          case "CloseBracketToken": {
            return result_1.Err("Unexpected close bracket in type");
          }
          case "FunctionTypeToken": {
            const parsedTypes = token.body.map((x) => {
              return parseTypeToken(x);
            });
            const errors = [];
            const correct = [];
            for (const parsed of parsedTypes) {
              if (parsed.kind === "ok") {
                correct.push(parsed.value);
              } else {
                errors.push(parsed.error);
              }
            }
            if (errors.length > 0) {
              return result_1.Err(errors.join("\n"));
            }
            return result_1.Ok(types_1.FunctionType(correct));
          }
          case "IdentifierToken": {
            if (builtins_1.isBuiltinType(token.body) && token.body !== "any") {
              return result_1.Ok(types_1.FixedType(token.body, []));
            } else if (token.body.toLowerCase() === token.body) {
              return result_1.Ok(types_1.GenericType(token.body));
            }
            return result_1.Ok(types_1.FixedType(token.body, []));
          }
          case "OpenBracketToken": {
            return result_1.Err("Unexected open bracket in type");
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
        let index = 0;
        while (index < tokens.length) {
          if (tokens[index].kind === "IdentifierToken") {
            break;
          }
          index++;
        }
        if (index === tokens.length || tokens[index].kind !== "IdentifierToken") {
          return result_1.Err(`Missing type definition. Got: \`${tokens_1.tokensToString(tokens)}\``);
        }
        const rootTypeName = tokens[index].body;
        if (builtins_1.isBuiltinType(rootTypeName) && rootTypeName !== "any") {
          return result_1.Ok(types_1.FixedType(rootTypeName, []));
        } else if (rootTypeName.toLowerCase() === rootTypeName) {
          return result_1.Ok(types_1.GenericType(rootTypeName));
        }
        index++;
        let buffer = [];
        let bracketDepth = 0;
        let foundSomething = false;
        const parsedTypes = [];
        while (index < tokens.length) {
          const token = tokens[index];
          switch (token.kind) {
            case "WhitespaceToken": {
              if (bracketDepth === 0) {
                if (!foundSomething)
                  break;
                if (buffer.length === 0)
                  break;
                parsedTypes.push(parseType(buffer));
                buffer = [];
              } else {
                buffer.push(token);
              }
              break;
            }
            case "OpenBracketToken": {
              bracketDepth++;
              if (bracketDepth > 1)
                buffer.push(token);
              break;
            }
            case "CloseBracketToken": {
              bracketDepth--;
              if (bracketDepth === 0) {
                parsedTypes.push(parseType(buffer));
                buffer = [];
              } else {
                buffer.push(token);
              }
              break;
            }
            case "IdentifierToken": {
              foundSomething = true;
              buffer.push(token);
              break;
            }
            default: {
              return result_1.Err(`Expected identifier, brackets, or whitespace, but got ${token.kind}`);
            }
          }
          index++;
        }
        if (buffer.length > 0) {
          buffer.forEach((b) => parsedTypes.push(parseType([b])));
        }
        return result_1.Ok(types_1.FixedType(rootTypeName, parsedTypes.filter((type_) => type_.kind !== "err").map((type_) => type_.value)));
      }
      function parseUnionType(tokens) {
        if (tokens[0].kind === "KeywordToken") {
          if (tokens[0].body !== "type") {
            return result_1.Err("Expected `type` but got " + tokens[0].body);
          }
        }
        let typeLine = [];
        let isInBranches = false;
        let branches = [];
        let currentBranch = [];
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
              return result_1.Err("Unexpected token parsing a union type. Got " + token.kind);
            }
          }
        }
        if (currentBranch) {
          branches.push(currentBranch.join(" "));
        }
        const parsedType = parseType(typeLine);
        if (parsedType.kind === "err")
          return parsedType;
        const tags = branches.map((tag) => {
          if (tag.startsWith("|")) {
            tag = tag.slice(1);
          }
          tag = tag.trim();
          const tagName = tag.split(" ")[0];
          if (tagName.length === 0) {
            return result_1.Err(`Missing expected tag name for union type \`${tokens_1.tokensToString(typeLine)}\``);
          }
          if (builtins_1.isReservedName(tagName)) {
            return result_1.Err(`Redefining ${tagName.trim()} will cause problems. Try renaming it to ${tagName.trim()}Value`);
          }
          let argsAsJson = tag.split(" ").slice(1).join(" ");
          const args = argsAsJson.split(" ").filter((j) => j !== "{" && j !== "}").join(" ").split(",").filter((arg) => arg.trim().length > 0).map((arg) => {
            const property = parseProperty(tokens_1.tokenize(arg));
            if (property.kind === "err")
              return property;
            return result_1.Ok(types_1.TagArg(property.value.name, property.value.type));
          });
          if (args.filter((maybeTag) => maybeTag.kind === "ok").length === args.length) {
            return result_1.Ok(types_1.Tag(tagName, args.map((arg) => arg.value)));
          }
          return result_1.Err("Error parsing args due to:\n" + args.filter((arg) => arg.kind === "err").map((err) => err.error));
        });
        if (tags.length === 0) {
          return result_1.Err("Not enough tags given.");
        }
        for (var i = 0; i < tags.length; i++) {
          const tag = tags[i];
          if (tag.kind === "err") {
            return tag;
          }
        }
        if (parsedType.value.kind === "GenericType") {
          return result_1.Err("Expected a fixed type but got a generic type for a union type. Maybe you missed a captal letter?");
        }
        if (parsedType.value.kind === "FunctionType") {
          return result_1.Err("Expected a fixed type but got a function type for a union type. Maybe you missed a captal letter?");
        }
        return result_1.Ok(types_1.UnionType(parsedType.value, tags.filter((tag) => tag.kind === "ok").map((tag) => tag.value)));
      }
      function parseProperty(tokens) {
        let index = 0;
        let name = null;
        while (index < tokens.length) {
          const token = tokens[index];
          if (token.kind === "WhitespaceToken") {
          } else if (token.kind === "IdentifierToken") {
            if (name) {
              return result_1.Err("Got too many identifiers for property name");
            }
            name = token.body;
          } else if (token.kind === "ColonToken") {
            break;
          } else {
            return result_1.Err(`Expected identifier in property name but got ${token.kind}`);
          }
          index++;
        }
        index++;
        if (name === null) {
          return result_1.Err("Expected identifier for property name but found nothing");
        }
        let bitsAfterName = tokens.slice(index);
        if (tokens.find((token) => token.kind === "ArrowToken")) {
          bitsAfterName = [
            tokens_1.OpenBracketToken(),
            ...bitsAfterName,
            tokens_1.CloseBracketToken()
          ];
        }
        const tokenizedTypes = tokens_1.tokenizeType(bitsAfterName);
        if (tokenizedTypes.kind === "err")
          return tokenizedTypes;
        const types = tokenizedTypes.value;
        if (types.length > 1) {
          return result_1.Err("Too many types found in property");
        }
        if (types.length < 1)
          return result_1.Err("Failed to find type");
        const type = parseRootTypeTokens(types[0]);
        if (type.kind === "err")
          return type;
        return result_1.Ok(types_1.Property(name, type.value));
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
              return result_1.Err("Expected `type alias` but got " + token);
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
              return result_1.Err("Unexpected token parsing a type alias. Got " + token.kind);
            }
          }
        }
        const parsedAliasName = parseType(typeLine);
        if (parsedAliasName.kind === "err") {
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
        const parsedProperties = properties.map((x) => parseProperty(tokens_1.tokenize(x)));
        const errors = parsedProperties.filter((property) => property.kind === "err");
        if (errors.length > 0) {
          return result_1.Err(errors.map((err) => err.error).join("\n"));
        }
        if (aliasName.kind === "GenericType") {
          return result_1.Err("Expected a fixed type but got a generic type for a type alias. Maybe you missed a captal letter?");
        }
        if (aliasName.kind === "FunctionType") {
          return result_1.Err("Expected a fixed type but got a function type for a type alias. Maybe you missed a captal letter?");
        }
        return result_1.Ok(types_1.TypeAlias(aliasName, parsedProperties.map((property) => property.value)));
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
                if (innerLiteral.kind === "err")
                  return innerLiteral;
                innermostBuffer = "";
                currentValue = innerLiteral.value;
                fields.push(types_1.Field(currentName.trim(), currentValue));
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
                if (innerLiteral.kind === "err")
                  return innerLiteral;
                fields.push(types_1.Field(currentName.trim(), innerLiteral.value));
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
                    base = types_1.Value(token.body);
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
        return result_1.Ok(types_1.ObjectLiteral(base, fields));
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
              return result_1.Err(`Expected value but got ${token.kind}`);
            }
          }
          index++;
        }
        const firstChar = body.join("").slice(0, 1);
        if (firstChar !== "-" && firstChar.toUpperCase() === firstChar && isNaN(parseFloat(firstChar))) {
          return parseConstructor(tokens);
        }
        return result_1.Ok(types_1.Value(body.join("")));
      }
      function parseStringValue(tokens) {
        if (tokens[0].kind === "StringToken")
          return result_1.Ok(types_1.StringValue(tokens[0].body.slice(1, -1)));
        return result_1.Err(`Expected string literal, got ${tokens[0].kind}`);
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
          const newTokens = tokens_1.tokenize(firstToken.body.slice(1));
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
              const start = parseValue(tokens_1.tokenize(pieces[0]));
              const end = parseValue(tokens_1.tokenize(pieces[1]));
              if (start.kind === "err")
                return start;
              if (end.kind === "err")
                return end;
              if (start.kind === "ok" && start.value.kind === "Constructor")
                return result_1.Err("Expected variable but got constructor");
              if (end.kind === "ok" && end.value.kind === "Constructor")
                return result_1.Err("Expected variable but got constructor");
              return result_1.Ok(types_1.ListRange(start.value, end.value));
            }
            default: {
              return result_1.Err(`Unxpected ${token.kind}, expected whitespace or literal`);
            }
          }
          index++;
        }
        return result_1.Err("Failed to find list range. They should look like [1..2]");
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
        const body = tokens_1.tokensToString(tokens.slice(index));
        const trimmed = body.trim();
        const innerBody = trimmed.slice(1, trimmed.length - 1).trim();
        if (innerBody.trim().length === 0)
          return result_1.Ok(types_1.ListValue([]));
        const innerTokens = tokens_1.tokenize(innerBody);
        let innerIndex = 0;
        let currentBuffer = [];
        let depth = 0;
        while (innerIndex < innerTokens.length) {
          const token = innerTokens[innerIndex];
          switch (token.kind) {
            case "OpenCurlyBracesToken": {
              currentBuffer.push(tokens_1.OpenCurlyBracesToken());
              depth++;
              break;
            }
            case "CloseCurlyBracesToken": {
              currentBuffer.push(tokens_1.CloseCurlyBracesToken());
              depth--;
              break;
            }
            case "CommaToken": {
              if (depth === 0) {
                parsedValues.push(parseExpression(tokens_1.tokensToString(currentBuffer)));
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
          parsedValues.push(parseExpression(tokens_1.tokensToString(currentBuffer)));
        }
        const errors = parsedValues.filter((part) => part.kind === "err");
        const passedValues = parsedValues.filter((part) => part.kind === "ok");
        if (errors.length > 0)
          return result_1.Err(`Invalid array: ${errors.map((error) => error.error).join(",")}`);
        if (passedValues.length === 0) {
          return result_1.Ok(types_1.ListValue([]));
        } else {
          return result_1.Ok(types_1.ListValue(passedValues.map((value) => value.value)));
        }
      }
      function parseFormatStringValue(tokens) {
        if (tokens[0].kind === "FormatStringToken")
          return result_1.Ok(types_1.FormatStringValue(tokens[0].body.slice(1, -1)));
        return result_1.Err(`Expected string literal, got ${tokens[0].kind}`);
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
              return result_1.Err(`Expected identifier or whitespace but got ${token.kind} while parsing a destructure.`);
            }
          }
          if (constructor)
            break;
          index++;
        }
        index++;
        if (constructor === null)
          return result_1.Err("Expected identifer for a destructor but got nothing.");
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
        const pattern = tokens_1.tokensToString(patternParts).trim();
        return result_1.Ok(types_1.Destructure(constructor, pattern));
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
              return result_1.Err(`Expected identifier or whitespace but got ${token.kind} while parsing constructor.`);
            }
          }
          if (constructor)
            break;
          index++;
        }
        index++;
        if (constructor === null)
          return result_1.Err("Expected identifer for a constructor but got nothing.");
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
        if (pattern.kind === "err")
          return pattern;
        return result_1.Ok(types_1.Constructor(constructor, pattern.value));
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
        return parseExpression(tokens_1.tokensToString(inbetweenTokens));
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
        return parseExpression(tokens_1.tokensToString(inbetweenTokens));
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
        return parseExpression(tokens_1.tokensToString(inbetweenTokens));
      }
      function parseIfStatementSingleLine(body) {
        const parsedPredicate = parseIfPredicate(tokens_1.tokenize(body));
        const parsedIfBody = parseIfBody(tokens_1.tokenize(body));
        const parsedElseBody = parseElseBody(tokens_1.tokenize(body));
        const errors = [];
        if (parsedPredicate.kind === "err")
          errors.push(parsedPredicate.error);
        if (parsedIfBody.kind === "err")
          errors.push(parsedIfBody.error);
        if (parsedElseBody.kind === "err")
          errors.push(parsedElseBody.error);
        if (errors.length > 0) {
          return result_1.Err(errors.join("\n"));
        }
        return result_1.Ok(types_1.IfStatement(parsedPredicate.value, parsedIfBody.value, [], parsedElseBody.value, []));
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
        const parsedPredicate = parseIfPredicate(tokens_1.tokenize(body));
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
          return result_1.Err("Missing else block");
        }
        const ifBody = lines.slice(1, elseIndex);
        const ifLetStart = ifBody.findIndex((line) => line.startsWith(" ".repeat(indentLevel + 4) + "let") && line.endsWith("let"));
        const ifLetEnd = ifBody.findIndex((line) => line.startsWith(" ".repeat(indentLevel + 4) + "in") && line.endsWith("in"));
        let ifLetBlock = [];
        if (ifLetStart > -1 && ifLetEnd > -1) {
          const letLines = ifBody.slice(ifLetStart + 1, ifLetEnd).map((line) => line.slice(indentLevel + 8));
          const letBlocks = blocks_1.intoBlocks(letLines.join("\n"));
          ifLetBlock = letBlocks.map(parseBlock).filter((block) => block.kind === "ok").map((block) => block.value);
        }
        const elseBody = lines.slice(elseIndex + 1);
        const elseLetStart = elseBody.findIndex((line) => line.startsWith(" ".repeat(indentLevel + 4) + "let") && line.endsWith("let"));
        const elseLetEnd = elseBody.findIndex((line) => line.startsWith(" ".repeat(indentLevel + 4) + "in") && line.endsWith("in"));
        let elseLetBlock = [];
        if (elseLetStart > -1 && elseLetEnd > -1) {
          const letLines = elseBody.slice(elseLetStart + 1, elseLetEnd).map((line) => line.slice(indentLevel + 8));
          const letBlocks = blocks_1.intoBlocks(letLines.join("\n"));
          elseLetBlock = letBlocks.map(parseBlock).filter((block) => block.kind === "ok").map((block) => block.value);
        }
        const parsedIfBody = parseExpression(ifBody.slice(ifLetEnd === -1 ? 0 : ifLetEnd + 1).join("\n"));
        const parsedElseBody = parseExpression(elseBody.slice(elseLetEnd === -1 ? 0 : elseLetEnd + 1).join("\n"));
        const errors = [];
        if (parsedPredicate.kind === "err")
          errors.push(parsedPredicate.error);
        if (parsedIfBody.kind === "err")
          errors.push(parsedIfBody.error);
        if (parsedElseBody.kind === "err")
          errors.push(parsedElseBody.error);
        if (errors.length > 0) {
          return result_1.Err(errors.join("\n"));
        }
        return result_1.Ok(types_1.IfStatement(parsedPredicate.value, parsedIfBody.value, ifLetBlock, parsedElseBody.value, elseLetBlock));
      }
      function isConstructor(str) {
        return str[0].toUpperCase() === str[0] && isNaN(parseInt(str, 10));
      }
      function parseEmptyList(tokens) {
        const withoutWhitespace = tokens.filter((t) => t.kind !== "WhitespaceToken");
        if (withoutWhitespace.length > 1) {
          return result_1.Err("Too many values for empty list.");
        } else if (withoutWhitespace.length === 0) {
          return result_1.Err("Expected [] but didn't find one.");
        }
        if (withoutWhitespace[0].kind === "LiteralToken" && withoutWhitespace[0].body === "[]") {
          return result_1.Ok(types_1.EmptyList());
        }
        return result_1.Err(`Expected empty list [] but got ${withoutWhitespace[0].kind}`);
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
              parts.push(types_1.EmptyList());
              break;
            }
            case "OperatorToken": {
              if (token.body !== "::") {
                return result_1.Err(`Expected ::, [], or identifier but got ${token.body}`);
              }
              if (isInDestructor) {
                const destructure = parseDestructure(destructorParts);
                if (destructure.kind === "err")
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
                parts.push(types_1.Value(token.body));
              }
              break;
            }
            case "StringToken": {
              parts.push(types_1.StringValue(token.body.slice(1, -1)));
              break;
            }
            case "FormatStringToken": {
              parts.push(types_1.FormatStringValue(token.body.slice(1, -1)));
              break;
            }
          }
        }
        return result_1.Ok(types_1.ListDestructure(parts));
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
          return result_1.Err("Failed to find token in branch.");
        if (hasTopLevelOperator("::", tokens)) {
          return parseListDestructure(tokens);
        }
        switch (firstToken.kind) {
          case "IdentifierToken": {
            if (isConstructor(firstToken.body)) {
              return parseDestructure(tokens);
            }
            if (firstToken.body === "default") {
              return result_1.Ok(types_1.Default());
            } else {
              return result_1.Err("Expected a string or a destructure, but got an identifier. Try using an if statement instead");
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
            if (emptyList.kind === "ok")
              return emptyList;
          }
        }
        return result_1.Err(`Expected destructure or string but got ${firstToken.kind}`);
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
        return parseExpression(tokens_1.tokensToString(inbetweenTokens));
      }
      function parseCaseStatement(body) {
        body = body.split("\n").filter((l) => l.trim().length > 0).join("\n");
        const rootIndentLevel = getIndentLevel(body.split("\n")[0]);
        const casePredicate = parseCasePredicate(tokens_1.tokenize(body));
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
              const split = splitOnArrowTokens(tokens_1.tokenize(line));
              if (split.length === 1) {
                branchPattern = tokens_1.tokensToString(split[0]);
              } else if (split.length === 2) {
                branchPattern = tokens_1.tokensToString(split[0]);
                branchLines.push(tokens_1.tokensToString(split[1]));
              } else {
                branches.push(result_1.Err(`Failed to parse branch on line ${i}`));
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
              const letBlocks = blocks_1.intoBlocks(letLines.join("\n"));
              letBlock = letBlocks.map(parseBlock).filter((block) => block.kind === "ok").map((block) => block.value);
            }
            const branchExpression = parseExpression(branchLines.slice(letEnd + 1).join("\n"));
            const parsedBranchPattern = parseBranchPattern(tokens_1.tokenize(branchPattern));
            if (branchExpression.kind === "err" || parsedBranchPattern.kind === "err") {
              if (branchExpression.kind === "err")
                branches.push(branchExpression);
              if (parsedBranchPattern.kind === "err")
                branches.push(parsedBranchPattern);
            } else {
              branches.push(result_1.Ok(types_1.Branch(parsedBranchPattern.value, branchExpression.value, letBlock)));
            }
            if (!wasReset) {
              const split = splitOnArrowTokens(tokens_1.tokenize(line));
              if (split.length === 1) {
                branchPattern = tokens_1.tokensToString(split[0]);
                branchLines = [];
              } else if (split.length === 2) {
                branchPattern = tokens_1.tokensToString(split[0]);
                branchLines = [tokens_1.tokensToString(split[1])];
              } else {
                branches.push(result_1.Err(`Failed to parse branch on line ${i}`));
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
            const letBlocks = blocks_1.intoBlocks(letLines.join("\n"));
            letBlock = letBlocks.map(parseBlock).filter((block) => block.kind === "ok").map((block) => block.value);
          }
          const branchExpression = parseExpression(branchLines.slice(letEnd + 1).join("\n"));
          const parsedBranchPattern = parseBranchPattern(tokens_1.tokenize(branchPattern));
          if (branchExpression.kind === "err" || parsedBranchPattern.kind === "err") {
            if (branchExpression.kind === "err")
              branches.push(branchExpression);
            if (parsedBranchPattern.kind === "err")
              branches.push(parsedBranchPattern);
          } else {
            branches.push(result_1.Ok(types_1.Branch(parsedBranchPattern.value, branchExpression.value, letBlock)));
          }
        }
        const errors = [];
        if (casePredicate.kind === "err")
          errors.push(casePredicate.error);
        branches.forEach((branch, i2) => {
          if (branch.kind === "err") {
            errors.push(branch.error);
          } else {
            if (branch.value.pattern.kind === "Default" && i2 < branches.length - 1) {
              errors.push("default case must come last in the case..of");
            }
          }
        });
        if (errors.length > 0) {
          return result_1.Err(errors.join("\n"));
        }
        const validBranches = branches.map((value) => value.value);
        const needsDefault = validBranches.filter((t) => t.pattern.kind === "ListDestructure" || t.pattern.kind === "EmptyList").length > 0;
        const hasDefault = validBranches.filter((t) => t.pattern.kind === "Default").length > 0;
        const hasWildcardDestructure = validBranches.filter((t) => t.pattern.kind === "ListDestructure" && t.pattern.parts.length == 2 && t.pattern.parts[0].kind === "Value" && (t.pattern.parts[1].kind === "Value" || t.pattern.parts[1].kind === "EmptyList")).length > 0;
        const hasEmptyList = validBranches.filter((t) => t.pattern.kind === "EmptyList").length > 0;
        const isSimpleDestructure = hasWildcardDestructure && hasEmptyList;
        if (needsDefault && !hasDefault && !isSimpleDestructure) {
          return result_1.Err("You must provide a default case when using list destructoring");
        }
        return result_1.Ok(types_1.CaseStatement(casePredicate.value, validBranches));
      }
      function parseAddition(tokens) {
        const operator = "+";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.Addition(left.value, right.value));
      }
      function parseSubtraction(tokens) {
        const operator = "-";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.Subtraction(left.value, right.value));
      }
      function parseMultiplcation(tokens) {
        const operator = "*";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.Multiplication(left.value, right.value));
      }
      function parseDivision(tokens) {
        const operator = "/";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.Division(left.value, right.value));
      }
      function parseLeftPipe(tokens) {
        const operator = "|>";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        if (!types_1.isLeftPipeableExpression(right.value))
          return result_1.Err(`Could not pipe to ${right.value}`);
        return result_1.Ok(types_1.LeftPipe(left.value, right.value));
      }
      function parseRightPipe(tokens) {
        const operator = "<|";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.RightPipe(left.value, right.value));
      }
      function parseModuleReference(tokens) {
        const body = tokens_1.tokensToString(tokens);
        const trimmedBody = body.trim();
        const firstPart = trimmedBody.split(" ")[0];
        const possibleModuleParts = firstPart.split(".");
        const moduleName = possibleModuleParts.slice(0, possibleModuleParts.length - 1);
        const value = possibleModuleParts[possibleModuleParts.length - 1] + " " + trimmedBody.split(" ").slice(1).join(" ");
        const expression = parseExpression(value);
        if (expression.kind === "err")
          return expression;
        return result_1.Ok(types_1.ModuleReference(moduleName.length === 1 && moduleName[0].trim().length === 0 ? [] : moduleName, expression.value));
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
            return result_1.Err(`Expected identifier but got ${token.kind}: ${tokens_1.tokensToString([
              token
            ])}`);
          }
          index++;
        }
        index++;
        if (!functionName) {
          return result_1.Err(`Expected identifier but got nothing.`);
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
                  args.push(token.body);
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
        const errors = parsedArgs.filter((arg) => arg.kind === "err");
        if (errors.length > 0) {
          return result_1.Err("Failed to parse function call due to:\n" + errors.map((error) => error.error).join("\n"));
        }
        const correctArgs = parsedArgs.filter((arg) => arg.kind === "ok").map((arg) => arg.value);
        return result_1.Ok(types_1.FunctionCall(functionName, correctArgs));
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
        const lambdaBody = tokens_1.tokensToString(tokens.slice(index));
        const parsedBody = parseExpression(lambdaBody);
        if (parsedBody.kind === "err") {
          return result_1.Err("Failed to parse lambda definiton due to:\n" + parsedBody.error);
        }
        return result_1.Ok(types_1.Lambda(args, parsedBody.value));
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
        const left = parseExpression(tokens_1.tokensToString(tokens.slice(0, index)));
        const right = parseExpression(tokens_1.tokensToString(tokens.slice(index + 1)));
        return { left, right };
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
              if (bracketDepth === 0 && curlyBracketDepth === 0 && token.body === operator) {
                return true;
              }
            }
          }
        }
        return false;
      }
      function parseEquality(tokens) {
        const operator = "==";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.Equality(left.value, right.value));
      }
      function parseInEquality(tokens) {
        const operator = "!=";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.InEquality(left.value, right.value));
      }
      function parseLessThan(tokens) {
        const operator = "<";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.LessThan(left.value, right.value));
      }
      function parseLessThanOrEqual(tokens) {
        const operator = "<=";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.LessThanOrEqual(left.value, right.value));
      }
      function parseGreaterThan(tokens) {
        const operator = ">";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.GreaterThan(left.value, right.value));
      }
      function parseGreaterThanOrEqual(tokens) {
        const operator = ">=";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.GreaterThanOrEqual(left.value, right.value));
      }
      function parseAnd(tokens) {
        const operator = "&&";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.And(left.value, right.value));
      }
      function parseOr(tokens) {
        const operator = "||";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.Or(left.value, right.value));
      }
      function parseListPrepend(tokens) {
        const operator = "::";
        const { left, right } = parseOperator(operator, tokens);
        if (left.kind === "err")
          return left;
        if (right.kind === "err")
          return right;
        return result_1.Ok(types_1.ListPrepend(left.value, right.value));
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
      function parseExpression(body) {
        const tokens = dropSurroundingBrackets(tokens_1.tokenize(body));
        let index = 0;
        while (index < tokens.length) {
          if (tokens[index].kind !== "WhitespaceToken")
            break;
          index++;
        }
        const firstToken = tokens[index];
        if (!firstToken) {
          return result_1.Err(`Expected a token but got "${tokens}"`);
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
            if (tokensOtherThanWhitespace.length >= 2) {
              let tempIndex = index + 1;
              let seenOperator = false;
              while (tempIndex < tokens.length) {
                let escape = false;
                switch (tokens[tempIndex].kind) {
                  case "OperatorToken": {
                    seenOperator = true;
                    escape = true;
                    break;
                  }
                  case "OpenCurlyBracesToken":
                  case "ColonToken": {
                    escape = true;
                    break;
                  }
                }
                if (escape) {
                  break;
                }
                tempIndex++;
              }
              if (seenOperator) {
                break;
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
        if (body.indexOf(" == ") > 0) {
          return parseEquality(tokens);
        } else if (body.indexOf(" != ") > 0) {
          return parseInEquality(tokens);
        } else if (body.indexOf(" < ") > 0) {
          return parseLessThan(tokens);
        } else if (body.indexOf(" <= ") > 0) {
          return parseLessThanOrEqual(tokens);
        } else if (body.indexOf(" > ") > 0) {
          return parseGreaterThan(tokens);
        } else if (body.indexOf(" >= ") > 0) {
          return parseGreaterThanOrEqual(tokens);
        } else if (body.indexOf(" && ") > 0) {
          return parseAnd(tokens);
        } else if (body.indexOf(" || ") > 0) {
          return parseOr(tokens);
        } else if (hasTopLevelOperator("::", tokens)) {
          return parseListPrepend(tokens);
        } else if (body.indexOf(" + ") > 0) {
          return parseAddition(tokens);
        } else if (body.indexOf(" - ") > 0) {
          return parseSubtraction(tokens);
        } else if (body.indexOf(" * ") > 0) {
          return parseMultiplcation(tokens);
        } else if (body.indexOf(" / ") > 0) {
          return parseDivision(tokens);
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
        return result_1.Err(`No expression found: '${body}'`);
      }
      exports.parseExpression = parseExpression;
      function parseFunction(tokens) {
        if (tokens[0].kind !== "IdentifierToken") {
          return result_1.Err("Expected identfier, got " + tokens[0].kind);
        }
        const functionName = tokens[0].body;
        let index = 1;
        while (index < tokens.length) {
          if (tokens[index].kind === "WhitespaceToken") {
          } else if (tokens[index].kind !== "ColonToken") {
            return result_1.Err("Expected `:`, got " + tokens[index].kind);
          } else if (tokens[index].kind === "ColonToken") {
            break;
          }
          index++;
        }
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
        const tokenizedTypes = tokens_1.tokenizeType(currentType);
        if (tokenizedTypes.kind === "err")
          return tokenizedTypes;
        const types = tokenizedTypes.value;
        const bodyTokens = tokens.slice(index);
        const block = tokens_1.tokensToString(bodyTokens);
        const lines = block.split("\n");
        const letStart = lines.findIndex((line) => line.startsWith("    let") && line.endsWith("let"));
        const letEnd = lines.findIndex((line) => line.startsWith("    in") && line.endsWith("in"));
        let letBlock = [];
        if (letStart > -1 && letEnd > -1) {
          const letLines = lines.slice(letStart + 1, letEnd).map((line) => line.slice(8));
          const letBlocks = blocks_1.intoBlocks(letLines.join("\n"));
          letBlock = letBlocks.map(parseBlock).filter((block2) => block2.kind === "ok").map((block2) => block2.value);
        }
        const argumentLine = lines[0];
        const argumentNames = argumentLine.slice(functionName.length).split("=")[0].split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
        const combinedArguments = types.slice(0, types.length - 1).map((type_, i2) => {
          if (argumentNames.length <= i2) {
            const parsedType = parseRootTypeTokens(type_);
            if (parsedType.kind === "err")
              return result_1.Err(`Failed to parse argument ${i2} due to ${parsedType.error}`);
            return result_1.Ok(types_1.AnonFunctionArg(i2, parsedType.value));
          } else {
            const name = argumentNames[i2];
            const parsedType = parseRootTypeTokens(type_);
            if (parsedType.kind === "err")
              return result_1.Err(`Failed to parse ${name} due to ${parsedType.error}`);
            return result_1.Ok(types_1.FunctionArg(name, parsedType.value));
          }
        });
        const returnParts = types[types.length - 1];
        const returnType = parseRootTypeTokens(returnParts);
        const body = [argumentLine.split("=").slice(1).join("=").trim()].concat(block.split("\n").slice(letEnd > -1 ? letEnd + 1 : 1));
        const parsedBody = parseExpression(body.join("\n"));
        if (parsedBody.kind === "err")
          return parsedBody;
        if (returnType.kind === "err")
          return returnType;
        for (var i = 0; i < combinedArguments.length; i++) {
          const arg = combinedArguments[i];
          if (arg.kind === "err")
            return arg;
        }
        return result_1.Ok(types_1.Function(functionName, returnType.value, combinedArguments.map((arg) => arg.value), letBlock, parsedBody.value));
      }
      function parseConst(tokens) {
        if (tokens[0].kind !== "IdentifierToken") {
          return result_1.Err("Expected identfier, got " + tokens[0].kind);
        }
        const constName = tokens[0].body;
        let index = 1;
        while (index < tokens.length) {
          const token = tokens[index];
          if (token.kind === "WhitespaceToken") {
          } else if (token.kind !== "ColonToken") {
            return result_1.Err("Expected `:`, got " + token.kind);
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
        let block = tokens_1.tokensToString(bodyParts);
        const parsedType = parseType(constType);
        const bodyLines = block;
        const init = {
          pieces: [],
          hasSeenText: false
        };
        const body = bodyLines.split("=").slice(1).join("=").split("\n").reduce((obj, line) => {
          const { pieces, hasSeenText } = obj;
          if (hasSeenText) {
            pieces.push(line);
            return { pieces, hasSeenText };
          } else if (line.trim().length === 0) {
            return { pieces, hasSeenText };
          } else {
            pieces.push(line);
            return { pieces, hasSeenText: true };
          }
        }, init).pieces.join("\n");
        const parsedBody = parseExpression(body);
        if (parsedBody.kind === "err")
          return parsedBody;
        if (parsedType.kind === "err")
          return parsedType;
        return result_1.Ok(types_1.Const(constName, parsedType.value, parsedBody.value));
      }
      function parseImport(tokens) {
        const imports = [];
        let isInExposing = false;
        let isInAlias = false;
        let moduleName = "";
        let alias = maybe_1.Nothing();
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
                return result_1.Err("Expected `import` but got " + token.body);
              }
              break;
            }
            case "StringToken":
            case "IdentifierToken": {
              if (isInExposing) {
                exposing.push(token.body);
              } else if (isInAlias) {
                alias = maybe_1.Just(token.body);
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
              return result_1.Err("Expected `import` but got " + token.kind);
            }
          }
        }
        const namespace = moduleName.startsWith('"') ? "Relative" : "Global";
        imports.push(types_1.ImportModule(moduleName, alias, exposing, namespace));
        return result_1.Ok(types_1.Import(imports));
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
                return result_1.Err("Expected `exposing` but got " + token.body);
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
              return result_1.Err("Expected `exposing` but got " + token.kind);
            }
          }
        }
        return result_1.Ok(types_1.Export(exports2));
      }
      function parseBlock(block) {
        const wrapError = (res) => {
          return result_1.mapError((err) => {
            return `Line ${block.lineStart}: ${err}
\`\`\`
${block.lines.join("\n")}
\`\`\``;
          }, res);
        };
        const tokens = stripComments(tokens_1.tokenize(block.lines.join("\n")));
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
            return result_1.Ok(types_1.Comment());
          }
          case "MultilineCommentBlock": {
            return result_1.Ok(types_1.MultilineComment());
          }
          case "UnknownBlock": {
            return result_1.Err(`Not sure what the block starting on line ${block.lineStart} is. There's something wrong with the lines ${block.lineStart} - ${block.lineStart + block.lines.length}:
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
        const blocks = blocks_1.intoBlocks(body);
        const syntax = blocks.map(parseBlock);
        const errors = syntax.filter((syn) => syn.kind === "err").map((syn) => syn.error);
        const successes = syntax.filter((syn) => syn.kind === "ok").map((syn) => syn.value);
        const imports = syntax.filter((syn) => syn.kind === "ok" && syn.value.kind === "Import").map((syn) => syn.kind === "ok" && syn.value);
        const typeErrors = syntax.map((resultBlock, index) => {
          if (resultBlock.kind === "err")
            return null;
          const block = resultBlock;
          const validatedType = type_checking_1.validateType(block.value, blocks_1.typeBlocks([...syntax.slice(0, index), ...syntax.slice(index)].filter((b) => b.kind === "ok").map((b) => b.value)), imports);
          const gap = getGap(blocks, index);
          return result_1.mapError((error) => `Error on lines ${gap}
${error}:
${reportBlock(blocks[index])}`, validatedType);
        }).filter((type) => type && type.kind === "err").map((type) => type.error);
        const collidingNames = collisions_1.collisions(successes).map(({ indexes, name }) => {
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
        return types_1.Module(moduleName, syntax.filter((syn) => syn.kind === "ok").map((syn) => syn.value), [...errors, ...typeErrors, ...collidingNames]);
      }
      exports.parse = parse2;
      function addTypeErrors(module2, otherModules) {
        const imports = module2.body.filter((syn) => syn.kind === "Import");
        let allOtherTypeBlocks = [];
        for (const other of otherModules) {
          allOtherTypeBlocks = allOtherTypeBlocks.concat(blocks_1.typeBlocks(other.body));
        }
        const typeErrors = module2.body.map((block, index) => {
          const validatedType = type_checking_1.validateType(block, [
            ...blocks_1.typeBlocks([
              ...module2.body.slice(0, index),
              ...module2.body.slice(index)
            ]),
            ...allOtherTypeBlocks
          ], imports);
          const gap = getGap(module2.unparsedBody, index);
          return result_1.mapError((error) => `Error on lines ${gap}
${error}:
${reportBlock(module2.unparsedBody[index])}`, validatedType);
        }).filter((type) => type && type.kind === "err").map((type) => type.error);
        module2.errors = module2.errors.concat(typeErrors);
        return module2;
      }
      exports.addTypeErrors = addTypeErrors;
      function parseWithContext(body, filename = "main") {
        const blocks = blocks_1.intoBlocks(body);
        const syntax = blocks.map(parseBlock);
        const errors = syntax.filter((syn) => syn.kind === "err").map((syn) => syn.error);
        const successes = syntax.filter((syn) => syn.kind === "ok").map((syn) => syn.value);
        const collidingNames = collisions_1.collisions(successes).map(({ indexes, name }) => {
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
        return types_1.ContextModule(moduleName, syntax.filter((syn) => syn.kind === "ok").map((syn) => syn.value), blocks, [...errors, ...collidingNames]);
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
  var import_derw = __toESM(require_derw());
  var import_elm = __toESM(require_elm());
  var import_english = __toESM(require_english());
  var import_js = __toESM(require_js());
  var import_ts = __toESM(require_ts());
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
        keyword: /import|as|exposing|let|in|if|then|else|type|alias/,
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
          generated = (0, import_js.generateJavascript)(parsed);
          break;
        }
        case "typescript": {
          generated = (0, import_ts.generateTypescript)(parsed);
          break;
        }
        case "elm": {
          generated = (0, import_elm.generateElm)(parsed);
          break;
        }
        case "derw": {
          generated = (0, import_derw.generateDerw)(parsed);
          break;
        }
        case "english": {
          console.log("parsed", parsed);
          generated = (0, import_english.generateEnglish)(parsed);
          break;
        }
      }
      if (output)
        output.setAttribute("language", "javascript");
      if (output)
        output.value = generated;
    }
    onModeUpdate() {
      this.renderCode(this.getAttribute("value") || "");
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
        console.log("Switched mode to english");
        (_e = document.getElementById("view-english")) == null ? void 0 : _e.classList.toggle("active");
        break;
      }
    }
  }
  window.view = (value) => setMode(value);

  // src/Main.ts
  var main = newEditor("root");
})();
