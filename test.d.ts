
//#region @acord-test
declare module "@acord-test" { export = { modules } } 

//#region modules
declare module "@acord-test/modules" { export = { common, websocket } } 

//#region common
declare module "@acord-test/modules/common" { export = { ActivityStore } } 

//#region ActivityStore
declare module "@acord-test/modules/common/ActivityStore" { export = { dude } } 

function dude(): any;
declare module "@acord-test/modules/common/ActivityStore/dude" {
  export = dude;
}
//#endregion

//#endregion

//#region websocket
declare module "@acord-test/modules/websocket" { export = { findByProps } } 

function findByProps(): any;
declare module "@acord-test/modules/websocket/findByProps" {
  export = findByProps;
}
//#endregion

//#endregion

//#endregion
