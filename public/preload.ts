import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld("electron", {
  sendMessage: function (action, args) {
    console.log("1차", args);
    ipcRenderer.send(action, args);
  },
});
