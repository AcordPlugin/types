const testObj = {
  modules: {
    common: {
      ActivityStore: {
        kill: () => null,
        foo: "bar",
        cheats: true,
      }
    },
    websocket: {
      findByProps: () => null,
    }
  }
};

const fs = require("fs");

let result = "";

function recursiveTyper(testObj, name, spacing = 2) {
  if (name) result += `\n${" ".repeat(spacing - 2)}//#region ${name.split("\/").pop()}\n${" ".repeat(spacing - 2)}{\n${" ".repeat(spacing)}declare module "${name}" { export = { ${Object.keys(testObj).map(k => ["string", "number", "boolean", "function"].includes(typeof testObj[k]) ? k : null ).filter(x => x).join(", ")} } } \n`
  for (let key in testObj) {
    const value = testObj[key];
    if (typeof value == "object") recursiveTyper(value, `${name}/${key}`, spacing + 2);
    else if (typeof value == "function") result += `\n${" ".repeat(spacing)}function ${key}(): any;\n${" ".repeat(spacing)}declare module "${`${name}/${key}`}" {  export = ${key}; }\n`;
    else if (["string", "number", "boolean"].includes(typeof value)) result += `\n${" ".repeat(spacing)}const ${key} = ${JSON.stringify(value)}\n${" ".repeat(spacing)}declare module "${`${name}/${key}`}" { export = ${key}; }\n`;
    
  }
  result += `\n${" ".repeat(spacing - 2)}}\n${" ".repeat(spacing - 2)}//#endregion\n`
};
recursiveTyper(testObj, "@acord-test");
fs.writeFileSync("./test.d.ts", result);