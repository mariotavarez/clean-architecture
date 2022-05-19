import Products from "../entities/products.entities";

export interface ProductsRepository {
  getProducts(): Promise<Products[]>;
  createProduct(product: Products): Promise<Products>;
  updateProduct(product: Products): Promise<Products>;
}
