type Activity = {
  created_at: string,
  emoji?: {
    animated?: boolean,
    id?: string,
    name: string
  },
  id: string,
  name: string,
  state: string,
  type: number
}

function getActivities(userId: string): Activity[];
declare module "@acord/modules/common/ActivityStore/getActivities" {
  export = getActivities;
}

function getPrimaryActivity(userId: string): Activity;
declare module "@acord/modules/common/ActivityStore/getPrimaryActivity" {
  export = getPrimaryActivity;
}

function getAllApplicationActivities(): Activity[];
declare module "@acord/modules/common/ActivityStore/getAllApplicationActivities" {
  export = getAllApplicationActivities;
}

const ActivityStore = { getActivities, getPrimaryActivity, getAllApplicationActivities };
declare module "@acord/modules/common/ActivityStore" {
  export = ActivityStore;
}

const common = { ActivityStore };
declare module "@acord/modules/common" {
  export = common;
}

const modules = { common };
declare module "@acord/modules" {
  export = modules;
}

declare module "@acord" {
  export = { modules }
}