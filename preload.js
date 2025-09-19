const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('fileAPI', {
  openFile: () => ipcRenderer.invoke('dialog:open-file')
});
