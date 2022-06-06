import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();

  const viewDetailsHandler = () => {
    navigate(`/products/${props.id}`);
  };
  return (
    <div onClick={viewDetailsHandler}>
      <h2>{props.item}</h2>
      <p>${props.price}</p>
    </div>
  );
};

export default Product;
