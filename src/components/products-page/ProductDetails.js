import classes from "./ProductDetails.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/items/${params.productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch {
        throw new Error("Something went wrong!");
      }
    };

    fetchProduct();
  }, [params.productId]);

  return (
    <div className={classes.container}>
      <h2>{product.item}</h2>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className={classes.price}>${product.price}</p>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductDetails;
