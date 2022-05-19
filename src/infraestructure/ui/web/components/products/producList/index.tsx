// Hooks
import { useEffect, useState } from "react";
import Products from "../../../../../../domain/entities/products.entities";
// Controllers
import ProductController from "../../../../../controllers/products.controller";

const ProductList = ({ onRefresh }: { onRefresh: boolean }) => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    if (onRefresh) {
      ProductController.getInstance().getProducts().then(setProducts);
    }
  }, [onRefresh]);

  return (
    <>
      {products.length > 0 && (
        <ul>
          {products.map(({ name, amount }) => (
            <li key={name}> {`${name} - ${amount}`} </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductList;
