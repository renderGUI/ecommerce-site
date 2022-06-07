import { productsContext } from "../contexts/productsContext";
import { useState, useContext } from "react";
import Product from "../components/products-page/Product";
import FilterButton from "../components/products-page/FilterButton";

const Products = () => {
  const { products } = useContext(productsContext);
  const [filterType, setFilterType] = useState("default");

  if (filterType === "ascending") {
    products.sort((a, b) => {
      return a.price - b.price;
    });
  }

  if (filterType === "descending") {
    products.sort((a, b) => {
      return b.price - a.price;
    });
  }

  return (
    <div>
      <h1>PRODUCTS PAGE</h1>
      <FilterButton setFilterType={setFilterType} />
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
