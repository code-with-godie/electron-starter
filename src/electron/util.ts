import { ipcMain } from "electron";
export function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

export function ipcMainHandle<
  Key extends keyof EventsType,
  Args extends any[] = [],
  ReturnType = EventsType[Key]
>(key: Key, handler: (...args: Args) => Promise<ReturnType>) {
  ipcMain.handle(key, (_event: Electron.IpcMainInvokeEvent, ...args: Args) => {
    return handler(...args);
  });
}

export function ipcMainOn<Key extends keyof EventsType>(
  key: Key,
  handler: (payload: EventsType[Key]) => void
) {
  ipcMain.on(key, (_, payload) => {
    return handler(payload);
  });
}
