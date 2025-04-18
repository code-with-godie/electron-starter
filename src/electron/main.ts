import { app, BrowserWindow } from "electron";
import { isDev } from "./util.js";
import { getPreloadPath, getUIPath } from "./pathResolver.js";
import { setupIpcHandlers } from "./ipcHandler.js";
const isMac = process.platform === "darwin";

async function initializeApp() {
  try {
    setupIpcHandlers();
    createMainWindow();
  } catch (error) {
    console.error("Application initialization failed:", error);
    app.quit();
  }
}
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
    // frame: false,
  });
  // mainWindow.setWindowButtonVisibility(true);
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(getUIPath());
  }
}

app.whenReady().then(() => {
  initializeApp();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});
