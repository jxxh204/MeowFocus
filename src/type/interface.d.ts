export interface Electron {
  sendMessage: (action, args) => void;
}

export interface Versions {
  ping: () => void;
}

declare global {
  interface Window {
    electron: Electron;
    versions: Versions;
  }
}
