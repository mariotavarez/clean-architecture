import Http from "../http";
import { ProductsRepository } from "../../domain/interfaces/products.interface";
import Products from "../../domain/entities/products.entities";

class ApiRepository implements ProductsRepository {
  private constructor() {}

  public static getInstance(): ApiRepository {
    return new ApiRepository();
  }

  getProducts(): Promise<Products[]> {
    const response = Http.getInstance().get<Products[]>("");
    return response;
  }
  createProduct(product: Products): Promise<Products> {
    const response = Http.getInstance().post<Products>("", product);
    return response;
  }
  updateProduct(product: Products): Promise<Products> {
    const response = Http.getInstance().put<Products>("", product);
    return response;
  }
}

export default ApiRepository;
