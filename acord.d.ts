
//#region @acord
declare module "@acord" { export = main } 

//#region dev
declare module "@acord/dev" { export = ____0n7vmhlmww5l } 

function ____05jnhbgu3les(...args: any[]): Promise<void>;
declare module "@acord/dev/unload" { export = ____05jnhbgu3les; }

const ____0n7vmhlmww5l = { unload: ____05jnhbgu3les }
//#endregion

//#region dom
declare module "@acord/dom" { export = ____0og9oshm4kgd } 

function ____0oh3u5ocivw4(...args: any[]): any;
declare module "@acord/dom/createElement" { export = ____0oh3u5ocivw4; }

function ____04sg5idwwia4(...args: any[]): any;
declare module "@acord/dom/parseHTML" { export = ____04sg5idwwia4; }

function ____0jwcr9qlqh4b(...args: any[]): any;
declare module "@acord/dom/parents" { export = ____0jwcr9qlqh4b; }

function ____0taasv0gvrji(...args: any[]): any;
declare module "@acord/dom/escapeHTML" { export = ____0taasv0gvrji; }

function ____06sw8gp3w2ru(...args: any[]): any;
declare module "@acord/dom/toCSSProp" { export = ____06sw8gp3w2ru; }

function ____0tdbm1pgl1w8(...args: any[]): any;
declare module "@acord/dom/toHTMLProps" { export = ____0tdbm1pgl1w8; }

const ____0og9oshm4kgd = { createElement: ____0oh3u5ocivw4, parseHTML: ____04sg5idwwia4, parents: ____0jwcr9qlqh4b, escapeHTML: ____0taasv0gvrji, toCSSProp: ____06sw8gp3w2ru, toHTMLProps: ____0tdbm1pgl1w8 }
//#endregion

//#region events
declare module "@acord/events" { export = ____0ge4rgog4s2s } 

function ____0aqml6tmthub(...args: any[]): any;
declare module "@acord/events/emit" { export = ____0aqml6tmthub; }

function ____0445j1tfpo12(...args: any[]): any;
declare module "@acord/events/off" { export = ____0445j1tfpo12; }

function ____0b0gbw1kt7jf(...args: any[]): any;
declare module "@acord/events/on" { export = ____0b0gbw1kt7jf; }

function ____0lj9ts82rc5n(...args: any[]): any;
declare module "@acord/events/once" { export = ____0lj9ts82rc5n; }

const ____0ge4rgog4s2s = { emit: ____0aqml6tmthub, off: ____0445j1tfpo12, on: ____0b0gbw1kt7jf, once: ____0lj9ts82rc5n }
//#endregion

//#region extensions
declare module "@acord/extensions" { export = ____0el8qio717ro } 

function ____0ql98gnuvw3j(...args: any[]): any;
declare module "@acord/extensions/evaluate" { export = ____0ql98gnuvw3j; }

function ____0j681i0owuak(...args: any[]): any;
declare module "@acord/extensions/load" { export = ____0j681i0owuak; }

//#region nests
declare module "@acord/extensions/nests" { export = ____0e0smfbq0pic } 

//#region loaded
declare module "@acord/extensions/nests/loaded" { export = ____0a71adcegl9u } 

//#region ghost
declare module "@acord/extensions/nests/loaded/ghost" { export = ____0v802vwf92ep } 

const ____0v802vwf92ep = {  }
//#endregion

//#region store
declare module "@acord/extensions/nests/loaded/store" { export = ____0c3dr1jebo87 } 

const ____0c3dr1jebo87 = {  }
//#endregion

const ____0a71adcegl9u = { ghost: ____0v802vwf92ep, store: ____0c3dr1jebo87 }
//#endregion

//#region enabled
declare module "@acord/extensions/nests/enabled" { export = ____016nu0u0usws } 

//#region ghost
declare module "@acord/extensions/nests/enabled/ghost" { export = ____0iuf2cs1sqff } 

const ____0iuf2cs1sqff = {  }
//#endregion

//#region store
declare module "@acord/extensions/nests/enabled/store" { export = ____01dswlakm87ee } 

const ____01dswlakm87ee = {  }
//#endregion

const ____016nu0u0usws = { ghost: ____0iuf2cs1sqff, store: ____01dswlakm87ee }
//#endregion

const ____0e0smfbq0pic = { loaded: ____0a71adcegl9u, enabled: ____016nu0u0usws }
//#endregion

function ____09v92gbvii5k(...args: any[]): any;
declare module "@acord/extensions/reload" { export = ____09v92gbvii5k; }

function ____0mnibtcdj6tg(...args: any[]): any;
declare module "@acord/extensions/reloadAll" { export = ____0mnibtcdj6tg; }

function ____02jc5oeeatki(...args: any[]): any;
declare module "@acord/extensions/remove" { export = ____02jc5oeeatki; }

function ____0rcsch0pt0fq(...args: any[]): any;
declare module "@acord/extensions/start" { export = ____0rcsch0pt0fq; }

function ____0i0u0a45j72s(...args: any[]): any;
declare module "@acord/extensions/startAll" { export = ____0i0u0a45j72s; }

function ____0k1tc7ouetrp(...args: any[]): any;
declare module "@acord/extensions/stop" { export = ____0k1tc7ouetrp; }

function ____03o07di3lemdk(...args: any[]): any;
declare module "@acord/extensions/stopAll" { export = ____03o07di3lemdk; }

function ____069lh3f4tpm(...args: any[]): any;
declare module "@acord/extensions/toggle" { export = ____069lh3f4tpm; }

const ____0el8qio717ro = { evaluate: ____0ql98gnuvw3j, load: ____0j681i0owuak, nests: ____0e0smfbq0pic, reload: ____09v92gbvii5k, reloadAll: ____0mnibtcdj6tg, remove: ____02jc5oeeatki, start: ____0rcsch0pt0fq, startAll: ____0i0u0a45j72s, stop: ____0k1tc7ouetrp, stopAll: ____03o07di3lemdk, toggle: ____069lh3f4tpm }
//#endregion

//#region i18n
declare module "@acord/i18n" { export = ____0l4ec28b1k4h } 

//#region messages
declare module "@acord/i18n/messages" { export = ____0h95pqd42br8 } 

const ____0h95pqd42br8 = {  }
//#endregion

function ____04267j6p31bug(...args: any[]): any;
declare module "@acord/i18n/format" { export = ____04267j6p31bug; }

const ____090vw5ces022 = "en_US"
declare module "@acord/i18n/locale" { export = ____090vw5ces022; }

const ____0l4ec28b1k4h = { messages: ____0h95pqd42br8, format: ____04267j6p31bug, locale: ____090vw5ces022 }
//#endregion

//#region modules
declare module "@acord/modules" { export = ____0vk71kahqveq } 

//#region common
declare module "@acord/modules/common" { export = ____0gkhhj2jq1a7 } 

//#region ActivityStore
declare module "@acord/modules/common/ActivityStore" { export = ____0lk5ashk2h4t } 

