// declare module "@acord" {
//   export = { modules }
// }

// //#region modules
// const modules = { common };

// //#region common
// const common = { ActivityStore };

// //#region ActivityStore
// const ActivityStore = { getActivities, getPrimaryActivity, getAllApplicationActivities };

// type Activity = {
//   created_at: string,
//   emoji?: {
//     animated?: boolean,
//     id?: string,
//     name: string
//   },
//   id: string,
//   name: string,
//   state: string,
//   type: number
// }

// function getActivities(userId: string): Activity[];
// declare module "@acord/modules/common/ActivityStore/getActivities" {
//   export = getActivities;
// }

// function getPrimaryActivity(userId: string): Activity;
// declare module "@acord/modules/common/ActivityStore/getPrimaryActivity" {
//   export = getPrimaryActivity;
// }

// function getAllApplicationActivities(): Activity[];
// declare module "@acord/modules/common/ActivityStore/getAllApplicationActivities" {
//   export = getAllApplicationActivities;
// }

// declare module "@acord/modules/common/ActivityStore" {
//   export = ActivityStore;
// }
// //#endregion
// declare module "@acord/modules/common" {
//   export = common;
// }

// //#endregion




// declare module "@acord/modules" {
//   export = modules;
// }
// //#endregion

