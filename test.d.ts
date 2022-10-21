
//#region @acord-test
declare module "@acord-test" { export = acordMain } 

//#region modules
declare module "@acord-test/modules" { export = modules } 

//#region common
declare module "@acord-test/modules/common" { export = common } 

//#region ActivityStore
declare module "@acord-test/modules/common/ActivityStore" { export = ActivityStore } 

function kill(): any;
declare module "@acord-test/modules/common/ActivityStore/kill" { export = kill; }

const foo = "bar"
declare module "@acord-test/modules/common/ActivityStore/foo" { export = foo; }

const cheats = true
declare module "@acord-test/modules/common/ActivityStore/cheats" { export = cheats; }

const ActivityStore = { kill, foo, cheats }
//#endregion

const common = { ActivityStore }
//#endregion

//#region websocket
declare module "@acord-test/modules/websocket" { export = websocket } 

function findByProps(): any;
declare module "@acord-test/modules/websocket/findByProps" { export = findByProps; }

const websocket = { findByProps }
//#endregion

const modules = { common, websocket }
//#endregion

const acordMain = { modules }
//#endregion
