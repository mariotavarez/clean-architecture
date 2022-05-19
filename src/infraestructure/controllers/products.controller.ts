import Products from "../../domain/entities/products.entities";
import ApiRepository from "../repositories/products.repository";

class ProductController {
  private constructor() {}

  public static getInstance(): ProductController {
    return new ProductController();
  }

  public async getProducts(): Promise<Products[]> {
    return ApiRepository.getInstance().getProducts();
  }

  public async createProduct(product: Products): Promise<Products> {
    return ApiRepository.getInstance().createProduct(product);
  }

  public async updateProduct(product: Products): Promise<Products> {
    return ApiRepository.getInstance().updateProduct(product);
  }
}

export default ProductController;
