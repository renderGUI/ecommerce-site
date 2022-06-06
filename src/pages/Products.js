import { productsContext } from "../contexts/productsContext";
import { useContext } from "react";
import Product from "../components/products-page/Product";
import FilterButton from "../components/products-page/FilterButton";

const Products = () => {
  const { products } = useContext(productsContext);
  return (
    <div>
      <h1>PRODUCTS PAGE</h1>
      <FilterButton />
      {products.map((product) => {
        return (
          <Product
            item={product.item}
            price={product.price}
            id={product.id}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

export default Products;
