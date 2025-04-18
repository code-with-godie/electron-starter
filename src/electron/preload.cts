const { ipcRenderer, contextBridge } = require("electron");
contextBridge.exposeInMainWorld("api", {
  createProduct: (data: Product) => ipcInvoke("CREATE_PRODUCT", data),
  getProduct: (id: number) => ipcRenderer.invoke("GET_PRODUCT", id),
  updateProduct: (data: Partial<Product>) =>
    ipcRenderer.invoke("UPDATE_PRODUCT", data),
  deleteProduct: (id: number) => ipcRenderer.invoke("DELETE_PRODUCT", id),
} satisfies Window["api"]);

function ipcInvoke<Key extends keyof EventsType>(
  key: Key,
  data?: EventsType[Key]
): Promise<EventsType[Key]> {
  return ipcRenderer.invoke(key, data);
}
