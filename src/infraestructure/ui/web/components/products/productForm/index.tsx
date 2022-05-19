// Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import Products from "../../../../../../domain/entities/products.entities";
import ProductController from "../../../../../controllers/products.controller";

const ProductForn = ({ setOnRefresh }: { setOnRefresh: any }) => {
  const { register, handleSubmit } = useForm<Products>();

  const handleCreateProduct = async (product: Products) => {
    try {
      const response = await ProductController.getInstance().createProduct(
        product
      );
      console.log("entra");

      setOnRefresh(true);
    } catch (error) {
      alert("Error");
      setOnRefresh(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <input
          {...register("name")}
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
          {...register("amount")}
          type="number"
          name="amount"
          placeholder="Amount"
        />

        <input type="submit" value="Agregar" />
      </form>
    </>
  );
};

export default ProductForn;
