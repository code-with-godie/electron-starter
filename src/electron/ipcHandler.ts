import { ipcMainHandle } from "./util.js";

const createProduct = async (product: Product): Promise<Product> => {
  console.log(product);

  return { title: "create product", price: 30 };
};
const updateProduct = async (): Promise<Product> => {
  return { title: "update product", price: 30 };
};
const getProduct = async (): Promise<Product> => {
  return { title: "get product", price: 30 };
};
const deleteProduct = async (): Promise<void> => {
  try {
    return;
  } catch (error) {}
};
export function setupIpcHandlers() {
  ipcMainHandle("CREATE_PRODUCT", createProduct);
  ipcMainHandle("GET_PRODUCT", getProduct);
  ipcMainHandle("UPDATE_PRODUCT", updateProduct);
  ipcMainHandle("DELETE_PRODUCT", deleteProduct);
}
