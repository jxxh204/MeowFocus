// main.ts
import { BrowserWindow, app, Tray, nativeImage, Menu, ipcMain } from "electron";
import * as path from "path";
import * as isDev from "electron-is-dev";

const BASE_URL = "http://localhost:3000";
// BrowserWindow 객체는 전역으로 관리합니다.
// 전역이 아닌 경우 자바스크립트 가비지 컬렉팅 발생 시 의도치 않게 browser window가 닫힐 수 있습니다.
let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;

const createTray = () => {
  const icon = nativeImage.createFromPath(path.join(__dirname, "icon.png"));
  // .resize({ width: 16, height: 16 })
  tray = new Tray(icon);
};
const handelTrayEvent = () => {
  if (tray) {
    tray.setToolTip("This is my application.");
    tray.on("right-click", toggleWindow);
    tray.on("double-click", toggleWindow);
    tray.on("click", function (event) {
      toggleWindow();
    });
  }
};
const getWindowPosition = () => {
  if (tray) {
    const windowBounds = mainWindow?.getBounds();
    const trayBounds = tray.getBounds();

    // Center window horizontally below the tray icon
    if (windowBounds) {
      const x = Math.round(
        trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
      );

      // Position window 4 pixels vertically below the tray icon
      const y = Math.round(trayBounds.y + trayBounds.height + 4);

      return { x: x, y: y };
    }
  }
};
const showWindow = () => {
  const position = getWindowPosition();
  if (position) mainWindow?.setPosition(position?.x, position?.y, false);
  mainWindow?.show();
  mainWindow?.focus();
};

const toggleWindow = () => {
  if (mainWindow?.isVisible()) {
    mainWindow?.hide();
  } else {
    showWindow();
  }
};

ipcMain.on("show-window", () => {
  showWindow();
});

const createWindow = () => {
  // browser window를 생성합니다.
  mainWindow = new BrowserWindow({
    width: 300,
    height: 450,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: true,
    // minWidth: 1281,
    // minHeight: 800,
    // backgroundColor: "white",
    icon: path.join(__dirname, "AppIcon.jpg"),
    webPreferences: {
      devTools: isDev,
      // nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
      backgroundThrottling: false,
    },
  });
  // 항상 위
  mainWindow.setAlwaysOnTop(true, "screen-saver");
  // 화면 변경하더라도 항상 위
  mainWindow.setVisibleOnAllWorkspaces(true);

  // 앱의 index.html을 로드합니다.
  if (isDev) {
    // 개발 모드인 경우
    mainWindow.loadURL(BASE_URL); // 개발 도구에서 호스팅하는 주소로 로드합니다.
    mainWindow.webContents.openDevTools({ mode: "detach" }); // DevTools를 엽니다.
  } else {
    // 프로덕션 모드인 경우
    mainWindow.loadURL(`file://${path.join("index.html")}`);
    // mainWindow.loadFile(path.join("/build/index.html")); //
  }
};

// Electron이 준비되면 whenReady 메서드가 호출되어,
// 초기화 및 browser window를 생성합니다.

app.whenReady().then(() => {
  createWindow();
  // showWindow();
  createTray();
  handelTrayEvent();
  // Linux와 Winodws 앱은 browser window가 열려 있지 않을 때 종료됩니다.
  // macOS는 browser window가 열려 있지 않아도 계속 실행되기 때문에,
  // browser window가 열려 있지 않을 때 앱을 활성화 하면 새로운 browser window를 열어줍니다.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Linux와 Winodws에서는 모든 창을 종료하면 일반적으로 앱이 완전히 종료됩니다.
// macOS(darwin)가 아닌 경우, 'window-all-closed' 이벤트가 발생했을 때, 앱을 종료합니다.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
