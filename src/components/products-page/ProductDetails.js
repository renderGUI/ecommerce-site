import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>{product.item}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetails;
