import { productsContext } from "../contexts/productsContext";
import { useContext } from "react";
import Product from "../components/products-page/Product";

const Products = () => {
  const { products } = useContext(productsContext);
  return (
    <div>
      <h1>PRODUCTS PAGE</h1>
      {products.map((product) => {
        return (
          <Product item={product.item} price={product.price} key={product.id} />
        );
      })}
    </div>
  );
};

export default Products;
