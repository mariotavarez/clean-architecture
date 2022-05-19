import { useEffect, useState } from "react";
import ProductList from "./producList";
import ProductForn from "./productForm";

const Products = () => {
  const [onRefresh, setOnRefresh] = useState(false);

  useEffect(() => {
    setOnRefresh(true);
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <ProductList onRefresh={onRefresh} />

      <ProductForn setOnRefresh={setOnRefresh} />
    </div>
  );
};

export default Products;
