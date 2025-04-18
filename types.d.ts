interface Product {
  title: string;
  price: number;
}
type EventsType = {
  CREATE_PRODUCT: Product;
  UPDATE_PRODUCT: Product;
  GET_PRODUCT: Product;
  DELETE_PRODUCT: void;
};

interface Window {
  api: {
    createProduct: (data: Product) => Promise<Product>;
    updateProduct: (data: Partial<Product>) => Promise<Product>;
    deleteProduct: (id: number) => void;
    getProduct: (id: number) => Promise<Product>;
  };
}
