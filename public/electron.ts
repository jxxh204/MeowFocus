// main.ts
import {
  BrowserWindow,
  app,
  Tray,
  nativeImage,
  ipcMain,
  globalShortcut,
  screen,
} from "electron";
import * as path from "path";
import * as isDev from "electron-is-dev";
import { MouseMove } from "../src/type/interface";

const BASE_URL = "http://localhost:3000";
// BrowserWindow 객체는 전역으로 관리합니다.
// 전역이 아닌 경우 자바스크립트 가비지 컬렉팅 발생 시 의도치 않게 browser window가 닫힐 수 있습니다.
let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;
const initHeight = 300;

const createTray = () => {
  const icon = nativeImage.createFromPath(path.join(__dirname, "tray.png"));
  // .resize({ width: 16, height: 16 })
  tray = new Tray(icon);
};
const showMenu = () => {};
const handelTrayEvent = () => {
  if (tray) {
    tray.setToolTip("This is my application.");
    tray.on("right-click", showMenu);
    tray.on("double-click", toggleWindow);
    tray.on("click", toggleWindow);
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
const handleWindow = () => {
  if (mainWindow) {
    // 항상 위
    mainWindow.setAlwaysOnTop(true, "screen-saver");
    // 화면 변경하더라도 항상 위
    mainWindow.setVisibleOnAllWorkspaces(true);
    // 포커스를 잃었을 경우
    // mainWindow.on("blur", () => {
    //   mainWindow?.hide();
    // });
  }
};

const toggleWindow = () => {
  if (mainWindow?.isVisible()) {
    mainWindow?.hide();
  } else {
    showWindow();
  }
};

const createWindow = () => {
  // browser window를 생성합니다.
  mainWindow = new BrowserWindow({
    width: 400,
    height: initHeight,
    minHeight: 50,
    maxHeight: 900,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    darkTheme: false,
    movable: false,
    transparent: false,
    icon: path.join(__dirname, "icon.png"),
    // backgroundColor: "white",
    vibrancy: "popover", // in my case...
    visualEffectState: "followWindow",
    webPreferences: {
      devTools: isDev,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
      backgroundThrottling: false,
      contextIsolation: true,
    },
  });

  // 앱의 index.html을 로드합니다.
  if (isDev) {
    // 개발 모드인 경우
    mainWindow.loadURL(BASE_URL); // 개발 도구에서 호스팅하는 주소로 로드합니다.
    mainWindow.webContents.openDevTools({ mode: "detach" }); // DevTools를 엽니다.
  } else {
    // 프로덕션 모드인 경우
    // mainWindow.loadURL(`file://${path.join("./index.html")}`);
    mainWindow.loadURL(`file://${__dirname}/index.html`);
  }
};

// Electron이 준비되면 whenReady 메서드가 호출되어,
// 초기화 및 browser window를 생성합니다.
const screenHandler = () => {
  screen.on("display-added", () => {
    // 화면 추가시 처리
    console.log("화면추가");
  });

  screen.on("display-removed", () => {
    // 화면 제거시 처리
    console.log("화면제거");
  });
};

const appReady = () => {
  createWindow();
  handleWindow();
  createTray();
  handelTrayEvent();
  mainWindow?.webContents.once("dom-ready", () => {
    showWindow();
  });
  mainWindow?.isDestroyed();
  mouseIpcProtocol();
};
app.whenReady().then(appReady).then(screenHandler);
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    appReady();
  }
});
app.on("browser-window-focus", () => {
  globalShortcut.register("CommandOrControl+W", () => {
    // Prevent the default behavior
    console.log("CommandOrControl+W is disabled");
  });
});
app.on("browser-window-blur", () => {
  globalShortcut.unregister("CommandOrControl+W");
});

// Linux와 Winodws에서는 모든 창을 종료하면 일반적으로 앱이 완전히 종료됩니다.
// macOS(darwin)가 아닌 경우, 'window-all-closed' 이벤트가 발생했을 때, 앱을 종료합니다.
app.on("will-quit", () => {
  globalShortcut.unregister("CommandOrControl+W");
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
// ipcMain

ipcMain.on("show-window", () => {
  showWindow();
});
//크기 변경
ipcMain.on("textfield-available", () => {
  const windowBounds = mainWindow?.getBounds();
  if (windowBounds) {
    const newHeight = initHeight + 40;

    mainWindow?.setBounds({ height: newHeight });
  }
});
ipcMain.on("textfield-disable", () => {
  const windowBounds = mainWindow?.getBounds();
  if (windowBounds) {
    mainWindow?.setBounds({ height: initHeight });
  }
});

const mouseIpcProtocol = () => {
  let _mouseDiffX;
  let _mouseDiffY;
  ipcMain.on("MOUSE_MOVE", (e, { mouseX, mouseY }: MouseMove) => {
    // if (isDown) {
    //   const position = getWindowPosition();
    //   if (position) {
    //     console.log(mouseX, position.x);
    //     const distanceX = mouseX - position.x;
    //     const x = mouseX - distanceX;

    //     const distanceY = mouseY - position.y;
    //     const y = mouseY - distanceY;
    //     // mainWindow?.setPosition(x, y, false);
    //     mainWindow?.setBounds({ x, y });
    //   }
    // }

    const newX = mouseX - _mouseDiffX;
    const newY = mouseY - _mouseDiffY;
    // mainWindow?.setBounds({ x: newX, y: newY });
    mainWindow?.setPosition(newX, newY, false);
  });
  ipcMain.on("MOUSE_DOWN", (e, { mouseX, mouseY }: MouseMove) => {
    const bounds = mainWindow?.getBounds();
    if (bounds) {
      _mouseDiffX = mouseX - bounds.x; // 처음 마우스가 클릭된 위치
      _mouseDiffY = mouseY - bounds.y;
    }
  });
  ipcMain.on("MOUSE_UN", (e, { mouseX, mouseY }: MouseMove) => {
    // isDown = false;
  });
};
