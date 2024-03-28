import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

// contextBridge.exposeInMainWorld('page', {
//   setTitle: (title) => ipcRenderer.send('set-title', title)
// })

contextBridge.exposeInMainWorld("ElectronMouse", {
  getData: (params) => console.log(params),
  // ipcRenderer.send(params)
});
