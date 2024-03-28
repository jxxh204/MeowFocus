export interface Electron {
  sendMessage: (action, args) => void;
}
export type MouseMove = {
  mouseX: number;
  mouseY: number;
};
export interface Versions {
  ping: () => void;
}

declare global {
  interface Window {
    electron: Electron;
    versions: Versions;
  }
}
