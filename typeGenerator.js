const fs = require("fs");
const typeGenerator = (obj, moduleName = "@acord" ,path = "./acord.d.ts") => {
  let result = "";

  function recursiveTyper(nObject, name, spacing = 0, randChars) {
    const lName = (name.split("/").pop().includes(moduleName)) ? "main" : name.split("/").pop();
    if (!randChars) randChars = lName;
    if (name) result += `\n${" ".repeat(spacing - 0)}//#region ${name.split("\/").pop()}\n${" ".repeat(spacing)}declare module "${name}" { export = ${randChars} } \n`
    const exObject = {};
    for (let key in nObject) {
      const value = nObject[key];
      const randChars = "____" + Math.random().toString(33).replace(".", "");
      exObject[`${randChars}`] = { key, value };
      if (typeof value == "object") recursiveTyper(value, `${name}/${key}`, spacing + 0, randChars);
      else if (typeof value == "function") r = value(), params = Object.entries(r?.params || { "...args": "any[]"}).map(([k,v], i) => `${k || `arg${i}`}: ${v || "any"}`), result += `\n${" ".repeat(spacing)}function ${randChars}(${params.join(", ")}): ${r?.returns || "any"};\n${" ".repeat(spacing)}declare module "${`${name}/${key}`}" { export = ${randChars}; }\n`;
      else if (["string", "number", "boolean"].includes(typeof value)) result += `\n${" ".repeat(spacing)}const ${randChars} = ${JSON.stringify(value)}\n${" ".repeat(spacing)}declare module "${`${name}/${key}`}" { export = ${randChars}; }\n`;
    }
    result += `\n${" ".repeat(spacing)}const ${randChars} = { ${Object.entries(exObject).map(([k, v]) => ["object","string", "number", "boolean", "function"].includes(typeof v.value) ? `${v.key}: ${k}` : null ).filter(x => x).join(", ")} }`
    result += `\n${" ".repeat(spacing - 0)}//#endregion\n`
  };

  recursiveTyper(obj, moduleName);
  fs.writeFileSync(path, result);
};
module.exports = typeGenerator;