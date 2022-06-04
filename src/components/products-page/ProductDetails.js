import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      <p>Product details about product number {params.productId}</p>
    </div>
  );
};

export default ProductDetails;
