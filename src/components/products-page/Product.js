import classes from "./Product.module.scss";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();

  const viewDetailsHandler = () => {
    navigate(`/products/${props.id}`);
  };
  return (
    <div className={classes.productContainer} onClick={viewDetailsHandler}>
      <h3>{props.item}</h3>
      <p>${props.price}</p>
    </div>
  );
};

export default Product;
