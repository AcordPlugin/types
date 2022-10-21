
//#region @acord-test
{
  declare module "@acord-test" { export = {  } } 

  //#region modules
  {
    declare module "@acord-test/modules" { export = {  } } 

    //#region common
    {
      declare module "@acord-test/modules/common" { export = {  } } 

      //#region ActivityStore
      {
        declare module "@acord-test/modules/common/ActivityStore" { export = { kill, foo, cheats } } 

        function kill(): any;
        declare module "@acord-test/modules/common/ActivityStore/kill" {  export = kill; }

        const foo = "bar"
        declare module "@acord-test/modules/common/ActivityStore/foo" { export = foo; }

        const cheats = true
        declare module "@acord-test/modules/common/ActivityStore/cheats" { export = cheats; }

      }
      //#endregion

    }
    //#endregion

    //#region websocket
    {
      declare module "@acord-test/modules/websocket" { export = { findByProps } } 

      function findByProps(): any;
      declare module "@acord-test/modules/websocket/findByProps" {  export = findByProps; }

    }
    //#endregion

  }
  //#endregion

}
//#endregion