function ____03sp0d3a9nfwe(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/findActivity" { export = ____03sp0d3a9nfwe; }

function ____0b299lta9plo(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/getActivities" { export = ____0b299lta9plo; }

function ____0km22jqjr6rk(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/getActivityMetadata" { export = ____0km22jqjr6rk; }

function ____0qalqv8qsc79(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/getAllApplicationActivities" { export = ____0qalqv8qsc79; }

function ____0re624e62tg(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/getPrimaryActivity" { export = ____0re624e62tg; }

function ____0n8wbp2lonit(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/getState" { export = ____0n8wbp2lonit; }

function ____0bs1twereeaa(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/getStatus" { export = ____0bs1twereeaa; }

function ____0a9l5gkni6fi(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/getUserIds" { export = ____0a9l5gkni6fi; }

function ____0i75a9rt2oia(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/isMobileOnline" { export = ____0i75a9rt2oia; }

function ____0d7luede71f2(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/setCurrentUserOnConnectionOpen" { export = ____0d7luede71f2; }

function ____04bm6gr889vq(...args: any[]): any;
declare module "@acord/modules/common/ActivityStore/__getLocalVars" { export = ____04bm6gr889vq; }

const ____0lk5ashk2h4t = { findActivity: ____03sp0d3a9nfwe, getActivities: ____0b299lta9plo, getActivityMetadata: ____0km22jqjr6rk, getAllApplicationActivities: ____0qalqv8qsc79, getPrimaryActivity: ____0re624e62tg, getState: ____0n8wbp2lonit, getStatus: ____0bs1twereeaa, getUserIds: ____0a9l5gkni6fi, isMobileOnline: ____0i75a9rt2oia, setCurrentUserOnConnectionOpen: ____0d7luede71f2, __getLocalVars: ____04bm6gr889vq }
//#endregion

function ____05l1d4sc34rt(...args: any[]): any;
declare module "@acord/modules/common/Button" { export = ____05l1d4sc34rt; }

//#region ChannelStore
declare module "@acord/modules/common/ChannelStore" { export = ____0pnp7hd3eefb } 

function ____0nf2v0cfcbf8(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getAllThreadsForParent" { export = ____0nf2v0cfcbf8; }

function ____0jpc9uqtowk7(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getBasicChannel" { export = ____0jpc9uqtowk7; }

function ____0h43baobc26b(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getCachedChannelJsonForGuild" { export = ____0h43baobc26b; }

function ____0c3j3dlj3o5o(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getChannel" { export = ____0c3j3dlj3o5o; }

function ____076g92hiucq8(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getDMFromUserId" { export = ____076g92hiucq8; }

function ____0j1bsup5pa3m(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getDMUserIds" { export = ____0j1bsup5pa3m; }

function ____0neijrjbhrdi(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getGuildChannelsVersion" { export = ____0neijrjbhrdi; }

function ____01akm201w4st(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getInitialOverlayState" { export = ____01akm201w4st; }

function ____0eirpb8draq1(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getMutableBasicGuildChannelsForGuild" { export = ____0eirpb8draq1; }

function ____0p8dc92r743a(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getMutableGuildChannelsForGuild" { export = ____0p8dc92r743a; }

function ____0l2tod2ca1p(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getMutablePrivateChannels" { export = ____0l2tod2ca1p; }

function ____03e1g7j3b1ak(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getPrivateChannelsVersion" { export = ____03e1g7j3b1ak; }

function ____0sg8c1uiscei(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/getSortedPrivateChannels" { export = ____0sg8c1uiscei; }

function ____0hb1ukmjg4we(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/hasChannel" { export = ____0hb1ukmjg4we; }

function ____00vk94pj5jww7(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/hasRestoredGuild" { export = ____00vk94pj5jww7; }

function ____0c24d10snc2(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/loadAllGuildAndPrivateChannelsFromDisk" { export = ____0c24d10snc2; }

function ____05orj6rh0kg4(...args: any[]): any;
declare module "@acord/modules/common/ChannelStore/__getLocalVars" { export = ____05orj6rh0kg4; }

const ____0pnp7hd3eefb = { getAllThreadsForParent: ____0nf2v0cfcbf8, getBasicChannel: ____0jpc9uqtowk7, getCachedChannelJsonForGuild: ____0h43baobc26b, getChannel: ____0c3j3dlj3o5o, getDMFromUserId: ____076g92hiucq8, getDMUserIds: ____0j1bsup5pa3m, getGuildChannelsVersion: ____0neijrjbhrdi, getInitialOverlayState: ____01akm201w4st, getMutableBasicGuildChannelsForGuild: ____0eirpb8draq1, getMutableGuildChannelsForGuild: ____0p8dc92r743a, getMutablePrivateChannels: ____0l2tod2ca1p, getPrivateChannelsVersion: ____03e1g7j3b1ak, getSortedPrivateChannels: ____0sg8c1uiscei, hasChannel: ____0hb1ukmjg4we, hasRestoredGuild: ____00vk94pj5jww7, loadAllGuildAndPrivateChannelsFromDisk: ____0c24d10snc2, __getLocalVars: ____05orj6rh0kg4 }
//#endregion

//#region DiscordAPI
declare module "@acord/modules/common/DiscordAPI" { export = ____05qjhd7sffmm } 

function ____03946dfl00wn(...args: any[]): any;
declare module "@acord/modules/common/DiscordAPI/delete" { export = ____03946dfl00wn; }

function ____068fw74m8g6m(...args: any[]): any;
declare module "@acord/modules/common/DiscordAPI/get" { export = ____068fw74m8g6m; }

function ____0moaihlsmis5(...args: any[]): any;
declare module "@acord/modules/common/DiscordAPI/patch" { export = ____0moaihlsmis5; }

function ____086qocsjkt2a(...args: any[]): any;
declare module "@acord/modules/common/DiscordAPI/post" { export = ____086qocsjkt2a; }

function ____0t41lfa1har(...args: any[]): any;
declare module "@acord/modules/common/DiscordAPI/put" { export = ____0t41lfa1har; }

const ____05qjhd7sffmm = { delete: ____03946dfl00wn, get: ____068fw74m8g6m, patch: ____0moaihlsmis5, post: ____086qocsjkt2a, put: ____0t41lfa1har }
//#endregion

//#region Flux
declare module "@acord/modules/common/Flux" { export = ____0piv5r26gqaa } 

const ____0piv5r26gqaa = {  }
//#endregion

//#region FluxDispatcher
declare module "@acord/modules/common/FluxDispatcher" { export = ____0avhpvmf236b } 

function ____0hnc3r1c04s(...args: any[]): any;
declare module "@acord/modules/common/FluxDispatcher/subscribe" { export = ____0hnc3r1c04s; }

function ____0u1w1aa40jnm(...args: any[]): any;
declare module "@acord/modules/common/FluxDispatcher/unsubscribe" { export = ____0u1w1aa40jnm; }

function ____0famqhov39q(...args: any[]): any;
declare module "@acord/modules/common/FluxDispatcher/dispatch" { export = ____0famqhov39q; }

const ____0avhpvmf236b = { subscribe: ____0hnc3r1c04s, unsubscribe: ____0u1w1aa40jnm, dispatch: ____0famqhov39q }
//#endregion

//#region GuildMemberStore
declare module "@acord/modules/common/GuildMemberStore" { export = ____0oscstih861 } 

function ____01tb7stfkgmv9(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/getCommunicationDisabledUserMap" { export = ____01tb7stfkgmv9; }

function ____0g75d27flll9(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/getCommunicationDisabledVersion" { export = ____0g75d27flll9; }

function ____0lpt1kjsn2hg(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/getMember" { export = ____0lpt1kjsn2hg; }

function ____0bjcv3lsqs0q(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/getMemberIds" { export = ____0bjcv3lsqs0q; }

function ____0bt4fsh9r8qi(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/getMembers" { export = ____0bt4fsh9r8qi; }

function ____0vmn5bd4e43r(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/getMutableAllGuildsAndMembers" { export = ____0vmn5bd4e43r; }

function ____0nwos4qj6399(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/getNick" { export = ____0nwos4qj6399; }

function ____086g0krpq9n7(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/getNicknameGuildsMapping" { export = ____086g0krpq9n7; }

function ____0h13g1rtia7u(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/getNicknames" { export = ____0h13g1rtia7u; }

function ____0bs127co858h(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/getSelfMember" { export = ____0bs127co858h; }

function ____0u26w9540cei(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/initialize" { export = ____0u26w9540cei; }

function ____043tqav92v9df(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/isMember" { export = ____043tqav92v9df; }

function ____0pp53d8kgi5s(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/memberOf" { export = ____0pp53d8kgi5s; }

function ____0gwlb2g69ob(...args: any[]): any;
declare module "@acord/modules/common/GuildMemberStore/__getLocalVars" { export = ____0gwlb2g69ob; }

const ____0oscstih861 = { getCommunicationDisabledUserMap: ____01tb7stfkgmv9, getCommunicationDisabledVersion: ____0g75d27flll9, getMember: ____0lpt1kjsn2hg, getMemberIds: ____0bjcv3lsqs0q, getMembers: ____0bt4fsh9r8qi, getMutableAllGuildsAndMembers: ____0vmn5bd4e43r, getNick: ____0nwos4qj6399, getNicknameGuildsMapping: ____086g0krpq9n7, getNicknames: ____0h13g1rtia7u, getSelfMember: ____0bs127co858h, initialize: ____0u26w9540cei, isMember: ____043tqav92v9df, memberOf: ____0pp53d8kgi5s, __getLocalVars: ____0gwlb2g69ob }
//#endregion

//#region InviteStore
declare module "@acord/modules/common/InviteStore" { export = ____0ccj22iqw8bj } 

function ____09jhe70o87oe(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/acceptInvite" { export = ____09jhe70o87oe; }

function ____0l81kt893u2g(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/acceptInviteAndTransitionToInviteChannel" { export = ____0l81kt893u2g; }

function ____04q5adughhav(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/createFriendInvite" { export = ____04q5adughhav; }

function ____070jh7susit7(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/createInvite" { export = ____070jh7susit7; }

function ____0v9664rdk1n(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/getAllFriendInvites" { export = ____0v9664rdk1n; }

function ____0dw9oha695bs(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/getInviteContext" { export = ____0dw9oha695bs; }

function ____09ai1uib7gu2(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/openApp" { export = ____09ai1uib7gu2; }

function ____0ag5q6gk5dk(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/openNativeAppModal" { export = ____0ag5q6gk5dk; }

function ____019u9sal4tu4(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/resolveInvite" { export = ____019u9sal4tu4; }

function ____0n8tljgljma3(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/revokeFriendInvites" { export = ____0n8tljgljma3; }

function ____02rru6rs8gd9(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/revokeInvite" { export = ____02rru6rs8gd9; }

function ____0favdlqngc3f(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/transitionToInvite" { export = ____0favdlqngc3f; }

function ____0b8kl0uhul2u(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/transitionToInviteChannelSync" { export = ____0b8kl0uhul2u; }

function ____0tjj4h03rhio(...args: any[]): any;
declare module "@acord/modules/common/InviteStore/transitionToInviteSync" { export = ____0tjj4h03rhio; }

const ____0ccj22iqw8bj = { acceptInvite: ____09jhe70o87oe, acceptInviteAndTransitionToInviteChannel: ____0l81kt893u2g, createFriendInvite: ____04q5adughhav, createInvite: ____070jh7susit7, getAllFriendInvites: ____0v9664rdk1n, getInviteContext: ____0dw9oha695bs, openApp: ____09ai1uib7gu2, openNativeAppModal: ____0ag5q6gk5dk, resolveInvite: ____019u9sal4tu4, revokeFriendInvites: ____0n8tljgljma3, revokeInvite: ____02rru6rs8gd9, transitionToInvite: ____0favdlqngc3f, transitionToInviteChannelSync: ____0b8kl0uhul2u, transitionToInviteSync: ____0tjj4h03rhio }
//#endregion

function ____01c34245bvo1c(...args: any[]): any;
declare module "@acord/modules/common/Markdown" { export = ____01c34245bvo1c; }

//#region MessageStore
declare module "@acord/modules/common/MessageStore" { export = ____0nqi6lt0hs5a } 

function ____0d53ees7hrf(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/focusedMessageId" { export = ____0d53ees7hrf; }

function ____03bn37ipl0gh(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/getLastCommandMessage" { export = ____03bn37ipl0gh; }

function ____0wbq2empl0al(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/getLastEditableMessage" { export = ____0wbq2empl0al; }

function ____0m0fw5obqjgb(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/getMessage" { export = ____0m0fw5obqjgb; }

function ____0raivln3di3f(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/getMessages" { export = ____0raivln3di3f; }

function ____0sgacehl6rv7(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/getRawMessages" { export = ____0sgacehl6rv7; }

function ____0hop6barh7uj(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/hasCurrentUserSentMessage" { export = ____0hop6barh7uj; }

function ____0lf39owerpoc(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/hasPresent" { export = ____0lf39owerpoc; }

function ____0k8du3qc169m(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/initialize" { export = ____0k8du3qc169m; }

function ____09i9rqubg6f9(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/isLoadingMessages" { export = ____09i9rqubg6f9; }

function ____00u5wsv8li6qg(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/jumpedMessageId" { export = ____00u5wsv8li6qg; }

function ____0s8eavp0w4a6(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/whenReady" { export = ____0s8eavp0w4a6; }

function ____0wb1t1w8875g(...args: any[]): any;
declare module "@acord/modules/common/MessageStore/__getLocalVars" { export = ____0wb1t1w8875g; }

const ____0nqi6lt0hs5a = { focusedMessageId: ____0d53ees7hrf, getLastCommandMessage: ____03bn37ipl0gh, getLastEditableMessage: ____0wbq2empl0al, getMessage: ____0m0fw5obqjgb, getMessages: ____0raivln3di3f, getRawMessages: ____0sgacehl6rv7, hasCurrentUserSentMessage: ____0hop6barh7uj, hasPresent: ____0lf39owerpoc, initialize: ____0k8du3qc169m, isLoadingMessages: ____09i9rqubg6f9, jumpedMessageId: ____00u5wsv8li6qg, whenReady: ____0s8eavp0w4a6, __getLocalVars: ____0wb1t1w8875g }
//#endregion

//#region NoteStore
declare module "@acord/modules/common/NoteStore" { export = ____0w24khutt7wt } 

function ____05j4ruhwe0n8(...args: any[]): any;
declare module "@acord/modules/common/NoteStore/getNote" { export = ____05j4ruhwe0n8; }

function ____0v8q0165tsjh(...args: any[]): any;
declare module "@acord/modules/common/NoteStore/__getLocalVars" { export = ____0v8q0165tsjh; }

const ____0w24khutt7wt = { getNote: ____05j4ruhwe0n8, __getLocalVars: ____0v8q0165tsjh }
//#endregion

//#region PermissionStore
declare module "@acord/modules/common/PermissionStore" { export = ____0utw4j72tkec } 

function ____0s4si63ssjb(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/can" { export = ____0s4si63ssjb; }

function ____05e69jf0a31u(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/canAccessGuildSettings" { export = ____05e69jf0a31u; }

function ____0adjrcbf3aib(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/canManageUser" { export = ____0adjrcbf3aib; }

function ____0d64qnth2u1h(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/canWithPartialContext" { export = ____0d64qnth2u1h; }

function ____06cbu5q0noce(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/computePermissions" { export = ____06cbu5q0noce; }

function ____06ounc0u74j4(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/getChannelPermissions" { export = ____06ounc0u74j4; }

function ____00quaprh5ui1(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/getChannelsVersion" { export = ____00quaprh5ui1; }

function ____0wqjd4pkga15(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/getGuildPermissionProps" { export = ____0wqjd4pkga15; }

function ____02ua7ui9el2j(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/getGuildPermissions" { export = ____02ua7ui9el2j; }

function ____01fhgh4p5sjd(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/getGuildVersion" { export = ____01fhgh4p5sjd; }

function ____0sd39ps1t0op(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/getHighestRole" { export = ____0sd39ps1t0op; }

function ____0c66p020mvfl(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/initialize" { export = ____0c66p020mvfl; }

function ____0wk99plhqrrn(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/isRoleHigher" { export = ____0wk99plhqrrn; }

function ____00w7w55cgh1g(...args: any[]): any;
declare module "@acord/modules/common/PermissionStore/__getLocalVars" { export = ____00w7w55cgh1g; }

const ____0utw4j72tkec = { can: ____0s4si63ssjb, canAccessGuildSettings: ____05e69jf0a31u, canManageUser: ____0adjrcbf3aib, canWithPartialContext: ____0d64qnth2u1h, computePermissions: ____06cbu5q0noce, getChannelPermissions: ____06ounc0u74j4, getChannelsVersion: ____00quaprh5ui1, getGuildPermissionProps: ____0wqjd4pkga15, getGuildPermissions: ____02ua7ui9el2j, getGuildVersion: ____01fhgh4p5sjd, getHighestRole: ____0sd39ps1t0op, initialize: ____0c66p020mvfl, isRoleHigher: ____0wk99plhqrrn, __getLocalVars: ____00w7w55cgh1g }
//#endregion

//#region React
declare module "@acord/modules/common/React" { export = ____0r50219i9n8r } 

function ____07fcmictiiju(...args: any[]): any;
declare module "@acord/modules/common/React/cloneElement" { export = ____07fcmictiiju; }

function ____0nach0aavui(...args: any[]): any;
declare module "@acord/modules/common/React/createContext" { export = ____0nach0aavui; }

function ____0kw5uvnw1387(...args: any[]): any;
declare module "@acord/modules/common/React/createElement" { export = ____0kw5uvnw1387; }

function ____0qwsuo1g16qb(...args: any[]): any;
declare module "@acord/modules/common/React/createFactory" { export = ____0qwsuo1g16qb; }

function ____0gmj0so5i3lm(...args: any[]): any;
declare module "@acord/modules/common/React/createRef" { export = ____0gmj0so5i3lm; }

function ____06plim3u5vrs(...args: any[]): any;
declare module "@acord/modules/common/React/forwardRef" { export = ____06plim3u5vrs; }

function ____08r95vmjui9(...args: any[]): any;
declare module "@acord/modules/common/React/isValidElement" { export = ____08r95vmjui9; }

function ____0j95pdurqvq8(...args: any[]): any;
declare module "@acord/modules/common/React/lazy" { export = ____0j95pdurqvq8; }

function ____0tma2wf99mpj(...args: any[]): any;
declare module "@acord/modules/common/React/memo" { export = ____0tma2wf99mpj; }

function ____0phi06a59ork(...args: any[]): any;
declare module "@acord/modules/common/React/useCallback" { export = ____0phi06a59ork; }

function ____0np5e8vwvr4f(...args: any[]): any;
declare module "@acord/modules/common/React/useContext" { export = ____0np5e8vwvr4f; }

function ____0nvs4ht0idb9(...args: any[]): any;
declare module "@acord/modules/common/React/useDebugValue" { export = ____0nvs4ht0idb9; }

function ____0d72ponvwid(...args: any[]): any;
declare module "@acord/modules/common/React/useEffect" { export = ____0d72ponvwid; }

function ____0ilt3gq9n33m(...args: any[]): any;
declare module "@acord/modules/common/React/useImperativeHandle" { export = ____0ilt3gq9n33m; }

function ____0i3kw0lotf4r(...args: any[]): any;
declare module "@acord/modules/common/React/useLayoutEffect" { export = ____0i3kw0lotf4r; }

function ____0aedcn0o4owr(...args: any[]): any;
declare module "@acord/modules/common/React/useMemo" { export = ____0aedcn0o4owr; }

function ____0so5pawc2bt(...args: any[]): any;
declare module "@acord/modules/common/React/useReducer" { export = ____0so5pawc2bt; }

function ____018osqmiibpi(...args: any[]): any;
declare module "@acord/modules/common/React/useRef" { export = ____018osqmiibpi; }

function ____0gbhfwrb1hvk(...args: any[]): any;
declare module "@acord/modules/common/React/useState" { export = ____0gbhfwrb1hvk; }

const ____0r50219i9n8r = { cloneElement: ____07fcmictiiju, createContext: ____0nach0aavui, createElement: ____0kw5uvnw1387, createFactory: ____0qwsuo1g16qb, createRef: ____0gmj0so5i3lm, forwardRef: ____06plim3u5vrs, isValidElement: ____08r95vmjui9, lazy: ____0j95pdurqvq8, memo: ____0tma2wf99mpj, useCallback: ____0phi06a59ork, useContext: ____0np5e8vwvr4f, useDebugValue: ____0nvs4ht0idb9, useEffect: ____0d72ponvwid, useImperativeHandle: ____0ilt3gq9n33m, useLayoutEffect: ____0i3kw0lotf4r, useMemo: ____0aedcn0o4owr, useReducer: ____0so5pawc2bt, useRef: ____018osqmiibpi, useState: ____0gbhfwrb1hvk }
//#endregion

//#region ReactDOM
declare module "@acord/modules/common/ReactDOM" { export = ____09qq9k9grlus } 

const ____09qq9k9grlus = {  }
//#endregion

//#region RelationshipStore
declare module "@acord/modules/common/RelationshipStore" { export = ____02wolv9ek8ibe } 

function ____06o29bvmp7th(...args: any[]): any;
declare module "@acord/modules/common/RelationshipStore/getFriendIDs" { export = ____06o29bvmp7th; }

function ____0poc32qw6qq5(...args: any[]): any;
declare module "@acord/modules/common/RelationshipStore/getNickname" { export = ____0poc32qw6qq5; }

function ____0qviswdvm11h(...args: any[]): any;
declare module "@acord/modules/common/RelationshipStore/getPendingCount" { export = ____0qviswdvm11h; }

function ____0vj6ap154hl(...args: any[]): any;
declare module "@acord/modules/common/RelationshipStore/getRelationshipCount" { export = ____0vj6ap154hl; }

function ____0w55wkn3ap7(...args: any[]): any;
declare module "@acord/modules/common/RelationshipStore/getRelationshipType" { export = ____0w55wkn3ap7; }

function ____0ecitvg0nbep(...args: any[]): any;
declare module "@acord/modules/common/RelationshipStore/getRelationships" { export = ____0ecitvg0nbep; }

function ____02coour9knpv(...args: any[]): any;
declare module "@acord/modules/common/RelationshipStore/initialize" { export = ____02coour9knpv; }

function ____08swq7w67rhk(...args: any[]): any;
declare module "@acord/modules/common/RelationshipStore/isBlocked" { export = ____08swq7w67rhk; }

function ____0sbu12bh41i5(...args: any[]): any;
declare module "@acord/modules/common/RelationshipStore/isFriend" { export = ____0sbu12bh41i5; }

function ____0r5rpadridpg(...args: any[]): any;
declare module "@acord/modules/common/RelationshipStore/__getLocalVars" { export = ____0r5rpadridpg; }

const ____02wolv9ek8ibe = { getFriendIDs: ____06o29bvmp7th, getNickname: ____0poc32qw6qq5, getPendingCount: ____0qviswdvm11h, getRelationshipCount: ____0vj6ap154hl, getRelationshipType: ____0w55wkn3ap7, getRelationships: ____0ecitvg0nbep, initialize: ____02coour9knpv, isBlocked: ____08swq7w67rhk, isFriend: ____0sbu12bh41i5, __getLocalVars: ____0r5rpadridpg }
//#endregion

//#region Router
declare module "@acord/modules/common/Router" { export = ____0w1hrwe48npt } 

function ____0idps53wkj9n(...args: any[]): any;
declare module "@acord/modules/common/Router/replaceWith" { export = ____0idps53wkj9n; }

function ____0j377cfhflgs(...args: any[]): any;
declare module "@acord/modules/common/Router/transitionTo" { export = ____0j377cfhflgs; }

function ____0s7vc2w1h78f(...args: any[]): any;
declare module "@acord/modules/common/Router/transitionToGuild" { export = ____0s7vc2w1h78f; }

const ____0w1hrwe48npt = { replaceWith: ____0idps53wkj9n, transitionTo: ____0j377cfhflgs, transitionToGuild: ____0s7vc2w1h78f }
//#endregion

//#region SelectedChannelStore
declare module "@acord/modules/common/SelectedChannelStore" { export = ____0h5lit15osr5 } 

function ____0a7rbscvqb9(...args: any[]): any;
declare module "@acord/modules/common/SelectedChannelStore/getChannelId" { export = ____0a7rbscvqb9; }

function ____0l6pvjk3wjqh(...args: any[]): any;
declare module "@acord/modules/common/SelectedChannelStore/getCurrentlySelectedChannelId" { export = ____0l6pvjk3wjqh; }

function ____0t7cqm1psh0n(...args: any[]): any;
declare module "@acord/modules/common/SelectedChannelStore/getLastChannelFollowingDestination" { export = ____0t7cqm1psh0n; }

function ____0dq3konnvwme(...args: any[]): any;
declare module "@acord/modules/common/SelectedChannelStore/getLastSelectedChannelId" { export = ____0dq3konnvwme; }

function ____0d54bsc6k8sc(...args: any[]): any;
declare module "@acord/modules/common/SelectedChannelStore/getLastSelectedChannels" { export = ____0d54bsc6k8sc; }

function ____0nfud8o8qwfi(...args: any[]): any;
declare module "@acord/modules/common/SelectedChannelStore/getMostRecentSelectedTextChannelId" { export = ____0nfud8o8qwfi; }

function ____05m3322q5ah8(...args: any[]): any;
declare module "@acord/modules/common/SelectedChannelStore/getVoiceChannelId" { export = ____05m3322q5ah8; }

function ____0utjkbqj457q(...args: any[]): any;
declare module "@acord/modules/common/SelectedChannelStore/initialize" { export = ____0utjkbqj457q; }

function ____05qc2g5l6tql(...args: any[]): any;
declare module "@acord/modules/common/SelectedChannelStore/__getLocalVars" { export = ____05qc2g5l6tql; }

const ____0h5lit15osr5 = { getChannelId: ____0a7rbscvqb9, getCurrentlySelectedChannelId: ____0l6pvjk3wjqh, getLastChannelFollowingDestination: ____0t7cqm1psh0n, getLastSelectedChannelId: ____0dq3konnvwme, getLastSelectedChannels: ____0d54bsc6k8sc, getMostRecentSelectedTextChannelId: ____0nfud8o8qwfi, getVoiceChannelId: ____05m3322q5ah8, initialize: ____0utjkbqj457q, __getLocalVars: ____05qc2g5l6tql }
//#endregion

//#region SelectedGuildStore
declare module "@acord/modules/common/SelectedGuildStore" { export = ____03usq0svr7rmd } 

function ____017f54it8e7qq(...args: any[]): any;
declare module "@acord/modules/common/SelectedGuildStore/getGuildId" { export = ____017f54it8e7qq; }

function ____0p0pwmao32li(...args: any[]): any;
declare module "@acord/modules/common/SelectedGuildStore/getLastSelectedGuildId" { export = ____0p0pwmao32li; }

function ____0q3jv03lvpqk(...args: any[]): any;
declare module "@acord/modules/common/SelectedGuildStore/getLastSelectedTimestamp" { export = ____0q3jv03lvpqk; }

function ____07chr6o8gv0m(...args: any[]): any;
declare module "@acord/modules/common/SelectedGuildStore/getState" { export = ____07chr6o8gv0m; }

function ____08w4bwukns07(...args: any[]): any;
declare module "@acord/modules/common/SelectedGuildStore/initialize" { export = ____08w4bwukns07; }

function ____0j0q3s74v4n(...args: any[]): any;
declare module "@acord/modules/common/SelectedGuildStore/__getLocalVars" { export = ____0j0q3s74v4n; }

const ____03usq0svr7rmd = { getGuildId: ____017f54it8e7qq, getLastSelectedGuildId: ____0p0pwmao32li, getLastSelectedTimestamp: ____0q3jv03lvpqk, getState: ____07chr6o8gv0m, initialize: ____08w4bwukns07, __getLocalVars: ____0j0q3s74v4n }
//#endregion

//#region SimpleMarkdown
declare module "@acord/modules/common/SimpleMarkdown" { export = ____04f43blognls } 

function ____0fjhssmfsh1d(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/ReactMarkdown" { export = ____0fjhssmfsh1d; }

function ____0epi970v38bb(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/anyScopeRegex" { export = ____0epi970v38bb; }

function ____0tlsp1ljg6dm(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/blockRegex" { export = ____0tlsp1ljg6dm; }

function ____02ja8kqm1urw(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/defaultBlockParse" { export = ____02ja8kqm1urw; }

function ____0fbossuuswu7(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/defaultHtmlOutput" { export = ____0fbossuuswu7; }

function ____0fdhkf5sw65g(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/defaultImplicitParse" { export = ____0fdhkf5sw65g; }

function ____0dn2m4bis9t3(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/defaultInlineParse" { export = ____0dn2m4bis9t3; }

function ____0gnp2scqiwpq(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/defaultOutput" { export = ____0gnp2scqiwpq; }

function ____0h0an68edmaq(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/defaultParse" { export = ____0h0an68edmaq; }

function ____0btncrnwf1jj(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/defaultRawParse" { export = ____0btncrnwf1jj; }

function ____05t6hhu4it1a(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/defaultReactOutput" { export = ____05t6hhu4it1a; }

//#region defaultRules
declare module "@acord/modules/common/SimpleMarkdown/defaultRules" { export = ____0guqp06gq78 } 

const ____0guqp06gq78 = {  }
//#endregion

function ____02qu1u0a1mha(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/htmlFor" { export = ____02qu1u0a1mha; }

function ____0rkfknqq3c2e(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/htmlTag" { export = ____0rkfknqq3c2e; }

function ____0duhte6amo14(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/inlineRegex" { export = ____0duhte6amo14; }

function ____0jpim64kpnp4(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/markdownToHtml" { export = ____0jpim64kpnp4; }

function ____09d3brub3cpo(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/markdownToReact" { export = ____09d3brub3cpo; }

function ____0fs9ej70267i(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/outputFor" { export = ____0fs9ej70267i; }

function ____02g96cuka00b(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/parseBlock" { export = ____02g96cuka00b; }

function ____0b2kof1s9k8a(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/parseInline" { export = ____0b2kof1s9k8a; }

function ____0f79inw5r7au(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/parserFor" { export = ____0f79inw5r7au; }

function ____0ow8ho9pp9oj(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/preprocess" { export = ____0ow8ho9pp9oj; }

function ____09w14dd8op38(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/reactElement" { export = ____09w14dd8op38; }

function ____0vfhsefk5bqs(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/reactFor" { export = ____0vfhsefk5bqs; }

function ____06ud0kmuw5ai(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/ruleOutput" { export = ____06ud0kmuw5ai; }

function ____0lwtuq1cwsk(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/sanitizeText" { export = ____0lwtuq1cwsk; }

function ____0pgd8gm7pf8d(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/sanitizeUrl" { export = ____0pgd8gm7pf8d; }

function ____034cva9cthav(...args: any[]): any;
declare module "@acord/modules/common/SimpleMarkdown/unescapeUrl" { export = ____034cva9cthav; }

const ____04f43blognls = { ReactMarkdown: ____0fjhssmfsh1d, anyScopeRegex: ____0epi970v38bb, blockRegex: ____0tlsp1ljg6dm, defaultBlockParse: ____02ja8kqm1urw, defaultHtmlOutput: ____0fbossuuswu7, defaultImplicitParse: ____0fdhkf5sw65g, defaultInlineParse: ____0dn2m4bis9t3, defaultOutput: ____0gnp2scqiwpq, defaultParse: ____0h0an68edmaq, defaultRawParse: ____0btncrnwf1jj, defaultReactOutput: ____05t6hhu4it1a, defaultRules: ____0guqp06gq78, htmlFor: ____02qu1u0a1mha, htmlTag: ____0rkfknqq3c2e, inlineRegex: ____0duhte6amo14, markdownToHtml: ____0jpim64kpnp4, markdownToReact: ____09d3brub3cpo, outputFor: ____0fs9ej70267i, parseBlock: ____02g96cuka00b, parseInline: ____0b2kof1s9k8a, parserFor: ____0f79inw5r7au, preprocess: ____0ow8ho9pp9oj, reactElement: ____09w14dd8op38, reactFor: ____0vfhsefk5bqs, ruleOutput: ____06ud0kmuw5ai, sanitizeText: ____0lwtuq1cwsk, sanitizeUrl: ____0pgd8gm7pf8d, unescapeUrl: ____034cva9cthav }
//#endregion

//#region TypingStore
declare module "@acord/modules/common/TypingStore" { export = ____0vmn3hpi0bkk } 

function ____039h271abkhg(...args: any[]): any;
declare module "@acord/modules/common/TypingStore/getTypingUsers" { export = ____039h271abkhg; }

function ____0ojjitprj775(...args: any[]): any;
declare module "@acord/modules/common/TypingStore/isTyping" { export = ____0ojjitprj775; }

function ____0tiovivgk683(...args: any[]): any;
declare module "@acord/modules/common/TypingStore/__getLocalVars" { export = ____0tiovivgk683; }

const ____0vmn3hpi0bkk = { getTypingUsers: ____039h271abkhg, isTyping: ____0ojjitprj775, __getLocalVars: ____0tiovivgk683 }
//#endregion

//#region UserStore
declare module "@acord/modules/common/UserStore" { export = ____0g7alaabtt7i } 

function ____0uw291vmv3kb(...args: any[]): any;
declare module "@acord/modules/common/UserStore/filter" { export = ____0uw291vmv3kb; }

function ____04pf4wwtcm8a(...args: any[]): any;
declare module "@acord/modules/common/UserStore/findByTag" { export = ____04pf4wwtcm8a; }

function ____0ibpvv35t8r(...args: any[]): any;
declare module "@acord/modules/common/UserStore/forEach" { export = ____0ibpvv35t8r; }

function ____01rwwkkrt2sti(...args: any[]): any;
declare module "@acord/modules/common/UserStore/getCurrentUser" { export = ____01rwwkkrt2sti; }

function ____0dlrqgmbkbph(...args: any[]): any;
declare module "@acord/modules/common/UserStore/getUser" { export = ____0dlrqgmbkbph; }

function ____0v95lwujeni(...args: any[]): any;
declare module "@acord/modules/common/UserStore/getUsers" { export = ____0v95lwujeni; }

function ____0cmol28ds2vq(...args: any[]): any;
declare module "@acord/modules/common/UserStore/initialize" { export = ____0cmol28ds2vq; }

function ____0ewv5heolbme(...args: any[]): any;
declare module "@acord/modules/common/UserStore/__getLocalVars" { export = ____0ewv5heolbme; }

const ____0g7alaabtt7i = { filter: ____0uw291vmv3kb, findByTag: ____04pf4wwtcm8a, forEach: ____0ibpvv35t8r, getCurrentUser: ____01rwwkkrt2sti, getUser: ____0dlrqgmbkbph, getUsers: ____0v95lwujeni, initialize: ____0cmol28ds2vq, __getLocalVars: ____0ewv5heolbme }
//#endregion

//#region VoiceStateStore
declare module "@acord/modules/common/VoiceStateStore" { export = ____0sjr8f0p98v } 

function ____0kebt9falhvf(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/getAllVoiceStates" { export = ____0kebt9falhvf; }

function ____0sne4hanq5dt(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/getCurrentClientVoiceChannelId" { export = ____0sne4hanq5dt; }

function ____011pste9uloh8(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/getUserVoiceChannelId" { export = ____011pste9uloh8; }

function ____0efes35i3f66(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/getVideoVoiceStatesForChannel" { export = ____0efes35i3f66; }

function ____0gd536416m28(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/getVoiceState" { export = ____0gd536416m28; }

function ____0q0matp8ns2a(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/getVoiceStateForChannel" { export = ____0q0matp8ns2a; }

function ____05f5niojc64m(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/getVoiceStateForSession" { export = ____05f5niojc64m; }

function ____0pvn29c9t63(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/getVoiceStateForUser" { export = ____0pvn29c9t63; }

function ____0weu9p4h928a(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/getVoiceStates" { export = ____0weu9p4h928a; }

function ____0wo189vn4i7i(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/getVoiceStatesForChannel" { export = ____0wo189vn4i7i; }

function ____0bmilv3i9nt8(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/hasVideo" { export = ____0bmilv3i9nt8; }

function ____0mbvfnb8r4k(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/isCurrentClientInVoiceChannel" { export = ____0mbvfnb8r4k; }

function ____0hrgpv9t0e8(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/isInChannel" { export = ____0hrgpv9t0e8; }

function ____0jbcnrdpqc(...args: any[]): any;
declare module "@acord/modules/common/VoiceStateStore/__getLocalVars" { export = ____0jbcnrdpqc; }

const ____0sjr8f0p98v = { getAllVoiceStates: ____0kebt9falhvf, getCurrentClientVoiceChannelId: ____0sne4hanq5dt, getUserVoiceChannelId: ____011pste9uloh8, getVideoVoiceStatesForChannel: ____0efes35i3f66, getVoiceState: ____0gd536416m28, getVoiceStateForChannel: ____0q0matp8ns2a, getVoiceStateForSession: ____05f5niojc64m, getVoiceStateForUser: ____0pvn29c9t63, getVoiceStates: ____0weu9p4h928a, getVoiceStatesForChannel: ____0wo189vn4i7i, hasVideo: ____0bmilv3i9nt8, isCurrentClientInVoiceChannel: ____0mbvfnb8r4k, isInChannel: ____0hrgpv9t0e8, __getLocalVars: ____0jbcnrdpqc }
//#endregion

//#region constants
declare module "@acord/modules/common/constants" { export = ____09iocb4gcbad } 

//#region Permissions
declare module "@acord/modules/common/constants/Permissions" { export = ____0p0uqtpt6886 } 

const ____0p0uqtpt6886 = {  }
//#endregion

const ____09iocb4gcbad = { Permissions: ____0p0uqtpt6886 }
//#endregion

//#region i18n
declare module "@acord/modules/common/i18n" { export = ____0gwvv0u2n2m } 

function ____0um4brmmvvod(...args: any[]): any;
declare module "@acord/modules/common/i18n/getAvailableLocales" { export = ____0um4brmmvvod; }

function ____054wol7cou2k(...args: any[]): any;
declare module "@acord/modules/common/i18n/getDefaultLocale" { export = ____054wol7cou2k; }

function ____0oc8bwj5qoke(...args: any[]): any;
declare module "@acord/modules/common/i18n/getLanguages" { export = ____0oc8bwj5qoke; }

function ____0bu1clqauguv(...args: any[]): any;
declare module "@acord/modules/common/i18n/getLocale" { export = ____0bu1clqauguv; }

function ____0almssalvubj(...args: any[]): any;
declare module "@acord/modules/common/i18n/getLocaleInfo" { export = ____0almssalvubj; }

function ____0mh1so3ulbkp(...args: any[]): any;
declare module "@acord/modules/common/i18n/setLocale" { export = ____0mh1so3ulbkp; }

function ____0f84bnp11tr4(...args: any[]): any;
declare module "@acord/modules/common/i18n/setUpdateRules" { export = ____0f84bnp11tr4; }

function ____085fcl2258f1(...args: any[]): any;
declare module "@acord/modules/common/i18n/updateMessagesForExperiment" { export = ____085fcl2258f1; }

const ____015159g4rr4h = "tr"
declare module "@acord/modules/common/i18n/_chosenLocale" { export = ____015159g4rr4h; }

//#region Messages
declare module "@acord/modules/common/i18n/Messages" { export = ____0wqftugsbmc7 } 

const ____0wqftugsbmc7 = {  }
//#endregion

const ____0gwvv0u2n2m = { getAvailableLocales: ____0um4brmmvvod, getDefaultLocale: ____054wol7cou2k, getLanguages: ____0oc8bwj5qoke, getLocale: ____0bu1clqauguv, getLocaleInfo: ____0almssalvubj, setLocale: ____0mh1so3ulbkp, setUpdateRules: ____0f84bnp11tr4, updateMessagesForExperiment: ____085fcl2258f1, _chosenLocale: ____015159g4rr4h, Messages: ____0wqftugsbmc7 }
//#endregion

//#region modals
declare module "@acord/modules/common/modals" { export = ____0c1uvcgriww8 } 

function ____0t1t90tvfj5p(...args: any[]): any;
declare module "@acord/modules/common/modals/ModalComponents" { export = ____0t1t90tvfj5p; }

function ____0js3fns5vb4j(...args: any[]): any;
declare module "@acord/modules/common/modals/ModalRoot" { export = ____0js3fns5vb4j; }

//#region actions
declare module "@acord/modules/common/modals/actions" { export = ____03n5i1mqkmh4f } 

function ____09a8loo8aom2(...args: any[]): any;
declare module "@acord/modules/common/modals/actions/close" { export = ____09a8loo8aom2; }

function ____0l10i72chck(...args: any[]): any;
declare module "@acord/modules/common/modals/actions/show" { export = ____0l10i72chck; }

const ____03n5i1mqkmh4f = { close: ____09a8loo8aom2, show: ____0l10i72chck }
//#endregion

const ____0c1uvcgriww8 = { ModalComponents: ____0t1t90tvfj5p, ModalRoot: ____0js3fns5vb4j, actions: ____03n5i1mqkmh4f }
//#endregion

//#region uuid
declare module "@acord/modules/common/uuid" { export = ____0es0coifpkht } 

function ____0qpi2ebg0u0l(...args: any[]): any;
declare module "@acord/modules/common/uuid/parse" { export = ____0qpi2ebg0u0l; }

function ____0gpr57b0sjt(...args: any[]): any;
declare module "@acord/modules/common/uuid/unparse" { export = ____0gpr57b0sjt; }

function ____0fi9afhn9msg(...args: any[]): any;
declare module "@acord/modules/common/uuid/v1" { export = ____0fi9afhn9msg; }

function ____07l4gtr3neq6(...args: any[]): any;
declare module "@acord/modules/common/uuid/v4" { export = ____07l4gtr3neq6; }

const ____0es0coifpkht = { parse: ____0qpi2ebg0u0l, unparse: ____0gpr57b0sjt, v1: ____0fi9afhn9msg, v4: ____07l4gtr3neq6 }
//#endregion

const ____0gkhhj2jq1a7 = { ActivityStore: ____0lk5ashk2h4t, Button: ____05l1d4sc34rt, ChannelStore: ____0pnp7hd3eefb, DiscordAPI: ____05qjhd7sffmm, Flux: ____0piv5r26gqaa, FluxDispatcher: ____0avhpvmf236b, GuildMemberStore: ____0oscstih861, InviteStore: ____0ccj22iqw8bj, Markdown: ____01c34245bvo1c, MessageStore: ____0nqi6lt0hs5a, NoteStore: ____0w24khutt7wt, PermissionStore: ____0utw4j72tkec, React: ____0r50219i9n8r, ReactDOM: ____09qq9k9grlus, RelationshipStore: ____02wolv9ek8ibe, Router: ____0w1hrwe48npt, SelectedChannelStore: ____0h5lit15osr5, SelectedGuildStore: ____03usq0svr7rmd, SimpleMarkdown: ____04f43blognls, TypingStore: ____0vmn3hpi0bkk, UserStore: ____0g7alaabtt7i, VoiceStateStore: ____0sjr8f0p98v, constants: ____09iocb4gcbad, i18n: ____0gwvv0u2n2m, modals: ____0c1uvcgriww8, uuid: ____0es0coifpkht }
//#endregion

function ____07t2wgbe3qae(...args: any[]): any;
declare module "@acord/modules/require" { export = ____07t2wgbe3qae; }

//#region webpack
declare module "@acord/modules/webpack" { export = ____0031cwe7s98lm } 

function ____00teqhiuf49kc(...args: any[]): any;
declare module "@acord/modules/webpack/find" { export = ____00teqhiuf49kc; }

function ____0il7rphlqhfe(...args: any[]): any;
declare module "@acord/modules/webpack/findAll" { export = ____0il7rphlqhfe; }

function ____0r11in31lmuk(...args: any[]): any;
declare module "@acord/modules/webpack/findByKeyword" { export = ____0r11in31lmuk; }

function ____0c825h81l1fq(...args: any[]): any;
declare module "@acord/modules/webpack/findByKeywordAll" { export = ____0c825h81l1fq; }

function ____0slwm2ce238h(...args: any[]): any;
declare module "@acord/modules/webpack/findByNestedProps" { export = ____0slwm2ce238h; }

function ____0mh9aqarvbhu(...args: any[]): any;
declare module "@acord/modules/webpack/findByNestedPropsAll" { export = ____0mh9aqarvbhu; }

function ____0ch29wmu7r3t(...args: any[]): any;
declare module "@acord/modules/webpack/findByProperties" { export = ____0ch29wmu7r3t; }

function ____0etrfcdq3m2d(...args: any[]): any;
declare module "@acord/modules/webpack/findByPropertiesAll" { export = ____0etrfcdq3m2d; }

function ____0owl6pape5h9(...args: any[]): any;
declare module "@acord/modules/webpack/findByProps" { export = ____0owl6pape5h9; }

function ____0tbrfjwt18dg(...args: any[]): any;
declare module "@acord/modules/webpack/findByPropsAll" { export = ____0tbrfjwt18dg; }

function ____0f38df2nqfsa(...args: any[]): any;
declare module "@acord/modules/webpack/findByPrototypes" { export = ____0f38df2nqfsa; }

function ____0oaqosmb9t23(...args: any[]): any;
declare module "@acord/modules/webpack/findByPrototypesAll" { export = ____0oaqosmb9t23; }

function ____02fign6es23sh(...args: any[]): any;
declare module "@acord/modules/webpack/findByStrings" { export = ____02fign6es23sh; }

function ____085i9si4gjsp(...args: any[]): any;
declare module "@acord/modules/webpack/findByStringsAll" { export = ____085i9si4gjsp; }

const ____0031cwe7s98lm = { find: ____00teqhiuf49kc, findAll: ____0il7rphlqhfe, findByKeyword: ____0r11in31lmuk, findByKeywordAll: ____0c825h81l1fq, findByNestedProps: ____0slwm2ce238h, findByNestedPropsAll: ____0mh9aqarvbhu, findByProperties: ____0ch29wmu7r3t, findByPropertiesAll: ____0etrfcdq3m2d, findByProps: ____0owl6pape5h9, findByPropsAll: ____0tbrfjwt18dg, findByPrototypes: ____0f38df2nqfsa, findByPrototypesAll: ____0oaqosmb9t23, findByStrings: ____02fign6es23sh, findByStringsAll: ____085i9si4gjsp }
//#endregion

const ____0vk71kahqveq = { common: ____0gkhhj2jq1a7, require: ____07t2wgbe3qae, webpack: ____0031cwe7s98lm }
//#endregion

//#region patcher
declare module "@acord/patcher" { export = ____0p87kejcvsv } 

function ____0gaig6kkmj7i(...args: any[]): any;
declare module "@acord/patcher/after" { export = ____0gaig6kkmj7i; }

function ____0uh133i8ipbk(...args: any[]): any;
declare module "@acord/patcher/before" { export = ____0uh133i8ipbk; }

function ____07imv7min7le(...args: any[]): any;
declare module "@acord/patcher/injectCSS" { export = ____07imv7min7le; }

function ____0ku319ubf87r(...args: any[]): any;
declare module "@acord/patcher/instead" { export = ____0ku319ubf87r; }

function ____0nfqa5qvh1ck(...args: any[]): any;
declare module "@acord/patcher/unpatchAll" { export = ____0nfqa5qvh1ck; }

function ____0mjj7j24i227(...args: any[]): any;
declare module "@acord/patcher/unpatchAllCSS" { export = ____0mjj7j24i227; }

const ____0p87kejcvsv = { after: ____0gaig6kkmj7i, before: ____0uh133i8ipbk, injectCSS: ____07imv7min7le, instead: ____0ku319ubf87r, unpatchAll: ____0nfqa5qvh1ck, unpatchAllCSS: ____0mjj7j24i227 }
//#endregion

//#region ui
declare module "@acord/ui" { export = ____0t9tp6ms5ii8 } 

//#region contextMenus
declare module "@acord/ui/contextMenus" { export = ____05ii1cwe68pq } 

//#region build
declare module "@acord/ui/contextMenus/build" { export = ____0ob45enkhfsp } 

function ____0rilootu5f5s(...args: any[]): any;
declare module "@acord/ui/contextMenus/build/item" { export = ____0rilootu5f5s; }

function ____0onusotf0bln(...args: any[]): any;
declare module "@acord/ui/contextMenus/build/menu" { export = ____0onusotf0bln; }

const ____0ob45enkhfsp = { item: ____0rilootu5f5s, menu: ____0onusotf0bln }
//#endregion

function ____0hp8qgctlbc(...args: any[]): any;
declare module "@acord/ui/contextMenus/open" { export = ____0hp8qgctlbc; }

function ____0e0cf3gvscm9(...args: any[]): any;
declare module "@acord/ui/contextMenus/patch" { export = ____0e0cf3gvscm9; }

const ____05ii1cwe68pq = { build: ____0ob45enkhfsp, open: ____0hp8qgctlbc, patch: ____0e0cf3gvscm9 }
//#endregion

//#region modals
declare module "@acord/ui/modals" { export = ____0p71r1vd67q6 } 

function ____0nflsigod1f7(...args: any[]): any;
declare module "@acord/ui/modals/show" { export = ____0nflsigod1f7; }

const ____0p71r1vd67q6 = { show: ____0nflsigod1f7 }
//#endregion

//#region notices
declare module "@acord/ui/notices" { export = ____0opgsed4r9ol } 

function ____0w3vke4odn56(...args: any[]): any;
declare module "@acord/ui/notices/show" { export = ____0w3vke4odn56; }

const ____0opgsed4r9ol = { show: ____0w3vke4odn56 }
//#endregion

//#region toasts
declare module "@acord/ui/toasts" { export = ____0blvo97u9gf6 } 

function ____013465f83sppp(...args: any[]): any;
declare module "@acord/ui/toasts/show" { export = ____013465f83sppp; }

const ____0blvo97u9gf6 = { show: ____013465f83sppp }
//#endregion

//#region tooltips
declare module "@acord/ui/tooltips" { export = ____01gh2ejct6ahh } 

function ____0terfhhrd4rd(...args: any[]): any;
declare module "@acord/ui/tooltips/create" { export = ____0terfhhrd4rd; }

const ____01gh2ejct6ahh = { create: ____0terfhhrd4rd }
//#endregion

const ____0t9tp6ms5ii8 = { contextMenus: ____05ii1cwe68pq, modals: ____0p71r1vd67q6, notices: ____0opgsed4r9ol, toasts: ____0blvo97u9gf6, tooltips: ____01gh2ejct6ahh }
//#endregion

function ____04hsiif73dcs(...args: any[]): any;
declare module "@acord/unload" { export = ____04hsiif73dcs; }

//#region utils
declare module "@acord/utils" { export = ____0330smv0lkk3 } 

function ____01t05bptr2wk(...args: any[]): any;
declare module "@acord/utils/copyText" { export = ____01t05bptr2wk; }

function ____0it3j6jsuvjq(...args: any[]): any;
declare module "@acord/utils/findInTree" { export = ____0it3j6jsuvjq; }

function ____0svjisj0iw1b(...args: any[]): any;
declare module "@acord/utils/format" { export = ____0svjisj0iw1b; }

function ____0k4qjg782oji(...args: any[]): any;
declare module "@acord/utils/ifExists" { export = ____0k4qjg782oji; }

function ____0g7u5copcp0s(...args: any[]): any;
declare module "@acord/utils/interval" { export = ____0g7u5copcp0s; }

//#region logger
declare module "@acord/utils/logger" { export = ____0dcff21idl5n } 

function ____0f5oc7302uis(...args: any[]): any;
declare module "@acord/utils/logger/log" { export = ____0f5oc7302uis; }

function ____05c7sl52nkqf(...args: any[]): any;
declare module "@acord/utils/logger/warn" { export = ____05c7sl52nkqf; }

function ____0w1gv87dgagd(...args: any[]): any;
declare module "@acord/utils/logger/error" { export = ____0w1gv87dgagd; }

const ____0dcff21idl5n = { log: ____0f5oc7302uis, warn: ____05c7sl52nkqf, error: ____0w1gv87dgagd }
//#endregion

//#region react
declare module "@acord/utils/react" { export = ____0ss7og6uphv } 

function ____0f99tfq1sfg(...args: any[]): any;
declare module "@acord/utils/react/getInstance" { export = ____0f99tfq1sfg; }

function ____0f7t8ni8fnie(...args: any[]): any;
declare module "@acord/utils/react/getOwnerInstance" { export = ____0f7t8ni8fnie; }

function ____0iw9udsun2e7(...args: any[]): any;
declare module "@acord/utils/react/findInTree" { export = ____0iw9udsun2e7; }

function ____0c0bk32pb9km(...args: any[]): any;
declare module "@acord/utils/react/findByDomNode" { export = ____0c0bk32pb9km; }

function ____0hjfnfndb81l(...args: any[]): any;
declare module "@acord/utils/react/getComponents" { export = ____0hjfnfndb81l; }

function ____0oruttlrkw6j(...args: any[]): any;
declare module "@acord/utils/react/getProps" { export = ____0oruttlrkw6j; }

function ____0f8rfqmitlr3(...args: any[]): any;
declare module "@acord/utils/react/getStateNodes" { export = ____0f8rfqmitlr3; }

const ____0ss7og6uphv = { getInstance: ____0f99tfq1sfg, getOwnerInstance: ____0f7t8ni8fnie, findInTree: ____0iw9udsun2e7, findByDomNode: ____0c0bk32pb9km, getComponents: ____0hjfnfndb81l, getProps: ____0oruttlrkw6j, getStateNodes: ____0f8rfqmitlr3 }
//#endregion

function ____03gi41scsnp5(...args: any[]): any;
declare module "@acord/utils/sleep" { export = ____03gi41scsnp5; }

function ____0ogl8mpsa86g(...args: any[]): any;
declare module "@acord/utils/timeout" { export = ____0ogl8mpsa86g; }

const ____0330smv0lkk3 = { copyText: ____01t05bptr2wk, findInTree: ____0it3j6jsuvjq, format: ____0svjisj0iw1b, ifExists: ____0k4qjg782oji, interval: ____0g7u5copcp0s, logger: ____0dcff21idl5n, react: ____0ss7og6uphv, sleep: ____03gi41scsnp5, timeout: ____0ogl8mpsa86g }
//#endregion

//#region websocket
declare module "@acord/websocket" { export = ____0qqqs08uofwf } 

const ____0qqqs08uofwf = {  }
//#endregion

const main = { dev: ____0n7vmhlmww5l, dom: ____0og9oshm4kgd, events: ____0ge4rgog4s2s, extensions: ____0el8qio717ro, i18n: ____0l4ec28b1k4h, modules: ____0vk71kahqveq, patcher: ____0p87kejcvsv, ui: ____0t9tp6ms5ii8, unload: ____04hsiif73dcs, utils: ____0330smv0lkk3, websocket: ____0qqqs08uofwf }
//#endregion
