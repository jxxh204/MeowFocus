"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("versions", {
    node: function () { return process.versions.node; },
    chrome: function () { return process.versions.chrome; },
    electron: function () { return process.versions.electron; }
});
electron_1.contextBridge.exposeInMainWorld("electron", {
    sendMessage: function (action, args) {
        console.log("1차", args);
        electron_1.ipcRenderer.send(action, args);
    }
});
