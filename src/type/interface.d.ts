export interface ElectronMouseAPI {
  getData: () => Promise<void>;
}

declare global {
  interface Window {
    ElectronMouse: ElectronMouseAPI;
  }
}
