import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./utils.js";

// const isDev = process.env.NODE_ENV === "development";
const isMac = process.platform === "darwin";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Test = string;
const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:3000");
    // mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
};

app.whenReady().then(() => {
  createMainWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});
