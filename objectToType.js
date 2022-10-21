const testObj = {
  modules: {
    common: {
      ActivityStore: {
        dude: () => null,
      }
    },
    websocket: {
      findByProps: () => null,
    }
  }
};

const fs = require("fs");

let result = "";

function recursiveTyper(testObj, name) {
  if (name) result += `\n//#region ${name.split("\/").pop()}\ndeclare module "${name}" { export = { ${Object.keys(testObj).join(", ")} } } \n`
  for (let key in testObj) {
    const value = testObj[key];
    if (typeof value == "object") recursiveTyper(value, `${name}/${key}`);
    else if (typeof value == "function") {
      result += `\nfunction ${key}(): any;\ndeclare module "${`${name}/${key}`}" {\n  export = ${key};\n}`
    }
  }
  result += `\n//#endregion\n`
};
recursiveTyper(testObj, "@acord-test");
fs.writeFileSync("./test.d.ts", result);