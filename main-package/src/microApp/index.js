import { addGlobalUncaughtErrorHandler } from "qiankun";

// function getActiveRule(routerPrefix) {
//   return (location) => location.pathname.startsWith(routerPrefix);
// }

addGlobalUncaughtErrorHandler((err) => {
  console.log(err);
});

export const appGroup = {
  "sub-app1": {
    name: "sub-app1",
    entry: "//localhost:8801/",
    container: "#sub-app1",
    // activeRule: getActiveRule("/sub-app1"),
  },
  "sub-app2": {
    name: "sub-app2",
    entry: "//localhost:8802/",
    container: "#sub-app2",
    // activeRule: getActiveRule("/sub-app2"),
  },
};

export const appList = Object.keys(appGroup).map((key) => appGroup[key]);

export default appGroup;
