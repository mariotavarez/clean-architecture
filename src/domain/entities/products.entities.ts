import { Entity } from "./entity.entities";

class Products extends Entity {
  name: string;
  amount: number;
  constructor(name: string, amount: number) {
    super();
    this.name = name;
    this.amount = amount;
  }
}

export default Products;
